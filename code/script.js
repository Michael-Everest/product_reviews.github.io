function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const fadeInElements = document.querySelectorAll('.product');

function checkFadeIn() {
  fadeInElements.forEach(fadeInElement => {
    const elementTop = fadeInElement.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      fadeInElement.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', debounce(checkFadeIn));

// Trigger the fade-in animation on page load
checkFadeIn();


// Define an array of products for each category
const foodProducts = [
    {
      name: "In Bibi's Kitchen - Recipes (Food)",
      image: "food1.jpg",
      description: "\"In Bibi's Kitchen - Recipes\" is a culinary gem that takes readers on a captivating journey through the diverse cuisines of Africa. With authentic recipes shared by grandmothers from eight different African countries, this book celebrates the rich culinary heritage of the continent. It offers a wide range of dishes, accompanied by personal stories and cultural insights, making it a delightful and educational read. From aromatic stews to mouthwatering desserts, \"In Bibi's Kitchen - Recipes\" is a treasure trove of flavors that invites both experienced cooks and food enthusiasts to explore the vibrant and diverse world of African cuisine.",
      link: "https://www.amazon.com/gp/product/1984856731/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
      "rating": 4.5
    },
    {
      name: "Keurig Coffee Make (Food)",
      image: "food2.jpg",
      description: "The Keurig K-Elite Coffee Maker is a convenient and versatile machine designed for coffee enthusiasts. Its sleek brushed silver design adds a modern touch to any kitchen or office space. With the single-serve K-Cup pod system, you can easily brew a customized cup of coffee with adjustable sizes to suit your preferences. The high-pressure brewing system ensures consistent flavor and quality. Additionally, the K-Elite stands out with its ability to brew iced coffee, perfect for refreshing summer beverages. With user-friendly features like programmable brewing and easy cleanup, the Keurig K-Elite offers a convenient brewing experience for coffee lovers on the go.",
      link: "https://www.amazon.com/gp/product/B0788F3R8X/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
      "rating": 4.5
    },
    {
      name: "Think Protein Bar (Food)",
      image: "food3.jpg",
      description: "Indulge your taste buds with the Think Protein Bar Brownie. This delectable treat combines the goodness of a protein bar with the rich and satisfying taste of a brownie. Packed with protein and crafted with quality ingredients, it's a guilt-free snack that fuels your body and satisfies your cravings. Enjoy the perfect blend of nutrition and flavor in every bite with the Think Protein Bar Brownie.",
      link: "https://www.amazon.com/gp/product/B0B17P5N3D/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
      "rating": 4.5
    }
  ];
  
  const techProducts = [
    {
      name: "Open Circuits Book (Tech)",
      image: "tech1.jpg",
      description: "The Open Circuits Book is a captivating exploration of the hidden beauty found within everyday electronics. I gifted this book to my dad, an electrical engineer, and he was absolutely enthralled by it. Through stunning cross-section photography, it unveils the intricate designs and unexpected elegance of internal components that power our devices. From resistors to LEDs, each component is transformed into a work of art, revealing their inner workings and the craftsmanship behind their creation. Whether you're an electrical engineer, a curious tinkerer, or an art enthusiast, this book offers a mesmerizing journey that showcases the beauty and complexity found within the world of electronics.",
      link: "https://www.barnesandnoble.com/w/open-circuits-windell-oskay/1141286999",
      "rating": 4.5
    },
    {
      name: "LG 32\" Monitor (Tech)",
      image: "tech2.jpg",
      description: "The LG 32\" Monitor delivers an exceptional visual experience with its 4K resolution and super crisp display. The stunning clarity and detail bring content to life, immersing you in a world of vibrant colors and sharp images. Whether you're working, gaming, or streaming your favorite shows, this monitor offers an impressive viewing experience that will enhance your overall enjoyment.",
      link: "https://www.amazon.com/gp/product/B08FQ42MN1/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1",
      "rating": 4.5
    },
    {
      name: "Portable Charger (Tech)",
      image: "tech3.jpg",
      description: "The Portable Charger offers upgraded features and reliable performance. With dual output ports and USB-C compatibility, it efficiently charges multiple devices. Its compact and lightweight design makes it highly portable. We've purchased six of these chargers, so 12 technicly, due to their affordable price and excellent value.",
      link: "https://www.amazon.com/gp/product/B07XFBN7HX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
      "rating": 4.5
    }
  ];
  
  const businessProducts = [
    {
      name: "Rich Dad Poor Dad - Book (Business)",
      image: "business1.jpg",
      description: "\"Rich Dad Poor Dad\" has completely transformed my perspective on money and wealth. This insightful book by Robert Kiyosaki offers invaluable lessons on financial literacy and achieving financial independence. Through personal anecdotes and practical advice, Kiyosaki challenges conventional beliefs about money and introduces the concept of building assets and creating passive income streams. This book has empowered me to take control of my finances, make smarter investment decisions, and strive for financial freedom. It's a must-read for anyone seeking to change their financial mindset and embark on a path towards a brighter financial future.",
      link: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194/",
      "rating": 4.5
    },
    {
      name: "Strategize to Win - Book (Business)",
      image: "business2.jpg",
      description: "\"Strategize to Win\" by Carla A. Harris has been a life-changing read for me. This empowering book provides valuable insights on how to navigate and succeed in the competitive world of business. Harris's strategic framework and actionable advice have equipped me with the tools to set clear goals, make sound decisions, and effectively communicate my ideas. The book's emphasis on authenticity, resilience, and networking has transformed the way I approach challenges and opportunities in both my personal and professional life. \"Strategize to Win\" is a game-changer for anyone seeking to elevate their strategic thinking and achieve their goals with confidence.",
      link: "https://www.amazon.com/Strategize-Win-Start-Step-Career/dp/1594633053/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1684093041&sr=1-2",
      "rating": 4.5
    },
    {
      name: "Start With Why - Book (Business)",
      image: "business3.jpg",
      description: "\"Start With Why\" by Simon Sinek has had a profound impact on my life. This thought-provoking book explores the power of purpose and the importance of knowing and communicating our \"why.\" Sinek's compelling insights have shifted my perspective on leadership, decision-making, and personal fulfillment. By understanding the deeper meaning behind my actions and aligning them with my core values, I have gained clarity and a renewed sense of purpose. \"Start With Why\" has inspired me to pursue my passions with intention and has transformed the way I approach both my professional and personal endeavors. It's a transformative read that has the potential to ignite a sense of purpose and drive in anyone seeking to make a meaningful impact.",
      link: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone-ebook/dp/B002Q6XUE4/ref=sr_1_1?crid=2YJIDYFG99VGJ&keywords=start+with+why&qid=1684093133&s=digital-text&sprefix=start+with+why%2Cdigital-text%2C249&sr=1-1",
      "rating": 4.5
    }
  ];
  
  const makerProducts = [
    {
      name: "Stepper Motor NEMA 23 (Maker)",
      image: "maker1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.amazon.com/gp/product/B00PNEPW4C/ref=ppx_yo_dt_b_asin_title_o07_s03?ie=UTF8&psc=1",
      "rating": 4.5
    },
    {
      name: "Stepper Motor Driver NEMA 23(Maker)",
      image: "maker2.jpg",
      description: "Nulla sagittis purus ac ligula pulvinar, nec lacinia lorem ullamcorper.",
      link: "https://www.amazon.com/gp/product/B06Y5VPSFN/ref=ppx_yo_dt_b_asin_title_o07_s04?ie=UTF8&psc=1",
      "rating": 4.5
    },
    {
      name: "Power Supply (Maker)",
      image: "maker3.jpg",
      description: "Fusce eu urna in erat feugiat euismod sed sit amet turpis.",
      link: "https://www.amazon.com/gp/product/B08DJ1FDXV/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1",
      "rating": 4.5
    }
  ];
  
  // Get the current page's filename to determine the category
  const currentPage = location.pathname.split("/").pop();
  let products = [];
 // Determine the products array based on the current page
if (currentPage === "index.html") {
  // Display all products for the main page
  products = [...foodProducts, ...techProducts, ...businessProducts, ...makerProducts];
} else if (currentPage === "food.html") {
  products = foodProducts;
} else if (currentPage === "tech.html") {
  products = techProducts;
} else if (currentPage === "business.html") {
  products = businessProducts;
} else if (currentPage === "maker.html") {
  products = makerProducts;
}// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust the threshold value as needed
};

// Callback function when the intersection occurs
function handleIntersection(entries) {
  entries.forEach(entry => {
    const productDiv = entry.target;
    if (entry.isIntersecting) {
      productDiv.classList.add('fade-in');
    } else {
      productDiv.classList.remove('fade-in');
    }
  });
}

// Create an instance of the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Load the products dynamically
const productContainer = document.getElementById('product-container');
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  // Wrap the product box with an anchor tag
  const productLink = document.createElement('a');
  productLink.href = product.link;
  productLink.target = '_blank'; // Open the link in a new tab

  const productName = document.createElement('h2');
  productName.textContent = product.name;

  const productImage = document.createElement('img');
  // Extract the text before the number in the image file name
  const imageName = product.image.match(/(.+?)(?=\d)/)[1];
  const imagePath = `images/${imageName}/${product.image}`;
  productImage.src = imagePath;
  productImage.alt = product.name;
  productImage.classList.add('product-image');

  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;

  productLink.appendChild(productName);
  productLink.appendChild(productImage);
  productLink.appendChild(productDescription);
  productDiv.appendChild(productLink);
  productContainer.appendChild(productDiv);

  // Observe each product div
  observer.observe(productDiv);
});