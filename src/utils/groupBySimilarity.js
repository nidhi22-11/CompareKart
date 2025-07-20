import stringSimilarity from "string-similarity";

const groupBySimilarity = (products) => {
  const grouped = {};

  products.forEach((product) => {
    const existingKey = Object.keys(grouped).find((key) => {
      return stringSimilarity.compareTwoStrings(key.toLowerCase(), product.name.toLowerCase()) > 0.6;
    });

    if (existingKey) {
      if (!Array.isArray(grouped[existingKey])) {
        grouped[existingKey] = []; // safety check
      }
      grouped[existingKey].push(product);
    } else {
      grouped[product.name] = [product];
    }
  });

  return grouped;
};

export default groupBySimilarity;
