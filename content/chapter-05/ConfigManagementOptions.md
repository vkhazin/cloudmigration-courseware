# Configuration Management

## Options

* Configuration files deployed with the code: a step-up from hard-coded values, maybe not as flexible
* Updating configuration files would require redeployment or a manual update on each node, with 1,000 nodes could be a daunting task
* Proliferation of containers raises a question: [containers or configuration management](https://blog.containership.io/containers-vs-config-management-e64cbb744a94)
* [Chef](http://www.chef.io/), [Puppet](http://puppetlabs.com/), [Salt](http://saltstack.com/), [Ansible](http://ansible.com/), and [Terraform](https://www.terraform.io/): provisioning, deployment and configuration automation
* A comparison from [stackshare.io](https://stackshare.io/stackups/ansible-vs-puppet-vs-salt)
* [Consul](https://www.consul.io/), [etcd](https://github.com/coreos/etcd), and [Zookeeper](https://zookeeper.apache.org/): configuration, service discovery, and distributed storage
* A comparison from [stackshare.io](https://stackshare.io/stackups/consul-vs-zookeeper-vs-etcd)
* A down-to-earth option using [AWS S3](https://aws.amazon.com/s3/), [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/), or an external database e.g. [restdb.io](https://restdb.io/)