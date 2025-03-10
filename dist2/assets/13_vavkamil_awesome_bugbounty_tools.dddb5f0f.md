https://github.com/vavkamil/awesome-bugbounty-tools

# **很棒的漏洞赏金工具惊人的**

各种漏洞赏金工具的精选列表

## **内容**

* [侦察](https://github.com/vavkamil/awesome-bugbounty-tools#Recon)  
  * [子域名枚举](https://github.com/vavkamil/awesome-bugbounty-tools#Subdomain-Enumeration)  
  * [端口扫描](https://github.com/vavkamil/awesome-bugbounty-tools#Port-Scanning)  
  * [截图](https://github.com/vavkamil/awesome-bugbounty-tools#Screenshots)  
  * [技术](https://github.com/vavkamil/awesome-bugbounty-tools#Technologies)  
  * [内容发现](https://github.com/vavkamil/awesome-bugbounty-tools#Content-Discovery)  
  * [链接](https://github.com/vavkamil/awesome-bugbounty-tools#Links)  
  * [参数](https://github.com/vavkamil/awesome-bugbounty-tools#Parameters)  
  * [模糊测试](https://github.com/vavkamil/awesome-bugbounty-tools#Fuzzing)  
* [开发](https://github.com/vavkamil/awesome-bugbounty-tools#Exploitation)  
  * [命令注入](https://github.com/vavkamil/awesome-bugbounty-tools#Command-Injection)  
  * [CORS 配置错误](https://github.com/vavkamil/awesome-bugbounty-tools#CORS-Misconfiguration)  
  * [CRLF 注入](https://github.com/vavkamil/awesome-bugbounty-tools#CRLF-Injection)  
  * [CSRF注入](https://github.com/vavkamil/awesome-bugbounty-tools#CSRF-Injection)  
  * [目录遍历](https://github.com/vavkamil/awesome-bugbounty-tools#Directory-Traversal)  
  * [文件包含](https://github.com/vavkamil/awesome-bugbounty-tools#File-Inclusion)  
  * [GraphQL 注入](https://github.com/vavkamil/awesome-bugbounty-tools#GraphQL-Injection)  
  * [标头注入](https://github.com/vavkamil/awesome-bugbounty-tools#Header-Injection)  
  * [不安全的反序列化](https://github.com/vavkamil/awesome-bugbounty-tools#Insecure-Deserialization)  
  * [不安全的直接对象引用](https://github.com/vavkamil/awesome-bugbounty-tools#Insecure-Direct-Object-References)  
  * [打开重定向](https://github.com/vavkamil/awesome-bugbounty-tools#Open-Redirect)  
  * [竞争条件](https://github.com/vavkamil/awesome-bugbounty-tools#Race-Condition)  
  * [请求走私](https://github.com/vavkamil/awesome-bugbounty-tools#Request-Smuggling)  
  * [服务器端请求伪造](https://github.com/vavkamil/awesome-bugbounty-tools#Server-Side-Request-Forgery)  
  * [SQL 注入](https://github.com/vavkamil/awesome-bugbounty-tools#SQL-Injection)  
  * [XSS 注入](https://github.com/vavkamil/awesome-bugbounty-tools#XSS-Injection)  
  * [XXE 注入](https://github.com/vavkamil/awesome-bugbounty-tools#XXE-Injection)  
* [各种各样的](https://github.com/vavkamil/awesome-bugbounty-tools#Miscellaneous)  
  * [密码](https://github.com/vavkamil/awesome-bugbounty-tools#Passwords)  
  * [秘密](https://github.com/vavkamil/awesome-bugbounty-tools#Secrets)  
  * [Git](https://github.com/vavkamil/awesome-bugbounty-tools#Git)  
  * [铲斗](https://github.com/vavkamil/awesome-bugbounty-tools#Buckets)  
  * [内容管理系统](https://github.com/vavkamil/awesome-bugbounty-tools#CMS)  
  * [JSON Web 令牌](https://github.com/vavkamil/awesome-bugbounty-tools#JSON-Web-Token)  
  * [发布消息](https://github.com/vavkamil/awesome-bugbounty-tools#postMessage)  
  * [子域名接管](https://github.com/vavkamil/awesome-bugbounty-tools#Subdomain-Takeover)  
  * [有用](https://github.com/vavkamil/awesome-bugbounty-tools#Useful)  
  * [未分类](https://github.com/vavkamil/awesome-bugbounty-tools#Uncategorized)

---

## **侦察**

### **子域名枚举**

* [Sublist3r](https://github.com/aboul3la/Sublist3r) \- 渗透测试人员的快速子域名枚举工具  
* [Amass](https://github.com/OWASP/Amass) \- 深入的攻击面映射和资产发现  
* [massdns](https://github.com/blechschmidt/massdns) \- 用于批量查找和侦察（子域名枚举）的高性能 DNS 存根解析器  
* [Findomain](https://github.com/Findomain/Findomain) \- 最快且跨平台的子域名枚举器，不要浪费您的时间。  
* [Sudomy](https://github.com/Screetsec/Sudomy) \- Sudomy 是一款子域名枚举工具，用于收集子域名并分析执行自动侦察 (recon) 的域名，以进行漏洞搜寻/渗透测试  
* [chaos-client-](https://github.com/projectdiscovery/chaos-client)客户端与 Chaos DNS API 进行通信。  
* [domained](https://github.com/TypeError/domained) \- 多工具子域名枚举  
* [bugcrowd-levelup-subdomain-enumeration](https://github.com/appsecco/bugcrowd-levelup-subdomain-enumeration) \- 该存储库包含在 Bugcrowd LevelUp 2017 虚拟会议上发表的演讲“深奥的子域名枚举技术”中的所有材料  
* [shuffledns](https://github.com/projectdiscovery/shuffledns) \-shuffleDNS 是一个用 go 编写的 massdns 包装器，它允许您使用主动暴力破解枚举有效子域名，以及使用通配符处理和简单的输入输出来解析子域名……  
* [puredns](https://github.com/d3mondev/puredns) \- 快速域名解析器和子域名暴力破解，使用 wilcard(\*) 进行精确的通配符过滤  
* [censys-subdomain-finder](https://github.com/christophetd/censys-subdomain-finder) \- 使用来自 Censys 的证书透明度日志执行子域枚举。  
* [Turbolist3r](https://github.com/fleetcaptain/Turbolist3r) \- 具有已发现域分析功能的子域枚举工具  
* [censys-enumeration](https://github.com/0xbharath/censys-enumeration) \- 使用 Censys 上的 SSL/TLS 证书数据集提取给定域的子域/电子邮件的脚本  
* [tugarecon](https://github.com/LordNeoStark/tugarecon) \- 面向渗透测试人员的快速子域名枚举工具。  
* [as3nt](https://github.com/cinerieus/as3nt) \- 另一个子域名枚举工具  
* [Subra](https://github.com/si9int/Subra) \- 用于子域名枚举 (subfinder) 的 Web-UI  
* [Substr3am](https://github.com/nexxai/Substr3am) \- 通过监视颁发的 SSL 证书对感兴趣的目标进行被动侦察/枚举  
* [域](https://github.com/jhaddix/domain/)\- enumall.py Regon-ng 的设置脚本  
* [altdns](https://github.com/infosec-au/altdns) \- 生成子域名的排列、变更和变异，然后解析它们  
* [brutesubs](https://github.com/anshumanbh/brutesubs) \- 一个自动化框架，用于通过 Docker Compose 使用你自己的单词表（并行）运行多个开源子域名暴力破解工具  
* [dns-parallel-prober](https://github.com/lorenzog/dns-parallel-prober) \- 这是一个并行域名探测器，可以尽快找到给定域的尽可能多的子域。  
* [dnscan](https://github.com/rbsec/dnscan) \-dnscan 是一个基于 python 单词表的 DNS 子域扫描器。  
* [knock](https://github.com/guelfoweb/knock) \-Knockpy 是一个 Python 工具，旨在通过单词列表枚举目标域上的子域。  
* [hakrevdns](https://github.com/hakluke/hakrevdns) \- 用于批量执行反向 DNS 查找的小型、快速工具。  
* [dnsx](https://github.com/projectdiscovery/dnsx) \-Dnsx 是一种快速且多用途的 DNS 工具包，允许使用用户提供的解析器列表运行您选择的多个 DNS 查询。  
* [subfinder](https://github.com/projectdiscovery/subfinder) \-Subfinder 是一个子域名发现工具，可以发现网站的有效子域名。  
* [assetfinder](https://github.com/tomnomnom/assetfinder) \- 查找与给定域相关的域和子域  
* [crtndstry](https://github.com/nahamsec/crtndstry) \- 另一个子域名查找器  
* [VHostScan](https://github.com/codingo/VHostScan) \- 执行反向查找的虚拟主机扫描器  
* [scilla](https://github.com/edoardottt/scilla) \- 信息收集工具 \- DNS / 子域 / 端口 / 目录枚举  
* [sub3suite](https://github.com/3nock/sub3suite) \- 用于子域枚举、情报收集和攻击面映射的研究级工具套件。  
* [cero](https://github.com/glebarez/cero) \- 从任意主机的 SSL 证书中抓取域名  
* [shosubgo](https://github.com/incogbyte/shosubgo) \- 使用 Shodan API 抓取子域名的小工具  
* [haktrails](https://github.com/hakluke/haktrails) \- 用于查询 SecurityTrails API 数据的 Golang 客户端  
* [bbot](https://github.com/blacklanternsecurity/bbot) \- 黑客使用的递归互联网扫描器

### **端口扫描**

* [masscan](https://github.com/robertdavidgraham/masscan) \- TCP 端口扫描器，异步发出 SYN 数据包，在 5 分钟内扫描整个互联网。  
* [RustScan](https://github.com/RustScan/RustScan) \- 现代端口扫描器  
* [naabu-](https://github.com/projectdiscovery/naabu)用 Go 编写的快速端口扫描器，注重可靠性和简单性。  
* [nmap](https://github.com/nmap/nmap) \- Nmap \- 网络映射器。官方 SVN 存储库的 Github 镜像。  
* [sandmap](https://github.com/trimstray/sandmap) \- 强化版 Nmap。简单的 CLI，能够运行纯 Nmap 引擎，31 个模块，459 个扫描配置文件。  
* [ScanCannon](https://github.com/johnnyxmas/ScanCannon) \- 结合了 masscan 的速度和 nmap 的可靠性和详细枚举

### **截图**

* [EyeWitness](https://github.com/FortyNorthSecurity/EyeWitness) \- EyeWitness 旨在截取网站屏幕截图、提供一些服务器标头信息并在可能的情况下识别默认凭据。  
* [aquatone](https://github.com/michenriksen/aquatone) \- Aquatone 是一种用于对大量主机上的网站进行可视化检查的工具，方便快速了解基于 HTTP 的攻击面。  
* [screenshoteer——](https://github.com/vladocar/screenshoteer)从命令行制作网站截图和移动模拟。  
* [gowitness](https://github.com/sensepost/gowitness) \- gowitness \- 一个使用 Chrome Headless 的 golang 网页截图实用程序  
* [WitnessMe](https://github.com/byt3bl33d3r/WitnessMe) \- Web Inventory 工具，使用 Pyppeteer（无头 Chrome/Chromium）截取网页截图，并提供一些额外的功能让生活更轻松。  
* [eyeballer](https://github.com/BishopFox/eyeballer) \- 用于分析渗透测试截图的卷积神经网络  
* [scrying](https://github.com/nccgroup/scrying) \- 一个用于集中收集 RDP、Web 和 VNC 截图的工具  
* [Depix](https://github.com/beurtschipper/Depix) \- 从像素化截图中恢复密码  
* [httpscreenshot](https://github.com/breenmachine/httpscreenshot/) \- HTTPScreenshot 是一个用于抓取大量网站截图和 HTML 的工具。

### **技术**

* [wappalyzer-](https://github.com/AliasIO/wappalyzer)识别网站上的技术。  
* [webanalyze](https://github.com/rverton/webanalyze) \-Wappalyzer 端口（揭示网站上使用的技术）用于自动进行大规模扫描。  
* [python-builtwith](https://github.com/claymation/python-builtwith) \-BuiltWith API 客户端  
* [whatweb](https://github.com/urbanadventurer/whatweb) \- 下一代网络扫描仪  
* [retire.js](https://github.com/RetireJS/retire.js) \- 扫描器检测具有已知漏洞的 JavaScript 库的使用情况  
* [httpx](https://github.com/projectdiscovery/httpx) \-httpx 是一个快速且多用途的 HTTP 工具包，允许使用 retryablehttp 库运行多个探测器，旨在通过增加线程来保持结果的可靠性。  
* [fingerx](https://github.com/praetorian-inc/fingerprintx) \- fingerx 是一个独立的实用程序，用于在开放端口上进行服务发现，可与其他流行的漏洞赏金命令行工具配合使用。

### **内容发现**

* [gobuster](https://github.com/OJ/gobuster) \- 用 Go 编写的目录 / 文件、DNS 和 VHost 破坏工具  
* [recursebuster](https://github.com/C-Sto/recursebuster) \- 用于递归查询 Web 服务器的快速内容发现工具，适用于渗透测试和 Web 应用程序评估  
* [feroxbuster](https://github.com/epi052/feroxbuster) \- 一种用 Rust 编写的快速、简单、递归内容发现工具。  
* [dirsearch](https://github.com/maurosoria/dirsearch) \- Web 路径扫描器  
* [dirsearch](https://github.com/evilsocket/dirsearch) \-dirsearch 的 Go 实现。  
* [filebuster](https://github.com/henshin/filebuster) \- 一款极其快速且灵活的 Web 模糊测试器  
* [dirstalk](https://github.com/stefanoj3/dirstalk) \- dirbuster/dirb 的现代替代品  
* [dirbuster-ng](https://github.com/digination/dirbuster-ng) \- dirbuster-ng 是 Java dirbuster 工具的 C CLI 实现  
* [gospider](https://github.com/jaeles-project/gospider) \- Gospider \- 用 Go 编写的快速网络蜘蛛  
* [hakrawler](https://github.com/hakluke/hakrawler) \- 简单、快速的网络爬虫，旨在轻松、快速地发现网络应用程序中的端点和资产  
* [crawley-](https://github.com/s0rg/crawley)用 Golang 编写的快速、功能丰富的 Unix 方式网络抓取工具 / 爬虫。  
* [katana](https://github.com/projectdiscovery/katana) \- 下一代爬行和蜘蛛框架

### **链接**

* [LinkFinder](https://github.com/GerbenJavado/LinkFinder) \- 一个在 JavaScript 文件中查找端点的 Python 脚本  
* [JS-Scan](https://github.com/zseano/JS-Scan) \- 一个用 php 构建的 .js 扫描器，用于抓取 URL 和其他信息  
* [LinksDumper](https://github.com/arbazkiraak/LinksDumper) \- 从响应中提取（链接/可能的端点）并通过解码/排序对其进行过滤  
* [GoLinkFinder](https://github.com/0xsha/GoLinkFinder) \- 快速且最小的 JS 端点提取器  
* [BurpJSLinkFinder](https://github.com/InitRoot/BurpJSLinkFinder) \- Burp 扩展，用于被动扫描端点链接的 JS 文件。  
* [urlgrab-](https://github.com/IAmStoxe/urlgrab)一个 golang 实用程序，用于在网站上搜索其他链接。  
* [waybackurls](https://github.com/tomnomnom/waybackurls) \- 获取 Wayback Machine 所知道的某个域名的所有 URL  
* [gau](https://github.com/lc/gau) \- 从 AlienVault 的 Open Threat Exchange、Wayback Machine 和 Common Crawl 获取已知 URL。  
* [getJS](https://github.com/003random/getJS) \- 快速获取所有 javascript 源/文件的工具  
* [linx](https://github.com/riza/linx) \- 揭示 JavaScript 文件中的隐形链接  
* [waymore-](https://github.com/xnl-h4ck3r/waymore)从 Wayback Machine 中查找更多！  
* [xnLinkFinder](https://github.com/xnl-h4ck3r/xnLinkFinder) \- 用于发现端点、潜在参数以及给定目标的特定词表的 Python 工具

### **参数**

* [parameth-](https://github.com/maK-/parameth)此工具可用于暴力破解GET和POST参数  
* [param-miner](https://github.com/PortSwigger/param-miner) \- 此扩展可识别隐藏的、未链接的参数。它对于查找 Web 缓存中毒漏洞特别有用。  
* [ParamPamPam-](https://github.com/Bo0oM/ParamPamPam)该工具用于暴力破解GET和POST参数。  
* [Arjun](https://github.com/s0md3v/Arjun) \-HTTP 参数发现套件。  
* [ParamSpider——](https://github.com/devanshbatham/ParamSpider)从 Web 档案的黑暗角落挖掘参数。  
* [x8](https://github.com/Sh1Yo/x8) \- 用 Rust 编写的隐藏参数发现套件。

### **模糊测试**

* [wfuzz](https://github.com/xmendez/wfuzz) ——Web 应用程序模糊测试器  
* [ffuf](https://github.com/ffuf/ffuf) \- 用 Go 编写的快速 Web 模糊测试器  
* [fuzzdb](https://github.com/fuzzdb-project/fuzzdb) \- 黑盒应用程序故障注入和资源发现的攻击模式和原语词典。  
* [IntruderPayloads](https://github.com/1N3/IntruderPayloads) ——Burpsuite Intruder 有效载荷、BurpBounty 有效载荷、模糊列表、恶意文件上传和 Web 渗透测试方法和清单的集合。  
* [fuzz.txt——](https://github.com/Bo0oM/fuzz.txt)潜在危险的文件  
* [fuzzilli](https://github.com/googleprojectzero/fuzzilli) \- JavaScript 引擎模糊测试器  
* [fuzzapi](https://github.com/Fuzzapi/fuzzapi) \- Fuzzapi 是一种用于 REST API 渗透测试的工具，使用 API\_Fuzzer gem  
* [qsfuzz](https://github.com/ameenmaali/qsfuzz) \- qsfuzz（查询字符串模糊测试）允许您构建自己的规则来模糊查询字符串并轻松识别漏洞。  
* [vaf-](https://github.com/d4rckh/vaf)用 Nim 编写的非常先进的（web）模糊测试器。

---

## **开发**

Lorem ipsum dolor sit amet

### **命令注入**

* [commix](https://github.com/commixproject/commix) \- 自动化一体化操作系统命令注入和利用工具。

### **CORS 配置错误**

* [Corsy](https://github.com/s0md3v/Corsy) \- CORS 错误配置扫描仪  
* [CORStest](https://github.com/RUB-NDS/CORStest) \- 一个简单的 CORS 错误配置扫描器  
* [cors-scanner](https://github.com/laconicwolf/cors-scanner) \- 一种多线程扫描器，可帮助识别 CORS 缺陷/错误配置  
* [CorsMe](https://github.com/Shivangx01b/CorsMe) \- 跨源资源共享错误配置扫描程序

### **CRLF 注入**

* [CRLFsuite](https://github.com/Nefcore/CRLFsuite) \- 专门用于扫描 CRLF 注入的快速工具  
* [crlfuzz](https://github.com/dwisiswant0/crlfuzz) \- 用 Go 编写的快速扫描 CRLF 漏洞的工具  
* [CRLF-Injection-Scanner](https://github.com/MichaelStott/CRLF-Injection-Scanner) \- 用于测试域列表上的 CRLF 注入的命令行工具。  
* [Injectus](https://github.com/BountyStrike/Injectus) \- CRLF 和开放重定向模糊测试器

### **CSRF注入**

* [XSRFProbe](https://github.com/0xInfection/XSRFProbe) — 主要跨站请求伪造 (CSRF) 审计和利用工具包。

### **目录遍历**

* [dotdotpwn](https://github.com/wireghoul/dotdotpwn) \- DotDotPwn \- 目录遍历模糊器  
* [FDsploit——](https://github.com/chrispetrou/FDsploit)文件包含和目录遍历模糊测试、枚举和利用工具。  
* [off-by-slash](https://github.com/bayotop/off-by-slash) \-Burp 扩展，用于通过 NGINX 错误配置大规模检测别名遍历。  
* [liffier](https://github.com/momenbasel/liffier) \- 厌倦了在可能的路径遍历中手动添加点-点-斜线？这个简短的代码片段将在 URL 上增加 ../。

### **文件包含**

* [liffy](https://github.com/mzfr/liffy) \- 本地文件包含利用工具  
* [Burp-LFI-tests](https://github.com/Team-Firebugs/Burp-LFI-tests) \- 使用 Burpsuite 进行 LFI 模糊测试  
* [LFI-Enum](https://github.com/mthbernardes/LFI-Enum) \- 通过 LFI 执行枚举的脚本  
* [LFISuite](https://github.com/D35m0nd142/LFISuite) \- 全自动 LFI 漏洞利用器 (+ 反向 Shell) 和扫描器  
* [LFI-files](https://github.com/hussein98d/LFI-files) \- 用于 LFI 暴力破解的单词表

### **GraphQL 注入**

* [inql](https://github.com/doyensec/inql) \- InQL \- 用于 GraphQL 安全测试的 Burp 扩展  
* [GraphQLmap](https://github.com/swisskyrepo/GraphQLmap) \- GraphQLmap 是一个脚本引擎，用于与 graphql 端点交互以进行渗透测试。  
* [shapeshifter](https://github.com/szski/shapeshifter) \- GraphQL 安全测试工具  
* [graphql\_beautifier](https://github.com/zidekmat/graphql_beautifier) \- Burp Suite 扩展，帮助提高 Graphql 请求的可读性  
* [千里眼](https://github.com/nikitastupin/clairvoyance)\- 尽管禁用了自省，仍可获取 GraphQL API 模式！

### **标头注入**

* [headi](https://github.com/mlcsec/headi) \- 可定制和自动化的 HTTP 标头注入。

### **不安全的反序列化**

* [ysoserial——](https://github.com/frohoff/ysoserial)一种用于生成利用不安全的 Java 对象反序列化的有效负载的概念验证工具。  
* [GadgetProbe——](https://github.com/BishopFox/GadgetProbe)探测端点使用 Java 序列化对象来识别远程 Java 类路径上的类、库和库版本。  
* [ysoserial.net](https://github.com/pwntester/ysoserial.net) \- 适用于各种 .NET 格式化程序的反序列化有效负载生成器  
* [phpggc](https://github.com/ambionics/phpggc) \-PHPGGC 是一个 PHP unserialize() 有效负载库，附带一个从命令行或以编程方式生成它们的工具。

### **不安全的直接对象引用**

* [Autorize](https://github.com/Quitten/Autorize) \- 由 Barak Tawily 开发，使用 Jython 编写的 burp suite 自动授权执行检测扩展

### **打开重定向**

* [Oralyzer](https://github.com/r0075h3ll/Oralyzer) \- 开放重定向分析器  
* [Injectus](https://github.com/BountyStrike/Injectus) \- CRLF 和开放重定向模糊测试器  
* [dom-red](https://github.com/Naategh/dom-red) \- 用于检查域名列表是否存在开放重定向漏洞的小脚本  
* [OpenRedireX](https://github.com/devanshbatham/OpenRedireX) \- 用于 OpenRedirect 问题的模糊测试器

### **竞争条件**

* [razzer](https://github.com/compsec-snu/razzer) \- 一款专注于竞争漏洞的内核模糊测试器  
* [racepwn](https://github.com/racepwn/racepwn) \- 竞争条件框架  
* [request-racer](https://github.com/nccgroup/requests-racer) \- 小型 Python 库，可以轻松利用 Requests 中的 Web 应用程序中的竞争条件。  
* [turbo-intruder](https://github.com/PortSwigger/turbo-intruder) \-Turbo Intruder 是 Burp Suite 扩展，用于发送大量 HTTP 请求并分析结果。  
* [race-the-web](https://github.com/TheHackerDev/race-the-web) \- 测试 Web 应用程序中的竞争条件。包括用于集成到持续集成管道中的 RESTful API。

### **请求走私**

* [http-request-smuggling](https://github.com/anshumanpattnaik/http-request-smuggling) \- HTTP 请求走私检测工具  
* [smuggler](https://github.com/defparam/smuggler) \- Smuggler \- 用 Python 3 编写的 HTTP 请求走私 / 异步测试工具  
* [h2csmuggler](https://github.com/BishopFox/h2csmuggler) \- 通过 HTTP/2 明文进行 HTTP 请求走私（h2c）  
* [tiscripts](https://github.com/defparam/tiscripts) \- 我使用这些脚本为 CLTE 和 TECL 风格的攻击创建请求走私异步负载。

### **服务器端请求伪造**

* [SSRFmap](https://github.com/swisskyrepo/SSRFmap) \- 自动 SSRF 模糊测试器和开发工具  
* [Gopherus](https://github.com/tarunkant/Gopherus) \- 此工具生成 gopher 链接，用于利用 SSRF 并在各种服务器中获取 RCE  
* [ground-control](https://github.com/jobertabma/ground-control) \- 在我的 Web 服务器上运行的脚本集合。主要用于调试 SSRF、盲 XSS 和 XXE 漏洞。  
* [SSRFire](https://github.com/micha3lb3n/SSRFire) \- 自动化 SSRF 查找器。只需提供域名和服务器即可！;) 还可以选择查找 XSS 和打开重定向  
* [httprebind](https://github.com/daeken/httprebind) \- 基于 DNS 重新绑定的 SSRF 攻击的自动化工具  
* [ssrf-sheriff](https://github.com/teknogeek/ssrf-sheriff) \- 用 Go 编写的简单 SSRF 测试警长  
* [B-XSSRF](https://github.com/SpiderMate/B-XSSRF) \- 用于检测和跟踪盲 XSS、XXE 和 SSRF 的工具包  
* [extended-ssrf-search](https://github.com/Damian89/extended-ssrf-search) \- 智能 ssrf 扫描器使用不同的方法，例如在帖子中进行参数暴力破解并获取...  
* [gaussrf-](https://github.com/KathanP19/gaussrf)从 AlienVault 的开放威胁交换、Wayback Machine 以及具有 OpenRedirection 或 SSRF 参数的常见抓取和过滤网址中获取已知网址。  
* [ssrfDetector](https://github.com/JacobReynolds/ssrfDetector) \- 服务器端请求伪造检测器  
* [grafana-ssrf](https://github.com/RandomRobbieBF/grafana-ssrf) \- Grafana 中经过身份验证的 SSRF  
* [sentrySSRF](https://github.com/xawdxawdx/sentrySSRF) \- 用于在页面或 JavaScript 文件中搜索哨兵配置并检查盲 SSRF 的工具  
* [lorsrf](https://github.com/knassar702/lorsrf) \- 使用 GET 和 POST 方法对隐藏参数进行暴力破解以查找 SSRF 漏洞  
* [singularity](https://github.com/nccgroup/singularity) \- DNS 重新绑定攻击框架。  
* [whonow](https://github.com/brannondorsey/whonow) \- 用于动态执行 DNS 重新绑定攻击的“恶意”DNS 服务器（在 rebind.network:53 上运行的公共实例）  
* [dns-rebind-toolkit](https://github.com/brannondorsey/dns-rebind-toolkit) \- 用于创建 DNS 重新绑定攻击的前端 JavaScript 工具包。  
* [dref](https://github.com/FSecureLABS/dref) ——DNS 重新绑定利用框架  
* [rbndr](https://github.com/taviso/rbndr) \- 简单的 DNS 重新绑定服务  
* [httprebind](https://github.com/daeken/httprebind) \- 基于 DNS 重新绑定的 SSRF 攻击的自动化工具  
* [dnsFookup](https://github.com/makuga01/dnsFookup) \- DNS 重新绑定工具包  
* [surf](https://github.com/assetnote/surf) \- 在现代云环境中升级您的 SSRF 漏洞。`surf`允许您过滤主机列表，返回可行的 SSRF 候选列表。

### **SQL 注入**

* [sqlmap](https://github.com/sqlmapproject/sqlmap) \- 自动 SQL 注入和数据库接管工具  
* [NoSQLMap](https://github.com/codingo/NoSQLMap) \- 自动化 NoSQL 数据库枚举和 Web 应用程序开发工具。  
* [SQLiScanner](https://github.com/0xbug/SQLiScanner) \- 使用 Charles 和 sqlmap api 自动进行 SQL 注入  
* [SleuthQL](https://github.com/RhinoSecurityLabs/SleuthQL) \- Python3 Burp 历史解析工具，用于发现潜在的 SQL 注入点。与 SQLmap 一起使用。  
* [mssqlproxy](https://github.com/blackarrowsec/mssqlproxy) \- mssqlproxy 是一个工具包，旨在通过套接字重用，在受感染的 Microsoft SQL Server 中执行受限环境中的横向移动  
* [sqli-hunter](https://github.com/zt2/sqli-hunter) \- SQLi-Hunter 是一个简单的 HTTP / HTTPS 代理服务器和一个 SQLMAP API 包装器，可以轻松挖掘 SQLi。  
* [waybackSqliScanner](https://github.com/ghostlulzhacks/waybackSqliScanner) \- 从 wayback machine 收集 URL，然后测试每个 GET 参数是否存在 SQL 注入。  
* [ESC](https://github.com/NetSPI/ESC) \- Evil SQL Client (ESC) 是一个交互式 .NET SQL 控制台客户端，具有增强的 SQL Server 发现、访问和数据泄露功能。  
* [mssqli-duet](https://github.com/Keramas/mssqli-duet) \- MSSQL 的 SQL 注入脚本，基于 RID 暴力破解从 Active Directory 环境中提取域用户  
* [burp-to-sqlmap](https://github.com/Miladkhoshdel/burp-to-sqlmap) \- 使用 SQLMap 对 Burp Suite 批量请求执行 SQLInjection 测试  
* [BurpSQLTruncSanner——](https://github.com/InitRoot/BurpSQLTruncSanner)用于 SQL 截断漏洞的混乱 BurpSuite 插件。  
* [andor](https://github.com/sadicann/andor) \- 使用 Golang 的盲 SQL 注入工具  
* [Blinder](https://github.com/mhaskar/Blinder) \- 一个用于自动化基于时间的盲 SQL 注入的 Python 库  
* [sqliv-](https://github.com/the-robot/sqliv)大规模 SQL 注入漏洞扫描程序  
* [nosqli](https://github.com/Charlie-belmer/nosqli) \-NoSql 注入 CLI 工具，用于使用 MongoDB 查找易受攻击的网站。  
* [ghauri](https://github.com/r0oth3x49/ghauri) \- 一种先进的跨平台工具，可自动检测和利用 SQL 注入安全漏洞

### **XSS 注入**

* [XSStrike——](https://github.com/s0md3v/XSStrike)最先进的 XSS 扫描器。  
* [xssor2](https://github.com/evilcos/xssor2) ——XSS'OR——使用 JavaScript 进行黑客攻击。  
* [xsscrapy](https://github.com/DanMcInerney/xsscrapy) \- XSS spider \- 检测到 66/66 wavsep XSS  
* [sleepy-puppy](https://github.com/Netflix-Skunkworks/sleepy-puppy) \- Sleepy Puppy XSS 有效负载管理框架  
* [ezXSS](https://github.com/ssl/ezXSS) ——ezXSS 是渗透测试人员和漏洞赏金猎人测试（盲）跨站点脚本的一种简单方法。  
* [xsshunter](https://github.com/mandatoryprogrammer/xsshunter) \- XSS Hunter 服务 \- XSSHunter.com 的便携版本  
* [dalfox](https://github.com/hahwul/dalfox) \- DalFox（XSS 查找器）/基于 golang 的参数分析和 XSS 扫描工具  
* [xsser](https://github.com/epsylon/xsser) \- 跨站点“Scripter”（又名 XSSer）是一个自动框架，用于检测、利用和报告基于 Web 的应用程序中 XSS 漏洞。  
* [XSpear](https://github.com/hahwul/XSpear) \- 强大的XSS扫描和参数分析工具和gem  
* [weapons-XSS-payloads](https://github.com/hakluke/weaponised-XSS-payloads) \- 旨在将 alert(1) 转变为 P1 的 XSS 负载  
* [tracy](https://github.com/nccgroup/tracy) \- 一种旨在帮助查找 Web 应用程序的所有接收器和源并以易于理解的方式显示这些结果的工具。  
* [ground-control](https://github.com/jobertabma/ground-control) \- 在我的 Web 服务器上运行的脚本集合。主要用于调试 SSRF、盲 XSS 和 XXE 漏洞。  
* [xssValidator](https://github.com/nVisium/xssValidator) \- 这是一个 burp 入侵者扩展器，专为自动化和验证 XSS 漏洞而设计。  
* [JSShell](https://github.com/Den1al/JSShell) \- 一个交互式多用户 Web JS shell  
* [bXSS](https://github.com/LewisArdern/bXSS) ——bXSS 是一个实用程序，可供漏洞猎人和组织用来识别盲跨站点脚本。  
* [docem](https://github.com/whitel1st/docem) \- 在 docx、odt、pptx 等中嵌入 XXE 和 XSS 负载的实用性（增强版 OXML\_XEE）  
* [XSS-Radar](https://github.com/bugbountyforum/XSS-Radar) \- XSS Radar 是一种检测参数并对其进行模糊测试以发现跨站点脚本漏洞的工具。  
* [BruteXSS](https://github.com/rajeshmajumdar/BruteXSS) \- BruteXSS 是一个用 Python 编写的工具，用于查找 Web 应用程序中的 XSS 漏洞。  
* [findom-xss](https://github.com/dwisiswant0/findom-xss) \- 一种快速、简单的基于 DOM 的 XSS 漏洞扫描程序。  
* [domdig](https://github.com/fcavallarin/domdig) \- 用于单页应用程序的 DOM XSS 扫描器  
* [femida](https://github.com/wish-i-was/femida) \- Burp Suite 的自动盲 xss 搜索  
* [B-XSSRF](https://github.com/SpiderMate/B-XSSRF) \- 用于检测和跟踪盲 XSS、XXE 和 SSRF 的工具包  
* [domxssscanner](https://github.com/yaph/domxssscanner) \- DOMXSS 扫描仪是一款在线工具，用于扫描源代码中是否存在基于 DOM 的 XSS 漏洞  
* [xsshunter\_client](https://github.com/mandatoryprogrammer/xsshunter_client) \- XSS Hunter 的相关注入代理工具  
* [extended-xss-search——](https://github.com/Damian89/extended-xss-search)我的 xssfinder 工具的改进版本——扫描 URL 列表中不同类型的 xss。  
* [xssmap](https://github.com/Jewel591/xssmap) \- XSSMap 是一款基于 Python3 开发用于检测 XSS 漏洞的工具  
* [XSSCon](https://github.com/menkrep1337/XSSCon) \-XSSCon：简单的 XSS 扫描工具  
* [BitBlinder](https://github.com/BitTheByte/BitBlinder) \- BurpSuite 扩展，用于在提交的每个表单/请求上注入自定义跨站点脚本负载，以检测盲 XSS 漏洞  
* [XSSOauthPersistence](https://github.com/dxa4481/XSSOauthPersistence) \- 通过 XSS 和 Oauth 维护帐户持久性  
* [shadow-workers](https://github.com/shadow-workers/shadow-workers) \- Shadow Workers 是一款免费的开源 C2 和代理，专为渗透测试人员设计，旨在帮助利用 XSS 和恶意服务工作者 (SW)  
* [rexsser——](https://github.com/profmoriarity/rexsser)这是一个 burp 插件，它使用正则表达式从响应中提取关键字，并在目标范围内测试反射式 XSS。  
* [xss-flare](https://github.com/EgeBalci/xss-flare) \-cloudflare 无服务器工作者上的 XSS 猎手。  
* [Xss-Sql-Fuzz](https://github.com/jiangsir404/Xss-Sql-Fuzz) \- burpsuite 插件对GP所有参数(过滤特殊参数)一键自动添加xss sql payload进行fuzz  
* [vaya-ciego-nen](https://github.com/hipotermia/vaya-ciego-nen) \- 检测、管理和利用盲跨站点脚本 (XSS) 漏洞。  
* [dom-based-xss-finder](https://github.com/AsaiKen/dom-based-xss-finder) \- Chrome 扩展程序，可查找基于 DOM 的 XSS 漏洞  
* [XSSTerminal](https://github.com/machinexa2/XSSTerminal) \- 使用交互式输入开发自己的 XSS Payload  
* [xss2png](https://github.com/vavkamil/xss2png) \- PNG IDAT 块 XSS 有效负载生成器  
* [XSSwagger](https://github.com/vavkamil/XSSwagger) \- 一个简单的 Swagger-ui 扫描器，可以检测易受各种 XSS 攻击的旧版本

### **XXE 注入**

* [ground-control](https://github.com/jobertabma/ground-control) \- 在我的 Web 服务器上运行的脚本集合。主要用于调试 SSRF、盲 XSS 和 XXE 漏洞。  
* [dtd-finder](https://github.com/GoSecure/dtd-finder) \- 列出 DTD 并使用这些本地 DTD 生成 XXE 有效负载。  
* [docem](https://github.com/whitel1st/docem) \- 在 docx、odt、pptx 等中嵌入 XXE 和 XSS 负载的实用性（增强版 OXML\_XEE）  
* [xxeserv](https://github.com/staaldraad/xxeserv) \- 一款支持 XXE 负载的 FTP 迷你网络服务器  
* [xxexploiter](https://github.com/luisfontes19/xxexploiter) \- 帮助利用 XXE 漏洞的工具  
* [B-XSSRF](https://github.com/SpiderMate/B-XSSRF) \- 用于检测和跟踪盲 XSS、XXE 和 SSRF 的工具包  
* [XXEinjector——](https://github.com/enjoiz/XXEinjector)使用直接和不同的带外方法自动利用 XXE 漏洞的工具。  
* [oxml\_xxe](https://github.com/BuffaloWill/oxml_xxe) \- 一种将 XXE/XML 漏洞嵌入不同文件类型的工具  
* [metahttp](https://github.com/vp777/metahttp) \- 一个通过 XXE 自动扫描目标网络中 HTTP 资源的 bash 脚本

### **SSTI 注射**

* [tplmap](https://github.com/epinna/tplmap) \- 服务器端模板注入和代码注入检测和利用工具  
* [SSTImap](https://github.com/vladko312/SSTImap) \- 具有交互式界面的自动 SSTI 检测工具

---

## **各种各样的**

Lorem ipsum dolor sit amet

### **密码**

* [thc-hydra](https://github.com/vanhauser-thc/thc-hydra) \- Hydra 是一个并行化的登录破解程序，支持多种攻击协议。  
* [DefaultCreds-cheat-sheet](https://github.com/ihebski/DefaultCreds-cheat-sheet) \- 所有默认凭据都集中于一处，以协助蓝队/红队成员查找具有默认密码的设备  
* [changeme](https://github.com/ztgrace/changeme) \- 默认凭证扫描器。  
* [BruteX——](https://github.com/1N3/BruteX)自动暴力破解目标上运行的所有服务。  
* [patator](https://github.com/lanjelot/patator) \- Patator 是一款多用途暴力破解器，具有模块化设计和灵活的使用方式。

### **秘密**

* [git-secrets](https://github.com/awslabs/git-secrets) \- 防止你将机密和凭证提交到 git 存储库  
* [gitleaks](https://github.com/zricethezav/gitleaks) \- 使用正则表达式和熵扫描 git 存储库（或文件）以查找机密  
* [truffleHog](https://github.com/dxa4481/truffleHog) \- 在 git 存储库中搜索高熵字符串和秘密，深入挖掘提交历史  
* [gitGraber](https://github.com/hisxo/gitGraber) \- gitGraber：监控 GitHub 以实时搜索和查找不同在线服务的敏感数据  
* [talisman——](https://github.com/thoughtworks/talisman)通过挂接到 Git 提供的预推送挂钩，Talisman 可以验证传出的变更集中是否存在可疑的内容——例如授权令牌和私钥。  
* [GitGot](https://github.com/BishopFox/GitGot) \- 半自动化、反馈驱动的工具，用于快速搜索 GitHub 上的大量公共数据以查找敏感秘密。  
* [git-all-secrets](https://github.com/anshumanbh/git-all-secrets) \- 一种利用多个开源 git 搜索工具来捕获所有 git 秘密的工具  
* [github-search](https://github.com/gwen001/github-search) \- 在 GitHub 上执行基本搜索的工具。  
* [git-vuln-finder](https://github.com/cve-search/git-vuln-finder) \- 从 git 提交消息中查找潜在的软件漏洞  
* [commit-stream](https://github.com/x1sec/commit-stream) \- \#OSINT 工具，用于通过从 Github 事件 API 实时提取提交日志来查找 Github 存储库  
* [gitrob](https://github.com/michenriksen/gitrob) \- GitHub 组织的侦察工具  
* [repo-supervisor](https://github.com/auth0/repo-supervisor) \- 扫描您的代码是否存在安全配置错误，搜索密码和秘密。  
* [GitMiner](https://github.com/UnkL4b/GitMiner) \- Github 内容高级挖掘工具  
* [shhgit](https://github.com/eth0izzle/shhgit) \- Ah shhgit！实时查找 GitHub 秘密  
* [检测秘密](https://github.com/Yelp/detect-secrets)\- 一种检测和防止代码秘密的企业友好方式。  
* [rusty-hog](https://github.com/newrelic/rusty-hog) \- 一套用 Rust 构建的秘密扫描器，以提高性能。基于 TruffleHog  
* [耳语](https://github.com/Skyscanner/whispers)\- 识别硬编码的秘密和危险行为  
* [yar](https://github.com/nielsing/yar) \-Yar 是一种用于掠夺组织、用户和/或存储库的工具。  
* [dufflebag](https://github.com/BishopFox/dufflebag) \- 在暴露的 EBS 卷中搜索机密  
* [secret-bridge](https://github.com/duo-labs/secret-bridge) \- 监控 Github 是否泄露机密  
* [earlybird](https://github.com/americanexpress/earlybird) \-EarlyBird 是一种敏感数据检测工具，能够扫描源代码存储库以查找明文密码违规、PII、过时的加密方法、密钥文件等。  
* [Trufflehog-Chrome 扩展程序](https://github.com/trufflesecurity/Trufflehog-Chrome-Extension)\- Trufflehog-Chrome 扩展程序  
* [noseyparker](https://github.com/praetorian-inc/noseyparker) \- Nosey Parker 是一个命令行程序，可以在文本数据和 Git 历史中查找秘密和敏感信息。

### **Git**

* [GitTools](https://github.com/internetwache/GitTools) \- 包含 3 个工具的存储库，可用于破解带有 .git 存储库的网站  
* [gitjacker——](https://github.com/liamg/gitjacker)从配置错误的网站泄露 git 存储库  
* [git-dumper](https://github.com/arthaud/git-dumper) \- 从网站转储 git 存储库的工具  
* [GitHunter](https://github.com/digininja/GitHunter) \- 用于在 Git 存储库中搜索有趣内容的工具  
* [dvcs-ripper](https://github.com/kost/dvcs-ripper) \- Rip web 可访问（分布式）版本控制系统：SVN/GIT/HG...  
* [Gato（Github Attack TOolkit）](https://github.com/praetorian-inc/gato) ——GitHub 自托管 Runner 枚举和攻击工具

### **铲斗**

* [S3Scanner](https://github.com/sa7mon/S3Scanner) \- 扫描打开的 AWS S3 存储桶并转储内容  
* [AWSBucketDump](https://github.com/jordanpotti/AWSBucketDump) \- 在 S3 存储桶中查找有趣文件的安全工具  
* [CloudScraper](https://github.com/jordanpotti/CloudScraper) \- CloudScraper：用于枚举搜索云资源的目标的工具。S3 Buckets、Azure Blob、Digital Ocean 存储空间。  
* [s3viewer](https://github.com/SharonBrizinov/s3viewer) \- 公开开放的 Amazon AWS S3 Bucket 查看器  
* [festin](https://github.com/cr0hn/festin) \- FestIn \- S3 Bucket 弱点发现  
* [s3reverse](https://github.com/hahwul/s3reverse) \- 各种 s3 存储桶的格式转换为一种格式。用于 bugbounty 和安全测试。  
* [mass-s3-bucket-tester](https://github.com/random-robbie/mass-s3-bucket-tester) \- 这将测试 s3 buckets 列表，以查看它们是否启用了目录列表或是否可以上传  
* [S3BucketList](https://github.com/AlecBlance/S3BucketList) \- Firefox 插件，列出请求中找到的 Amazon S3 存储桶  
* [dirlstr](https://github.com/cybercdh/dirlstr) \- 从 URL 列表中查找目录列表或打开 S3 存储桶  
* [Burp-AnonymousCloud](https://github.com/codewatchorg/Burp-AnonymousCloud) \- Burp 扩展程序，可执行被动扫描以识别云存储桶，然后测试它们是否存在可公开访问的漏洞  
* [kicks3](https://github.com/abuvanth/kicks3) \- 来自 html、js 和 bucket 错误配置测试工具的 S3 bucket finder  
* [2tearsinabucket](https://github.com/Revenant40/2tearsinabucket) \- 枚举特定目标的 s3 存储桶。  
* [s3\_objects\_check](https://github.com/nccgroup/s3_objects_check) \- 对有效的 S3 对象权限进行白盒评估，以识别可公开访问的文件。  
* [s3tk](https://github.com/ankane/s3tk) \- Amazon S3 的安全工具包  
* [CloudBrute](https://github.com/0xsha/CloudBrute) \- 超棒的云枚举器  
* [s3cario](https://github.com/0xspade/s3cario) \- 如果它是一个有效的 Amazon s3 存储桶，此工具将首先获取 CNAME，如果不是，它将尝试检查域是否是存储桶名称。  
* [S3Cruze](https://github.com/JR0ch17/S3Cruze) \- 适用于渗透测试人员的一体化 AWS S3 存储桶工具。

### **内容管理系统**

* [wpscan](https://github.com/wpscanteam/wpscan) \- WPScan 是一款免费的、非商业用途的黑盒 WordPress 安全扫描器  
* [WPSpider——](https://github.com/cyc10n3/WPSpider)一个由 wpscan 实用程序提供支持的用于运行和安排 WordPress 扫描的集中式仪表板。  
* [wprecon](https://github.com/blackcrw/wprecon) \- Wordpress 侦察  
* [CMSmap](https://github.com/Dionach/CMSmap) \- CMSmap 是一个 Python 开源 CMS 扫描器，可以自动检测最流行的 CMS 的安全漏洞。  
* [joomscan](https://github.com/OWASP/joomscan) \- OWASP Joomla 漏洞扫描程序项目  
* [pyfiscan](https://github.com/fgeek/pyfiscan) \- 免费的 Web 应用程序漏洞和版本扫描程序  
* [aemhacker](https://github.com/0ang3el/aem-hacker) \- 用于识别易受攻击的 Adob​​e Experience Manager (AEM) Web 应用程序的工具。  
* [aemscan](https://github.com/Raz0r/aemscan) \- Adob​​e Experience Manager 漏洞扫描程序

### **JSON Web 令牌**

* [jwt\_tool](https://github.com/ticarpi/jwt_tool) \- 用于测试、调整和破解 JSON Web 令牌的工具包  
* [c-jwt-cracker](https://github.com/brendan-rius/c-jwt-cracker) \- 用 C 编写的 JWT 暴力破解器  
* [jwt-heartbreaker](https://github.com/wallarm/jwt-heartbreaker) \- Burp 扩展，用于检查 JWT（JSON Web Tokens）是否使用来自公共来源的已知密钥  
* [jwtear](https://github.com/KINGSABRI/jwtear) \- 为黑客解析、创建和操作 JWT 令牌的模块化命令行工具  
* [jwt-key-id-injector](https://github.com/dariusztytko/jwt-key-id-injector) \- 用于检查假设的 JWT 漏洞的简单 Python 脚本。  
* [jwt-hack](https://github.com/hahwul/jwt-hack) \- jwt-hack 是用于对 JWT 进行黑客攻击/安全测试的工具。  
* [jwt-cracker](https://github.com/lmammino/jwt-cracker) \- 简单的 HS256 JWT 令牌暴力破解器

### **发布消息**

* [postMessage-tracker](https://github.com/fransr/postMessage-tracker) \- Chrome 扩展程序，用于通过使用 CORS 进行记录以及以扩展图标的形式直观地跟踪 postMessage 使用情况（url、域和堆栈）  
* [PostMessage\_Fuzz\_Tool](https://github.com/kiranreddyrebel/PostMessage_Fuzz_Tool) \- \#BugBounty \#BugBounty 工具 \#WebDeveloper 工具

### **子域名接管**

* [subjack](https://github.com/haccer/subjack) \- 用 Go 编写的子域名接管工具  
* [SubOver](https://github.com/Ice3man543/SubOver) \- 强大的子域名接管工具  
* [autoSubTakeover](https://github.com/JordyZomer/autoSubTakeover) \- 用于检查 CNAME 是否解析为范围地址的工具。如果 CNAME 解析为非范围地址，则可能值得检查是否可以进行子域名接管。  
* [NSBrute](https://github.com/shivsahni/NSBrute) \- 用于接管易受 AWS NS Takeover 攻击的域的 Python 实用程序  
* [can-i-take-over-xyz](https://github.com/EdOverflow/can-i-take-over-xyz) \- “我可以接管 XYZ 吗？”——服务列表以及如何声明具有悬空 DNS 记录的（子）域。  
* [cnames-](https://github.com/cybercdh/cnames)获取已解析子域名的列表并批量输出任何相应的 CNAME。  
* [subHijack](https://github.com/vavkamil/old-repos-backup/tree/master/subHijack-master) \- 劫持被遗忘或配置错误的子域名  
* [tko-subs](https://github.com/anshumanbh/tko-subs) \- 一种可以帮助检测和接管具有无效 DNS 记录的子域名的工具  
* [HostileSubBruteforcer](https://github.com/nahamsec/HostileSubBruteforcer) \- 此应用程序将对现有子域进行暴力破解，并提供第三方主机是否已正确设置的信息。  
* [二阶](https://github.com/mhmdiaa/second-order)\- 二阶子域名接管扫描器  
* [接管](https://github.com/mzfr/takeover)\- 一种大规模测试子域名接管可能性的工具。  
* [dnsReaper](https://github.com/punk-security/dnsReaper) ——DNS Reaper 是另一个子域名接管工具，但更注重准确性、速度和我们武器库中的签名数量！

### **漏洞扫描程序**

* [nuclei](https://github.com/projectdiscovery/nuclei) \- Nuclei 是一种基于模板的可配置目标扫描的快速工具，具有强大的可扩展性和易用性。  
* [Sn1per](https://github.com/1N3/Sn1per) \- 为攻击性安全专家提供的自动化渗透测试框架  
* [metasploit-framework](https://github.com/rapid7/metasploit-framework) \-Metasploit 框架  
* [nikto](https://github.com/sullo/nikto) \- Nikto Web 服务器扫描仪  
* [arachni](https://github.com/Arachni/arachni) \- Web 应用程序安全扫描器框架  
* [jaeles](https://github.com/jaeles-project/jaeles) \- 自动化 Web 应用程序测试的瑞士军刀  
* [retire.js](https://github.com/RetireJS/retire.js) \- 扫描器检测具有已知漏洞的 JavaScript 库的使用情况  
* [Osmedeus](https://github.com/j3ssie/Osmedeus) \- 用于侦察和漏洞扫描的全自动攻击性安全框架  
* [getsploit](https://github.com/vulnersCom/getsploit) \- 用于搜索和下载漏洞的命令行实用程序  
* [flan](https://github.com/cloudflare/flan) – 一款非常棒的漏洞扫描器  
* [Findsploit](https://github.com/1N3/Findsploit) \- 立即在本地和在线数据库中查找漏洞  
* [BlackWidow](https://github.com/1N3/BlackWidow) \- 一个基于 Python 的 Web 应用程序扫描器，用于收集 OSINT 并模糊测试目标网站上的 OWASP 漏洞。  
* [backslash-powered-scanner](https://github.com/PortSwigger/backslash-powered-scanner) \- 查找未知类别的注入漏洞  
* [Eagle](https://github.com/BitTheByte/Eagle) \- 基于多线程插件的漏洞扫描程序，用于大规模检测基于 Web 的应用程序漏洞  
* [cariddi](https://github.com/edoardottt/cariddi) \- 获取域名列表、抓取 URL 并扫描端点、机密、API 密钥、文件扩展名、令牌等……  
* [OWASP ZAP](https://github.com/zaproxy/zaproxy) \- 世界上最受欢迎的免费网络安全工具，由专门的国际志愿者团队积极维护  
* [SSTImap](https://github.com/vladko312/SSTImap) ——SSTImap 是一款渗透测试软件，可以检查网站是否存在代码注入和服务器端模板注入漏洞并利用这些漏洞，从而访问操作系统本身。

### **有用**

* [anew](https://github.com/tomnomnom/anew) \- 用于向文件添加新行、跳过重复项的工具  
* [gf](https://github.com/tomnomnom/gf) \- grep 的包装器，可帮助您查找内容  
* [uro](https://github.com/s0md3v/uro) \- 整理 URL 列表，方便抓取/渗透测试  
* [unfurl](https://github.com/tomnomnom/unfurl) \- 提取标准输入中提供的 URL 片段  
* [qsreplace](https://github.com/tomnomnom/qsreplace) \- 接受标准输入上的 URL，用用户提供的值替换所有查询字符串值

### **未分类**

* [JSONBee](https://github.com/zigoo0/JSONBee) \- 一个随时可用的 JSONP 端点 / 有效负载，可帮助绕过不同网站的内容安全策略 (CSP)。  
* [Cyber​​Chef](https://github.com/gchq/CyberChef) \- 网络瑞士军刀 \- 用于加密、编码、压缩和数据分析的 Web 应用程序  
* \-  
* [bountyplz](https://github.com/fransr/bountyplz) \- 来自 markdown 模板的自动安全报告（HackerOne 和 Bugcrowd 是当前支持的平台）  
* [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) \- Web 应用程序安全和 Pentest/CTF 的有用有效负载和绕过列表  
* [bounty-targets-data](https://github.com/arkadiyt/bounty-targets-data) \- 此 repo 包含每小时更新的漏洞赏金平台范围（如 Hackerone/Bugcrowd/Intigriti/etc）的数据转储，这些转储可用于报告  
* [android-security-awesome](https://github.com/ashishb/android-security-awesome) \- Android 安全相关资源的集合  
* [awesome-mobile-security](https://github.com/vaib25vicky/awesome-mobile-security) \- 致力于为所有有用的 Android 和 iOS 安全相关内容建立一个单一的地方。  
* [awesome-vulnerable-apps](https://github.com/vavkamil/awesome-vulnerable-apps) \- 很棒的易受攻击的应用程序  
* [XFFenum](https://github.com/vavkamil/XFFenum) \- X-Forwarded-For \[403 禁止\] 枚举  
* [httpx](https://github.com/projectdiscovery/httpx) \-httpx 是一个快速且多用途的 HTTP 工具包，允许使用 retryablehttp 库运行多个探测器，旨在通过增加线程来保持结果的可靠性。  
* [csprecon](https://github.com/edoardottt/csprecon) \- 使用内容安全策略发现新的目标域

---

## **贡献**

欢迎贡献！请先阅读[贡献指南](https://github.com/vavkamil/awesome-bugbounty-tools/blob/main/contributing.md)。  
---

## **执照**

**CC0**  
在法律允许的范围内，vavkamil 放弃了对该作品的所有版权以及相关或邻近的权利。  
