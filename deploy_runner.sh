#!/bin/bash
if [[ -n $(docker ps -q -f "name=^deploy$") ]]; then
    echo "has install"
    docker stop deploy
    docker rf -f deploy
    docker rmi deployfront
else
    docker build -t deployfront .
    docker run --name deploy -i -p 80:80 deployfront
    echo "not install"
fi
