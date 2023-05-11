# services:
# drone-server:
# image: drone/drone:1
# container_name: drone-server
# ports:
# - 80:80
# volumes:
# - /var/lib/drone:/var/lib/drone/
# restart: always
# environment:
# - DRONE_SERVER_HOST="{YOUR_MACHINE_HOST}"
# - DRONE_SERVER_PROTO=http
# - DRONE_RPC_SECRET=db242daf100b137d40f7f40f82168b7b
# - DRONE_GITHUB_CLIENT_ID="{CLIENT_ID}"
# - DRONE_GITHUB_CLIENT_SECRET="{CLIENT_SECRET}"

# drone-runner:
# image: drone/drone-runner-docker:1
# container_name: drone-runner
# restart: always
# depends_on:
# - drone-server
# volumes:
# - /var/run/docker.sock:/var/run/docker.sock
# environment:
# - DRONE_RPC_HOST=drone-server
# - DRONE_RPC_PROTO=http
# - DRONE_RPC_SECRET=db242daf100b137d40f7f40f82168b7b
# - DRONE_RUNNER_CAPACITY=2
# build stage
#使用14.15.0的node版本作为运行软件
# FROM node:14.14.1 as build-stage
# #将此目录作为工作目录
# WORKDIR /app
# #复制本目录下的package文件（源文件）到工作目录（目标目录）
# COPY package*.json ./
# #在工作目录执行npm install
# RUN npm install
# #将本本录下所有文件复制到目标目录
# COPY . .
# RUN npm run build

# production stage
FROM nginx as production-stage
# WORKDIR /app
COPY . /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
