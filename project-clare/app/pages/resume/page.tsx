import { CustomPageTemplate } from "@/app/pages/custom-page-template";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import Carousel from "@/components/ui/carousel";

export default function ResumePage() {
  return (
    <main>
      <CustomPageTemplate />
      <Carousel
        slides={[
          { title: "Experience" },
          { title: "Education" },
          { title: "Skills" },
          { title: "Misc" },
        ]}
      ></Carousel>
      <ExpandableCardDemo></ExpandableCardDemo>
    </main>
  );
}
