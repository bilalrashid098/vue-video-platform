import { appRoutes } from "./routes";

export const customTheme = {
  colorPrimary: "#6127ff",
  colorDefault: "#dddddd",
};

export const menuItems = [
  {
    title: "Home",
    link: appRoutes.dashboard,
    icon: "IcHomeAltSlim",
  },
  {
    title: "Liked Videos",
    link: appRoutes.dashboard,
    icon: "AkThumbsUp",
  },
  {
    title: "History",
    link: appRoutes.dashboard,
    icon: "IcClockRotateRight",
  },
  {
    title: "My Videos",
    link: appRoutes.dashboard,
    icon: "BsCameraVideo",
  },
  {
    title: "Playlists",
    link: appRoutes.dashboard,
    icon: "AkFolder",
  },
  {
    title: "Subscribers",
    link: appRoutes.dashboard,
    icon: "CaUserMultiple",
  },
];
export const menuItems2 = [
  {
    title: "Support",
    link: appRoutes.dashboard,
    icon: "AkQuestion",
  },
  {
    title: "Settings",
    link: appRoutes.dashboard,
    icon: "BsGearWide",
  },
];
