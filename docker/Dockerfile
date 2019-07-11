FROM golang:1.12.0 AS builder
# ... my go build steps (removed from this example)
WORKDIR /builder/working/directory
RUN curl -L https://github.com/balena-io/qemu/releases/download/v3.0.0%2Bresin/qemu-3.0.0+resin-arm.tar.gz | tar zxvf - -C . && mv qemu-3.0.0+resin-arm/qemu-arm-static .

# base image
FROM arm32v7/node:11.12.0
#COPY qemu-arm-static /usr/bin
COPY --from=builder /builder/working/directory/qemu-arm-static /usr/bin

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ../package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent

COPY .. .

EXPOSE 3000 

# start app
CMD ["npm", "start"]
