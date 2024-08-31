import "./community.css";

export default function displayCommunity() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const communitySection = document.createElement("section");
    communitySection.className = "community-section";

    const heading = document.createElement("h1");
    heading.textContent = "Join Our Community";
    heading.className = "community-heading";
    communitySection.appendChild(heading);

    const content = document.createElement("p");
    content.className = "community-content";
    content.textContent = `
        We believe in the power of community. 
        Our vibrant Discord server is where learners from all around the world come together to help each other grow. 
        Whether you're stuck on a problem or just want to share your progress, 
        there's always someone ready to lend a hand or offer advice. 
        Our channels cover everything you might need on your journey to becoming a software engineer, 
        from coding challenges to career advice. Join us and be part of something bigger!
    `;
    communitySection.appendChild(content);

    const discordLink = document.createElement("a");
    discordLink.href = "#"; //AM Gonna INSERT link once i have a server
    discordLink.textContent = "Join our Discord";
    discordLink.className = "discord-link";
    communitySection.appendChild(discordLink);

    main.appendChild(communitySection);

    return main;
}
