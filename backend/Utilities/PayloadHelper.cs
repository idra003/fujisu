using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using FujisuBackend.Models;
using Microsoft.Azure.Functions.Worker.Http;

namespace FujisuBackend.Utilities
{
    public class PayloadHelper {
        /// <summary>
        /// Returns the payload of the request as the specified object
        /// </summary>
        /// <param name="req">The request in question</param>
        /// <typeparam name="T">The payload type</typeparam>
        /// <returns>The payload fround in the request or the default payload</returns>
        public static async Task<T> getPayload<T>(HttpRequestData req) 
        {
            //gets the body content
            string content = await new StreamReader(req.Body).ReadToEndAsync();
            content = content.Trim();

            JsonSerializerOptions options = new (){
                Converters ={
                    new JsonStringEnumConverter()
                }
            };

            T ret;
            if(!string.IsNullOrEmpty(content)) {
                ret = JsonSerializer.Deserialize<T>(content, options);
            } else {
                ret = Activator.CreateInstance<T>();
            }

            return ret;
        }
        /// <summary>
        /// Builds the response object to be returned by the function
        /// </summary>
        /// <param name="logger">The logger of the function</param>
        /// <param name="req">The request of the function</param>
        /// <param name="obj">The object to be returned</param>
        /// <typeparam name="T">The return object type</typeparam>
        /// <returns>A list of errors or the object parsted into JSON</returns>
        public static HttpResponseData getResponse<T>(AzureFunctionLogger logger, HttpRequestData req, T obj) {
            
            //builds the the response
            HttpResponseData response;
            if(logger.isInError) {
                response = req.CreateResponse(HttpStatusCode.InternalServerError);
                Errors errObj = new Errors() {
                    messages = logger.getErrors()
                };

                response.WriteString(System.Text.Json.JsonSerializer.Serialize<Errors>(errObj));
            }
            else {
                JsonSerializerOptions options = new JsonSerializerOptions{
                    Converters ={
                        new JsonStringEnumConverter()
                    }
                };

                response = req.CreateResponse(HttpStatusCode.OK);
                response.Headers.Add("Content-Type", "application/json; charset=utf-8");
                response.WriteString(System.Text.Json.JsonSerializer.Serialize<T>(obj, options));
            }

            return response;
        }

        public static HttpResponseData getNotFountError(HttpRequestData req)
        {
            HttpResponseData response = req.CreateResponse(HttpStatusCode.Forbidden);
            response.Headers.Add("Content-Type", "application/json; charset=utf-8");
            response.WriteString("{}");
            return response;
        }
    }
}