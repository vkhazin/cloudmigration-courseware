# Preparing for a Cloud Outage

## Options

* First line of defense is multi-zone and multi-region deployment model using a single cloud provider
* Second, and a lot more elaborate, is a [multi-cloud deployment](https://www.networkworld.com/article/3237184/cloud-computing/the-benefits-of-multi-cloud-computing.html) model
* Number of vendors and services targeting the multi-cloud deployment and hosting services:
  * [Terraform](https://www.terraform.io/) specifically targets automation of IaaS [multiple providers](https://www.terraform.io/docs/providers/)
  * [Rackspace](https://www.rackspace.com/cloud/multi-cloud), used to provide its own [VPS](https://www.a2hosting.com/blog/virtual-private-servers/) hosting and now services clients on multiple public cloud
  * [Cloud Foundry](https://www.gartner.com/reviews/market/application-platforms-reviews/vendor/pivotal/product/pivotal-cloud-foundry) if often mentioned in multi-cloud and [hybrid-cloud](https://www.interoute.com/what-hybrid-cloud) articles
  * [More alternatives](https://www.g2crowd.com/products/cloud-foundry/competitors/alternatives) are readily available...
* The [Achilles' heel](https://en.wikipedia.org/wiki/Achilles%27_heel) of multi-cloud hosting is data availability and consistency:
  * It is relatively easier to deploy code on multiple servers around the globe
  * Making data available in multiple geo locations is [a must for multi-cloud deployment model](http://www.datacenterknowledge.com/archives/2017/02/21/multi-cloud-wont-work-without-replication-how-do-we-get-there)
  * Data replication between remote locations is bound to experience a latency and to settle for [an eventual consistency rather than a strong consistency](https://hackernoon.com/eventual-vs-strong-consistency-in-distributed-databases-282fdad37cf7)
  * Another option would be a fast disaster recovery using alternative cloud provider rather than a true master-master-master long distance data replication
