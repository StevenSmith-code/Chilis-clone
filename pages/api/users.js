import dbConnect from '../../util/dbConnect'
import User from './user'
dbConnect()

export default async (req,res) => {
    try {
        const users = await User.find({})
        return res.status(200).json({data: users})
    } catch (error) {
        return res.status(400).json({error})
    }
}