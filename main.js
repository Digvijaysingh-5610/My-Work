// Lines/headings you want for each picture page
const headings = [
    "Rashika yaad hai kya",
    "palak teri mummy hai",
    "tu beta hai mera"
];

// Your example images and their captions
const images = [
    {
        src: "istockphoto-464788862-612x612.jpg",
        caption: "Sweet birds enjoying the spring blossoms."
    },
    {
        src: "istockphoto-136917788-612x612.jpg",
        caption: "Peaceful geese at sunset—symbolizing journeys together."
    },
    {
        src: "istockphoto-517188688-612x612.jpg",
        caption: "Mountains at sunrise, starting a new day with hope."
    },
    {
        src: "images.jpg",
        caption: "Star-filled night sky, full of dreams and fun memories."
    }
];

// Assign number of "picture pages" for your lines = headings count
// Pick images for those pages (edit as you wish)
const imagePages = [
    { ...images[0], heading: headings[0] },
    { ...images[1], heading: headings[1] },
    { ...images[2], heading: headings[2] }
];

// Set up first intro page, then run photo pages in order:
const pages = [
    {
        type: "intro",
        content: "BSDK bhai hai tu"
    },
    ...imagePages
];

const container = document.getElementById("container");
let currPage = 0;

// Renderers:
function showIntro(text) {
    container.innerHTML = `<div class="intro">${text}</div>`;
}
function showPhotoPage({heading, src, caption}) {
    container.innerHTML =
        `<div class="photo-block">
            <div class="heading">${heading}</div>
            <div class="photo-frame"><img src="${src}" alt="Pic"></div>
            <div class="caption">${caption}</div>
         </div>`;
}

// Animation loop:
function nextPage() {
    currPage++;
    if (currPage < pages.length) {
        const p = pages[currPage];
        if (p.type === "intro") {
            showIntro(p.content);
        } else {
            showPhotoPage(p);
        }
        setTimeout(nextPage, 2600); // 2.6s for intro, 2.6s for each photo page (adjust as you like)
    }
}

// Initial render:
showIntro(pages[0].content);
// After 2.5s, show next page (first image):
setTimeout(nextPage, 2500);
