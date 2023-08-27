import Certification from "@/components/certification/Certification";

export default function CourseLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Certification></Certification>
      {children}
    </section>
  );
}
