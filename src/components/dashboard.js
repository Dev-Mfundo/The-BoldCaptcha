import "./dashboard.css";

export default function displayDashboard() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    // Header Section
    const header = document.createElement("header");
    header.className = "dashboard-header";

    const nav = document.createElement("nav");
    nav.innerHTML = `
        <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#projects">Project Submissions</a></li>
            <li><a href="#peer-review">Peer Review</a></li>
            <li><a href="#mentor-feedback">Mentor Feedback</a></li>
            <li><a href="#progress">Course Progress</a></li>
            <li class="user-info">
                <span class="username">John Doe</span>
                <img src="avatar.png" alt="User Avatar" class="avatar">
            </li>
        </ul>
    `;
    header.appendChild(nav);

    // Sidebar Section
    const sidebar = document.createElement("aside");
    sidebar.className = "dashboard-sidebar";
    sidebar.innerHTML = `
        <nav>
            <ul>
                <li><a href="#exercises">Exercises</a></li>
                <li><a href="#lessons">Lessons</a></li>
                <li><a href="#certification">Certification</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#notifications">Notifications</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </nav>
    `;

    // Content Section
    const content = document.createElement("div");
    content.className = "dashboard-content";
    content.innerHTML = `
        <section id="courses">
            <h2>Your Courses</h2>
            <p>Track your progress and manage your learning paths.</p>
        </section>
        <!-- Additional sections can be added here -->
    `;

    // Append all sections to the main
    main.appendChild(header);
    main.appendChild(sidebar);
    main.appendChild(content);

    return main;
}
