## About
FoToRo Stream Server is simple server application providing access to your local video library downloaded from FoToRo's websites.  
So far only ChastityBabes website is supported.

## Install
If these steps are confusing, use [detailed installation tutorial](wiki/Installation-tutorial)
1. Clone this repository
1. Create `.env` file in the root directory
1. Run `npm install` to install dependencies

### Configuring .env
`PORT` is optional.  
`CHASTITY_BABES_DIRECTORY` is required path to directory with Chastity Babes videos. File names are expected to have a prefix like `cb001`.

## Run
1. Run `node server.js`
