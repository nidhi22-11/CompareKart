const express = require("express");
const router = express.Router();

const scrapeAmazon = require("../scrapers/amazonScraper");
const scrapeMeesho = require("../scrapers/meeshoScraper");

router.get("/", async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const [amazonResults, meeshoResults] = await Promise.all([
      scrapeAmazon(query),
      scrapeMeesho(query),
    ]);

    res.json({
      amazon: amazonResults,
      meesho: meeshoResults,
    });
  } catch (err) {
    console.error("❌ Scraper Error:", err);
    res.status(500).json({ error: "Scraping failed" });
  }
});

module.exports = router;
