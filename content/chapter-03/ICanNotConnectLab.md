# Lab: What to do when I cannot connect?

* In this lab, we are going to deploy another application: `count_lines`
* This application will consume the book content provided by `get_a_book` and return the line count.
* Start `get_a_book` application
  * Open an ssh session into the application instance
  * Change directory into the app folder to run it
    * `cd get_a_book`
    * `npm start`
* `count_lines` application instance
  * Create another small instance to install `count_lines` application and monitor it
  * ssh into the new instance and install `node` and `npm`:
    * `sudo apt-get update`
    * `sudo apt-get install npm`
    * `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    * `sudo apt-get install -y nodejs`
  * Install `unzip` utility: `sudo apt install unzip`
  * Download the application:
    `curl -L -O https://raw.githubusercontent.com/vkhazin/cloudmigration-courseware/master/lab_support/count_lines.zip`
  * Unzip the app: `unzip count_lines.zip`
  * This application will listen on port 10000. Ensure you configure your network security correctly to make that port accessible. Try to find it yourself - the portal console *Security Groups* could be a good place to start
  * Change directory into the app folder to run it
    `cd count_lines`
    `npm start <get_a_book instance public ip or dns>:9000`
 * Testing procedure
   * Launch another ssh session to `get_a_book` application instance
   * Test `count_lines` application from there:
     `curl http://<count_lines instance public ip or dns>:10000`. Expected output:
      ```
      {
        "counter": 40008,
        "timestamp": "2018-02-16T05:18:50.027Z"
      }
      ``` 
  * When everything works as expected. Re-using the ssh with `get_a_book` application, stop the application with Ctrl-C.
  * Check again `count_lines`, but this time with -v on the `curl` command:
    `curl http://<count_lines instance public ip or dns>:10000 -v`    
  * What is the outcome of the test? Can we do better than that?
