const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'laafisebe',
  brokers: ['laafi1:9092', 'laafi2:9092'],
  connectionTimeout: 3000
});

const produceMessages = async (topic="rfid" ,value) => {
  const producer = kafka.producer();
  try {
    await producer.connect();
    await producer.send({
      topic:topic ,
      messages: [{ value: value }],
    });
  } catch (error) {
    console.error('Error producing messages:', error);
  } finally {
    await producer.disconnect();
  }
};

const consumeMessages = async (topic = "rfid" ) => {
  return new Promise(async (resolve, reject) => {
    const consumer = kafka.consumer({ groupId: 'partenaires' });
    try {
      await consumer.connect();
      await consumer.subscribe({ topic: topic, fromBeginning: true });
      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString();
          console.log({ value });
          resolve(value); // Renvoyer le message consommé
        },
      });
    } catch (error) {
      console.error('Error consuming messages:', error);
      reject(error); // Rejeter en cas d'erreur
    }
  });
};


module.exports.kafka = { produceMessages, consumeMessages };
