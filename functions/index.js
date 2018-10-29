'use strict';

// Pub/Sub functions
exports.startAutomation = (event, callback) => {
    const message = event.data;

    console.log(`[startAutomation]`);
    if (message.attributes == null || message.attributes["automationId"] == null) {
        console.error(`Did not find an 'automationId' attribute in the message`);
        callback();
    }

    const automationId = message.attributes["automationId"];
    const userId = message.attributes["userId"];
    console.log(`starting automation with Id '${automationId}' for user '${userId}'`)

    callback();
};

exports.deleteAutomation = (event, callback) => {
    const message = event.data;

    console.log(`[deleteAutomation]`);
    if (message.attributes == null || message.attributes["automationId"] == null) {
        console.error(`Did not find an 'automationId' attribute in the message`);
        callback();
    }

    const automationId = message.attributes["automationId"];
    const userId = message.attributes["userId"];
    console.log(`deleting automation with Id '${automationId}' for user '${userId}'`)

    callback();
};

// Http functions
exports.listAutomations = (event, callback) => {
    console.log(`[listAutomations]`);

    callback();
};
