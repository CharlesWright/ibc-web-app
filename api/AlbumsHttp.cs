using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Azure.Data.Tables;
using System.Linq;

namespace IBC.Albums
{
    public static class AlbumsHttp
    {
        [FunctionName("AlbumsHttp")]
        public static IActionResult GetAlbums(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "albums")] HttpRequest req,
            ILogger log)
        {
            var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");
            var containerName = Environment.GetEnvironmentVariable("CONTAINER_NAME");
            TableServiceClient serviceClient = new TableServiceClient(connectionString);
            TableClient tableClient = serviceClient.GetTableClient("albums");
            var queryResultsLINQ = tableClient.Query<AlbumEntity>(ent => ent.PartitionKey == "IBC");
            var albums = queryResultsLINQ.ToArray<AlbumEntity>();
            
            return new OkObjectResult(albums);
        }
    }
}
