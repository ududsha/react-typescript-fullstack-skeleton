/// <reference path="../../../typings/node-mysql-wrapper/node-mysql-wrapper.d.ts"/>
/// <reference path="../../../typings/socket.io/socket.io.d.ts"/>
import {wrap, Helper} from "node-mysql-wrapper";
import {default as live, MysqlLiveServer} from "mysql-live";
import * as socketIO from "socket.io";
import * as config from "../config/config";

export default class Live {

    static io: SocketIO.Server;
    static Mysql: MysqlLiveServer;

    /* Connects & Stores the SocketIO Server and the Mysql Live instance. */
    constructor(http: any) {
        Live.io = socketIO(http);

        let mysql = config.MYSQL_CONFIG;

        var db = wrap(config.format("mysql://{0}:{1}@{2}/{3}?{4}",
            mysql.USER, mysql.PASSWORD, mysql.HOST, mysql.DATABASE, mysql.ARGUMENTS));

        Live.Mysql = live(db, Live.io);
       
    }

    ready(listener:()=>void): void{
        Live.Mysql.handler.db.ready(listener);
    }

}



