const t=`Threekiii/Awesome-Redteam: \u4E00\u4E2A\u653B\u9632\u77E5\u8BC6\u4ED3\u5E93 Red Teaming and Offensive Security    https://github.com/Threekiii/Awesome-Redteam\r
\r
# Awesome-Redteam\r
\r
**\u3010\u514D\u8D23\u58F0\u660E\u3011\u672C\u9879\u76EE\u6240\u6D89\u53CA\u7684\u6280\u672F\u3001\u601D\u8DEF\u548C\u5DE5\u5177\u4EC5\u4F9B\u5B66\u4E60\uFF0C\u4EFB\u4F55\u4EBA\u4E0D\u5F97\u5C06\u5176\u7528\u4E8E\u975E\u6CD5\u7528\u9014\u548C\u76C8\u5229\uFF0C\u4E0D\u5F97\u5C06\u5176\u7528\u4E8E\u975E\u6388\u6743\u6E17\u900F\u6D4B\u8BD5\uFF0C\u5426\u5219\u540E\u679C\u81EA\u884C\u627F\u62C5\uFF0C\u4E0E\u672C\u9879\u76EE\u65E0\u5173\u3002\u4F7F\u7528\u672C\u9879\u76EE\u524D\u8BF7\u5148\u9605\u8BFB [\u6CD5\u5F8B\u6CD5\u89C4](https://github.com/Threekiii/Awesome-Laws)\u3002**\r
\r
## _Roadmap_\r
\r
![](images/README/Awesome-Redteam-20240702.png)\r
\r
## \u76EE\u5F55 _Contents_\r
\r
- [\u9879\u76EE\u5BFC\u822A _Project Navigation_](#%E9%A1%B9%E7%9B%AE%E5%AF%BC%E8%88%AA-project-navigation)\r
  - [\u901F\u67E5\u6587\u6863 _CheatSheets_](#%E9%80%9F%E6%9F%A5%E6%96%87%E6%A1%A3-cheatsheets)\r
  - [\u4E00\u4E9B\u4EE3\u7801 _Scripts_](#%E4%B8%80%E4%BA%9B%E4%BB%A3%E7%A0%81-scripts)\r
  - [\u653B\u9632\u77E5\u8BC6 _Tips_](#%E6%94%BB%E9%98%B2%E7%9F%A5%E8%AF%86-tips)\r
- [\u5F00\u6E90\u5BFC\u822A _Open-Source Navigation_](#%E5%BC%80%E6%BA%90%E5%AF%BC%E8%88%AA-open-source-navigation)\r
  - [\u7F16\u89E3\u7801/\u52A0\u89E3\u5BC6 _Cryptography_](#%E7%BC%96%E8%A7%A3%E7%A0%81%E5%8A%A0%E8%A7%A3%E5%AF%86-cryptography)\r
  - [\u5A01\u80C1\u60C5\u62A5 _Threat Intelligence_](#%E5%A8%81%E8%83%81%E6%83%85%E6%8A%A5-threat-intelligence)\r
  - [\u7F51\u7EDC\u7A7A\u95F4\u6D4B\u7ED8 _Cyberspace Search Engine_](#%E7%BD%91%E7%BB%9C%E7%A9%BA%E9%97%B4%E6%B5%8B%E7%BB%98-cyberspace-search-engine)\r
  - [\u5F00\u6E90\u60C5\u62A5 _Open-Source Intelligence_](#%E5%BC%80%E6%BA%90%E6%83%85%E6%8A%A5-open-source-intelligence)\r
  - [\u653B\u9632\u76F8\u5173 _Offensive Security_](#%E6%94%BB%E9%98%B2%E7%9B%B8%E5%85%B3-offensive-security)\r
  - [\u6F0F\u6D1E\u76F8\u5173 _Vulnerabilities_](#%E6%BC%8F%E6%B4%9E%E7%9B%B8%E5%85%B3-vulnerabilities)\r
  - [\u793E\u533A/\u77E5\u8BC6\u5E93 _Open-Source Resources_](#%E7%A4%BE%E5%8C%BA%E7%9F%A5%E8%AF%86%E5%BA%93-open-source-resources)\r
  - [\u5DE5\u5177\u96C6 _Open-Source Toolkit_](#%E5%B7%A5%E5%85%B7%E9%9B%86-open-source-toolkit)\r
- [\u4FE1\u606F\u6536\u96C6 _Reconnaissance_](#%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86-reconnaissance)\r
  - [\u7EFC\u5408\u5DE5\u5177 _Nice Tools_](#%E7%BB%BC%E5%90%88%E5%B7%A5%E5%85%B7-nice-tools)\r
  - [IP/\u57DF\u540D/\u5B50\u57DF\u540D _IP/Domain/Subdomain_](#ip%E5%9F%9F%E5%90%8D%E5%AD%90%E5%9F%9F%E5%90%8D-ipdomainsubdomain)\r
  - [\u6307\u7EB9\u8BC6\u522B _Fingerprint_](#%E6%8C%87%E7%BA%B9%E8%AF%86%E5%88%AB-fingerprint)\r
  - [\u626B\u63CF/\u7206\u7834 _Brute Force_](#%E6%89%AB%E6%8F%8F%E7%88%86%E7%A0%B4-brute-force)\r
    - [\u626B\u63CF/\u7206\u7834\u5DE5\u5177 _Brute Force Tools_](#%E6%89%AB%E6%8F%8F%E7%88%86%E7%A0%B4%E5%B7%A5%E5%85%B7-brute-force-tools)\r
    - [\u626B\u63CF/\u7206\u7834\u5B57\u5178 _Brute Force Dictionaries_](#%E6%89%AB%E6%8F%8F%E7%88%86%E7%A0%B4%E5%AD%97%E5%85%B8-brute-force-dictionaries)\r
    - [\u5B57\u5178\u751F\u6210 _Generate a Custom Dictionary_](#%E5%AD%97%E5%85%B8%E7%94%9F%E6%88%90-generate-a-custom-dictionary)\r
    - [\u9ED8\u8BA4\u53E3\u4EE4\u67E5\u8BE2 _Default Credentials_](#%E9%BB%98%E8%AE%A4%E5%8F%A3%E4%BB%A4%E6%9F%A5%E8%AF%A2-default-credentials)\r
  - [\u793E\u4F1A\u5DE5\u7A0B\u5B66 _Social Engineering_](#%E7%A4%BE%E4%BC%9A%E5%B7%A5%E7%A8%8B%E5%AD%A6-social%C2%A0engineering)\r
    - [\u51ED\u636E\u6CC4\u9732 _Leaked Credentials_](#%E5%87%AD%E6%8D%AE%E6%B3%84%E9%9C%B2-leaked-credentials)\r
    - [\u90AE\u7BB1 _Email_](#%E9%82%AE%E7%AE%B1-email)\r
    - [\u77ED\u4FE1 _SMS_](#%E7%9F%AD%E4%BF%A1-sms)\r
    - [\u9493\u9C7C _Phishing_](#%E9%92%93%E9%B1%BC-phishing)\r
  - [\u79FB\u52A8\u7AEF _Mobile_](#%E7%A7%BB%E5%8A%A8%E7%AB%AF-mobile)\r
- [\u6F0F\u6D1E\u7814\u7A76 _Vulnerability Research_](#%E6%BC%8F%E6%B4%9E%E7%A0%94%E7%A9%B6-vulnerability-research)\r
  - [\u6F0F\u6D1E\u73AF\u5883 _Vulnerable Environments_](#%E6%BC%8F%E6%B4%9E%E7%8E%AF%E5%A2%83-vulnerable-environments)\r
  - [PoC _Proof of Concept_](#poc-proof-of-concept)\r
- [\u6F0F\u6D1E\u5229\u7528 _Exploits_](#%E6%BC%8F%E6%B4%9E%E5%88%A9%E7%94%A8-exploits)\r
  - [\u7EFC\u5408\u5DE5\u5177 _Nice Tools_](#%E7%BB%BC%E5%90%88%E5%B7%A5%E5%85%B7-nice-tools)\r
  - [\u53CD\u5E8F\u5217\u5316 _Deserialization_](#%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96-deserialization)\r
  - [\u4EE3\u7801\u5BA1\u8BA1 _Code Audit_](#%E4%BB%A3%E7%A0%81%E5%AE%A1%E8%AE%A1-code-audit)\r
  - [\u6570\u636E\u5E93 _Database_](#%E6%95%B0%E6%8D%AE%E5%BA%93-database)\r
  - [\u4FE1\u606F\u6CC4\u9732 _Information Disclosure_](#%E4%BF%A1%E6%81%AF%E6%B3%84%E9%9C%B2-information-disclosure)\r
  - [_CMS/OA_](#cmsoa)\r
  - [\u4E2D\u95F4\u4EF6/\u5E94\u7528\u5C42 _Middleware/Application_](#%E4%B8%AD%E9%97%B4%E4%BB%B6%E5%BA%94%E7%94%A8%E5%B1%82-middlewareapplication)\r
- [\u6E17\u900F\u6D4B\u8BD5 _Penertation Testing_](#%E6%B8%97%E9%80%8F%E6%B5%8B%E8%AF%95-penertation-testing)\r
  - [\u7EFC\u5408\u5DE5\u5177 _Nice Tools_](#%E7%BB%BC%E5%90%88%E5%B7%A5%E5%85%B7-nice-tools)\r
  - [_Web_](#web)\r
  - [_DNSLog_](#dnslog)\r
  - [_Payload and Bypass_](#payload-and-bypass)\r
- [\u5185\u7F51\u6E17\u900F _Red Teaming_](#%E5%86%85%E7%BD%91%E6%B8%97%E9%80%8F-red-teaming)\r
  - [\u51ED\u8BC1\u83B7\u53D6 _Credential Access_](#%E5%87%AD%E8%AF%81%E8%8E%B7%E5%8F%96-credential-access)\r
  - [\u540E\u6E17\u900F _Post Exploitation_](#%E5%90%8E%E6%B8%97%E9%80%8F-post-exploitation)\r
  - [\u6743\u9650\u63D0\u5347 _Privilege Escalation_](#%E6%9D%83%E9%99%90%E6%8F%90%E5%8D%87-privilege-escalation)\r
  - [\u6743\u9650\u7EF4\u6301 _Persistence_](#%E6%9D%83%E9%99%90%E7%BB%B4%E6%8C%81-persistence)\r
  - [\u9632\u5FA1\u89C4\u907F _Defense Evasion_](#%E9%98%B2%E5%BE%A1%E8%A7%84%E9%81%BF-defense-evasion)\r
  - [\u5185\u7F51\u7A7F\u900F _Proxy_](#%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F-proxy)\r
  - [\u7AEF\u53E3\u8F6C\u53D1 _Port Forwarding_](#%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91-port-forwarding)\r
  - [\u8F85\u52A9\u5DE5\u5177 _Auxiliary Tools_](#%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7-auxiliary-tools)\r
- [\u57DF\u6E17\u900F _Active Directory / Kerberos_](#%E5%9F%9F%E6%B8%97%E9%80%8F-active-directory--kerberos)\r
  - [\u5F00\u6E90\u8D44\u6E90 _Resources_](#%E5%BC%80%E6%BA%90%E8%B5%84%E6%BA%90-resources)\r
  - [\u57DF\u5185\u4FE1\u606F\u6536\u96C6 Collection and Discovery](#%E5%9F%9F%E5%86%85%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86-collection-and-discovery)\r
  - [\u57DF\u5185\u5DF2\u77E5\u6F0F\u6D1E _Known Vulnerabilities_](#%E5%9F%9F%E5%86%85%E5%B7%B2%E7%9F%A5%E6%BC%8F%E6%B4%9E-known-vulnerabilities)\r
  - [\u57DF\u5185\u6E17\u900F\u65B9\u5F0F Methodology](#%E5%9F%9F%E5%86%85%E6%B8%97%E9%80%8F%E6%96%B9%E5%BC%8F-methodology)\r
  - [ADCS _Active Directory Certificate Services_](#adcs-active-directory-certificate-services)\r
- [\u5B89\u5168\u9632\u62A4 _Defensive Security_](#%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4-defensive-security)\r
  - [\u5185\u5B58\u9A6C\u67E5\u6740 _Memshell Dectect_](#%E5%86%85%E5%AD%98%E9%A9%AC%E6%9F%A5%E6%9D%80-memshell-dectect)\r
  - [Webshell \u67E5\u6740 _Webshell Dectect_](#webshell-%E6%9F%A5%E6%9D%80-webshell-dectect)\r
  - [\u653B\u51FB\u7814\u5224 _Blue Teaming_](#%E6%94%BB%E5%87%BB%E7%A0%94%E5%88%A4-blue-teaming)\r
  - [\u57FA\u7EBF\u52A0\u56FA _Enforcement_](#%E5%9F%BA%E7%BA%BF%E5%8A%A0%E5%9B%BA-enforcement)\r
  - [\u52D2\u7D22\u75C5\u6BD2 _Ransomware_](#%E5%8B%92%E7%B4%A2%E7%97%85%E6%AF%92-ransomware)\r
  - [\u5F00\u6E90\u871C\u7F50 _Open-Source Honeypot_](#%E5%BC%80%E6%BA%90%E8%9C%9C%E7%BD%90-open-source-honeypot)\r
- [\u4E91\u5B89\u5168 _Cloud Security_](#%E4%BA%91%E5%AE%89%E5%85%A8-cloud-security)\r
  - [\u5F00\u6E90\u8D44\u6E90 _Resources_](#%E5%BC%80%E6%BA%90%E8%B5%84%E6%BA%90-resources)\r
  - [\u4E91\u5B89\u5168\u77E9\u9635 _Cloud Matrices_](#%E4%BA%91%E5%AE%89%E5%85%A8%E7%9F%A9%E9%98%B5-cloud-matrices)\r
  - [\u4E91\u6F0F\u6D1E\u73AF\u5883 _Vulnerable Cloud Environments_](#%E4%BA%91%E6%BC%8F%E6%B4%9E%E7%8E%AF%E5%A2%83-vulnerable-cloud-environments)\r
  - [\u4E91\u670D\u52A1 _Cloud Services_](#%E4%BA%91%E6%9C%8D%E5%8A%A1-cloud-services)\r
  - [\u4E91\u539F\u751F _Cloud Native_](#%E4%BA%91%E5%8E%9F%E7%94%9F-cloud-native)\r
- [\u79FB\u52A8\u7AEF\u5B89\u5168 _Mobile Security_](#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%AE%89%E5%85%A8-mobile-security)\r
  - [\u5C0F\u7A0B\u5E8F _Mini Program_](#%E5%B0%8F%E7%A8%8B%E5%BA%8F-mini-program)\r
  - [_APK_](#apk)\r
  - [_SessionKey_](#sessionkey)\r
- [\u9006\u5411\u5DE5\u7A0B _Reverse engineering_](#%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B-reverse-engineering)\r
- [\u63D0\u9AD8\u751F\u4EA7\u529B\u7684\u8F85\u52A9\u5DE5\u5177](#%E6%8F%90%E9%AB%98%E7%94%9F%E4%BA%A7%E5%8A%9B%E7%9A%84%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7)\r
  - [_Shell_](#shell)\r
  - [_Chrome Extensions_](#chrome-extensions)\r
  - [_Infrastructure_](#infrastructure)\r
- [\u63D0\u9AD8\u751F\u4EA7\u529B\u7684\u4F7F\u7528\u59FF\u52BF](#%E6%8F%90%E9%AB%98%E7%94%9F%E4%BA%A7%E5%8A%9B%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF)\r
  - [\u5982\u4F55\u901A\u8FC7.bat \u4F7F\u7528 alias](#%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87bat-%E4%BD%BF%E7%94%A8-alias)\r
  - [\u5982\u4F55\u901A\u8FC7.bat \u6FC0\u6D3B conda \u5E76\u8FD0\u884C py](#%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87bat-%E6%BF%80%E6%B4%BB-conda-%E5%B9%B6%E8%BF%90%E8%A1%8C-py)\r
  - [\u5982\u4F55\u914D\u5408 tabby \u5B9E\u73B0\u9AD8\u6548\u64CD\u4F5C](#%E5%A6%82%E4%BD%95%E9%85%8D%E5%90%88-tabby-%E5%AE%9E%E7%8E%B0%E9%AB%98%E6%95%88%E6%93%8D%E4%BD%9C)\r
  - [\u5982\u4F55\u89E3\u51B3 cmd \u4E2D\u6587\u4E71\u7801](#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3-cmd-%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81)\r
\r
## \u9879\u76EE\u5BFC\u822A _Project Navigation_\r
\r
### \u901F\u67E5\u6587\u6863 _CheatSheets_\r
\r
\u6233\u8FD9\u91CC [Click Here](https://github.com/Threekiii/Awesome-Redteam/blob/master/cheatsheets/)\r
\r
\`\`\`\r
DefaultCreds-Cheat-Sheet.csv\r
Huawei-iBMC-DefaultCreds.csv\r
Huawei-Product-Cheat-Sheet.csv\r
WeakPassword-Cheat-Sheet.csv\r
\u5B89\u5168\u5382\u5546\u53CA\u5B98\u7F51\u94FE\u63A5\u901F\u67E5.txt\r
\`\`\`\r
\r
### \u4E00\u4E9B\u4EE3\u7801 _Scripts_\r
\r
\u6233\u8FD9\u91CC [Click Here](https://github.com/Threekiii/Awesome-Redteam/blob/master/scripts/)\r
\r
\`\`\`\r
ShellcodeWrapper: Shellcode\u52A0\u5BC6\r
AntivirusScanner: \u6740\u8F6F\u8FDB\u7A0B\u68C0\u6D4B\u811A\u672C\r
runtime-exec-payloads.html: java.lang.Runtime.exec() Payloads\u751F\u6210 \r
Ascii2Char: ASCII\u7801\u548C\u5B57\u7B26\u4E92\u76F8\u8F6C\u6362\u811A\u672C \u4FEE\u6539webshell\u6587\u4EF6\u540D\u5BC6\u7801 \r
Weakpass_Generator: \u5728\u7EBF\u5F31\u5BC6\u7801\u751F\u6210\u5DE5\u5177 \u6C49\u5316\u7248\r
Godzilla_Decryptor: \u54E5\u65AF\u62C9\u6D41\u91CF\u89E3\u5BC6\r
Behinder4_Key_Bruteforce: \u51B0\u874E4\u5BC6\u94A5\u7206\u7834\r
Flask_Session_Decryptor: Flask session\u6CE8\u5165\u89E3\u5BC6\r
\`\`\`\r
\r
### \u653B\u9632\u77E5\u8BC6 _Tips_\r
\r
\u6233\u8FD9\u91CC [Click Here](https://github.com/Threekiii/Awesome-Redteam/blob/master/tips/)\r
\r
\`\`\`\r
\u4FE1\u606F\u6536\u96C6-\u654F\u611F\u4FE1\u606F\u6536\u96C6\r
\u5185\u7F51\u6E17\u900F-\u514D\u6740\r
\u5185\u7F51\u6E17\u900F-\u9690\u85CF\r
\u5185\u7F51\u6E17\u900F-Pentesting AD Mindmap\r
\u5B89\u5168\u67B6\u6784-\u7F51\u7EDC\u653B\u51FB\u4E0E\u9632\u5FA1\u56FE\u8C31\r
\u5E73\u53F0\u642D\u5EFA-DNS Log\r
\u6D41\u91CF\u5206\u6790-CobaltStrike\r
\u6D41\u91CF\u5206\u6790-Webshell\r
\u793E\u4F1A\u5DE5\u7A0B\u5B66-\u9493\u9C7C\u90AE\u4EF6\u4E3B\u9898\u6C47\u603B\r
\u9006\u5411\u5206\u6790-\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53CD\u7F16\u8BD1\r
\`\`\`\r
\r
## \u5F00\u6E90\u5BFC\u822A _Open-Source Navigation_\r
\r
### \u7F16\u89E3\u7801/\u52A0\u89E3\u5BC6 _Cryptography_\r
\r
- Online:\r
  - http://www.ip33.com/\r
  - https://evilcos.me/lab/xssee/\r
  - http://www.metools.info/\r
  - https://www.107000.com/\r
  - https://github.com/wangyiwy/oktools\r
  - http://www.hiencode.com/\r
  - http://www.atoolbox.net/\r
  - https://www.sojson.com/\r
  - https://the-x.cn/\r
- Offline:\r
  - https://github.com/Ciphey/Ciphey\r
  - https://github.com/gchq/CyberChef\r
  - http://1o1o.xyz/bo_ctfcode.html\r
  - https://github.com/guyoung/CaptfEncoder\r
- MD5:\r
  - https://www.cmd5.org/\r
  - https://www.somd5.com/\r
  - https://www.onlinehashcrack.com/\r
  - https://crackstation.net/\r
  - https://crack.sh/\r
  - https://passwordrecovery.io/\r
  - https://md5decrypt.net/en/Sha256/\r
  - https://hashes.com/en/decrypt/hash\r
- RSA:\r
  - https://www.ssleye.com/ssltool/\r
  - https://www.lddgo.net/en/encrypt/rsa work with .pem\r
- Encode/Decode:\r
  - GB2312: http://code.mcdvisa.com/\r
  - Unicode: https://www.compart.com/en/unicode/\r
  - UUencode: http://web.chacuo.net/charsetuuencode\r
  - Escape/Unescape: https://tool.chinaz.com/tools/escape.aspx\r
  - HTML \u5B9E\u4F53\u7F16\u7801: https://zh.rakko.tools/tools/21/\r
- Regular Expressions:\r
  - https://regex101.com/\r
  - https://github.com/VincentSit/ChinaMobilePhoneNumberRegex\r
  - https://github.com/any86/any-rule\r
\r
### \u5A01\u80C1\u60C5\u62A5 _Threat Intelligence_\r
\r
- Virustotal: https://www.virustotal.com/\r
- \u817E\u8BAF\u54C8\u52C3\u5206\u6790\u7CFB\u7EDF: https://habo.qq.com/tool/index\r
- \u5FAE\u6B65\u5728\u7EBF\u5A01\u80C1\u60C5\u62A5: https://x.threatbook.com/\r
- \u5947\u5B89\u4FE1\u5A01\u80C1\u60C5\u62A5: https://ti.qianxin.com/\r
- 360 \u5A01\u80C1\u60C5\u62A5: https://ti.360.net/\r
- \u7F51\u7EDC\u5B89\u5168\u5A01\u80C1\u4FE1\u606F\u5171\u4EAB\u5E73\u53F0: https://share.anva.org.cn/web/publicity/listPhishing\r
- \u5B89\u6052\u5A01\u80C1\u60C5\u62A5: https://ti.dbappsecurity.com.cn/\r
- \u706B\u7EBF\u5B89\u5168\u5E73\u53F0: https://www.huoxian.cn\r
- \u77E5\u9053\u521B\u5B87\u9ED1\u5BA2\u65B0\u95FB\u6D41: https://hackernews.cc/\r
- Hacking8 \u5B89\u5168\u4FE1\u606F\u6D41: https://i.hacking8.com/\r
- SecWiki \u5B89\u5168\u4FE1\u606F\u6D41: https://www.sec-wiki.com/\r
\r
### \u7F51\u7EDC\u7A7A\u95F4\u6D4B\u7ED8 _Cyberspace Search Engine_\r
\r
- Fofa: https://fofa.info/\r
- Shodan: https://www.shodan.io/\r
- ZoomEye: https://www.zoomeye.org/\r
- \u9E70\u56FE: https://hunter.qianxin.com/\r
- \u8C1B\u542C: https://www.ditecting.com/\r
- Quake: https://quake.360.cn/quake/\r
- Censys: https://search.censys.io/\r
- Netlas: https://app.netlas.io/domains/\r
- Wayback Machine: \u7F51\u9875\u5386\u53F2\u7F13\u5B58 https://web.archive.org/\r
- VisualPing: \u7F51\u9875\u53D8\u52A8\u76D1\u6D4B https://visualping.io/\r
- Dark Web Exposure: https://www.immuniweb.com/darkweb/\r
- SG TCP/IP \u7AEF\u53E3\u6570\u636E\u5E93: https://www.speedguide.net/ports.php\r
- Google Hacking Database:\r
  - https://www.exploit-db.com/google-hacking-database\r
  - https://github.com/cipher387/Dorks-collections-list\r
  - https://cxsecurity.com/dorks/\r
- Google Hacking Online:\r
  - https://dorks.faisalahmed.me/\r
  - https://pentest-tools.com/information-gathering/google-hacking\r
  - http://advangle.com/\r
  - https://0iq.me/gip/\r
- Google Hacking Cli:\r
  - https://github.com/obheda12/GitDorker\r
  - https://github.com/six2dez/dorks_hunter\r
- Github Dork:\r
  - https://github.com/search/advanced\r
  - https://github.com/obheda12/GitDorker\r
  - https://github.com/damit5/gitdorks_go\r
\r
### \u5F00\u6E90\u60C5\u62A5 _Open-Source Intelligence_\r
\r
- OSINT Resource List: https://start.me/p/rx6Qj8/nixintel-s-osint-resource-list\r
- OSINT Framework: https://osintframework.com/\r
- OSINT Handbook: https://i-intelligence.eu/uploads/public-documents/OSINT_Handbook_2020.pdf\r
- Public APIs:\r
  - https://www.postman.com/explore/\r
  - https://rapidapi.com/\r
- Discover secret API keys: https://serene-agnesi-57a014.netlify.app/\r
- Source code Search Engine:\r
  - https://publicwww.com/\r
  - https://searchcode.com/\r
\r
### \u653B\u9632\u76F8\u5173 _Offensive Security_\r
\r
- Red Teaming and Offensive Security:\r
  - https://www.ired.team/\r
  - https://www.thehacker.recipes/\r
  - https://ppn.snovvcrash.rocks/\r
  - https://book.hacktricks.xyz/\r
  - https://blog.harmj0y.net/\r
  - https://hausec.com/domain-penetration-testing/\r
  - https://dirkjanm.io/\r
  - https://casvancooten.com/\r
  - https://evasions.checkpoint.com/\r
  - https://redteam.guide/docs/definitions\r
  - https://github.com/HadessCS/Red-team-Interview-Questions\r
- Blue Teaming and Defensive Security:\r
  - https://github.com/Purp1eW0lf/Blue-Team-Notes\r
- OPSEC:\r
  - https://github.com/WesleyWong420/OPSEC-Tradecraft\r
\r
### \u6F0F\u6D1E\u76F8\u5173 _Vulnerabilities_\r
\r
- \u56FD\u5185\u4FE1\u606F\u62AB\u9732\u5E73\u53F0:\r
  - \u56FD\u5BB6\u4FE1\u606F\u5B89\u5168\u6F0F\u6D1E\u5E93: https://www.cnnvd.org.cn/\r
  - \u56FD\u5BB6\u4E92\u8054\u7F51\u5E94\u6025\u4E2D\u5FC3: https://www.cert.org.cn/\r
  - 360 \u7F51\u7EDC\u5B89\u5168\u54CD\u5E94\u4E2D\u5FC3: https://cert.360.cn/\r
  - \u77E5\u9053\u521B\u5B87\u6F0F\u6D1E\u5E93: https://www.seebug.org/\r
  - \u957F\u4EAD\u6F0F\u6D1E\u5E93: https://stack.chaitin.com/vuldb/\r
  - \u963F\u91CC\u4E91\u6F0F\u6D1E\u5E93: https://avd.aliyun.com/high-risk/list\r
  - PeiQi \u6F0F\u6D1E\u5E93: https://peiqi.wgpsec.org/\r
- \u56FD\u5916\u4FE1\u606F\u62AB\u9732\u5E73\u53F0:\r
  - https://www.hackerone.com/\r
  - https://cve.mitre.org/\r
  - https://nvd.nist.gov/\r
  - https://www.rapid7.com/db/\r
  - https://packetstormsecurity.com/files/tags/exploit\r
  - https://github.com/trickest/cve\r
- Exploits \u641C\u7D22\u5F15\u64CE:\r
  - https://sploitus.com/\r
  - https://www.exploit-db.com/ kali \u4E2D\u53EF\u4EE5\u914D\u5408\u547D\u4EE4 \`searchsploit <keywords>\` \u4F7F\u7528\r
\r
### \u793E\u533A/\u77E5\u8BC6\u5E93 _Open-Source Resources_\r
\r
- \u5148\u77E5\u793E\u533A: https://xz.aliyun.com/\r
- Infocon: https://infocon.org/\r
- ffffffff0x \u56E2\u961F\u5B89\u5168\u77E5\u8BC6\u6846\u67B6: https://github.com/ffffffff0x/1earn\r
- \u72FC\u7EC4\u516C\u5F00\u77E5\u8BC6\u5E93: https://wiki.wgpsec.org/\r
- Mitre ATT&CK:\r
  - matrices: https://attack.mitre.org/matrices/enterprise\r
  - techniques: http://attack.mitre.org/techniques/enterprise/\r
- Hacking articles: https://www.hackingarticles.in/\r
- PostSwigger blog: https://portswigger.net/blog\r
- InGuardians Labs blog: https://www.inguardians.com/\r
- Pentest Workflow: https://pentest.mxhx.org/\r
- Pentest cheatsheet: https://pentestbook.six2dez.com/\r
- Programming/Toolkit/Command/OS/Shortcuts Cheatsheets:\r
  - https://cheatsheets.zip/\r
  - https://learnxinyminutes.com/\r
\r
### \u5DE5\u5177\u96C6 _Open-Source Toolkit_\r
\r
- Nice Tools:\r
  - https://forum.ywhack.com/bountytips.php?tools\r
  - https://github.com/knownsec/404StarLink\r
  - https://pentest-tools.com/\r
- Beautifier:\r
  - http://web.chacuo.net/formatsh\r
  - https://beautifier.io/\r
  - http://jsnice.org/\r
- Reverse Shell Generator:\r
  - https://www.revshells.com/\r
  - https://forum.ywhack.com/reverse-shell/\r
  - https://tex2e.github.io/reverse-shell-generator/index.html\r
  - https://github.com/0dayCTF/reverse-shell-generator\r
- File Download Generator:\r
  - https://github.com/r0eXpeR/File-Download-Generator\r
- Shorten URLs: https://a.f8x.io/\r
\r
## \u4FE1\u606F\u6536\u96C6 _Reconnaissance_\r
\r
### \u7EFC\u5408\u5DE5\u5177 _Nice Tools_\r
\r
- AlliN: https://github.com/P1-Team/AlliN\r
- fscan: https://github.com/shadow1ng/fscan\r
- TscanPlus: https://github.com/TideSec/TscanPlus\r
- kscan: https://github.com/lcvvvv/kscan\r
- Kunyu: https://github.com/knownsec/Kunyu\r
- OneForAll: https://github.com/shmilylty/OneForAll\r
- ShuiZe: https://github.com/0x727/ShuiZe_0x727\r
- FofaX: https://github.com/xiecat/fofax\r
- Fofa Viewer: https://github.com/wgpsec/fofa_viewer\r
- ENScan_GO: https://github.com/wgpsec/ENScan_GO\r
- Amass: https://github.com/owasp-amass/amass\r
\r
### IP/\u57DF\u540D/\u5B50\u57DF\u540D _IP/Domain/Subdomain_\r
\r
- IP \u4FE1\u606F\u6536\u96C6:\r
  - https://www.ipuu.net/\r
  - https://site.ip138.com/\r
  - https://myip.ms/\r
  - https://ipwhois.cnnic.net.cn\r
- \u591A\u4E2A\u5730\u70B9 Ping \u670D\u52A1\u5668:\r
  - https://ping.chinaz.com/\r
  - https://www.host-tracker.com/\r
  - https://www.webpagetest.org/\r
  - https://dnscheck.pingdom.com/\r
- IP \u53CD\u67E5\u57DF\u540D:\r
  - https://site.ip138.com/\r
  - https://x.threatbook.cn/\r
  - https://www.virustotal.com/\r
- Whois \u4FE1\u606F\u6536\u96C6:\r
  - https://whois.chinaz.com/\r
  - https://whois.aliyun.com/\r
  - https://who.is/\r
  - https://www.whoxy.com/\r
- DNS \u4FE1\u606F\u6536\u96C6:\r
  - https://hackertarget.com/find-dns-host-records\r
  - https://dnsdumpster.com\r
  - https://dnsdb.io/zh-cn\r
  - https://centralops.net/co/\r
  - https://viewdns.info/\r
  - https://dnsdumpster.com/\r
  - https://rapiddns.io/\r
- ASN \u4FE1\u606F\u6536\u96C6:\r
  - https://wq.apnic.net/\r
  - https://bgp.he.net/\r
  - https://bgpview.io/\r
- TLS \u8BC1\u4E66\u67E5\u8BE2:\r
  - https://censys.io\r
  - https://crt.sh\r
\r
### \u6307\u7EB9\u8BC6\u522B _Fingerprint_\r
\r
- Fingerprint Collection:\r
  - https://github.com/r0eXpeR/fingerprint\r
- Fingerprint Reconnaissance:\r
  - https://github.com/EASY233/Finger\r
  - https://github.com/EdgeSecurityTeam/EHole\r
  - https://github.com/0x727/ObserverWard\r
  - https://github.com/TideSec/TideFinger_Go\r
  - https://github.com/zhzyker/dismap\r
  - https://www.webshell.cc/4697.html\r
  - http://www.yunsee.cn/ online\r
- Waf Checks:\r
  - https://github.com/stamparm/identYwaf\r
  - https://github.com/EnableSecurity/wafw00f\r
  - https://github.com/MISP/misp-warninglists\r
\r
### \u626B\u63CF/\u7206\u7834 _Brute Force_\r
\r
#### \u626B\u63CF/\u7206\u7834\u5DE5\u5177 _Brute Force Tools_\r
\r
- Port:\r
  - https://github.com/antirez/hping\r
- Subdomain:\r
  - https://github.com/projectdiscovery/subfinder\r
  - https://github.com/knownsec/ksubdomain\r
- Web:\r
  - https://github.com/pingc0y/URLFinder\r
  - https://github.com/s0md3v/Arjun\r
  - https://github.com/OJ/gobuster\r
  - https://github.com/jaeles-project/gospider\r
  - https://github.com/xmendez/wfuzz\r
- Directory:\r
  - https://github.com/maurosoria/dirsearch\r
  - https://github.com/H4ckForJob/dirmap\r
  - https://github.com/ffuf/ffuf\r
- Password:\r
  - https://github.com/vanhauser-thc/thc-hydra\r
  - https://github.com/openwall/john\r
  - https://github.com/hashcat/hashcat\r
  - https://github.com/galkan/crowbar supports sshkey and openvpn\r
  - https://github.com/evilsocket/legba/\r
- Json web token (JWT):\r
  - https://jwt.io/\r
  - https://github.com/ticarpi/jwt_tool\r
  - https://github.com/brendan-rius/c-jwt-cracker\r
  - https://github.com/wallarm/jwt-secrets/blob/master/jwt.secrets.list\r
\r
#### \u626B\u63CF/\u7206\u7834\u5B57\u5178 _Brute Force Dictionaries_\r
\r
- Wordlists for all:\r
  - https://github.com/danielmiessler/SecLists 46.4k star\r
  - https://github.com/SexyBeast233/SecDictionary + ffuf\r
  - https://github.com/insightglacier/Dictionary-Of-Pentesting\r
  - https://github.com/TheKingOfDuck/fuzzDicts\r
  - https://github.com/gh0stkey/Web-Fuzzing-Box\r
  - https://github.com/a3vilc0de/PentesterSpecialDict\r
  - https://github.com/Bo0oM/fuzz.txt\r
  - https://github.com/assetnote/wordlists\r
- Web fuzz wordlists:\r
  - https://github.com/lutfumertceylan/top25-parameter\r
- Others (not frequently used):\r
  - https://github.com/danielmiessler/SecLists/tree/master/Discovery/Web-Content\r
  - https://github.com/assetnote/commonspeak2-wordlists/tree/master/wordswithext\r
  - https://github.com/random-robbie/bruteforce-lists\r
  - https://github.com/google/fuzzing/tree/master/dictionaries\r
  - https://github.com/six2dez/OneListForAll\r
\r
#### \u5B57\u5178\u751F\u6210 _Generate a Custom Dictionary_\r
\r
- Online:\r
  - Generate wordlists: https://weakpass.com/generate\r
  - Generate subdomains and wordlists: https://weakpass.com/generate/domains\r
  - \u6C49\u5B57\u8F6C\u62FC\u97F3: https://www.aies.cn/pinyin.htm\r
  - \u5BC6\u7801\u731C\u89E3: https://www.hacked.com.cn/pass.html\r
- Private Deployment:\r
  - Generate wordlists(offline): https://github.com/zzzteph/weakpass\r
  - Generate subdomains and wordlists(offline): https://github.com/zzzteph/probable_subdomains\r
- Offline:\r
  - pydictor: \u4E00\u4E2A\u5F3A\u5927\u5B9E\u7528\u7684\u9ED1\u5BA2\u66B4\u529B\u7834\u89E3\u5B57\u5178\u5EFA\u7ACB\u5DE5\u5177 https://github.com/LandGrey/pydictor/\r
  - crunch:\r
    - Kali/Linux: https://sourceforge.net/projects/crunch-wordlist\r
    - Windows: https://github.com/shadwork/Windows-Crunch\r
\r
#### \u9ED8\u8BA4\u53E3\u4EE4\u67E5\u8BE2 _Default Credentials_\r
\r
- Default Credentials Cheat Sheet: 3468 \u4E2A\u9ED8\u8BA4\u5BC6\u7801 https://github.com/ihebski/DefaultCreds-cheat-sheet\r
- datarecovery: \u5728\u7EBF\u9ED8\u8BA4\u53E3\u4EE4\u67E5\u8BE2 https://datarecovery.com/rd/default-passwords/\r
- cirt.net: \u5728\u7EBF\u9ED8\u8BA4\u53E3\u4EE4\u67E5\u8BE2 https://cirt.net/passwords\r
- \u5728\u7EBF\u8DEF\u7531\u5668\u5BC6\u7801\u67E5\u8BE2:\r
  - https://www.routerpasswords.com/\r
  - https://portforward.com/router-password/\r
  - https://www.cleancss.com/router-default/\r
  - https://www.toolmao.com/baiduapp/routerpwd/\r
  - https://datarecovery.com/rd/default-passwords/\r
\r
### \u793E\u4F1A\u5DE5\u7A0B\u5B66 _Social Engineering_\r
\r
#### \u51ED\u636E\u6CC4\u9732 _Leaked Credentials_\r
\r
- https://have-ibeenpwned.com/\r
- https://breachdirectory.org/\r
\r
#### \u90AE\u7BB1 _Email_\r
\r
- Temporary Email:\r
  - http://24mail.chacuo.net/\r
  - https://www.guerrillamail.com/\r
  - https://rootsh.com/\r
- Snov.io: https://app.snov.io\r
- Phonebook: also works on subdomains and urls https://phonebook.cz\r
- Skymem: https://www.skymem.info\r
- Hunter: https://hunter.io\r
- email-format: https://www.email-format.com/i/search/\r
- \u641C\u90AE\u7BB1: https://souyouxiang.com/find-contact/\r
- theHarvester: also works on subdomains https://github.com/laramies/theHarvester\r
- Verify emails: https://tools.emailhippo.com/\r
- Accounts registered by email: https://emailrep.io/\r
\r
#### \u77ED\u4FE1 _SMS_\r
\r
- SMS Online:\r
  - https://www.supercloudsms.com/en/\r
  - https://getfreesmsnumber.com/\r
  - https://www.zusms.com/\r
  - https://yunduanxin.net/\r
  - https://www.free-sms-receive.com/\r
  - https://receive-sms.cc/#google_vignette\r
  - https://bestsms.xyz/\r
  - https://smscodeonline.com/\r
\r
#### \u9493\u9C7C _Phishing_\r
\r
- gophish: \u9493\u9C7C\u90AE\u4EF6 https://github.com/gophish/gophish\r
- SpoofWeb: \u4E00\u952E\u90E8\u7F72 https \u9493\u9C7C\u7F51\u7AD9 https://github.com/5icorgi/SpoofWeb\r
\r
### \u79FB\u52A8\u7AEF _Mobile_\r
\r
- \u5C0F\u84DD\u672C: https://www.xiaolanben.com/\r
- \u4E03\u9EA6\u6570\u636E: https://www.qimai.cn/\r
\r
## \u6F0F\u6D1E\u7814\u7A76 _Vulnerability Research_\r
\r
### \u6F0F\u6D1E\u73AF\u5883 _Vulnerable Environments_\r
\r
- Basic:\r
  - Sqli-labs: https://github.com/Audi-1/sqli-labs\r
  - Upload-labs: https://github.com/c0ny1/upload-labs\r
  - Xss-labs: https://github.com/do0dl3/xss-labs\r
  - DVWA: https://github.com/digininja/DVWA\r
  - WebGoat: https://github.com/WebGoat/WebGoat\r
- Comprehensive:\r
  - Vulhub: https://vulhub.org/\r
  - ichunqiu: https://yunjing.ichunqiu.com/\r
  - HackTheBox: https://www.hackthebox.com/\r
  - OWASP Top10: https://owasp.org/www-project-juice-shop/\r
  - Vulstudy: 17 platform based on docker https://github.com/c0ny1/vulstudy\r
  - Vulfocus: https://github.com/fofapro/vulfocus\r
- IoT:\r
  - IoT-vulhub: https://github.com/firmianay/IoT-vulhub\r
- Others:\r
  - FastJsonParty: https://github.com/lemono0/FastJsonParty\r
\r
### PoC _Proof of Concept_\r
\r
> Be careful Malware\uFF0CPOC \u5E93\u6700\u65B0\u7684 CVE \u53EF\u80FD\u5B58\u5728\u6295\u6BD2\u98CE\u9669\u3002\r
\r
- PoC \u5E93:\r
  - https://github.com/wy876/POC\r
  - https://github.com/DawnFlame/POChouse\r
  - https://github.com/coffeehb/Some-PoC-oR-ExP\r
  - https://github.com/luck-ying/Library-POC\r
  - https://github.com/Mr-xn/Penetration_Testing_POC\r
  - https://github.com/nomi-sec/PoC-in-GitHub\r
  - https://github.com/helloexp/0day\r
- PoC \u7F16\u5199:\r
  - https://poc.xray.cool/ online\r
  - https://github.com/zeoxisca/gamma-gui offline\r
\r
## \u6F0F\u6D1E\u5229\u7528 _Exploits_\r
\r
### \u7EFC\u5408\u5DE5\u5177 _Nice Tools_\r
\r
- https://github.com/chaitin/xpoc\r
- https://github.com/chaitin/xray\r
- https://github.com/zhzyker/vulmap\r
- https://github.com/zan8in/afrog\r
- https://github.com/ExpLangcn/NucleiTP\r
\r
### \u53CD\u5E8F\u5217\u5316 _Deserialization_\r
\r
- Java:\r
  - https://github.com/frohoff/ysoserial\r
  - https://github.com/mbechler/marshalsec\r
  - https://github.com/qi4L/JYso\r
  - https://github.com/welk1n/JNDI-Injection-Exploit\r
  - https://github.com/WhiteHSBG/JNDIExploit\r
  - https://github.com/rebeyond/JNDInjector\r
  - https://github.com/A-D-Team/attackRmi\r
- php:\r
  - https://github.com/ambionics/phpggc\r
- Mysql jdbc:\r
  - https://github.com/4ra1n/mysql-fake-server\r
  - https://github.com/dushixiang/evil-mysql-server\r
  - https://github.com/fnmsd/MySQL_Fake_Server\r
\r
### \u4EE3\u7801\u5BA1\u8BA1 _Code Audit_\r
\r
- tabby: https://github.com/wh1t3p1g/tabby\r
\r
### \u6570\u636E\u5E93 _Database_\r
\r
- Redis GUI Client:\r
  - https://github.com/cinience/RedisStudio\r
  - https://github.com/qishibo/AnotherRedisDesktopManager\r
- Redis RCE:\r
  - https://github.com/n0b0dyCN/redis-rogue-server\r
  - https://github.com/Ridter/redis-rce\r
  - https://github.com/yuyan-sec/RedisEXP\r
  - https://github.com/r35tart/RedisWriteFile\r
- MDUT: Multiple Database Utilization Tools https://github.com/SafeGroceryStore/MDUT\r
- odat: Oracle RCE https://github.com/quentinhardy/odat\r
\r
### \u4FE1\u606F\u6CC4\u9732 _Information Disclosure_\r
\r
- GitHack: .git \u6CC4\u9732\u5229\u7528\u811A\u672C https://github.com/lijiejie/GitHack python3 \u6709\u65F6\u65E0\u6CD5\u6062\u590D.git \u76EE\u5F55\uFF0C\u63A8\u8350 python2 \u7248\u672C\r
- GitHack: .git \u6CC4\u9732\u5229\u7528\u811A\u672C https://github.com/BugScanTeam/GitHack python2\r
- dvcs-ripper: .svn\u3001.hg\u3001.cvs \u6CC4\u9732\u5229\u7528\u811A\u672C https://github.com/kost/dvcs-ripper\r
- ds_store_exp: .DS_Store \u6587\u4EF6\u6CC4\u6F0F\u5229\u7528\u811A\u672C https://github.com/lijiejie/ds_store_exp\r
- Hawkeye: GitHub \u6CC4\u9732\u76D1\u63A7\u7CFB\u7EDF https://github.com/0xbug/Hawkeye\r
\r
### _CMS/OA_\r
\r
- TongdaScan_go https://github.com/Fu5r0dah/TongdaScan_go\r
- Apt_t00ls: https://github.com/White-hua/Apt_t00ls\r
- OA-EXPTOOL: https://github.com/LittleBear4/OA-EXPTOOL\r
- DecryptTools: 22\u79CD\u52A0\u89E3\u5BC6 https://github.com/wafinfo/DecryptTools\r
- ncDecode: \u7528\u53CB nc \u89E3\u5BC6 https://github.com/1amfine2333/ncDecode\r
- PassDecode-jar: \u5E06\u8F6F/\u81F4\u8FDC\u89E3\u5BC6 https://github.com/Rvn0xsy/PassDecode-jar\r
- ezOFFICE_Decrypt: \u4E07\u6237\u89E3\u5BC6 https://github.com/wafinfo/ezOFFICE_Decrypt\r
- LandrayDES: \u84DD\u51CC OA \u89E3\u5BC6 https://github.com/zhutougg/LandrayDES\r
\r
### \u4E2D\u95F4\u4EF6/\u5E94\u7528\u5C42 _Middleware/Application_\r
\r
- Confluence:\r
  - ConfluenceMemshell: https://github.com/Lotus6/ConfluenceMemshell\r
  - CVE-2022-26134 Memshell: https://github.com/BeichenDream/CVE-2022-26134-Godzilla-MEMSHELL\r
  - CVE-2023-22527 Memshell: https://github.com/Boogipop/CVE-2023-22527-Godzilla-MEMSHELL\r
- Druid:\r
  - DruidCrack: Druid \u5BC6\u6587\u89E3\u5BC6\u5DE5\u5177 https://github.com/rabbitmask/DruidCrack\r
  - druid_sessions: Druid sessions \u5229\u7528\u5DE5\u5177 https://github.com/yuyan-sec/druid_sessions\r
- Fastjson:\r
  - fastjson-exp: https://github.com/amaz1ngday/fastjson-exp\r
- GitLab:\r
  - CVE-2021-22205: https://github.com/Al1ex/CVE-2021-22205/\r
- Nacos:\r
  - NacosRce: Nacos Hessian \u53CD\u5E8F\u5217\u5316 https://github.com/c0olw/NacosRce/\r
  - nacosleak: \u83B7\u53D6 nacos \u4E2D\u914D\u7F6E\u6587\u4EF6\u4FE1\u606F https://github.com/a1phaboy/nacosleak\r
  - nacosScan: jwt \u786C\u7F16\u7801\u3001api \u672A\u6388\u6743\u6DFB\u52A0\u7528\u6237\u3001\u914D\u7F6E\u8BFB\u53D6 https://github.com/Whoopsunix/nacosScan\r
  - NacosExploitGUI: https://github.com/charonlight/NacosExploitGUI\r
- Nps:\r
  - nps-auth-bypass: nps \u8BA4\u8BC1\u7ED5\u8FC7\u5229\u7528\u5DE5\u5177 https://github.com/carr0t2/nps-auth-bypass\r
- Java:\r
  - jdwp-shellifier: python2 https://github.com/IOActive/jdwp-shellifier\r
  - jdwp-shellifier: https://github.com/Lz1y/jdwp-shellifier\r
- Shiro:\r
  - Shiro rememberMe \u5728\u7EBF\u89E3\u5BC6: https://vulsee.com/tools/shiroDe/shiroDecrypt.html\r
  - shiro_attack: https://github.com/j1anFen/shiro_attack\r
  - shiro_rce_tool: https://github.com/wyzxxz/shiro_rce_tool\r
  - ShiroExploit: https://github.com/feihong-cs/ShiroExploit-Deprecated\r
  - ShiroExp: https://github.com/safe6Sec/ShiroExp\r
  - shiro_key: shiro key \u6536\u96C6 \u76EE\u524D 1k+ https://github.com/yanm1e/shiro_key\r
- Struts:\r
  - Struts2VulsTools: https://github.com/shack2/Struts2VulsTools\r
- Spring:\r
  - SpringBoot-Scan: https://github.com/AabyssZG/SpringBoot-Scan\r
  - Spring_All_Reachable: CVE-2022-22947/CVE-2022-22963 https://github.com/savior-only/Spring_All_Reachable\r
  - SpringBootVulExploit: https://github.com/LandGrey/SpringBootVulExploit\r
  - Spring-cloud-function-SpEL-RCE: CVE-2022-22963 https://github.com/mamba-2021/EXP-POC/tree/main/Spring-cloud-function-SpEL-RCE\r
  - swagger-exp: Swagger REST API \u4FE1\u606F\u6CC4\u9732\u5229\u7528\u5DE5\u5177 https://github.com/lijiejie/swagger-exp\r
  - jasypt decrypt: https://www.devglan.com/online-tools/jasypt-online-encryption-decryption\r
- Heapdump:\r
  - heapdump_tool: heapdump \u654F\u611F\u4FE1\u606F\u67E5\u8BE2\u5DE5\u5177 https://github.com/wyzxxz/heapdump_tool\r
  - Memory Analyzer: HeapDump \u5206\u6790\u5DE5\u5177 https://eclipse.dev/mat/previousReleases.php\r
  - JDumpSpider: HeapDump \u654F\u611F\u4FE1\u606F\u63D0\u53D6\u5DE5\u5177 https://github.com/whwlsfb/JDumpSpider\r
- Tomcat:\r
  - CVE-2020-1938: https://github.com/YDHCUI/CNVD-2020-10487-Tomcat-Ajp-lfi\r
  - ClassHound: https://github.com/LandGrey/ClassHound\r
- Thinkphp:\r
  - ThinkphpGUI: https://github.com/Lotus6/ThinkphpGUI\r
  - thinkphp_gui_tools: https://github.com/bewhale/thinkphp_gui_tools\r
- Weblogic:\r
  - WeblogicTool: https://github.com/KimJun1010/WeblogicTool\r
  - WeblogicScan: https://github.com/dr0op/WeblogicScan\r
  - WeblogicScan: https://github.com/rabbitmask/WeblogicScan\r
  - weblogicScanner: https://github.com/0xn0ne/weblogicScanner\r
  - weblogic-framework: https://github.com/sv3nbeast/weblogic-framework\r
  - CVE-2020-14882: https://github.com/zhzyker/exphub/blob/master/weblogic/cve-2020-14882_rce.py\r
- WebSocket:\r
  - wscat: https://github.com/websockets/wscat\r
- vCenter:\r
  - VcenterKiller: \u9488\u5BF9 Vcenter \u7684\u7EFC\u5408\u5229\u7528\u5DE5\u5177 https://github.com/Schira4396/VcenterKiller\r
  - VcenterKit: Vcenter \u7EFC\u5408\u6E17\u900F\u5229\u7528\u5DE5\u5177\u5305 https://github.com/W01fh4cker/VcenterKit\r
- Zookeeper:\r
  - ZooInspector: ZooKeeper \u5BA2\u6237\u7AEF\u76D1\u63A7\u8F6F\u4EF6 https://issues.apache.org/jira/secure/attachment/12436620/ZooInspector.zip\r
  - apache-zookeeper: zkCli.sh \u5BA2\u6237\u7AEF\u547D\u4EE4\u8FDE\u63A5 https://archive.apache.org/dist/zookeeper/zookeeper-3.5.6/\r
\r
## \u6E17\u900F\u6D4B\u8BD5 _Penertation Testing_\r
\r
### \u7EFC\u5408\u5DE5\u5177 _Nice Tools_\r
\r
- Yakit: https://github.com/yaklang/yakit\r
- Burpsuite: https://portswigger.net/burp\r
- Burpsuite Extensions:\r
  - HaE: \u9AD8\u4EAE\u6807\u8BB0\u4E0E\u4FE1\u606F\u63D0\u53D6\u8F85\u52A9\u578B\u63D2\u4EF6 https://github.com/gh0stkey/HaE\r
  - Log4j2Scan: Log4j \u4E3B\u52A8\u626B\u63CF\u63D2\u4EF6 https://github.com/whwlsfb/Log4j2Scan\r
  - RouteVulScan: \u68C0\u6D4B\u8106\u5F31\u8DEF\u5F84\u63D2\u4EF6 https://github.com/F6JO/RouteVulScan\r
  - BurpCrypto: \u786C\u7F16\u7801\u5FEB\u4E50\u6E17\u900F\u63D2\u4EF6 https://github.com/whwlsfb/BurpCrypto\r
\r
### _Web_\r
\r
- XSS:\r
  - XSS Chop: https://xsschop.chaitin.cn/demo/\r
  - XSS/CSRF \u7F16\u7801\u8F6C\u6362: https://evilcos.me/lab/xssor/\r
  - HTML5 Security Cheatsheet: XSS \u653B\u51FB\u5411\u91CF\u5B66\u4E60/\u53C2\u8003 https://html5sec.org/\r
- Local File Inclusion:\r
  - https://github.com/hansmach1ne/lfimap\r
  - https://github.com/mzfr/liffy\r
\r
### _DNSLog_\r
\r
- Online:\r
  - http://ceye.io/\r
  - http://dnslog.cn/\r
  - https://dig.pm/\r
- Alphalog: dns/http/rmi/ldap https://github.com/AlphabugX/Alphalog\r
- DNS rebinding: https://lock.cmpxchg8b.com/rebinder.html\r
- DNSLog-GO: \u81EA\u5EFA\u79C1\u6709\u5E73\u53F0 https://github.com/lanyi1998/DNSlog-GO\r
\r
### _Payload and Bypass_\r
\r
- Bypass HTTP 40X errors:\r
  - https://github.com/yunemse48/403bypasser\r
  - https://github.com/lobuhi/byp4xx\r
  - https://github.com/Dheerajmadhukar/4-ZERO-3\r
  - https://github.com/devploit/nomore403\r
- PayloadsAllTheThings: https://github.com/swisskyrepo/PayloadsAllTheThings\r
- java.lang.Runtime.exec() Payload: https://payloads.net/Runtime.exec/\r
- PHP Generic Gadget Chains: PHP \u53CD\u5E8F\u5217\u5316 Payload https://github.com/ambionics/phpggc\r
- PHPFuck: https://github.com/splitline/PHPFuck\r
- JSFuck: http://www.jsfuck.com/\r
- JavaScript Deobfuscator and Unpacker: https://lelinhtinh.github.io/de4js/\r
- Gopherus: SSRF \u751F\u6210 gopher \u94FE\u63A5 https://github.com/tarunkant/Gopherus python2\r
- CVE-2021-44228-PoC-log4j-bypass-words: https://github.com/Puliczek/CVE-2021-44228-PoC-log4j-bypass-words\r
\r
## \u5185\u7F51\u6E17\u900F _Red Teaming_\r
\r
### \u51ED\u8BC1\u83B7\u53D6 _Credential Access_\r
\r
- Credential Dumping:\r
  - LaZagne: https://github.com/AlessandroZ/LaZagne\r
  - WirelessKeyView: https://www.nirsoft.net/utils/wireless_key.html\r
  - Windows credential manager: https://www.nirsoft.net/utils/credentials_file_view.html\r
  - Pillager: https://github.com/qwqdanchun/Pillager/\r
  - searchall: https://github.com/Naturehi666/searchall\r
- Local Enumeration:\r
  - HackBrowserData: https://github.com/moonD4rk/HackBrowserData\r
  - BrowserGhost: https://github.com/QAX-A-Team/BrowserGhost\r
  - chrome: http://www.nirsoft.net/utils/chromepass.html\r
  - firefox: https://github.com/unode/firefox_decrypt\r
  - foxmail: https://securityxploded.com/foxmail-password-decryptor.php\r
  - mobaxterm: https://github.com/HyperSine/how-does-MobaXterm-encrypt-password\r
  - navicat: https://github.com/Zhuoyuan1/navicat_password_decrypt\r
  - navicat: https://github.com/HyperSine/how-does-navicat-encrypt-password\r
  - sunflower: https://github.com/wafinfo/Sunflower_get_Password\r
  - securreCRT: https://github.com/depau/shcrt\r
  - xshell:\r
    - https://github.com/HyperSine/how-does-Xmanager-encrypt-password version<7.0\r
    - https://github.com/RowTeam/SharpDecryptPwd decrypt locally\r
    - https://github.com/JDArmy/SharpXDecrypt\r
- Cracking:\r
  - NetNTLMv1: https://ntlmv1.com/ online\r
\r
### \u540E\u6E17\u900F _Post Exploitation_\r
\r
- NICE TOOLS:\r
  - https://github.com/rapid7/metasploit-framework\r
  - https://github.com/byt3bl33d3r/CrackMapExec\r
  - https://github.com/Pennyw0rth/NetExec\r
  - https://github.com/fortra/impacket\r
  - https://github.com/XiaoliChan/wmiexec-Pro\r
  - https://docs.microsoft.com/en-us/sysinternals/downloads/pstools\r
  - https://github.com/GhostPack/Rubeus\r
  - https://github.com/Kevin-Robertson/Powermad\r
  - https://github.com/PowerShellMafia/PowerSploit\r
  - https://github.com/k8gege/Ladon\r
- netspy: \u5FEB\u901F\u63A2\u6D4B\u5185\u7F51\u53EF\u8FBE\u7F51\u6BB5 https://github.com/shmilylty/netspy\r
- LOLBAS: Windows \u4E8C\u8FDB\u5236\u6587\u4EF6\u5E93 https://github.com/LOLBAS-Project/LOLBAS\r
- GTFOBins: Unix \u4E8C\u8FDB\u5236\u6587\u4EF6\u5E93 https://gtfobins.github.io/\r
- Responder:\r
  - https://github.com/lgandx/Responder\r
  - https://github.com/lgandx/Responder-Windows\r
\r
### \u6743\u9650\u63D0\u5347 _Privilege Escalation_\r
\r
- Linux Local Enumeration:\r
  - https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite\r
  - https://github.com/mostaphabahadou/postenum\r
  - https://github.com/rebootuser/LinEnum\r
  - https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh\r
  - https://github.com/DominicBreuker/pspy\r
- Windows Local Enumeration:\r
  - https://github.com/S3cur3Th1sSh1t/WinPwn\r
  - https://github.com/carlospolop/PEASS-ng/blob/master/winPEAS/winPEASbat/winPEAS.bat\r
  - https://github.com/S3cur3Th1sSh1t/PowerSharpPack\r
  - https://github.com/Flangvik/SharpCollection\r
  - https://github.com/PowerShellMafia/PowerSploit/blob/dev/Recon/PowerView.ps1\r
  - https://github.com/dafthack/DomainPasswordSpray\r
  - https://github.com/dafthack/MailSniper\r
- Windows Exploits:\r
  - https://github.com/AonCyberLabs/Windows-Exploit-Suggester\r
  - https://github.com/SecWiki/windows-kernel-exploits\r
  - https://github.com/Al1ex/WindowsElevation\r
  - https://i.hacking8.com/tiquan/ online\r
  - https://github.com/BeichenDream/BadPotato/\r
  - https://github.com/giuliano108/SeBackupPrivilege\r
  - https://github.com/gtworek/PSBits/blob/master/Misc/EnableSeBackupPrivilege.ps1\r
- Linux Exploits:\r
  - https://github.com/The-Z-Labs/linux-exploit-suggester\r
  - https://github.com/InteliSecureLabs/Linux_Exploit_Suggester\r
- Database Exploits:\r
  - https://github.com/Hel10-Web/Databasetools\r
\r
### \u6743\u9650\u7EF4\u6301 _Persistence_\r
\r
- Webshell Collection:\r
  - https://github.com/tennc/webshell\r
  - https://github.com/novysodope/RMI_Inj_MemShell\r
  - https://github.com/ce-automne/TomcatMemShell\r
  - https://github.com/veo/wsMemShell\r
- Webshell Management:\r
  - https://github.com/rebeyond/Behinder\r
  - https://github.com/BeichenDream/Godzilla\r
  - https://github.com/shack2/skyscorpion\r
- Webshell Bypass:\r
  - https://github.com/AabyssZG/WebShell-Bypass-Guide\r
  - http://bypass.tidesec.com/web/\r
  - https://github.com/cseroad/Webshell_Generate\r
- Reverse Shell Management:\r
  - https://github.com/WangYihang/Platypus\r
  - https://github.com/calebstewart/pwncat python 3.9+\r
\r
### \u9632\u5FA1\u89C4\u907F _Defense Evasion_\r
\r
- Linux\uFF1A\r
  - libprocesshider: Hide a process under Linux using the ld preloader https://github.com/gianlucaborello/libprocesshider\r
  - Linux Kernel Hacking: https://github.com/xcellerator/linux_kernel_hacking\r
  - tasklist /svc && ps -aux: https://tasklist.ffffffff0x.com/\r
- Windows:\r
  - bypassAV: https://github.com/pureqh/bypassAV\r
  - GolangBypassAV: https://github.com/safe6Sec/GolangBypassAV\r
  - BypassAntiVirus: https://github.com/TideSec/BypassAntiVirus\r
  - AV_Evasion_Tool: https://github.com/1y0n/AV_Evasion_Tool\r
  - shellcodeloader: https://github.com/knownsec/shellcodeloader\r
  - tasklist/systeminfo: https://www.shentoushi.top/av/av.php\r
\r
### \u5185\u7F51\u7A7F\u900F _Proxy_\r
\r
- frp: https://github.com/fatedier/frp\r
- frpModify: https://github.com/uknowsec/frpModify\r
- Stowaway: https://github.com/ph4ntonn/Stowaway\r
- Neo-reGeorg: https://github.com/L-codes/Neo-reGeorg\r
- nps: https://github.com/ehang-io/nps\r
- reGeorg: https://github.com/sensepost/reGeorg\r
- rakshasa: https://github.com/Mob2003/rakshasa\r
- Viper: platform with webui https://github.com/FunnyWolf/Viper\r
- Proxifier: tools for windows https://www.proxifier.com/\r
- Proxychains: tools for kali https://github.com/haad/proxychains\r
- iodine: dns tunnel https://github.com/yarrick/iodine\r
- dnscat2: dns tunnel https://github.com/iagox86/dnscat2\r
- DNS-Shell: dns tunnel https://github.com/sensepost/DNS-Shell\r
- icmpsh: icmp tunnel https://github.com/bdamele/icmpsh\r
\r
### \u7AEF\u53E3\u8F6C\u53D1 _Port Forwarding_\r
\r
- tcptunnel: https://github.com/vakuum/tcptunnel intranet \u2192 dmz \u2192 attacker\r
\r
### \u8F85\u52A9\u5DE5\u5177 _Auxiliary Tools_\r
\r
- Cobaltstrike Extensions:\r
  - Awesome CobaltStrike: CobaltStrike \u77E5\u8BC6\u5E93 https://github.com/zer0yu/Awesome-CobaltStrike\r
  - Erebus: \u540E\u6E17\u900F\u6D4B\u8BD5\u63D2\u4EF6 https://github.com/DeEpinGh0st/Erebus\r
  - LSTAR: \u7EFC\u5408\u540E\u6E17\u900F\u63D2\u4EF6 https://github.com/lintstar/LSTAR\r
  - ElevateKit: \u63D0\u6743\u63D2\u4EF6 https://github.com/rsmudge/ElevateKit\r
  - C2ReverseProxy: \u4E0D\u51FA\u7F51\u4E0A\u7EBF https://github.com/Daybr4ak/C2ReverseProxy\r
  - pystinger: \u4E0D\u51FA\u7F51\u4E0A\u7EBF https://github.com/FunnyWolf/pystinger\r
- OPSEC Tools:\r
  - Privacy.sexy: Scripts for Windows/macOS/Linux \u75D5\u8FF9\u6E05\u7406 https://privacy.sexy/\r
\r
## \u57DF\u6E17\u900F _Active Directory / Kerberos_\r
\r
### \u5F00\u6E90\u8D44\u6E90 _Resources_\r
\r
- AD attack&defense mindmaps: https://orange-cyberdefense.github.io/ocd-mindmaps/img/pentest_ad_dark_2023_02.svg\r
- Game of active directory: https://github.com/Orange-Cyberdefense/GOAD\r
- Windows/AD cheatsheet: https://wadcoms.github.io/\r
\r
### \u57DF\u5185\u4FE1\u606F\u6536\u96C6 Collection and Discovery\r
\r
- BloodHound:\r
  - https://github.com/SpecterOps/BloodHound\r
  - https://github.com/dirkjanm/BloodHound.py\r
  - https://github.com/BloodHoundAD/SharpHound\r
  - https://github.com/CompassSecurity/BloodHoundQueries\r
- https://github.com/lzzbb/Adinfo\r
- https://github.com/wh0amitz/SharpADWS via Active Directory Web Services (ADWS) protocol\r
- https://github.com/FalconForceTeam/SOAPHound via Active Directory Web Services (ADWS) protocol\r
- https://github.com/shmilylty/SharpHostInfo\r
\r
### \u57DF\u5185\u5DF2\u77E5\u6F0F\u6D1E _Known Vulnerabilities_\r
\r
- noPac: CVE-2021-42278 / CVE-2021-42287\r
  - https://github.com/Ridter/noPac\r
  - https://github.com/Amulab/advul\r
- Zerologon CVE-2020-1472:\r
  - https://github.com/SecuraBV/CVE-2020-1472/blob/master/zerologon_tester.py\r
  - https://github.com/XiaoliChan/zerologon-Shot\r
  - https://github.com/dirkjanm/CVE-2020-1472\r
  - https://github.com/Potato-py/Potato/tree/03c3551e4770db440b27b0a48fc02b0a38a1cf04/exp/cve/CVE-2020-1472\r
  - https://github.com/risksense/zerologon\r
  - https://github.com/StarfireLab/AutoZerologon\r
- Exchange ProxyLogon & ProxyShell:\r
  - https://github.com/dirkjanm/privexchange/\r
  - https://github.com/Jumbo-WJB/PTH_Exchange\r
  - https://github.com/hausec/ProxyLogon\r
- Printnightmare CVE-2021-34527 / CVE-2021-1675:\r
  - https://github.com/cube0x0/CVE-2021-1675\r
  - https://github.com/nemo-wq/PrintNightmare-CVE-2021-34527\r
  - https://github.com/calebstewart/CVE-2021-1675\r
\r
### \u57DF\u5185\u6E17\u900F\u65B9\u5F0F Methodology\r
\r
- kerbrute: https://github.com/ropnop/kerbrute\r
- DCSync: https://github.com/n00py/DCSync\r
- Coerce & NTLM relay:\r
  - PetitPotam: https://github.com/topotam/PetitPotam\r
  - PrinterBug: https://github.com/leechristensen/SpoolSample\r
  - DFSCoerce: https://github.com/Wh04m1001/DFSCoerce\r
  - ShadowCoerce: https://github.com/ShutdownRepo/ShadowCoerce\r
  - PrivExchange: https://github.com/dirkjanm/privexchange/\r
  - Coercer: https://github.com/p0dalirius/Coercer\r
  - cannon: https://github.com/Amulab/cannon\r
\r
### ADCS _Active Directory Certificate Services_\r
\r
- Active Directory Certificate Services(AD CS) enumeration and abuse:\r
  - Certify: https://github.com/GhostPack/Certify\r
  - Certipy: https://github.com/ly4k/Certipy\r
  - certi: https://github.com/zer1t0/certi\r
  - PKINITtools: https://github.com/dirkjanm/PKINITtools\r
  - ADCSPwn: https://github.com/bats3c/ADCSPwn\r
- PassTheCert: https://github.com/AlmondOffSec/PassTheCert\r
\r
## \u5B89\u5168\u9632\u62A4 _Defensive Security_\r
\r
### \u5185\u5B58\u9A6C\u67E5\u6740 _Memshell Dectect_\r
\r
- Java \u5185\u5B58\u9A6C\u67E5\u6740:\r
  - https://github.com/LandGrey/copagent\r
  - https://github.com/c0ny1/java-memshell-scanner\r
- Aspx \u5185\u5B58\u9A6C\u67E5\u6740: https://github.com/yzddmr6/ASP.NET-Memshell-Scanner\r
\r
### Webshell \u67E5\u6740 _Webshell Dectect_\r
\r
- Webshell Chop: https://webshellchop.chaitin.cn/demo/\r
- WebShell \u67E5\u6740:\r
  - https://n.shellpub.com/\r
  - http://www.shellpub.com\r
\r
### \u653B\u51FB\u7814\u5224 _Blue Teaming_\r
\r
- CobaltStrike \u6D41\u91CF\u89E3\u5BC6\u811A\u672C: https://github.com/5ime/CS_Decrypt\r
- BlueTeamTools: \u7EFC\u5408\u5DE5\u5177 https://github.com/abc123info/BlueTeamTools\r
- IP Logger: \u4F7F\u7528\u751F\u6210\u7684\u77ED\u7F51\u5740\u83B7\u53D6\u8BBF\u95EE\u8005 IP \u5730\u5740 https://iplogger.org/\r
\r
### \u57FA\u7EBF\u52A0\u56FA _Enforcement_\r
\r
- https://github.com/AV1080p/Benchmarks\r
- https://github.com/xiaoyunjie/Shell_Script\r
- https://github.com/grayddq/GScan\r
- https://github.com/ppabc/security_check\r
- https://github.com/T0xst/linux\r
\r
### \u52D2\u7D22\u75C5\u6BD2 _Ransomware_\r
\r
- \u641C\u7D22\u5F15\u64CE:\r
  - 360: http://lesuobingdu.360.cn\r
  - \u817E\u8BAF: https://guanjia.qq.com/pr/ls\r
  - \u542F\u660E\u661F\u8FB0: https://lesuo.venuseye.com.cn\r
  - \u5947\u5B89\u4FE1: https://lesuobingdu.qianxin.com\r
  - \u6DF1\u4FE1\u670D: https://edr.sangfor.com.cn/#/information/ransom_search\r
- \u89E3\u5BC6\u5DE5\u5177:\r
  - \u817E\u8BAF: https://habo.qq.com/tool\r
  - \u91D1\u5C71\u6BD2\u9738: http://www.duba.net/dbt/wannacry.html\r
  - \u745E\u661F: http://it.rising.com.cn/fanglesuo/index.html\r
  - \u5361\u5DF4\u65AF\u57FA: https://noransom.kaspersky.com/\r
  - https://www.nomoreransom.org/zh/index.html\r
  - https://id-ransomware.malwarehunterteam.com\r
  - https://www.avast.com/ransomware-decryption-tools\r
  - https://www.emsisoft.com/en/ransomware-decryption/\r
  - Decryption-Tools: \u52D2\u7D22\u75C5\u6BD2\u89E3\u5BC6\u5DE5\u5177\u6536\u96C6\u9879\u76EE https://github.com/jiansiting/Decryption-Tools\r
\r
### \u5F00\u6E90\u871C\u7F50 _Open-Source Honeypot_\r
\r
- awesome-honeypots: \u5F00\u6E90\u871C\u7F50\u5217\u8868 https://github.com/paralax/awesome-honeypots\r
- HFish: \u4E00\u6B3E\u5B89\u5168\u3001\u7B80\u5355\u53EF\u4FE1\u8D56\u7684\u8DE8\u5E73\u53F0\u871C\u7F50\u8F6F\u4EF6\uFF0C\u5141\u8BB8\u5546\u4E1A\u548C\u4E2A\u4EBA\u7528\u6237\u514D\u8D39\u4F7F\u7528 https://github.com/hacklcx/HFish\r
- conpot: ICS\uFF08\u5DE5\u4E1A\u63A7\u5236\u7CFB\u7EDF\uFF09\u871C\u7F50 https://github.com/mushorg/conpot\r
- MysqlHoneypot: MySQL \u871C\u7F50 \u83B7\u53D6 wechat ID https://github.com/qigpig/MysqlHoneypot\r
- Ehoney: https://github.com/seccome/Ehoney\r
\r
## \u4E91\u5B89\u5168 _Cloud Security_\r
\r
### \u5F00\u6E90\u8D44\u6E90 _Resources_\r
\r
- TeamsSix \u4E91\u5B89\u5168\u8D44\u6E90: https://github.com/teamssix/awesome-cloud-security\r
- \u4E91\u5B89\u5168\u77E5\u8BC6\u6587\u5E93: https://wiki.teamssix.com/\r
- HackTricks Cloud: https://cloud.hacktricks.xyz/\r
- lzCloudSecurity: \u4E91\u5B89\u5168\u653B\u9632\u5165\u95E8\r
  - Github: https://github.com/EvilAnne/lzCloudSecurity\r
  - Gitbook: https://lzcloudsecurity.gitbook.io/yun-an-quan-gong-fang-ru-men/\r
- Awesome-CloudSec-Labs: \u4E91\u539F\u751F\u5B89\u5168 https://github.com/iknowjason/Awesome-CloudSec-Labs\r
- \u963F\u91CC\u4E91 OpenAPI: https://next.api.aliyun.com/api/\r
- \u4E91\u539F\u751F\u5168\u666F\u56FE: https://landscape.cncf.io/\r
- \u4E91\u670D\u52A1\u6F0F\u6D1E\u5E93: https://www.cloudvulndb.org/\r
\r
### \u4E91\u5B89\u5168\u77E9\u9635 _Cloud Matrices_\r
\r
- ATT&CK Cloud Matrix: https://attack.mitre.org/matrices/enterprise/cloud/\r
- \u706B\u7EBF\u5B89\u5168 - \u4E91\u670D\u52A1\u653B\u9632\u77E9\u9635: https://cloudsec.huoxian.cn/\r
- \u817E\u8BAF\u4E91\u9F0E\u5B9E\u9A8C\u5BA4 - \u4E91\u5B89\u5168\u653B\u9632\u77E9\u9635: https://cloudsec.tencent.com/home/\r
\r
### \u4E91\u6F0F\u6D1E\u73AF\u5883 _Vulnerable Cloud Environments_\r
\r
- Metarget: https://github.com/Metarget/metarget\r
- TerraformGoat: https://github.com/HXSecurity/TerraformGoat\r
- Kubernetes Goat: https://github.com/madhuakula/kubernetes-goat\r
- Attack Defense: https://attackdefense.pentesteracademy.com/listing?labtype=cloud-services&subtype=cloud-services-amazon-s3\r
- AWSGoat: https://github.com/ine-labs/AWSGoat\r
- CloudGoat: https://github.com/RhinoSecurityLabs/cloudgoat\r
\r
### \u4E91\u670D\u52A1 _Cloud Services_\r
\r
- \u8F85\u52A9\u5DE5\u5177 :\r
  - \u884C\u4E91\u7BA1\u5BB6: \u4E91\u5B58\u50A8\u56FE\u5F62\u5316\u7BA1\u7406\u5E73\u53F0 https://yun.cloudbility.com/\r
  - \u963F\u91CC\u4E91\u5B98\u65B9 OSS \u7BA1\u7406\u5DE5\u5177: https://github.com/aliyun/aliyun-cli\r
  - \u963F\u91CC\u4E91\u5B98\u65B9 CLI \u5DE5\u5177: https://github.com/aliyun/oss-browser\r
  - \u817E\u8BAF\u4E91\u5B98\u65B9 COS \u7BA1\u7406\u5DE5\u5177: https://github.com/TencentCloud/cosbrowser\r
  - \u817E\u8BAF\u4E91\u5B98\u65B9 CLI \u5DE5\u5177: https://github.com/TencentCloud/tencentcloud-cli\r
  - \u534E\u4E3A\u4E91 OBS \u5B98\u65B9\u7BA1\u7406\u5DE5\u5177: https://support.huaweicloud.com/browsertg-obs/obs_03_1003.html\r
  - \u5929\u7FFC\u4E91\u5BF9\u8C61\u5B58\u50A8 OBS \u7BA1\u7406\u5DE5\u5177: https://www.ctyun.cn/document/10000101/10006768\r
  - \u5929\u7FFC\u4E91\u5A92\u4F53\u5B58\u50A8 XstorBrowser \u7BA1\u7406\u5DE5\u5177: https://www.ctyun.cn/document/10306929/10132519\r
  - \u9752\u4E91\u5B98\u65B9 CLI \u5DE5\u5177: https://docsv4.qingcloud.com/user_guide/development_docs/cli/install/install/\r
  - \u4E03\u725B\u4E91\u5BF9\u8C61\u5B58\u50A8 Kodo \u7BA1\u7406\u5DE5\u5177: https://github.com/qiniu/kodo-browser\r
- AK/SK \u5229\u7528:\r
  - trufflehog: AK/SK \u654F\u611F\u4FE1\u606F\u6536\u96C6 https://github.com/trufflesecurity/trufflehog\r
  - CF: \u4E91\u73AF\u5883\u5229\u7528\u6846\u67B6 https://wiki.teamssix.com/cf/\r
  - CloudExplorer-Lite: \u8F7B\u91CF\u7EA7\u4E91\u7BA1\u5E73\u53F0 https://github.com/CloudExplorer-Dev/CloudExplorer-Lite\r
  - aliyun-accesskey-Tools: \u963F\u91CC\u4E91 accesskey \u5229\u7528\u5DE5\u5177 https://github.com/mrknow001/aliyun-accesskey-Tools\r
  - alicloud-tools: \u963F\u91CC\u4E91 ECS\u3001\u7B56\u7565\u7EC4\u8F85\u52A9\u5C0F\u5DE5\u5177 https://github.com/iiiusky/alicloud-tools\r
  - AliyunAccessKeyTools: \u963F\u91CC\u4E91 AccessKey \u6CC4\u6F0F\u5229\u7528\u5DE5\u5177 https://github.com/NS-Sp4ce/AliyunAccessKeyTools\r
  - Tencent_Yun_tools: \u817E\u8BAF\u4E91 AccessKey \u5229\u7528\u5DE5\u5177 https://github.com/freeFV/Tencent_Yun_tools\r
  - cloudSec: \u4E91\u5E73\u53F0 AK/SK-WEB \u5229\u7528\u5DE5\u5177\uFF0C\u4E09\u5927\u4E91\u5382\u5546\uFF08\u963F\u91CC\u4E91\u63A5\u7BA1 k8s\uFF09\u3001AWS\u3001\u4E03\u725B\u4E91 https://github.com/libaibaia/cloudSec\r
  - aksk_tool: \u963F\u91CC\u4E91/\u817E\u8BAF\u4E91/\u534E\u4E3A\u4E91/AWS/UCLOUD/\u4EAC\u4E1C\u4E91/\u767E\u5EA6\u4E91/\u4E03\u725B\u4E91 https://github.com/wyzxxz/aksk_tool\r
  - Cloud-Bucket-Leak-Detection-Tools: \u516D\u5927\u4E91\u5B58\u50A8\u6CC4\u9732\u5229\u7528\u68C0\u6D4B\u5DE5\u5177 https://github.com/UzJu/Cloud-Bucket-Leak-Detection-Tools\r
  - cloudTools: \u4E91\u8D44\u4EA7\u7BA1\u7406\u5DE5\u5177\uFF0C\u4E09\u5927\u4E91\u5382\u5546 +ucloud https://github.com/dark-kingA/cloudTools\r
\r
### \u4E91\u539F\u751F _Cloud Native_\r
\r
- \u7EFC\u5408\u5DE5\u5177:\r
  - HummerRisk: \u4E91\u539F\u751F\u5B89\u5168\u5E73\u53F0 https://github.com/HummerRisk/HummerRisk\r
- Docker:\r
  - dive: Exploring each layer in a docker image https://github.com/wagoodman/dive\r
  - Docker Bench for Security: Docker \u5BB9\u5668\u5B89\u5168\u68C0\u67E5 https://github.com/docker/docker-bench-security\r
  - dagda: Docker \u9759\u6001\u5206\u6790 https://github.com/eliasgranderubio/dagda/\r
  - Container Escape Check: \u5BB9\u5668\u9003\u9038\u68C0\u6D4B https://github.com/teamssix/container-escape-check\r
  - Awesome Container Escape: \u5BB9\u5668\u9003\u9038 https://github.com/brant-ruan/awesome-container-escape\r
  - CDK: \u5BB9\u5668\u6E17\u900F\u5DE5\u5177\u96C6 https://github.com/cdk-team/CDK\r
  - veinmind-tools: \u5BB9\u5668\u5B89\u5168\u5DE5\u5177\u96C6 https://github.com/chaitin/veinmind-tools\r
- Kubernetes:\r
  - kubectl: https://kubernetes.io/docs/tasks/tools/\r
  - etcdctl: https://github.com/etcd-io/etcd\r
  - k9s: Kubernetes CLI https://github.com/derailed/k9s\r
  - Red Team K8S Adversary Emulation Based on kubectl: https://github.com/lightspin-tech/red-kube\r
  - KubeHound: \u8BC6\u522B Kubernetes \u96C6\u7FA4\u653B\u51FB\u8DEF\u5F84 https://github.com/DataDog/KubeHound\r
  - peirates: Kubernetes \u6E17\u900F\u5DE5\u5177\u96C6 https://github.com/inguardians/peirates\r
\r
## \u79FB\u52A8\u7AEF\u5B89\u5168 _Mobile Security_\r
\r
### \u5C0F\u7A0B\u5E8F _Mini Program_\r
\r
- ~~[wxappUnpacker: \u5C0F\u7A0B\u5E8F\u89E3\u5305 https://github.com/xuedingmiaojun/wxappUnpacker]~~\r
- CrackMinApp: \u53CD\u7F16\u8BD1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F https://github.com/Cherrison/CrackMinApp\r
- API-Explorer: \u516C\u4F17\u53F7/\u5C0F\u7A0B\u5E8F/\u4F01\u4E1A\u5FAE\u4FE1 ak/sk https://github.com/mrknow001/API-Explorer\r
\r
### _APK_\r
\r
- AppInfoScanner: \u79FB\u52A8\u7AEF\u4FE1\u606F\u6536\u96C6 https://github.com/kelvinBen/AppInfoScanner\r
- Apktool: Android apk \u9006\u5411 https://github.com/iBotPeaches/Apktool\r
\r
### _SessionKey_\r
\r
- wx_sessionkey_decrypt: wechat SessionKey \u52A0\u89E3\u5BC6 https://github.com/mrknow001/wx_sessionkey_decrypt\r
- BurpAppletPentester: SessionKey \u89E3\u5BC6\u63D2\u4EF6 https://github.com/mrknow001/BurpAppletPentester\r
\r
## \u9006\u5411\u5DE5\u7A0B _Reverse engineering_\r
\r
- NICE TOOLS:\r
  - OpenArk: Anti-Rootkit \u5DE5\u5177\u96C6 https://github.com/BlackINT3/OpenArk\r
  - \u9006\u5411\u5206\u6790\u5DE5\u5177\u96C6: https://pythonarsenal.com/\r
- ELF/EXE:\r
  - IDA: https://hex-rays.com/ida-pro/\r
  - x64DBG: https://x64dbg.com/\r
  - Ollydbg: https://www.ollydbg.de/\r
  - ExeinfoPE: https://github.com/ExeinfoASL/ASL\r
  - PEiD: https://www.aldeid.com/wiki/PEiD\r
  - UPX: https://github.com/upx/upx\r
- Java:\r
  - jadx: https://github.com/skylot/jadx\r
  - JEB: https://www.pnfsoftware.com/\r
  - GDA: https://github.com/charles2gan/GDA-android-reversing-Tool\r
- Python:\r
  - Py2exe: Python \u6253\u5305\u5DE5\u5177 https://www.py2exe.org/\r
  - PyInstaller: Python \u6253\u5305\u5DE5\u5177 https://github.com/pyinstaller/pyinstaller\r
  - unpy2exe: py2exe \u6253\u5305\u7A0B\u5E8F\u4E2D\u63D0\u53D6 .pyc https://github.com/matiasb/unpy2exe\r
  - pyinstxtractor: pyInstaller \u6253\u5305\u7A0B\u5E8F\u4E2D\u63D0\u53D6 .pyc https://github.com/extremecoders-re/pyinstxtractor\r
  - uncompyle6: \u5B57\u8282\u7801\u6587\u4EF6\uFF08.pyc\uFF09\u53CD\u7F16\u8BD1\u4E3A\u6E90\u4EE3\u7801\uFF08.py\uFF09 https://github.com/rocky/python-uncompyle6/\r
- Rust:\r
  - https://github.com/cha5126568/rust-reversing-helper\r
- Go:\r
  - golang_loader_assist: https://github.com/strazzere/golang_loader_assist\r
  - IDAGolangHelper: https://github.com/sibears/IDAGolangHelper\r
- .NET:\r
  - dotPeek: https://www.jetbrains.com/zh-cn/decompiler/\r
  - dnSpy: https://github.com/dnSpy/dnSpy\r
\r
## \u63D0\u9AD8\u751F\u4EA7\u529B\u7684\u8F85\u52A9\u5DE5\u5177\r
\r
### _Shell_\r
\r
- oh my zsh: \u547D\u4EE4\u884C\u5DE5\u5177\u96C6 https://github.com/ohmyzsh/ohmyzsh\r
- clink: cmd.exe \u52A0\u5F3A\u7248\u8865\u5168\u3001\u5386\u53F2\u8BB0\u5F55\u548C\u884C\u7F16\u8F91 https://github.com/chrisant996/clink\r
- tabby: \u9AD8\u5EA6\u53EF\u914D\u7F6E\u7EC8\u7AEF https://github.com/Eugeny/tabby\r
- anew: \u547D\u4EE4\u884C\u5DE5\u5177 \u6587\u4EF6\u5408\u5E76\u53BB\u91CD https://github.com/tomnomnom/anew\r
- The art of command line: \u5FEB\u901F\u638C\u63E1\u547D\u4EE4\u884C https://github.com/jlevy/the-art-of-command-line\r
- Linux \u547D\u4EE4\u884C\u63D0\u793A\u5DE5\u5177:\r
  - https://github.com/jaywcjlove/linux-command online \u7248\r
  - https://github.com/chenjiandongx/pls golang \u7248\r
  - https://github.com/chenjiandongx/how python \u7248\r
- Explain Shell: Shell \u547D\u4EE4\u89E3\u6790 https://explainshell.com/\r
- ripgrep: \u5927\u6587\u672C\u5FEB\u901F\u68C0\u7D22 https://github.com/BurntSushi/ripgrep\r
\r
### _Chrome Extensions_\r
\r
- Proxy SwitchyOmega: \u5FEB\u901F\u5207\u6362\u4EE3\u7406 https://github.com/FelisCatus/SwitchyOmega\r
- ZeroOmega: Manifest v3 \u4E0B\u7684 Proxy SwitchyOmega \u66FF\u4EE3 https://github.com/zero-peak/ZeroOmega\r
- serp-analyzer: \u8BC6\u522B\u57DF\u540D/IP \u4FE1\u606F https://leadscloud.github.io/serp-analyzer/\r
- FindSomething: \u5728\u7F51\u9875\u7684\u6E90\u4EE3\u7801\u6216 js \u4E2D\u5BFB\u627E\u6709\u7528\u4FE1\u606F https://github.com/ResidualLaugh/FindSomething\r
- Hack Bar: \u6E17\u900F\u795E\u5668 No.1 https://github.com/0140454/hackbar\r
- Wappalyzer: \u8BC6\u522B\u7F51\u7AD9\u6280\u672F/\u6846\u67B6/\u8BED\u8A00 https://www.wappalyzer.com/\r
- EditThisCookie: \u4FEE\u6539 Cookie https://www.editthiscookie.com/\r
- Cookie-Editor: \u4FEE\u6539 Cookie https://github.com/Moustachauve/cookie-editor\r
- Disable JavaScript: \u7981\u7528 JavaScript \u7ED5\u8FC7\u5F39\u7A97 https://github.com/dpacassi/disable-javascript\r
- Heimdallr: \u88AB\u52A8\u76D1\u542C\u7684\u8C37\u6B4C\u63D2\u4EF6\uFF0C\u7528\u4E8E\u9AD8\u5371\u6307\u7EB9\u8BC6\u522B\u3001\u871C\u7F50\u7279\u5F81\u544A\u8B66\u548C\u62E6\u622A\u3001\u673A\u5668\u7279\u5F81\u5BF9\u6297 https://github.com/Ghr07h/Heimdallr\r
- anti-honeypot: \u871C\u7F50\u8BC6\u522B https://github.com/cnrstar/anti-honeypot\r
- immersive-translate: \u7FFB\u8BD1\u63D2\u4EF6 https://github.com/immersive-translate/immersive-translate/\r
- relingo: \u7FFB\u8BD1\u63D2\u4EF6 https://cn.relingo.net/en/\r
- json-formatter: Json \u683C\u5F0F\u5316\u63D2\u4EF6 https://github.com/callumlocke/json-formatter\r
- markdown-viewer: \u5728\u6D4F\u89C8\u5668\u67E5\u770B markdown \u6587\u6863 https://github.com/simov/markdown-viewer\r
\r
### _Infrastructure_\r
\r
- f8x: \u7EA2/\u84DD\u961F\u73AF\u5883\u81EA\u52A8\u5316\u90E8\u7F72\u5DE5\u5177 https://github.com/ffffffff0x/f8x\r
- cloudreve: \u79C1\u6709\u4E91\u76D8\u90E8\u7F72 https://github.com/cloudreve/Cloudreve\r
- updog: uploading and downloading via HTTP/S \u6587\u4EF6\u4F20\u8F93 https://github.com/sc0tfree/updog\r
\r
## \u63D0\u9AD8\u751F\u4EA7\u529B\u7684\u4F7F\u7528\u59FF\u52BF\r
\r
### \u5982\u4F55\u901A\u8FC7.bat \u4F7F\u7528 alias\r
\r
- \u521B\u5EFA alias.bat\uFF0C\u5B9E\u73B0\u67E5\u770B md \u6587\u6863\u3001\u8FD0\u884C exe \u7A0B\u5E8F\u3001\u6FC0\u6D3B conda \u73AF\u5883\u7B49\u529F\u80FD\u3002\u6587\u4EF6\u5185\u5BB9\u793A\u4F8B:\r
\r
\`\`\`\r
@echo off\r
: : Tips\r
@DOSKEY httpcode=type "D: \\HackTools\\Tips\\http_status_code.md"\r
\r
: : Software\r
@DOSKEY ida64=activate base$t"D: \\Software\\CTFTools\\Cracking\\IDA_7.7\\ida64.exe"\r
\r
: : Tools\r
@DOSKEY fscan=cd /d D: \\Software\\HackTools\\fscan$tactivate security$tdir\r
\`\`\`\r
\r
- \u6CE8\u518C\u8868\u6253\u5F00 \`\u8BA1\u7B97\u673A\\HKEY_CURRENT_USER\\Software\\Microsoft\\Command Processor\`\u3002\r
- \u521B\u5EFA\u5B57\u7B26\u4E32\u503C \`autorun\`\uFF0C\u8D4B\u503C\u4E3A alias.bat \u6240\u5728\u4F4D\u7F6E\uFF0C\u4F8B\u5982 \`D: \\Software\\alias.bat\`\u3002\r
- \u53CC\u51FB alias.bat \u8FD0\u884C\uFF0C\u91CD\u542F cmd\u3002\r
\r
### \u5982\u4F55\u901A\u8FC7.bat \u6FC0\u6D3B conda \u5E76\u8FD0\u884C py\r
\r
- run.bat\r
\r
\`\`\`\r
call D: \\YOUR_PATH\\Anaconda\\Scripts\\activate.bat D: \\YOUR_PATH\\Anaconda\\\r
call conda activate YOUR_ENV\r
cd D: \\YOUR_WORKDIR\r
python YOUR_PYTHON_FILE.py\r
pause\r
\`\`\`\r
\r
### \u5982\u4F55\u914D\u5408 tabby \u5B9E\u73B0\u9AD8\u6548\u64CD\u4F5C\r
\r
- \u5B89\u88C5 tabby: https://github.com/Eugeny/tabby\r
- \u53EF\u4EE5\u901A\u8FC7 tabby \u5B9E\u73B0\u81EA\u5B9A\u4E49 shell \u914D\u7F6E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E:\r
  - vps ssh/ftp/sftp\r
  - \u81EA\u52A8\u8865\u5168\u547D\u4EE4\uFF08clink\uFF09\r
  - \u5FEB\u901F\u6253\u5F00\u5DE5\u4F5C\u533A\r
  - \u5B58\u50A8\u8F93\u51FA\u65E5\u5FD7\r
  - ...\r
\r
![](images/README/image-20231122-1.png)\r
\r
### \u5982\u4F55\u89E3\u51B3 cmd \u4E2D\u6587\u4E71\u7801\r
\r
- \u6CE8\u518C\u8868\u6253\u5F00 \`\u8BA1\u7B97\u673A\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor\`\u3002\r
- \u521B\u5EFA\u5B57\u7B26\u4E32\u503C \`autorun\`\uFF0C\u8D4B\u503C\u4E3A \`chcp 65001\`\u3002\r
`;export{t as _};
