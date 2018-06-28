#!/bin/bash

PUSH="$1"
VERSION="1.0.0"

# aws ecr get-login --no-include-email --region us-west-2
docker build -t logtest:$VERSION .
docker tag logtest:$VERSION 551118304766.dkr.ecr.us-west-2.amazonaws.com/logtest:$VERSION

if [[ "$PUSH" == "push" ]] ; then
  docker push 551118304766.dkr.ecr.us-west-2.amazonaws.com/logtest:$VERSION
fi

