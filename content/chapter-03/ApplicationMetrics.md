# Application Metrics

## What to measure on an application?

* Application level metrics ([Resource](https://stackify.com/application-performance-metrics/)):
  * Error rate, e.g.: Internal error logged per second, 5XX requests/second
  * Request rate, e.g.: Total requests per second, 2XX requests/second
  * Response time, e.g.: Average response time, peak response time per second
  * Availability percentage, e.g.: Percentage of uptime for interval of time
  * Concurrent users, e.g.: Concurrent user count distribution over a day
  * User satisfaction using [Apdex score](https://www.apdex.org/)
  * [Throughput](https://www.cdnetworks.com/en/news/6-critical-web-application-performance-metrics-to-consider/4257). This is very tight to the application at hand. It should be something representing a business value on a unit of time. For example, in an integration application, how many entities were moved from one system to another per using of time.
  
  
* System level metrics ([Resource]())
  * CPU utilization, e.g.: CPU utilization percentage per second
  * Memory utilization, e.g.: Peak memory usage, Percentage of memory in used per application
  * Network utilization, e.g.: Network bandwith usage per second
  * Disk utilization, e.g.: Disk Read/Writes per second
  * Network outages, e.g.: Percentage of time a network resource is unavailable
  * [Thread utilization](http://www.monitis.com/blog/essential-server-performance-metrics-you-should-know-but-were-reluctant-to-ask/), e.g.: Number of threads in use per application