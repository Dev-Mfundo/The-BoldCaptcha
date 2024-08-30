import "./main.css";

const App=(()=>{

    //HEADER
    const header = document.querySelector("header");
    const logo = document.createElement("div");
    logo.className="logo";//logo
    logo.innerHTML="<b>Bold</b><i>Captcha</i>";
    header.appendChild(logo);

    const navbar= document.createElement("div");
    navbar.className="navbar";//navbar
    header.appendChild(navbar);
    

    const toggleBar = document.createElement("div");//toggleBar
    toggleBar.innerHTML=`
        <div class="firstLine"></div>
        <div class="seconfLine"></div>
        <div class="thirdLine"></div>
    `;
    toggleBar.addEventListener("click", ()=>{
        if((navbar.style.display) == "none"){
            navbar.style.display="flex";
        }else{
            navbar.style.display="none";
        }
    })
    toggleBar.className="toggleBar";
    header.appendChild(toggleBar);

    const courses = document.createElement("button");
    courses.innerHTML="Courses";//courses
    courses.className="courses";
    navbar.appendChild(courses);
    const about = document.createElement("button");
    about.innerHTML="about";//about
    about.className="about";
    navbar.appendChild(about);
    const resources = document.createElement("button");
    resources.innerHTML="Resources";//resources
    resources.className="resources";
    navbar.appendChild(resources);
    const community = document.createElement("button");
    community.innerHTML="Community";//community
    community.className="community";
    navbar.appendChild(community);
    const signUp = document.createElement("button");
    signUp.innerHTML="Sign up";//sign up
    signUp.className="signUp";
    navbar.appendChild(signUp);
    const login = document.createElement("button");
    login.innerHTML="Login";//login
    login.className="login";
    navbar.appendChild(login);

    
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <div class="social-icons">
        <a href="https://discord.com" target="_blank" class="icon discord">
            <i class="fab fa-discord"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="icon twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://github.com" target="_blank" class="icon github">
            <i class="fab fa-github"></i>
        </a>
    </div>
    <div class="footer-links">
        <a href="/legal-terms" class="footer-link">Legal Terms</a>
        <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
    </div>
    <p>© 2024 BoldCaptcha. All rights reserved.</p>
    `;
})();
