import React from 'react'
//import {Route,Switch} from 'react-router-dom'
export default class NavbarManu extends React.Component {
    render() {
        return (
            <div className="">
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar ">
                            <div className="container-fluid border">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle  padding" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> APPSTORE <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>
                                       
                                    </ul>
                                     <ul className="nav navbar-nav  navbar-right">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> ALL <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> SIZE <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> COLORS <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> PRICE <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Action</a></li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">Separated link</a></li>
                                                <li role="separator" className="divider"></li>
                                                <li><a href="#">One more separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/*<div className="col-md-6">

                    </div>*/}
                </div>
            </div>
        )
    }
}