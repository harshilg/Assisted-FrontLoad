using System;
using EY.AFVC.Data.Entities;
using MongoDB.Driver;


namespace MongoRepository.Persistence.Repositories
{
    public class CaseRepository : BaseMongoRepository<Case>
    {
        private const string CaseCollectionName = "cases";

        private readonly MongoDataContext _dataContext;

        public CaseRepository(MongoDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        protected override IMongoCollection<Case> Collection => _dataContext.MongoDatabase.GetCollection<Case>(CaseCollectionName);
    }
}
