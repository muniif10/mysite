import jest from "@/assets/jest.jpg"
import past_order from "@/assets/past_orders.jpeg"
import firebase from "@/assets/firebase.jpeg"
import app_home from "@/assets/app_home.jpeg"
import sidebar from "@/assets/sidebar.jpeg"
type PortfolioItem = {
    title: string;
    image: string[] | null;
    description: string;
    date: string;
    url?: string;
}

// Image hosted on server must be given relative path to the project

const portfolios: PortfolioItem[] =
    [

        {
            title: "Barebone C GUI calculator using Raylib",
            date: "August 2025",
            description: "Within my free time after internship, I worked on one of my ambition of creating a GUI app using C to delve into pointers and memory management.",
            url: "https://github.com/muniif10/GUI-Calculator-w-Raylib",
            image: null
        },
        {
            title: "Calorie Tracker with Image Classification Mobile Application",
            date: "January 2025",
            description: "My final year project for the prerequisite of graduation which involves Data Collection, Data Cleaning, Machine Learning, Python API Web Application, Flutter, and Tensorflow",
            image: null,
            url: "https://github.com/muniif10/fyp_calorietrack"
        },
        {
            title: "Unit Testing with Jester",
            date: "November 2024",
            description: "Implemented unit testing for a simple todo API server for correctness and consistency. Understood the basic concept of testing and coverage.",
            image: [jest],
            url: "https://github.com/muniif10/todo-w-api/blob/master/src/tests/task.test.ts"
        },
        {
            title: "Food Delivery Application for Mamak Restaurant",
            date: "June 2024",
            image: [app_home, sidebar, past_order, firebase],
            description: "Developed a Flutter mobile application for Android platform for food delivery. It implements user registration, menu browsing, order placement with use of Google's Firebase for backend and Provider for state-management within the app. User's history is saved within Firestore for recording purpose.",
            url: "https://github.com/muniif10/food_delivery_kandarbite"

        },
        {
            title: "Real-time Facial Expression Recognition Web App",
            date: "January 2023",
            image: null,
            description: "Developed an emotion recognition model using Tensorflow and dataset obtained from Kaggle that enabled real-time emotion recognition. It could be further developed for collection of expression during a study with less dependency on human manual data collection.",

        },
        {
            title: "Customer Relation Management System Web Application",
            date: "June 2022",
            image: ["https://github.com/muniif10/database_crm/raw/master/images/UI1.png?raw=true"],
            description: "Designed a simple CRUD application to manage customer interaction with business and it incorporates MySQL as the database and Spring Boot together with Thymeleaf to produce the front-end. MySQL was containerized to avoid conflicting with other installations and managing with ease in separate container.",
            url: "https://github.com/muniif10/database_crm"

        },

    ];

export default portfolios;
