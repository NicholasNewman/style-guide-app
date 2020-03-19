DEPLOY TO AWS
ng build  && npm run aws-deploy

VIDEO TO DEPLOY TO AWS
https://www.youtube.com/watch?v=ZkYsMBNR_eY&t=600s
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::example-bucket/*"
      ]
    }
  ]
}


INSTALLING BOOTSTRAP RESOURCE
https://www.techiediaries.com/angular-bootstrap/

****************************************
CLI COMMANDS

SERVE PROJECT LOCALLY ON LOCALHOST:4200
ng serve

UPDATE DIST
ng build

GENERATE COMMANDS
ng generate service my-service
ng generate component my-component




