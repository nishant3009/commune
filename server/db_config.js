const mongoose = require('mongoose')

export const connection_config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


export const db_url = "mongodb+srv://Ninad:4u2HGF9pHMhZJAQB@cluster0.tbblf5d.mongodb.net/?retryWrites=true&w=majority"

export const connection = mongoose.connection(db_url, connection_config).then(() => {
    console.log("Connection established")
}).catch((error) => {
    console.log(error)
})
