// ==UserScript==
// @name        Bloomreach Recommendations Injector (Wojas)
// @match       https://wojas.pl/meskie
// @run-at      document-idle
// ==/UserScript==

(function () {
  "use strict";

  console.log("script loaded");
  const DUMMY_RECS = [
    {
      active: true,
      attribute_set: "product_set",
      author: "",
      brand: "magento",
      categories_ids: null,
      categories_path: "",
      category_1: "",
      category_1_url: "",
      category_2: "",
      category_2_url: "",
      category_3: "",
      category_3_url: "",
      category_4: "",
      category_5: "",
      category_6: "",
      category_7: "",
      category_8: "",
      category_9: "",
      category_id: "",
      category_name: "",
      colour: "",
      date_added: 1571353388,
      engine_name: "newstock_1689069711",
      image:
        "https://static.bimago.com/mediacache/catalog/product/cache/0/7/124770/image/280x210/f19ccd23dce5b4a3933ce35c2bf598b2/124770.jpg",
      image_full:
        "https://static.bimago.com/mediacache/catalog/product/cache/0/7/124770/vis_image/370x315/07ee64c72ddec0c1f603a5611f19eb07/124770.jpg",
      item_id: "magento_124770",
      language: "polish",
      local_currency: "PLN",
      orientation: "",
      original_price: 400,
      original_price_local_currency: 1600,
      parts_static: 5,
      pattern_id: "product_set_Miejska-dżungla",
      price: 400,
      price_local_currency: 1600,
      product_id: "magento_124770",
      promotion_value: 0,
      promotion_value_local_currency: 0,
      recommendation_id: "64ad288f5c02d20b1eb2fe08",
      recommendation_source: "model_non_personalized",
      recommendation_variant_id: null,
      seo_prefix: "Zestaw plakatów",
      sku_id: "Miejska-dżungla",
      stablo_id: "",
      style: "other",
      tags: [],
      title: "Miejska dżungla",
      type: "",
      url: "https://www.bimago.pl/miejska-dzungla-124770.html",
    },
    {
      active: true,
      attribute_set: "product_set",
      author: "",
      brand: "magento",
      categories_ids: null,
      categories_path: "",
      category_1: "",
      category_1_url: "",
      category_2: "",
      category_2_url: "",
      category_3: "",
      category_3_url: "",
      category_4: "",
      category_5: "",
      category_6: "",
      category_7: "",
      category_8: "",
      category_9: "",
      category_id: "",
      category_name: "",
      colour: "",
      date_added: 1571353621,
      engine_name: "newstock_1689069711",
      image:
        "https://static.bimago.com/mediacache/catalog/product/cache/3/8/124783/image/280x210/534f7380ee45bbc87afae6f5fe065ca8/124783.jpg",
      image_full:
        "https://static.bimago.com/mediacache/catalog/product/cache/3/8/124783/vis_image/370x315/1493ac9efdb44892db2d41b9c2d40bce/124783.jpg",
      item_id: "magento_124783",
      language: "polish",
      local_currency: "PLN",
      orientation: "",
      original_price: 400,
      original_price_local_currency: 1600,
      parts_static: 7,
      pattern_id: "product_set_Morze-inspiracji",
      price: 400,
      price_local_currency: 1600,
      product_id: "magento_124783",
      promotion_value: 0,
      promotion_value_local_currency: 0,
      recommendation_id: "64ad288f5c02d20b1eb2fe08",
      recommendation_source: "model_non_personalized",
      recommendation_variant_id: null,
      seo_prefix: "Zestaw plakatów",
      sku_id: "Morze-inspiracji",
      stablo_id: "",
      style: "other",
      tags: [],
      title: "Morze inspiracji",
      type: "",
      url: "https://www.bimago.pl/morze-inspiracji-124783.html",
    },
    {
      active: true,
      attribute_set: "product_set",
      author: "",
      brand: "magento",
      categories_ids: null,
      categories_path: "",
      category_1: "",
      category_1_url: "",
      category_2: "",
      category_2_url: "",
      category_3: "",
      category_3_url: "",
      category_4: "",
      category_5: "",
      category_6: "",
      category_7: "",
      category_8: "",
      category_9: "",
      category_id: "",
      category_name: "",
      colour: "",
      date_added: 1571355029,
      engine_name: "newstock_1689069711",
      image:
        "https://static.bimago.com/mediacache/catalog/product/cache/3/6/124863/image/280x210/d40236c5c170f49056eb345abcbad6ee/124863.jpg",
      image_full:
        "https://static.bimago.com/mediacache/catalog/product/cache/3/6/124863/vis_image/370x315/eba18878e49d850e9601798d6c523a46/124863.jpg",
      item_id: "magento_124863",
      language: "polish",
      local_currency: "PLN",
      orientation: "",
      original_price: 400,
      original_price_local_currency: 1600,
      parts_static: 7,
      pattern_id: "product_set_Morze-inspiracji-II",
      price: 400,
      price_local_currency: 1600,
      product_id: "magento_124863",
      promotion_value: 0,
      promotion_value_local_currency: 0,
      recommendation_id: "64ad288f5c02d20b1eb2fe08",
      recommendation_source: "model_non_personalized",
      recommendation_variant_id: null,
      seo_prefix: "Zestaw plakatów",
      sku_id: "Morze-inspiracji-II",
      stablo_id: "",
      style: "other",
      tags: [],
      title: "Morze inspiracji II",
      type: "",
      url: "https://www.bimago.pl/morze-inspiracji-ii-124863.html",
    },
    {
      active: true,
      attribute_set: "product_set",
      author: "",
      brand: "magento",
      categories_ids: null,
      categories_path: "",
      category_1: "",
      category_1_url: "",
      category_2: "",
      category_2_url: "",
      category_3: "",
      category_3_url: "",
      category_4: "",
      category_5: "",
      category_6: "",
      category_7: "",
      category_8: "",
      category_9: "",
      category_id: "",
      category_name: "",
      colour: "",
      date_added: 1571345420,
      engine_name: "newstock_1689069711",
      image:
        "https://static.bimago.com/mediacache/catalog/product/cache/6/2/124726/image/280x210/8ffe6ea42d6f7f2b36bd0b22839e53f5/124726.jpg",
      image_full:
        "https://static.bimago.com/mediacache/catalog/product/cache/6/2/124726/vis_image/370x315/fe97926a9a640bb2cf2fa30f5a022410/124726.jpg",
      item_id: "magento_124726",
      language: "polish",
      local_currency: "PLN",
      orientation: "",
      original_price: 400,
      original_price_local_currency: 1600,
      parts_static: 6,
      pattern_id: "product_set_Delikatność-przyrody",
      price: 400,
      price_local_currency: 1600,
      product_id: "magento_124726",
      promotion_value: 0,
      promotion_value_local_currency: 0,
      recommendation_id: "64ad288f5c02d20b1eb2fe08",
      recommendation_source: "model_non_personalized",
      recommendation_variant_id: null,
      seo_prefix: "Zestaw plakatów",
      sku_id: "Delikatność-przyrody",
      stablo_id: "",
      style: "other",
      tags: [],
      title: "Delikatność przyrody",
      type: "",
      url: "https://www.bimago.pl/delikatnosc-przyrody-124726.html",
    },
  ];

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  /**JACEK - I'VE CHANGED .box-recomendation to .recomendation__inner since i didn't find it on the page */
  function queryBox() {
    return document.querySelector(".recomendation__inner");
  }

  function ensureBox(callback) {
    const box = queryBox();
    console.log(box ? "box found" + box : "box not found");
    if (box) return callback(box);
    const obs = new MutationObserver(() => {
      const el = queryBox();
      if (el) {
        obs.disconnect();
        callback(el);
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  function dummyPictureOnError(event) {
    event.target.onerror = null;
    const numberOfVariation = Math.round(Math.random() * 10);
    event.target.src = `https://picsum.photos/200/300?random=${numberOfVariation}`;
  }

  function provideSliderButtons(uniqueClass) {
    return `<button id="slider-left" class="slider__button-prev" type="button" data-slider="${uniqueClass}">Prev</button><button id="slider__right" class="slider__button-next" type="button" data-slider="${uniqueClass}">Next</button>`;
  }

  function renderRecommendations(container, products) {
    if (!Array.isArray(products) || products.length === 0) return;
    const items = products.slice(0, 4);
    const wrapper = container.querySelector("ul");
    // const uniqueClass = containerUl.classList[0];

    wrapper.innerHTML = "";
    // const wrapper = document.createElement("ul");
    // wrapper.classList.add(uniqueClass);
    // const buttonBlock = document.createElement("div");
    // buttonBlock.innerHTML = provideSliderButtons(uniqueClass);

    items.forEach((p) => {
      const listItem = document.createElement("li");
      const recomendationItem = document.createElement("div");
      recomendationItem.classList.add("recomendation__item");

      const card = document.createElement("a");
      card.href = p.url || "#";
      card.setAttribute("rel", "noopener noreferrer");

      //Add image
      const imageBlock = document.createElement("div");
      imageBlock.classList.add("recomendation__image");
      const img = document.createElement("img");
      img.classList.add("lazy");
      img.src = p.image || p.image_full || "";
      img.alt = p.title || "";
      img.loading = "lazy";
      img.onerror = (e) => dummyPictureOnError(e);
      imageBlock.appendChild(img);

      //Add model id
      const modelId = document.createElement("div");
      modelId.classList.add("recomendation__model");
      modelId.innerHTML = `<span>${p.item_id}</span>`;

      //Add title
      const title = document.createElement("div");
      title.classList.add("recomendation__name");
      title.innerHTML = `<span>${p.title || "Produkt"}</span>`;
      title.style.marginTop = "8px";
      title.style.fontSize = "14px";
      title.style.fontWeight = "600";

      //ADD Price
      const price = document.createElement("div");
      price.classList.add("recomendation__price");
      const currency = p.local_currency || "PLN";
      const value =
        typeof p.price_local_currency === "number"
          ? p.price_local_currency
          : p.price;
      price.innerHTML = `<span>${formatPrice(value, currency)}</span>`;

      card.appendChild(imageBlock);
      card.appendChild(modelId);
      card.appendChild(title);
      card.appendChild(price);
      recomendationItem.appendChild(card);
      listItem.appendChild(recomendationItem);
      wrapper.appendChild(listItem);
    });
  }

  function formatPrice(value, currency) {
    if (typeof value !== "number") return "";
    try {
      return new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency,
      }).format(value);
    } catch {
      return `${value} ${currency}`;
    }
  }

  onReady(() => {
    const source =
      Array.isArray(window.__WOJAS_RECS) && window.__WOJAS_RECS.length
        ? window.__WOJAS_RECS
        : DUMMY_RECS;
    ensureBox((box) => renderRecommendations(box, source));
  });
})();
