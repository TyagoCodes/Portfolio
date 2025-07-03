export const myProjects = [
    {
        id: 1,
        title: "Space Tourism iOS App ",
        description:
            "A futuristic space exploration mobile app that showcases interactive content for destinations, crew, and technology using a dynamic JSON structure and UIKit animations.",
        subDescription: [
            "Built a responsive and interactive layout using UIKit and Swift, with clean view controller separation.",
            "Parsed external JSON data into Swift models and displayed content dynamically across reusable views.",
            "Implemented a tab-based navigation to switch between destinations, crew members, and technologies.",
            "Designed for iOS 16+ with visual emphasis using Liquid Glass-inspired effects and adaptive constraints.",
        ],
        href: "", //add github link when app is ready for github
        logo: "/public/assets/projects/spacetIcon.png",
        image: "/public/assets/projects/spacet.png",
        tags: [
            {
                id: 1,
                name: "Swift",
                path: "/assets/logos/swift.png",
            },
        ],
    },
    {
        id: 2,
        title: "Gallery Management System",
        description:
            "A full-stack web application for managing photo galleries with secure user authentication and" +
            " image uploads, built using the Node.js ecosystem.",
        subDescription: [
            "Built with Express.js and MongoDB to handle secure image uploads, validation, and storage.",
            "Implemented user registration, login, and JWT-based authentication to restrict gallery access.",
            "Utilized Multer for handling multipart/form-data to support seamless image uploads.",
            "Enforced robust data validation and error handling using express-validator middleware.",
            "Organized MVC folder structure with clear separation of models, views (EJS), and controllers.",
        ],
        href: "https://github.com/TyagoCodes/gallery-ms-main",
        logo: "",
        image: "/assets/projects/galleriePhoto.png",
        tags: [
            {
                id: 1,
                name: "Node.js",
                path: "/assets/logos/node.png",
            },
            {
                id: 2,
                name: "Express.js",
                path: "/assets/logos/expressjs.svg",
            },
            {
                id: 3,
                name: "MongoDB",
                path: "/assets/logos/mongodb.svg",
            },
        ],
    },
    {

        id: 3,
        title: "Push Notification Demo",
        description:
            "A full-stack demo showcasing how to send push notifications from a Node.js backend to web clients using the Notifications API and Service Workers.",
        subDescription: [
            "Built with a Node.js and Express backend to register clients and trigger push messages.",
            "Implemented the Web Push Protocol using the `web-push` library to handle secure communication.",
            "Utilized Service Workers and the Notifications API on the client side to display real-time push alerts.",
            "Focused on practical browser support and real use cases like alerts and updates without user interaction.",
        ],
        href: "https://github.com/TyagoCodes/LaboMontrealSite",
        logo: "",
        image: "/assets/projects/mtllabo.png",
        tags: [
            {
                id: 1,
                name: "Node.js",
                path: "/assets/logos/node.png",
            },
            {
                id: 2,
                name: "Express",
                path: "/assets/logos/expressjs.svg",
            },
            {
                id: 3,
                name: "React",
                path: "/assets/logos/react.png",
            },
        ],
    },
    {
        id: 4,
        title: "Trip Logger Android App",
        description:
            "An Android app for logging, viewing, and saving geolocation-based trips using OpenStreetMap and native Android APIs.",
        subDescription: [
            "Integrated OpenStreetMap for interactive, real-time geolocation tracking.",
            "Enabled users to log and save trips by capturing GPS coordinates with a single tap.",
            "Implemented trip storage and history management using local persistence.",
            "Designed a tabbed navigation interface with modern Material Design components.",
        ],
        href: "https://github.com/TyagoCodes/MapTripSaverApp",
        logo: "",
        image: "/assets/projects/maptripapp.png",
        tags: [
            {
                id: 1,
                name: "Android",
                path: "/assets/logos/androidstudio.svg",
            },
            {
                id: 2,
                name: "Kotlin",
                path: "/assets/logos/kotlin.png",
            },
        ],
    },
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "https://wa.me/15144524562",
        icon: "/assets/socials/whatsapplogo.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/santiago-camelo-104b79270/",
        icon: "/assets/socials/linkedinlogo.svg",
    },
];

export const experiences = [
    {
        title: "Lead Line Cook / Shift Keyholder",
        job: "Resto-bar Gon Bui",
        date: "2021–2022",
        contents: [
            "Supervised a team of 6+ staff during peak service hours.",
            "Managed kitchen operations in the absence of the chef.",
            "Maintained high standards of food preparation, cleanliness, and teamwork.",
        ],
    },
    {
        title: "Student Assistant – Tax Compliance Review Support",
        job: "Revenu Québec — Government Tax Agency",
        date: "2022–Present",
        contents: [
            "Assisted auditors in reviewing employer source deductions for tax compliance.",
            "Managed and processed confidential documents with discretion and accuracy.",
            "Provided administrative support to facilitate smoother audit workflows.",
        ],
    },
    {
        title: "Mobile App Development Student",
        job: "Collège Ahuntsic",
        date: "2024–Present",
        contents: [
            "Currently enrolled in an intensive AEC program focused on mobile application development.",
            "Gaining hands-on experience with tools like Kotlin, Swift, React , and RESTful APIs.",
            "Actively seeking internship or junior developer opportunities to apply practical skills in a real-world environment.",
        ],
    },
];