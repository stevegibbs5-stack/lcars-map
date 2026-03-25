export default async function handler(req, res) {
  const API_KEY = "4fe7bc94f3e559323d9a467115a14405";

  try {
    const url = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&limit=50`;

    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({ error: "API failed" });
  }
}
