import Futsal from "../models/Futsal.js";
import { filterHandler } from "../utils/filterHandler.js";

export const getFutsals = async (req, res) => {
  try {
    const futsals = await Futsal.find(filterHandler(req?.query))?.populate('owner');
    res.status(200).send({
      status: "success",
      message: "Futsals fetched successfully",
      data:futsals
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      error,
      message: "Error while getting futsal list",
    });
  }
};

export const getPopularFutsals = async (req, res) => {
  try {
    const futsals = await Futsal.aggregate([
      {
        $lookup: {
          from: 'bookings',
          localField: '_id',
          foreignField: 'futsal',
          as: 'bookings'
        }
      },
      {
        $addFields: {
          bookingsCount: { $size: '$bookings' }
        }
      },
      {
        $sort: { bookingsCount: -1 },//Ascending
      },
      {
        $limit: 10
      },
      {
        $project: {
          bookings: 0 // Optional: remove the bookings array if not needed
        }
      }
    ])

    res.status(200).send({
      status: "success",
      message: "Popular Futsals fetched successfully",
      data:futsals
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      error,
      message: "Error while getting popular futsal list",
    });
  }
};

export const getFutsal = async (req, res) => {
  try {
    const futsal = await Futsal.findById(req.params.id)?.populate('owner');
    return res.status(200).send({
      status: "success",
      message: "Fetched futsal detail successfully",
      data:futsal
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      error,
      message: "Error while getting futsal detail",
    });
  }
};

export const getFutsalsByOwner = async (req, res) => {
  try {
    const futsals = await Futsal.find({ owner: { $eq: req?.query?.owner } });
    res.status(200).send({
      status: "success",
      message: "User Futsals fetched successfully",
      data:futsals
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      error,
      message: "Error while getting futsal list",
    });
  }
};

export const createFutsal = async (req, res) => {
  try {
    const { role, _id } = req?.user
    const createdBy = role === 3 ? _id : "self"
    const { name, location, google_map_location_string, phone, image, owner, images, rate, category, venues } = req.body;
    const ownerWho = role === 2 ? _id : owner
    //validations
    if (!name) {
      return res.status(400).json({ error: "Name is Required" });
    }
    if (!location) {
      return res.status(400).json({ error: "Location is Required" });
    }
    if (!google_map_location_string) {
      return res.status(400).json({ error: "Google map location is Required" });
    }
    if (!phone) {
      return res.status(400).json({ error: "Phone no is Required" });
    }
    if (!rate) {
      return res.status(400).json({ error: "Rate is Required" });
    }
    //check user
    const registeredFutsal = await Futsal.findOne({ name }, "");
    //exisiting user
    if (registeredFutsal) {
      return res.status(409).json({
        status: "failed",
        message: "Futsal with the same name already registered",
      });
    }
    //register user
    //save
    const futsal = await new Futsal({
      name: name.toLowerCase(),
      location,
      phone,
      google_map_location_string,
      image,
      owner: ownerWho,
      images,
      rate,
      venues,
      category,
      createdBy: createdBy
    }).save();

    return res.status(201).send({
      status: "success",
      message: "Futsal added Successfully",
      futsal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Error while adding futsal",
      error,
    });
  }
};

export const updateFutsal = async (req, res) => {
  try {
    const { role, _id } = req?.user

    const updatedBy = role === 3 ? _id : "self"
    const { name, location, google_map_location_string, phone, image, owner, images, rate, category, venues } = req.body;
    const ownerWho = role === 2 ? _id : owner
    // check user
    const registeredFutsal = await Futsal.findOne({ name:name.toLowerCase() });

    //exisiting user
    if (registeredFutsal && registeredFutsal._id.toString() !== req.params.id.toString()) {
      return res.status(409).send({
        success: false,
        message: "Futsal with the same name already registered",
      });
    }
    // register user
    // save
    const futsal = await Futsal.findByIdAndUpdate(req.params.id, {
      name: name.toLowerCase(),
      location,
      phone,
      google_map_location_string,
      image,
      owner:ownerWho,
      images,
      rate,
      venues,
      category,
      updatedBy: updatedBy
    }, { new: true })
    await futsal.save();

    res.status(200).send({
      status: "success",
      message: "Futsal updated Successfully",
      futsal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Error while updating futsal",
      error,
    });
  }
};

export const deleteFutsal = async (req, res) => {
  try {
    await Futsal.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: "success",
      message: "Futsal Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Error while deleting futsal",
      error,
    });
  }
};