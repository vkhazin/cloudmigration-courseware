# Instance Types

* [Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes-general)
  * A-Series are throttled for a consistent but not as high performance suitable for dev/test, poc's and low level production environments
  * B-Series burstable performance ideal for inconsistent workloads, e.g.: web server, dev/test environments
  * D-Series are a higher end general purpose instances suitable for variety of production workloads
  * F-Series are compute optimized with high CPU-to-memory instances for medium traffic web servers, network appliances, batch processes, and application servers
  * E-Series are ideal for memory intensive applications, e.g. relational database servers, medium to large caches, and in-memory analytics
  * G & M-Series, where M, maybe, stands for `Monster` up to 128 vCPUs and up to 3.8 TiB, not cheap: [$19,535.62/month](https://azure.microsoft.com/en-us/pricing/calculator/#virtual-machines1). A powerful combination for many enterprise-grade applications
  * Not all instance types are available in every [region](https://azure.microsoft.com/en-ca/regions/services/). Regions explanation is ahead.
 
* [Oracle](https://cloud.oracle.com/infrastructure/compute/virtual-machine/features)
  * General Purpose are balanced and are uitable for wide range of applications
  * DenseIO are suited for larger local storage databases
  * Less options compared to Azure, but Oracle Cloud is also younger
   
* Psst: Instance types and regional availability is not a static picture, double check everything, every-so-often!  