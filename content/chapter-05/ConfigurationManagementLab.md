# Configuration Management Lab

## Objectives

* Evaluate principals of configuration management 
* Experiment with a couple of options

## Steps

1. Ssh into the previously created ec2 instance we used to deploy spring-boot service using terrafrom
1. In the lab we will use node.js to cover different programming language
1. Let's install node.js: `sudo apt install nodejs npm -y`
1. Validate node.js is installed: `nodejs --version && npm --version`
1. Expected output:
```
v4.2.6
3.5.2
```
1. Create new folder for node.js express application:
```
cd ~/
mkdir ./nodejs-express
cd ./nodejs-express
```
1. Initialize package.json: `npm init -y`
1. Install express dependency or an [npm package](https://docs.npmjs.com/getting-started/packages): `npm install --save express`
1. Create new file using your favorite text editor e.g.: `nano ./index.js`
1. Paste following content from [hello-world expressjs.com](https://expressjs.com/en/starter/hello-world.html) example:
  ```
  const express = require('express')
  const app = express()

  app.get('/', (req, res) => res.send('Hello World!\n'))

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  ```
1. Save the file and run the program: `nodejs index.js`
1. Open another ssh session into the same instance and access the running application: `curl localhost:3000`
1. Expected output: `Hello World!`
1. Return to the first ssh session and stop the process with `Ctrl-C`
1. Now we will create a parameter to listen on a dynamic port, rather than a hard-coded port
1. Edit the `./index.js`
1. Replace the line: `app.listen(3000, () => console.log('Example app listening on port 3000!'))` with: 
```
const port = process.env.PORT || 3000; //Use environment variable or default to port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```
1. Save and re-run the program: `nodejs index.js`
1. You should see a print out: `Example app listening on port 3000!` as we have not yet supplied an environment variable
1. Stop the process with `Ctrl-C`
1. Set an environment variable with bash: `export PORT=3001`
1. Re-run the program: `nodejs index.js`
1. What port number is listed now in the output?
1. Are there other methods to configure the application?
1. Separating configuration from the source code is another option
1. Edit ./index.js to replace `const port = process.env.PORT || 3000;` with: 
  `const port = require('./config.json').port;`
1. Create config.json file with the following content:
```
{
  "port": 3002
}
```
1. Save the file and re-run the program: `nodejs index.js`
1. What's the port number has been listed now in the output?
1. What are the pros and cons for each of these approaches?
1. Are there other options available?
1. There is a plenty of tools and services available, experiment and adopt:
  * https://www.consul.io/
  * https://github.com/coreos/etcd
  * https://sysgears.com/articles/managing-configuration-of-distributed-system-with-apache-zookeeper/
  * https://github.com/ha/doozerd
1. Some differentiate between configuration management and secrets management
1. There are tools specifically tailored to secrets management:
  * https://www.vaultproject.io/
  * https://square.github.io/keywhiz/