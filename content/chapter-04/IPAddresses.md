# IP Address Space Allocation

* Private [IPv4 networks address space](https://en.wikipedia.org/wiki/Private_network) is predefined:
  * 24-bit block with 10.0.0.0 – 10.255.255.255 range and 16,777,216 addresses
  * 20-bit block with	172.16.0.0 – 172.31.255.255	range and 1,048,576 addresses
  * 16-bit block with	192.168.0.0 – 192.168.255.255	range and 65,536 addresses
(http://searchnetworking.techtarget.com/definition/Port-Address-Translation-PAT)
* Private [IPv6 network address space](https://www.networkworld.com/article/2228449/microsoft-subnet/microsoft-subnet-ipv6-addressing-subnets-private-addresses.html) is also predefined by Unique Local Addresses (ULA): fc00::/7
* Interconnected network ip address spaces should not overlap to simplify routing table(s)
* There are alternatives to unique address spaces such as [NAT](https://en.wikipedia.org/wiki/Network_address_translation), [LSN](https://www.networkworld.com/article/2231905/cisco-subnet/large-scale-nat-architectures.html) and [PAT](http://searchnetworking.techtarget.com/definition/Port-Address-Translation-PAT)
