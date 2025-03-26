let skills = [
  {
    name: "HTML5",
    image: "html.svg",
  },
  {
    name: "CSS3",
    image: "css.svg",
  },
  {
    name: "JavaScript",
    image: "js.svg",
  },
  {
    name: "Bootstrap",
    image: "bootstrap.svg",
  },
  {
    name: "MySQL",
    image: "mysql.svg",
  },
  {
    name: "PHP",
    image: "php.svg",
  },
];

let categories = ["Web Design", "Web Application", "Mobile Application",
  "Digital Marketing"];

let projects = [
  {
    pName: "Regularhost",
    pImage: ["1.png"],
    pLink: "https://regularhost.com/",
    pCategory: categories[1],
    pDesc: `Regularhost you are looking for a personal website hosting plan or a business website hosting plan, We are the perfect solution for you. Our powerful website hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure website hosting platform.`,
    pTech: [0, 1, 2, 3, 4, 5],
    pDate: "",
    pViews: "",
  },
  {
    pName: "PLS Website",
    pImage: ["2.png"],
    pLink: "https://pls-web.netlify.app/",
    pCategory: categories[0],
    pDesc: `PLS Connect Australia is the nations leading event organiser. Our events comprise of large scale exhibitions, industry conferences and highly specialised corporate training.`,
    pTech: [0, 1, 2, 3],
    pDate: "",
    pViews: "05",
  },
  // {
  //   pName: "Visibooster",
  //   pImage: ["3.png"],
  //   pLink: "https://visibooster.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Visibooster Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "AR Academy",
  //   pImage: ["4.png"],
  //   pLink: "https://ar-academy.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `ARAcademyClasses make Quran learning easy for those living in Western and Non-Muslim countries with various difficulties in Quran learning.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  {
    pName: "Ever Close",
    pImage: ["5.png"],
    pLink: "https://www.everclosecompany.com/",
    pCategory: categories[1],
    pDesc: `EverClose Company is an innovative e-commerce platform brought to life by the expert
    design team at SMI SOFTS. The platform’s UI/UX design was carefully crafted to deliver a visually
    appealing, user-friendly, and seamless shopping experience. From intuitive navigation to clean layouts,
    every element is designed to captivate users and guide them effortlessly through the website.
    <br> The responsive design ensures consistent performance across all devices, making it easy for customers
    to browse and shop whether they’re on a desktop, tablet, or mobile. Attention to detail in color schemes,
    typography, and layout enhances the overall aesthetic while maintaining a professional and engaging feel.
    <br> At SMI SOFTS, we believe great design drives great experiences, and EverClose is a perfect example of
    how thoughtful UI/UX can transform online shopping.
    Explore the platform at <a href="https://everclosecompany.com/">everclosecompany.com</a>
    and see how SMI SOFTS redefines digital excellence.`,
    pTech: [0, 1, 2, 3, 4, 5],
    pDate: "",
    pViews: "05",
  },
  // {
  //   pName: "3D Profile Card",
  //   pImage: ["6.png"],
  //   pLink: "https://arassignments-3d-profile-card.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created 3D Profile Card using with CSS3 Animations & 3D Dimensional Animation with 3D Environment in CSS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Windows Web",
  //   pImage: ["7.png"],
  //   pLink: "https://arassignments-windows-web.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Windows 10 Clone as a web using with pure CSS3 Animations & JavaScript`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "3D Keyboard",
  //   pImage: ["8.png"],
  //   pLink: "https://arassignments-3d-keyboard.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created 3D Keyboard using with CSS3 Animations & 3D Dimensional Animation, Environment with Dark/Light Mode in CSS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Vission Consultant",
  //   pImage: ["9.png"],
  //   pLink: "https://vission-consultant.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `The Vission Consultant Site Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Parallax",
  //   pImage: ["10.png"],
  //   pLink: "https://arassignments-parallax-web.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Parallax using with CSS3 & multi images are overlaps layers, then scrolling effect with js windows height by listners`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Feedback Form",
  //   pImage: ["11.png"],
  //   pLink: "https://arassignments-feedback-form.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Feedback Form using with creative style and with form js regex validations to secure your feedback data.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Dark Side",
  //   pImage: ["12.png"],
  //   pLink: "https://arassignments-dark-side.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Dark Side using with CSS3 & multi images are overlaps layers, then scrolling effect with js windows height by listners`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Java Buzz",
  //   pImage: ["13.png"],
  //   pLink: "https://arassignments-java-buzz.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Java Buzz using with creative designs and CSS animations to Coffee restaurant site full responsive.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "ABN Overseas",
  //   pImage: ["14.png"],
  //   pLink: "https://arassignments-abn-overseas.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created ABN Overseas Education using with creative designs and CSS animations to with menu & swiper slider unique design.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Task Manager",
  //   pImage: ["15.png"],
  //   pLink: "https://arassignments-task-manager.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Task Manager using with creative designs and drag & drop feature with JS.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "AR GPT",
  //   pImage: ["16.png"],
  //   pLink: "https://ar-gpt-web.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created AR GPT using with creative designs and chat system like same as chat gpt featured by JS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Iphone 14",
  //   pImage: ["17.png"],
  //   pLink: "https://arassignments-iphone.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Iphone 14 using with creative designs and same as clone by Iphone 14 feature performed by JS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Banner",
  //   pImage: ["18.png"],
  //   pLink: "https://arassignments-banner.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Banner using with creative designs and CSS3 animations with using JS.`,
  //   pTech: [0, 1, 2, 3],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Sticky Notes",
  //   pImage: ["19.png"],
  //   pLink: "https://arassignments-stickynotes.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Sticky Web App using with creative designs and CSS3 animations with using JS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Weather App",
  //   pImage: ["20.png"],
  //   pLink: "https://arassignments-weather.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Weather Web App using with creative designs and CSS3 animations with using JS. And using Location API`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  // {
  //   pName: "Image Gallery",
  //   pImage: ["21.png"],
  //   pLink: "https://arassignments-gallery.netlify.app/",
  //   pCategory: categories[0],
  //   pDesc: `Created Image Gallery using with creative designs and CSS3 animations with using JS.`,
  //   pTech: [0, 1, 2],
  //   pDate: "Sep 20, 2023",
  //   pViews: "05",
  // },
  {
    pName: "Online Laboratory",
    pImage: ["lab-1.png"],
    pLink: "https://arassignments-gallery.netlify.app/",
    pCategory: categories[1],
    pDesc: `Online Laboratory is an innovative web-based software designed to modernize and simplify how 
    laboratories operate. This advanced platform leverages the latest technologies to streamline processes, 
    improve accuracy, and enhance communication between lab professionals and their clients. With a secure 
    and user-friendly interface, users can easily book lab tests, view results online, and track their medical 
    records—all from the comfort of their home. 
    <br> For laboratories, Online Laboratory provides powerful tools to efficiently manage appointments, 
    track samples, and automate report generation. By reducing manual tasks and minimizing errors, this software 
    helps labs boost productivity and focus on delivering exceptional services. <br> The platform is optimized
    for responsiveness, offering a seamless experience across devices, including desktops, tablets, and smartphones.
    Built with top-notch security features, it ensures the confidentiality and safety of sensitive health data,
    making it a trusted solution for both labs and patients. <br> Whether you are a lab looking to optimize
    operations or an individual in need of quick and reliable testing services, Online Laboratory is the
    perfect solution. Experience the future of lab management today with this efficient and secure software
    designed to meet the needs of the modern healthcare industry.The platform is optimized for responsiveness,
    offering a seamless experience across devices, including desktops, tablets, and smartphones.
    Built with top-notch security features, it ensures the confidentiality and safety of sensitive health data,
    making it a trusted solution for both labs and patients. <br><br> Whether you are a lab looking to optimize
    operations or an individual in need of quick and reliable testing services, Online Laboratory is the perfect solution.
    Experience the future of lab management today with this efficient and secure software designed to meet the needs
    of the modern healthcare industry.`,
    pTech: [0, 1, 2],
    pDate: "",
    pViews: "03",
  },
  {
    pName: "CoreLaw",
    pImage: ["law-1.png"],
    pLink: "https://arassignments-gallery.netlify.app/",
    pCategory: categories[1],
    pDesc: `Corelaw is an advanced Lawyer Management System developed in PHP, designed to revolutionize
    the way clients and lawyers interact. This platform provides a seamless and efficient solution for
    managing legal services. Clients can easily communicate with lawyers, discuss legal matters, and hire
    the right professional for their needs. The system allows users to book, reschedule, and manage
    appointments directly through the platform, saving time and effort. <br> For lawyers, Corelaw offers
    a robust tool to manage client communications, appointments, and cases in one organized dashboard.
    It enhances workflow efficiency, allowing legal professionals to focus more on their cases while
    reducing administrative burden. Lawyers can keep track of their schedules, respond to client inquiries,
    and streamline their practice through this easy-to-use system. <br> Corelaw is designed with a
    user-friendly interface, ensuring both clients and lawyers can navigate the platform with ease.
    The system is also highly secure, protecting sensitive information and providing peace of mind for both
    parties. With Corelaw, managing legal processes becomes smoother, more organized, and faster, ensuring a
    productive and professional experience for everyone involved. <br><br> Whether you are seeking legal advice
    or offering legal services, Corelaw is the perfect platform to facilitate a hassle-free connection. `,
    pTech: [0, 1, 2],
    pDate: "",
    pViews: "07",
  },
];



let testimonials = [
  {
    tName: "Zafar Ul Hasnain",
    tPost: "",
    tImage: "1.png",
    tMessage: `“SMI SOFTS developed a custom software solution tailored to our business needs. Their work was timely and highly professional. Our daily operations have become much more efficient now. Highly recommended for anyone looking for reliable IT solutions”`,
    tDate: "Feb 19, 2025",
    tTime: "",
    tRating: 2,
    tPos: 1,
  },
  {
    tName: "Muhammad Amjad",
    tPost: "",
    tImage: "2.png",
    tMessage: `“Working with SMI SOFTS was fantastic. They built a user-friendly e-commerce website, and everything runs smoothly. We've noticed an increase in sales, and customer feedback is great”`,
    tDate: "Jan 9, 2025",
    tTime: "",
    tRating: 3,
    tPos: 0,
  },
  {
    tName: "Muhammad Moiz",
    tPost: "",
    tImage: "3.png",
    tMessage: `“SMI SOFTS’ digital marketing strategies have transformed our brand. Their social media campaigns and SEO efforts have greatly improved our visibility and engagement. They truly know what they’re doing”`,
    tDate: "Dec 16, 2024",
    tTime: "",
    tRating: 1,
    tPos: 0,
  },
  {
    tName: "Muhammad Huzaifa",
    tPost: "",
    tImage: "4.png",
    tMessage: `“Developing a mobile app with SMI SOFTS was a great experience. The team focused on user experience and functionality, which outstanding. They met all deadlines, and communication throughout the process was seamless”`,
    tDate: "Dec 01, 2024",
    tTime: "",
    tRating: 4,
    tPos: 1,
  },
];
