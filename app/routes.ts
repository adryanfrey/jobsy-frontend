import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/login", "routes/login.tsx"),
  route("/job-search", "routes/job-search.tsx"),
  route("/saved-jobs", "routes/saved-jobs.tsx"),
  route("/user-preferences", "routes/user-preferences.tsx"),
] satisfies RouteConfig;
