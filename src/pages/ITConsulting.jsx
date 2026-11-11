
import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/training-development.jpg";

export default function ITConsulting() {
  return (
    <ServicePageTemplate
      title="IT Consulting"
      subtitle="Making informed technology decisions to support business growth."
      image={image}
      overviewTitle="Technology guidance for your business"
      overview="We provide technology consulting to help organizations identify suitable solutions, optimize IT infrastructure, and make informed technology decisions. Our approach focuses on understanding business requirements and recommending practical technology strategies."
      offerings={[
        {
          title: "Technology Strategy",
          description: "Technology planning aligned with organizational goals and business priorities.",
        },
        {
          title: "IT Infrastructure Assessment",
          description: "Reviewing existing IT infrastructure to identify improvement opportunities.",
        },
        {
          title: "Technology Recommendations",
          description: "Identifying suitable technologies based on business needs and requirements.",
        },
        {
          title: "IT Optimization",
          description: "Recommending improvements to IT systems, resources and operational processes.",
        },
      ]}
      benefits={[
        "More informed technology decisions",
        "Better IT resource utilization",
        "Technology aligned with business goals",
        "Improved operational planning",
      ]}
    />
  );
}
