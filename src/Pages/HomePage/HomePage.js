import {
    Title,
    SubTitle,
    StarRating,
    StarDiv,
    StarImg,
    HomeInfo,
    HomeImgDiv,
    HomeImg,
    MainWrapper,
    StarText,
    FlexedWrapper,
    Background,
} from "./HomePage.styles";
import Button from "../../components/Buttons/Buttons";
import GreenStar from "../../assets/GreenStar.svg";
import HomePageImg from "../../assets/HomePageImg.svg";
const HomePage = () => (
    <Background>
        <MainWrapper className="flex-elem">
            <HomeInfo className="flex-elem">
                <Title>
                    Beautiful food & takeaway, <b className="blue">delivered</b> to your
                    door.
                </Title>
                <SubTitle>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500.
                </SubTitle>
                <Button buttonInfo="Place an Order" />
                <StarRating className={"flex-elem"}>
                    <FlexedWrapper className="flex-elem">
                        <StarDiv>
                            <StarImg src={GreenStar} alt="StarImg" />
                        </StarDiv>
                        <StarText>TrustPilot</StarText>
                    </FlexedWrapper>
                    <div>
                        <b className="blue">4.8 out of 5</b> based on 2000+ reviews
                    </div>
                </StarRating>
            </HomeInfo>
            <HomeImgDiv className="flex-elem">
                <HomeImg src={HomePageImg} alt="PageImg" />
            </HomeImgDiv>
        </MainWrapper>
    </Background>
);

export default HomePage;