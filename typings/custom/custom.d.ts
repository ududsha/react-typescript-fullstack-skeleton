
/* FOR CLIENT */
declare module "history" {
    function createHistory(): void;
}
// for whatwg-fetch
declare var fetch;

declare module "request" {
    interface RequestStatic {
        new (reqOptions:any,cb:any);

    }
    export = RequestStatic;
}


declare module "querystring" {
    function escape(str: string): string;
    function parse(an: any): any;

}
/* FOR SERVER*/

/*
interface myglobal extends NodeJS.Global{
    StoryCollection:_StoryCollection;
}
declare var global: myglobal;*/