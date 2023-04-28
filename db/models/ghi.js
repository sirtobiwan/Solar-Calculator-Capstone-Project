import mongoose from "mongoose";

const { Schema } = mongoose;

const ghiSchema = new Schema({
  ghi: { type: Number, required: true },
});

const Ghi = mongoose.models.Ghi || mongoose.model("Ghi", ghiSchema);

export default Ghi;
