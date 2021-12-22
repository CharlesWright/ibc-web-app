using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Azure.Data.Tables;
using System.Linq;

namespace IBC.Songs
{
    public static class SongsHttp
    {
        [FunctionName("SongHttp")]
        public static IActionResult GetSongById(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "song/{id}")] HttpRequest req,
            string id,
            ILogger log)
        {
           var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");
            var containerName = Environment.GetEnvironmentVariable("CONTAINER_NAME");
            TableServiceClient serviceClient = new TableServiceClient(connectionString);
            TableClient tableClient = serviceClient.GetTableClient("audio");
            var queryResultsLINQ = tableClient.Query<SongEntity>(ent => ent.PartitionKey == "IBC" && ent.RowKey == id);
            var song = queryResultsLINQ.ToArray<SongEntity>().FirstOrDefault();
            
            
            return new OkObjectResult(song);
        }

        [FunctionName("SongsHttp")]
        public static IActionResult GetSongs(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "songs")] HttpRequest req,
            ILogger log)
        {
           var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");
            var containerName = Environment.GetEnvironmentVariable("CONTAINER_NAME");
            TableServiceClient serviceClient = new TableServiceClient(connectionString);
            TableClient tableClient = serviceClient.GetTableClient("audio");
            var queryResultsLINQ = tableClient.Query<SongEntity>(ent => ent.PartitionKey == "IBC");
            var songs = queryResultsLINQ.ToArray<SongEntity>();
                        
            return new OkObjectResult(songs);
        }
    }
}
