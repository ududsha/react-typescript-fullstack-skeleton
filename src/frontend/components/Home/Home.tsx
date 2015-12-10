import * as React from "react";

export interface HomeState {
    results?: GoogleResult[];

}

export class Home extends React.Component<any, HomeState>{

    constructor() {
        super();
        this.bindMethods("_onChange");
    }

    protected bindMethods(...methods: string[]) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
	
    }

    componentWillUnmount() {  
	
    }

    _onChange() {

    }

    render() {
      

        return (
            <div>
          
            </div>
        );
    }
}

export default Home;