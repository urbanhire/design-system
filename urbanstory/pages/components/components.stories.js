import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import button from "./button.html";
import avatar from "./avatar.html";
import alert from "./alert.html";
import toast from "./toast.html";
import tab from "./tab.html";
import labels from "./labels.html";
import list from "./list.html";
import breadcrumbs from "./breadcrumbs.html";
import pagination from "./pagination.html";
import slider from "./slider.html";
import preloader from "./preloader.html";
import tooltip from "./tooltip.html";
import steps from "./steps.html";
import uhSwitch from "./switch.html";
import notification from "./notification.html";

storiesOf("DEVELOPER|Components", module)
  .add("Alert", () => alert)
  .add("Toast", () => toast)
  .add("Avatar", () => avatar)
  .add("Button & Links", () => button)
  .add("Tab", () => tab)
  .add("Labels", () => labels)
  .add("List", () => list)
  .add("Breadcrumbs", () => breadcrumbs)
  .add("Pagination", () => pagination)
  .add("Slider", () => slider)
  .add("Preloader", () => preloader)
  .add("Tooltip", () => tooltip)
  .add("Steps", () => steps)
  .add("Switch", () => uhSwitch)
  .add("Notification", () => notification)
