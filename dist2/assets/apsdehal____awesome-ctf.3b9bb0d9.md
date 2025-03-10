apsdehal/awesome-ctf: A curated list of CTF frameworks, libraries, resources and softwares    https://github.com/apsdehal/awesome-ctf

# 超棒的 CTF [![构建状态](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![超棒的](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

精选的 [夺旗赛](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) 框架、库、资源、软件和教程列表。此列表旨在帮助初学者和经验丰富的 CTF 玩家在一个地方找到与 CTF 相关的所有内容。

### 贡献

请首先快速浏览一下[贡献指南](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md)。

#### _如果您知道这里没有的工具，请随时打开拉取请求。_

＃＃＃ 为什么？

建立 CTF 中使用的工具集合并记住它们需要时间。此 repo 有助于将所有这些分散的工具集中到一个地方。

＃＃＃ 内容

- [超棒的 CTF](#awesome-ctf)
  - [创建](#create)
    - [法医](#法医)
    - [平台](#platforms)
    - [隐写术](#隐写术)
    - [网络](#web)
  - [解决](#解决)
    - [攻击](#攻击)
    - [暴力破解者](#暴力破解者)
    - [密码学](#crypto)
    - [漏洞](#漏洞)
    - [法医](#法医-1)
    - [网络](#networking)
    - [反转](#反转)
    - [服务](#services)
    - [隐写术](#隐写术-1)
    - [网络](#web-1)

- [资源](#resources)
  - [操作系统](#operating-systems)
  - [入门包](#starter-packs)
  - [教程](#教程)
  - [战争游戏](#战争游戏)
  - [网站](#websites)
  - [维基](#wikis)
  - [写作合集](#writeups-collections)


＃ 创造

*用于创建 CTF 挑战的工具*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - 关于构建、测试和自定义您自己的夺旗挑战的在线书籍。


取证

*用于创建取证挑战的工具*

- [Dnscat2](https://github.com/iagox86/dnscat2) - 通过 DNS 进行主机通信。
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - 分类程序。
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - 以工件为中心的 DFIR 工具。
- [注册表转储程序](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_​​registry_keys.html) - 转储您的注册表。

## 平台

*可用于举办 CTF 的项目*

- [CTFd](https://github.com/isislab/CTFd) - 来自纽约大学坦顿分校 ISISLab 的危险风格 CTF 托管平台。
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - 开发、部署和维护您自己的 CTF 基础设施。
- [FBCTF](https://github.com/facebook/fbctf) - 来自 Facebook 的举办夺旗比赛的平台。
- [Haaukins](https://github.com/aau-network-security/haaukins) - 一个用于安全教育的高度可访问且自动化的虚拟化平台。
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF 评分平台。
- [Mellivora](https://github.com/Nakiami/mellivora) - 用 PHP 编写的 CTF 引擎。
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - 用于举办 CTF 的超轻量级平台。不涉及 JS。
- [NightShade](https://github.com/UnrealAkama/NightShade) - 一个简单的安全 CTF 框架。
- [OpenCTF](https://github.com/easyctf/openctf) - 盒子里的 CTF。只需最少的设置。
- [PicoCTF](https://github.com/picoCTF/picoCTF) - 用于运行 picoCTF 的平台。一个适合托管任何 CTF 的优秀框架。
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - 用于创建/管理/打包危险边缘 CTF 挑战的小型框架。
- [RootTheBox](https://github.com/moloch--/RootTheBox) - 黑客游戏（CTF 记分牌和游戏管理器）。
- [Scorebot](https://github.com/legitbs/scorebot) - Legitbs (Defcon) 的 CTF 平台。
- [SecGen](https://github.com/cliffe/SecGen) - 安全场景生成器。创建随机易受攻击的虚拟机。

隐写术

*用于创建隐秘挑战的工具*

检查隐写术的解决方案部分。

网络

*用于创建 Web 挑战的工具*

*JavaScript 混淆器*

- [Metasploit JavaScript 混淆器](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


＃ 解决

*解决 CTF 挑战所用的工具*

攻击

*用于执行各种攻击的工具*

- [Bettercap](https://github.com/bettercap/bettercap) - 执行 MITM（中间人）攻击的框架。
- [Yersinia](https://github.com/tomac/yersinia) - 攻击第 2 层的各种协议。

加密

*用于解决加密挑战的工具*

- [Cyber​​Chef](https://gchq.github.io/Cyber​​Chef) - 用于分析和解码数据的 Web 应用程序。
- [FeatherDuster](https://github.com/nccgroup/featherduster) - 一种自动化、模块化的密码分析工具。
- [Hash Extender](https://github.com/iagox86/hash_extender) - 用于执行哈希长度扩展攻击的实用工具。
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - 用于执行 padding oracle 攻击的 CLI 工具。
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - 用于破解 PkZip 加密的工具。
- [QuipQuip](https://quipqiup.com) - 一种破解替换密码或维吉尼亚密码的在线工具（无需密钥）。
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - 用于通过各种攻击恢复 RSA 私钥的工具。
- [RSATool](https://github.com/ius/rsatool) - 利用 p 和 q 的知识生成私钥。
- [XORTool](https://github.com/hellman/xortool) - 用于分析多字节异或密码的工具。

## 暴力破解者

*用于各种暴力破解的工具（密码等）*

- [Hashcat](https://hashcat.net/hashcat/) - 密码破解器
- [Hydra](https://tools.kali.org/password-attacks/hydra) - 一款并行化的登录破解程序，支持多种攻击协议
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - John the Ripper 的社区增强版本。
- [John The Ripper](http://www.openwall.com/john/) - 密码破解者。
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr 是一个强力框架，真正模块化并且脚本友好。
- [Ophcrack](http://ophcrack.sourceforge.net/) - 基于彩虹表的 Windows 密码破解器。
- [Patator](https://github.com/lanjelot/patator) - Patator 是一款多用途暴力破解器，采用模块化设计。
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Burp Suite 扩展，用于发送大量 HTTP 请求

漏洞

*用于解决漏洞挑战的工具*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - 在进程中注入 dll。
- [libformatstr](https://github.com/hellman/libformatstr) - 简化格式字符串的利用。
- [Metasploit](http://www.metasploit.com/) - 渗透测试软件。
  - [备忘单]（https://www.comparitech.com/net-admin/metasploit-cheat-sheet/）
- [one_gadget](https://github.com/david942j/one_gadget) - 用于查找小工具 `execve('/bin/sh', NULL, NULL)` 调用的工具。
  -`gem 安装 one_gadget`
- [Pwntools](https://github.com/Gallopsled/pwntools) - 用于编写漏洞利用的 CTF 框架。
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU 交互式运行时分析器。
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - ROP 利用框架。
- [V0lt](https://github.com/P1kachu/v0lt) - 安全 CTF 工具包。

取证

*用于解决取证难题的工具*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - 破解 802.11 WEP 和 WPA-PSK 密钥。
  -`apt-get 安装 aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - 分析声音文件 (mp3、m4a 等等)。
  -`apt-get 安装 audacity`
- [Bkhive 和 Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - 转储 SYSTEM 和 SAM 文件。
  -`apt-get 安装 samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE 编辑器。
- [Creddump](https://github.com/moyix/creddump) - 转储 Windows 凭据。
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Rips 可通过 Web 访问的（分布式）版本控制系统。
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - 读取、写入和编辑文件元数据。
- [Extundelete](http://extundelete.sourceforge.net/) - 用于从可安装映像中恢复丢失的数据。
- [Fibratus](https://github.com/rabbitstack/fibratus) - 用于探索和跟踪 Windows 内核的工具。
- [Foremost](http://foremost.sourceforge.net/) - 使用标题提取特定类型的文件。
  -`apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - 用于修复损坏的文件系统。
- [Malzilla](http://malzilla.sourceforge.net/) - 恶意软件搜寻工具。
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - 网络取证分析工具。
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - 查找并提取 PDF 文件中压缩的 zlib 文件。
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - 验证 PNG 的完整性并以人类可读的形式转储所有块级信息。
  -`apt-get 安装 pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - 从 exe 文件中提取各种文件类型。
- [Shellbags](https://github.com/williballenthin/shellbags) - 调查 NT\_USER.dat 文件。
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - 一个空白隐写术工具。
- [USBRip](https://github.com/snovvcrash/usbrip) - 用于在 GNU/Linux 上跟踪 USB 设备工件（USB 事件历史）的简单 CLI 取证工具。
- [Volatility](https://github.com/volatilityfoundation/volatility) - 调查内存转储。
- [Wireshark](https://www.wireshark.org) - 用于分析 pcap 或 pcapng 文件

*注册表查看器*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - 适用于 Windows 的简单工具，允许您从外部驱动器读取离线注册表文件并以 .reg 文件格式查看所需的注册表项。
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - 用于查看 Windows 注册表。

网络

*用于解决网络挑战的工具*

- [Masscan](https://github.com/robertdavidgraham/masscan) - 大规模 IP 端口扫描器、TCP 端口扫描器。
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - 一个用于检查网络上的主机（和其他非网络活动）的 Linux 工具。
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe 是一个将 Tor 网络设置为默认网关的脚本。
- [Nmap](https://nmap.org/) - 一个用于网络发现和安全审计的开源实用程序。
- [Wireshark](https://www.wireshark.org/) - 分析网络转储。
  -`apt-get 安装 wireshark`
- [Zeek](https://www.zeek.org) - 一个开源网络安全监视器。
- [Zmap](https://zmap.io/) - 一个开源网络扫描器。

反转

*用于解决逆向挑战的工具*

- [Androguard](https://github.com/androguard/androguard) - 对 Android 应用程序进行逆向工程。
- [Angr](https://github.com/angr/angr) - 与平台无关的二进制分析框架。
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - 又一个 Android 反编译器。
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android反编译器。
- [Barf](https://github.com/programa-stic/barf-project) - 二进制分析和逆向工程框架。
- [Binary Ninja](https://binary.ninja/) - 二进制分析框架。
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - 二进制工具集合。
- [BinWalk](https://github.com/devttys0/binwalk) - 分析、逆向工程和提取固件映像。
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - 将 x86/SPARC/PowerPC/ST-20 二进制文件反编译为 C 文件。
- [ctf_import](https://github.com/docileninja/ctf_import) – 跨平台从精简的二进制文件运行基本功能。
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker 查找二进制可执行文件中的易受攻击的模式。
- [demovfuscator](https://github.com/kirschju/demovfuscator) - 一个正在开发中的针对 movfuscated 二进制文件的反混淆器。
- [Frida](https://github.com/frida/) - 动态代码注入。
- [GDB](https://www.gnu.org/software/gdb/) - GNU 项目调试器。
- [GEF](https://github.com/hugsy/gef) - GDB 插件。
- [Ghidra](https://ghidra-sre.org/) - 开源逆向工程工具套件。与 IDA Pro 类似。
- [Hopper](http://www.hopperapp.com/) - 适用于 OSX 和 Linux 的逆向工程工具（反汇编程序）。
- [IDA Pro](https://www.hex-rays.com/products/ida/) - 最常用的逆向软件。
- [Jadx](https://github.com/skylot/jadx) - 反编译 Android 文件。
- [Java 反编译器](http://www.javadecompilers.com) - Java 和 Android APK 的在线反编译器。
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java 反编译器和反汇编器。
- [反对意见]（https://github.com/sensepost/objection） - 运行时移动探索。
- [PEDA](https://github.com/longld/peda) - GDB 插件（仅限 python2.7）。
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - 英特尔推出的动态二进制检测工具。
- [PINCE](https://github.com/korcankaraokcu/PINCE) - GDB 前端/逆向工程工具，专注于游戏黑客和自动化。
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - 一个使用英特尔引脚进行侧信道分析的工具。
- [Plasma](https://github.com/joelpx/plasma) - 一个针对 x86/ARM/MIPS 的交互式反汇编程序，可以生成带有彩色语法的缩进伪代码。
- [Pwndbg](https://github.com/pwndbg/pwndbg) - 一个 GDB 插件，提供一套实用程序，可轻松破解 GDB。
- [radare2](https://github.com/radare/radare2) - 一个可移植的逆向框架。
- [Triton](https://github.com/JonathanSalwan/Triton/) - 动态二进制分析（DBA）框架。
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - 反编译 Python 2.7 二进制文件 (.pyc)。
- [WinDbg](http://www.windbg.org/) - Microsoft 发布的 Windows 调试器。
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - 可以复制具有执行权限但没有读取权限的可执行文件的程序。
- [Z3](https://github.com/Z3Prover/z3) - 来自微软研究院的定理证明器。

*JavaScript 反混淆器*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - 一个 Javascript 恶意软件分析工具。
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - 分析混淆的 Javascript 代码。

*SWF 分析器*
- [RABCDAsm](https://github.com/Cyber​​Shadow/RABCDAsm) - 实用程序集合，包括 ActionScript 3 汇编器/反汇编器。
- [Swftools](http://www.swftools.org/) - 用于处理 SWF 文件的实用程序集合。
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) - 用于分析 Flash 文件的 Python 脚本。

## 服务

*互联网上提供各种有用的服务*

- [CSWSH](http://cow.cat/cswsh.html) - 跨站点 WebSocket 劫持测试器。
- [Request Bin](https://requestbin.com/) - 让您检查对特定 URL 的 http 请求。

隐写术

*用于解决隐写术挑战的工具*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve 是一个对图像进行层分析的平台（开源）。
- [转换](http://www.imagemagick.org/script/convert.php) - 转换图像黑白格式并应用过滤器。
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - 显示 JPEG 文件中的 EXIF 信息。
- [Exiftool](https://linux.die.net/man/1/exiftool) - 读取和写入文件中的元信息。
- [Exiv2](http://www.exiv2.org/manpage.html) - 图像元数据操作工具。
- [图像隐写术](https://sourceforge.net/projects/image-steg/) - 使用可选加密将文本和文件嵌入图像中。易于使用的用户界面。
- [在线图像隐写术](https://incoherency.co.uk/image-steganography) - 这是一个客户端 Javascript 工具，用于将图像以隐写术的方式隐藏在其他图像的较低“位”内
- [ImageMagick](http://www.imagemagick.org/script/index.php) - 用于处理图像的工具。
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - 通用隐写术工具。
- [Pngtools](https://packages.debian.org/sid/pngtools) - 用于与 PNG 相关的各种分析。
  -`apt-get 安装 pngtools`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - 用于去模糊和修复失焦图像。
- [Steganabara](https://www.openhub.net/p/steganabara) - 用 Ja​​va 编写的隐写分析工具。
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - 在线隐写术编码器和解码器。
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - 对 JPG 图像发起暴力字典攻击。
- [StegCracker](https://github.com/Paradoxis/StegCracker) - 隐写术暴力破解实用程序，用于揭示文件内的隐藏数据。
- [stegextract](https://github.com/evyatarmeged/stegextract) - 检测图像中的隐藏文件和文本。
- [Steghide](http://steghide.sourceforge.net/) - 隐藏各种图像中的数据。
- [StegOnline](https://georgeom.net/StegOnline/upload) - 进行广泛的图像隐写操作，例如隐藏/显示隐藏在位内的文件（开源）。
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - 将各种隐写术应用于图像。
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP 分析。

网络

*用于解决 Web 挑战的工具*

- [BurpSuite](https://portswigger.net/burp) - 用于测试网站安全性的图形工具。
- [Commix](https://github.com/commixproject/commix) - 自动化一体化操作系统命令注入和利用工具。
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Firefox 插件，可轻松进行网络攻击。
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - 拦截代理以重放、调试和模糊测试 HTTP 请求和响应
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - 用于调试网络请求的 Chrome 插件。
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - 一种用于侦察和漏洞扫描的高性能攻击性安全工具。
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自动 SQL 注入和数据库接管工具。
  ```pip 安装 sqlmap```
- [W3af](https://github.com/andresriancho/w3af) - Web 应用程序攻击和审计框架。
- [XSSer](http://xsser.sourceforge.net/) - 自动化 XSS 测试器。


＃ 资源

*如何了解 CTF*

操作系统

*渗透测试和安全实验室操作系统*

- [Android Tamer](https://androidtamer.com/) - 基于 Debian。
- [BackBox](https://backbox.org/) - 基于 Ubuntu。
- [BlackArch Linux](https://blackarch.org/) - 基于 Arch Linux。
- [Fedora 安全实验室](https://labs.fedoraproject.org/security/) - 基于 Fedora。
- [Kali Linux](https://www.kali.org/) - 基于 Debian。
- [Parrot Security OS](https://www.parrotsec.org/) - 基于 Debian。
- [Pentoo](http://www.pentoo.ch/) - 基于 Gentoo。
- [URIX OS](http://urix.us/) - 基于 openSUSE。
- [Wifislax](http://www.wifislax.com/) - 基于 Slackware。

*恶意软件分析师和逆向工程*

- [Flare VM](https://github.com/fireeye/flare-vm/) - 基于Windows。
- [REMnux](https://remnux.org/) - 基于 Debian。

## 入门包

*安装程序脚本、实用工具的集合*

- [CTF 工具](https://github.com/zardus/ctf-tools) - 用于安装各种安全研究工具的安装脚本集合。
- [LazyKali](https://github.com/jlevitsk/lazykali) - LazyKali 的 2016 年更新版，简化了工具安装和配置。

## 教程

*学习如何玩 CTF 的教程*

- [CTF 现场指南](https://trailofbits.github.io/ctf/) - Trails of Bits 的现场指南。
- [CTF 资源](http://ctfs.github.io/resources/) - 由社区维护的入门指南。
- [如何开始 CTF](https://www.endgame.com/blog/how-get-started-ctf) - Endgame 为 CTF 初学者提供的简短指南
- [CTF 课程简介](https://www.hoppersroppers.org/courseCTF.html) - 一门免费课程，向初学者传授取证、加密和 Web-ex 的基础知识。
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - 流行 CTF 平台的视频教程和演练。
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - 有关利用的视频教程。
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - 针对 CTF 初学者的小型课程（俄语）。


## 战争游戏

*永远在线的 CTF*

- [后门](https://backdoor.sdslabs.co/) - 由 SDSLabs 提供的安全平台。
- [Crackmes](https://crackmes.one/) - 逆向工程挑战。
- [CryptoHack](https://cryptohack.org/) - 有趣的加密挑战。
- [echoCTF.RED](https://echoctf.red/) - 在线 CTF，可攻击多种目标。
- [漏洞练习](https://exploit-exercises.lains.space/) - 各种虚拟机，用于了解各种计算机安全问题。
- [Exploit.Education](http://exploit.education) - 各种虚拟机，用于学习各种计算机安全问题。
- [Gracker](https://github.com/Samuirai/gracker) - 二进制挑战具有缓慢的学习曲线，并且每个级别都有写作。
- [Hack The Box](https://www.hackthebox.eu) - 每周为各类安全爱好者提供 CTF 比赛。
- [Hack This Site](https://www.hackthissite.org/) - 黑客的训练场。
- [Hacker101](https://www.hacker101.com/) - 来自 HackerOne 的 CTF
- [Hacking-Lab](https://hacking-lab.com/) - 道德黑客、计算机网络和安全挑战平台。
- [磨练你的忍者技能]（https://honeyourskills.ninja/） - 从基础开始的网络挑战。
- [IO](http://io.netgarage.org/) - 二进制挑战的战争游戏。
- [Microcorruption](https://microcorruption.com) - 嵌入式安全 CTF。
- [Over The Wire](http://overthewire.org/wargames/) - 由 OvertheWire 社区维护的战争游戏。
- [PentesterLab](https://pentesterlab.com/) - 各种 VM 和在线挑战（付费）。
- [PicoCTF](https://2019game.picoctf.com) - 全年 ctf 游戏。来自每年 picoCTF 比赛的问题。
- [PWN 挑战](http://pwn.eonew.cn/) - 二进制利用战争游戏。
- [Pwnable.kr](http://pwnable.kr/) - Pwn 游戏。
- [Pwnable.tw](https://pwnable.tw/) - 二进制战争游戏。
- [Pwnable.xyz](https://pwnable.xyz/) - 二进制利用战争游戏。
- [Reversin.kr](http://reversing.kr/) - 倒车挑战。
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 团队在线 CTF。
- [Root-Me](https://www.root-me.org/) - 黑客和信息安全学习平台。
- [ROP 战争游戏](https://github.com/xelenonz/game) - ROP 战争游戏。
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - 以节日为主题的挑战
  每年发布并由 SANS 维护。
- [SmashTheStack](http://smashthestack.org/) - 由 SmashTheStack 社区维护的各种战争游戏。
- [Viblo CTF](https://ctf.viblo.asia) - 各种精彩的 CTF 挑战，分为多个类别。有练习模式和竞赛模式。
- [VulnHub](https://www.vulnhub.com/) - 基于虚拟机，适用于数字安全、计算机应用和网络管理。
- [W3Challs](https://w3challs.com) - 一个渗透测试训练平台，提供各种类别的各种计算机挑战。
- [WebHacking](http://webhacking.kr) - 针对网络的黑客挑战。


*自托管 CTF*
- [该死的易受攻击的 Web 应用程序](http://www.dvwa.co.uk/) - 该死的易受攻击的 PHP/MySQL Web 应用程序。
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - 用于在 [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) 上轻松举办 CTF 的脚本和工具。

网站

*有关 CTF 的各种综合网站*

- [很棒的 CTF 备忘单](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF 备忘单。
- [CTF 时间](https://ctftime.org/) - 有关世界各地 CTF 的一般信息。
- [Reddit 安全 CTF](http://www.reddit.com/r/securityctf) - Reddit CTF 类别。

## 维基

*有各种 Wiki 可供您了解 CTF*

- [Bamboofox](https://bamboofox.github.io/) - 学习 CTF 的中文资源。
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - 来自 bi0s 团队的 Wiki。
- [CTF 备忘单](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF 技巧和窍门。
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - 由 Isis lab 提供的 CTF Wiki。
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - OTA CTF 团队成员提供的 CTF 技巧。

## 写作合集

*CTF 写作集锦*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - 0e85dc6eaf 撰写的 CTF 挑战赛写作
- [Captf](http://captf.com/) - 由 psifertex 转储的 CTF 挑战和材料。
- [CTF write-ups (社区)](https://github.com/ctfs/) - 由社区维护的 CTF 挑战 + write-ups 档案。
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - 从 CTF Time 中抓取所有写入内容并组织优先阅读的内容。
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - 由 HackThisSite 团队维护的 CTF 写作仓库。
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - mzfr 撰写的 CTF 竞赛文章
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - 使用 pwntools 的 CTF 写作的集合。
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - SababaSec 团队的 CTF 写作合集
- [Shell Storm](http://shell-storm.org/repo/CTF/) - 由 Jonathan Salwan 维护的 CTF 挑战档案。
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - 由 SmokeLeetEveryday 团队维护的 CTF 写作仓库。

＃＃＃ 执照

CC0 :)
