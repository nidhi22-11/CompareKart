import React from "react";

const platforms = ["Amazon", "Meesho"]; // Add more later if needed

const CompareTable = ({ groupedProducts }) => {
  const productNames = Object.keys(groupedProducts);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Platform</th>
            {productNames.map((name, idx) => (
              <th key={idx} className="border px-4 py-2 text-left">{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {platforms.map((platform) => (
            <tr key={platform}>
              <td className="border px-4 py-2 font-semibold">{platform}</td>
              {productNames.map((productName, idx) => {
  const productList = Array.isArray(groupedProducts[productName]) ? groupedProducts[productName] : [];
  const product = productList.find(
    (p) => p.source.toLowerCase() === platform.toLowerCase()
  );
  return (
    <td key={idx} className="border px-4 py-2">
      {product ? (
        <div className="space-y-1">
          <p className="font-medium">{product.price}</p>
          <p className="text-sm text-gray-600">{product.rating ? `⭐ ${product.rating}` : "No rating"}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm underline"
          >
            View
          </a>
        </div>
      ) : (
        <p className="text-gray-400 italic">N/A</p>
      )}
    </td>
  );
})}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;