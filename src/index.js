import "./main.css";
import footer from "./components/footer";
import {signUp,login} from "./components/sign-up";
import header from "./components/header";
import displayCourses from "./components/courses";
import displayAbout from "./components/about";
import displayResources from "./components/resources";


const App=(()=>{
    header();
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
    const coursesBtn=document.querySelector(".courses");
    coursesBtn.addEventListener("click", ()=>{
        displayCourses();
    })
    const aboutBtn = document.querySelector(".about");
    aboutBtn.addEventListener("click", ()=>{
        displayAbout();
    });
    const resourcesBtn = document.querySelector(".resources");
    resourcesBtn.addEventListener("click", ()=>{
        displayResources()
    });
    document.addEventListener('DOMContentLoaded', () => {
    const communityBtn = document.querySelector(".community");
    
    if (communityBtn) {
        communityBtn.addEventListener('click', () => {
            window.location.href = 'https://discord.gg/6Aebr8BYKG';
        });
    }
});

})();
