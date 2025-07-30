const images = [
    {
        src: "istockphoto-464788862-612x612.jpg",
        caption: "Sweet birds enjoying the spring blossoms."
    },
    {
        src: "istockphoto-136917788-612x612.jpg",
        caption: "Peaceful geese flying at sunset, symbolizing journeys and togetherness."
    },
    {
        src: "istockphoto-517188688-612x612.jpg",
        caption: "Glorious sunrise over green mountains—new beginnings and hope."
    },
    {
        src: "images.jpg",
        caption: "A dazzling night sky filled with stars, reflecting dreams and wonder."
    }
];

let i = 0;
const mainPhoto = document.getElementById('mainPhoto');
const caption = document.getElementById('caption');

setInterval(() => {
    i = (i + 1) % images.length;
    mainPhoto.src = images[i].src;
    caption.textContent = images[i].caption;
}, 15000); // 15 seconds
