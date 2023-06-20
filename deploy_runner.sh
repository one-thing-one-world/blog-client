#!/bin/bash
if [[ -z $(docker ps -q -f "name=^deploy$") ]]; then
    echo "not install"
    docker build -t deployfront .
    docker run --name deploy -i -p 80:80 deployfront
else
    echo "has install"
    docker stop deploy
    docker rf -f deploy
    docker rmi deployfront

fi
