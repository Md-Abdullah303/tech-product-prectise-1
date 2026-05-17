import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import { authClient } from "./lib/auth-client";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  // const { data: token, error } = await authClient.token();
  // console.log(token, "token");

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session && !session?.user) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/all-product/:id", "/my-card"],
};
