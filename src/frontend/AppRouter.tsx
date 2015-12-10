/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react-router/react-router.d.ts"/>
import * as React from "react";
import * as ReactRouter from "react-router";
import AppLayout from "./components/AppLayout/AppLayout";
import PageNoMatch from "./components/Errors/PageNoMatch";
import Home from "./components/Home/Home";

export interface RootProps extends React.Props<any> {
    history: any;
}

class AppRouter extends React.Component<any, {}> {

    constructor() {
        super();
    }

    render() {
        return (
            <ReactRouter.Router history={this.props.history}>
                <ReactRouter.Route path="/" component={AppLayout}>
                
                    <ReactRouter.IndexRoute component={Home} />
                       
					<ReactRouter.Route path="*" component={PageNoMatch}/>	
             
                    </ReactRouter.Route>
                </ReactRouter.Router>
        );
    }
}

export default AppRouter;