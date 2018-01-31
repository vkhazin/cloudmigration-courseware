# Application Metrics

## Windows System Metrics ([Reference](https://checkpanel.com/resources/windows-server-performance-monitoring-tools))

* Performance Monitor tool ([Reference](http://www.appadmintools.com/documents/windows-performance-counters-explained/)
  * CPU performance counter, e.g.: `\Processor(*)\% Processor Time`
  * Momory performance counters, e.g.: `\Memory\Available Bytes`
  * Network, e.g.: `\Network Interface(*)\Bytes Received/sec`
  * Disk, e.g.: `\PhysicalDisk(*)\Disk Read Bytes/sec`


* [Typeperf](https://technet.microsoft.com/en-us/library/bb490960.aspx)) is a command line tool to output performance counters to a file or to the command window, e.g.: `typeperf "\Memory\Available bytes" "\processor(_total)\% processor time"`


* [Logman](http://www.travisgan.com/2012/09/performance-monitoring-with-logman.html)


* [Tracerpt](https://technet.microsoft.com/en-us/library/bb490959.aspx) is used to for parsing logs from Performance Monitor and generating reports and/or CSV files for further processing
  