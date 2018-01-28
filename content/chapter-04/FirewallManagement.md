# Firewall Management

* There is considerably different practices between a traditional on-premises and on-the-cloud
* On-premises networks tends to be broken down e.g. DMZ, Apps, and Back-End
* On-premises often enough hosts on the same subnet have no firewall between them
* On-premises there is often a [mistaken notion](https://digitalguardian.com/blog/insider-outsider-data-security-threats) of a trusted networks and a threat coming for the outside
* On-the-cloud there are security groups/lists
* Depending on the cloud provider assets within the same securty group/list may or may not access each other by default
* Not as likely your organizational security unit will see cloud network as a trusted
* It is likely easier [to automate](https://www.terraform.io/docs/providers/azure/r/security_group.html) security groups management on-the-cloud
* Terraform offers a remarkable support for different [cloud providers](https://www.terraform.io/docs/providers/)
* There is also 3rd party Firewalls e.g. [WAF](https://en.wikipedia.org/wiki/Web_application_firewall) offered on-the-cloud [marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=firewall&page=1)
  