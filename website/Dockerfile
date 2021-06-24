FROM node:alpine
WORKDIR /app/midsommar
COPY package.json yarn.lock ./
RUN yarn install --check-files
COPY . .
RUN yarn build
CMD yarn preview --host
