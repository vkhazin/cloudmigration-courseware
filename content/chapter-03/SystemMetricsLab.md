# Lab: Tools for Measuring Resource Utilization

* In this lab, we will use two Virtual Machines: one to run a stress test from, and the second instance to run the application being tested on.

* Tester instance
  * Create a small instance to launch the stress test tool, e.g.: AWS EC2 t2.micro, AMI: Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-66506c1c
  * Provision this instance with 8GB of disk space
  * ssh into the instance and install [Apache Bench](https://en.wikipedia.org/wiki/ApacheBench):
    * `sudo apt-get update`
    * `sudo apt-get install apache2-utils`
  * Validate the installation with `man ab`
  * Run a first test to Wikipedia: `ab -n 100 -c 10 "http://en.wikipedia.org/wiki/Main_Page"`


* Application instance
  * Create another small install to install `get_a_book` application and monitor it
  * ssh into the new instance and install `node` and `npm`:
    * `sudo apt-get update`
    * `sudo apt-get install npm`
    * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
  * Install `unzip` utility: `sudo apt install unzip`
  * Install the `nload` tool: `sudo apt-get install nload`
  * Download the application:
    * `curl -L -O https://raw.githubusercontent.com/vkhazin/cloudmigration-courseware/master/lab_support/get_a_book.zip`
  * Unzip the app: `unzip get_a_book.zip`
  * Change directory into the app folder to run it
    * `cd get_a_book`
    * `npm start`


* Testing procedure
  * Form the ssh session into the tester instance access the app:
    * `curl http://<app_instance public ip or dns>:9000/`
    * On the app instance ssh session you should see a log message everytime a request is received
  * Open another ssh session into the app instance and use the `top` command to see the system metrics
  * On the test instance ssh session do your first stress test:
    * `ab -n 100 -c 10 http://<app_instance public ip or dns>:9000/` 
    * On the app instance see how CPU and Memory metrics change using the `top` command
    * What happens with 1000 request and 100 concurrent users? Go a bit further to see the impact on the `top` metrics.
  * In the ssh session on the app instance where `top` was running, stop top with `Crt+C`, and run `nload`. Repeat the stress tests from the tester instance to observe the metrics using `nload`