'use strict';

const { WebhookClient } = require('dialogflow-fulfillment');
const { Text, Card, Image, Suggestion, Payload } = require('dialogflow-fulfillment');
const characters = require('./characters');

let dialogflowFulfillment = ((request, response) => {
  const agent = new WebhookClient({ request, response });
  let intentMap = new Map(); // Map functions to Dialogflow intent names

  function runOnCharacter(callback) {
    let characterName = agent.parameters.character
    let foundCharacters = characters.filter((character) => character.name.includes(characterName))
    if (foundCharacters.length == 1) {
      callback(foundCharacters[0])
    } else  if (foundCharacters.length == 0) {
      agent.add(`I don't know who is ${agent.parameters.character.original}`)
    } else {
      agent.add(`Which one of these do you mean? ${foundCharacters.map(it => it.name).join(", ")}`)
    }
  }

  function welcome(agent) {
    agent.add('Welcome to the Star Wars bot!');
    agent.add(new Card({
      title: 'May the force be with you',
      imageUrl: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/07/hyperreal-darth-vader-tall.jpg',
      text: 'Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱',
      buttonText: 'Temperature Wikipedia Page',
      buttonUrl: 'http://google.com'
    })
    );
    agent.add('I can convert Celsius to Fahrenheit and Fahrenheit to Celsius! What temperature would you like to convert?');
    agent.add(new Suggestion('27° Celsius'));
    agent.add(new Suggestion('-40° Fahrenheit'));
    agent.add(new Suggestion('Cancel'));
  }

  function setCharacter(agent) {
    runOnCharacter(character => {
      agent.add(`What do you want to know about ${character.name}?`);
    })
  }

  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Choose character', setCharacter);
  agent.handleRequest(intentMap);

  return response;

})

module.exports = dialogflowFulfillment