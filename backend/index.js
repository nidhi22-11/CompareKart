const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/searchRoutes"); // ✅ make sure path is correct

const app = express();
app.use(cors());

// ✅ Route setup
app.use("/search", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
