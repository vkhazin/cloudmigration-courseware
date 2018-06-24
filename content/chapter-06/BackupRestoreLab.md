# Backup and Restore Lab

## Objectives

* You are responsible for a demonstrable proof-of-concept for backup and recovery design
* Walk through a common task of backing up and restoring a data using a couple of options
* Notices the different options and time-line for recovery

## Steps

1. Login into an EC2 instance
2. Let's install a MySql database on it: `sudo apt-get install mysql-server -y`
3. Specify a password for root user e.g. `qWerty1@3456`
4. Login into the database using [MySql cli](https://dev.mysql.com/doc/refman/8.0/en/mysql.html): `mysql -u root -p`
5. Once in the mysql shell, let's create a database, a table, write some data into it, and confirm there is a data in the table:
```
create database helloworlddb;
use helloworlddb;
create table message (id int, text nvarchar(256), primary key (id));
insert into message values(1, 'hello world!');
select * from message;
```
6. Expected output:
```
+----+--------------+
| id | text         |
+----+--------------+
|  1 | hello world! |
+----+--------------+
1 row in set (0.00 sec)
```
7. Now we need to backup the valuable data:
8. Exit mysql shell: `exit;`
9. Create a back with mysqldump command: 
```
mkdir ~/backup
mysqldump -u root -p helloworlddb > ~/backup/helloworlddb.bak
```
10. Provider root password
11. Pick into content of the backup file: `cat ./helloworlddb.bak`
12. Now what? Can I trust the operating system to store the backup file? Where is my tape drive to move the backup file to?
13. Options are readily available:
  * Download file to your local machine and take care of it away from the public cloud, familiar, but may be not as robust
  * Use S3 bucket to store the backup file
  * Use an external file storage, e.g. [Azure Blob with immutable support](https://azure.microsoft.com/en-us/blog/azure-immutable-blob-storage-now-in-public-preview/)
14. Downloading a file from/to a remote instance using ssh: https://www.namecheap.com/support/knowledgebase/article.aspx/9571/89/how-to-download-a-file-via-ssh
15. Using S3 Bucket comes with a a high durability of [99.999999999%](https://aws.amazon.com/s3/faqs/)
16. Let's go through the process of uploading backup file to S3 storage:
17. Create a bucket using [Aws Web Console](https://s3.console.aws.amazon.com/s3/home), make sure to select the region where ec2 instance is running
18. Give bucket a name: *your-name*-mysql-backup
19. Back into the EC2 instance, install [aws cli](https://aws.amazon.com/cli/): `sudo apt-get install awscli -y`
20. Configure aws cli with: `aws configure`, you will need your access key and secret from yesterday, if lost you can create a new key/secret for your own user account, you may also adopt a unique account per service strategy
21. A couple of items to pay attention to as you are creating a bucket:
  * **Versioning:** S3 can store versions of your files without your own naming convention strategy
  * **Default Encryption:** S3 can encrypt data at rest using your own, or Aws provisioned keys
  * **Public Access:**: you, probably, don't want to make db backups available to everyone
23. Running the sync command (make sure to replace bucket name with your own):
`aws s3 sync '/home/ubuntu/backup' 's3://vlad-khazin-backup-mysql' --storage-class STANDARD_IA`
24. Where `--storage-class STANDARD_IA` reduces the cost for hosting infrequently accessed content, see more details in [S3 Storage Classes](https://aws.amazon.com/s3/storage-classes/)
24. Now we can validate that the backup file has been stored in S3
25. To simulate a sequence of disasters, delete backup file: `rm -rf ~/backup` to simulate a lost backup on the local file system
26. Login into mysql shell: `mysql -u root -p`
27. *Accidently* drop the table: use helloworlddb; drop table message;`
28. Confirm there is no more table in the database: `use helloworlddb; select * from message;`
29. Expected result:
```
Database changed
ERROR 1146 (42S02): Table 'helloworlddb.message' doesn't exist
```
30. Exit the mysql shell with `exit;`
31. Copy the file back from S3 storage to EC2 file system: `aws s3 sync 's3://vlad-khazin-backup-mysql' ~/backup`
32. Restore the database from backup: `mysql -u root -p helloworlddb < ~/backup/helloworlddb.bak `
33. Login back into mysql shell to confirm the data has been restored: `use helloworlddb; select * from message;`
34. Expected output:
```
+----+--------------+
| id | text         |
+----+--------------+
|  1 | hello world! |
+----+--------------+
1 row in set (0.00 sec)
```
35. Have time? You can look into [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-linux) steps and instructions
36. As well as there is a much simpler way to manage database backup/restore processes on the public cloud: 
  * [Aws Aurora Backtrack](https://aws.amazon.com/blogs/aws/amazon-aurora-backtrack-turn-back-time/?sc_icampaign=launch_aurora_backtrack&sc_ichannel=ha&sc_icontent=awssm-856&sc_iplace=signin&trk=ha_awssm-856)
  * [Sql Azure](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-automated-backups)
  * [MySql Azure](https://docs.microsoft.com/en-us/azure/mysql/concepts-backup)
  * [Aws Rds](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html)
