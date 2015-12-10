///<reference path="../../typings/express/express.d.ts"/>
///<reference path="../../typings/socket.io/socket.io.d.ts"/>
///<reference path="../../typings/body-parser/body-parser.d.ts"/>
///<reference path="../../typings/node/node.d.ts"/>
///<reference path="../../typings/cookie-parser/cookie-parser.d.ts"/>
///<reference path="../../typings/express-session/express-session.d.ts"/>
///<reference path="../../typings/serve-favicon/serve-favicon.d.ts"/>
declare var Server;  

import * as express from "express";
import * as path from "path";
import * as  bodyParser from 'body-parser';
import {Server} from "http";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import * as favicon from 'serve-favicon';

import * as config from "./config/config";
import Live from  "./database/Live";
import * as AppRouter from "./routes/AppRouter";

var app = express();
var options = {
    secret: config.HTTP_CONFIG.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true
};

var session = expressSession(options);

app.use(cookieParser());
app.use(session); // express-session middleware for express

app.set("view options", { layout: false });
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.use(favicon(__dirname + '/public/assets/images/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var http = Server(app);


/* database */
new Live(http).ready(()=>{
	//When database ready....
	 app.use("/", AppRouter);
});

var server = http.listen(config.HTTP_CONFIG.PORT, () => {
    console.log("===================2016==================");
    console.log("=========================================");
    console.log("Server started at port %s", config.HTTP_CONFIG.PORT);
});
