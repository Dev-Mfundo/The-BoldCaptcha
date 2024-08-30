import "./about.css";

export default function displayAbout() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";

    const header = document.createElement("h1");
    header.textContent = "About BoldCaptcha";
    aboutSection.appendChild(header);

    const content = document.createElement("p");
    content.textContent = `
        At BoldCaptcha, we're not just another tech platform—we're a community of passionate developers, 
        innovators, and learners who believe in the power of technology to change lives. 
        Our mission is to bring the best programming courses to everyone, no matter where they start, 
        and help them transform into world-class programmers.
    `;
    aboutSection.appendChild(content);

    const mission = document.createElement("p");
    mission.textContent = `
        We believe that with the right guidance and resources, anyone can master the art of coding. 
        Our goal is simple: to empower you with the skills and confidence needed to thrive in the tech industry. 
        Whether you're just beginning your journey or looking to level up, BoldCaptcha is here to support you every step of the way. 
        Together, we build not only careers but a future where technology serves as a force for good.
    `;
    aboutSection.appendChild(mission);

    const community = document.createElement("p");
    community.textContent = `
        Join us today and be part of a vibrant community that values collaboration, continuous learning, and pushing the boundaries of what’s possible. 
        Let’s code, create, and achieve greatness—together.
    `;
    aboutSection.appendChild(community);

    main.appendChild(aboutSection);

    return main;
};

