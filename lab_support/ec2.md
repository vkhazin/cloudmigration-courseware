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

  provisioner "file" {
    source      = "/home/ubuntu/gs-rest-service/complete/target/gs-rest-service-0.1.0.jar"
    destination = "/home/ubuntu/java-service/gs-rest-service-0.1.0.jar"
    connection {
      type     = "ssh"
      user     = "ubuntu"
      private_key = "${file("~/.ssh/courseware.key")}"
    }
    connection {
      type     = "ssh"
      user     = "ubuntu"
      private_key = "${file("~/.ssh/courseware.key")}"
    }
  }
  
  provisioner "remote-exec" {
    inline = [
      "sudo apt -y update",
      "sudo apt -y install default-jre",
      "nohup java -jar ./gs-rest-service-0.1.0.jar &"
    ]
    connection {
      type     = "ssh"
      user     = "ubuntu"
      private_key = "${file("~/.ssh/courseware.key")}"
    }
  }

}