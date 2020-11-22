import "@babel/polyfill"
import app from "./app"
import cluster from 'cluster'
import os from 'os'

const numCPUs = os.cpus().length

const main = async () => {
    await app.listen(process.env.APP_PORT)
}

if (process.env.MODE === 'production') {
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`)
        console.log(`CPUs ${numCPUs} is detected`)
        console.log(`Server on port ${process.env.APP_PORT}`)
        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`)
        })
    } else {
        // Workers can share any TCP connection
        // In this case it is an HTTP server
        main()
            .then(() => console.log(`Server on worker ${process.pid} started`))
    }
} else {
    main()
        .then(() => console.log('Server started!'))
}

