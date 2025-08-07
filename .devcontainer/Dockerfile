FROM node:22.18.0

RUN npm install -g npm@10.9.3

################################################################################
# Install prerequisites
RUN apt-get update
RUN apt-get install -y \
   lsb-release \
   curl

RUN npm install -g typescript@5.1.3

