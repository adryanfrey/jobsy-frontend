import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    title: "Home",
  };
}

export default function Home() {
  return "Hello world !";
}
