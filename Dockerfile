# production stage
FROM nginx:alpine as prod-stage
COPY ./build /usr/share/nginx/html/build
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
