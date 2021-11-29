import mongoose from 'mongoose'

const connection = {}

const KEY = process.env.MONGODB_URI

console.log(KEY)

async function dbConnect(){
    if(connection.isConnectd){
        return
    }
    const db= await mongoose.connect(KEY, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected)
}

export default dbConnect