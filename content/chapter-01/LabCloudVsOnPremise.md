# Lab : Cloud vs. on-premise

* Let us list a few activities we do on a [Software Development Life Cycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle):

  * Development platform (Ex. Java, .Net, Node.js, Python, etc.)
  * Storage:
    * Deployment articraft (Ex. .dlls, .war, .ear, files, etc)
    * Data Storage (Ex. RDBMS, NoSQL Database, files)
    * Source control (Ex. Git, SVN, Team Foundation Server)
  * Non-functional requirements:
    * Traffic estimation (Ex. request/second, jobs/minute)
    * Response time (Ex. max response time [ms])
    * Supported number of users
    * Up-time requirements (Ex. Can we have maintenance windows? How many nines we need?)
    * Disaster recovery plans (Ex. We need to store data for a year)
    * Data locality (Ex. We need to be available worldwide but data is consumed locally, or a user in London should be able to access data from New York)
  * Deployment
    * Deployment pipeline (Ex. continuous deployment, canary deployment, blue-green deployment)
    * QA, Staging and Production environments.
  * Network requirements
    * Load balancers (Ex. F5)
    * Firewall to create a [DMZ](https://en.wikipedia.org/wiki/DMZ_(computing) )
    * DNS setup
    * Security certificates


* Taking all of this points into account (and any others you might consider) put a time estimation on how much time will take to provision the infrastructure. 


* OK, everything is running what happens if:
  * The project failed
  * The load is **much more** than anticipated
  * The load is **much less** than anticipated
  * This new architect want to change part of technology stack
  * The Executive Vice-President wish to deploy to the Australia division(and you are not in Australia)


  
  