// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../util/dbConnect'
import User from './user'
import {hash} from 'bcryptjs'


dbConnect()

export default async  (req, res) => {

  const {method} = req

  switch(method){
    case 'GET':
      try {
        const users = await User.find({})

       return res.status(200).json({success: true, data: users})
      } catch (error) {
        return res.status(400).json({success:false})
      }
      
    case 'POST':
      try {

      const {firstName, lastName, phoneNumber, birthdayMonth, birthdayDay,email,password} = req.body

      hash(password, 12, async function(err, hash) {
        // Store hash in your password DB

        const password = hash

        const userInfo = {
          firstName,
          lastName,
          phoneNumber,
          birthdayMonth,
          birthdayDay,
          email,
          password
        }

        const exists = await User.exists({phoneNumber, email})

        if(exists){
        return res.status(200).json({msg:"user already exists"})

        } else{
          const user = await User.create(userInfo)
          return res.status(201).json({success:true, data:user })
        }
      });
      } catch (error) {
      return  res.status(400).json({success:false, error:error})
      }
      
    default:
     return res.status(400)
  }
}
