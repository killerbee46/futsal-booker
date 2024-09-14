import { Router } from 'express';
import User from '../models/user';

const router = Router();

// // Get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err:any) {
//     res.status(500).json({ message: err.message });
//   }
// });

// upload a file
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
