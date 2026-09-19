import {
  logoConsolePlus,
  logoDevLens,
  logoDomSnapshot,
  logoGridGuides,
  logoJsonWizard,
  logoLinkChecker,
  logoMarkupNotes,
  logoPalettePic,
  logoSpeedBoost,
  logoStyleSpy,
  logoTabMaster,
  logoViewportBuddy,
} from "../assets";
import type { Filter } from "../type/Extensions";

export type ExtensionsList = {
  name: string;
  image: string;
  feature: string;
  status: boolean;
};
export type FilterBtn = {
  value: Filter;
  name: string;
};

export const extensionsList: ExtensionsList[] = [
  {
    name: "DevLens",
    image: logoDevLens,
    feature: "Quickly inspect page layouts and visualize element boundaries.",
    status: true,
  },
  {
    name: "StyleSpy",
    image: logoStyleSpy,
    feature: "Instantly analyze and copy CSS from any webpage element.",
    status: false,
  },
  {
    name: "SpeedBoost",
    image: logoSpeedBoost,
    feature: "Optimizes browser resource usage to accelerate page loading.",
    status: true,
  },
  {
    name: "JSONWizard",
    image: logoJsonWizard,
    feature: "Formats, validates, and prettifies JSON responses in-browser.",
    status: true,
  },
  {
    name: "TabMaster Pro",
    image: logoTabMaster,
    feature: "Organizes browser tabs into groups and sessions.",
    status: false,
  },
  {
    name: "ViewportBuddy",
    image: logoViewportBuddy,
    feature:
      "Simulates various screen resolutions directly within the browser.",
    status: true,
  },
  {
    name: "Markup Notes",
    image: logoMarkupNotes,
    feature:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    status: false,
  },
  {
    name: "GridGuides",
    image: logoGridGuides,
    feature: "Overlay customizable grids and alignment guides on any webpage.",
    status: true,
  },
  {
    name: "Palette Picker",
    image: logoPalettePic,
    feature: "Instantly extracts color palettes from any webpage.",
    status: false,
  },
  {
    name: "LinkChecker",
    image: logoLinkChecker,
    feature: "Scans and highlights broken links on any page.",
    status: true,
  },
  {
    name: "DOM Snapshot",
    image: logoDomSnapshot,
    feature: "Capture and export DOM structures quickly.",
    status: false,
  },
  {
    name: "ConsolePlus",
    image: logoConsolePlus,
    feature: "Enhanced developer console with advanced filtering and logging.",
    status: true,
  },
];

export const filterBtns: FilterBtn[] = [
  { value: "all", name: "All" },
  { value: "active", name: "Active" },
  { value: "inactive", name: "Inactive" },
];
