# Geo collocation design patterns

## Objectives

* Create a Restful end-point using Node.js running on a single EC2 instance
* Take down the instance to simulate a failure
* Re-deploy the Restful end-point to two EC2 instance in two availability zones
* Create Elastic Load Balancer to make use of two instances with a single entry-point
* Instructor will create an instance of a highly available Aws Aurora Database as a back-end for the service

## Steps

### Instructor

1. Create Aws Aurora 
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

1. Create or reuse an existing EC2 instance to launch a Node.Js Restful end-point to fetch data from the database
1. Make sure the instance is in the same Vpc as the Aurora Db
1. Login into the instance and install node.js: `sudo apt-get install nodejs -y`
1. Create new folder: `mkdir ./nodejs-auroradb && cd nodejs-auroradb`
1. Initialize package.json: `npm init -y`
1. Install dependencies: `npm install --save mysql restify`
1. Create new files with a text editor e.g. `nano ./index.js`
1. Paste the content:
```
const restify = require('restify');
const server = restify.createServer();

const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'cloudmigration-auroradb-cluster-1.cluster-cnvzarwo2lnr.us-east-2.rds.amazonaws.com',
  user     : 'root',
  password : 'qWerty6%4321',
  database : 'helloworlddb'
});

connection.connect();

const returnMessage = (req, res, next) => {
  
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  
  const payload = {
    id: 1,
    message: 'hello'
  };
  res.send(payload);
  next();
};

server.get('/message/:id', returnMessage);

server.listen(80, () => {
  console.log('%s listening at %s', server.name, server.url);
});

```

# Notes to author
* Launch an application with a front-end and a back-end
* Simulate a failure to demonstrate an outage
* Review options on public cloud portal to convert the application into highly available
* Demonstrate impact of a simulated failure with a highly available design



* Deploy single EC2 instance with Node.js connecting to highly-available Aws Aurora Db
* Shutdown EC2 instance to visualize an impact of a failed VM or process
* Create another EC2 instance in a different availability zone
* Create Elastic Load Balancer and configure it to use 