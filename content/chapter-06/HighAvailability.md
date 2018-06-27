# High-Availability

* What is and do I need a [High Availability Architecture](https://www.getfilecloud.com/blog/an-introduction-to-high-availability-architecture/)?
* How High Availability design is different between on-premises and on the cloud?
  * Redundant hardware on-premises
  * Co-location and multiple data-centers for on-premises deployment
  * [Availability sets in Azure](https://docs.microsoft.com/en-us/azure/architecture/resiliency/high-availability-azure-applications)
  * [Availability zones in Aws](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
  * Load balancers is the common answer for end-points high availability on [Azure](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-configure-ha-ports) and on [Aws](https://aws.amazon.com/elasticloadbalancing/)
  * Redundant storage with number of options to choose from is available on [Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy), [Oracle Cloud](https://cloud.oracle.com/en_US/infrastructure/storage) and on [Aws](https://aws.amazon.com/s3/faqs/)
* Database clustering and replication is a weak spot as replication over a long distancea in write/write scenarios with classical [Rdbms](https://www.tutorialspoint.com/sql/sql-rdbms-concepts.htm) is a bit [tough, especially under high load](https://www.researchgate.net/profile/Ciprian_Octavian_Truica2/publication/264416935_Asynchronous_Replication_in_Microsoft_SQL_Server_PostgreSQL_and_MySQL/links/53dbe6160cf216e4210c0375/Asynchronous-Replication-in-Microsoft-SQL-Server-PostgreSQL-and-MySQL.pdf)
* Public cloud providers offer backward compatible, to an extent, Highly Available Rdbms Services
* [Sql Azure](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-high-availability) and [MySql Azure](https://azure.microsoft.com/en-us/services/mysql/)
* Aws offers 6 (and growing) Rdbms engines with various [high-availability support](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)
* Azure offers [paired regions](https://docs.microsoft.com/en-us/azure/best-practices-availability-paired-regions)
* Aws cross-region Rdbms availability is dependent on the vendor support, e.g. [Oracle Rdbms Data Guard](https://docs.aws.amazon.com/quickstart/latest/oracle-database/app-a.html)