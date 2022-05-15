FROM nginx:alpine
WORKDIR /app
# Run

COPY /app/APP-META/nginx.conf /etc/nginx/templates/default.conf.template
COPY /app/dist /usr/share/nginx/html
