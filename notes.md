# Each bullet translates into a couple of slides

## General
  * Make sure to hyperlink your points using ```<a href="..." target="_blank"></a>``` for instructors and students  
  * Diagrams better than words, but are more time consuming to produce, make sure not to violate copyrights  
  * Cloud UI and Api changes fast, try to avoid too detailed steps to get students familiar to deal with the change  
  * If we need to store any files for students to download during the labs - we will use S3 instead of gitbook hosting
  * Summary of each chapter is good place to let students do the talking: ask questions instead of self reiteration 

## Chapter-01:

### Public cloud state of adoption
  * List benefits listed by public cloud providers compared to on-premises deployment using numbers and charts where available
  * Reference case studies by Aws and by Azure to demonstrate the marketing approach and independent research to reflect on industry reality
  * Use reputable web resources (maybe Gartner) to demonstrate growth in usage and in adoption plans for public cloud
  * Reference revenues generated by Microsoft and Amazon year-by-year 
  * Reference Azure/Oracle corporation strategic investment

### Motivation for public cloud
  * Reference different use-cases for cloud adoption success stories, from startups to old fashioned organizations
  * Reference a couple of horror stories migrating to public cloud and provide a brief explanation on mistakes made

### Why I cannot do it all in my own data centre?
  * Acknowledge that yes, you can do it all on your own hardware, especially when VM automation is the only purpose
  * List the number of services offered by Aws, Azure, Google, and Oracle public clouds in addition to VM management
  * Highlight that VM is not enough: network, load-balancers, firewalls, high availability and etc are essential as well
  * Pay a special attention to the ability to create an entire data centre with an automation such as terraform


### Considerations for different migration strategies
  * List migration strategies as described by leading cloud providers Aws and Azure
  * Outline pros and cons of each approach
  * Highlight that there is a conflict between what's common vs. what's advantageous
  * Find a reference what's the industry stats about selecting a migration strategy

### Lab: IaaS, PaaS, CaaS, FaaS, and DaaS
  * Setup access to the cloud provider
  * Walk through common tasks, e.g. provision an instance, configure security
  * Students should feel familiar with finding their way around the could management UI for continue of the course

### Planning and executing a migration strategy
  * Find a horror story to create an emotional connection on how bad a poor execution can go
  * Borrow ideas from cloud migration webinars/articles
  * Emphasize with reference that there is no one size-fits-all strategy
  
### Getting ready for the adoption and migration setbacks
  * Big-bang approach is unforgiving for mistakes, iterative and agile maybe more pragmatic
  * Things will blow as with every new major initiative
  * Reference common failures
  * Provide links to forums and 
  * Find a failure story with a recovery plan to ignite confidence