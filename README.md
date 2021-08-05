# 301 Server Warmup

> multiple people have asked for different code exposure options and a more varied way to learn.  In this Warmup, recommendation is that you repetetively build out a basic express server.  Play around with this. Strengthen Yourself. Build on your existing skills.

## To Setup Locally
- If you want to run this code and start the server run the following steps

```
git clone https://github.com/rkgallaway/301-server-warmup.git
cd 301-server-warmup
npm i
```

- create a .env file (see sample.env)
- define your PORT variable in your .env, if you use PORT 3001, the examples below will work out of the box

```
npx nodemon
```

- Examples for hitting this server's routes:
  - `http://localhost:3001`
  - `http://localhost:3001/banana`
  - `http://localhost:3001/greet?name=Ryan`
  - `http://localhost:3001/thisRouteDoesntExist`

### Initially

- Try duplicating this server code without looking at demo code while "peeking" as necessary if you forget or things don't work. specific routes are mostly unimportant, I encourage a base route '/' and a catch all '/*'

### With repetition

- Try to build out this server until you can code it from memory in minutes, add different routes, maybe routes that accept parameters.  Have fun abnd gain confidence.

#### Then

-  Use this exercise as a warmup before you are going to work in a 401 javaScript backend or to keep your server writing skills fresh 
