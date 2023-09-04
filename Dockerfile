FROM node:18-alpine as build
WORKDIR /seefood
COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /seefood/build /usr/share/nginx/html