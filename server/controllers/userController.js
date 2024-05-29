import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js"
import fs from 'fs'

export const getUsers = async (req, res) => {
    try {
      const users = await userModel.find().select('-password');
      res.formatter.ok(users)
      // res.status(200).send({
      //   users
      // });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting futsal list",
      });
    }
  };

  export const getUser = async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id).select('-password');
      res.status(200).send({
       user
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting user list",
      });
    }
  };

export const createUser = async (req, res) => {
    try {
        const { name, email, password, phone, address, role,photo } = req.body;
        //validations
        if (!name) {
          return res.send({ error: "Name is Required" });
        }
        if (!email) {
          return res.send({ error: "Email is Required" });
        }
        if (!password) {
          return res.send({ error: "Password is Required" });
        }
        if (!phone) {
          return res.send({ error: "Phone no is Required" });
        }
        if (!address) {
          return res.send({ error: "Address is Required" });
        }
        if (!role) {
          return res.send({ error: "Role is Required" });
        }
        
        if (photo && photo.size > 2000000){
          return res
          .status(500)
          .send({ error: "Photo is required and should be less then 2mb" });
        }
        //check user
        const exisitingUser = await userModel.findOne({ email });
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            success: false,
            message: "User with same email already registered",
          });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({...req?.body}).save();
        if (photo) {
          user.photo.data = fs.readFileSync(photo.path);
          user.photo.contentType = photo.type;
        }
    
        res.status(201).send({
          success: true,
          message: "User Added Successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error while adding user",
          error,
        });
      }
  };

  export const updateUser = async (req, res) => {
    try {
      const { name, email, phone, address, role } = req.body;
        //validations
        if (!name) {
          return res.send({ error: "Name is Required" });
        }
        if (!email) {
          return res.send({ error: "Email is Required" });
        }
        if (!phone) {
          return res.send({ error: "Phone no is Required" });
        }
        if (!address) {
          return res.send({ error: "Address is Required" });
        }
        if (!role) {
          return res.send({ error: "Role is Required" });
        }
      // check user
      const registeredUser = await userModel.findOne({ email });
      //exisiting user
      if (registeredUser && registeredUser._id != req.params.id) {
        return res.status(409).send({
          success: false,
          message: "Email already in use",
        });
      }
      // register user
      // save
      const user = await userModel.findByIdAndUpdate(req.params.id,
        {...req.body, photo:photo},
        { new: true })
      await user.save();
  
      res.status(201).send({
        success: true,
        message: "User updated Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while updating user",
        error,
      });
    }
  };

  export const deleteUser = async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
        success: true,
        message: "User Deleted successfully",
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