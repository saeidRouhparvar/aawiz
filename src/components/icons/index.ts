import { Earth } from "./icons-components/earth";
import { Moon } from "./icons-components/moon";
import { Password } from "./icons-components/password";
import { Sun } from "./icons-components/sun";
import { User } from "./icons-components/user";

const icons = {
  sun: Sun,
  moon: Moon,
  earth: Earth,
  user: User,
  password: Password,
};

export default icons;
export type IconName = keyof typeof icons;
