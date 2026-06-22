export default async function handler(req, res) {
  const { path } = req.query;

  if (!path) return res.status(400).json({ error: "Missing path" });
  const riotPath = Array.isArray(path) ? path.join("/") : path;
  const response = await fetch(`https://api.henrikdev.xyz/${riotPath}`, {
    headers: { Authorization: process.env.HDEV_API_KEY },
  });
  console.log(
    "API KEY:",
    process.env.HDEV_API_KEY ? "api key is read" : "not read"
  );
  console.log("alleged response", response);
  const data = await response.json();
  res.status(response.status).json(data);
}
