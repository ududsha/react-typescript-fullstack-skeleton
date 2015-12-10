import * as React from "react";

export default class PageNoMatch extends React.Component<any,{}>{

    constructor(props:any){
        super(props);
    }

    render(){
        return (<div><h1>Sorry, your page does not found. Try again.</h1></div>);
    }
}