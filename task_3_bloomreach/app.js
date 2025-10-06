const list = document.querySelector(".list");

const body = {
  recommendation_id: "64ad288f5c02d20b1eb2fe08",
  customer_ids: {
    registered: "1",
  },
  parameters: {
    count: 4,
    shuffle: true,
  },
};

const showData = (products) => {
  console.log(products);
  products.forEach(product => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = product.url;
    link.textContent = "więcej";
    li.textContent = `${product.title} |`;
    list.appendChild(li);
    li.appendChild(link);
  });
};


fetch("/api/recommendations", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
})
  .then((res) => res.json())
  .then((data) => showData(data.results[0].value))
  .catch((err) => console.error(err));
