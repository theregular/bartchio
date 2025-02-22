function handler(req: Request): Response {
  return new Response("Hello, world!");
}

// To listen on port 8080.
Deno.serve({ port: 8080 }, handler);
