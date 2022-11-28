#!/bin/sh

echo "Pre-Build Steps:"
echo "authenticating with AWS ECR..."
Get-ECRLoginCommand.Password | docker login --username AWS --password-stdin 884672407199.dkr.ecr.ap-southeast-1.amazonaws.com

echo "Build Steps:"
echo "building image..."
docker build -t 884672407199.dkr.ecr.ap-southeast-1.amazonaws.com/clothes:latest .

echo "Tag Steps:"
echo "tag image..."
docker tag clothes:latest 884672407199.dkr.ecr.ap-southeast-1.amazonaws.com/clothes:latest

echo "Post-Build Steps:"
echo "pushing image to AWS ECR..."
docker push 884672407199.dkr.ecr.ap-southeast-1.amazonaws.com/clothes:latest