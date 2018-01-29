# Identifying Dependencies

* "Hardware": selecting the appropriate [instance type:](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/sizes?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) CPU, Memory, Storage, GPU,  others?
* Operating System Configurations, e.g.: memory swapping enabled or disabled, NoSql = no swapping, Oracle Rdbms = yes swapping
* 3rd party software: check licensing model, maybe you cannot re-use on-premises license
* Network connectivity: does this system connect to or is getting connected from other systems, what's the network layout, any VPN's?
* Deployment practices: can we reuse current deployment practices or we need a lot more?
* Monitoring skill-set and tools: can we re-use current approaches as is, what will we miss?
* Cloud has SLA's, different between services, possibly incompatible with your SLA's
* Don't run panicking: there are [different ways](http://searchcloudcomputing.techtarget.com/tip/Is-your-SLA-in-cloud-computing-negotiable) to achieve desired SLA's through redundancies and negotiation
