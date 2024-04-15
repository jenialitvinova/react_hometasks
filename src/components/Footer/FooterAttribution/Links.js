import "./FooterAttribution.scss";

function Links({img}) {
    return(
        <div className="social__img-div flex-elem"><img className="social__img" src={img} alt="" /></div>
    )
}

export default Links