import React from 'react'
export default class Video extends React.Component {
    render() {
        return (
            <section id="feature">
                <div class="video_overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12">
                                <video width="100%" controls autoplay>
                                    <source src="iPhone7.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}