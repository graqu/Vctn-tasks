document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("upsertBtn");
	const out = document.getElementById("upsertOut");

	if (!btn || !out) return;

	btn.addEventListener("click", async () => {
		out.textContent = "Sending request...";
		try {
			const reqBody = {
				name: `nazwa_katalogu_Jacekv2`,
				fields: [
					{ name: "field_text", type: "string", searchable: true },
					{ name: "field_date", type: "date", searchable: true },
					{ name: "field_number", type: "number", searchable: true }
				],
				is_product_catalog: false
			};
			const response = await fetch("/api/catalogs", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(reqBody)
			});
			const text = await response.text();
			let payload;
			try {
				payload = JSON.parse(text);
			} catch (e) {
				payload = { raw: text };
			}
			out.textContent = JSON.stringify({ status: response.status, payload }, null, 2);
		} catch (err) {
			out.textContent = `Request failed: ${err?.message || err}`;
		}
	});
});
