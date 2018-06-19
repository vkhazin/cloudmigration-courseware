# IPv4 Addresses Shortage

* IPv4 address space [is crowded](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) for public IP's
* Routing between private network requires unique IP Address range for each subnet
* Unique subnets for private IPv4 could be a challenge in a large organization:
  * Numerous buildings, branch locations, network segments and interconnected partners
  * Legacy networks and data centers with generous overallocation of a IPv4 address space
  * Routing with overlapping IP addresses is likely to be a [challenge](https://supportforums.cisco.com/t5/lan-switching-and-routing/avoid-private-ip-overlap/td-p/3179435)
* Adoption of IPv6 is growing, but
  * Public cloud providers are not fast to expose IPv6 for public IP addresses: yes, for [Aws](https://aws.amazon.com/about-aws/whats-new/2017/01/announcing-internet-protocol-version-6-ipv6-support-for-elastic-load-balancing-in-amazon-virtual-private-cloud-vpc/) and no so much, for [Azure](https://stackoverflow.com/questions/48190025/when-do-dynamic-ipv6-addresses-for-azure-load-balancer-front-end-configurations)
  * Where is you organization on this chart?
  ![ipv6 adoption](../images/chapter-04/ipv6-adoption.png)
