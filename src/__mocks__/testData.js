import BurgerDreams from "../assets/BurgerDreams.svg";
import BurgerWaldo from "../assets/BurgerWaldo.svg";
import BurgerCali from "../assets/BurgerCali.svg";
import BurgerBacon from "../assets/BurgerBacon.svg";
import BurgerSpicy from "../assets/BurgerSpicy.svg";
import BurgerClassic from "../assets/BurgerClassic.svg";

const navList = [
    { id: 1, text: "Home" },
    { id: 2, text: "Menu" },
    { id: 3, text: "Company" },
    { id: 4, text: "Login" },
];

const buttonsList = [
    { id: 1, text: "Dessert" },
    { id: 2, text: "Dinner" },
    { id: 3, text: "Breakfast" },
];

const foodList = [
    {
        id: 1,
        title: "Burger Dreams",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 9.20 USD",
        imgUrl: BurgerDreams,
    },
    {
        id: 2,
        title: "Burger Waldo",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 10.00 USD",
        imgUrl: BurgerWaldo,
    },
    {
        id: 3,
        title: "Burger Cali",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 8.00 USD",
        imgUrl: BurgerCali,
    },
    {
        id: 4,
        title: "Burger Bacon",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 9.99 USD",
        imgUrl: BurgerBacon,
    },
    {
        id: 5,
        title: "Burger Spicy",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 9.20 USD",
        imgUrl: BurgerSpicy,
    },
    {
        id: 6,
        title: "Burger Classic",
        subTitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        price: "\u0024 8 USD",
        imgUrl: BurgerClassic,
    },
];

let cartQuantity = 0;

const footerNavigation = [
    {
        id: 1,
        content: ["Company", "Home", "Order", "FAQ", "Contact"],
    },
    {
        id: 2,
        content: [
            "Template",
            "Style Guide",
            "Changelog",
            "Licence",
            "Webflow University",
        ],
    },
    {
        id: 3,
        content: ["FlowBase", "More Cloneables"],
    },
];

const phone = "+37066679111";

export {
    navList,
    cartQuantity,
    buttonsList,
    foodList,
    footerNavigation,
    phone,
};