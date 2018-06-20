# Firewall Management

* There is a considerable difference in practices between a traditional, on-premises, and on-the-cloud deployment
* On-premises networks tends to be broken down into segments e.g.: DMZ, Apps, and Back-End
* On-premises, hosts on the same subnet, may have no firewall between them
* On-premises there is often a [mistaken notion](https://digitalguardian.com/blog/insider-outsider-data-security-threats) of a trusted networks and a threat coming for the outside
* On-the-cloud there are security groups and traffic rules
* Depending on the cloud provider, assets within the same securty group may or may not reach each other by default
* Not likely that your organizational security unit will see cloud network as a trusted origin or a destination, at least, initially
* It is likely easier [to automate](https://www.terraform.io/docs/providers/azure/r/security_group.html) security groups management on-the-cloud, than a firewall on-premises
* Terraform offers a remarkable support for different [cloud providers](https://www.terraform.io/docs/providers/)
* There is also 3rd party Firewalls e.g. [WAF](https://en.wikipedia.org/wiki/Web_application_firewall) offered in the cloud provider [marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=firewall&page=1)
  