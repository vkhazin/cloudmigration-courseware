# Application Metrics

## What to measure on an application?

* [Application level metrics](https://stackify.com/application-performance-metrics/):
  * Error rate, e.g.: internal errors logged per second, 5XX requests/second
  * Request rate, e.g.: total number of requests per second, no matter the outcome of the request 
  * Response time, e.g.: average response time, peak response time, or better yet a [percentile](https://www.elastic.co/blog/averages-can-dangerous-use-percentile)
  * Availability: percentage of uptime per time interval
  * Concurrent users, e.g.: Concurrent user count distribution over a day
  * User satisfaction using [Apdex score](https://www.apdex.org/)
  * [Throughput](https://www.cdnetworks.com/en/news/6-critical-web-application-performance-metrics-to-consider/4257). This is very tight to the application at hand. It should be something representing a business value on a time period. For example, in an integration application, how many entities were moved from one system to another per time period.

  
* [System level metrics](https://blog.heroix.com/blog/how-to-monitor-server-performance)
  * CPU utilization, e.g.: CPU utilization percentage
  * Memory utilization, e.g.: Peak memory usage, Percentage of memory in use per application
  * [Network utilization](https://en.wikibooks.org/wiki/Transwiki:Measuring_network_throughput), e.g.: Bytes send/received per second
  * Disk utilization, e.g.: Disk Reads/Writes per second
  * Network outages: percentage of time a network resource is unavailable
  * [Thread utilization](http://www.monitis.com/blog/essential-server-performance-metrics-you-should-know-but-were-reluctant-to-ask/), e.g.: Number of threads in use per application or per process