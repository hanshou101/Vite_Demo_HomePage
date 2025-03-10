https://github.com/ngalongc/bug-bounty-reference

# **漏洞赏金参考**

根据漏洞性质分类的漏洞赏金报告列表，灵感来自[https://github.com/djadmin/awesome-bug-bounty](https://github.com/djadmin/awesome-bug-bounty)

# **介绍**

几个月来我一直在阅读 Bug Bounty 的文章，当我发现某种类型的漏洞而我不知道如何利用时，我发现阅读相关文章非常有用。假设您在一个网站中发现了 RPO（相对路径覆盖），但您不知道如何利用它，那么这里就是最佳去处[。](http://blog.innerht.ml/rpo-gadgets/)或者您发现您的客户正在使用 oauth 机制，但您不知道我们应该如何测试它，另一个最佳去处是[这里](https://whitton.io/articles/obtaining-tokens-outlook-office-azure-account/)  
我的目的是制作一份完整的常见漏洞清单，这些漏洞都是公开披露的漏洞赏金记录，并让漏洞赏金猎人在漏洞搜寻期间想要了解特定类型的漏洞时使用此页面作为参考，请随时提交拉取请求。好的，闲聊够了，让我们开始吧。

* [跨服务器接口](https://github.com/ngalongc/bug-bounty-reference#xssi)  
* [跨站点脚本 (XSS)](https://github.com/ngalongc/bug-bounty-reference#cross-site-scripting-xss)  
* [暴力破解](https://github.com/ngalongc/bug-bounty-reference#brute-force)  
* [SQL 注入 (SQLi)](https://github.com/ngalongc/bug-bounty-reference#sql-injection)  
* [外部 XML 实体攻击 (XXE)](https://github.com/ngalongc/bug-bounty-reference#xxe)  
* [远程代码执行（RCE）](https://github.com/ngalongc/bug-bounty-reference#remote-code-execution)  
  * [反序列化](https://github.com/ngalongc/bug-bounty-reference#deserialization)  
  * [图像悲剧](https://github.com/ngalongc/bug-bounty-reference#image-tragick)  
* [跨站请求伪造 (CSRF)](https://github.com/ngalongc/bug-bounty-reference#csrf)  
* [不安全的直接对象引用（IDOR）](https://github.com/ngalongc/bug-bounty-reference#direct-object-reference-idor)  
* [窃取访问令牌](https://github.com/ngalongc/bug-bounty-reference#stealing-access-token)  
  * [Google Oauth 登录绕过](https://github.com/ngalongc/bug-bounty-reference#google-oauth-bypass)  
* [服务器端请求伪造（SSRF）](https://github.com/ngalongc/bug-bounty-reference#server-side-request-forgery-ssrf)  
* [不受限制的文件上传](https://github.com/ngalongc/bug-bounty-reference#unrestricted-file-upload)  
* [竞争条件](https://github.com/ngalongc/bug-bounty-reference#race-condition)  
* [业务逻辑缺陷](https://github.com/ngalongc/bug-bounty-reference#business-logic-flaw)  
* [身份验证绕过](https://github.com/ngalongc/bug-bounty-reference#authentication-bypass)  
* [HTTP 标头注入](https://github.com/ngalongc/bug-bounty-reference#http-header-injection)  
* [电子邮件相关](https://github.com/ngalongc/bug-bounty-reference#email-related)  
* [金钱盗窃](https://github.com/ngalongc/bug-bounty-reference#money-stealing)  
* [各种各样的](https://github.com/ngalongc/bug-bounty-reference#miscellaneous)

### **跨站点脚本 (XSS)**

* [休眠存储型 Google XSS 引发 5000 美元赏金，](https://blog.it-securityguard.com/bugbounty-sleeping-stored-google-xss-awakens-a-5000-bounty/)作者：Patrik Fehrenbach  
* [导致 Google](http://blog.innerht.ml/rpo-gadgets/)因文件描述符而泄露信息的 RPO  
* [Jack Whitton 编写的神级 XSS、登录、注销、](https://whitton.io/articles/uber-turning-self-xss-into-good-xss/) Uber登录  
* Jack Whitton 撰写的 [通过 PNG 和 Wonky 内容类型在 Facebook 上发起的 XSS](https://whitton.io/articles/xss-on-facebook-via-png-content-types/)  
  * 他能够从不相关的域名向 Facebook 主域名发起存储型 XSS  
* Jack Whitton 发现[\*.ebay.com 中的存储型 XSS](https://whitton.io/archive/persistent-xss-on-myworld-ebay-com/)  
* Ramzes 撰写的[复杂、最佳 Google XSS 报告](https://sites.google.com/site/bughunteruniversity/best-reports/account-recovery-xss)  
* [sms-be-vip.twitter.com 中的棘手 HTML 注入和可能的 XSS](https://hackerone.com/reports/150179)（secgeek 提供）  
* Venkat S 撰写的[Google 控制台中的命令注入](http://www.pranav-venkat.com/2016/03/command-injection-which-got-me-6000.html)  
* [Facebook 的举动 \-](http://www.paulosyibelo.com/2015/12/facebooks-moves-oauth-xss.html) PAULOS YIBELO 的OAuth XSS  
* Harry M Gertos 发现[Google Docs 中的存储型 XSS（漏洞赏金）](http://hmgmakarovich.blogspot.hk/2015/11/stored-xss-in-google-docs-bug-bounty.html)  
* James Kettle (albinowax)[通过入侵 Uber 管理员账户，在 developer.uber.com 上发起了存储型 XSS](https://hackerone.com/reports/152067)  
* Klikki Oy 的[Yahoo Mail 存储型 XSS](https://klikki.fi/adv/yahoo.html)  
* [滥用 XSS 过滤器：一个 ^ 导致 XSS（CVE-2016-3212）](http://mksben.l0.cm/2016/07/xxn-caret.html)作者：Masato Kinugawa  
* fransrosen 的[Youtube XSS](https://labs.detectify.com/2015/06/06/google-xss-turkey/)  
* [再次呈现最佳 Google XSS](https://sites.google.com/site/bughunteruniversity/best-reports/openredirectsthatmatter) \- 作者：Krzysztof Kotowicz  
* [IE 和 Edge URL 解析问题](https://labs.detectify.com/2016/10/24/combining-host-header-injection-and-lax-host-parsing-serving-malicious-data/)\- 由 detectify 提供  
* [Google XSS 子域名点击劫持](http://sasi2103.blogspot.sg/2016/09/combination-of-techniques-lead-to-dom.html)  
* [Google 日本图书 XSS](http://nootropic.me/blog/en/blog/2016/09/20/%E3%82%84%E3%81%AF%E3%82%8A%E3%83%8D%E3%83%83%E3%83%88%E3%82%B5%E3%83%BC%E3%83%95%E3%82%A3%E3%83%B3%E3%82%92%E3%81%97%E3%81%A6%E3%81%84%E3%81%9F%E3%82%89%E3%81%9F%E3%81%BE%E3%81%9F%E3%81%BEgoogle/)  
* [Flash XSS mega nz](https://labs.detectify.com/2013/02/14/how-i-got-the-bug-bounty-for-mega-co-nz-xss/) \- 作者：frans  
* [谷歌 IE 中的 xss，主机头反射](http://blog.bentkowski.info/2015/04/xss-via-host-header-cse.html)  
* [几年前 Google xss](http://conference.hitb.org/hitbsecconf2012ams/materials/D1T2%20-%20Itzhak%20Zuk%20Avraham%20and%20Nir%20Goldshlager%20-%20Killing%20a%20Bug%20Bounty%20Program%20-%20Twice.pdf)  
* [IE 中的 xss 在 google 中的奇怪行为](http://blog.bentkowski.info/2015/04/xss-via-host-header-cse.html)  
* [Yahoo Fantasy Sport 中的 xss](https://web.archive.org/web/20161228182923/http://dawgyg.com/2016/12/07/stored-xss-affecting-all-fantasy-sports-fantasysports-yahoo-com-2/)  
* [Yahoo Mail 再次出现 xss 漏洞，价值 10000 美元，](https://klikki.fi/adv/yahoo2.html)作者：Klikki Oy  
* 安全卫士[发现 Google 中的休眠 XSS](https://blog.it-securityguard.com/bugbounty-sleeping-stored-google-xss-awakens-a-5000-bounty/)  
* 解密 .htpasswd 文件，利用安全卫士[赚取金钱](https://blog.it-securityguard.com/bugbounty-decoding-a-%F0%9F%98%B1-00000-htpasswd-bounty/)  
* [谷歌账户接管](http://www.orenh.com/2013/11/google-account-recovery-vulnerability.html#comment-form)  
* [AirBnb 漏洞赏金计划：将 Self-XSS 转变为 Good-XSS \#2](http://www.geekboy.ninja/blog/airbnb-bug-bounty-turning-self-xss-into-good-xss-2/)作者：geekboy  
* [Uber 自身 XSS 到全局 XSS](https://httpsonly.blogspot.hk/2016/08/turning-self-xss-into-good-xss-v2.html)  
* [我是如何发现价值 5,000 美元的 Google Maps XSS 的（通过摆弄 Protobuf）](https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff#.cktt61q9g)作者：Marin Moulinier关注  
* [Airbnb – 绕过 JSON 编码、XSS 过滤器、WAF、CSP 和审计器会变成八个漏洞，](https://buer.haus/2017/03/08/airbnb-when-bypassing-json-encoding-xss-filter-waf-csp-and-auditor-turns-into-eight-vulnerabilities/)作者 Brett  
* [XSSI，客户端暴力破解](http://blog.intothesymmetry.com/2017/05/cross-origin-brute-forcing-of-saml-and.html)  
* [postMessage XSS 绕过](https://hackerone.com/reports/231053)  
* zhchbin[发现 Uber 中通过 Cookie 发起的 XSS](http://zhchbin.github.io/2017/08/30/Uber-XSS-via-Cookie/)  
* [使用 Marketo Forms XSS、postMessage 框架跳转和 jQuery-JSONP 窃取 www.hackerone.com 上的联系表单数据（](https://hackerone.com/reports/207042)作者：frans）  
* [由于第三方 js 中不正确的正则表达式导致的 XSS Uber 7k XSS](http://zhchbin.github.io/2016/09/10/A-Valuable-XSS/)  
* [TinyMCE 2.4.0 中的 XSS，](https://hackerone.com/reports/262230)作者：Jelmer de Hen  
* [在 IE11 中传递未编码的 URL 会导致 XSS](https://hackerone.com/reports/150179)  
* [Twitter XSS 通过阻止重定向和 JavaScript 方案实现，](http://blog.blackfan.ru/2017/09/devtwittercom-xss.html)作者 Sergey Bobrov  
* [Auth DOM Uber XSS](http://stamone-bug-bounty.blogspot.hk/2017/10/dom-xss-auth_14.html)  
* [www.yahoo.com 中的 XSS](https://www.youtube.com/watch?v=d9UEVv3cJ0Q&feature=youtu.be)  
* [使用数据集发布语言在 Google 中实施存储型 XSS 和 SSRF](https://s1gnalcha0s.github.io/dspl/2018/03/07/Stored-XSS-and-SSRF-Google.html)  
* [Snapchat 上的存储型 XSS](https://medium.com/@mrityunjoy/stored-xss-on-snapchat-5d704131d8fd)  
* [在 Google Scholar 上研究多态图像的 XSS](https://blog.doyensec.com/2020/04/30/polymorphic-images-for-xss.html)  
* [OLX 漏洞赏金计划：404 页面中的反射型 XSS](https://medium.com/@abaykandotcom/olx-bug-bounty-reflected-xss-adb3095cd525)

### **暴力破解**

* Arne Swinnen 撰写的[Web 身份验证端点凭证暴力破解漏洞](https://hackerone.com/reports/127844)  
* [InstaBrute：两种暴力破解 Instagram 帐户凭证的方法，](https://www.arneswinnen.net/2016/05/instabrute-two-ways-to-brute-force-instagram-account-credentials/)作者：Arne Swinnen  
* [如何破解 4%（已锁定）的 Instagram 账户](https://www.arneswinnen.net/2016/03/how-i-could-compromise-4-locked-instagram-accounts/)作者：Arne Swinnen  
* r0t[可利用暴力破解 riders.uber.com 上的邀请码](https://hackerone.com/reports/125505)  
* Efkan Gökbaş (mefkan)[在 partners.uber.com 中暴力破解邀请码](https://hackerone.com/reports/144616)

### **SQL 注入**

* [Wordpress 插件中的 SQL 注入 Uber 中的大型 IT 视频库](https://hackerone.com/reports/125932)（作者 glc）  
* Orange Tsai[在 sctrack.email.uber.com.cn 上进行 SQL 注入](https://hackerone.com/reports/150156)  
* [Yahoo – 根访问 SQL 注入 – tw.yahoo.com，](http://buer.haus/2015/01/15/yahoo-root-access-sql-injection-tw-yahoo-com/)作者 Brett Buerhaus  
* Abood Nour (syndr0me) 发现[drive.uber.com 上的 WordPress 插件存在多个漏洞](https://hackerone.com/reports/135288)  
* Orange 发起的[GitHub Enterprise SQL 注入](http://blog.orange.tw/2017/01/bug-bounty-github-enterprise-sql-injection.html)  
* [Yahoo SQL 注入到远程代码执行到 root 权限，](http://www.sec-down.com/wordpress/?p=494)作者 Ebrahim Hegazy

### **窃取访问令牌**

* [Facebook 访问令牌](https://whitton.io/articles/stealing-facebook-access-tokens-with-a-double-submit/)被 Jack Whitton 窃取 \-  
* [获取 Outlook、Office 或 Azure 帐户的登录令牌](https://whitton.io/articles/obtaining-tokens-outlook-office-azure-account/)（作者：Jack Whitton）  
* 利用文件描述符[绕过 Digits Web 身份验证的 HPP 主机验证](https://hackerone.com/reports/114169)  
* Egor Homakov[在 GitHub 上使用 /../ 绕过 redirect\_uri 验证](http://homakov.blogspot.hk/2014/02/how-i-hacked-github-again.html?m=1)  
* 通过 filedescriptor[绕过 Digits 上的callback\_url 验证](https://hackerone.com/reports/108113)  
* [窃取实时聊天令牌并用其以用户身份聊天 \-](https://hackerone.com/reports/151058) Mahmoud G. (zombiehelp54) 的用户信息泄露  
* [通过 /rt/users/passwordless-signup 更改任何 Uber 用户的密码 \- 账户接管（严重）](https://hackerone.com/reports/143717) by mongo（mongo）  
* [Internet Explorer 存在 URL 问题，发布于 GitHub，](http://blog.innerht.ml/internet-explorer-has-a-url-problem/)作者为 filedescriptor。  
* [我如何让 LastPass 提供你所有的密码](https://labs.detectify.com/2016/07/27/how-i-made-lastpass-give-me-all-your-passwords/)（作者：labsdetectify）  
* [在微软窃取 Google Oauth](http://blog.intothesymmetry.com/2015/06/on-oauth-token-hijacks-for-fun-and.html)  
* [窃取 FB 访问令牌](http://blog.intothesymmetry.com/2014/04/oauth-2-how-i-have-hacked-facebook.html)  
* [Paypal 访问令牌泄露](http://blog.intothesymmetry.com/2016/11/all-your-paypal-tokens-belong-to-me.html?m=1)  
* [窃取 FB 访问令牌](http://homakov.blogspot.sg/2013/02/hacking-facebook-with-oauth2-and-chrome.html)  
* [Appengine 酷虫](https://proximasec.blogspot.hk/2017/02/a-tale-about-appengines-authentication.html)  
* [Slack 发布消息真实生活体验](https://labs.detectify.com/2017/02/28/hacking-slack-using-postmessage-and-websocket-reconnect-to-steal-your-precious-token/)  
* 通过 nbsriharsha[绕过 redirect\_uri](http://nbsriharsha.blogspot.in/2016/04/oauth-20-redirection-bypass-cheat-sheet.html)  
* [窃取价值 15,000 美元的 Facebook Messenger 随机数](https://stephensclafani.com/2017/03/21/stealing-messenger-com-login-nonces/)  
* [窃取 Oculus Nonce 并绕过 Oauth Flow](https://medium.com/@lokeshdlk77/bypass-oauth-nonce-and-steal-oculus-response-code-faa9cc8d0d37)

#### **谷歌 oauth 绕过**

* [绕过 Periscope 管理面板上的 Google 身份验证](https://whitton.io/articles/bypassing-google-authentication-on-periscopes-admin-panel/)作者 Jack Whitton

#### **点击劫持**

* [玩游戏，订阅我的频道 \- YouTube Clickjacking Bug | \#GoogleVRP](https://infosecwriteups.com/play-a-game-get-subscribed-to-my-channel-youtube-clickjacking-bug-googlevrp-6ce1d15542d3?source=your_stories_page-------------------------------------) By Sriram

### **CSRF**

* Messenger.com CSRF 向您展示了Jack Whitton[检查 CSRF 的步骤](https://whitton.io/articles/messenger-site-wide-csrf/)  
* [Paypal 漏洞赏金：未经同意更新 Paypal.me 个人资料图片（CSRF 攻击）](https://hethical.io/paypal-bug-bounty-updating-the-paypal-me-profile-picture-without-consent-csrf-attack/)作者：Florian Courtial  
* [一键破解 PayPal 账户 (已修补)](http://yasserali.com/hacking-paypal-accounts-with-one-click/)作者：Yasser Ali  
* [将推文添加到](https://hackerone.com/reports/100820)vijay kumar 的CSRF 集合  
* [Facebookmarketingdevelopers.com：代理、CSRF 难题和 API 趣味](http://philippeharewood.com/facebookmarketingdevelopers-com-proxies-csrf-quandry-and-api-fun/)（作者：phwd）  
* 我是如何入侵你的 Beats 账户的？ @aaditya\_purani 的[Apple Bug Bounty](https://aadityapurani.com/2016/07/20/how-i-hacked-your-beats-account-apple-bug-bounty/)  
* [FORM POST JSON：](https://hackerone.com/reports/245346) Dr.Jones 的POST Heartbeats API 上的 JSON CSRF  
* [使用 Oculus-Facebook 集成中的 CSRF 攻击 Facebook 帐户](https://www.josipfranjkovic.com/blog/hacking-facebook-oculus-integration-csrf)

### **远程代码执行**

* Milan A Solanki 的[PayPal JDWP 远程代码执行](https://www.vulnerability-lab.com/get_content.php?id=1474)  
* [OpenID 中的 XXE：一个漏洞可以解决所有问题，或者我如何发现影响 Facebook 服务器的远程代码执行漏洞，](http://www.ubercomp.com/posts/2014-01-16_facebook_remote_code_execution)作者：Reginaldo Silva  
* [我如何入侵 Facebook，并找到某人的后门脚本](http://devco.re/blog/2016/04/21/how-I-hacked-facebook-and-found-someones-backdoor-script-eng-ver/)作者：Orange Tsai  
* [我如何串联 GitHub Enterprise 上的 4 个漏洞，从 SSRF 执行链到 RCE！](http://blog.orange.tw/2017/07/how-i-chained-4-vulnerabilities-on.html)作者：Orange Tsai  
* [uber.com 可能通过 Flask Jinja2 进行 RCE，](https://hackerone.com/reports/125980) Orange Tsai 进行模板注入  
* [Yahoo 漏洞赏金计划 \- \*.login.yahoo.com 远程代码执行，](http://blog.orange.tw/2013/11/yahoo-bug-bounty-part-2-loginyahoocom.html)作者：Orange Tsai（抱歉，目前只有中文版）  
* [我们如何破解 PHP、入侵 Pornhub 并赚取 20,000 美元，](https://www.evonide.com/how-we-broke-php-hacked-pornhub-and-earned-20000-dollar/)作者：Ruslan Habalov  
  * *警报*，神一样的写作，在点击之前请确保你知道什么是 ROP，而我不知道 \=(  
* secgeek 的[RCE 协议可实现棘手的文件上传](https://www.secgeek.net/bookfresh-vulnerability/)  
* WordPress plupload.flash.swf 中存在一些错误，导致Cure53[自动进行 RCE （cure53）](https://hackerone.com/reports/134738)  
* [只读用户可以](https://hackerone.com/reports/128750)通过 93c08539 在 AirOS 上执行任意 shell 命令 (93c08539)  
* [通过 imageg upload 远程执行代码！](https://hackerone.com/reports/158148)作者：Raz0r (ru\_raz0r)  
* Bitquark 在[Oculus 开发者门户上弹出一个 shell](https://bitquark.co.uk/blog/2014/08/31/popping_a_shell_on_the_oculus_developer_portal)  
* [疯了！PornHub 再次遭遇 RCE！！！我如何破解 Pornhub 以获得乐趣和利润 \-](https://5haked.blogspot.sg/) 5haked 提供10,000 美元  
* Michael Stepankin 撰写的[PayPal Node.js 代码注入 (RCE)](http://artsploit.blogspot.hk/2016/08/pprce2.html)  
* [eBay PHP 参数注入导致 RCE](http://secalert.net/#ebay-rce-ccs)  
* [Yahoo 收购 RCE](https://seanmelia.files.wordpress.com/2016/02/yahoo-remote-code-execution-cms1.pdf)  
* [Hostinger 中的命令注入漏洞（](http://elladodelnovato.blogspot.hk/2017/02/command-injection-vulnerability-in.html?spref=tw&m=1)作者：@alberto\_\_segura）  
* buerRCE[实现 Airbnb 中的 Ruby 注入 RCE](http://buer.haus/2017/03/13/airbnb-ruby-on-rails-string-interpolation-led-to-remote-code-execution/)  
* [通过命令行对 Imgur 进行 RCE](https://hackerone.com/reports/212696)  
* Orange Tsai[滥用过时的软件在 git.imgur.com 中实施 RCE](https://hackerone.com/reports/206227)  
* [披露中的 RCE](https://hackerone.com/reports/213558)  
* [struct2 Yahoo 服务器存在远程代码执行漏洞](https://medium.com/@th3g3nt3l/how-i-got-5500-from-yahoo-for-rce-92fffb7145e6)  
* [Yahoo 收购中的命令注入](http://samcurry.net/how-i-couldve-taken-over-the-production-server-of-a-yahoo-acquisition-through-command-injection/)  
* [JetBrains IDE 中的 RCE 漏洞价值 5 万美元](http://blog.saynotolinux.com/blog/2016/08/15/jetbrains-ide-remote-code-execution-and-local-file-disclosure-vulnerability-analysis/)  
* [Telekom.de 远程命令执行！](http://www.sec-down.com/wordpress/?p=581)作者：Ebrahim Hegazy  
* [Magento 远程代码执行漏洞！](http://www.sec-down.com/wordpress/?p=578)作者：Ebrahim Hegazy  
* [Yahoo\! 远程命令执行漏洞，](http://www.sec-down.com/wordpress/?p=87)作者：Ebrahim Hegazy

#### **反序列化**

* Michael Stepankin[在 manager.paypal.com 中实现 Java 反序列化](http://artsploit.blogspot.hk/2016/01/paypal-rce.html)  
* Wesley Wineberg 撰写[的 Instagram 百万美元漏洞](http://www.exfiltrated.com/research-Instagram-RCE.php)  
* [（Facebooksearch.algolia.com 上的 Ruby Cookie 反序列化 RCE，](https://hackerone.com/reports/134321)由 Michiel Prins (michiel) 发起）  
* [Java](https://seanmelia.wordpress.com/2016/07/22/exploiting-java-deserialization-via-jboss/)按餐食反序列化

#### **图像悲剧**

* NaHamSec[利用 ImageMagick 在 Polyvore（雅虎收购）上获取 RCE](http://nahamsec.com/exploiting-imagemagick-on-yahoo/)  
* [利用 ImageMagick 在 HackerOne 上获取 RCE](https://hackerone.com/reports/135072)（c666a323be94d57 提供）  
* Trello 漏洞赏金：使用Florian Courtial 的[ImageTragick 访问服务器文件](https://hethical.io/trello-bug-bounty-access-servers-files-using-imagetragick/)  
* [40k FB RCE](https://github.com/ngalongc/bug-bounty-reference/blob/master/4lemon.ru/2017-01-17_facebook_imagetragick_remote_code_execution.html)  
* [雅虎出血 1](https://scarybeastsecurity.blogspot.hk/2017/05/bleed-continues-18-byte-file-14k-bounty.html)  
* [雅虎流血 2](https://scarybeastsecurity.blogspot.hk/2017/05/bleed-more-powerful-dumping-yahoo.html)

### **直接对象引用（IDOR）**

* [Trello 漏洞赏金：当上市公司创建团队可见板时，websocket 会接收数据，](https://hethical.io/trello-bug-bounty-the-websocket-receives-data-when-a-public-company-creates-a-team-visible-board/)作者：Florian Courtial  
* [Trello 漏洞赏金：当团队更改其可见性时，付款信息将发送到 webhook，](https://hethical.io/trello-bug-bounty-payments-informations-are-sent-to-the-webhook-when-a-team-changes-its-visibility/)作者：Florian Courtial  
* 使用 mongo[更改 Uber 中任意用户的密码](https://hackerone.com/reports/143717)  
* [Youtube 存在漏洞，允许将评论从任意视频移动到另一个视频](https://www.secgeek.net/youtube-vulnerability/)（作者：secgeek）  
  * 这是*谷歌*漏洞，所以值得一读，因为一般来说，找到谷歌漏洞比较困难  
* [Twitter 漏洞可能导致任何 Twitter 帐户的信用卡被盗](https://www.secgeek.net/twitter-vulnerability/)用 作者：secgeek  
* secgeek 发现[一个漏洞，允许删除所有 Yahoo 网站上任意用户的评论](https://www.secgeek.net/yahoo-comments-vulnerability/)  
* Yaaser Ali 提供的[Microsoft-careers.com 远程密码重置](http://yasserali.com/microsoft-careers-com-remote-password-reset/)  
* [我如何更改您的 eBay 密码](http://yasserali.com/how-i-could-change-your-ebay-password/)作者：Yaaser Ali  
* Duo Security 研究人员发现Duo Labs 存在绕过[PayPal 双因素身份验证的漏洞](https://duo.com/blog/duo-security-researchers-uncover-bypass-of-paypal-s-two-factor-authentication)  
* [我如何获得数百万个\[删除\]账户的访问权限](https://bitquark.co.uk/blog/2016/02/09/how_i_got_access_to_millions_of_redacted_accounts)  
* 所有 Vimeo Private 视频均通过授权绕过进行披露，并附有Enguerran Gillier (opnsec) 提供的[出色技术说明](https://hackerone.com/reports/137502)  
* [紧急：攻击者可以访问 Bime 上的每个数据源](https://hackerone.com/reports/149907)by Jobert Abma (jobert)  
* 下载Gazza (gazza)[在 Vimeo 上受密码保护/限制的视频](https://hackerone.com/reports/145467)  
* Severus[在 Uber 中根据 uuid 获取组织信息(severus)](https://hackerone.com/reports/151465)  
* [我是如何泄露你的主要 Facebook 电子邮件地址的（漏洞价值 4500 美元）](http://roy-castillo.blogspot.hk/2013/07/how-i-exposed-your-primary-facebook.html)作者：Roy Castillo  
* DOB 披露使用Raja Sekar Durairaj 的[“Facebook Graph API 逆向工程”](https://medium.com/@rajsek/my-3rd-facebook-bounty-hat-trick-chennai-tcs-er-name-listed-in-facebook-hall-of-fame-47f57f2a4f71#.9gbtbv42q)  
* [未经 Facebook 的 publish\_actions 许可更改视频描述（](http://philippeharewood.com/change-the-description-of-a-video-without-publish_actions-permission/)作者：phwd）  
* [对请求注入的响应（RTRI）](https://www.bugbountyhq.com/front/latestnews/dWRWR0thQ2ZWOFN5cTE1cXQrSFZmUT09/)？说实话，多亏了这篇文章，我使用他的方法发现了不少错误，尊重作者！  
* [所有项目名称和所有用户名均被泄露，甚至跨 Harvest 上的应用程序](https://hackerone.com/reports/152696)被 Edgar Boda-Majer (eboda)泄露  
* [预订行程时更改 paymentProfileUuid 可让 Uber 免费乘车](https://hackerone.com/reports/162809)作者：Matthew Temmy (temmyscript)  
* [查看私人推文](https://hackerone.com/reports/174721)  
* [破解 Facebook 的旧版 API，第 1 部分：代表任何用户进行调用（](http://stephensclafani.com/2014/07/08/hacking-facebooks-legacy-api-part-1-making-calls-on-behalf-of-any-user/)作者：Stephen Sclafani）  
* [入侵 Facebook 旧版 API，第 2 部分：窃取用户会话](http://stephensclafani.com/2014/07/29/hacking-facebooks-legacy-api-part-2-stealing-user-sessions/)（作者：Stephen Sclafani）  
* [删除 FB 视频](https://danmelamed.blogspot.hk/2017/01/facebook-vulnerability-delete-any-video.html)  
* [删除 FB 视频](https://pranavhivarekar.in/2016/06/23/facebooks-bug-delete-any-video-from-facebook/)  
* [查看私人 Airbnb 消息](http://buer.haus/2017/03/31/airbnb-web-to-app-phone-notification-idor-to-view-everyones-airbnb-messages/)  
* IDOR 推文由 kedrisec 以[任何用户身份发布](http://kedrisec.com/twitter-publish-by-any-user/)  
* [批量分配、响应请求注入、管理员升级](https://seanmelia.wordpress.com/2017/06/01/privilege-escalation-in-a-django-application/)（作者：sean）  
* [获取任何 Facebook 用户的好友列表和部分支付卡详细信息](https://www.josipfranjkovic.com/blog/facebook-friendlist-paymentcard-leak)  
* [操纵 ETH 余额](https://www.vicompany.nl/magazine/from-christmas-present-in-the-blockchain-to-massive-bug-bounty)

### **XXE**

* 我们如何通过 detectify[获取 Google 生产服务器的读取权限](https://blog.detectify.com/2014/04/11/how-we-got-read-access-on-googles-production-servers/)  
* Raghav Bisht[入侵 UBER 26+ 域名，导致盲目 OOB XXE](http://nerdint.blogspot.hk/2016/08/blind-oob-xxe-at-uber-26-domains-hacked.html)  
* [通过 SAML 进行 XXE](https://seanmelia.files.wordpress.com/2016/01/out-of-band-xml-external-entity-injection-via-saml-redacted.pdf)  
* [Uber 中的 XXE 读取本地文件](https://httpsonly.blogspot.hk/2017/01/0day-writeup-xxe-in-ubercom.html)

### **不受限制的文件上传**

* vijay kumar[在 mopub 中上传图片时发现文件上传 XSS](https://hackerone.com/reports/97672)  
* secgeek 的[RCE 协议可实现棘手的文件上传](https://www.secgeek.net/bookfresh-vulnerability/)  
* [Twitter 中 mopub 应用程序中图片上传存在文件上传 XSS，](https://hackerone.com/reports/97672)作者 vijay kumar (vijay\_kumar1110)

### **服务器端请求伪造（SSRF）**

* [ESEA 服务器端请求伪造和查询 AWS 元数据](http://buer.haus/2016/04/18/esea-server-side-request-forgery-and-querying-aws-meta-data/)（作者 Brett Buerhaus）  
* [SSRF 转向内部网络](https://seanmelia.files.wordpress.com/2016/07/ssrf-to-pivot-internal-networks.pdf)  
* [SSRF 到 LFI](https://seanmelia.wordpress.com/2015/12/23/various-server-side-request-forgery-issues/)  
* [SSRF 查询谷歌内部服务器](https://www.rcesecurity.com/2017/03/ok-google-give-me-all-your-internal-dns-information/)  
* Brett BUERHAUS[使用第三方开放重定向攻击 SSRF](https://buer.haus/2017/03/09/airbnb-chaining-third-party-open-redirect-into-server-side-request-forgery-ssrf-via-liveperson-chat/)  
* [BugBountyHQ 提供的 SSRF 技巧](https://twitter.com/BugBountyHQ/status/868242771617792000)  
* [SSRF 到 RCE](http://www.kernelpicnic.net/2017/05/29/Pivoting-from-blind-SSRF-to-RCE-with-Hashicorp-Consul.html)  
* [Twitter 上的 XXE](https://hackerone.com/reports/248668)  
* [博客文章：破解镜头：瞄准 HTTP 的隐藏攻击面](http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html)  
* [Plotly AWS 元数据 SSRF (以及存储型 XSS)](https://ysx.me.uk/a-pair-of-plotly-bugs-stored-xss-and-aws-metadata-ssrf/)

### **竞争条件**

* [Facebook、DigitalOcean 和其他网站上的竞争条件（已修复）](http://josipfranjkovic.blogspot.hk/2015/04/race-conditions-on-facebook.html)作者：Josip Franjković  
* Fábio Pires (shmoo)[在 HackerOne 上的热门报告中介绍了竞争条件](https://hackerone.com/reports/146845)  
* [入侵星巴克，获取无限金钱](https://sakurity.com/blog/2015/05/21/starbucks.html)作者：Egor Homakov

### **业务逻辑缺陷**

* [我如何从 Instagram、Google 和 Microsoft 窃取资金](https://www.arneswinnen.net/2016/07/how-i-could-steal-money-from-instagram-google-and-microsoft/)作者：Arne Swinnen  
* [Facebook \- 绕过广告账户的角色漏洞 2015](http://blog.darabi.me/2015/03/facebook-bypass-ads-account-roles.html)由 POUYA DARABI  
* Uber Eat[免费](https://t.co/MCOM7j2dWX)

### **身份验证绕过**

* [通过 Uber 中的 XMLRPC 在 WordPress 网站上绕过 OneLogin 身份验证，](https://hackerone.com/reports/138869)作者：Jouko Pynnönen (jouko)  
* henryhoggard 的[2FA PayPal 绕过](https://henryhoggard.co.uk/blog/Paypal-2FA-Bypass)  
* [Github 中存在价值 15,000 美元的 SAML 漏洞](http://www.economyofmechanism.com/github-saml.html)  
* [通过窃取 OAuth 令牌绕过 Airbnb 身份验证](https://www.arneswinnen.net/2017/06/authentication-bypass-on-airbnb-via-oauth-tokens-theft/)  
* 由 c0rni3sm[访问管理面板](http://c0rni3sm.blogspot.hk/2017/08/accidentally-typo-to-bypass.html?m=1)  
* mishre 的[Flickr Oauth 配置错误](https://mishresec.wordpress.com/2017/10/12/yahoo-bug-bounty-exploiting-oauth-misconfiguration-to-takeover-flickr-accounts/)  
* Antonio Sanso 的[Slack SAML 身份验证绕过](http://blog.intothesymmetry.com/2017/10/slack-saml-authentication-bypass.html)  
* [使用 partners.shopify.com 绕过 Shopify 管理员身份验证（](https://hackerone.com/reports/270981)作者：uzsunny）

### **HTTP 标头注入**

* [Twitter Overflow 三部曲（](https://blog.innerht.ml/overflow-trilogy/)由 filedescriptor 提供）  
* [Twitter 的 CRLF](https://blog.innerht.ml/twitter-crlf-injection/)（按文件描述符）  
* [Adblock Plus 以及 Google 中的更多内容](https://adblockplus.org/blog/finding-security-issues-in-a-website-or-how-to-get-paid-by-google)  
* Ezequiel Pereira 的[10,000 美元主机头](https://sites.google.com/site/testsitehacking/10k-host-header)

### **子域名接管**

* [劫持大量 Instapage 过期用户域名和子域名](http://www.geekboy.ninja/blog/hijacking-tons-of-instapage-expired-users-domains-subdomains/)by geekboy  
* [读取 Uber 子域名中的电子邮件](https://hackerone.com/reports/156536)  
* [Slack Bug 之旅](http://secalert.net/slack-security-bug-bounty.html)\- David Vieira-Kurz 著  
* [子域名接管并链接它以执行身份验证绕过](https://www.arneswinnen.net/2017/06/authentication-bypass-on-ubers-sso-via-subdomain-takeover/)（作者：Arne Swinnen）  
* [Hacker.One 子域名接管](https://hackerone.com/reports/159156)\- 作者：geekboy

## **跨服务器接口**

* [通过XSSI读取纯文本](http://balpha.de/2013/02/plain-text-considered-harmful-a-cross-domain-exploit/)  
* [JSON 劫持](http://blog.portswigger.net/2016/11/json-hijacking-for-modern-web.html)  
* [OWASP XSSI](https://www.owasp.org/images/f/f3/Your_Script_in_My_Page_What_Could_Possibly_Go_Wrong_-_Sebastian_Lekies%2BBen_Stock.pdf)  
* [日本基于标识符的 XSSI 攻击](http://www.mbsd.jp/Whitepaper/xssi.pdf)  
* [JSON 劫持幻灯片](https://www.owasp.org/images/6/6a/OWASPLondon20161124_JSON_Hijacking_Gareth_Heyes.pdf)

## **电子邮件相关**

* [此域名是我的域名 \- G Suite A 记录漏洞](http://blog.pentestnepal.tech/post/156959105292/this-domain-is-my-domain-g-suite-a-record)  
* [我收到了电子邮件 \- G Suite 漏洞](http://blog.pentestnepal.tech/post/156707088037/i-got-emails-g-suite-vulnerability)  
* [我是如何窥探你的私人 Slack 消息的（Slack Bug 赏金价值 2,500 美元）](http://blog.pentestnepal.tech/post/150381068912/how-i-snooped-into-your-private-slack-messages)  
* [阅读 Uber 的内部电子邮件 \[价值 10,000 美元的 Uber 漏洞赏金报告\]](http://blog.pentestnepal.tech/post/149985438982/reading-ubers-internal-emails-uber-bug-bounty)  
* 使用Inti De Ceukelaire 的[TicketTrick 接管 Slack Yammer](https://medium.com/@intideceukelaire/how-i-hacked-hundreds-of-companies-through-their-helpdesk-b7680ddc2d4c)  
* [我怎样才能从每个 Flickr 帐户批量上传！](https://ret2got.wordpress.com/2017/10/05/how-i-could-have-mass-uploaded-from-every-flickr-account/)

## **金钱盗窃**

* 舍入错误问题 \-\>由 4lemon[在比特币网站免费赚钱](https://hackerone.com/reports/176461)

## **2017 年本地文件收录**

* [通过符号链接泄露本地文件](https://hackerone.com/reports/213558)  
* [Facebook 符号链接本地文件包含](http://josipfranjkovic.blogspot.hk/2014/12/reading-local-files-from-facebooks.html)  
* [Gitlab 符号链接本地文件包含](https://hackerone.com/reports/158330)  
* [Gitlab 符号链接本地文件包含（第二部分）](https://hackerone.com/reports/178152)  
* [多公司 LFI](http://panchocosil.blogspot.sg/2017/05/one-cloud-based-local-file-inclusion.html)  
* [通过视频转换实现 LFI，对这个技巧感到很兴奋！](https://hackerone.com/reports/226756)

## **各种各样的**

* [SAML 笔测试优秀论文](http://research.aurainfosec.io/bypassing-saml20-SSO/)  
* [phwd 收集的 FB writeup 列表](https://www.facebook.com/notes/phwd/facebook-bug-bounties/707217202701640)by phwd  
* websecurify 的[NoSQL 注入](http://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html)  
* [CORS 实际应用](http://www.geekboy.ninja/blog/exploiting-misconfigured-cors-cross-origin-resource-sharing/)  
* [Facebook 信使中的 CORS](http://www.cynet.com/blog-facebook-originull/)  
* [Web 应用程序方法](https://blog.zsec.uk/ltr101-method-to-madness/)  
* [XXE 备忘单](https://www.silentrobots.com/blog/2015/12/14/xe-cheatsheet-update/)  
* [通往地狱之路由 SAML 断言和 Microsoft 漏洞铺就](http://www.economyofmechanism.com/office365-authbypass.html#office365-authbypass)  
* [如果你喜欢学习](https://cirw.in/blog/hash-injection)cirw 的Mongo SQL 注入，可以学习这个  
* websecrify[再次实施 Mongo DB 注入](http://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html)  
* w3af[关于现代脆弱性的演讲](https://www.youtube.com/watch?v=GNU0_Uzyvl0)  
* [导致账户被盗用的 Web 缓存攻击](http://omergil.blogspot.co.il/2017/02/web-cache-deception-attack.html)  
* [一场讲座教你如何使用 SAML Raider](https://www.usenix.org/conference/usenixsecurity12/technical-sessions/presentation/somorovsky)  
* [当你不知道如何利用漏洞时，XSS 检查表](http://d3adend.org/xss/ghettoBypass)  
* [CTF 写作，非常适合 Bug Boost](https://ctftime.org/writeups?tags=web200&hidden-tags=web%2cweb100%2cweb200)  
* [事实证明，每个使用带有 Open Redirect 的 jquery mobile 的网站都容易受到](http://sirdarckcat.blogspot.com/2017/02/unpatched-0day-jquery-mobile-xss.html)sirdarckcat 的XSS 攻击  
* [使用 google-analytics 绕过 CSP](https://hackerone.com/reports/199779)  
* [Paypal 付款问题](https://hackerone.com/reports/219215)  
* [中文浏览器漏洞利用](http://paper.seebug.org/)  
* [XSS 旁路过滤器](https://t.co/0Kpzo52ycb)  
* [标记不当清理](https://github.com/ChALkeR/notes/blob/master/Improper-markup-sanitization.md)  
* [通过 Script Gadget 突破 XSS 缓解措施](https://www.blackhat.com/docs/us-17/thursday/us-17-Lekies-Dont-Trust-The-DOM-Bypassing-XSS-Mitigations-Via-Script-Gadgets.pdf)  
* [X41浏览器安全白皮书](https://browser-security.x41-dsec.de/X41-Browser-Security-White-Paper.pdf)  
* EdOverflow 的[Bug Bounty 备忘单](https://github.com/EdOverflow/bugbounty-cheatsheet)  
* [破解 Google Buganizer 系统可获 15,600 美元赏金](https://medium.freecodecamp.org/messing-with-the-google-buganizer-system-for-15-600-in-bounties-58f86cc9f9a5)  
* [Electron 安全白皮书](https://www.blackhat.com/docs/us-17/thursday/us-17-Carettoni-Electronegativity-A-Study-Of-Electron-Security-wp.pdf)  
* [Twitter 的 Vine 源代码转储 \- $10080](https://avicoder.me/2016/07/22/Twitter-Vine-Source-code-dump/)  
* [SAML 圣经](https://blog.netspi.com/attacking-sso-common-saml-vulnerabilities-ways-find/)  
* [绕过 Google 的身份验证来访问其内部管理面板 — Vishnu Prasad PG](https://medium.com/bugbountywriteup/bypassing-googles-fix-to-access-their-internal-admin-panels-12acd3d821e3)  
* [智能合约漏洞](http://www.dasp.co/)

