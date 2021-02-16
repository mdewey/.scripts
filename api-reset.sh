#!/usr/bin/env bash

cd ~/va/vets-api 
git checkout . 
git pull 

cp /Users/markdewey/.ssh/lighthouse_rsa ~/va/vets-api/modules/health_quest/config/rsa

/Users/markdewey/.scripts/docker-nuke/docker-nuke.sh

/Users/markdewey/.scripts/start-api.sh