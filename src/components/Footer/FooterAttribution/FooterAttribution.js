import React, { Component } from 'react';
import "./FooterAttribution.scss";

class FooterAttribution extends Component {
    render() {
        return (
            <div className="social__info">
                Built by <b className="blue">Flowbase</b> · Powered by <b className="blue">Webflow</b>
            </div>
        );
    }
}

export default FooterAttribution;
