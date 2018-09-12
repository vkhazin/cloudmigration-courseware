# Cloud Compatibility Challenges

* Do not assume on-premises and public cloud is nearly [the same thing](https://gcn.com/articles/2017/02/08/common-cloud-migration-mistakes.aspx)
* Public Cloud providers are [not almost the same](https://www.sitepoint.com/a-side-by-side-comparison-of-aws-google-cloud-and-azure/)
* While on-premises infrastructure is likely less reliable than that on the public cloud, the [perception is different](https://buildazure.com/2016/03/23/cloud-vs-on-premises-security-reliability-and-uptime/)
* High CPU count and massive amount of memory [is not cheap](https://azure.microsoft.com/en-ca/pricing/details/virtual-machines/linux/) on the cloud
* Treating public cloud as if it was your own data centre [is not ideal](https://blogs.cisco.com/cloud/are-we-treating-cloud-just-like-another-data-center)
* Network connectivity is different on the public cloud: objectives for DMZ/Web, App, and Back-end subnets can be achieved by [security groups](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-nsg)
* There are options for massive storage other than a massive disk space attached to the VM
