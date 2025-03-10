https://github.com/owl234/Awesome-SRC-experience

# **✨ Awesome-SRC-experience**

国内外一些好用的SRC漏洞挖掘经验、知识、思路、工具分享。  
每篇文章均配备渗透测试流程图，以方便快速查阅，选择性学习。  
简单将渗透测试流程抽象为以下模块，方便基础知识和工具分类：  
![][image1]  
企业为防止对系统的潜在危害如：数据泄露、系统稳定性等，所以SRC漏洞挖掘通常明令禁止后渗透测试。

## **❤️ 工具**

根据上述流程图功能，在实际SRC挖掘过程中选取好用的工具，供大家针对性学习。（根据实际使用情况不间断更新\~）

## **⭐ 基础知识**

一些SRC漏洞挖掘和渗透测试需要的基础知识。

# **一些好用的SRC漏洞挖掘经验**

按照漏洞类型或漏洞产生点，将漏洞测试文章分类。  
每篇文章都配备漏洞测试流程图，方便大家快速浏览学习。

# **❤️ Fundamentals**

SRC漏洞挖掘及渗透测试需要的一些基础知识。

* The Web Application Hacker's Handbook 2：Web应用黑客手册（第二版）英文原版pdf以及翻译版本。（已经转移至新仓库 [The Web Application Hacker's Handbook 2](https://github.com/owl234/The-Web-Application-Hacker-s-Handbook-2/tree/main)）  
* [漏洞和有效载荷介绍.md](https://github.com/owl234/Awesome-SRC-experience/blob/main/Fundamentals/%E6%BC%8F%E6%B4%9E%E5%92%8C%E6%9C%89%E6%95%88%E8%BD%BD%E8%8D%B7%E4%BB%8B%E7%BB%8D.md): 主要介绍了WEB漏洞和有效载荷的基础知识以及渗透测试中的案例。  
* [OWASP Top 10 漏洞详解](https://github.com/owl234/Awesome-SRC-experience/blob/main/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/OWASP%20Top%2010%20%E6%BC%8F%E6%B4%9E%E8%AF%A6%E8%A7%A3.md)：2023年 OWASP Top 10 漏洞案例及解决方法。

## **❤️ Tools**

为了给庞杂的渗透测试工具分类，我们简单将渗透测试流程抽象为以下几个模块：  
![][image2]  
每个工具会根据其优势，正确匹配到各个模块中，供大家针对性学习。

### **⭐ 端口扫描**

* [Naabu](https://github.com/projectdiscovery/naabu) ：一款用Go语言编写的端口扫描工具，能快速枚举主机上的有效端口。这是一个非常简单的工具，可对主机或主机列表执行快速SYN/CONNECT/UDP扫描并列出所有返回响应的端口。

### **👓 指纹识别**

* [httpx](https://github.com/projectdiscovery/httpx) ：一款快速且多功能的HTTP工具包，支持使用retryablehttp库运行多个探针。旨在即使在使用多线程的情况下也能保持结果可靠性。可用于技术栈和Web服务器探测。

### **💻 漏洞利用**

* [Metasploit-framework](https://github.com/rapid7/metasploit-framework) : Metasploit-framework 是一组拥有信息收集、扫描、漏洞利用、漏洞挖掘、后渗透等的开源渗透测试框架，常用于漏洞利用和后渗透测试。

### **🔍 ​漏扫工具**

* [Nuclei](https://github.com/projectdiscovery/nuclei)：Nuclei 用于根据模板向目标发送请求，从而实现零误报，并可在大量主机上提供快速扫描。Nuclei 提供多种协议的扫描，包括 TCP、DNS、HTTP、SSL、文件、Whois、Websocket、Headless、代码等。凭借强大而灵活的模板，Nuclei 可用于模拟各种安全检查。  
* [afrog](https://github.com/zan8in/afrog)：afrog 是一款高性能漏洞扫描工具，速度快、稳定性高，支持自定义 PoC，内置 CVE、CNVD、默认密码、信息泄露、指纹识别、未授权访问、任意文件读取、命令执行等多种漏洞类型，帮助网络安全人员快速验证和修复漏洞，提升安全防御能力。

### **💫 带外测试平台**

* [Interactsh](https://app.interactsh.com/)：Interactsh 是一种用于带外数据提取的开源解决方案，它是一种用于检测导致外部交互的错误（例如盲 SQLi、盲 CMDi、SSRF 等）的工具。  
* [EYES](https://github.com/lijiejie/eyes.sh)：[eyes.sh](http://eyes.sh/)是用来辅助安全测试和漏扫工具的DNS Log / HTTP Log检测工具，基于 [BugScan DNSLog](https://github.com/bugscanteam/dnslog/) 优化。

### **⛵自动化漏洞发现**

* [Netlas侦察自动化+Nuclei自动扫描](https://github.com/owl234/Awesome-SRC-experience/blob/main/%E5%B7%A5%E5%85%B7/%E8%87%AA%E5%8A%A8%E5%8C%96%E6%BC%8F%E6%B4%9E%E5%8F%91%E7%8E%B0/Netlas%E4%BE%A6%E5%AF%9F%E8%87%AA%E5%8A%A8%E5%8C%96+Nuclei%E8%87%AA%E5%8A%A8%E6%89%AB%E6%8F%8F.md)：Netlas是一个新工具，提供多种服务，如IP WHOIS查询、DNS查询、攻击面发现、证书搜索、响应搜索等。

# **挖洞神器：Afrog**

一款用于漏洞赏金、渗透测试和红队演练的安全工具。

## **afrog 是什么？**

afrog是一款高性能漏洞扫描器，速度快且稳定。它支持用于自定义PoC（Proof of Concept，概念验证），并具有多种内置类型，如CVE（Common Vulnerbilities and Exposures）、CNVD（中国国家漏洞库）、默认密码、信息泄露、指纹识别、未授权访问、任意文件读取和命令执行。通过afrog，网络安全专业人员可以快速验证和修复漏洞，从而帮助其安全防御能力。

## **特征**

* 开源  
* 快速、稳定，误报率低  
* 详细的HTML漏洞报告  
* 可自定义且稳定更新的PoC  
* 活跃的社区交流群

## **运行afrog**

默认情况下，afrog会扫描所有内置的PoC。如果发现任何漏洞，它会自动生成一个HTML报告，并以扫描日期作为文件名。  
示例：  
afrog \-t https://example.com  
运行afrog时出现警告  
如果你看到以下错误信息：  
\[ERR\] ceye reverse service not set: /home/afrog/.config/afrog/afrog-config.yaml  
这意味着你需要修改配置文件。  
要执行自定义Poc目录，可以使用以下命令：  
afrog \-t https://example.com \-P mypocs/  
使用`-s`关键字可以再所有Poc进行模糊搜索并扫描搜索结果。多个关键字之间用逗号分隔。例如：`-s weblogic, jboss`  
afrog \-t https://example.com \-s weblogic,jboss  
使用`-S`关键字根据严重性级别扫描漏洞。严重性级别包括：info、low、medium、high和critical。例如，要扫描高危和严重漏洞，可以使用命令`-S hig, critical`。  
afrog \-t https://example.com \-S high, critical  
你也可以同时扫描多个URL  
afrog \-T urls.txt

## **\-Web 命令**

`-web`命令允许将afrog扫描到的漏洞持久化存储到一个SQLite3数据库中。通过浏览器访问`http://x.x.x.x:16868`，用户可以访问漏洞报告页，在其中进行简单的关键字搜索并按漏洞严重性过滤结果。  
afrog \-web  
![][image3]

## **配置文件**

第一次启动afrog时，它会自动再当前用户目录下的`$HOME/.config/afrog/afrog-config.yaml`路径创建一个名为`afrog-config.yaml`的配置文件。  
下面是一个配置文件示例：  
reverse:  
  ceye:  
    api-key: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
    domain: "xxxxxx.cey2e.io"  
  dnslogcn:  
    domain: dnslog.cn  
  alphalog:  
    domain: dnslogxx.sh  
    api\_url: "http://dnslogxx.sh/"  
  xray:  
    x\_token: "xraytest"  
    domain: dnslogxx.sh  
    api\_url: "http://x.x.0.x:8777"  
  revsuit:  
    token: "xx"  
    dns\_domain: "log.xx.com"  
    http\_url: "http://x.x.x.x/log/"  
    api\_url: "http://x.x.x.x/helplog"  
`reberse`配置项用于指定一个反向链接平台，用来严重那些无法直接回显结果的命令执行漏洞。目前，afrog只支持ceye作为反向连接平台。

### **Ceye 配置**

获取`ceye` 的方法如下：

* 访问ceye.io网站并注册一个账号。  
* 登录并进入个人设置页面。  
* 复制domain和api-key，并再afrog-config.yaml中进行正确的配置。

### **DNSlogcn**

不需要配置，但稳定性较差

### **Alphalog**

需要构建服务工具

### **xyay**

需要构建服务工具

### **Revsuit**

需要构建服务工具、教程。

## **JSON输出（面向开发者）**

### **JSON**

可选命令：`-json`或`-j`,将扫描结果保存为JSON文件。默认情况下，JSON文件包含以下字段：target、fulltarget、id和info。其中info字段包含以下字段：name、author、severity、description和reference。如果想要同时保存请求和响应内容，请使用`-json-all`命令参数。  
afrog \-t https://example.com \-json result.json  
afrog \-t https://example.com \-j result.json  
警告  
JSON 文件的内容是实时更新的。需要注意的是：再扫描完成之前，如果开发者想要解析文件内容，需要手动在文件末尾添加一个'`]`' 符号，否则后引起解析错误。当然，如果等到扫描完成后再解析文件，就不会出现这个问题。

### **JsonALL**

可选命令：`-json-all`或`-ja`,`-json-all` 和 `-json`命令的区别在于，`-json-all` 会将所有漏洞结果，包括请i去和响应，写入JSON文件中。

## **运行截图**

**![][image4]**

## **作为库使用**

### **简单示例**

扫描网站 `http://example.com`  
package main  
import (  
		"fmt"  
    	"github.com/zan9bin/afrog"  
)

func main(){  
    if err:=afrog.NewScanner(\[\]string{"http://exmaple.com"},afrog.Scanner{}; err \!= nil{  
        fmt.Println(err.Error())  
    }  
}

[image1]:https://github.com/owl234/Awesome-SRC-experience/raw/main/img/FlowChart.png

[image2]:https://github.com/owl234/Awesome-SRC-experience/raw/main/img/FlowChart.png

[image3]:https://github.com/owl234/Awesome-SRC-experience/raw/main/img/webcommand.png

[image4]:https://github.com/owl234/Awesome-SRC-experience/raw/main/img/1.png

