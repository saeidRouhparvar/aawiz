import { Arrow } from "./icons-components/arrow";
import { Dashboard } from "./icons-components/dashboard";
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
  dashboard: Dashboard,
  arrow: Arrow,
};

export default icons;
export type IconName = keyof typeof icons;
