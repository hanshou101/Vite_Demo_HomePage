https://github.com/yeyintminthuhtut/Awesome-Red-Teaming

# **此列表不再更新。**

## **很棒的红队**

出色的红队/红队资源列表  
此列表适用于任何想要了解红队但又没有起点的人。  
无论如何，这是一个动态资源，并将定期更新基于[Mitre ATT\&CK 的最新对抗战术和技术](https://attack.mitre.org/wiki/Main_Page)  
您可以通过发送 Pull 请求来添加更多信息以提供帮助。

# **目录**

* [初始访问](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-initial-access)  
* [执行](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-execution)  
* [持久性](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-persistence)  
* [权限提升](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-privilege-escalation)  
* [防御规避](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-defense-evasion)  
* [凭证访问](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-credential-access)  
* [发现](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-discovery)  
* [横向移动](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-lateral-movement)  
* [收藏](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-collection)  
* [泄漏](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-exfiltration)  
* [指挥与控制](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-command-and-control)  
* [嵌入式和外围设备黑客攻击](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-embedded-and-peripheral-devices-hacking)  
* [杂项](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-misc)  
* [RedTeam 小工具](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-redteam-gadgets)  
* [电子书](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-ebooks)  
* [训练](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-training--free-)  
* [认证](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#-certification)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**初始访问**

* [初次访问的“漫游指南”](https://posts.specterops.io/the-hitchhikers-guide-to-initial-access-57b66aa80dd6)  
* [操作方法：Empire 的跨平台 Office 宏](https://www.blackhillsinfosec.com/empires-cross-platform-office-macro/)  
* [利用 PowerPoint 进行网络钓鱼](https://www.blackhillsinfosec.com/phishing-with-powerpoint/)  
* [利用 EMPIRE 进行网络钓鱼](https://enigma0x3.net/2016/03/15/phishing-with-empire/)  
* [狂欢兔子](https://hakshop.com/products/bash-bunny)  
* [OWASP 社会工程学演示 \- OWASP](https://owasp.org/www-pdf-archive/Presentation_Social_Engineering.pdf)  
* [USB 丢失攻击：“丢失并找到”拇指驱动器的危险](https://www.redteamsecure.com/usb-drop-attacks-the-danger-of-lost-and-found-thumb-drives/)  
* [利用数据科学进行社会工程攻击：Twitter 上的自动 E2E 鱼叉式网络钓鱼 \- Defcon 24](https://media.defcon.org/DEF%20CON%2024/DEF%20CON%2024%20presentations/DEF%20CON%2024%20-%20Seymour-Tully-Weaponizing-Data-Science-For-Social-Engineering-WP.pdf)  
* [Cobalt Strike \- 鱼叉式网络钓鱼文档](https://www.cobaltstrike.com/help-spear-phish)  
* [Cobalt Strike 博客 \- 常用的网络钓鱼技术或漏洞是什么？](https://blog.cobaltstrike.com/2014/12/17/whats-the-go-to-phishing-technique-or-exploit/)  
* [使用 Cobalt Strike 进行鱼叉式网络钓鱼 \- Raphael Mudge](https://www.youtube.com/watch?v=V7UJjVcq2Ao)  
* [电子邮件侦察和网络钓鱼模板生成变得简单](https://cybersyndicates.com/2016/05/email-reconnaissance-phishing-template-generation-made-simple/)  
* [钓鱼式访问](http://www.rvrsh3ll.net/blog/phishing/phishing-for-access/)  
* [使用 PowerShell 的 Excel 宏](https://4sysops.com/archives/excel-macros-with-powershell/)  
* [PowerPoint 和自定义操作](https://phishme.com/powerpoint-and-custom-actions/)  
* [MSWord 中无宏代码执行](https://sensepost.com/blog/2017/macro-less-code-exec-in-msword/)  
* [多平台宏网络钓鱼负载](https://medium.com/@malcomvetter/multi-platform-macro-phishing-payloads-3b688e8eff68)  
* [滥用 Microsoft Word 功能进行网络钓鱼：“subDoc”](https://rhinosecuritylabs.com/research/abusing-microsoft-word-features-phishing-subdoc/)  
* [针对受保护视图的网络钓鱼](https://enigma0x3.net/2017/07/13/phishing-against-protected-view/)  
* [POWERSHELL EMPIRE STAGERS 1：利用 Office 宏进行网络钓鱼并逃避 AVS](https://fzuckerman.wordpress.com/2016/10/06/powershell-empire-stagers-1-phishing-with-an-office-macro-and-evading-avs/)  
* [PlugBot：硬件僵尸网络研究项目](https://www.redteamsecure.com/the-plugbot-hardware-botnet-research-project/)  
* [Luckystrike：一个邪恶的办公文档生成器](https://www.shellntel.com/blog/2016/9/13/luckystrike-a-database-backed-evil-macro-generator)  
* [CSV 注入的危险被严重低估](http://georgemauer.net/2017/10/07/csv-injection.html)  
* [避免使用 Yara 规则检测的无宏 DOC 恶意软件](https://furoner.wordpress.com/2017/10/17/macroless-malware-that-avoids-detection-with-yara-rule/amp/)  
* [应用白名单之间的网络钓鱼](https://medium.com/@vivami/phishing-between-the-app-whitelists-1b7dcdab4279)  
* [从 MS Office 文档属性执行 Metasploit 和 Empire 负载（第 1 部分，共 2 部分）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-1-of-2/)  
* [从 MS Office 文档属性执行 Metasploit 和 Empire 负载（第 2 部分，共 2 部分）](https://stealingthe.network/executing-metasploit-empire-payloads-from-ms-office-document-properties-part-2-of-2/)  
* [社会工程师门户](https://www.social-engineer.org/)  
* [7 种最佳社会工程攻击](http://www.darkreading.com/the-7-best-social-engineering-attacks-ever/d/d-id/1319411)  
* [使用社会工程学手段进行大数据间谍活动 \- 2012 年欧洲 RSA 大会](https://www.rsaconference.com/writable/presentations/file_upload/das-301_williams_rader.pdf)  
* [利用 POWERSHELL EMPIRE 进行 DDE 攻击](https://1337red.wordpress.com/using-the-dde-attack-with-powershell-empire/)  
* [Twitter 上的网络钓鱼 \- POT](https://www.kitploit.com/2018/02/pot-phishing-on-twitter.html)  
* [Microsoft Office – 通过框架集获取 NTLM 哈希](https://pentestlab.blog/2017/12/18/microsoft-office-ntlm-hashes-via-frameset/)  
* [纵深防御撰写](https://oddvar.moe/2017/09/13/defense-in-depth-writeup/)  
* [鱼叉式网络钓鱼 101](https://blog.inspired-sec.com/archive/2017/05/07/Phishing.html)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**处决**

* [对CMSTP.exe的研究，](https://msitpros.com/?p=3960)  
* [Windows 单行程序可下载远程负载并执行任意代码](https://arno0x0x.wordpress.com/2017/11/20/windows-oneliners-to-download-remote-payload-and-execute-arbitrary-code/)  
* [使用 PowerShell 诊断脚本执行命令并绕过 AppLocker](https://bohops.com/2017/12/02/clickonce-twice-or-thrice-a-technique-for-social-engineering-and-untrusted-command-execution/)  
* [WSH 注入：案例研究](https://posts.specterops.io/wsh-injection-a-case-study-fd35f79d29dd)  
* [Gscript 释放器](http://lockboxx.blogspot.com/2018/02/intro-to-using-gscript-for-red-teams.html)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**坚持**

* [持久性的观点](https://rastamouse.me/blog/view-of-persistence/)  
* [使用 psreflect 隐藏注册表项](https://posts.specterops.io/hiding-registry-keys-with-psreflect-b18ec5ac8353)  
* [使用 RunOnceEx 实现持久性 – 从 Autoruns.exe 中隐藏](https://oddvar.moe/2018/03/21/persistence-using-runonceex-hidden-from-autoruns-exe/)  
* [在图像文件执行选项中使用 GlobalFlags 实现持久性 \- 从 Autoruns.exe 中隐藏](https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/)  
* [将数据放入备用数据流以及如何执行 \- 第 2 部分](https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/)  
* [利用 Cobalt Strike 实现 WMI 持久性](https://blog.inspired-sec.com/archive/2017/01/20/WMI-Persistence.html)  
* [利用 INF-SCT 获取和执行技术进行绕过、逃避和持久性](https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/)  
* [利用 INF-SCT 获取和执行技术进行绕过、逃避和持久性（第 2 部分）](https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/)  
* [Vshadow：滥用卷影服务进行逃避、持久性和 Active Directory 数据库提取](https://bohops.com/2018/02/10/vshadow-abusing-the-volume-shadow-service-for-evasion-persistence-and-active-directory-database-extraction/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**权限提升**

### **绕过用户账户控制**

* [第一篇：欢迎使用无文件 UAC 绕过，](https://winscripting.blog/2017/05/12/first-entry-welcome-and-uac-bypass/)  
* [利用计划任务中的环境变量绕过 UAC，](https://tyranidslair.blogspot.ru/2017/05/exploiting-environment-variables-in.html)  
* 通过 3 个部分了解 UAC： [第 1 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-1.html) [第 2 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-2.html) [第 3 部分。](https://tyranidslair.blogspot.ru/2017/05/reading-your-way-around-uac-part-3.html)  
* [使用应用程序路径绕过 UAC，](https://enigma0x3.net/2017/03/14/bypassing-uac-using-app-paths/)  
* [使用 sdclt.exe 进行“无文件”UAC 绕过，](https://enigma0x3.net/2017/03/17/fileless-uac-bypass-using-sdclt-exe/)  
* [UAC 绕过或有关三次升级的故事，](https://habrahabr.ru/company/pm/blog/328008/)  
* [使用 eventvwr.exe 和注册表劫持进行“无文件”UAC 绕过，](https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/)  
* [使用磁盘清理绕过 Windows 10 上的 UAC，](https://enigma0x3.net/2016/07/22/bypassing-uac-on-windows-10-using-disk-cleanup/)  
* [使用 IARPUninstallStringLauncher COM 接口绕过 UAC，](http://www.freebuf.com/articles/system/116611.html)  
* [使用 sdclt 无文件绕过 UAC](https://posts.specterops.io/fileless-uac-bypass-using-sdclt-exe-3e9f9ad4e2b3)  
* [Eventvwr 无文件 UAC 绕过 CNA](https://www.mdsec.co.uk/2016/12/cna-eventvwr-uac-bypass/)  
* [Windows 7 UAC 白名单](http://www.pretentiousname.com/misc/win7_uac_whitelist2.html)

### **升级**

* [Windows 权限提升检查表](https://github.com/netbiosX/Checklists/blob/master/Windows-Privilege-Escalation.md)  
* [从补丁星期二到 DA](https://blog.inspired-sec.com/archive/2017/03/17/COM-Moniker-Privesc.html)  
* [特权升级之路](https://blog.cobaltstrike.com/2016/12/08/cobalt-strike-3-6-a-path-for-privilege-escalation/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**防御回避**

* [Window 10 Device Guard 绕过](https://github.com/tyranid/DeviceGuardBypasses)  
* [应用程序储物柜绕过列表](https://github.com/api0cradle/UltimateAppLockerByPassList)  
* [窗口签名二进制](https://github.com/vysec/Windows-SignedBinary)  
* [绕过应用程序白名单脚本保护 \- Regsvr32.exe 和 COM Scriptlet（.sct 文件）](http://subt0x10.blogspot.sg/2017/04/bypass-application-whitelisting-script.html)  
* [使用 MSBuild.exe 绕过应用程序白名单 \- Device Guard 示例和缓解措施](http://subt0x10.blogspot.sg/2017/04/bypassing-application-whitelisting.html)  
* [没有 powershell 的 Empire](https://bneg.io/2017/07/26/empire-without-powershell-exe/)  
* [无需Powershell即可绕过应用程序白名单](https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/)  
* [仅需 3 步即可完成 MS 签名 mimikatz](https://github.com/secretsquirrel/SigThief)  
* [向 sysinternals 隐藏你的进程](https://riscybusiness.wordpress.com/2017/10/07/hiding-your-process-from-sysinternals/)  
* [代码签名证书克隆攻击与防御](https://posts.specterops.io/code-signing-certificate-cloning-attacks-and-defenses-6f98657fc6ec)  
* [用户空间 API 监控和代码注入检测](https://0x00sec.org/t/userland-api-monitoring-and-code-injection-detection/5565)  
* [内存逃避](https://blog.cobaltstrike.com/2018/02/08/in-memory-evasion/)  
* [通过 COM 服务器劫持绕过 AMSI](https://posts.specterops.io/bypassing-amsi-via-com-server-hijacking-b8a3354d1aff)  
* [进程分身](https://hshrzd.wordpress.com/2017/12/18/process-doppelganging-a-new-way-to-impersonate-a-process/)  
* [逃避微软 ATA 的一周 \- 公告和第 1 天至第 5 天](http://www.labofapenetrationtester.com/2017/08/week-of-evading-microsoft-ata-day1.html)  
* [VEIL-EVASION AES 加密 HTTPKEY 请求：沙盒逃避](https://cybersyndicates.com/2015/06/veil-evasion-aes-encrypted-httpkey-request-module/)  
* [将数据放入备用数据流以及如何执行](https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/)  
* [AppLocker – 案例研究 – 它到底有多不安全？ – 第一部分](https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/)  
* [AppLocker – 案例研究 – 它到底有多不安全？ – 第二部分](https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/)  
* [使用 AppLocker 强化 Windows – 基于案例研究第 2 部分](https://oddvar.moe/2017/12/13/harden-windows-with-applocker-based-on-case-study-part-1/)  
* [使用 AppLocker 强化 Windows – 基于案例研究第 2 部分](https://oddvar.moe/2017/12/21/harden-windows-with-applocker-based-on-case-study-part-2/)  
* [Office 365 安全链接绕过](https://oddvar.moe/2018/01/03/office-365-safe-links-bypass/)  
* [Windows Defender 攻击面减少规则绕过](https://oddvar.moe/2018/03/15/windows-defender-attack-surface-reduction-rules-bypass/)  
* [使用 CHM 绕过设备保护 UMCI \- CVE-2017-8625](https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/)  
* [使用 BGInfo 绕过应用程序白名单](https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/)  
* [使用 Wifi PineApple 克隆和托管邪恶强制门户](https://blog.inspired-sec.com/archive/2017/01/10/cloning-captive-portals.html)  
* [https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/](https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/)  
* [使用 PowerShell 诊断脚本执行命令并绕过 AppLocker](https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/)  
* [mavinject.exe 功能解析](https://posts.specterops.io/mavinject-exe-functionality-deconstructed-c29ab2cf5c0e)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**凭证访问**

* [Windows 访问令牌和备用凭据](https://blog.cobaltstrike.com/2015/12/16/windows-access-tokens-and-alternate-credentials/)  
* [和 reGeorg & Empire 一起把哈希带回家](https://sensepost.com/blog/2016/bringing-the-hashes-home-with-regeorg-empire/)  
* [使用 Empire 拦截密码并获胜](https://sensepost.com/blog/2016/intercepting-passwords-with-empire-and-winning/)  
* [本地管理员密码解决方案 (LAPS) 第 1 部分](https://rastamouse.me/blog/laps-pt1/)  
* [本地管理员密码解决方案 (LAPS) 第 2 部分](https://rastamouse.me/blog/laps-pt2/)  
* [使用 SCF 文件收集哈希值](https://1337red.wordpress.com/using-a-scf-file-to-gather-hashes/)  
* [通过修改主机安全描述符按需进行远程哈希提取](https://www.harmj0y.net/blog/)  
* [攻击性加密数据存储](https://www.harmj0y.net/blog/redteaming/offensive-encrypted-data-storage/)  
* [NTLM 中继实用指南](https://byt3bl33d3r.github.io/practical-guide-to-ntlm-relaying-in-2017-aka-getting-a-foothold-in-under-5-minutes.html)  
* [使用 Mimikatz DCSync 转储域中所有管理员的明文密码](https://adsecurity.org/?p=2053)  
* [转储域密码哈希](https://pentestlab.blog/2018/07/04/dumping-domain-password-hashes/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**发现**

* [红队在现代环境中运作](https://www.owasp.org/images/4/4b/Red_Team_Operating_in_a_Modern_Environment.pdf)  
* [我第一次使用 BloodHound](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)  
* [BloodHound 简介](https://wald0.com/?p=68)  
* [红队成员的 GPO 和 OU 指南](https://wald0.com/?p=179)  
* [自动化衍生品管理员搜索](https://wald0.com/?p=14)  
* [渗透测试人员的群组范围指南](https://www.harmj0y.net/blog/activedirectory/a-pentesters-guide-to-group-scoping/)  
* [本地组枚举](https://www.harmj0y.net/blog/redteaming/local-group-enumeration/)  
* [PowerView PowerUsage 系列 \#1 \- 大规模用户配置文件枚举](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-1/)  
* [PowerView PowerUsage 系列 \#2 – 使用全局目录映射计算机短名称](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-2/)  
* [PowerView PowerUsage 系列 \#3 – 枚举外部域中的 GPO 编辑权限](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)  
* [PowerView PowerUsage 系列 \#4 – 查找跨信任 ACE](http://www.harmj0y.net/blog/powershell/the-powerview-powerusage-series-3/)  
* [侵略者 PowerView](http://threat.tevora.com/aggressor-powerview/)  
* [使用 BloodHound 绘制地形图](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)  
* [扫描 Active Directory 权限和特权帐户](https://adsecurity.org/?p=3658)  
* [Microsoft LAPS 安全和 Active Directory LAPS 配置侦察](https://adsecurity.org/?p=3164)  
* [信任方向：Active Directory 枚举和信任利用的推动者](https://bohops.com/2017/12/02/trust-direction-an-enabler-for-active-directory-enumeration-and-trust-exploitation/)  
* [SPN 发现](https://pentestlab.blog/2018/06/04/spn-discovery/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**横向移动**

* [Citrix 故事](https://rastamouse.me/blog/a-citrix-story/)  
* [使用 RDP 跨越网络隔离](https://rastamouse.me/blog/rdp-jump-boxes/)  
* [通过哈希通行证没有痛苦](http://resources.infosecinstitute.com/pass-hash-pass-ticket-no-pain/)  
* [滥用 DNSAdmins 权限在 Active Directory 中升级](http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html)  
* [使用 SQL Server 攻击森林信任](http://www.labofapenetrationtester.com/2017/03/using-sql-server-for-attacking-forest-trust.html)  
* [为红队成员扩展 BloodHound](https://www.youtube.com/watch?v=Pn7GWRXfgeI)  
* [信标命令的 OPSEC 注意事项](https://blog.cobaltstrike.com/2017/06/23/opsec-considerations-for-beacon-commands/)  
* [我第一次使用 BloodHound](https://blog.cobaltstrike.com/2016/12/14/my-first-go-with-bloodhound/)  
* [Kerberos 聚会技巧：利用 Kerberos 协议缺陷进行武器化](http://www.exumbraops.com/blog/2016/6/1/kerberos-party-tricks-weaponizing-kerberos-protocol-flaws)  
* [利用 Excel 应用程序和 dcom 进行横向移动](https://enigma0x3.net/2017/09/11/lateral-movement-using-excel-application-and-dcom/)  
* [使用 BloodHound 绘制地形图](http://threat.tevora.com/lay-of-the-land-with-bloodhound/)  
* [您（可能）从未听说过的最危险的用户权利](https://www.harmj0y.net/blog/activedirectory/the-most-dangerous-user-right-you-probably-have-never-heard-of/)  
* [无代理帖子利用](https://blog.cobaltstrike.com/2016/11/03/agentless-post-exploitation/)  
* [攻击域信任的指南](https://www.harmj0y.net/blog/redteaming/a-guide-to-attacking-domain-trusts/)  
* [传递哈希已死：LocalAccountTokenFilterPolicy 万岁](https://www.harmj0y.net/blog/redteaming/pass-the-hash-is-dead-long-live-localaccounttokenfilterpolicy/)  
* [针对性 Kerberoast 攻击](https://www.harmj0y.net/blog/activedirectory/targeted-kerberoasting/)  
* [不使用 Mimikatz 进行 Kerberoast 攻击](https://www.harmj0y.net/blog/powershell/kerberoasting-without-mimikatz/)  
* [滥用 GPO 权限](https://www.harmj0y.net/blog/redteaming/abusing-gpo-permissions/)  
* [利用 PowerView 滥用 Active Directory 权限](https://www.harmj0y.net/blog/redteaming/abusing-active-directory-permissions-with-powerview/)  
* [烘焙 AS-REP](https://www.harmj0y.net/blog/activedirectory/roasting-as-reps/)  
* [使用 CrackMapExec 获取商品：第 1 部分](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-1.html)  
* [使用 CrackMapExec 获取商品：第 2 部分](https://byt3bl33d3r.github.io/getting-the-goods-with-crackmapexec-part-2.html)  
* [DiskShadow：VSS 逃避、持久性和 Active Directory 数据库提取的回归](https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/)  
* [滥用导出函数和暴露的 DCOM 接口进行传递命令执行和横向移动](https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/)  
* [攻击域信任的指南](https://posts.specterops.io/a-guide-to-attacking-domain-trusts-971e52cb2944)  
* [Outlook 主页 – 另一个标尺矢量](https://sensepost.com/blog/2017/outlook-home-page-another-ruler-vector/)  
* [Outlook 表单和 Shell](https://sensepost.com/blog/2017/outlook-forms-and-shells/)  
* [滥用 COM 注册表结构：CLSID、LocalServer32 和 InprocServer32](https://bohops.com/2018/06/28/abusing-com-registry-structure-clsid-localserver32-inprocserver32/)  
* [LethalHTA——一种使用 DCOM 和 HTA 的新型横向移动技术](https://codewhitesec.blogspot.com/2018/07/lethalhta.html)  
* [滥用 DCOM 实现另一种横向移动技术](https://bohops.com/2018/04/28/abusing-dcom-for-yet-another-lateral-movement-technique/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**收藏**

* [从 Windows 10 锁定屏幕访问剪贴板第 1 部分](https://oddvar.moe/2017/01/24/accessing-clipboard-from-the-lock-screen-in-windows-10/)  
* [从 Windows 10 锁定屏幕访问剪贴板第 2 部分](https://oddvar.moe/2017/01/27/access-clipboard-from-lock-screen-in-windows-10-2/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**撤离**

* [DNS 数据泄露——这是什么以及如何使用？](https://blog.fosec.vn/dns-data-exfiltration-what-is-this-and-how-to-use-2f6c69998822)  
* [DNS 隧道](http://resources.infosecinstitute.com/dns-tunnelling/)  
* [sg1：用于数据加密、泄露和隐蔽通信的瑞士军刀](https://securityonline.info/sg1-swiss-army-knife-for-data-encryption-exfiltration-covert-communication/?utm_source=ReviveOldPost&utm_medium=social&utm_campaign=ReviveOldPost)  
* [通过 DNS 请求隐蔽通道进行数据泄露：DNSExfiltrator](https://n0where.net/data-exfiltration-over-dns-request-covert-channel-dnsexfiltrator)  
* [DET（可扩展）数据渗透工具包](https://github.com/PaulSec/DET)  
* [通过公式注入进行数据泄露第 1 部分](https://www.notsosecure.com/data-exfiltration-formula-injection/)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**指挥与控制**

### **域名前端**

* [Empre 域前端](https://www.xorrior.com/Empire-Domain-Fronting/)  
* [逃逸和逃避受限网络的出口 \- Tom Steele 和 Chris Patten](https://www.optiv.com/blog/escape-and-evasion-egressing-restricted-networks)  
* [寻找前端域名](https://github.com/rvrsh3ll/FindFrontableDomains)  
* [TOR 前端——利用隐藏服务保护隐私](https://www.mdsec.co.uk/2017/02/tor-fronting-utilising-hidden-services-for-privacy/)  
* [使用 GAE C2 服务器的简单域名前端 PoC](https://www.securityartwork.es/2017/01/31/simple-domain-fronting-poc-with-gae-c2-server/)  
* [通过 Cloudfront 备用域名进行域名前置](https://www.mdsec.co.uk/2017/02/domain-fronting-via-cloudfront-alternate-domains/)  
* [寻找可访问域的 Azure 域 \- thoth / Fionnbharr (@a\_profligate)](https://theobsidiantower.com/2017/07/24/d0a7cfceedc42bdf3a36f2926bd52863ef28befc.html)  
* [Google 群组：关于使用 Censys 查找 2000 多个 Azure 域的博客文章](https://groups.google.com/forum/#!topic/traffic-obf/7ygIXCPebwQ)  
* [红队洞察使用 Cobalt Strike 攻击 Google 主机的 HTTPS 域名](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)  
* [SSL 域名前端 101](http://www.rvrsh3ll.net/blog/offensive/ssl-domain-fronting-101/)  
* [如何识别 93k 个可前置域名的 CloudFront 域名](https://www.peew.pw/blog/2018/2/22/how-i-identified-93k-domain-frontable-cloudfront-domains)  
* [经过验证的 CloudFront SSL 域](https://medium.com/@vysec.private/validated-cloudfront-ssl-domains-27895822cea3)  
* [CloudFront 劫持](https://www.mindpointgroup.com/blog/pen-test/cloudfront-hijacking/)  
* [CloudFrunt GitHub 存储库](https://github.com/MindPointGroup/cloudfrunt)

### **连接代理**

* [重定向 Cobalt Strike DNS 信标](http://www.rvrsh3ll.net/blog/offensive/redirecting-cobalt-strike-dns-beacons/)  
* [Apache2Mod 重写设置](https://github.com/n0pe-sled/Apache2-Mod-Rewrite-Setup)  
* [使用 Apache mod\_rewrite 的 Cobalt Strike HTTP C2 重定向器](https://bluescreenofjeff.com/2016-06-28-cobalt-strike-http-c2-redirectors-with-apache-mod_rewrite/)  
* [高信誉重定向器和域名前端](https://blog.cobaltstrike.com/2017/02/06/high-reputation-redirectors-and-domain-fronting/)  
* [基于云的分布式黑客重定向器](https://blog.cobaltstrike.com/2014/01/14/cloud-based-redirectors-for-distributed-hacking/)  
* [使用 Apache mod\_rewrite 打击事件响应者](https://bluescreenofjeff.com/2016-04-12-combatting-incident-responders-with-apache-mod_rewrite/)  
* [使用 Apache mod\_rewrite 进行基于操作系统的重定向](https://bluescreenofjeff.com/2016-04-05-operating-system-based-redirection-with-apache-mod_rewrite/)  
* [Apache mod\_rewrite 的无效 URI 重定向](https://bluescreenofjeff.com/2016-03-29-invalid-uri-redirection-with-apache-mod_rewrite/)  
* [使用 Apache mod\_rewrite 和移动用户重定向增强你的网络钓鱼能力](https://bluescreenofjeff.com/2016-03-22-strengthen-your-phishing-with-apache-mod_rewrite-and-mobile-user-redirection/)  
* [mod\_rewrite 规则用于逃避供应商沙箱](https://gist.github.com/curi0usJack/971385e8334e189d93a6cb4671238b10)  
* [使用 Apache RewriteMap 使网络钓鱼链接过期](https://bluescreenofjeff.com/2016-04-19-expire-phishing-links-with-apache-rewritemap/)  
* [使用 NGINX 提供随机负载](https://gist.github.com/jivoi/a33ace2e25515a31aa2ffbae246d98c9)  
* [Mod\_Rewrite 自动设置](https://blog.inspired-sec.com/archive/2017/04/17/Mod-Rewrite-Automatic-Setup.html)  
* [混合钴打击重定向器](https://zachgrace.com/2018/02/20/cobalt_strike_redirectors.html)  
* [拓展您的 Horizo​​n Red Team – 现代 SAAS C2](https://cybersyndicates.com/2017/04/expand-your-horizon-red-team/)  
* [RTOps：使用 Ansible 自动部署重定向器](http://threat.tevora.com/automating-redirector-deployment-with-ansible/)

### **Web 服务**

* [C2 与 Dropbox](https://pentestlab.blog/2017/08/29/command-and-control-dropbox/)  
* [使用 Gmail 进行 C2](https://pentestlab.blog/2017/08/03/command-and-control-gmail/)  
* [C2 与 Twitter](https://pentestlab.blog/2017/09/26/command-and-control-twitter/)  
* [适用于 Cobalt Strike C2 的 Office 365](https://labs.mwrinfosecurity.com/blog/tasking-office-365-for-cobalt-strike-c2/)  
* [红队洞察使用 Cobalt Strike 攻击 Google 主机的 HTTPS 域名](https://www.cyberark.com/threat-research-blog/red-team-insights-https-domain-fronting-google-hosts-using-cobalt-strike/)  
* [一个基于 Python 的隐秘 Windows 后门，使用 Github 作为 C＆C 服务器](http://securityblog.gr/4434/a-stealthy-python-based-windows-backdoor-that-uses-github-as-a-cc-server/)  
* [外部 C2（第三方命令和控制）](https://www.cobaltstrike.com/help-externalc2)  
* [通过外部 C2 发起 Cobalt Strike 攻击——以最隐蔽的方式发出信号](https://outflank.nl/blog/2017/09/17/blogpost-cobalt-strike-over-external-c2-beacon-home-in-the-most-obscure-ways/)  
* [Cobalt Strike 的外部 C2](https://github.com/ryhanson/ExternalC2/)  
* [Cobalt Strike 的外部 C2 框架](http://www.insomniacsecurity.com/2018/01/11/externalc2.html)  
* [外部 C2 框架 \- GitHub Repo](https://github.com/Und3rf10w/external_c2_framework)  
* [隐藏在云端：使用 Amazon API 的 Cobalt Strike Beacon C2](https://github.com/Und3rf10w/external_c2_framework)  
* [探索 Cobalt Strike 的 ExternalC2 框架](https://blog.xpnsec.com/exploring-cobalt-strikes-externalc2-framework/)

### **应用层协议**

* [C2 WebSocket](https://pentestlab.blog/2017/12/06/command-and-control-websocket/)  
* [C2 病毒管理](https://pentestlab.blog/2017/11/20/command-and-control-wmi/)  
* [C2 网站](https://pentestlab.blog/2017/11/14/command-and-control-website/)  
* [C2 图像](https://pentestlab.blog/2018/01/02/command-and-control-images/)  
* [C2 JavaScript](https://pentestlab.blog/2018/01/08/command-and-control-javascript/)  
* [C2 Web界面](https://pentestlab.blog/2018/01/03/command-and-control-web-interface/)  
* [带有 DNS 的 C2](https://pentestlab.blog/2017/09/06/command-and-control-dns/)  
* [使用 https 的 C2](https://pentestlab.blog/2017/10/04/command-and-control-https/)  
* [C2与webdav](https://pentestlab.blog/2017/09/12/command-and-control-webdav/)  
* [介绍 Merlin — 跨平台后利用 HTTP/2 命令和控制工具](https://medium.com/@Ne0nd0g/introducing-merlin-645da3c635a)  
* [InternetExplorer.C2 应用程序](https://adapt-and-attack.com/2017/12/19/internetexplorer-application-for-c2/)

### **基础设施**

* [使用 Terraform 自动部署红队基础设施 \- 第 1 部分](https://rastamouse.me/blog/terraform-pt1/)  
* [使用 Terraform 自动部署红队基础设施 \- 第 2 部分](https://rastamouse.me/blog/terraform-pt2/)  
* [红队基础设施 \- AWS 加密 EBS](https://rastamouse.me/blog/encrypted-ebs/)  
* [6 条红队基础设施建议](https://cybersyndicates.com/2016/11/top-red-team-tips/)  
* [如何使用 Digital Ocean 构建 C2 基础设施 \- 第 1 部分](https://www.blackhillsinfosec.com/build-c2-infrastructure-digital-ocean-part-1/)  
* [红队持续行动的基础设施](https://blog.cobaltstrike.com/2014/09/09/infrastructure-for-ongoing-red-team-operations/)  
* [攻击基础设施日志聚合和监控](https://posts.specterops.io/attack-infrastructure-log-aggregation-and-monitoring-345e4173044e)  
* [轻松实现随机可塑性 C2 配置文件](https://bluescreenofjeff.com/2017-08-30-randomized-malleable-c2-profiles-made-easy/)  
* [迁移您的基础设施](https://blog.cobaltstrike.com/2015/10/21/migrating-your-infrastructure/)  
* [ICMP C2](https://pentestlab.blog/2017/07/28/command-and-control-icmp/)  
* [使用 WebDAV 功能作为隐蔽通道](https://arno0x0x.wordpress.com/2017/09/07/using-webdav-features-as-a-covert-channel/)  
* [安全的红队基础设施](https://medium.com/@malcomvetter/safe-red-team-infrastructure-c5d6a0f13fac)  
* [使用 COBALTSTIKE 和 LET's ENCRYPT 导出 BLUECOAT](https://cybersyndicates.com/2016/12/egressing-bluecoat-with-cobaltstike-letsencrypt/)  
* [使用 Active Directory 进行命令和控制](http://www.harmj0y.net/blog/powershell/command-and-control-using-active-directory/)  
* [分布式红队行动的愿景](https://blog.cobaltstrike.com/2013/02/12/a-vision-for-distributed-red-team-operations/)  
* [设计有效的隐蔽红队攻击基础设施](https://bluescreenofjeff.com/2017-12-05-designing-effective-covert-red-team-attack-infrastructure/)  
* [使用 Apache mod\_rewrite 提供随机负载](https://bluescreenofjeff.com/2017-06-13-serving-random-payloads-with-apache-mod_rewrite/)  
* [邮件服务器变得简单](https://blog.inspired-sec.com/archive/2017/02/14/Mail-Server-Setup.html)  
* [使用 Apache mod\_rewrite 保护你的 Empire C2](https://thevivi.net/2017/11/03/securing-your-empire-c2-with-apache-mod_rewrite/)  
* [使用 Ansible 和 Docker 自动发布 Gophish](https://jordan-wright.com/blog/post/2018-02-04-automating-gophish-releases/)  
* [如何为 Cobalt Strike 编写可塑性强的 C2 配置文件](https://bluescreenofjeff.com/2017-01-24-how-to-write-malleable-c2-profiles-for-cobalt-strike/)  
* [如何为 Empire 制作通讯资料](https://bluescreenofjeff.com/2017-03-01-how-to-make-communication-profiles-for-empire/)  
* [美丽新世界：可塑性 C2](http://www.harmj0y.net/blog/redteaming/a-brave-new-world-malleable-c2/)  
* [可塑性指挥与控制](https://www.cobaltstrike.com/help-malleable-c2)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**嵌入式和外围设备黑客**

* [使用 Proxmark3 和 ProxBrute](https://www.trustwave.com/Resources/SpiderLabs-Blog/Getting-in-with-the-Proxmark-3-and-ProxBrute/)  
* [RFID 徽章复制实用指南](https://blog.nviso.be/2017/01/11/a-practical-guide-to-rfid-badge-copying/)  
* [渗透测试人员背包的组成](https://www.tunnelsup.com/contents-of-a-physical-pen-testers-backpack/)  
* [MagSpoof \- 信用卡/磁条欺骗器](https://github.com/samyk/magspoof)  
* [无线键盘嗅探器](https://samy.pl/keysweeper/)  
* [使用 Proxmark 3 进行 RFID 黑客攻击](https://blog.kchung.co/rfid-hacking-with-the-proxmark-3/)  
* [RFID 的瑞士军刀](https://www.cs.bham.ac.uk/~garciaf/publications/Tutorial_Proxmark_the_Swiss_Army_Knife_for_RFID_Security_Research-RFIDSec12.pdf)  
* [探索NFC攻击面](https://media.blackhat.com/bh-us-12/Briefings/C_Miller/BH_US_12_Miller_NFC_attack_surface_WP.pdf)  
* [超越智能卡](http://gerhard.dekoninggans.nl/documents/publications/dekoninggans.phd.thesis.pdf)  
* [逆向工程 HID iClass 主密钥](https://blog.kchung.co/reverse-engineering-hid-iclass-master-keys/)  
* [Android 开放攻击项目 (AOPP)](https://www.pwnieexpress.com/aopp)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**其他**

* [Vysec 的红色提示](https://github.com/vysec/RedTips)  
* [2016 年 ccde 红队的 Cobalt Strike 技巧](https://blog.cobaltstrike.com/2016/02/23/cobalt-strike-tips-for-2016-ccdc-red-teams/)  
* [红队行动模型](https://blog.cobaltstrike.com/2015/07/09/models-for-red-team-operations/)  
* [规划红队演习](https://github.com/magoo/redteam-plan)  
* [Raphael Mudge——肮脏的红队伎俩](https://www.youtube.com/watch?v=oclbbqvawQg)  
* [介绍对手弹性方法第 1 部分](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-one-e38e06ffd604)  
* [介绍对手的弹性方法第 2 部分](https://posts.specterops.io/introducing-the-adversary-resilience-methodology-part-two-279a1ed7863d)  
* [负责任的红队](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)  
* [2017 年环太平洋 CCDC 红队](https://bluescreenofjeff.com/2017-05-02-red-teaming-for-pacific-rim-ccdc-2017/)  
* [我如何为 2015 年 PRCCDC 红队做准备](https://bluescreenofjeff.com/2015-04-15-how-i-prepared-to-red-team-at-prccdc-2015/)  
* [2016 年环太平洋 CCDC 红队](https://bluescreenofjeff.com/2016-05-24-pacific-rim-ccdc_2016/)  
* [负责任的红队](https://medium.com/@malcomvetter/responsible-red-teams-1c6209fd43cc)  
* [Awesome-CobaltStrike](https://github.com/zer0yu/Awesome-CobaltStrike)  
* RedTeam 从零到一[第一部分](https://payatu.com/redteaming-from-zero-to-one-part-1) [第二部分](https://payatu.com/redteaming-zero-one-part-2)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents) **RedTeam 小工具**

#### **网络植入**

* [局域网分接器](https://hackerwarehouse.com/product/lan-tap-pro/)  
* [局域网龟](https://hakshop.com/collections/network-implants/products/lan-turtle)  
* [狂欢兔子](https://hakshop.com/collections/physical-access/products/bash-bunny)  
* [基鳄鱼](https://shop.hak5.org/collections/sale/products/key-croc)  
* [包松鼠](https://hakshop.com/products/packet-squirrel)  
* [鲨鱼杰克](https://shop.hak5.org/collections/sale/products/shark-jack)

#### **Wifi 审计**

* [WiFi菠萝](https://hakshop.com/products/wifi-pineapple)  
* [Alpha 长距离无线 USB](https://hackerwarehouse.com/product/alfa-802-11bgn-long-range-usb-wireless-adapter/)  
* [Wifi 解锁怪物](https://www.tindie.com/products/lspoplove/dstike-wifi-deauther-monster/)  
* [疯狂 PA](https://www.amazon.com/gp/product/B00VYA3A2U/ref=as_li_tl)  
* [信号猫头鹰](https://shop.hak5.org/products/signal-owl)

#### **物联网**

* [BLE 密钥](https://hackerwarehouse.com/product/blekey/)  
* [Proxmark3](https://hackerwarehouse.com/product/proxmark3-kit/)  
* [Zigbee 嗅探器](https://www.attify-store.com/products/zigbee-sniffing-tool-atmel-rzraven)  
* [Attify IoT 漏洞利用工具包](https://www.attify-store.com/collections/frontpage/products/jtag-exploitation-kit-with-lab-manual)

#### **软件定义无线电 \- SDR**

* [HackRF 一个捆绑包](https://hackerwarehouse.com/product/hackrf-one-kit/)  
* [远程控制软件](https://hackerwarehouse.com/product/rtlsdr/)  
* [YARD 棒一捆](https://hackerwarehouse.com/product/yard-stick-one-kit/)  
* [优步之牙](https://hackerwarehouse.com/product/ubertooth-one/)

#### **杂项**

* [钥匙扣](https://hackerwarehouse.com/product/keygrabber/)  
* [磁力欺骗](https://store.ryscc.com/products/magspoof%20)  
* [毒水龙头](https://samy.pl/poisontap/)  
* [键盘清扫器](https://samy.pl/keysweeper/)  
* [USB 小黄鸭](https://hakshop.com/collections/physical-access/products/usb-rubber-ducky-deluxe)  
* [屏风蟹](https://shop.hak5.org/collections/sale/products/screen-crab)  
* [O.MG 电缆](https://shop.hak5.org/collections/featured-makers/products/o-mg-cable)  
* [凯西](https://shop.hak5.org/collections/featured-makers/products/keysy)  
* [Dorothy 为 Okta SSO](https://github.com/elastic/dorothy)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**电子书**

* [下一代红队](https://www.amazon.com/Next-Generation-Teaming-Henry-Dalziel/dp/0128041714)  
* [有针对性的网络攻击](https://www.amazon.com/Targeted-Cyber-Attacks-Multi-staged-Exploits/dp/0128006048)  
* [高级渗透测试：入侵世界上最安全的网络](https://www.amazon.com/Advanced-Penetration-Testing-Hacking-Networks/dp/1119367689)  
* [社会工程师的策略 实用借口](https://www.amazon.com/Social-Engineers-Playbook-Practical-Pretexting/dp/0692306617/)  
* [黑客手册 3：渗透测试实用指南](https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing-ebook/dp/B07CSPFYZ2)  
* [如何像色情明星一样入侵：入侵银行的分步过程](https://www.amazon.com/How-Hack-Like-PORNSTAR-breaking-ebook/dp/B01MTDLGQQ)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**培训（免费）**

* [谍报技术 \- 红队行动课程](https://www.youtube.com/watch?v=IRpS7oZ3z0o&list=PL9HO6M_MU2nesxSmhJjEvwLhUoHPHmXvz)  
* [高级威胁战术课程和笔记](https://blog.cobaltstrike.com/2015/09/30/advanced-threat-tactics-course-and-notes/)  
* [FireEye——关于红队行动的白板会议](https://www.fireeye.com/services/red-team-assessments/red-team-operations-video-training.html)

#### **家庭实验室**

* [构建有效的 Active Directory 实验室环境以进行测试](https://adsecurity.org/?p=2653)  
* [设置 DetectionLab](https://www.c2.lol/articles/setting-up-chris-longs-detectionlab)  
* [易受攻击的 AD \- 使你的家庭 AD 实验室易受攻击的脚本](https://github.com/WazeHell/vulnerable-AD)

## [**↑**](https://github.com/yeyintminthuhtut/Awesome-Red-Teaming#table-of-contents)**认证**

* [CREST 认证模拟攻击专家](http://www.crest-approved.org/examination/certified-simulated-attack-specialist/)  
* [CREST 认证模拟攻击经理](http://www.crest-approved.org/examination/certified-simulated-attack-manager/)  
* [SEC564：红队行动和威胁模拟](https://www.sans.org/course/red-team-operations-and-threat-emulation)  
* [ELearn 安全渗透测试 eXtreme](https://www.elearnsecurity.com/course/penetration_testing_extreme/)  
* [认证红队专业人士](https://www.pentesteracademy.com/activedirectorylab)  
* [认证红队专家](https://www.pentesteracademy.com/redteamlab)  
* [PentesterAcademy 认证企业安全专家 (PACES)](https://www.pentesteracademy.com/gcb)

