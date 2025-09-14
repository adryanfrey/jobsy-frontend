export type IconName = "Home" | "Search" | "Bookmark" | "Settings";

export interface NavigationItem {
  label: string;
  path: string;
  icon: IconName;
}

export const navigationConfig: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
    icon: "Home",
  },
  {
    label: "Job Search",
    path: "/job-search",
    icon: "Search",
  },
  {
    label: "Saved Jobs",
    path: "/saved-jobs",
    icon: "Bookmark",
  },
  {
    label: "User Preferences",
    path: "/user-preferences",
    icon: "Settings",
  },
];
