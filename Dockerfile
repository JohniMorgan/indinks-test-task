FROM node:lts

ENV APP_ROOT /web

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]