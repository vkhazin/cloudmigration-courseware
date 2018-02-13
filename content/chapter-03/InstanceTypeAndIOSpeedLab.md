# Lab: Instance types and IO considerations

* In this lab, we are going to reuse the application and tester instances created in the previous lab
* Another instance will be created with a slow IO hard drive .e.g: 100 IOPS
* Using the tester instance stress will be executed on both instance to see performance changes


* Slow IO Application instance
  * Create another small install to install `get_a_book` application and monitor it
  * On the storage configuration select one with limitted IOPS .e.g: 100 IOPS
  * ssh into the new instance and install `node` and `npm`:
    * `sudo apt-get update`
    * `sudo apt-get install npm`
    * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
  * Install `unzip` utility: `sudo apt install unzip`
  * Download the application:
    * `curl -L -O https://raw.githubusercontent.com/vkhazin/cloudmigration-courseware/master/lab_support/get_a_book.zip`
  * Unzip the app: `unzip get_a_book.zip`
  * Change directory into the app folder to run it
    * `cd get_a_book`
    * `npm start`


* Testing procedure
  * On the tester instance ssh session, execute a stress test to the application instance:
    * `ab -n 1000 -c 10 http://<app_instance public-ip or dns>:9000/`
  * Create another ssh session into the tester instance and execute a stress test to the slow IO application instance
    * `ab -n 1000 -c 10 http://<slow_IO_app_instance public-ip or dns>:9000/`
  * Do the results are similar? Notice the response time mean and the number of request per second
  * Start increasing the concurrency setting `-c 10` to `-c 200` on the stress test. Do the results continue to be the same?