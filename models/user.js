const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      min: 6,
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type : String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);