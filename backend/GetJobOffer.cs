
using System.Net;
using FujisuBackend.Models.JobOffer;
using FujisuBackend.Utilities;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace FujisuBackend
{
    public class GetJobOffer
    {
        private AzureFunctionLogger _logger;

        public GetJobOffer(ILoggerFactory loggerFactory)
        {
            ILogger logger = loggerFactory.CreateLogger<GetJobOffer>();
            _logger = new AzureFunctionLogger(logger);
        }

        [Function("GetJobOffer")]
        public HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route="GetJobOffer/{token}")] HttpRequestData req,
            string token
        ) {
            _logger.log($"C# HTTP trigger: GetJobOffer | {token}");
            
            if(Data.Data.offers.ContainsKey(token)) {
                JobOffer offer = Data.Data.offers[token];
                return PayloadHelper.getResponse<JobOffer>(_logger, req, offer);
            }
            else {
                return PayloadHelper.getNotFountError(req);
            }
        }
    }
}
