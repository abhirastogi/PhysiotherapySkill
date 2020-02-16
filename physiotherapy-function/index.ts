import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { RequestEnvelope, Response, ResponseEnvelope } from "ask-sdk-model";
import { SkillBuilders, RequestHandler, HandlerInput } from "ask-sdk";
import { LaunchRequestHandler } from "./Handlers/LaunchRequestHandler";

const physiotherapy_function: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Recieved a request');
    const name = (req.query.name || (req.body && req.body.name));

    const request = req.body as RequestEnvelope

    const skill = SkillBuilders.custom()
                    .addRequestHandlers(
                        new LaunchRequestHandler
                    )
                    .create();
    
    return await skill.invoke(request, context)
        .then((response) => {
            context.log("Successful response");
            context.res = {
                body: response
            }
        },
        (error) => {
            context.res = {
                status : 400,
                body : error
            }
        })
};

export default physiotherapy_function;
