FROM node:14
COPY package.json ./
RUN yarn
COPY . .
EXPOSE 3002
CMD ["node", "index.js"]
