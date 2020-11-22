require('dotenv').config()
import "@babel/polyfill"

import app from "./app"

const main = async () => {
    await app.listen(process.env.APP_PORT)
    console.log(`Server on port ${process.env.APP_PORT}`)

    console.log(process.env.APP_DB,
        process.env.APP_DB_USER,
        process.env.APP_DB_PASSWORD)
}

main()
    .then(() => console.log('Server started!'))