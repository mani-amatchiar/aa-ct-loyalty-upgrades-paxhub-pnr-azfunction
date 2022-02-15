import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    context.log('HTTP trigger function processed a request.');  
    context.res.status = 200;
    context.bindings.outputSbTopic = req.body;

};

export default httpTrigger;