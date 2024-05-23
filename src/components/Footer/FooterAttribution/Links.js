import React, { Component } from 'react';
import "./FooterAttribution.scss";

class Links extends Component {
    render() {
        const { img } = this.props;
        return (
            <div className="social__img-div flex-elem">
                <img className="social__img" src={img} alt="" />
            </div>
        );
    }
}

export default Links;
