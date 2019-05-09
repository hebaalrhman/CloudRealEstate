using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CloudRealEstate.Startup))]
namespace CloudRealEstate
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
