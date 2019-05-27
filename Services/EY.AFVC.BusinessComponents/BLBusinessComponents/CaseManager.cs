using EY.AFVC.BusinessComponents.BLInterfaces;
using EY.AFVC.Data.Entities;
using EY.AFVC.Models;
using MongoRepository.Persistence;
using MongoRepository.Persistence.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace EY.AFVC.BusinessComponents.BLBusinessComponents
{
    public class CaseManager : ICaseManager
    {


        MongoDataContext context;
        CaseRepository caseRepository;
        public CaseManager()
        {

        }


        public async Task<List<CaseModel>> GetAllCases()
        {


            context = new MongoDataContext();
            caseRepository = new CaseRepository(context);
            
            IEnumerable<Case>  cases= await caseRepository.GetAll();
            List<CaseModel> caseModel = cases.Select(x => new CaseModel
            {

                Id = x.Id,
                Engagement = x.Engagement,
                FirstName = x.FirstName,
                LastName = x.LastName,
                MiddleName = x.MiddleName,
                PersonId = x.PersonId,
                Este = x.Este,
                status = x.status,
                TaxModel = x.TaxModel,
                TaxYear = x.TaxYear,
                ExternalDocuments = x.ExternalDocuments,
                OrganizerPDF = x.organizerPDF,
                OrganizerXML = x.organizerXML,
                UploadedDocumentsWithOCR = x.UploadedDocumentsWithOCR,
                UploadedDocumentsWithoutOCR = x.UploadedDocumentsWithoutOCR



            }).ToList();
            return caseModel;      

          
        }

    }
}
