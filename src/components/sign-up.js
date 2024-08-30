import "./sign-up.css";

export default function authUser(type) {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear any existing content

    // HERO SECTION
    const heroSection = document.createElement("section");
    heroSection.className = "hero";
    heroSection.innerHTML = `
        <div class="hero-content">
            <h1>BoldCaptcha</h1>
            <p>Your journey to becoming a software engineer starts here.</p>
        </div>
    `;
    main.appendChild(heroSection);

    // FORM SECTION
    const formSection = document.createElement("section");
    formSection.className = "auth-section";

    const form = document.createElement("form");
    form.className = "auth-form";

    const header = document.createElement("h2");
    header.textContent = type === "signUp" ? "Create Your Account" : "Welcome Back!";
    form.appendChild(header);

    const subHeader = document.createElement("p");
    subHeader.textContent = type === "signUp" 
        ? "Join us today and start coding your future." 
        : "Log in to continue your learning.";
    form.appendChild(subHeader);

    // EMAIL FIELD
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email Address";
    form.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.placeholder = "Enter your email";
    form.appendChild(emailInput);

    // PASSWORD FIELD
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password";
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.required = true;
    passwordInput.placeholder = "Enter your password";
    form.appendChild(passwordInput);

    // SIGN UP SPECIFIC FIELD
    if (type === "signUp") {
        const confirmPasswordLabel = document.createElement("label");
        confirmPasswordLabel.textContent = "Confirm Password";
        form.appendChild(confirmPasswordLabel);

        const confirmPasswordInput = document.createElement("input");
        confirmPasswordInput.type = "password";
        confirmPasswordInput.name = "confirmPassword";
        confirmPasswordInput.required = true;
        confirmPasswordInput.placeholder = "Confirm your password";
        form.appendChild(confirmPasswordInput);
    }

    // SUBMIT BUTTON
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = type === "signUp" ? "signUp" : "login";
    submitButton.textContent = type === "signUp" ? "Sign Up" : "Log In";
    form.appendChild(submitButton);

    formSection.appendChild(form);
    main.appendChild(formSection);

    return main;
};

// Example usage for sign up and login pages
export function signUp() {
    return authUser("signUp");
}

export function login() {
    return authUser("login");
}
