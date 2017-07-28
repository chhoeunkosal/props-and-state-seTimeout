import React from 'react'
import {
    Link,
} from 'react-router-dom';
export default class Header extends React.Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-12">        
                        <nav className="navbar  navbar-fixed-top ">
                            <div className="container-fluid">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/"><h4>Home</h4></Link></li>
                                        <li><Link to="/Store"><h4>Store</h4></Link></li>
                                        <li><Link to="Contact"><h4>Contact</h4></Link></li>
                                        <li><Link to="About"><h4>About</h4></Link></li>
                                    </ul>   
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
           
        )
    }
}