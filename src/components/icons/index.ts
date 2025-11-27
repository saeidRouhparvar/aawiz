import { Earth } from "./icons-components/earth";
import { Moon } from "./icons-components/moon";
import { Sun } from "./icons-components/sun";

const icons = {
  sun: Sun,
  moon: Moon,
  earth: Earth,
};

export default icons;
export type IconName = keyof typeof icons;
