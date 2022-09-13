For start code in server project need write node NAME_OF_FILE.js

### List of using technologies:

### Step by step what I do:
- input in zsh $ npm init for create package.json with init configs;
- install express library develop serverside app $ npm i express;
- add in package.json line "type": "module", for node can use import (ES6+) in his files of project;
- in index.js add import of express and create const app with express() what save states and comands we speak with server;
- install npm library nodemon and add script for easy start it for subscribe of edit and reload server working
- if we need try query to server you can use Insomnia
- write app.use(express.json()) to stady our server to read json body of post query
- install npm library jwt(jsonwebtoken) for create token to session user identify
- install npm library mongoose what halp work with database Mongodb and include it. Include it lib and use in code to connect created db
### We create server app by MVC
- create models User and export default it
- install npm library express-validator
- write post query and use validator in function
- create user as doc by new UserModel with all fields
- install npm library bcrypt to crypt password
