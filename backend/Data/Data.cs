using FujisuBackend.Models.ApplicantInfo;
using FujisuBackend.Models.JobOffer;

namespace FujisuBackend.Data
{
    public class Data 
    {
        static Data() {
            string token = "c3b10e23882d404cb4a56ff5eb1af7cc6c08da0f3053445ba53f06e63de6caa";

            JobOffer offer = new () {
                pageTitle = "Tööpakkumine",
                businessName = "Marienthali Pruulikoda OÜ",
                applicant = {
                    firstName = "Mari",
                    lastName = "Maasikas"
                },
                welcomeText = "Ettevõte Marienthali Pruulikoda OÜ on Teile teinud tööpakkumise. Pakkumise tingimustega saate tutvuda allpool. Tööpakkumise vastuvõtmiseks vajutage vormi lõpus olevat nuppu 'Kinnita tööpakkumine'. Peale seda suunatakse teid uue töötaja isikuandmete ankeeti täitma",
                contract = {
                    contractType = ContractType.Employment,
                    positionName = "Turundusjuht",
                    structureTreeFullPath = "Marienthali Pruulikoda OÜ / Müük / Turundu",
                    startDate = "2023-05-29T00:00:00",
                    endDate = null,
                    fteWorkload = 1m,
                    remunerationType = RemunerationType.MothlyWage,
                    remunerationGrossAmount = 2750m,
                    remunerationCurrency = RemunerationCurrency.EUR,
                    probationaryPeriodStartDate = "2023-05-29T00:00:00",
                    probationaryPeriodEndDate = "2023-09-28T00:00:00"
                }
            };
            offer.benefits.AddRange(new string[]{
                "7 kalendripäeva lisapuhkust aastas",
                "Kaugtöö võimalus",
                "Sporditoetus 33 eurot kuus",
                "Confido terviselahenduss",
                "Iga-aastased kogupereüritused ja koosviibimised",
                "Isikliku mobiiltelefoni kasutamise kompensatsioon"
            });

            offers.Add(token, offer);

            ApplicantInfo applicant = new () {
                pageTitle = "Uue töötaja isikuandmete ankeet",
                applicant = {
                    firstName = "Mari",
                    lastName = "Maasikas",
                    nationalIdentityNumber = null,
                    dateOfBirth = null,
                    gender = null
                },
                contactDetails = {
                    postalAddress = null,
                    phoneNumber = null,
                    emailAddress = "mari.maasikas@supermailer.com"
                },
                bankAccount = {
                    recipientName = "Mari Maasikas",
                    iban = null
                },
                emergencyContact = {
                    firstName = null,
                    lastName = null,
                    relationshipType = null,
                    phoneNumber = null,
                    emailAddress = null
                }
            };

            applicants.Add(token, applicant);
        }

        public static List<string> tokens = new List<string>();
        public static Dictionary<string, JobOffer> offers = new ();
        public static Dictionary<string, ApplicantInfo> applicants = new ();
    }
}