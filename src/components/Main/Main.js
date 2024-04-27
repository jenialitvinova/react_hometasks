import MainMenu from "./MenuServices/MenuServices";
import Hero from "./HeroComponent/Hero";
import "./Main.scss"

function Main() {
    return (
        <main className="main flex-elem">
            <MainMenu/>
            <Hero/>
        </main>
    )
}

export default Main;