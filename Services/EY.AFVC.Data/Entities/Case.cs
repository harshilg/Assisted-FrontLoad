using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EY.AFVC.Data.Entities
{
    public class Case : IEntity
    {

        [BsonElement("_id")]
        public ObjectId Id { get; set; }


        [BsonElement("personId")]
        public string PersonId { get; set; }

        [BsonElement("taxYear")]
        public string TaxYear { get; set; }


        [BsonElement("status")]
        public string status { get; set; }

        [BsonElement("engagement")]
        public string Engagement { get; set; }

        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("middleName")]
        public string MiddleName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("taxModel")]
        public string TaxModel { get; set; }

        [BsonElement("EStE")]
        public string Este { get; set; }

        [BsonElement("uploadedDocumentsWithOCR")]
        public object[] UploadedDocumentsWithOCR { get; set; }

        [BsonElement("uploadedDocumentsWithoutOCR")]
        public object[] UploadedDocumentsWithoutOCR { get; set; }

        [BsonElement("externalDocuments")]
        public object[] ExternalDocuments { get; set; }

        [BsonElement("organizerXML")]
        public ObjectId organizerXML { get; set; }


        [BsonElement("organizerPDF")]
        public ObjectId organizerPDF { get; set; }

        string IEntity<string>.Id { get => throw new System.NotImplementedException(); set => throw new System.NotImplementedException(); }
    }
}
