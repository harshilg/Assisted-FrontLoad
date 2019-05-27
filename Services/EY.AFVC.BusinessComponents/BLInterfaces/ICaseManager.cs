using EY.AFVC.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EY.AFVC.BusinessComponents.BLInterfaces
{
    public interface ICaseManager
    {
         Task<List<CaseModel>> GetAllCases();
    }
}
