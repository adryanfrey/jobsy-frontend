import { redirect } from "react-router";
import type { Route } from "./+types";
import { createSupabaseServerClient } from "../../supabase.server";

export async function loader({ request }: Route.LoaderArgs) {
  try {
    const { supabaseClient } = createSupabaseServerClient(request);
    await supabaseClient.auth.signOut();

    return redirect("/login");
  } catch (error) {
    console.error("Logout error:", error);
    return redirect("/login");
  }
}
