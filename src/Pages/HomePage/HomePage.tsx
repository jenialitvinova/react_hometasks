import React from "react";
import "./HomePage.css";
import Button from "../../components/Buttons/Buttons";
import GreenStar from "../../assets/GreenStar.svg";
import HomePageImg from "../../assets/HomePageImg.svg";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Background">
      <main className="MainWrapper flex-elem">
        <div className="HomeInfo flex-elem">
          <h1 className="Title">
            Beautiful food & takeaway, <b className="blue">delivered</b> to your
            door.
          </h1>
          <h2 className="SubTitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </h2>
          <Button
            buttonInfo="Place an Order"
            onClick={() => navigate("/order")}
          />
          <div className="StarRating flex-elem">
            <div className="FlexedWrapper flex-elem">
              <div className="StarDiv">
                <img src={GreenStar} alt="StarImg" className="StarImg" />
              </div>
              <p className="StarText">TrustPilot</p>
            </div>
            <div>
              <b className="blue">4.8 out of 5</b> based on 2000+ reviews
            </div>
          </div>
        </div>
        <div className="HomeImgDiv flex-elem">
          <img src={HomePageImg} alt="PageImg" className="HomeImg" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
