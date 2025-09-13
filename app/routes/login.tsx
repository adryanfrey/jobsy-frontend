import type { Route } from "./+types/login";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function LoginPage() {
  return (
    <Box
      sx={{
        height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "32px",
          gap: "16px",
          margin: "auto",
          maxWidth: "450px",
          borderRadius: "16px",
          border: "1px solid rgb(231, 231, 231)",
          boxShadow:
            "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
        }}
      >
        <Typography component="h1" variant="h4" sx={{ width: "100%" }}>
          Sign in
        </Typography>
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={"primary"}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={"primary"}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

// export async function action({}: Route.ActionArgs) {
//   const { supabaseClient, headers } = createSupabaseServerClient(request);
//   const formData = await request.formData();
//   const { error } = await supabaseClient.auth.signInWithOtp({
//     email: formData.get("email") as string,
//     options: {
//       emailRedirectTo: "http://localhost:3000/auth/callback",
//     },
//   });
//   if (error) {
//     return;
//   }
//   return { success: true };
// }
