# Monitoring

## Alerting

* We are drowning in the information and logs
* There is only so many dashboards we can built before we loose track of them
* No organization will have the budget to track and to store all the logs and events
* Automating Alerting and Data Sampling is likely a long-term solution to the information overload
  * Azure comes with activity [log alerts](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-activity-log-alerts)
  * Aws provides [CloudWatch Alarms](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-activity-log-alerts) Service
  * A relatively smaller [number](https://stackshare.io/stackups/opsgenie-vs-pagerduty-vs-victorops) of third party services available, compared to APM and Log Management