#imagem do node - alpine é a versão thin do node
FROM node:alpine

#Dentro do container, a aplicação estará em /app
WORKDIR /app

#Copia o package.json para dentro do conainter (/app)
COPY package*.json ./

#Executa o NPM install dentro do conainter
RUN npm install

#Copia todos os arquivos que estão fora do container para dentro dele
COPY . .

#Expõe a porta 3000 do container
EXPOSE 3000

#Executa o comando node app.js para iniciar a aplicação
CMD ["node", "index.js"]
