using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace EY.AFVC.Models
{
    public class CaseModel
    {

        public ObjectId Id { get; set; }


        public string PersonId { get; set; }


        public string TaxYear { get; set; }


        public string status { get; set; }

        public string Engagement { get; set; }


        public string FirstName { get; set; }

        public string MiddleName { get; set; }


        public string LastName { get; set; }


        public string TaxModel { get; set; }

        public string Este { get; set; }


        public object[] UploadedDocumentsWithOCR { get; set; }


        public object[] UploadedDocumentsWithoutOCR { get; set; }


        public object[] ExternalDocuments { get; set; }


        public ObjectId OrganizerXML { get; set; }



        public ObjectId OrganizerPDF { get; set; }



    }
}
