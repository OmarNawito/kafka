const {Kafka, logLevel} = require('kafkajs');


const kafka = new Kafka({
    brokers: ['kafka:29092'],
    clientId: "demo-consumer",
    logLevel: logLevel.INFO
})


const main = async () => {
    const consumer = kafka.consumer({
        groupId: 'demo-consumer-group',
        fromOffset: true
    })

    await consumer.connect()
    await consumer.subscribe({topic: 'truck_engine_sensors'})
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const payload = message.value.toString()
            console.log(`Consumed message ${payload}`)
        }
    })
}

main().catch(e => {
    console.log(e)
})