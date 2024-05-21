import Futsal from "../models/Futsal.js";

export const getFutsals = async (req, res) => {
    try {
      const futsals = await Futsal.find({});
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

  export const getFutsal = async (req, res) => {
    try {
      const futsal = await Futsal.findById(req.params.id);
      res.status(200).send({
        futsal
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
      const { name, location, google_map_location_string, phone, owner } = req.body;
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
      const user = await new Futsal({
        name,
        location,
        phone,
        google_map_location_string,
        
      }).save();
  
      res.status(201).send({
        success: true,
        message: "Futsal added Successfully",
        user,
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
      const { name, location, google_map_location_string, phone, owner } = req.body;
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
        message: "Product Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error,
      });
    }
  };