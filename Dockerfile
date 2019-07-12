#curl -L https://github.com/balena-io/qemu/releases/download/v3.0.0%2Bresin/qemu-3.0.0+resin-arm.tar.gz | tar zxvf - -C . && mv qemu-3.0.0+resin-arm/qemu-arm-static .

# base image
FROM arm32v7/node:11.12.0
COPY qemu-arm-static /usr/bin

# set working directory
RUN mkdir /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV PUBLIC_URL /jpribyl/

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install serve

#installing global npm package
#ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# optionally if you want to run npm global bin without specifying path
#ENV PATH=$PATH:/home/node/.npm-global/bin 
#RUN npm install -g serve

COPY . .

RUN npm run build
EXPOSE 3000 

# start app
CMD ["serve", "-s", "build", "-l", "3000"]
#RUN npm run build
#CMD ["npm", "start"]
