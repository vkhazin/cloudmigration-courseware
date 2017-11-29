# Cloud Migration

# Description

* The lift-and-shift approach is a common cloud migration strategy
* Lift-and-shift strategy implies the least amount of effort adopting cloud to capitalize on its benefits: scalability, agility and cost-efficiency
* However, applications lifted and shifted to the cloud often can't take full advantage of the cloud capabilities
* Organizations tend to overlook the compatibility of applications with cloud scalability and elasticity constrains e.g. sticky-session web servers
* Additionally a network topology requires some planning: what's the IP address space available and will be allocated to the cloud deployments, how many traditional network zones should we plan for?
* VPN connectivity between on-premises systems and cloud-deployed assets deserves a special attention as there is a considerable chance that some of the systems will remain on-premises, e.g. a Mainframe-based financial system
* Some resource intensive applications such as image processing, big data processing, significant local disk storage may translate to a considerable cloud bill if not re-designed to take an advantage of the cloud services
* Applications that depend on connectivity to the back-end systems remaining on premises will experience an increased network latency and potential degradation in performance and/or an increased failure rate
* Configuration management for cloud deployed resources may need to be enhanced with DevOps practices to reduce the burden
* Monitoring of cloud assets may not be possible with the same tools that were used for the on-premises deployments
* Security of cloud deployed applications maybe better or worse compared to on-premises deployments, mostly depending on who is casting the opinion
* High-Availability and Disaster recovery on the cloud offers new capabilities but come with some new challenges 

# Audience

* Software Developers looking to dive into cloud compatible coding practices
* System Architects exploring migration path from on-premises to cloud deployments
* Operation and Network personnel responsible for the end-state of cloud migration

# Course Objectives

* Outline the lift-and-shift migration approach in the light of alternatives
* Enumerate constrains and consideration for the lift-and-shift approach
* Identify common cloud deployment compatibility hiccups
* Plan network topology for the cloud deployment in contrast to on-premises deployment
* Explore options dealing with increased network latency and reliability
* Review DevOps options for cloud deployments and operations
* Scout monitoring options to support cloud deployment
* Discuss security implications and constrains of cloud operations
* Get familiar with high availability and disaster recovery approaches on the cloud

# Prerequisites

* Laptop with admin/root privileges to install required software
* Recent hands-on programming and/or scripting experience
* Software development, delivery, and operational experience
* Familiarity with software design and architecture patterns: Desktop, Web, Mobile, and Soa


# Course Duration
1 or 2 days

# Outline

## What's Lift-and-Shift

* Define lift-and-shift migration
* Compare to alternative migration approaches
* Enlist pros and cons for lift-and-shift approach

## Planning for the migration

* Categorizing systems before migration
* Identifying system dependencies
* Assessing cloud compatibility challenges

## Application Design

* Resource usage analysis
* Storage space and IO speed
* Intermittent connectivity issues
* Caching and Session Management
* Resilience of software design

## Networking

* IP address space allocation
* Connectivity between on-premises and cloud assets
* VPN and Firewall management

## Operation and Monitoring

* Deployment automation
* Configuration management
* Monitoring options

## High-Availability and Disaster Recovery

* Backup and restore options
* Multi-region/zone availability
* What happens when a cloud provider goes down?

## Summary

* Best practices
* Lessons learned
* Pace of innovation on the cloud