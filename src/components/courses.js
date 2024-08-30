import "./courses.css";

export default function displayCourses() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const courses = [
        { name: "JavaScript Developer", icon: "fa-js-square", duration: "6 Months" },
        { name: "Python Developer", icon: "fa-python", duration: "5 Months" },
        { name: "TypeScript Developer", icon: "fa-code", duration: "4 Months" },
        { name: "PHP Developer", icon: "fa-php", duration: "4 Months" },
        { name: "WordPress Developer", icon: "fa-wordpress", duration: "3 Months" },
        { name: "Java Developer", icon: "fa-java", duration: "6 Months" },
    ];

    const coursesSection = document.createElement("section");
    coursesSection.className = "courses-section";

    const heading = document.createElement("h1");
    heading.textContent = "Choose Your Path";
    heading.className = "courses-heading";
    coursesSection.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "courses-grid";

    courses.forEach((course) => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";

        const courseIcon = document.createElement("i");
        courseIcon.className = `fab ${course.icon} course-icon`;
        courseCard.appendChild(courseIcon);

        const courseName = document.createElement("h3");
        courseName.textContent = course.name;
        courseCard.appendChild(courseName);

        const courseDuration = document.createElement("p");
        courseDuration.textContent = `Duration: ${course.duration}`;
        courseDuration.className = "course-duration";
        courseCard.appendChild(courseDuration);

        grid.appendChild(courseCard);
    });

    coursesSection.appendChild(grid);
    main.appendChild(coursesSection);

    return main;
}
