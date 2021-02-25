//Schema
const mongoose = require('mongoose')

const serverSchema = mongoose.Schema(
    {
      ram: {
        type: String,
        required: true,
      },
      cpu: {
        type: String,
        required: true,
      },
      operatingSystem: {
        type: String,
        required: true,
      },
      graphics: {
        type: String,
        required: true,
      },
      storage: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );
    
module.exports = mongoose.model("server", serverSchema);