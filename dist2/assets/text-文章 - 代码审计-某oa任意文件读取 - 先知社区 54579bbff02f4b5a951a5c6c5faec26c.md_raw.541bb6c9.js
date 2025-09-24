const n=`# \u6587\u7AE0 - \u4EE3\u7801\u5BA1\u8BA1-\u67D0oa\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:59 AM
URL: https://xz.aliyun.com/news/15639
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## 0x01 \u73AF\u5883\u51C6\u5907

\u62FF\u5230\u6E90\u7801\u4E4B\u540E\u7B2C\u4E00\u6B65\u770B\u662F\u6E90\u7801\u662F\u5426\u5168\u9762\uFF0C\u662F\u5426\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\uFF0C\u5982\u679C\u53EF\u4EE5\u642D\u5EFA\u8D77\u6765\u5C31\u53EF\u4EE5\u7528\u65AD\u70B9\u8C03\u8BD5\u7684\u65B9\u6CD5\u53BB\u8C03\u8BD5\u4EE3\u7801\uFF0C\u5982\u679C\u4E0D\u80FD\u5C31\u5F97\u624B\u52A8\u53BB\u628A\u4E00\u4E9B\u65B9\u6CD5\u62BD\u8C61\u51FA\u6765\uFF0C\u8FDB\u884C\u8C03\u8BD5\uFF0C\u6211\u8FD9\u6B21\u62FF\u5230\u7684\u6E90\u7801\u4E0D\u591F\u5168\u9762\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u624B\u52A8\u53BB\u8C03\u4E86\u3002\u901A\u5E38\u5BA1\u8BA1java\u4EE3\u7801\u65F6\u4E2A\u4EBA\u6BD4\u8F83\u559C\u6B22\u7528vscode\u9605\u8BFB\u4EE3\u7801+idea\u53CD\u7F16\u8BD1\u4EE3\u7801\u3002

## 0x02 \u4EE3\u7801\u5BA1\u8BA1

\u6F0F\u6D1E\u901A\u5E38\u5206\u4E3A\u524D\u53F0\u6F0F\u6D1E\u548C\u540E\u53F0\u6F0F\u6D1E\uFF0C\u524D\u53F0\u6F0F\u6D1E\u662F\u6307\u65E0\u9700\u8FDB\u884C\u767B\u5165\u8BA4\u8BC1\uFF0C\u76F4\u63A5\u53EF\u4EE5\u8BBF\u95EE\u5230\u67D0\u8DEF\u7531\uFF0C\u800C\u8BE5\u8DEF\u7531\u5B58\u5728\u6F0F\u6D1E\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u5229\u7528\u3002\u540E\u53F0\u6F0F\u6D1E\u662F\u9700\u8981\u901A\u8FC7\u767B\u5165\u8BA4\u8BC1\uFF0C\u624D\u53EF\u4EE5\u8BBF\u95EE\u5230\u67D0\u8DEF\u7531\u3002\u5728\u4EE3\u7801\u5BA1\u8BA1\u65F6\u901A\u5E38\u4F18\u5148\u5BA1\u8BA1\u524D\u53F0\u6F0F\u6D1E\uFF0C\u56E0\u4E3A\u5728\u653B\u9632\u9879\u76EE\u4E2D\u6211\u4EEC\u9047\u89C1\u67D0\u4E2A\u7CFB\u7EDF\u65F6\u4E0D\u4E00\u5B9A\u4F1A\u6709\u5176\u8D26\u53F7\u5BC6\u7801\u3002

\u8BE5\u6E90\u7801\u4F7F\u7528tomcat\u90E8\u7F72\uFF0C\u62FF\u5230\u6E90\u7801\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u53BB\u770B\u5176\u76EE\u5F55\u4E0B\u7684WEB-INF/web.xml\u6587\u4EF6\uFF0C

\u5982\u679C\u8BBF\u95EE\u7684\u662F_.jsp\u6216\u8005_.do\u8DEF\u7531\u5C31\u4F1A\u8DF3\u5230CheckFilter\u53BB\u3002

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1730438748993-321507af-e6b7-40f0-941e-19933595cfca.png)

\u6211\u4EEC\u8DF3\u8F6C\u5230CheckFilter\u53BB\u67E5\u770B\u4EE3\u7801

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1730438974644-f42bb553-0309-4290-8b66-72d99d989637.png)

\u91CD\u70B9\u5173\u6CE8\u8FD9\u4E2Aif\u5224\u65AD\u8BED\u53E5\uFF0C

\`\`\`
if (servletPath != null && session != null && servletPath.indexOf("getUserAvatar") < 0 && session.getAttribute("userId") == null && servletPath.indexOf("login.jsp") == -1 && servletPath.indexOf("CheckUser.") == -1 && servletPath.indexOf("HntdxyCheckUser.") == -1 && servletPath.indexOf("lhydCheckUser.") == -1 && servletPath.indexOf("ZclCheckUser.") == -1 && servletPath.indexOf("/zcl/goPageUrl.") == -1 && servletPath.indexOf("wap.jsp") == -1 && servletPath.indexOf("wap.do") == -1 && servletPath.indexOf("RTXLogin.jsp") == -1 && servletPath.indexOf("saiLogin.jsp") == -1 && servletPath.indexOf("saitong.jsp") == -1 && servletPath.indexOf("jumperrorMsg.jsp") == -1 && servletPath.indexOf("/wap2/errorShow.jsp") == -1 && servletPath.indexOf("dl.jsp") == -1 && servletPath.indexOf("login_gzw.jsp") == -1 && servletPath.indexOf("/lhyd/index.jsp") == -1 && servletPath.indexOf("/hntdxy/test.jsp") == -1 && servletPath.indexOf("hntdCustomDesktopAction.") == -1 && servletPath.indexOf("recallPassword.jsp") == -1 && servletPath.indexOf("recallPasswordAjax.jsp") == -1) {
            res.sendRedirect("/jsoa/login.jsp");
        }
\`\`\`

\u4ED6\u4F7F\u7528\u7684\u662F&&\u7B26\u53F7\uFF0C\u610F\u601D\u5C31\u662F\u53EA\u6709\u540C\u65F6\u6EE1\u8DB3\u4E0B\u5217\u6761\u4EF6\uFF0C\u624D\u4F1A\u8DF3\u8F6C\u5230/jsoa/login.jsp\uFF0C\u5426\u5219\u5C31\u4F1A\u8FDB\u5165else\u903B\u8F91\uFF0C\u8FD9\u662F\u5426\u5C31\u610F\u5473\u7740\u91CC\u9762\u5199\u7684\u90A3\u4E9Bjsp\u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5462\uFF1F\u8FD9\u65F6\u5019\u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5224\u65AD:

1\u3001\u8DDF\u8FDB\u4EE3\u7801\uFF0C\u770B\u4E00\u4E0B\u4E0B\u9762\u7684\u903B\u8F91\u662F\u5426\u8FC7\u6EE4\u4E86\u8FD9\u4E9B\u6587\u4EF6\u3002

2\u3001\u53BB\u627E\u5230\u4E00\u4E2A\u642D\u5EFA\u597D\u7684\u8D44\u4EA7\uFF08fofa\uFF09\uFF0C\u53BB\u5C1D\u8BD5\u8BBF\u95EE\u8BE5\u8DEF\u7531\uFF0C\u770B\u770B\u662F\u5426\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u3002

\u65B9\u6CD5\u4E8C\u66F4\u52A0\u4FBF\u6377\uFF0C\u6211\u53BB\u5C1D\u8BD5\u627E\u4E86\u4E00\u4E0B\u8D44\u4EA7

\u53BB\u4EFB\u610F\u8BBF\u95EE\u4E86\u51E0\u4E2A\u8DEF\u7531\uFF0C\u53D1\u73B0\u5176\u8FD4\u56DE\u72B6\u6001\u7801\u662F200\uFF0C\u90A3\u5C31\u8BC1\u660E\u662F\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E9B\u8DEF\u7531\u7684\u3002\u5C31\u53BB\u4E00\u4E2A\u4E00\u4E2A\u8DEF\u7531\u7684\u53BB\u770B\u4EE3\u7801\u3002

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1730440087807-582deae9-603e-4f2d-b258-559ccbdcbb01.png)

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1730440124830-f42bbbb4-802c-427a-901e-e73645975341.png)

\u4E00\u822Cjava\u800C\u4E14\u4F7F\u7528jsp\u7684\u7AD9\uFF0C\u6700\u5E38\u89C1\u7684\u5728\u62A4\u7F51\u4E2D\u6709\u5B9E\u6218\u610F\u4E49\u7684\u5C31\u662F\u4EFB\u610F\u6587\u4EF6\u4E0A\u4F20\uFF0C\u4F20\u4E00\u4E2Ajsp\u7684\u6728\u9A6C\u5C31\u53EF\u4EE5\u76F4\u63A5getshell\uFF0C\u800Cjava\u4E2D\u6709\u4E00\u4E9B\u5E38\u89C1\u8BFB\u5199\u6587\u4EF6\u7684\u65B9\u6CD5\uFF0C\`FileReader\u3001FileWriter\u3001BufferedReader\u3001 BufferedWriter\u3001Files.write\u3001FileInputStream\u3001FileOutputStream\`\u3002\u53EF\u4EE5\u53BB\u5168\u5C40\u641C\u7D22\u8FD9\u4E9B\u5173\u952E\u5B57\u53BB\u627E\u3002

\u8FD9\u91CC\u6211\u5B9A\u4F4D\u5230\u4E86\u4E00\u4E2Adl.jsp\u65B9\u6CD5

<%
try{
String _queryString=request.getQueryString();
String queryString="&"+com.js.util.util.BASE64.BASE64DecoderNoBR(_queryString);
String temp;
int index=0;
String informationId="",path="",FileName="",name="",moduleCode="";
//\u67E5\u627EinformationId
index=queryString.indexOf("&informationId");
if(index>=0){
temp=queryString.substring(index+15);
if(temp.indexOf("&")>=0){
informationId=temp.substring(0,temp.indexOf("&"));
}else{
informationId=temp;
}
}
//\u67E5\u627Epath
index=queryString.indexOf("&path");
if(index>=0){
temp=queryString.substring(index+6);
if(temp.indexOf("&")>=0){
path=temp.substring(0,temp.indexOf("&"));
}else{
path=temp;
}
}
//\u67E5\u627EFileName
index=queryString.indexOf("&FileName");
if(index>=0){
temp=queryString.substring(index+10);
if(temp.indexOf("&")>=0){
FileName=temp.substring(0,temp.indexOf("&"));
}else{
FileName=temp;
}
if(!FileName.substring(4,5).equals("_"))
{
path="0000/"+path;
}else
{
path=FileName.substring(0,4)+"/"+path;
}
}
//\u67E5\u627Ename
index=queryString.indexOf("&name");
if(index>=0){
temp=queryString.substring(index+6);
if(temp.indexOf("&")>=0){
name=temp.substring(0,temp.indexOf("&"));
}else{
name=temp;
}
//System.out.println("name="+name);
}
//\u67E5\u627EmoduleCode
index=queryString.indexOf("&moduleCode");
if(index>=0){
temp=queryString.substring(index+12);
if(temp.indexOf("&")>=0){
moduleCode=temp.substring(0,temp.indexOf("&"));
}else{
moduleCode=temp;
}
}
//informationId,path,FileName,name;
// \u5F97\u5230\u6587\u4EF6\u540D\u5B57\u548C\u8DEF\u5F84
//String informationId=request.getParameter("informationId");
String filepath="";
HttpServletRequest HSR=(HttpServletRequest)pageContext.getRequest();
HttpSession session1=HSR.getSession(false);
if(informationId!=null && !"null".equals(informationId) && !"".equals(informationId)){
try{
//\u8BB0\u5F55\u77E5\u8BC6\u7BA1\u7406\u6587\u6863\u9605\u8BFB\u6B21\u6570\u5E76\u8BB0\u5F55\u67E5\u770B\u4EBA
com.js.oa.info.infomanager.service.InformationBD info=new com.js.oa.info.infomanager.service.InformationBD();
String userId=session.getAttribute("userId").toString();
String userName=session.getAttribute("userName").toString();
String orgId=session.getAttribute("orgId").toString();
String orgName=session.getAttribute("orgName").toString();
String orgIdString=session.getAttribute("orgIdString").toString();
info.recordReader(userId,userName,orgId,orgName,orgIdString,informationId);
}catch(Exception ex){
ex.printStackTrace();
}
}
//\u5224\u65AD\u662F\u5426\u4F7F\u7528\u4E86\u6587\u4EF6\u670D\u52A1\u5668
if(com.js.util.config.SystemCommon.getUseClusterServer()==1){
response.sendRedirect(com.js.util.config.SystemCommon.getClusterServerUrl()+
"/download_f.jsp?"+_queryString);
}else{
//\u76F4\u63A5\u4E0B\u8F7D
//String path=request.getParameter("path");
while(path.indexOf("../")>=0){
path = path.replace("../","");
}
filepath=HSR.getRealPath("/upload/")+"/"+path+"/";
filepath = filepath.replaceAll("\\\\\\\\", "/");
if("".equals(moduleCode) || moduleCode ==null)
{
if(filepath.contains("cooperate"))
{
moduleCode="co_attach_waitsend";
}
if(filepath.contains("workflow"))
{
moduleCode="oa_workflow_waitsend";
}
if(filepath.contains("customform"))
{
moduleCode="oa_workflow_complete";
}
if(filepath.contains("archives"))
{
moduleCode="oa_archives_fujian";
}
}
String nameShow=name;
name=new String(name.getBytes("GBK"),"iso-8859-1");
java.io.File file = new java.io.File(filepath + FileName);
if(file.exists()){
response.setContentType("csv");
response.setHeader("Content-Disposition","attachment; filename=\\"" + name + "\\"");
java.io.FileInputStream fis=new java.io.FileInputStream(file);
java.io.BufferedInputStream buff=new java.io.BufferedInputStream(fis);
byte [] b=new byte[1024];//\u76F8\u5F53\u4E8E\u6211\u4EEC\u7684\u7F13\u5B58
long k=0;//\u8BE5\u503C\u7528\u4E8E\u8BA1\u7B97\u5F53\u524D\u5B9E\u9645\u4E0B\u8F7D\u4E86\u591A\u5C11\u5B57\u8282
//\u4ECEresponse\u5BF9\u8C61\u4E2D\u5F97\u5230\u8F93\u51FA\u6D41,\u51C6\u5907\u4E0B\u8F7D
java.io.OutputStream myout=response.getOutputStream();
//\u5F00\u59CB\u5FAA\u73AF\u4E0B\u8F7D
while(k<file.length()){
int j=buff.read(b,0,1024);
k+=j;
//\u5C06b\u4E2D\u7684\u6570\u636E\u5199\u5230\u5BA2\u6237\u7AEF\u7684\u5185\u5B58
myout.write(b,0,j);
}
//\u5C06\u5199\u5165\u5230\u5BA2\u6237\u7AEF\u7684\u5185\u5B58\u7684\u6570\u636E,\u5237\u65B0\u5230\u78C1\u76D8
myout.flush();
buff.close();
fis.close();
myout.close();
out.clear();
out = pageContext.pushBody();
}else{
response.setContentType("text/html; charset=GBK");
%>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<SCRIPT LANGUAGE="JavaScript">
alert("File Not Found!");
history.back();
<\/SCRIPT>
</head>
<body>
</body>
</html>
<%
}
}//end of \u76F4\u63A5\u4E0B\u8F7D
}catch(Exception ex){
ex.printStackTrace();
response.setContentType("text/html; charset=GBK");
%>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<SCRIPT LANGUAGE="JavaScript">
alert("File Not Found!");
history.back();
<\/SCRIPT>
</head>
<body>
</body>
</html>
<%
}%>

\u5148\u53BB\u627Esink\u70B9\uFF0C\u5176\u5B58\u5728fileInputStream\u65B9\u6CD5\u53BB\u8BFB\u53D6\u4E00\u4E2A\u6587\u4EF6\u5E76\u8F93\u51FA\u5230response.outputstream\u4E2D

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1730440857787-03a6c143-80c7-48c7-8795-cffc3804b640.png)

\u5C31\u53BB\u4E0A\u524D\u770Bfilepath\u548Cfilename\u662F\u600E\u4E48\u83B7\u53D6\u5230\u7684

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1731222891608-fc7d0acb-e71a-423b-9a70-f4264dcae2e7.png)

\u9996\u5148\u662F\u83B7\u53D6\u4E00\u4E2AQueryString\u7136\u540E\u4F7F\u7528base64\u89E3\u7801\uFF0C\u8FD9\u6837\u7684\u5199\u6CD5\u5176\u5B9E\u5BF9\u653B\u51FB\u8005\u5F88\u6709\u5229\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u53BB\u7ED5\u8FC7\u4E00\u4E9Bwaf

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1731223038588-8906285f-ca02-4b89-b82d-d1e4964203ef.png)

\u63A5\u7740\u5C31\u53BB\u8BFB\u53D6\u8BFB\u53D6path\u548Cfilename\u7684\u5185\u5BB9\u8FDB\u884C\u622A\u53D6

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1731223542712-c4d5a170-280e-41fe-b6d9-dc2888abe5bf.png)

\u63A5\u7740\u5F80\u4E0B\u770B\uFF0C\u5BF9path\u5904\u8FDB\u884C\u4E86\u66FF\u6362\uFF0C\u628A../\u66FF\u6362\u4E3A\u4E86\u7A7A\uFF0C\u4F46\u662F\u5BF9filename\u5374\u6CA1\u8FDB\u884C\u5904\u7406\u3002\u800C\u6700\u540Efilepath\u548CFileName\u662F\u76F4\u63A5\u62FC\u63A5\u7684\uFF0C\u4E5F\u5C31\u9020\u6210\u4E86\u8DEF\u5F84\u7A7F\u8D8A\u53EF\u4EE5\u8BFB\u53D6\u4EFB\u4F55\u6587\u4EF6\uFF0C\u6700\u540E\u6784\u9020payload\uFF0C\u5373\u53EF\u8FDB\u884C\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6

![](https://xzfile.aliyuncs.com/media/upload/picture/20241111112003-d7c93d78-9fdb-1.png)

&FileName=../../../dl.jsp&path=/aaa
base64\u52A0\u5BC6
JkZpbGVOYW1lPS4uLy4uLy4uL2RsLmpzcCZwYXRoPS9hYWE=

![](https://cdn.nlark.com/yuque/0/2024/png/29650981/1731223767097-aa2dba46-37ce-4612-8017-78570e331985.png)`;export{n as _};
