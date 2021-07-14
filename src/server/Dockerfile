FROM node:14
COPY package.json ./
RUN yarn
COPY index.js ./
RUN mkdir data
COPY data/words_list.txt ./data
EXPOSE 3002
CMD ["node", "index.js"]
