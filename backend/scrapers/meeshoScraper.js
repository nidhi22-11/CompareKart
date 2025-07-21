const puppeteer = require('puppeteer');


async function scrapeMeesho(query) {
  const url = `https://www.meesho.com/search?q=${query}`;

  const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});


  const page = await browser.newPage();

  // Pretend to be a real user
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  );

  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
  });

  await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 60000,
  });

  // Optional: Uncomment if you need visual debug
  // await page.screenshot({ path: "meesho.png", fullPage: true });

  const products = await page.evaluate(() => {
    const items = [];
    const productCards = document.querySelectorAll('div[class*="ProductCard"]');

    productCards.forEach((card) => {
      const name = card.querySelector("p")?.innerText.trim();
      const price = card.querySelector("h5")?.innerText.trim();
      const image = card.querySelector("img")?.src;
      const link = card.closest("a")?.href;

      if (name && price && image && link) {
        items.push({
          name,
          price,
          image,
          link,
          source: "meesho",
        });
      }
    });

    return items.slice(0, 5); // Limit for performance
  });

  // Optional for testing:
  // console.log("✅ Meesho Products:", products.length, products[0]);

  await browser.close();
  return products;
}

module.exports = scrapeMeesho;
