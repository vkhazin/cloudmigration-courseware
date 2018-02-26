# Configuration Management Lab

## Objectives

* Evaluate principals of configuration management 
* Experiment with a couple of options

## Steps

Notes to author:
* Hard-coding settings is less than ideal
* Deploying config files mixed up with the source code is the next option, require redeployment to update
* Use Node.js code to demo configuration stored as a part of the source code repostiory
* Ideally deployment and config are separated
* Environment variables maybe in json format, controlled from aws/azure cli and/or web console
* Modify node.js code to read env variables for the configuration on start
* Configuration stored outside of the instance and access by the code every so often to refresh: blob storage, s3 bucket
* Modify node.js to read settings from blob storage or aws s3 bucket on scheduler
* 3rd party tools for configuration managements: etcd, consul.
* Point the students to feature comparison - it will be too much time to make a practical use of them
* There is a separate facility for managing secrets on the public cloud, point using href for further self-exploration

