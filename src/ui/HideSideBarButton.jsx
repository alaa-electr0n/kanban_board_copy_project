import { Button } from "../components/Button";
import iconHideSidebar from "../assets/icon-hide-sidebar.svg";
function HideSideBarButton() {
  return (
    <Button variant="ghost" className="flex gap-2 items-center justify-center">
      <img src={iconHideSidebar} alt="icon hide sidebar" />
      Hide Sidebar
    </Button>
  );
}

export default HideSideBarButton;
