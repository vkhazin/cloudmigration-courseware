# Preparing for a Cloud Outage

## Overview

* [Azure](https://azure.microsoft.com/en-us/support/legal/sla/), [Aws](https://aws.amazon.com/ec2/sla/), and [Google Cloud Platform](https://cloud.google.com/compute/sla) come with [SLA's](https://en.wikipedia.org/wiki/Service-level_agreement), a fascinating reading material for a legal professional
* Unfortunate reality is that cloud providers are experiencing unplanned outages: [Aws](https://www.readitquik.com/articles/elastic-computing/top-7-aws-outages-that-wreaked-havoc/), [Azure](https://venturebeat.com/2017/03/15/microsoft-confirms-azure-storage-issues-around-the-world/), [GCP](https://www.cnet.com/news/google-cloud-issues-causes-outages-for-snapchat-spotify-and-others/) and probably any other
* Should I actively prepare for such an unlikely event?
* The cloud might be up-ish while your connectivity to it maybe affected and there is a chance of [a data loss](https://www.computerworld.com/article/2973600/cloud-computing/google-cloud-loses-data-belgium-itbwcw.html)
* Cloud Providers and 3rd parties publish status and history, it may appear there is more than a remote chance of a partial outage on [Azure](https://azure.microsoft.com/en-us/status/history/), [Aws](https://cloudstatus.eu/status/aws), and likely [elsewhere](https://cloudstatus.eu/)
* Depends on the business continuity planning, e.g. can a [nursing home](https://arstechnica.com/information-technology/2017/02/surviving-a-cloud-based-disaster-recovery-plan/) lose access to the patient records?
* Reddit, certainly, felt that they don't have to account for a possible AWS outage:
<center><img src="../images/chapter-06/reddit-AWS-outage.jpg" /></center>
