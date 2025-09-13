import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/login", "routes/login.tsx"),
  route("/auth/callback", "routes/auth.callback.tsx"),
] satisfies RouteConfig;
