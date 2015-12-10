export function format(str:string,...args:any[]):string {
    let formatted = str;
    for (let i = 0; i < args.length; i++) {
        let regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, args[i]);
    }
    return formatted;
};
 
export var HTTP_CONFIG = require("./http.config.json");
export var  MYSQL_CONFIG = require("./mysql.config.json");
