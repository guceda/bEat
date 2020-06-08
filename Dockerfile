
# --------------------------------------------------------------------------------------
#BUILD THE IMAGE WITH A NAME::    docker build -t guceda/beatfront  -f Dockerfile .
#RUN::     docker run -it -p 4200:4200  guceda/beatfront
#BROWSER ::        computerIP:4200  (ipconfig getifaddr en0)
# --------------------------------------------------------------------------------------

#install OS
FROM ubuntu

#install npm & node
RUN apt-get update
RUN apt-get -y install curl
RUN apt-get -y install npm
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y install nodejs

#install angular globally
RUN npm install -g @angular/cli

#copy application to image
COPY . /bEat

#set working directory
WORKDIR /bEat

#install dependencies
RUN npm install

#entrypoint for docker run
#ENTRYPOINT [""]

#default command if not passed when docker run
CMD ng serve --host 0.0.0.0
