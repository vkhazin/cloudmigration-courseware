# Storage space and IO speed

* Basic options common on Public Cloud providers
  * Block/Disk storage aimed to be attached to a Virtual Machine to serve as a hard drive
  * Object storage designed to store binary or text files accessible using an API
  * Shared-file storage intended to share data between cloud or on-premises virtual machines, e.g. [AWS EFS](https://aws.amazon.com/efs/) or [Azure File Share](https://docs.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-windows)
* There are options for different performance, latency and throughput characteristics
* One test for storage performance is [Gartner Cloud Harmony test suite](https://github.com/cloudharmony/block-storage)
* A couple of additional resource from different cloud providers:
  * [AWS Volume Types](https://aws.amazon.com/ebs/details/#VolumeTypes)
  * [Azure Premium Storage: Design for High Performance](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/premium-storage-performance)
  * [Google Cloud Storage Options](https://cloud.google.com/compute/docs/disks/)
