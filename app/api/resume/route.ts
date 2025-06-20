export async function POST(req: Request) {
  const body = await req.json();
  console.log("Resume data:", body);
  return new Response("Resume saved!", { status: 200 });
}
