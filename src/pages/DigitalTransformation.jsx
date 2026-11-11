
import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/ai-data-solutions.jpg";

export default function DigitalTransformation() {
  return (
    <ServicePageTemplate
      title="Digital Transformation"
      subtitle="Modernizing business operations through digital technology."
      image={image}
      overviewTitle="Transforming the way businesses operate"
      overview="We help businesses modernize their operations through digital solutions, workflow automation, and technology integration. Our solutions support improved productivity and more efficient business processes."
      offerings={[
        {
          title: "Business Process Modernization",
          description: "Modernizing existing business processes through suitable digital solutions.",
        },
        {
          title: "Workflow Automation",
          description: "Reducing repetitive manual tasks through automated workflows.",
        },
        {
          title: "Digital Technology Integration",
          description: "Connecting digital tools and business systems for smoother operations.",
        },
        {
          title: "Operational Improvement",
          description: "Using technology to improve productivity and business efficiency.",
        },
      ]}
      benefits={[
        "Modernized business operations",
        "Reduced manual processes",
        "Improved workflow efficiency",
        "Better technology integration",
      ]}
    />
  );
}
