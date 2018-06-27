# Preparing for a Cloud Outage Lab

* Azure offers a geo-replication between regions using [geo-replication for Azure Sql](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-geo-replication-portal) 
* Aws offers [cross-region read replica for MySql](https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/)
* CloudBasic offers [Aws-to-Azure Replication](http://cloudbasic.net/aws/rds/alwayson/benchmark/aws-azure-replication/) at [a cost](https://aws.amazon.com/marketplace/pp/B00OU0PE5M?qid=1530110927968&sr=0-1&ref_=srh_res_product_title)
* What's different between these options?
* Can I setup my own database replication between on-premises and public cloud(s)?
* Do I need an active-active highly available setup?
* Can I back-up my data on a regular interval and store it on two clouds?
* How quickly can I restore data from a backup in case of a cloud failure?
* Have others done it? Here is what [Wix has done](https://cloudplatform.googleblog.com/2014/12/reach-high-availability-with-multiple-cloud-deployment.html) and here is what [CloudFare](https://blog.cloudflare.com/living-in-a-multi-cloud-world/) offers to its customers
* A possible conclusion is that a true active-active multi-cloud operation is not as easy
* Vendors jumped in to offer multi-cloud solutions: https://www.cloudfoundry.org/multi-cloud/
https://www.multcloud.com/
https://www.ibm.com/cloud/yourcloud/
* Caveats of multi-cloud solutions and offerings are plentiful - be wary of vendor lock-in while avoiding a cloud provider lock-in!