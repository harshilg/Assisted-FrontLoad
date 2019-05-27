using System;
using System.Configuration;
using MongoDB.Driver;

namespace MongoRepository.Persistence
{
    public class MongoDataContext
    {
        public MongoDataContext()
            : this("MongoDbTests")
        {
        }

        public MongoDataContext(string connectionName)
        {
            try
            {
                var url = "mongodb://localhost:27017/test";   //ConfigurationManager.ConnectionStrings[connectionName].ConnectionString;

                var mongoUrl = new MongoUrl(url);
                IMongoClient client = new MongoClient(mongoUrl);
                MongoDatabase = client.GetDatabase(mongoUrl.DatabaseName);
            }
            catch(Exception ex)
            {

            }
           
        }

        public IMongoDatabase MongoDatabase { get; }
    }
}
