const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeAmazon(query) {
  const url = `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.110 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 20000, // ⏳ Increased timeout to 20 seconds
    });

    const $ = cheerio.load(data);
    const products = [];

    $('.s-main-slot .s-result-item').each((i, el) => {
      const name = $(el).find('h2 span').text().trim();
      const price = $(el).find('.a-price .a-offscreen').first().text().trim();
      const rating = $(el).find('.a-icon-star-small span').first().text().trim();
      const relativeLink = $(el).find("a").attr("href");
const fullLink = relativeLink?.startsWith("http")
  ? relativeLink
  : `https://www.amazon.in${relativeLink}`;

      const image = $(el).find('img.s-image').attr('src') || $(el).find('img.s-image').attr('data-src');
      const description =
        $(el).find('span.a-text-normal').last().text().trim() ||
        $(el).find('.a-color-base.a-text-normal').text().trim() ||
        $(el).find('.a-row.a-size-base.a-color-secondary').text().trim();

      if (name) {
        products.push({ name, price, rating, description, source: 'Amazon', link: fullLink, image });
      }
    });

    return products.slice(0, 5); // 📦 limit to 5 products
  } catch (err) {
    console.error("❌ Amazon Scraper Error:", err.message);
    return []; // return empty so backend doesn't crash
  }
}

module.exports = scrapeAmazon;