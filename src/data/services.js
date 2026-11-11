
import { Code2, BrainCircuit, Cloud } from "lucide-react";

import softwareImage from "../assets/services/it-solutions.jpg";
import itImage from "../assets/services/ai-data-solutions.jpg";
import cloudImage from "../assets/services/hr-staffing.png";
import webAppImage from "../assets/services/branding-digital.jpg";
import consultingImage from "../assets/services/training-development.jpg";
import transformationImage from "../assets/services/ai-data-solutions.jpg";
import hrmsImage from "../assets/services/hr-staffing.jpg";
import cloudDevOpsImage from "../assets/services/it-solutions.jpg";

const services = [
  {
    icon: Code2,
    image: softwareImage,
    number: "01",
    title: "Custom Software Development",
    highlights: [
      "Customized software applications",
      "Business process solutions",
      "Operational efficiency",
      "Scalable software solutions",
    ],
    description:
      "We develop customized software applications designed to address business challenges, improve operational efficiency, and support business growth.",
    link: "/services/custom-software-development",
  },
  {
    icon: BrainCircuit,
    image: itImage,
    number: "02",
    title: "Website Development",
    highlights: [
      "Responsive website design",
      "User-friendly interfaces",
      "Mobile-friendly websites",
      "Seamless user experiences",
    ],
    description:
      "We design and develop responsive, user-friendly websites that strengthen your online presence and provide seamless experiences across devices.",
    link: "/services/website-development",
  },
  {
    icon: Cloud,
    image: cloudImage,
    number: "03",
    title: "Mobile Application Development",
    highlights: [
      "Scalable mobile applications",
      "Intuitive user interfaces",
      "Customer engagement",
      "Business process simplification",
    ],
    description:
      "We build scalable and intuitive mobile applications that help businesses connect with customers and simplify everyday operations.",
    link: "/services/mobile-application-development",
  },
  {
    icon: Code2,
    image: webAppImage,
    number: "04",
    title: "Web Application Development",
    highlights: [
      "Custom web applications",
      "Secure application development",
      "Scalable architecture",
      "Business process integration",
    ],
    description:
      "We create secure, scalable web applications tailored to your business processes and operational requirements.",
    link: "/services/web-application-development",
  },
  {
    icon: BrainCircuit,
    image: consultingImage,
    number: "05",
    title: "IT Consulting",
    highlights: [
      "Technology strategy",
      "IT infrastructure assessment",
      "Technology recommendations",
      "Digital solutions planning",
    ],
    description:
      "We provide technology consulting to help organizations identify suitable solutions, optimize IT infrastructure, and make informed technology decisions.",
    link: "/services/it-consulting",
  },
  {
    icon: BrainCircuit,
    image: transformationImage,
    number: "06",
    title: "Digital Transformation",
    highlights: [
      "Business process modernization",
      "Workflow automation",
      "Digital technology integration",
      "Operational improvement",
    ],
    description:
      "We help businesses modernize their operations through digital solutions, workflow automation, and technology integration.",
    link: "/services/digital-transformation",
  },
  {
    icon: Cloud,
    image: hrmsImage,
    number: "07",
    title: "HRMS Solutions",
    highlights: [
      "Employee management",
      "Attendance tracking",
      "Payroll process support",
      "HR operations management",
    ],
    description:
      "We provide workforce management solutions that support employee management, attendance tracking, payroll processes, and HR operations.",
    link: "/services/hrms-solutions",
  },
  {
    icon: Cloud,
    image: cloudDevOpsImage,
    number: "08",
    title: "Cloud and DevOps Solutions",
    highlights: [
      "Cloud infrastructure",
      "Application deployment",
      "Workflow automation",
      "DevOps practices",
    ],
    description:
      "We support cloud infrastructure, application deployment, automation, and DevOps practices to improve application reliability and scalability.",
    link: "/services/cloud-devops-solutions",
  },

];

export default services;
