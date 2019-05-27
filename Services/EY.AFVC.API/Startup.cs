using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EY.AFVC.BusinessComponents.BLBusinessComponents;
using EY.AFVC.BusinessComponents.BLInterfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog;
using NLog.Extensions.Logging;
using NLog.Web;



namespace EY.AFVC.API
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940


        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            var builder1 = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json");
            Configuration = builder1.Build();
            Configuration = configuration;
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();
           

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromSeconds(60000);
                options.Cookie.HttpOnly = true;
            });

         
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddScoped<ICaseManager, CaseManager>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {

           // env.ConfigureNLog("nlog.config");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            app.UseMvc().UseSession();
            app.UseCors("CorsPolicy");

            //add NLog.Web  
          //  app.AddNLogWeb();


            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("API is Started!");
            });
        }
    }
}
