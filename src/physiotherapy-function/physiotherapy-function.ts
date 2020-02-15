import { Context, HttpMethod, HttpRequest, HttpResponse, HttpStatusCode } from 'azure-functions-ts-essentials';
const OBJECT_NAME = 'someObject';

export const TEST_ID = '57ade20771e59f422cc652d9';
export const TEST_REQUEST_BODY: { name: string } = {
  name: 'Azure'
};

/**
 * Routes the request to the default controller using the relevant method.
 */
export function run(context: Context, req: HttpRequest): any {
    let res: HttpResponse;
  
    switch (req.method) {
      case HttpMethod.Get:
        res = { 
          status: HttpStatusCode.OK,
          body:{
            id: "abhishek's id"
          }
          
        }
        break;
      case HttpMethod.Post:
        // res = insertOne(req);
        break;
      case HttpMethod.Patch:
        // res = updateOne(req, id);
        break;
      case HttpMethod.Delete:
        // res = deleteOne(id);
        break;
  
      default:
        res = {
          status: HttpStatusCode.MethodNotAllowed,
          body: {
            error: {
              type: 'not_supported',
              message: `Method ${req.method} not supported.`
            }
          }
        };
    }
  
    context.done(undefined, res);
  }
  