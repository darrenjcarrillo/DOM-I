const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CODE STARTS HERE

const header = document.getElementsByTagName("header");

// Navigation
const navigation = document.querySelector("nav");
const links = navigation.querySelectorAll("a");
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-4"];
links[5].textContent = siteContent.nav["nav-item-6"];

// links.forEach(items => {
//   items.textContent = siteContent.nav;
// });

// Call to action

const heading = document.getElementsByTagName("h1");
heading[0].textContent = siteContent.cta.h1;

const mainButton = document.getElementsByTagName("button");
mainButton[0].textContent = siteContent.cta.button;

// document.getElementsByTagName("button")[0].textContent = siteContent.cta.button;

const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent.cta["img-src"];

// Main Content

// const h4Content = document.getElementsByTagName("h4");
// h4Content.forEach(item => {
//   item.textContent = siteContent["main-content"]["h4"];
// });

const h4Content = document.querySelectorAll("h4");

const pContent = document.querySelectorAll("p");

const middleImage = document.getElementById("middle-img");

// h4's
h4Content[0].textContent = siteContent["main-content"]["features-h4"];
h4Content[1].textContent = siteContent["main-content"]["about-h4"];
h4Content[2].textContent = siteContent["main-content"]["services-h4"];
h4Content[3].textContent = siteContent["main-content"]["product-h4"];
h4Content[4].textContent = siteContent["main-content"]["vision-h4"];

// Middle Image
middleImage.src = siteContent["main-content"]["middle-img-src"];

// paragraph's
pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];

// Contact Section

h4Content[5].textContent = siteContent.contact["contact-h4"];
pContent[5].textContent = siteContent.contact.address;
pContent[6].textContent = siteContent.contact.phone;
pContent[7].textContent = siteContent.contact.email;

// Footer

pContent[8].textContent = siteContent.footer.copyright;
