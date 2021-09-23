const express = require("express");
const app = express();
const dfff = require('dialogflow-fulfillment');

app.get('/', (req, res) => {
    res.send("El servidor del webhook está vivo")
});

app.post('/', express.json(), (req, res) => {
    const agent = new dfff.WebhookClient({
        request: req,
        response: res
    });

    function demo(agent){
        agent.add("Respuesta enviada desde el servidor webhook");
    }

    var intentMap = new Map();

    intentMap.set("webhookDemo", demo)

    agent.handleRequest(intentMap);
});


app.listen(5000, () => console.log("El servidor esta en el puerto 5000"));