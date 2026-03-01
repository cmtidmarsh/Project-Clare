import FloatingDockDemo from "../../components/floating-dock-demo";
import { ReusableNavbar } from "../../components/ui/NavigationBar/reuseable-navbar";

export function CustomPageTemplate() {
  return (
    <div className="w-full h-full bg-transparent">
      <ReusableNavbar></ReusableNavbar>
      <div className="fixed right-6 bottom-6 z-50">
        {/* <FloatingDockDemo /> */}
      </div>
    </div>
  );
}
