# Lab : Cloud vs. on-premise

* Let us list a few activities we do on a [Software Development Life Cycle](https://en.wikipedia.org/wiki/Systems_development_life_cycle):

  * Development platform, e.g.: Java, .Net, Node.js, Python, etc.
  * Storage:
    * Deployment artifacts, e.g: .dlls, .war, .ear, files, etc
    * Data Storage, e.g.: RDBMS, NoSQL Database, files
    * Source control, e.g.: Git, SVN, Team Foundation Server
  * Non-functional requirements:
    * Traffic estimation, e.g.: request/second, jobs/minute
    * Response time, e.g.: max response time [ms]
    * Supported number of users
    * Up-time requirements, e.g.: Can we have maintenance windows? How many nines do we need?
    * Disaster recovery plans, e.g.: We need to store data for a year
    * Data retention, e.g.: How long should we keep our data back in time?
    * Data locality, e.g.: We need to be available worldwide but data is consumed locally, or a user in London should be able to access data from New York
  * Deployment
    * Deployment pipeline, e.g.: continuous deployment, canary deployment, blue-green deployment
    * QA, Staging and Production environments.
  * Network requirements
    * Load balancers, e.g.: Cisco, F5, Citrix
    * Firewall to create a [DMZ](http://searchsecurity.techtarget.com/definition/DMZ)
    * DNS setup
    * Security certificates


* Taking all the points into an account and any others you might consider, put a timeframe estimate on how much time will take to provision the needed infrastructure 


* OK, everything is running for now. What happens when
  * The project failed
  * The load is **much more** than anticipated
  * The load is **much less** than anticipated
  * A new architect wants to change part of the technology stack for very compelling reasons
  * An Executive Vice-President wishes to deploy the system to Australia division and you are not in Australia


  
  