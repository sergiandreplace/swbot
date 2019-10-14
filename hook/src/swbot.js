'use strict';

const { WebhookClient } = require('dialogflow-fulfillment');
const { Text, Card, Image, Suggestion, Payload } = require('dialogflow-fulfillment');
const characters = require('./characters');
const planets = require('./planets');

let dialogflowFulfillment = ((request, response) => {
  const agent = new WebhookClient({ request, response });
  let intentMap = new Map(); // Map functions to Dialogflow intent names

  function runOnCharacter(callback) {
    let characterName = agent.parameters.character
    let foundCharacters = characters.filter((character) => character.name.includes(characterName))
    if (foundCharacters.length == 1) {
      callback(foundCharacters[0])
    } else  if (foundCharacters.length == 0) {
      agent.add(`I don't know who ${agent.parameters.character.original} is`)
    } else {
      agent.add(`Which one of these do you mean? ${foundCharacters.map(it => it.name).join(", ")}`)
    }
  }

  function pickupRandomPhrase (array) {
    return array[Math.floor(Math.random() * Array.length)]
  }

  function welcome(agent) {
    agent.add('Welcome to the Star Wars bot!');
    agent.add(new Card({
      title: 'May the force be with you',
      imageUrl: 'https://starwarsblog.starwars.com/wp-content/uploads/2019/07/hyperreal-darth-vader-tall.jpg',
      text: 'You can ask facts about any Star Wars character',
      buttonText: 'Star Wars Wikipedia Page',
      buttonUrl: 'https://en.wikipedia.org/wiki/Star_Wars'
    })
    );
    agent.add(new Suggestion('Darth Vader'));
    agent.add(new Suggestion('Luke Skywalker'));
    agent.add(new Suggestion('R2-D2'));
  }

  function setCharacter(agent) {
    runOnCharacter(character => {
      agent.add(`What do you want to know about ${character.name}?`);
      
    })
  }

  function getCharacterHeight(agent) {
    runOnCharacter(character => {
      let answers = [
        `${character.name} is ${character.height} cm tall`,
        `${character.name} measures ${character.height} cm`
      ]
      agent.add(pickupRandomPhrase(answers));
      
    })
  }
  function getCharacterHair(agent) {
    runOnCharacter(character => {
      let answers = [
        `${character.name}'s hair color is ${character.hair_color}`,
        `${character.name}'s has a ${character.hair_color} hair`,
        `${character.name}'s hair is ${character.hair_color}`
      ]
      agent.add(pickupRandomPhrase(answers));
      
    })
  }
  function getCharacterPlanet(agent) {
    runOnCharacter(character => {
      let homeworld = planets.find((it)=> it.id == character.homeworld)
      let answers = [
        `${character.name} was born in ${homeworld.name}`,
        `${character.name} is from ${homeworld.name}`,
        `${character.name} comes from ${homeworld.name}`
      ]
      agent.add(pickupRandomPhrase(answers));
    })
  }


  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Choose character', setCharacter);
  intentMap.set('Character height', getCharacterHeight);
  intentMap.set('Character hair', getCharacterHair);
  intentMap.set('Character planet', getCharacterPlanet);
  agent.handleRequest(intentMap);

  return response;

})

module.exports = dialogflowFulfillment