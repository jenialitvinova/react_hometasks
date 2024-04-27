import "./Logo.scss";

import LogoImg from "../../assets/Logo.svg"

function Logo() {
    return(
        <div className="logo flex-elem">
            <img src={LogoImg} alt="Logo-img" className="logo-img" />
        </div>
    )
}

export default Logo;