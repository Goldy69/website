FROM ubuntu:22.10

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install php php-mysql php-xml php-curl php-mbstring composer nodejs -y
