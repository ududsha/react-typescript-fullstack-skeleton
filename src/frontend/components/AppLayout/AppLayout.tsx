/// <reference path="../../../../typings/react-bootstrap/react-bootstrap.d.ts"/>
import  * as React from "react";
export class AppLayout extends React.Component<any,{}> {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>);
    }
}

export default AppLayout;

