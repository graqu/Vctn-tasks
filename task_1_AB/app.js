// ==UserScript==
// @name        Wojas A/B Test
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Test A/B koloru przycisku "Dodaj do koszyka" na zielony.
// @author      Jacek W
// @match       https://wojas.pl/*
// @grant       none
// @run-at      document-idle
// ==/UserScript==

const runABTest = () => {
  NEW_GREEN_COLOR = "#037100";
  NEW_HOVER_COLOR = "#035300ff";
  BUTTON_SELECTOR = "a.add-cart";
  STORAGE_TEST_NAME = "AB-TEST";

  let variant = localStorage.getItem(STORAGE_TEST_NAME);

  if (!variant) {
    variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(STORAGE_TEST_NAME, variant);
    console.log(`Current Variant: ${variant}`);
  } else {
    console.log(`Variant like before: ${variant}`);
  }

  if (variant === "B") {
    const style = document.createElement("style");

    style.innerHTML = `
            ${BUTTON_SELECTOR} {
                background-color: ${NEW_GREEN_COLOR} !important;
                border-color: ${NEW_GREEN_COLOR} !important;
                color: white !important;
            }
            ${BUTTON_SELECTOR}:hover {
                background-color: ${NEW_HOVER_COLOR} !important;
            }
        `;
    document.head.appendChild(style);
  }
};

runABTest();
