# base da imagem Docker a ser utilizada
# o alpine tem a possiblidade de usar o apk
FROM node:12.22.12-alpine

# instalar chromium para rodar testes unitários
RUN apk add chromium

RUN apk add bash

# adicionar a camada que será o diretório padrão a ser utilizado
WORKDIR /src

# definir à variável CHROME_BIN para localizar a instalação
ENV CHROME_BIN=/usr/bin/chromium-browser

# copiar o arquivo de instalação dos pacotes necessários para diretório padrão do container
COPY package.json ./

# instala o Angular CLI
RUN npm install -g @angular/cli@12.2.18

# realizar a instalação dos pacotes necessários
RUN npm install

# copiar todos os arquivos da máquina para o diretório do container
COPY . .
