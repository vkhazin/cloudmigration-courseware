# Backup and Restore Options

## On-the-cloud decisions

* In case of Database as a Service is in use public cloud providers provide back-up and restore service e.g.:
  * [Azure Sql](https://azure.microsoft.com/en-us/blog/azure-sql-database-point-in-time-restore/)
  * [Aws Rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html)
* When you are using VM's for a self-hosted database on the public cloud you have a couple of options
  * You can backup [data volumes](https://n2ws.com/how-to-guides/automate-amazon-ec2-instance-backup.html)
  * Or you can use a backup service e.g.: [Azure Backup](https://docs.microsoft.com/en-us/azure/backup/)
  * When you are paranoid about your data, as you probably should be, [3rd party providers](https://www.lifewire.com/online-backup-services-reviewed-2624712) for backup storage are readily available
  * Remember: that databases keep their files open for read/write access and copying open files is not very reliable
* There is more data than what's stored in the database:
  * Web and Application Servers configurations
  * Local Server cache
  * File Servers
  * Images and other Media
* Public cloud providers offer storage services, e.g.: [Aws S3](https://aws.amazon.com/s3/) and [Azure Storage](https://azure.microsoft.com/en-us/services/storage/), secure, redundant and robust
* Play out the recovery exercise first on paper and then in reality, how much of it is, or should be automated?