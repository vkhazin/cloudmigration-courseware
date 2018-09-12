# Categorizing Systems for Migration

* Where do I start? What's important?
* Do I go [by layer](https://en.wikipedia.org/wiki/Software_categories)?
* If `by layer` can I take the web-server to the cloud and leave the database on premises?
* Distance and Geography matters, don't ignore latency as on of the common [mistakes](https://govcloudinsider.com/articles/2017/03/14/cloud-migration-mistakes.aspx)
* Maybe I should categorize my software based on a cloud [migration approach](https://www.ibm.com/blogs/cloud-computing/2014/01/how-to-classify-workloads-for-cloud-migration-and-decide-on-a-deployment-model/)?
* Is my application ready to scale-out and why are you asking?
* Web Server Session affinity to support auto scale-out
* Guaranteed CPU, RAM, Disk, Network performance on the cloud comes with [a few disclaimers](https://blogs.msdn.microsoft.com/igorpag/2014/11/11/azure-a-series-d-series-and-g-series-consistent-performances-and-size-change-considerations/)
* Heavy CPU, vs. heavy Memory, vs. heavy IO, vs. heavy Networking - different instance types and different [TCO](https://en.wikipedia.org/wiki/Total_cost_of_ownership)
* What are my external dependencies: what are the inbound/outbound connections?