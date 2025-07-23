import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
      let token = req.headers.authorization.split(" ")[1];
    
      if (!token) {
        return res.status(403).send({ message: "No token provided!" });
      }
    
      JWT.verify(token,
                process.env.JWT_SECRET,
                (err, decoded) => {
                  if (err) {
                    return res.status(401).send({
                      status:"failed",
                      message: "Unauthorized ! Please Login",
                    });
                  }
                  req.user = decoded;
                  next();
                });
  } catch (error) {
    console.log(error);
  }
};

// futsal owner access 
export const isOwner = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 2) {
      return res.status(401).send({
        status: "failed",
        message: "Unauthorized! Register as Owner to access!",
      });
    } else {
      req.user.role=user.role
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: "failed",
      error,
      message: "Error in owner middelware",
    });
  }
};

export const isOwnerOrMore = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role < 2) {
      return res.status(401).send({
        status: "failed",
        message: "Cannot access as a user!",
      });
    } else {
      req.user.role=user.role
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      status: 'failed',
      error,
      message: "Error in owner middelware",
    });
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 3) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access!",
      });
    } else {
      req.user.role=user.role
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};