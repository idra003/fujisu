namespace FujisuBackend.Models.JobOffer
{
    public class Contract
    {
        public ContractType contractType { get; set; }
        public string positionName { get; set; }
        public string structureTreeFullPath { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
        public decimal fteWorkload { get; set; }
        public RemunerationType remunerationType { get; set; }
        public string pageTitle { get; set; }
        public decimal remunerationGrossAmount { get; set; }
        public RemunerationCurrency remunerationCurrency { get; set; }
        public string probationaryPeriodStartDate { get; set; }
        public string probationaryPeriodEndDate { get; set; }
    }
}