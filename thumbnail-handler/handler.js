'use strict';

const thumbnailService = require('./service/thumbnailService')

module.exports.thumbnail = async (event) => {
  console.log('Evento do SNS recebido com sucesso', JSON.stringify(event))
  await thumbnailService.thumbnail(event)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'Thumbnail gerado com sucesso!', event };
};
