"use strict";

const twilio = require("twilio");

class Caller {
  constructor(logger) {
    this.log = logger;

    this.client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
  }

  async call(phoneNumber, text) {
    const response = new twilio.twiml.VoiceResponse();

    response.say(
      {
        voice: "woman",
        language: "pt-BR",
      },
      text
    );

    const call = await this.client.calls.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
      twiml: response.toString(),
    });

    this.log(`Calling ${phoneNumber}...`);
    this.log(call);
  }
}

module.exports = Caller;
