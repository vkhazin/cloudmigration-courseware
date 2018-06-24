# Monitoring Lab

## Objectives

* Explore performance monitoring, log management, auditing and alerting options available
* Configure ad trigger an alert to demonstrate the power and the common setbacks

## Steps

1. Login into Aws Web Console
1. Proceed to CloudWatch from the services link
1. You, probably, still have EC2 instances running for the previous labs, if not start some instance(s)
1. Proceed to Metrics link
1. Select EC2 metrics
1. Find your instances by name and select `CPUUtilization`, `DiskReadOps`, `NetworkIn`
1. The graph above should reflect the selected metrics
1. Give a name to the graph and save it
1. Add the graph to dashboard
1. Proceed to dashboard and explore the options available
1. Select alarms
1. Create a new alarm for your instance when CPUUtilization exceeds 50%
1. Explore options for actions and notifications
1. Login into https://portal.azure.com
1. Use existing or create a new Ubuntu Server 16.04 virtual machine, select the smallest/cheapest available in your region
1. Wait for the server to finish initialization
1. Search for Monitor and proceed to Metrics
1. Create `Percentage CPU` graph for your instance
1. Explore Azure options for alerting
1. Draw the comparison between the two cloud native options
1. There is also popular third party monitoring providers:
  * https://www.datadoghq.com/
  * https://www.opsview.com/
  * https://stackify.com/retrace-app-metrics/
1. The important point here is that cloud, as do on-premise, deployments require monitoring and automated alerts
1. There is also a popular alerting service: https://www.pagerduty.com/
1. Many of the popular 3rd party services present on the Aws/Azure/Google Marketplace and can be paid for from one subscription