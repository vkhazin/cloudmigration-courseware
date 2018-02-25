# Lab: Cloud Network Management

* Get familiar with Cloud Provider access control management
* In this lab, you will create three small instances on this lab:
  * **Inbound Public Traffic**: Accessible from outside your network on port 80
  * **Private and Public Traffic** Accessible only from **Inbound Public Traffic** and **Internal Traffic** on port 80
  * **Internal Traffic** Accessible from **Inbound Public Traffic** and **Private and Public Traffic**, but without access to the outside world
* Login to Cloud Provider portal
* Create a security group to allow access to SSH port 22 and the outside world. Let's call this security group `<student-id>-chapter4`
* Create a security group to allow access to the outside world. Let's call this security group `<student-id>-chapter4-to-outside`
* Create **Inbound Public Traffic** instance:
  * Create a small instance to launch the stress test tool, e.g., AWS EC2 t2.micro, AMI: Ubuntu Server 16.04 LTS (HVM), SSD Volume Type - ami-66506c1c
  * Provision this instance with 8GB of disk space
  * Associate it to the `<student-id>-chapter4` and `<student-id>-chapter4-to-outside` security groups
  * Open an ssh session into the instance and execute the following commands to install and configure [nginx](https://nginx.org/en/)
    * `sudo apt-get update`
    * `sudo apt-get install nginx` [Reference](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
    * Check the installation was successful by accessing the `nginx` using localhost: 
      * `curl http://localhost`. You should expect an html document stating that the installation was successful.
    * Modify the content of index html hosted by nginx to display name of the server the page was loaded from:
      * `sudo vi /var/www/html/index.nginx-debian.html`
      * Edit the line `Welcome to nginx!` to `Welcome to nginx from In-Access`
      * Verify the effect of your changes using `curl http://localhost`
  * Close the ssh session
* Repeat the above steps to create the two other instances needed (**Private and Public Traffic** and **Internal Traffic**)


* Try to access any of the instance's public addresses from your computer:
  * `curl http://<instance public ip>/ -v -m 10`
  * The `-m 10` is setting a 10 seconds timeout for the connection
  * What is the outcome of the test?
* Create a security group `<student-id>-chapter4-80-open`
* Add an in-bound rule to allow traffic on port 80 from everywhere
* Associate **Inbound Public Traffic** to `<student-id>-chapter4-80-open`
  * Repeat the curl test from your computer. What is the outcome?


* Open an ssh session into **Inbound Public Traffic**
* Try to access **Private and Public Traffic** and **Internal Traffic** from the ssh session using:
  `curl http://<instance public ip>/ -v -m 10` What is the result of this test?
* Create another security group named `<student-id>-chapter4-internal`
* Add an in-bound rule to allow access on port 80 from the `<student-id>-chapter4` security group only using its group id
* Associate **Private and Public Traffic** and **Internal Traffic** instances to `<student-id>-chapter4-internal`
* Try to access **Private and Public Traffic** and **Internal Traffic** from your computer:
  * `curl http://<instance public ip>/ -v -m 10`
* What is the outcome of the test?
* Try to access **Private and Public Traffic** and **Internal Traffic** from the ssh session into **Inbound Public Traffic**. What is the outcome?


* Open an ssh session into **Internal Traffic**
* Try to access **Private and Public Traffic** and **In-access** from the ssh session using:
  `curl http://<instance public ip>/ -v -m 10` What is the result of this test?
* Try to access google.com with the same command
* De-associate **Internal Traffic** instance from `<student-id>-chapter4-to-outside` security group
* Repeat the above tests (accessing other instances on the network and accessing google.com). What ais the result of this test?


* Why not to connect two cloud providers with a VPN and see what happens:
  * [AWS and Azure](https://blogs.technet.microsoft.com/canitpro/2016/01/11/step-by-step-connect-your-aws-and-azure-environments-with-a-vpn-tunnel/)
  * [AWS and GCP](https://medium.com/google-cloud/vpn-between-two-clouds-e2e3578be773)

