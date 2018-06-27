# High Availability Lab

## Objectives

* Create a Restful end-point using Node.js running on a single EC2 instance
* Take down the instance to simulate a failure
* Re-deploy the Restful end-point to two EC2 instance in two availability zones
* Create Elastic Load Balancer to make use of two instances with a single entry-point
* Instructor will create an instance of a highly available Aws Aurora Database as a back-end for the service

## Steps

### Instructor

1. Create Aws Rds Aurora `MySql` Instance
1. DB instance class: `db2.small instance`
1. Select `Read replica`
1. Instance name: `cloudmigration-auroradb`
1. Username: `root`
1. Password: `qWerty6%4321`
1. Chose Existing Security group: `default`
1. Leave the rest to their defaults
1. Login to an EC2 instance
1. Install mysql (unless you are re-using instance from previous labs): `sudo apt-get install mysql-server`
1. Connect to the Aurora Db: `mysql -u root -p -h cluster-end-point-from-aws-web-console`
1. Create database, table and insert some data:
```
create database helloworlddb;
use helloworlddb;
create table message (id int, text nvarchar(256), primary key (id));
insert into message values(1, 'hello world!');
select * from message;
```
1. Expected output:
```
+----+--------------+
| id | text         |
+----+--------------+
|  1 | hello world! |
+----+--------------+
1 row in set (0.00 sec)
```
1. We have got a highly available database running, any questions before you take over?


### Participants

1. Reuse an existing EC2 instance to launch a Node.Js Restful end-point to fetch data from the database
1. Make sure the instance is in the same Vpc as the Aurora Db Instructor is creating in parallel
1. Login into the EC2 instance
1. Create new folder: `mkdir ./nodejs-auroradb && cd nodejs-auroradb`
1. Initialize package.json: `npm init -y`
1. Install dependencies: `npm install --save mysql restify`
1. Create new file with a preferred text editor e.g. `nano ./index.js`
1. Paste the content:
```
const restify = require('restify');
const server = restify.createServer();
const errors = require('restify-errors');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qWerty6%4321',
  database : 'helloworlddb'
});

connection.connect();

  const returnMessage = (req, res, next) => {
    
    try {
      const id = parseInt(req.params.id);
      const sql = 'select * from message where id = {id} limit 1;'.replace('{id}', id);
      connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        
        if (results.length > 0) {
          const payload = {
            id: results[0].id,
            message: results[0].text
          };
          res.send(payload);
        } else {
          return next(new errors.NotFoundError('Not found'));
        }
        next();
      });
    } catch (ex) {
      return next(new errors.InternalServerError(JSON.stringify(ex)));
    } 
    
  };

server.get('/message/:id', returnMessage);

server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
```
1. Save and exit the editor
1. Launch the service: `nodejs ./index.js`
1. Open another ssh session into the EC2 instance and poke around the end-point:
```
curl localhost:3000/message/1
curl localhost:3000/message/2
curl localhost:3000/message/3
```
1. Stop the mysqld service: `sudo service mysqld stop`
1. Try re-running the curl command
1. Check the terminal window from where we have launched the `nodejs ./index.js` command, any errors there?
1. How many things just have stopped working?
1. In order to improve the situation:
  * Switch to highly available Aurora end-point provisioned by the instructor
  * Deploy a new EC2 Ubuntu instance in a different availability zone and setup the same node.js end-point to run
  * Take a deep breath and configure Elastic Load Balancer -> Application Load Balancer
  * A Target Group will be required first
  * Security group settings will require adjustments too
1. What's the acceptance criteria: you should be able to shutdown one of the two instances and to continue serving traffic from the other instance
1. Aurora on Rds is highly available: no actions required from your end
1. While it is possible to setup a highly available MySql on Aws without Rds, it does take some time and practice
1. Azure, similar to Aws Rds, offers highly available MS Sql, MySql and Cosmos DB, the later with [cross-region availability](https://docs.microsoft.com/en-us/azure/cosmos-db/distribute-data-globally).