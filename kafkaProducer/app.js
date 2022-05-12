const {Kafka, logLevel} = require('kafkajs');
const dump_data = require("./dump-data/truck_engine_sensors.json")

const kafka = new Kafka({
    brokers: ['kafka:29092'],
    clientId: "demo-producer",
    logLevel: logLevel.INFO
})

const main = async () => {
    const producer = kafka.producer()
    await producer.connect()
    const interval = setInterval(async () => {
        const data = dump_data[Math.floor(Math.random() * dump_data.length)]
        const result = await producer.send({
            topic: 'truck_engine_sensors',
            messages : [
                { value: JSON.stringify(data) }
            ],
        })
        console.log('result', result)
    }, 2000)
}

main().catch(e => {
    console.log(e)
})