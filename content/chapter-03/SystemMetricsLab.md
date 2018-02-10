# Lab: common tools for system metrics

* In this lab, two Virtual Machine instances will be created: One will run a stress test, and the other will run the application to be tested.

* Tester instance
  * Create a small instance to launch a stress test tool. e.g.: AWS EC2 t2.micro, AMI: Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-66506c1c
  * Configure that instace to have 8GB of storage.
  * ssh to the instance and install [Apache Bench](https://en.wikipedia.org/wiki/ApacheBench):
    * `sudo apt-get update`
    * `sudo apt-get install apache2-utils`
  * Validate the installation with `man ab`
  * Run a first test to Wikipedia: `ab -n 100 -c 10 "http://en.wikipedia.org/wiki/Main_Page"`


* Application instance
  * Create another small install to install the `get_a_book` application and monitor it
  * ssh to the new instance and install `node` and `npm`:
    * `sudo apt-get update`
    * `sudo apt-get install npm`
    * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
  * Install `unzip` utility: `sudo apt install unzip`
  * Install the `nload` tool: `sudo apt-get install nload`
  * Download the application:
    * `curl -L -O https://raw.githubusercontent.com/vkhazin/cloudmigration-courseware/master/lab_support/get_a_book.zip`
  * Unzip the app: `unzip get_a_book.zip`
  * Cd to the app folder and run it
    * `cd get_a_book`
    * `npm start`


* Testing procedure
  * Form the ssh session to the tester instance access the app:
    * `curl http://<app_instance>:9000/`
    * On the app instance ssh session you should see a log message everytime a request is received.
  * Open another ssh session to the app instance and use the `top` command to see the system metrics
  * On the test instance ssh session do your first stress test:
    * `ab -n 100 -c 10 http://<app_instance>:9000/` See how the CPU and Memory metrics change on the `top` command
    * What happens with 1000 request and 100 concurrent users? Go a bit further
  * On the session where `top` was running, stop it with Crt+C, and run `nload`. Repeat the stress tests you did before