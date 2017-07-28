import React from 'react'
import { Link, } from 'react-router-dom'
export default class MainTap extends React.Component {
    render() {
        return (
            <div >
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills border">
                            <li role="presentation">
                                <Link to="Apple">
                                    <img src="/icon1.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Huawei">
                                    <img src="/icon3.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="LG">
                                    <img src="/lg logo.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Oppo">
                                    <img src="/icon2.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Samsang">
                                    <img src="/Samsang.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Nokia">
                                    <img src="/NLogo.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Acatel">
                                    <img src="/acatel.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="LG">
                                    <img src="/icon3.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Oppo">
                                    <img src="/icon1.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Samsang">
                                    <img src="/icon2.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Apple">
                                    <img src="/icon1.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Huawei">
                                    <img src="/icon2.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="LG">
                                    <img src="/icon3.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>
                            <li role="presentation">
                                <Link to="Oppo">
                                    <img src="/icon1.png" className="img-responsive" width="60" alt="Responsive image" />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}