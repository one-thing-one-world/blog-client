#!/bin/bash
if [[ -z $(docker ps -q -f "name=^deploy$") ]]; then
    echo "not has==》"
    docker build -t deployfront .
    docker run --name deploy -i -p 80:80 deployfront
else
    echo "has==》"
    docker stop deploy
    docker rf -f deploy
    docker rmi deployfront
    docker build -t deployfront .
    docker run --name deploy -i -p 80:80 deployfront

fi
