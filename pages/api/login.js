import dbConnect from '../../util/dbConnect'
import Login from './userSignin'

dbConnect()

const jwt = require('jsonwebtoken')




export default async  (req, res) => {

    const {method} = req
  
    switch(method){   
      case 'POST':
        try {
  
        const username = req.body.phoneNumber
        const userinfo = {name: username}
  
        
        const accessToken = jwt.sign(userinfo, process.env.ACCESS_TOKEN_SECRET)
            
  
  
  
        //   const user = await Login.create(req.body)
         return res.status(201).json({success:true, data: req.body, accessToken})
        } catch (error) {
        return  res.status(400).json({success:false, error:error})
        }
        
      default:
       return res.status(400)
    }
  }
  