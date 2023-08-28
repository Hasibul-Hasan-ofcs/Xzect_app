import { BsBarChartFill, BsFillCollectionPlayFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";

export const footerDescription1 = {
  str: "Xzect goes beyond providing services - we're committed to empowering both businesses and individuals through our diverse range of Services. We also provides Courses and Trainings. Delve into the world of technology and innovation with our specialized training offerings, designed to enhance your skills and open new avenues of growth. Our courses cover a wide spectrum of cutting-edge fields, including software development, website design, SEO strategies, cloud solutions, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IoT applications, AR and VR experiences, blockchain technology, and more.",
};

export const footerDescription2 = {
  str: "Led by our team of seasoned professionals, each course is carefully crafted to provide practical insights, hands-on experiences, and industry-relevant knowledge. Whether you're looking to upskill, explore new horizons, or dive deeper into a specific tech discipline, Xzect's courses are your gateway to mastering the tools and techniques that drive innovation.",
};

export const coursesFooterData = {
  arr: [
    "Full Stack Dev. Training Course (Student Offer)",
    "Full Stack Dev. (Professionals)",
    "Full Stack Dev. (Certification Course)",
    "Data Science Course",
    "PowerBI Crash Course",
    "Tableau Crash Course",
    "UI/UX Design Course",
    "Full Stack Dev. (Placement Guarantee)",
    "Magento Development Course",
    "WordPress Development Course",
    "Arduino Complete Tutorial",
    "3D Printing with Fusion 360",
  ],
};

export const aboutFooterData = {
  arr: [
    "Go to Main Website",
    "About Xzect",
    "Tech Stack",
    "Our Services",
    "Industries",
    "Contact Us",
    "Terms & Conditions",
    "Refund Policy",
    "Shipping Policy",
    "Privacy Policy",
    "Legal Information",
    "Careers",
  ],
};

export const perksData = [
  {
    title: "Live Sessions Recordings​",
    description:
      "Access recordings of all live sessions, ensuring you never miss a class and can review concepts at your own pace.",
    img: <BsFillCollectionPlayFill></BsFillCollectionPlayFill>,
  },
  {
    title: "Doubt Clearing Support",
    description:
      "Get dedicated doubt clearing sessions to address any questions and clarify concepts for a thorough understanding.",
    img: <BiSupport></BiSupport>,
  },
  {
    title: "Training Certificate",
    description:
      "Earn a valuable training certificate upon successful completion, boosting your resume and demonstrating practical skills.",
    img: <AiFillSafetyCertificate></AiFillSafetyCertificate>,
  },
  {
    title: "Career Assistance",
    description:
      "Receive guidance and support for your career journey, including resume building and interview preparation.",
    img: <BsBarChartFill></BsBarChartFill>,
  },
];

export const aboutCourseData = {
  str: "Get ready for a year-long journey into the exciting world of web development with our Full Stack Web Development Training. Designed for students like you, this program will take you from the foundations of HTML, CSS, and JavaScript to mastering advanced technologies like ReactJS, NodeJS, databases, and server management. This curriculum is designed to provide you with a solid foundation and the advanced knowledge needed to excel in the rapidly evolving field of technology. As you progress through each module, you’ll engage in hands-on projects, interactive classes, and gain practical experience that will set you apart as a skilled and proficient full stack developer. Upon successful completion, you’ll receive an internship certificate, validating your expertise and preparing you for a successful career in the dynamic world of web development.",
};

export const learn_stacks = {
  stack1: [
    "HTML",
    "Tailwind",
    "JQuery",
    "NodeJS",
    "Linux",
    "Git",
    "Hosting on CPanel",
    "Email Setup (MX Record)",
  ],
  stack2: [
    "CSS",
    "Sass",
    "ReactJS + NextJS",
    "MySQL",
    "Nginx",
    "Docker",
    "SSL",
    "Chrome Extension",
  ],
  stack3: [
    "Bootstrap",
    "Javascript",
    "PWA",
    "MongoDB",
    "Apache",
    "AWS / GCP / Azure",
    "Domain Setup (DNS)",
    "Chat-GPT use in Coding",
  ],
};

export const course_content = [
  {
    title: "Web Fundamentals",
    contents: [
      "Introduction to Web Development",
      "HTML5: Tags, attributes, and semantic elements",
      "Basic CSS styling and layout",
    ],
  },
  {
    title: "Advanced CSS and Responsive Design",
    contents: [
      "In-depth study of CSS selectors, properties, and values",
      "Box model and layout techniques",
      "Flexbox and CSS Grid layout",
      "Creating responsive designs with media queries",
      "Introduction to Bootstrap framework",
      "In-depth study of Bootstrap framework",
      "Introduction to Tailwind CSS",
      "Building responsive and attractive UIs",
      "Design systems and UI/UX principles",
      "Animation and transitions with CSS",
    ],
  },
  {
    title: "JavaScript Fundamentals",
    contents: [
      "Introduction to JavaScript programming",
      "Working with variables, data types, and operators",
      "Control structures: Conditional statements and loops",
      "Functions, scope, and closures",
      "Manipulating arrays and objects",
    ],
  },
  {
    title: "Advanced Javascript and JQuery",
    contents: [
      "Understanding the Document Object Model (DOM)",
      "Manipulating the DOM with JavaScript",
      "Introduction to jQuery library",
      "ES6+ features: Arrow functions, template literals, destructuring",
      "Asynchronous programming: Promises and async/await",
      "Fetch API for making HTTP requests",
      "Working with JSON data",
    ],
  },
  {
    title: "Modern Frontend Development",
    contents: [
      "Introduction to ReactJS and its concepts",
      "Building dynamic and interactive user interfaces",
      "State Management and Hooks",
      "React Router and Navigation",
      "Advanced React and Next.js Fundamentals",
      "Data Fetching in Next.js",
      "Rendering Methods in NextJS: SSR, SSG, CSR, etc.",
      "Styling and Layout in React and Next.js",
      "Forms and User Input",
      "State Management and Redux",
      "Testing and Debugging React and Next.js Apps",
    ],
  },
  {
    title: "Node.js and Express.js",
    contents: [
      "Introduction to server-side programming with Node.js",
      "Building RESTful APIs with Express.js",
      "Middleware, request handling, and routing",
      "File uploading and storage using Node.js",
      "Using third-party APIs in Node.js applications",
    ],
  },
  {
    title: "Databases - Relational and SQL",
    contents: [
      "Basics of relational databases and data modeling",
      "Writing SQL queries for data manipulation and retrieval",
      "Database normalization and performance optimization",
      "Advanced SQL techniques: Joins and subqueries",
      "Transactions and ACID properties in databases",
    ],
  },
  {
    title: "Databases - NoSQL and Authentication",
    contents: [
      "Introduction to NoSQL databases: MongoDB and document-based data",
      "Schema design, CRUD operations, and indexing with MongoDB",
      "User authentication and authorization strategies",
      "Using JWT for token-based authentication",
      "Handling user sessions and cookies",
    ],
  },
  {
    title: "Backend Development - API and Security",
    contents: [
      "Building secure APIs with authentication and authorization",
      "Input validation, data sanitization, and security best practices",
      "Implementing OAuth for third-party authentication",
      "Rate limiting and API throttling",
      "API documentation",
      "Payment Gateway Integration",
    ],
  },
  {
    title: "Deployment and DevOps",
    contents: [
      "Introduction to version control with Git and GitHub",
      "Deploying applications using Nginx or Apache",
      "Continuous Integration and Continuous Deployment (CI/CD) pipelines",
      "Introduction to Docker for containerization",
      "Load balancing and auto-scaling in cloud environments",
    ],
  },
  {
    title: "Cloud Services and Hosting",
    contents: [
      "Hosting and scaling applications on cloud platforms: AWS, GCP, or Azure",
      "Serverless computing and AWS Lambda functions",
      "Setting up CI/CD pipelines for automated deployment",
      "Web hosting management using cPanel, SSL certificates, and domain setup",
    ],
  },
];

export const courseSuitability = {
  title: "Course Suitable For",
  list: [
    "Recently Completed High School.",
    "Undergraduates (B.Tech, BCA, MCA, B.VOC,)",
    "Aspiring Developers",
    "Tech Enthusiasts",
  ],
};

export const courseHighlights = {
  title: "Course Highlights",
  list: [
    "Live Interactive Sessions",
    "Real-World Projects and Practical Use Cases",
    "Industry Relevance",
    "Doubt Clearing Expert Sessions",
    "Career Assistance",
    "Certificates",
    "Resume and Portfolio Building",
    "Training will Continue until you become a Full Stack Developer even after 12 months timeline is over",
  ],
};

export const courseTimings = {
  title: "Course Timings (IST)",
  list: [
    "Tentative Slots: You can choose any one slot. Link will be provided after course registration.",
    "Sat & Sun: 7:00 PM - 9:00 PM",
    "Tue & Thu: 2:00 AM - 4:00 PM",
  ],
};

export const courseRequirements = {
  title: "Requirements",
  list: [
    "Basic Computer Literacy (Familiarity with using a computer, browsing the internet, and using common software applications.)",
    "A Laptop, PC or Mac with internet connectivity.",
  ],
};

export const courseTags = {
  title: "Tags",
  list: [
    "Certificate",
    "Full Stack Development",
    "Live Classes",
    "Software",
    "Student Discount",
  ],
};
