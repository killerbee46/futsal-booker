import Futsal from "../models/Futsal.js";

export const getFutsals = async (req, res) => {
    try {
      const futsals = await Futsal.find({})?.populate('owner');
      res.status(200).send({
        success:true,
        message:"Futsals fetched successfully",
        futsals
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
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
          $limit:10
        },
        {
          $project: {
            bookings: 0 // Optional: remove the bookings array if not needed
          }
        }
      ])

      res.status(200).send({
        futsals
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting popular futsal list",
      });
    }
  };

  export const getFutsal = async (req, res) => {
    try {
      const futsal = await Futsal.findById(req.params.id)?.populate('owner');
      res.status(200).send({
        futsal
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting futsal detail",
      });
    }
  };

  export const getFutsalsByOwner = async (req, res) => {
    try {
      const futsals = await Futsal.find({owner:{$eq:req?.query?.owner}});
      res.status(200).send({
        futsals
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting futsal list",
      });
    }
  };

export const createFutsal = async (req, res) => {
    try {
      const { name, location, google_map_location_string, phone, image, owner } = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!location) {
        return res.send({ error: "Location is Required" });
      }
      if (!google_map_location_string) {
        return res.send({ error: "Google map location is Required" });
      }
      if (!phone) {
        return res.send({ error: "Phone no is Required" });
      }
      //check user
      const registeredFutsal = await Futsal.findOne({ name });
      //exisiting user
      if (registeredFutsal) {
        return res.status(409).send({
          success: false,
          message: "Futsal with the same name already registered",
        });
      }
      //register user
      //save
      const futsal = await new Futsal({
        name,
        location,
        phone,
        google_map_location_string,
        image, 
        owner
      }).save();
  
      res.status(201).send({
        success: true,
        message: "Futsal added Successfully",
        futsal,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while adding futsal",
        error,
      });
    }
  };

  export const updateFutsal = async (req, res) => {
    try {
      const { name, location, google_map_location_string, phone, image, owner } = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!location) {
        return res.send({ error: "Location is Required" });
      }
      if (!google_map_location_string) {
        return res.send({ error: "Google map location is Required" });
      }
      if (!phone) {
        return res.send({ error: "Phone no is Required" });
      }
      // check user
      const registeredFutsal = await Futsal.findOne({ name });
      //exisiting user
      if (registeredFutsal && registeredFutsal._id != req.params.id) {
        return res.status(409).send({
          success: false,
          message: "Futsal with the same name already registered",
        });
      }
      // register user
      // save
      const futsal = await Futsal.findByIdAndUpdate(req.params.id,{
        name,
        location,
        phone,
        google_map_location_string,  
        image, 
        owner
      })
      await futsal.save();
  
      res.status(201).send({
        success: true,
        message: "Futsal updated Successfully",
        futsal,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while updating futsal",
        error,
      });
    }
  };

  export const deleteFutsal = async (req, res) => {
    try {
      await Futsal.findByIdAndDelete(req.params.id);
      res.status(200).send({
        success: true,
        message: "Futsal Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting futsal",
        error,
      });
    }
  };