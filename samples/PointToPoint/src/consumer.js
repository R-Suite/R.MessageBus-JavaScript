
// Context contains bus and headers
var message1Handler = function(message, context) {
    document.getElementById('results').value = document.getElementById('results').value + 
                                               "\n\n" + 
                                               "Message 1: " + 
                                               JSON.stringify(message);
    console.log("Message 1: " + message);
};

var message2Handler = function (message, context) {
    document.getElementById('results').value = document.getElementById('results').value + 
                                           "\n\n" + 
                                           "Message 2: " + 
                                           JSON.stringify(message);
    console.log("Message 2: " + message);
};

var bus = Bus.initialize(function (config) {
    config.queue = "rmessagebus.stomp.pointtopoint.consumer";
    config.url = "http://localhost:15674/stomp"; // Enable stomp adapter using "rabbitmq-plugins enable rabbitmq_stomp"

    config.handlers = {
        "Message1": message1Handler,
        "Message2": message2Handler
    };
});
