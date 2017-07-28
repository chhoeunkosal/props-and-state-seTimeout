import React from 'react'
export default class AppStore extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <br />
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="dropdown">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    APP STORE
                            <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}