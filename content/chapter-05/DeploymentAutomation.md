# Deployment Automation

* With ever increasing number of assets and artifacts you will need to find a way to automate, sooner, rather than later
* Common mistakes with cloud migration is over [customizing deployment scripts](http://launchany.com/5-common-mistakes-when-automating-application-deployment/)
* Make use of what's readily available with tools for IaaS: [Terraform](https://www.terraform.io/), [SaltStack](https://saltstack.com/), [Pivotal](https://pivotal.io/platform), and [lots more...](https://solutionsreview.com/devops/2016/05/03/top-10-infrastructure-as-a-service-cloud-tools/)
* Aim for an automated if not continuous deployment with variety of tools available: [Jenkins](https://jenkins.io/), [Concourse-CI](https://concourse-ci.org/) and [GoCD](https://www.gocd.org/) for mostly non-Microsoft stack
* [TFS or Team Services](https://www.visualstudio.com/team-services/), [TeamCity](https://www.jetbrains.com/teamcity/), and [Octopus](https://octopus.com/) for mostly Microsoft stack
* While either of the tools will likely cover any platform, they were built with a target runtime(s) in mind
* There are also deployment-as-a service platforms where you enjoy the continuous deployment and someone else takes care of running it: [CircleCI](https://circleci.com/), [TravisCI](https://travis-ci.org/), [Codeship](http://codeship.com/), [Deploybot](https://deploybot.com/), [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines), [CloudBees Jenkins](https://www.cloudbees.com/products/cloudbees-jenkins-team) and the list grows
* How do you choose from all the options:
  * [Select a couple form the market leaders or up-and-upcoming](https://www.g2crowd.com/categories/continuous-deployment)
  * Run an PoC (proof-of-concept) to see what work in your environment
  * Don't over commit to any option before you went through the full life-cycle for more then a couple of times/months
  * Between similar options select the more [interoperable](https://searchmicroservices.techtarget.com/definition/interoperability) and with a larger 3rd party ecosystem
  * Don't look for a sliver bullet, the odds are you will end-up with a number of tools rather than with a single universal solution
* And one more point: number of deployed assets will be growing, [tagging](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags) is a facility to find your instances after the deployment, as well as to manage cost allocation