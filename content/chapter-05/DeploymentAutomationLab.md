# Deployment Automation Lab

## Objectives

* Automate provisioning of EC2 instances
* Push application code to the instance

## Steps

1. We will create a simple 'Hello-World' service
1. We will deploy the service to a new EC2 instance and the instance will be auto-provisioned using [Terraform](https://www.terraform.io/) to manage infrastructure as code
1. In order to deploy using terrafrom we will use one EC2 instance to provision a new instance(s) and to deploy the code to it
1. Create new or reuse an existing instance you have previously provisioned on Aws, the instructions provided below have been tested on Ubuntu  Server 16.04
1. Login into the instance using ssh client of your choice
1. Install Terraform:
```
sudo apt-get install unzip -y
wget https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip
unzip terraform_0.11.7_linux_amd64.zip
sudo mv terraform /usr/local/bin/
```
1. Verify installation: `terraform --version`
1. Expected result: `Terraform v0.11.7`
1. Create a folder for Terraform templates:
```
cd ~/
mkdir ./terraform-deployment
cd ./terraform-deployment/
```
1. To manipulate Aws programmatically we need to create access key and secret for our own user account using [IAM Console](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)
1. Make sure to copy access key and secret - you will not be able to access secret ever again, in case you missed to copy just recreate the access key
1. Create variables file using your preferred text editor e.g.: `nano ./variables.tf` with the following content
```
//Aws Credentials
variable "aws-access-key" {
  default = "--paste your access key here--"
}
variable "aws-secret-key" {
  default = "--paste your access secret here--"
}
variable "aws-region" {
  default = "--paste your region here--"
}
```
1. Variables can be provided with default values as above or can be specified via a command line, e.g.:
```
terraform apply \
  -var "aws-access-key=--paste your access key here-- \
  -var "aws-secret-key=--paste your access secret here--" \
  -var "aws-region=--paste your region here--"
```
1. Now we need to configure a provider, e.g. Aws
1. Create a new file using you preferred text editor e.g. `nano ./provider.tf` with the following content:
```
provider "aws" {
  access_key = "${var.aws-access-key}"
  secret_key = "${var.aws-secret-key}"
  region     = "${var.aws-region}"
}
```
1. `${var.aws-access-key}` syntax refers to an input variable we have created in the previous step
1. The next file will specify a creation of an EC2 instance in the default Vpc in the region
1. Create a new file using you preferred text editor e.g. `nano ./ec2.tf` with the following content:
```
resource "aws_instance" "my-first-ec2-instance" {
  ami           = "ami-6a003c0f"
  instance_type = "t2.nano"
}
```
1. Now we need to initialize terraform for the provider we have listed in the provider.tf file: `terraform init`
1. Check for any errors!
1. Let's validate our configurations: `terraform plan`, check for any errors!
1. Let's deploy our configurations: `terraform apply -auto-approve`, it will take a moment. Check for any errors!
1. Go back into Aws Web Console and find the newly created instance
1. A couple of problems you may notice: there is no name assigned for the instance and there is no Key Pair
1. It is now difficult to locate the instance in the web console and is impossible to ssh into it
1. Let's make corrections, modify `./ec2.tf` with your favorite text editor:
```
resource "aws_instance" "my-first-ec2-instance" {
  ami           = "ami-6a003c0f"
  instance_type = "t2.nano"
  key_name      = "--paste key pair name--"
  tags {
    Name = "--paste your name--"
    Organization = "courseware"
    Project = "cloudmigration"
    Environment = "development"
  }
}
```
1. There are more options available if you feel [adventurous](https://www.terraform.io/docs/providers/aws/r/instance.html)
1. Let's apply our updated configurations: `terraform plan`, check for any errors!
1. Back into Aws web console and confirm your instance now carries a name and has a Key Pair assigned
1. Now you should be able to login into the newly provisioned instance with your private ssh key
1. Let's destroy the provisioned infrastructure: `terraform destroy -auto-approve`
1. Next step is deployment of a micro-service to an instance provisioned by terraform
1. Clone a spring boot service:
```
cd ~/
git clone https://github.com/spring-guides/gs-rest-service.git
cd gs-rest-service
```
1. You can explore the source code of the [controller](https://github.com/spring-guides/gs-rest-service/blob/master/complete/src/main/java/hello/GreetingController.java) and the [application](https://github.com/spring-guides/gs-rest-service/blob/master/complete/src/main/java/hello/Application.java)
1. Installing build tools is quite straightforward: `sudo apt install openjdk-9-jdk-headless maven -y`
1. Locally building the application:
```
cd ./complete
export JAVA_HOME="/usr/lib/jvm/java-9-openjdk-amd64"
./mvnw clean package
```
1. Running the build application: `java -jar ./target/gs-rest-service-0.1.0.jar`
1. To test the application locally, open another ssh session into the same instance
1. Run: `curl localhost:8080/greeting`
1. Expected output: `{"id":1,"content":"Hello, World!"}`
1. Close the curl ssh session, return to the ssh session that runs the application and kill it with `Ctrl-C`
1. Now we need to push the jar to the instance we provision using terraform to simulate the end-to-end deployment

