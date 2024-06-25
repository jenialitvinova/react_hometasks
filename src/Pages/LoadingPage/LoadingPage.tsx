import React from 'react';
import "./LoadingPage.css"
import {DotLoader} from "react-spinners";

const LoadingPage: React.FC = () => {
    return (
        <div className="loading__wrapper">
            <DotLoader
                color="#35B8BE"
            />
        </div>
    );
};

export default LoadingPage;
