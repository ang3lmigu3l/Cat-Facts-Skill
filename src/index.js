/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-US': {
        translation: {
            FACTS: [
                " Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
                "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
                "A group of cats is called a clowder.",
                "Cats have over 20 muscles that control their ears.",
                "Cats sleep 70% of their lives.",
                "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
                "And one ran for mayor of Mexico City in 2013.",
                "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
                "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
                "When cats grimace, they are usually “taste-scenting.” They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
                " Cats can’t taste sweetness.",
                "Unlike humans, cats only sweat through their paws. This is why you may see them leave moist paw prints in the summer time!",
                "A female cat carries her kittens for about 58-65 days before they are born.",
                "Cats have five toes on each front paw, but only four toes on each back paw.",
                "Cats can run up to 30 miles per hour.",
                "Cats have more than 100 different vocal sounds.",
                "Cats knead with their paws when they are happy.",
                "Calico cats are almost always female.",
                "A male cat is called a 'Tom' and a female cat is called a 'Queen.'",
                "The lighting reflex has helped some cats survive falls from over 32 stories (320 meters) onto solid ground.",
                "According to researchers, keeping a cat as a pet reduces the risk of heart attacks and strokes by nearly one third.",
                "Adult cats never meow to each other but only to communicate with humans.",
                "Cat cafes, where a person can drink coffee and hang out with cats, are becoming popular around the world.",
                "In Japan, a black cat is considered a good luck charm.",
                "The world record of producing the most of kittens is held by a cat called Dusty, who gave birth to 420 kittens during her breeding life.",
                "Cats use their whiskers to figure out how wide an opening is and whether they will fit through it."
                
            ],
            SKILL_NAME: 'Amazing Cat Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a cat fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
