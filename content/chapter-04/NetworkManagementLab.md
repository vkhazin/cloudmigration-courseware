# Lab: Cloud Network Management

* Get familiar with Cloud Provider access control management
* You will create three small instances on this lab:
  * **In-Access**: Accessible from outside your network on port 80
  * **Middle-Access** Accessible only from **In-Access** and **Only-internal** on port 80
  * **Only-internal** Accessible from **In-Access** and **Middle-Access**, but without access to the outside world
* Login to Cloud Provider portal
* Create a security group to allow access to SSH port 22 and the outside world. Let's call this security group `chapter4`
* Create a security group to allow access to the outside world. Let's call this security group `chapter4-to-outside`
* Create **In-Access** instance:
  * Create a small instance to launch the stress test tool, e.g., AWS EC2 t2.micro, AMI: Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-66506c1c
  * Provision this instance with 8GB of disk space
  * Associate it to the `chapter4` and `chapter4-to-outside` security groups
  * Open an ssh session into the instance and execute the following commands to install and configure [nginx](https://nginx.org/en/)
    * `sudo apt-get update`
    * `sudo apt-get install nginx` [Reference](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
    * Check the installation was successful buy using accessing the `nginx` using localhost: 
      * `curl http://localhost`. You should expect an html document stating the installation was successful.
    * Change the default index html on nginx to show you the name of the server it came from:
      * `sudo vi /var/www/html/index.nginx-debian.html`
      * Edit the line `Welcome to nginx!` to `Welcome to nginx from In-Access`
      * Check the effect of your changes using `curl http://localhost`
  * Close the ssh session
* Repeat the above steps to create the other two instances needed (**Middle-Access** and **Only-intenal**)


* Try to access any of the instances public ip or dns from your computer:
  * `curl http://<instance public ip or dns>/ -v -m 10`
  * The `-m 10` is setting a 10 seconds timeout to the connection
  * What is the result of the test?
* Create a security group `chapter4-80-open`
* Add an in-bound rule to allow traffic to port 80 from everywhere
* Associate **In-Access** to `chapter4-80-open`
  * Repeat the test above. What is the result of this test?


* Open an ssh session into **In-Access**
* Try to access **Middle-Access** and **Only-internal** from the ssh session using:
  `curl http://<instance public ip or dns>/ -v -m 10` What is the result of this test?
* Create another security group named `chapter4-internal`
* Add an in-bound rule to allow access to port 80 from the `chapter4` security group only using its group id
* Associate **Middle-Access** and **Only-internal** instances to `chapter4-internal`
* Try to access **Middle-Access** and **Only-internal** from your computer:
  * `curl http://<instance public ip or dns>/ -v -m 10`
* What are your results?
* Try to access **Middle-Access** and **Only-internal** from the ssh session into **In-Access**. What are your results?


* Open an ssh session into **Only-internal**
* Try to access **Middle-Access** and **In-access** from the ssh session using:
  `curl http://<instance public ip or dns>/ -v -m 10` What is the result of this test?
* Try to access google.com with the same command
* De-associate **Only-internal** instance from `chapter4-to-outside` security group
* Repeat the above tests (accessing other instances on the network and accessing google.com). What ais the result of this test?


* Why not to connect two cloud providers with a VPN and see what happens:
  * [AWS and Azure](https://blogs.technet.microsoft.com/canitpro/2016/01/11/step-by-step-connect-your-aws-and-azure-environments-with-a-vpn-tunnel/)
  * [AWS and GCP](https://medium.com/google-cloud/vpn-between-two-clouds-e2e3578be773)

