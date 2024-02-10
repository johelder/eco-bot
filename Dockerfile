FROM zenika/alpine-chrome:with-puppeteer

WORKDIR /app

USER chrome

COPY --chown=chrome:chrome package*.json ./

RUN npm install

COPY --chown=chrome:chrome . .

RUN npm run build

EXPOSE 3333

CMD ["node", "dist/server.js"]