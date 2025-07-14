import { User } from '../Models/User.js';

export const userRegister = async (req, res) => {
 try {
    let user = await User.create(req.body);
    res.json({
    message: "User Created successfully",
    Newuser: user,
    success: true
  });
  }
  catch(error){
    res.json({message:error.message})
  }
};