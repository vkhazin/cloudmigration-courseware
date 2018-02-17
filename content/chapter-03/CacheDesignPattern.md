# Lab: Cache design pattern

* In this lab, we are going to see the how a simple cache could solve the connectivity issue form the previous lab. We are going to deploy another application: `count_lines_cached`.
* This application will return cached values of the lines count if there is a problem obtaining the book from `get_a_book`

* Start `get_a_book` application
  * Open an ssh session into the application instance
  * Change directory into the app folder to run it
    * `cd get_a_book`
    * `npm start`

* Deploying `count_lines_cached`:
  * Open an ssh session into the `count_lines` instance
  * Download the application:
    * `curl -L -O https://raw.githubusercontent.com/vkhazin/cloudmigration-courseware/master/lab_support/count_lines_cached.zip`
  * Unzip the app: `unzip count_lines_cached.zip`
  * Change directory into the app folder to run it
    * `cd count_lines_cached`
    * `npm start <get_a_book instance public ip or dns>:9000`
    

* Test procedure
  * Test `count_lines` application from there:
    * `curl http://<count_lines instance public ip or dns>:10000` Expected output:
```
{
  "counter": 40008,
  "timestamp": "2018-02-16T05:18:50.027Z"
}
``` 
  * Everything is working as expected. On the ssh session into the `get_a_book` application where the application is running, stop the application with Ctrl+C 
  * Check again `count_lines`, but this time with -v on the `curl` command:
    * `curl http://<count_lines instance public ip or dns>:10000 -v`    
  * What is the outcome of the test? 
  * Did anything change with data returned from the service?
  * Which other situations we could encounter on this services interaction?
  * How could we apply the presented patterns?