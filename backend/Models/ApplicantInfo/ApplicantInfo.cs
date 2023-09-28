namespace FujisuBackend.Models.ApplicantInfo
{
    public class ApplicantInfo 
    {
        public ApplicantInfo()
        {
            applicant = new Applicant();
            contactDetails = new ContactInfo();
            bankAccount = new BankAccount();
            emergencyContact = new EmergencyContact();
        }
        
        public string pageTitle { get; set; }
        public Applicant applicant { get; set; }
        public ContactInfo contactDetails { get; set; }
        public BankAccount bankAccount { get; set; }
        public EmergencyContact emergencyContact { get; set; }
    }
}
