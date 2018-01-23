# Categorizing Systems for Migration

* Where do I start? What's important?
* Do I go <a href="https://en.wikipedia.org/wiki/Software_categories" target="_blank">by copyright status, by vendor, by purpose</a> or <a href="https://en.wikipedia.org/wiki/Multitier_architecture" target="_blank">by layer</a>?
* If `by layer` can I take the web-server to the cloud and leave the database on premises?
* Distance and Geography matters, don't ignore latency as on of the common <a href="https://govcloudinsider.com/articles/2017/03/14/cloud-migration-mistakes.aspx" target="_blank">mistakes</a>
* Maybe I should categorize my software based on a cloud <a href="https://www.ibm.com/blogs/cloud-computing/2014/01/how-to-classify-workloads-for-cloud-migration-and-decide-on-a-deployment-model/" target="_blank">migration approach</a>?
* Is my application ready to scale-out and why are you asking?
* Web Server Session affinity to support auto scale-out
* Guaranteed CPU, RAM, Disk, Network performance on the cloud comes with <a href="https://blogs.msdn.microsoft.com/igorpag/2014/11/11/azure-a-series-d-series-and-g-series-consistent-performances-and-size-change-considerations/" target="_blank">a few disclaimers</a>
* Heavy CPU, vs. heavy Memory, vs. heavy IO, vs. heavy Networking - different instance types and different <a href="https://en.wikipedia.org/wiki/Total_cost_of_ownership" target="_balnk">TCO</a>
* What are my external dependencies: what are the inbound/outbound connections?