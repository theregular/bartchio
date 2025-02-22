// export function add(a: number, b: number): number {
//   return a + b;
// }

// // Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }

function handler(req: Request): Response {
  return new Response("Hello, world!");
}

// To listen on port 8080.
Deno.serve({ port: 8080 }, handler);
