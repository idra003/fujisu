# Fujisu Trial SPA

## ENV
* `REACT_APP_GET_JOB_ENDPOINT` - The get job offer endpoint (note `{0}` will be replaced by the security token)
* `REACT_APP_GET_APPLICANT_ENDPOINT` - The get applicant info endpoint (note `{0}` will be replaced by the security token)
* `REACT_APP_SAVE_APPLICANT_ENDPOINT` - The save the applicant info endpoint (note `{0}` will be replaced by the security token)

### Example
``` 
REACT_APP_GET_JOB_ENDPOINT=http://localhost:7071/api/GetJobOffer/{0}
REACT_APP_GET_APPLICANT_ENDPOINT=http://localhost:7071/api/GetApplicantInfo/{0}
REACT_APP_SAVE_APPLICANT_ENDPOINT=http://localhost:7071/api/SaveApplicantInfo/{0}
```