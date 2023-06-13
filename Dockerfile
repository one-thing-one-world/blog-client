# production stage
FROM nginx as production-stage
COPY ./build /usr/share/nginx/html/build
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
