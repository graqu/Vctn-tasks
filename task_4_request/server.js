const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 3000;
const PROJECT_TOKEN = process.env.PROJECT_TOKEN;
const KEY_ID = process.env.KEY_ID;
const SECRET = process.env.SECRET;

app.use(express.json());
app.use(express.static(path.join(__dirname)));


function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

app.post("/api/catalogs", async (req, res) => {
	try {
		const projectToken = PROJECT_TOKEN || getRequiredEnv("PROJECT_TOKEN");
		const keyId = KEY_ID || getRequiredEnv("KEY_ID");
		const secret = SECRET || getRequiredEnv("SECRET");

		const { name, is_product_catalog, fields } = req.body || {};
		if (!name) {
			return res.status(400).json({ error: "Missing required field: name" });
		}

		const url = `https://api.exponea.com/data/v2/projects/${projectToken}/catalogs`;
		const basic = Buffer.from(`${keyId}:${secret}`).toString("base64");
		const upstreamResponse = await fetch(url, {
			method: "POST",
			headers: {
				accept: "application/json",
				authorization: `Basic ${basic}`,
				"content-type": "application/json"
			},
			body: JSON.stringify({
				name,
				is_product_catalog: Boolean(is_product_catalog),
				// Provide fields if present; otherwise minimal valid default schema
				fields: Array.isArray(fields) && fields.length > 0 ? fields : [
					{ key: "id", type: "string", required: true },
					{ key: "title", type: "string", required: true }
				]
			})
		});

		const contentType = upstreamResponse.headers.get("content-type") || "";
		const textBody = await upstreamResponse.text();
		let parsed;
		if (contentType.includes("application/json")) {
			try {
				parsed = JSON.parse(textBody);
			} catch (e) {
				parsed = { error: "Invalid JSON from upstream", raw: textBody };
			}
		} else {
			parsed = { raw: textBody };
		}

		return res.status(upstreamResponse.status).json(parsed);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



