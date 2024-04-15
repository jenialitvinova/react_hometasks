import { footerNavigation } from "../../../__mocks__/testData";
import "./Navigation.scss";

function Navigation() {
    return (
        <nav>
            <ul className="footer__nav flex-elem">
                {footerNavigation.map((item) => (
                    <li className="flex-elem" key={item.id}>
                        {item.content.map((content) => (
                            <p className={content === item.content[0] ? "footer_p black" : "footer__p"} key={content}>{content}</p>
                        ))}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation