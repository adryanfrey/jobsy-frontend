import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/login", "routes/login/index.tsx"),
  route("/job-search", "routes/job-search/index.tsx"),
  route("/saved-jobs", "routes/saved-jobs/index.tsx"),
  route("/user-preferences", "routes/user-preferences/index.tsx"),
] satisfies RouteConfig;
