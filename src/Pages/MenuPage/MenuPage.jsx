import MainMenu from "./MenuServices/MenuServices";
import Hero from "./HeroComponent/Hero";
import "./MenuPage.css";

const MenuPage = () => (
  <div className="background flex-elem">
    <main className="main">
      <MainMenu />
      <Hero />
    </main>
  </div>
);

export default MenuPage;
