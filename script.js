const employees = [
    // LEADERSHIP

    {
        name: "Namdev Babasaheb Gavhane",
        role: "CEO",
        photo: "images/Namdev Gavhane.png"
    },

    {
        name: "Abhishek Kalekar",
        role: "CTO",
        photo: "images/Abhishek Kalekar.jpg"
    },

    {
        name: "Dhananjay Madan Bachal",
        role: "CMO",
        photo: "images/Dhananjay Bachal.jpg"
    },


    // EMPLOYEES

    {
        name: "Atharva Vijay Patil",
        role: "Employee",
        photo: "images/Atharva Patil.png"
    },

    {
        name: "Ayush Vinod Pate",
        role: "Employee",
        photo: "images/Ayush Pate.jpg"
    },

    {
        name: "Dhanrajsing Dagadusing Kachhwa",
        role: "Employee",
        photo: "images/Dhanrajsing Kachhwa.jpg"
    },

    {
        name: "Digvijay Patil",
        role: "Employee",
        photo: "images/Digvijay PATIL.jpg"
    },

    {
        name: "Goraksh Malikarjun Swami",
        role: "Employee",
        photo: "images/Goraksh swami.jpg"
    },

    {
        name: "Harshwardhan Shewale",
        role: "Employee",
        photo: "images/HARSHAL PRASHANT SHEWALE.jpg"
    },

    {
        name: "Harshavardhan Salunkhe",
        role: "Employee",
        photo: "images/Harshavardhan Salunkhe.jpg"
    },

    {
        name: "Jagdish Prakash Thakare",
        role: "Employee",
        photo: "images/Jagdish Thakare.jpg"
    },

    {
        name: "Krunal Janardhan Dhote",
        role: "Employee",
        photo: "images/Krunal Dhote.webp"
    },

    {
        name: "Om Bapu Hagawane",
        role: "Employee",
        photo: "images/Om Hagawane.png"
    },

    {
        name: "Pratik Bhaskar Patil",
        role: "Employee",
        photo: "images/PRATIKBHASKAR PATIL.jpg"
    },

    {
        name: "Pranavsingh Nileshsingh Deorale",
        role: "Employee",
        photo: "images/Pranavsingh Deorale.png"
    },

    {
        name: "Samarth Mahesh Vite",
        role: "Employee",
        photo: "images/Samarth Vite.jpg"
    },

    {
        name: "Saurabh Pawar",
        role: "Employee",
        photo: "images/SAURABH PAWAR.jpg"
    },

    {
        name: "Sumedh Narayan Patil",
        role: "Employee",
        photo: "images/SUMEDH PATIL.jpeg"
    },

    {
        name: "Tushar Eknath Pastapure",
        role: "Employee",
        photo: "images/Tushar Pastapure.jpg"
    },

    {
        name: "Vaibhav Wadile",
        role: "Employee",
        photo: "images/Vaibhav Wadile.jpg"
    },

    {
        name: "Yuvraj Chaudhari",
        role: "Employee",
        photo: "images/Yuvraj Chaudhari.png"
    }
];


// ==========================
// GET HTML CONTAINERS
// ==========================

const leadershipContainer = document.getElementById(
    "leadership-container"
);

const employeeContainer = document.getElementById(
    "employee-container"
);

const searchInput = document.getElementById(
    "searchInput"
);


// ==========================
// CREATE EMPLOYEE CARD
// ==========================

function createEmployeeCard(employee) {

    const card = document.createElement("div");

    card.classList.add("employee-card");

    card.innerHTML = `
        <img
            src="${employee.photo}"
            alt="${employee.name}"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/150?text=No+Photo'"
        >

        <div class="employee-info">
            <h3>${employee.name}</h3>
            <p>${employee.role}</p>
        </div>
    `;

    return card;
}


// ==========================
// DISPLAY EMPLOYEES
// ==========================

function displayEmployees(employeeList) {

    leadershipContainer.innerHTML = "";

    employeeContainer.innerHTML = "";


    employeeList.forEach(employee => {

        const card = createEmployeeCard(employee);


        // Send CEO, CTO and CMO
        // to Leadership Section

        if (
            employee.role === "CEO" ||
            employee.role === "CTO" ||
            employee.role === "CMO"
        ) {

            leadershipContainer.appendChild(card);

        }

        // Send all other employees
        // to Team Section

        else {

            employeeContainer.appendChild(card);

        }

    });

}


// ==========================
// INITIAL DISPLAY
// ==========================

displayEmployees(employees);


// ==========================
// SEARCH FUNCTION
// ==========================

searchInput.addEventListener("input", function () {

    const searchValue = this.value
        .toLowerCase()
        .trim();


    const filteredEmployees = employees.filter(employee =>
        employee.name
            .toLowerCase()
            .includes(searchValue)
    );


    displayEmployees(filteredEmployees);

});