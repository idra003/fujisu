namespace FujisuBackend.Models.JobOffer
{
    public class JobOffer    
    {
        public JobOffer() {
            benefits = new List<string>();
            applicant = new Applicant();
            contract = new Contract();
        }

        public string pageTitle { get; set; }
        public string businessName { get; set; }
        public Applicant applicant { get; set; }
        public string welcomeText { get; set; }
        public Contract  contract { get; set; }
        public List<string> benefits { get; set;}
    }
}