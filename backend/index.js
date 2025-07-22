const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/searchRoutes"); 

const app = express();
app.use(cors());


app.use("/search", searchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
