# Cloud Compatibility Challenges Lab

* The objective of this lab is to fly blind and to create cloud resources and to run into common troubles
* Login to a public cloud provider with credentials sent by your instructor
* Create new Aws Vpc or new Azure Virtual Network
* You will need to make series of decisions such as
  * network/vpc ip address schema
  * subnet ip address schema
  * number of availability zones
* As you are creating the resources you will face conflicts, limits, and constrains that are different between providers e.g. [Aws](https://aws.amazon.com/vpc/faqs/) and [Azure](https://docs.microsoft.com/en-us/azure/networking/check-usage-against-limits)
* The constraints maybe familiar to you from previous experience in on-premises environments or brand new
* Ask questions and follow the links on the public cloud console for more details - the information is getting updated all the time!
* As an "acceptance criteria" for the lab outcome:
  * Create one Virtual Network/Vpc
  * At least one subnet
  * At least one VM, check-out instance types and pricing information for the forthcoming charge-backs ;-)
  * Connect to the VM using SSH, Linux/MacOs has ssh client built-in, Windows will require a [download](https://www.ssh.com/ssh/client)
  * Find out how to enable network access to the VM and how to access the Internet from the VM
* What was different and the same compared to an on-premises networks?