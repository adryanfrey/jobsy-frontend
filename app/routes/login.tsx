import type { Route } from "./+types/home";
import Login from "~/components/login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    title: "Login",
  };
}

export default function LoginPage() {
  return <Login />;
}
