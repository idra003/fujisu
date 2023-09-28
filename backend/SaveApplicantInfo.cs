using System.Net;
using FujisuBackend.Models.ApplicantInfo;
using FujisuBackend.Utilities;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace FujisuBackend
{
    public class SaveApplicantInfo
    {
        private AzureFunctionLogger _logger;

        public SaveApplicantInfo(ILoggerFactory loggerFactory)
        {
            ILogger logger = loggerFactory.CreateLogger<GetJobOffer>();
            _logger = new AzureFunctionLogger(logger);
        }

        [Function("SaveApplicantInfo")]
        public async Task<HttpResponseData> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route="SaveApplicantInfo/{token}")] HttpRequestData req,
            string token
        ) {
            _logger.log($"C# HTTP trigger: SaveApplicantInfo | {token}");

            if(Data.Data.applicants.ContainsKey(token)) {
                ApplicantInfo applicant = await PayloadHelper.getPayload<ApplicantInfo>(req);
                Data.Data.applicants[token] = applicant;
                return PayloadHelper.getResponse<ApplicantInfo>(_logger, req, applicant);
            }
            else {
                return PayloadHelper.getNotFountError(req);
            }
        }
    }
}
