export default function footer(){
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
    return footer;
}