import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="wrapper flex-elem">
            <Header/>
            <div className="background flex-elem">
                <Main />

                <Footer/>
            </div>
        </div>
    );
}

export default App;