const puppeteer = require("puppeteer");

async function scrapeFlipkart(query) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const url = `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;
  await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });

  // Wait for universal container
  await page.waitForSelector("div._1YokD2");

  // Scroll to load more
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await new Promise((r) => setTimeout(r, 1000));
  }

  const products = await page.evaluate(() => {
    const items = [];
    const cards = document.querySelectorAll("div._1AtVbE");

    cards.forEach((card) => {
      const name =
        card.querySelector("div._4rR01T")?.innerText || // electronics
        card.querySelector("a.s1Q9rs")?.innerText || // fashion
        card.querySelector("div._2WkVRV")?.innerText || ""; // alternate

      const price =
        card.querySelector("div._30jeq3")?.innerText || "";

      const rating =
        card.querySelector("div._3LWZlK")?.innerText || "";

      const image =
        card.querySelector("img")?.src || "";

      const linkElement =
        card.querySelector("a._1fQZEK") ||
        card.querySelector("a.s1Q9rs") ||
        card.querySelector("a.IRpwTa");

      const link = linkElement
        ? "https://www.flipkart.com" + linkElement.getAttribute("href")
        : "";

      if (name && price && image && link) {
        items.push({
          name,
          price,
          rating,
          image,
          description: name,
          link,
          source: "Flipkart",
        });
      }
    });

    return items.slice(0, 5);
  });

  await browser.close();

  console.log("✅ Flipkart Products:", products.length);
  if (products.length > 0) console.log("🔹 Sample:", products[0]);

  return products;
}

module.exports = scrapeFlipkart;
