const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        name: "Airpods Max",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=470&hei=556&fmt=png-alpha&.v=1604022365000",
        price: 59900,
        desc: "AppleCare+ for Headphones From Rs 1375.00/mo.or MRP Rs 7900.00 (Incl. of all taxes) Get up to 2 years of unlimited repairs for accidental damage protection and additional tech support.**"
    },
    {
        name: "Iwatch",
        img: "https://img.tatacliq.com/images/i11/658Wx734H/MP000000014420354_658Wx734H_202305121945571.jpeg",
        price: 32900,
        desc: "New Watch SE GPS 44mm Midnight Aluminium Case with Midnight Sport Band. : Keep yourself updated by sporting this Apple smartwatch from Watch SE. This pack comes with an aluminum case."
    },
    {
        name: "Macbook m2 pro",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1664497359481",
        price: 250000,
        desc: "1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted capacity less.The displays on the 14-inch and 16-inch MacBook Pro have rounded corners at the top."
    },
    {
        name: "Ipad pro",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1670865951347",
        price: 81900,
        desc: "How much storage you need depends on how you use your iPad. More room means you can store more apps, music, movies and books. It also lets you store RAW images, 4K videos, 3D renders,."
    },
    {
        name: "Apple Mac mini",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-202301-gallery-1?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1670630966384",
        price: 59900,
        desc: "4K High Frame Rate HDR with Dolby Vision for fluid, crisp video. Dolby Atmos for immersive, room-filling sound. A12 Bionic chip with 64-bit architecture processor."
    },
    {
        name: "Apple TV",
        img: "://shttpstore.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=538&hei=535&fmt=jpeg&qlt=95&.v=1664896361408",
        price: 14900.00,
        desc: "Apple TV 4K (3rd generation) brings the best of TV together with your favourite Apple devices and services. With 4K Dolby Vision, HDR10+ and Dolby Atmos"
    },
    {
        name: "Iphone 13",
        img: "https://images.unsplash.com/photo-1639769167793-f046c9351f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        price: 60999,
        desc: "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking,."
    },
    {
        name: "Iphone 14",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-yellow?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676505838319",
        price: 79900,
        desc: "The iPhone 14 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532 × 1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz."
    },
    {
        name: "Iphone 14 pro",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896",
        price: 139900,
        desc: "The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the sixteenth-generation flagship iPhones."
    },
    {
        name: "MagSafe Battery Pack",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MJWY3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1625613219000",
        price: 12100,
        desc: "Attaching the MagSafe Battery Pack is a snap. Its compact, intuitive design makes on-the-go charging easy. The perfectly aligned magnets keep it attached to your iPhone 12 and iPhone 12 Pro, iPhone 13 and iPhone 13 Pro"
    },
    {
        name: "USB-C to Lightning Cable",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM0A3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632956386000",
        price: 1900,
        desc: "Connect your iPhone, iPad or iPod with Lightning connector to your USB-C– or Thunderbolt 3 (USB-C)–enabled Mac for syncing and charging, or to your USB-C–enabled iPad for charging.",
    },
    {
        name: "AirPods",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
        price: 26900,
        desc: "Every set of AirPods, Beats earphones or Beats headphones comes with a 1-year limited warranty and up to 90 days of complimentary technical support."
    }

]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;