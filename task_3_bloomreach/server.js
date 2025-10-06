const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// quiet favicon 404s
app.get("/favicon.ico", (req, res) => res.status(204).end());

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

function buildCustomerAttributesUrl(projectToken) {
  const apiBase = (process.env.EXPONEA_API_BASE || "https://api.exponea.com").replace(/\/$/, "");
  return `${apiBase}/data/v2/projects/${projectToken}/customers/attributes`;
}

function shapeCustomerAttributesBody(body) {
  const { recommendation_id: recommendationId, customer_ids: customerIds, parameters } = body || {};
  if (!recommendationId || !customerIds) {
    return { error: "Missing recommendation_id or customer_ids in request body" };
  }
  const size = parameters && parameters.count != null ? Number(parameters.count) : 4;
  return {
    customer_ids: customerIds,
    attributes: [
      {
        type: "recommendation",
        id: recommendationId,
        fillWithRandom: true,
        size: Number.isFinite(size) && size > 0 ? size : 4,
      },
    ],
  };
}

app.post("/api/recommendations", async (req, res) => {
  try {
    const projectToken = getRequiredEnv("PROJECT_TOKEN");
    const keyId = getRequiredEnv("KEY_ID");
    const secret = getRequiredEnv("SECRET");

    const apiUrl = buildCustomerAttributesUrl(projectToken);
    const upstreamBody = shapeCustomerAttributesBody(req.body);
    if (upstreamBody && upstreamBody.error) {
      return res.status(400).json({ error: upstreamBody.error });
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${keyId}:${secret}`).toString("base64")}`,
      },
      body: JSON.stringify(upstreamBody),
    });

    const text = await response.text();
    try {
      const json = JSON.parse(text);
      if (!response.ok) return res.status(response.status).json(json);
      return res.json(json);
    } catch {
      if (!response.ok) return res.status(response.status).send(text);
      return res.send(text);
    }
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



