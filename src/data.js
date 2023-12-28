import s1 from "./assets/images/s1.png";
import s2 from "./assets/images/s2.png";
import s3 from "./assets/images/s3.png";
import s4 from "./assets/images/s4.png";
import s5 from "./assets/images/s5.png";
import s6 from "./assets/images/s6.png";
import s7 from "./assets/images/s7.png";
import s8 from "./assets/images/s8.png";
import s9 from "./assets/images/s9.png";
import s10 from "./assets/images/s10.png";
import s11 from "./assets/images/s11.png";
import s12 from "./assets/images/s12.svg";
import s13 from "./assets/images/s13.png";
import p11 from "./assets/images/p1-1.png";
import p12 from "./assets/images/p1-2.png";
import p13 from "./assets/images/p1-3.png";
import p14 from "./assets/images/p1-4.png";
import p21 from "./assets/images/p2-1.png";
import p22 from "./assets/images/p2-2.png";
import p23 from "./assets/images/p2-3.png";
import p24 from "./assets/images/p2-4.png";
import p25 from "./assets/images/p2-5.png";

const skills = [
  {
    name: "HTML5",
    path: s3,
  },
  {
    name: "CSS3",
    path: s2,
  },
  {
    name: "Javascript",
    path: s4,
  },
  {
    name: "Python",
    path: s5,
  },
  {
    name: "Django",
    path: s6,
  },
  {
    name: "Node",
    path: s9,
  },
  {
    name: "Express",
    path: s10,
  },
  {
    name: "React",
    path: s11,
  },
  {
    name: "Tailwind",
    path: s12,
  },
  {
    name: "MySQL",
    path: s8,
  },
  {
    name: "MongoDB",
    path: s1,
  },
  {
    name: "Git",
    path: s7,
  },
  {
    name: "Figma",
    path: s13,
  },
];

const projects = [
  {
    title: "Dashboard for Autonomous Vehicle Testing",
    image: [
      {
        imgNumber: "1",
        imgPath: p11,
      },
      {
        imgNumber: "2",
        imgPath: p12,
      },
      {
        imgNumber: "3",
        imgPath: p13,
      },
      {
        imgNumber: "4",
        imgPath: p14,
      },
    ],
    description: `An interactive dashboard summarizing data of vehicle testing.
     Allow users to view the overall or individual test data,
     query incident video, record test log and manage data in database.
      `,
    demo: "https://incident-dashboard-clhw.onrender.com/",
    github: "https://github.com/prat345/senior-project-django",
    stacks: ["Django", "MongoDB"],
  },
  {
    title: "Amazon Clone MERN-Stack",
    image: [
      {
        imgNumber: "1",
        imgPath: p21,
      },
      {
        imgNumber: "2",
        imgPath: p22,
      },
      {
        imgNumber: "3",
        imgPath: p23,
      },
      {
        imgNumber: "4",
        imgPath: p24,
      },
      {
        imgNumber: "5",
        imgPath: p25,
      },
    ],
    description: `An e-commerce website like Amazon.com.
    Users can search for items, 
    add to cart, create an order, create account, sign in, sign out, make payment, and track order status etc.`,
    demo: "https://amazon-clone-d9pc.onrender.com/",
    github: "https://github.com/prat345/amazon-clone",
    stacks: ["Node", "Express", "React", "MongoDB"],
  },
];

export { skills, projects };
