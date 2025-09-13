import { createSupabaseServerClient } from "~/supabase.server";
import type { Route } from "./+types/auth.callback";
import { redirect } from "react-router";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (code) {
    const { supabaseClient, headers } = createSupabaseServerClient(request);
    const { error } = await supabaseClient.auth.exchangeCodeForSession(code);
    if (error) {
      return redirect("/sign-in");
    }
    return redirect("/", {
      headers,
    });
  }
  return new Response("Authentication failed", {
    status: 400,
  });
};
