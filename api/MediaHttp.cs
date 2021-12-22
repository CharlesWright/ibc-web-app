using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace IBC.Media
{
    public static class MediaHttp
    {
        [FunctionName("MediaHttp")]
        public static async Task<IActionResult> GetImage(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = "media/{path}/{name}")] HttpRequest req,
            string path,
            string name,
            ILogger log)
        {            
            var connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");
            var containerName = Environment.GetEnvironmentVariable("CONTAINER_NAME");
            BlobServiceClient serviceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient = serviceClient.GetBlobContainerClient(containerName);
            BlobClient blobClient = containerClient.GetBlobClient($"{path}/{name}");
            BlobProperties properties = await blobClient.GetPropertiesAsync();

            var blobStream = await blobClient.OpenReadAsync().ConfigureAwait(false);
            return new FileStreamResult(blobStream, properties.ContentType);
        }
    }
}
