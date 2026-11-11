
import ServicePageTemplate from "./ServicePageTemplate";
import image from "../assets/services/hr-staffing.jpg";

export default function HRMSSolutions() {
  return (
    <ServicePageTemplate
      title="HRMS Solutions"
      subtitle="Simplifying employee management and everyday HR operations."
      image={image}
      overviewTitle="Simplifying workforce management"
      overview="We provide workforce management solutions that support employee management, attendance tracking, payroll processes, and HR operations. Our solutions help organizations manage workforce-related activities more efficiently."
      offerings={[
        {
          title: "Employee Management",
          description: "Organizing employee information and supporting employee administration.",
        },
        {
          title: "Attendance Management",
          description: "Supporting employee attendance tracking and workforce records.",
        },
        {
          title: "Payroll Process Support",
          description: "Supporting payroll-related workflows and employee compensation processes.",
        },
        {
          title: "HR Operations Management",
          description: "Simplifying everyday HR activities and workforce administration.",
        },
      ]}
      benefits={[
        "Organized employee information",
        "Simplified attendance tracking",
        "Better HR process management",
        "Improved workforce administration",
      ]}
    />
  );
}
