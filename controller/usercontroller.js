const user=require('../model/user')
const bcrypt=require('bcrypt')

exports.signupuser = async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone_number = req.body.phone_number;
      const password = req.body.password;
      const userfind = await user.findOne({ where: { email: email } });
      if (userfind) {
        res.json({ res: "this user already exist" });
      } else {
        //hash the password 
        const hashed_password=await bcrypt.hash(password,10)
        await user.create({
          name: name,
          email: email,
          phone_number: phone_number,
          password: hashed_password,
        });
        console.log('user got created ');
      }
    } catch (e) {
      // Handle the error
      res.json({ res: e.message });
    }
  };
  