using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoRepository;
using System.Collections;
using System.Linq.Expressions;

namespace EY.AFVC.Data.Repository
{

    public class SFVCMongoRepository<T> where T : Entity
    {
        MongoRepository<T> mongoRepo = null;
        public SFVCMongoRepository()
        {
            MongoRepository<T> mongoRepo = new MongoRepository<T>();
        }

        private MongoRepository<T> GetMongoRepository()
        {
            if (this.mongoRepo == null)
            {
                throw new Exception("Unable to initialize mongo repository.");
            }
            else
            {
                return mongoRepo;
            }
        }

        public void Add(List<T> list)
        {
            var repo = GetMongoRepository();
            repo.Add(list);
        }

        public void Add(T entity)
        {
            var repo = GetMongoRepository();
            repo.Add(entity);
        }

        public void Update(List<T> list)
        {
            var repo = GetMongoRepository();
            repo.Update(list);
        }

        public void Update(T entity)
        {
            var repo = GetMongoRepository();
            repo.Update(entity);
        }
    }
}

