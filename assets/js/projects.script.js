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
  "Digital Marketing", "Graphic Designing","Software Development"];

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
  {
    pName: "AeroShine Duct Cleaning",
    pImage: ["23.jpg"],
    pLink: "https://aeroshineduct.com/",
    pCategory: categories[1],
    pDesc: `AeroShine Duct Cleaning Services delivers a breath of fresh air through their
    meticulous and customer-focused approach. Their expert technicians provide a thorough
    cleaning of your air ducts and vents, ensuring improved indoor air quality and a healthier
    living environment. Experience the difference of their dedicated service, where payment is
    only required upon your complete satisfaction. Discover cleaner air and a more efficient
    HVAC system with AeroShine Duct Cleaning Services at www.aeroshineduct.com.`,
    pTech: [0, 1, 2, 3, 4, 5],
    pDate: "",
    pViews: "05",
  },
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
    tName: "Farhan Ali",
    tPost: "CEO",
    tImage: "aeroshine.png",
    tMessage: `“SMI Softs delivered outstanding digital marketing services, including highly 
    effective Meta Ads campaigns, for AeroShine Duct Cleaning Service. Their expert team also 
    crafted a professional and user-friendly website through their design and development services, 
    contributing significantly to AeroShine's online presence. Professional, reliable, and highly 
    recommended!”`,
    tDate: "Apr 27, 2025",
    tTime: "",
    tRating: 5,
    tPos: 1,
  },
  {
    tName: "Michael",
    tPost: "",
    tImage: "2.jpg",
    tMessage: `“Working with SMI SOFTS was fantastic. They built a user-friendly e-commerce website, and everything runs smoothly. We've noticed an increase in sales, and customer feedback is great”`,
    tDate: "Mar 9, 2025",
    tTime: "",
    tRating: 3,
    tPos: 0,
  },
  {
    tName: "Jack",
    tPost: "",
    tImage: "3.jpg",
    tMessage: `“SMI SOFTS’ digital marketing strategies have transformed our brand. Their social media campaigns and SEO efforts have greatly improved our visibility and engagement. They truly know what they’re doing”`,
    tDate: "Feb 16, 2025",
    tTime: "",
    tRating: 1,
    tPos: 0,
  },
  {
    tName: "Henry",
    tPost: "",
    tImage: "4.jpg",
    tMessage: `“Developing a mobile app with SMI SOFTS was a great experience. The team focused on user experience and functionality, which outstanding. They met all deadlines, and communication throughout the process was seamless”`,
    tDate: "Jan 10, 2025",
    tTime: "",
    tRating: 4,
    tPos: 1,
  },
];
