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
import chips from "./chips.html";

storiesOf("Components", module)
  .add("Alert", () => alert)
  .add("Toast", () => toast)
  .add("Avatar", () => avatar)
  .add("Button & Links", () => button)
  .add("Tab", () => tab)
  .add("Labels", () => labels)
  .add("List", () => list)
  .add("Breadcrumbs", () => breadcrumbs)
  .add("Pagination", () => pagination)
  .add("Chips", () => chips);
