# Virtual Networks & Data Centers

* Azure virtual network or [VNet](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview) is a logical isolation of the Azure cloud dedicated to your account
* Azure VNets are isolated one from another, from other regions, and from other tenants
* Each VNet defies it [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) IP Address block
* Subnets within a VNet must fit into the VNet CIDR
* VNet comes with default routing and Internet access to allow virtual machines to communicate between each other and out to the outside world
* VNet allows traffic filtering to control traffic inside and from/to outside the VNet
* To allow traffic from the Internet a security group with an inbound rule will be required
* Aws is using Virtual Private Cloud (VPC) notion to describe an isolated network
* Aws breaks down a VPC into subnets that could be allocated to different [availability zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions-availability-zones) - physical data centers interconnected over redundant low-latency private network links