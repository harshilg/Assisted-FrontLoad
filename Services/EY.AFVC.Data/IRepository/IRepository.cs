using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using EY.AFVC.Data.Entities;


namespace EY.AFVC.Data.IRepository
{
    public interface IRepository<TEntity, in TKey> where TEntity : IEntity<TKey>
    {
        Task<TEntity> GetByIdAsync(TKey id);

        Task<TEntity> SaveAsync(TEntity entity);

        Task DeleteAsync(TKey id);

        Task<ICollection<TEntity>> FindAllAsync(Expression<Func<TEntity, bool>> predicate);
    }
}
