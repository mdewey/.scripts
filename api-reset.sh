#!/usr/bin/env bash

cd ~/va/vets-api 
git checkout . 

/Users/markdewey/.scripts/docker-nuke/docker-nuke.sh

/Users/markdewey/.scripts/start-api.sh