using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EY.AFVC.BusinessComponents.BLInterfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EY.AFVC.API.Controllers
{
    [Route("api/[controller]/[action]")]
    public class CaseController : Controller
    {

        private readonly ICaseManager _caseManager;
        public CaseController(ICaseManager caseManager)
        {
            _caseManager = caseManager;
        }
        public async Task<JsonResult> GetCases()
        {

            return Json(_caseManager.GetAllCases().Result);
        }
    }
}