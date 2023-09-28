using System.Net;
using FujisuBackend.Models.ApplicantInfo;
using FujisuBackend.Utilities;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace FujisuBackend
{
    public class GetApplicantInfo
    {
        private AzureFunctionLogger _logger;

        public GetApplicantInfo(ILoggerFactory loggerFactory)
        {
            ILogger logger = loggerFactory.CreateLogger<GetJobOffer>();
            _logger = new AzureFunctionLogger(logger);
        }

        [Function("GetApplicantInfo")]
        public HttpResponseData Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route="GetApplicantInfo/{token}")] HttpRequestData req,
            string token
        ) {
            _logger.log($"C# HTTP trigger: GetApplicantInfo | {token}");

            if(Data.Data.applicants.ContainsKey(token)) {
                ApplicantInfo applicant = Data.Data.applicants[token];
                return PayloadHelper.getResponse<ApplicantInfo>(_logger, req, applicant);
            }
            else {
                return PayloadHelper.getNotFountError(req);
            }
        }
    }
}
