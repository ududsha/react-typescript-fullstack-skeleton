import * as React from "react";


export interface HeaderNavProps extends React.Props<any> {

}

class HeaderNav extends React.Component<any,{}>{

    props:HeaderNavProps;

    constructor(props?:HeaderNavProps) {
        super(props);
    }


    render() {

        return (
            <nav className="container-fluid navbar navbar-default" 
                role="navigation" style={navStyle}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">

                    <ul className="nav navbar-nav" >
                        <li className="navbar-left">
                            <a href="#" className="brand-link">
                           
                            </a>
                        </li>
                       
                    </ul>


                </div>
            </nav>
        );
    }


}
export default HeaderNav;