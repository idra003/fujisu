namespace FujisuBackend.Models.ApplicantInfo
{
    public class EmergencyContact 
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public RelationshipType? relationshipType { get; set; }
        public string phoneNumber { get; set; }
        public string emailAddress { get; set; }
    }
}