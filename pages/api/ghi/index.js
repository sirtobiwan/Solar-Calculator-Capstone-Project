import dbConnect from "@/db/connect";
import Ghi from "@/db/models/Ghis";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const ghi = await Ghi.find();

    console.log(ghi);

    if (!ghi) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(ghi);
  }
}

