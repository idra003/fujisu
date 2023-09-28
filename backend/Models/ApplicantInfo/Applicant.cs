namespace FujisuBackend.Models.ApplicantInfo
{
    public class Applicant
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string nationalIdentityNumber { get; set; }
        public string dateOfBirth { get; set; }
        public Gender? gender { get; set; }
    }
}