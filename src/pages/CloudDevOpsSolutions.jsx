
import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/it-solutions.jpg";

export default function CloudDevOpsSolutions() {
  return (
    <ServicePageTemplate
      title="Cloud and DevOps Solutions"
      subtitle="Supporting reliable cloud infrastructure and efficient application deployment."
      image={image}
      overviewTitle="Building reliable cloud and deployment environments"
      overview="We support cloud infrastructure, application deployment, automation, and DevOps practices to improve application reliability and scalability. Our solutions help businesses streamline development and deployment workflows."
      offerings={[
        {
          title: "Cloud Infrastructure",
          description: "Supporting adaptable cloud environments for business applications and services.",
        },
        {
          title: "Application Deployment",
          description: "Supporting consistent and reliable application deployment processes.",
        },
        {
          title: "Workflow Automation",
          description: "Automating repetitive development and operational activities.",
        },
        {
          title: "DevOps Practices",
          description: "Supporting collaboration between development and operations teams.",
        },
      ]}
      benefits={[
        "Improved application reliability",
        "Scalable cloud environments",
        "Streamlined deployment workflows",
        "Better operational efficiency",
      ]}
    />
  );
}
