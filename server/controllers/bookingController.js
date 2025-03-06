import Booking from "../models/Booking.js";

export const getBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({})?.populate("booker")?.populate("futsal");
      res.status(200).send({
        bookings
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting booking list",
      });
    }
  };

  export const getBookingByFutsal = async (req, res) => {
    try {
      const booking = await Booking.find({futsal:{$eq:req?.query?.id}, date:{$eq: req?.query?.date}}).lean();
      res.status(200).send({
        success: true,
        message: "Bookings Loaded",
        booking,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting booking detail",
      });
    }
  };

//   export const getFutsal = async (req, res) => {
//     try {
//       const futsal = await Futsal.findById(req.params.id);
//       res.status(200).send({
//         futsal
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         error,
//         message: "Error while getting futsal detail",
//       });
//     }
//   };

export const addBooking = async (req, res) => {
    try {
      const { date, time, booker, futsal, rate } = req.body;
      //validations
      if (!booker) {
        return res.status(400).send({ error: "Booker detail is Required" });
      }
      if (!futsal) {
        return res.status(400).send({ error: "Futsal detail is Required" });
      }
      if (!date) {
        return res.status(400).send({ error: "Date is Required" });
      }
      if (!time) {
        return res.status(400).send({ error: "Time is Required" });
      }
      //check user
    //   const registeredFutsal = await Futsal.findOne({ name });
      //exisiting user
    //   if (registeredFutsal) {
    //     return res.status(409).send({
    //       success: false,
    //       message: "Futsal with the same name already registered",
    //     });
    //   }
    //   //register user
    //   //save
      const booking = await new Booking({
        date,
        time,
        booker,
        futsal,
        rate
      }).save();
  
      res.status(201).send({
        success: true,
        message: "Futsal booked Successfully",
        booking,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while booking futsal",
        error,
      });
    }
  };

//   export const updateFutsal = async (req, res) => {
//     try {
//       const { name, location, google_map_location_string, phone, image } = req.body;
//       //validations
//       if (!name) {
//         return res.send({ error: "Name is Required" });
//       }
//       if (!location) {
//         return res.send({ error: "Location is Required" });
//       }
//       if (!google_map_location_string) {
//         return res.send({ error: "Google map location is Required" });
//       }
//       if (!phone) {
//         return res.send({ error: "Phone no is Required" });
//       }
//       // check user
//       const registeredFutsal = await Futsal.findOne({ name });
//       //exisiting user
//       if (registeredFutsal && registeredFutsal._id != req.params.id) {
//         return res.status(409).send({
//           success: false,
//           message: "Futsal with the same name already registered",
//         });
//       }
//       // register user
//       // save
//       const futsal = await Futsal.findByIdAndUpdate(req.params.id,{
//         name,
//         location,
//         phone,
//         google_map_location_string,  
//         image
//       })
//       await futsal.save();
  
//       res.status(201).send({
//         success: true,
//         message: "Futsal updated Successfully",
//         futsal,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error while updating futsal",
//         error,
//       });
//     }
//   };

//   export const deleteFutsal = async (req, res) => {
//     try {
//       await Futsal.findByIdAndDelete(req.params.id);
//       res.status(200).send({
//         success: true,
//         message: "Product Deleted successfully",
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         message: "Error while deleting futsal",
//         error,
//       });
//     }
//   };