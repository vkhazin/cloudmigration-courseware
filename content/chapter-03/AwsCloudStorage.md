# Storage space and IO speed

## [AWS Cloud Storage](https://aws.amazon.com/products/storage/)

* Amazon S3 (Simple Storage Service)
  * 99.999999999% durable, and scales past tens of trillions of objects such as backup or user-generated content
  * Can be used as a static web site host with or without a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network)
  * Variable pricing for different [access paterns](https://aws.amazon.com/s3/storage-classes/)
  * Can be used for db backup and to store data for source of Big Data analytics

* Elastic Block Store
  * Highly available, consistent, low-latency block storage for EC2
  * Each volume is replicated within its Availability Zone for high availability and durability
  * Offers encryption at rest
  * [IOPS](https://en.wikipedia.org/wiki/IOPS) vary depending on the options selected
  
* Elastic File System
  * Highly available and consistent for use with EC2 instances, similar to [NAS](https://en.wikipedia.org/wiki/Network-attached_storage)
  * Grows and shrinks capacity automatically
  * High throughput with consistently low latencies
  * [Price](https://aws.amazon.com/efs/pricing/) is more than 10x compared to S3 and not available in all regions yet
  
* Amazon Glacier
  * Secure, durable (99.999999999%), and extremely low-cost cloud storage service 
  * Suitable for data archiving and long-term backup

* Storage Gateway
  * A software appliance to link on-premises environment to Amazon cloud storage
  * Suitable for backup and archiving
  * Supported storage protocols: [NFS](https://en.wikipedia.org/wiki/Network_File_System) and [iSCSI](https://en.wikipedia.org/wiki/ISCSI)
