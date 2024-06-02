const { Kafka } = require('kafkajs')

// Create the client with the broker list
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
})


const product=async()=>{
     const producer = kafka.producer()

     await producer.connect()
     await producer.send({
       topic: 'test-topic',
       messages: [
         { value: 'Hello KafkaJS user!' },
       ],
     })
     
     await producer.disconnect()
}

product()