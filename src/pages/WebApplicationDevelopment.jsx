import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/branding-digital.jpg";

export default function WebApplicationDevelopment() {
  return (
    <ServicePageTemplate
      title="Web Application Development"
      subtitle="Building secure and scalable web applications for modern businesses."
      image={image}
      overviewTitle="Web applications designed for your business"
      overview="We create secure, scalable web applications tailored to your business processes and operational requirements. Our solutions help organizations streamline workflows and improve digital operations."
      offerings={[
        {
          title: "Custom Web Applications",
          description: "Web applications developed according to your business requirements and workflows.",
        },
        {
          title: "Secure Application Development",
          description: "Applications developed with a focus on data protection, security and reliability.",
        },
        {
          title: "Scalable Web Solutions",
          description: "Flexible applications designed to support growing business requirements.",
        },
        {
          title: "Business System Integration",
          description: "Integration of web applications with existing business systems and tools.",
        },
      ]}
      benefits={[
        "Improved business process efficiency",
        "Secure and reliable applications",
        "Scalable application architecture",
        "Accessible business solutions",
      ]}
    />
  );
}
