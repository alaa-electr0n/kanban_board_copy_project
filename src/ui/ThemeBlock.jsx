import LightTheme from "../assets/icon-light-theme.svg";
import DarkTheme from "../assets/icon-dark-theme.svg";
import SwitchButton from "./SwitchButton";

function ThemeBlock() {
  return (
    <div className="py-3 px-6 flex gap-4 rounded-md items-center mx-auto justify-center">
      <img src={LightTheme} alt="light theme icom" />
      <SwitchButton />
      <img src={DarkTheme} alt="light theme icom" />
    </div>
  );
}

export default ThemeBlock;
