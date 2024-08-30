import "./main.css";
import footer from "./components/footer";
import {signUp,login} from "./components/sign-up";
import header from "./components/header";

const App=(()=>{
    header();
    //AUTHORIZATION
    const signUpBtn = document.querySelector(".signUp");
        signUpBtn.addEventListener("click", ()=>{
            signUp();
        });
    const loginBtn = document.querySelector(".login");
        loginBtn.addEventListener("click", ()=>{
            login();
        });
    const main = document.querySelector("main");
    footer();
    
})();
