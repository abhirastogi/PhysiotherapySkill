import { Response } from "ask-sdk-model";
import { RequestHandler, HandlerInput } from "ask-sdk";

export class LaunchRequestHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'LaunchRequest'
    }
    handle(handlerInput : HandlerInput): Response {
      const responseBuilder = handlerInput.responseBuilder
      return responseBuilder.speak("Welcome to abhishek's Skill")
        .getResponse();
    }
  }