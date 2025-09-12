import { fetchAnbefalet } from "../fetch.js";

// Finder containeren hvor anbefalingerne skal vises
const anbefalingerContainer = document.querySelector('.anbefalinger');

// Template til hver anbefaling
export const anbefalingerTmpl = (anbefalinger) => {
    return `
    <article class="ting">
        <section class="ting-item">
            <div class="produkt">
                <img src="${anbefalinger.src}" alt="${anbefalinger.alt}">
            </div>
            <div class="info">
                <p class="brand">${anbefalinger.mærke}</p>
                <p class="navn">${anbefalinger.titel}</p>
                <p class="pris">${anbefalinger.price} kr</p>
            </div>
        </section>
    </article>
    `;
};











































