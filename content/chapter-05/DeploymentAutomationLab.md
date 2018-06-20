# Deployment Automation Lab

## Objectives

* Setup a delivery pipeline to see deployment in real life
* Understand components of a continuous deployment and integration testing

## Steps

1. 

Notes to author:
* We are mostly targeting IaaS therefore the deployment automation will be a tad of a challenge
* ssh can be used to push files to the instance, public ip with open ssh port will be required
* public ipv4 are scarce, aws now offers public ipv6: https://aws.amazon.com/about-aws/whats-new/2017/01/announcing-internet-protocol-version-6-ipv6-support-for-ec2-instances-in-amazon-virtual-private-cloud-vpc-regional-expansion/
* Azure is not quite there yet: https://heranonazure.wordpress.com/2017/08/04/deploy-an-ipv6-vm-in-azure/
* Aws specific option to demo: https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorials-github.html
* Terraform & Ansible based automated deployment - very high control
* deploybot.com, circa-ci, travis-ci are there to make it easier, but it is still a knowledge field
