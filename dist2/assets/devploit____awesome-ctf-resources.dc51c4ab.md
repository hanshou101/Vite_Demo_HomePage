devploit/awesome-ctf-resources: A list of Capture The Flag (CTF) frameworks, libraries, resources and software for started/experienced CTF players 🚩    https://github.com/devploit/awesome-ctf-resources

# 精彩的 CTF 资源 [![欢迎贡献](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

针对初级/资深 CTF 玩家的 [夺旗赛](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) 框架、库、资源和软件的列表 🚩

欢迎任何贡献，给我发送 PR！❤️

*-所收集的软件和资源不属于我，仅用于教育目的-*

<p align="center">
<img src="https://i.imgur.com/d4aShjQ.jpg" width="600" height="300" >
</p>

＃＃ 内容

- [创建](#0x00-创建)
  - [平台](#platforms)
  - [法医](#法医)
  - [隐写术](#隐写术)
  - [网络](#web)

- [解决](#0x01-解决)
  - [密码学](#密码学)
  - [利用/Pwn](#exploiting--pwn)
  - [法医](#法医-1)
  - [杂项](#misc)
  - [反转](#反转)
  - [隐写术](#隐写术-1)
  - [网络](#web-1)

- [资源](#0x02-资源)
  - [在线平台](#online-platforms)
  - [协作工具](#collaborative-tools)
  - [Writeups 存储库](#writeups-repositories)
  - [课程](#courses)

- [参考书目](#0x03-参考书目)


# 0x00. 创建

*用于创建 CTF 挑战的工具*

## 平台

*可用于举办 CTF 的框架*

- [CTFd](https://github.com/CTFd/CTFd) - 举办危险边缘风格 CTF 的平台。
- [FBCTF](https://github.com/facebookarchive/fbctf) - Facebook CTF 平台，用于举办 Jeopardy 和“King of the Hill” CTF 竞赛。
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF 竞赛的评分服务器。
- [kCTF](https://github.com/google/kctf) - 基于 Kubernetes 的 CTF 竞赛基础设施。
- [LibreCTF](https://github.com/easyctf/librectf) - 来自 EasyCTF 的 CTF 平台。
- [Mellivora](https://github.com/Nakiami/mellivora) - 用 PHP 编写的 CTF 引擎。
- [NightShade](https://github.com/UnrealAkama/NightShade) - 简单的 CTF 框架。
- [picoCTF](https://github.com/picoCTF/picoCTF) - 用于运行 picoCTF 的基础设施。
- [rCTF](https://github.com/redpwn/rctf) - 由 [redpwn](https://github.com/redpwn/rctf) CTF 团队维护的 CTF 平台。
- [RootTheBox](https://github.com/moloch--/RootTheBox) - 用于战争游戏的 CTF 计分引擎。
- [ImaginaryCTF](https://github.com/Et3rnos/ImaginaryCTF) - 举办 CTF 的平台。

取证

*用于创建取证挑战的工具*

- [Belkasoft RAM Capturer](https://belkasoft.com/ram-capturer) - 易失性内存获取工具。
- [Dnscat2](https://github.com/iagox86/dnscat2) - 通过 DNS 进行主机通信。
- [Magnet AXIOM 2.0](https://www.magnetforensics.com/resources/magnet-axiom-2-0-memory-analysis/) - 以工件为中心的 DFIR 工具。
- [注册表转储程序](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_​​registry_keys.html) - 用于转储 Windows 注册表的工具。

隐写术

*用于创建 Stego 挑战的工具*

检查[解决隐写术部分](#steganography-1)。

网络

*用于创建 Web 挑战的工具*

- [Metasploit JavaScript 混淆器](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit) - 如何在 Metasploit 中混淆 JavaScript。

# 0x01. 解决

密码学

*用于解决加密挑战的工具*

- [Base65536](https://github.com/qntm/base65536) - Unicode 对 Base64 的回答。
- [盲文翻译器](https://www.branah.com/braille-translator) - 将盲文翻译为文本。
- [Ciphey](https://github.com/Ciphey/Ciphey) - 无需知道密钥或密码即可自动解密加密、解码编码和破解哈希的工具。
- [Cyber​​Chef](https://gchq.github.io/Cyber​​Chef/) - 一款用于加密、编码、压缩和数据分析的网络应用程序。
- [Cryptii](https://cryptii.com/) - 模块化转换，在线编码加密。
- [dCode.fr](https://www.dcode.fr/tools-list#cryptography) - 在线加密、数学和编码解答器。
- [Decodify](https://github.com/s0md3v/Decodify) - 递归地检测和解码编码的字符串。
- [Enigma Machine](https://summersidemakerspace.ca/projects/enigma-machine/) - 通用 Enigma 机模拟器。
- [FeatherDuster](https://github.com/nccgroup/featherduster) - 一种自动化、模块化的密码分析工具。
- [Galois](http://web.eecs.utk.edu/~jplank/plank/papers/CS-07-593/) - 一个快速伽罗瓦域算术库/工具包。
- [HashExtender](https://github.com/iagox86/hash_extender) - 用于执行哈希长度扩展攻击的工具。
- [Hash-identifier](https://code.google.com/p/hash-identifier/source/checkout) - 简单的哈希算法标识符。
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - CLI 工具和库，可轻松执行填充 oracle 攻击。
- [PadBuster](https://github.com/AonCyber​​Labs/PadBuster) - 执行 Padding Oracle 攻击的自动脚本。
- [PEMCrack](https://github.com/robertdavidgraham/pemcrack) - 破解保存加密私钥的 SSL PEM 文件。暴力破解或字典破解。
- [PKCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - PkZip 加密破解器。
- [波利比乌斯平方密码](https://www.braingle.com/brainteasers/codes/polybius.php) - 允许某人将字母转换成数字的表格。
- [Quipqiup](https://quipqiup.com/) - 自动密码解答器。
- [RsaCtfTool](https://github.com/RsaCtfTool/RsaCtfTool) - RSA 多重攻击工具。
- [RSATool](https://github.com/ius/rsatool) - 用于计算 RSA 和 RSA-CRT 参数的工具。
- [Rumkin 密码工具](http://rumkin.com/tools/cipher/) - 密码/编码器工具集合。
- [Vigenere Solver](https://www.guballa.de/vigenere-solver) - 无需知道密钥即可破解维吉尼亚密码的在线工具。
- [XOR Cracker](https://wiremask.eu/tools/xor-cracker/) - 在线 XOR 解密工具，能够猜测密钥长度和密码密钥来解密任何文件。
- [XORTool](https://github.com/hellman/xortool) - 用于分析多字节异或密码的工具。
- [yagu](https://sourceforge.net/projects/yafu/) - 自动整数分解。
- [Crackstation](https://crackstation.net/) - 哈希破解器（数据库）。
- [整数序列在线百科全书](https://oeis.org/) - OEIS：整数序列在线百科全书

## 漏洞利用/Pwn

*解决Pwn挑战所用的工具*

- [afl](https://lcamt​​uf.coredump.cx/afl/) - 面向安全的模糊测试器。
- [honggfuzz](https://github.com/google/honggfuzz) - 面向安全的软件模糊测试器。支持基于代码覆盖率的进化、反馈驱动的模糊测试。
- [libformatstr](https://github.com/hellman/libformatstr) - 简化格式字符串的利用。
- [One_gadget](https://github.com/david942j/one_gadget) - 用于查找 one gadget RCE 的工具。
- [Pwntools](https://github.com/Gallopsled/pwntools) - 用于编写漏洞利用的 CTF 框架。
- [ROPgadget](https://github.com/JonathanSalwan/ROPgadget) - ROP 利用框架。
- [Ropper](https://github.com/sashs/Ropper) - 显示不同文件格式的文件信息，并找到用于为不同架构构建 rop 链的小工具。
- [Shellcodes 数据库](http://shell-storm.org/shellcode/) - 一个巨大的 shellcodes 数据库。

取证

*用于解决取证难题的工具*

- [A-Packets](https://apackets.com/) - 在您的浏览器中轻松进行 PCAP 文件分析。
- [Autopsy](https://www.autopsy.com/) - 端到端开源数字取证平台。
- [Binwalk](https://github.com/devttys0/binwalk) - 固件分析工具。
- [Bulk-extractor](https://github.com/simsong/bulk_extractor) - 高性能数字取证开发工具。
- [Bkhive & samdump2](https://www.kali.org/tools/samdump2/) - 转储 SYSTEM 和 SAM 文件。
- [ChromeCacheView](https://www.nirsoft.net/utils/chrome_cache_view.html) - 小型实用程序，可读取 Google Chrome 网络浏览器的缓存文件夹，并显示当前存储在缓存中的所有文件的列表。
- [Creddump](https://github.com/moyix/creddump) - 转储 Windows 凭据。
- [Exiftool](https://exiftool.org/) - 读取、写入和编辑文件元数据。
- [Extundelete](http://extundelete.sourceforge.net/) - 可以从 ext3 或 ext4 分区恢复已删除文件的实用程序。
- [firmware-mod-kit](https://code.google.com/archive/p/firmware-mod-kit/) - 无需重新编译即可修改固件映像。
- [Foremost](http://foremost.sourceforge.net/) - 根据文件的页眉、页脚和内部数据结构恢复文件的控制台程序。
- [Forensic Toolkit](https://www.exterro.com/forensic-toolkit) - 它会扫描硬盘以查找各种信息。它可能会找到已删除的电子邮件，并扫描磁盘以查找文本字符串，以将其用作密码字典来破解加密。
- [Forensically](https://29a.ch/photo-forensics/#forensic-magnifier) - 用于分析图像的免费在线工具，此工具具有许多功能。
- [MZCacheView](https://www.nirsoft.net/utils/mozilla_cache_viewer.html) - 小型实用程序，可读取 Firefox/Mozilla/Netscape Web 浏览器的缓存文件夹，并显示当前存储在缓存中的所有文件的列表。
- [NetworkMiner](https://www.netresec.com/index.ashx?page=NetworkMiner) 网络取证分析工具 (NFAT)。
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - 适用于 Windows 的简单工具，允许您从外部驱动器读取离线注册表文件。
- [photorec](https://www.cgsecurity.org/wiki/PhotoRec) - 文件数据恢复软件，旨在恢复硬盘、CD-ROM 中丢失的文件（包括视频、文档和档案）以及数码相机内存中丢失的照片（因此得名照片恢复）。
- [注册表查看器](https://accessdata.com/product-download/registry-viewer-2-0-0) - 查看 Windows 寄存器的工具。
- [Scalpel](https://github.com/sleuthkit/scalpel) - 开源数据雕刻工具。
- [The Sleuth Kit](https://www.sleuthkit.org/) - 命令行工具和 C 库的集合，可让您分析磁盘映像并从中恢复文件。
- [USBRip](https://github.com/snovvcrash/usbrip) - 用于在 GNU/Linux 上跟踪 USB 设备工件（USB 事件历史）的简单 CLI 取证工具。
- [Volatility](https://github.com/volatilityfoundation/volatility) - 一种先进的内存取证框架。
- [Wireshark](https://www.wireshark.org/) - 用于分析 pcap 或 pcapng 文件的工具。
- [X-Ways](https://www.x-ways.net/forensics/index-m.html) - 为计算机取证审查人员提供的高级工作环境。

杂项

*用于解决其他挑战的工具*

- [boofuzz](https://github.com/jtpereyda/boofuzz) - 适合人类的网络协议模糊测试。
- [Veles](https://codisec.com/veles/) - 二进制数据分析和可视化工具。

**暴力破解者：**

- [changeme](https://github.com/ztgrace/changeme) - 默认凭证扫描器。
- [Hashcat](https://hashcat.net/hashcat/) - 高级密码恢复。
- [Hydra](https://www.kali.org/tools/hydra/) - 并行登录破解器，支持多种攻击协议。
- [John the Ripper](https://www.openwall.com/john/) - 开源密码安全审计和密码恢复。
- [jwt_tool](https://github.com/ticarpi/jwt_tool) - 用于测试、调整和破解 JSON Web Tokens 的工具包。
- [Ophcrack](https://ophcrack.sourceforge.io/) - 基于彩虹表的免费 Windows 密码破解器。
- [Patator](https://github.com/lanjelot/patator) - 多用途暴力破解器，采用模块化设计，使用灵活。
- [Turbo Intruder](https://portswigger.net/bappstore/9abaa233088242e8be252cd4ff534988) - Burp Suite 扩展，用于发送大量 HTTP 请求并分析结果。

**深奥的语言：**

- [Brainfuck](https://copy.sh/brainfuck/) - Brainfuck 深奥的编程语言 IDE。
- [COW](https://frank-buss.de/cow.html) - 这是 Brainfuck 的一个变体，其设计幽默感十足，以 Bovinae 为原型。
- [Malbolge](http://www.malbolge.doleczek.pl/) - Malbolge 深奥的编程语言求解器。
- [Ook!](https://www.dcode.fr/ook-language) - Ook! 中的解码/编码工具
- [Piet](https://www.bertnase.de/npiet/npiet-execute.php) - Piet 编程语言编译器。
- [Rockstar](https://codewithrockstar.com/online) - 一种看起来像歌词的语言。
- [在线尝试]（https://tio.run/） - 一个拥有大量深奥语言解释器的在线工具。


**沙盒：**

- [Any.run](https://any.run/) - 交互式恶意软件搜寻服务。
- [Intezer Analyze](https://analyze.intezer.com/) - 恶意软件分析平台。
- [Triage](https://tria.ge/) - 专为跨平台支持而设计的最先进的恶意软件分析沙箱。

反转

*用于解决逆向挑战的工具*

- [Androguard](https://github.com/androguard/androguard) - Androguard 是一个用于处理 Android 文件的完整 Python 工具。
- [Angr](https://github.com/angr/angr) - 一个功能强大且用户友好的二进制分析平台。
- [Apk2gold](https://github.com/lxdvs/apk2gold) - 用于将 Android 应用程序反编译为 Java 的 CLI 工具。
- [ApkTool](https://ibotpeaches.github.io/Apktool/) - 用于对第三方、封闭的二进制 Android 应用程序进行逆向工程的工具。
- [Binary Ninja](https://binary.ninja/) - 二进制分析框架。
- [BinUtils](https://www.gnu.org/software/binutils/binutils.html) - 二进制工具集合。
- [CTF_import](https://github.com/sciencemanx/ctf_import) - 跨平台从剥离的二进制文件运行基本功能。
- [Compiler Explorer](https://godbolt.org/) - 在线编译器工具。
- [CWE_checker](https://github.com/fkie-cad/cwe_checker) - 查找二进制可执行文件中的易受攻击的模式。
- [Demovfuscator](https://github.com/kirschju/demovfuscator) - 一个正在开发中的针对 movfuscated 二进制文件的反混淆器。
- [Disassembler.io](https://onlinedisassembler.com/static/home/index.html) - 按需反汇编。
  当您没有时间、资源或要求使用更重量级的替代方案时，可以使用轻量级的在线服务。
- [dnSpy](https://github.com/dnSpy/dnSpy) - .NET 调试器和程序集编辑器。
- [EasyPythonDecompiler](https://sourceforge.net/projects/easypythondecompiler/) - 一个小型 .exe GUI 应用程序，可以“反编译”Python 字节码，通常以 .pyc 扩展名显示。
- [Frida](https://github.com/frida/) - 面向开发人员、逆向工程师和安全研究人员的动态检测工具包。
- [GDB](https://www.gnu.org/software/gdb/) - GNU 项目调试器。
- [GEF](https://github.com/hugsy/gef) - 为漏洞开发人员和逆向工程师提供具有高级调试功能的 GDB 现代体验。
- [Ghidra](https://ghidra-sre.org/) - 由 NSA 开发的一套软件逆向工程 (SRE) 工具。
- [Hopper](https://www.hopperapp.com/) - 适用于 OSX 和 Linux 的逆向工程工具（反汇编程序）。
- [IDA Pro](https://hex-rays.com/ida-pro/) - 最常用的逆向软件。
- [Jadx](https://github.com/skylot/jadx) - 用于从 Android Dex 和 Apk 文件生成 Java 源代码的命令行和 GUI 工具。
- [Java 反编译器](http://www.javadecompilers.com/) - Java 和 Android APK 的在线反编译器。
- [JSDetox](https://github.com/svent/jsdetox) - 一个 JavaScript 恶意软件分析工具。
- [miasm](https://github.com/cea-sec/miasm) - Python 中的逆向工程框架。
- [反对意见]（https://github.com/sensepost/objection） - 运行时移动探索。
- [在线汇编器/反汇编器](http://shell-storm.org/online/Online-Assembler-and-Disassembler/) - 围绕 Keystone 和 Capstone 项目的在线包装器。
- [PEDA](https://github.com/longld/peda) - GDB 的 Python 漏洞开发援助。
- [PEfile](https://github.com/erocarrera/pefile) - 用于读取和处理 PE（可移植可执行）文件的 Python 模块。
- [Pwndbg](https://github.com/pwndbg/pwndbg) - 使用 GDB 轻松进行漏洞开发和逆向工程。
- [radare2](https://github.com/radareorg/radare2) - 类似 UNIX 的逆向工程框架和命令行工具集。
- [Rizin](https://github.com/rizinorg/rizin) - Rizin 是 radare2 逆向工程框架的一个分支，注重可用性、工作特性和代码清洁度。
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - Python 2.7 字节码反编译器 (.pyc)
- [WinDBG](http://www.windbg.org/) - Microsoft 发布的 Windows 调试器。
- [Z3](https://github.com/Z3Prover/z3) - 来自微软研究院的定理证明器。

隐写术

*用于解决 Stego 挑战的工具*

- [AperiSolve](https://aperisolve.fr/) - 对图像进行层分析的平台。
- [BPStegano](https://github.com/TapanSoni/BPStegano) - 基于 Python3 的 LSB 隐写术。
- [DeepSound](https://github.com/Jpinsoft/DeepSound) - 免费软件隐写术工具和音频转换器，可将秘密数据隐藏到音频文件中。
- [DTMF 检测]（https://unframework.github.io/dtmf-detect/） - 电话按键共有的音频频率。
- [DTMF 音](http://dialabc.com/sound/detect/index.html) - 与电话按键相同的音频频率。
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - 显示 JPEG 文件中的 EXIF 信息。
- [Exiv2](https://www.exiv2.org/manpage.html) - 图像元数据操作工具。
- [FotoForensics](https://fotoforensics.com/) - 为新兴研究人员和专业调查人员提供用于数字照片取证的尖端工具。
- [hipshot](https://bitbucket.org/eliteraspberries/hipshot/src/master/) - 将视频文件或一系列照片转换为模拟长时间曝光照片的单张图像的工具。
- [图像错误级别分析器](https://29a.ch/sandbox/2012/imageerrorlevelanalysis/) - 用于分析数字图像的工具。它也是免费的，并且基于网络。它具有错误级别分析、克隆检测等功能。
- [图像隐写术](https://incoherency.co.uk/image-steganography/) - 客户端 Javascript 工具，用于以隐写术方式隐藏/取消隐藏其他图像较低“位”内的图像。
- [ImageMagick](http://www.imagemagick.org/script/index.php) - 用于处理图像的工具。
- [jsteg](https://github.com/lukechampine/jsteg) - 用于 JPEG 图像的命令行工具。
- [Magic Eye Solver](http://magiceye.ecksdee.co.uk/) - 从图像中获取隐藏信息。
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - 通用隐写术工具。
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - 验证 PNG 的完整性并以人类可读的形式转储所有块级信息。
- [Pngtools](https://packages.debian.org/sid/pngtools) - 用于与 PNG 相关的各种分析。
- [sigBits](https://github.com/Pulho/sigBits) - 隐写术有效位图像解码器。
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - 修复失焦和模糊的照片/图像。
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - 空白隐写术工具
- [Sonic Visualizer](https://www.sonicvisualiser.org/) - 音频文件可视化。
- [Steganography Online](https://stylesuxx.github.io/steganography/) - 在线隐写术编码器和解码器。
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - 对 JPG 图像发起暴力字典攻击。
- [StegCracker](https://github.com/Paradoxis/StegCracker) - 用于发现文件内隐藏数据的暴力破解实用程序。
- [stegextract](https://github.com/evyatarmeged/stegextract) - 检测图像中的隐藏文件和文本。
- [Steghide](http://steghide.sourceforge.net/) - 隐藏各种图像和音频文件中的数据。
- [StegOnline](https://stegonline.georgeom.net/) - 进行各种图像隐写操作，例如隐藏/显示隐藏在位内的文件。
- [Stegosaurus](https://github.com/AngelKitty/stegosaurus) - 一种用于在 Python 字节码中嵌入有效载荷的隐写术工具。
- [StegoVeritas](https://github.com/bannsec/stegoVeritas) - 另一个隐写工具。
- [Stegpy](https://github.com/dhsdshdhk/stegpy) - 基于 LSB 方法的简单隐写程序。
- [stegseek](https://github.com/RickdeJager/stegseek) - 闪电般快速的 steghide 破解器，可用于从文件中提取隐藏数据。
- [stegsnow](https://manpages.ubuntu.com/manpages/trusty/man1/stegsnow.1.html) - 空白隐写程序。
- [Stegsolve](https://github.com/zardus/ctf-tools/tree/master/stegsolve) - 将各种隐写术应用于图像。
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP 分析。


网络

*用于解决 Web 挑战的工具*

- [Arachni](https://www.arachni-scanner.com/) - Web 应用程序安全扫描程序框架。
- [Beautifier.io](https://beautifier.io/) - 在线 JavaScript 美化器。
- [BurpSuite](https://portswigger.net/burp) - 用于测试网站安全性的图形工具。
- [Commix](https://github.com/commixproject/commix) - 自动化一体化操作系统命令注入利用工具。
- [debugHunter](https://github.com/devploit/debugHunter) - 发现隐藏的调试参数并揭开 Web 应用程序的秘密。
- [Dirhunt](https://github.com/Nekmo/dirhunt) - 无需暴力破解即可查找 Web 目录。
- [dirsearch](https://github.com/maurosoria/dirsearch) - Web 路径扫描器。
- [nomore403](https://github.com/devploit/nomore403) - 绕过 40x 错误的工具。
- [ffuf](https://github.com/ffuf/ffuf) - 用 Go 编写的快速 Web 模糊测试器。
- [git-dumper](https://github.com/arthaud/git-dumper) - 一个从网站转储 git 存储库的工具。
- [Gopherus](https://github.com/tarunkant/Gopherus) - 用于生成 gopher 链接的工具，用于在各种服务器中利用 SSRF 并获取 RCE。
- [Hookbin](https://hookbin.com/) - 免费服务，可让您收集、解析和查看 HTTP 请求。
- [JSFiddle](https://jsfiddle.net/) - 使用 JSFiddle 代码编辑器在线测试你的 JavaScript、CSS、HTML 或 CoffeeScript。
- [ngrok](https://ngrok.com/) - 安全的可自省隧道到本地主机。
- [OWASP Zap](https://owasp.org/www-project-zap/) - 拦截代理以重放、调试和模糊 HTTP 请求和响应。
- [PHPGGC](https://github.com/ambionics/phpggc) - PHP unserialize() 有效负载库以及从命令行或以编程方式生成它们的工具。
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - 用于调试网络请求的 Chrome 插件。
- [REQBIN](https://reqbin.com/) - 在线 REST 和 SOAP API 测试工具。
- [Request Bin](https://requestbin.com/) - Pipedream 提供的现代请求箱，用于检查任何事件。
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - 分析混淆的 Javascript 代码。
- [Smuggler](https://github.com/defparam/smuggler) - 一个用 Python3 编写的 HTTP 请求走私/异步测试工具。
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - 自动 SQL 注入和数据库接管工具。
- [W3af](https://github.com/andresriancho/w3af) - Web应用程序攻击和审计框架。
- [XSSer](https://xsser.03c8.net/) - 自动化 XSS 测试器。
- [ysoserial](https://github.com/frohoff/ysoserial) - 用于生成利用不安全的 Java 对象反序列化的有效负载的工具。

# 0x02. 资源

## 在线平台

*永远在线的 CTF*

- [0x0539](https://0x0539.net/) - 在线 CTF 挑战。
- [247CTF](https://247ctf.com/) - 免费的夺旗黑客环境。
- [Archive.ooo](https://archive.ooo/) - DEF CON CTF 挑战的实时可玩存档。
- [Atenea](https://atenea.ccn-cert.cni.es/) - 西班牙 CCN-CERT CTF 平台。
- [CTFlearn](https://ctflearn.com/) - 为帮助道德黑客学习、实践和竞争而建立的在线平台。
- [CTF365](https://ctf365.com/) - 安全培训平台。
- [Crackmes.One](https://crackmes.one/) - 逆向工程挑战。
- [CryptoHack](https://cryptohack.org/) - 密码学挑战。
- [Cryptopals](https://cryptopals.com/) - 密码学挑战。
- [Defend the Web](https://defendtheweb.net/?hackthis) - 一个交互式网络安全平台。
- [Dreamhack.io](https://dreamhack.io/wargame) - 在线战争游戏。
- [echoCTF.RED](https://echoctf.red/) - 在线黑客实验室。
- [Flagyard](https://flagyard.com/) - 一个实践网络安全挑战的在线游乐场。
- [HackBBS](https://hackbbs.org/index.php) - 在线战争游戏。
- [Hacker101](https://www.hacker101.com/) - 由 [HackerOne](https://www.hackerone.com/) 提供的 CTF 平台。
- [Hackropole](https://hackropole.fr/en/) - 该平台可以让你重温法国网络安全挑战赛的挑战。
- [HackTheBox](https://www.hackthebox.com/) - 一个巨大的黑客游乐场。
- [HackThisSite](https://www.hackthissite.org/) - 免费、安全、合法的黑客训练场地。
- [HBH](https://hbh.sh/home) - 旨在教授恶意黑客用来访问系统和敏感信息的方法和策略的社区。
- [Komodo](http://ctf.komodosec.com/) - 这是一款旨在挑战您的应用程序黑客技能的游戏。
- [MicroCorruption](https://microcorruption.com/) - 嵌入式安全 CTF。
- [MNCTF](https://mnctf.info/) - 在线网络安全挑战。
- [OverTheWire](https://overthewire.org/wargames/) - OverTheWire 社区提供的战争游戏。
- [picoCTF](https://picoctf.org/) - 适合初学者的 CTF 平台。
- [Pwn.college](https://pwn.college/) - 学习和实践核心网络安全概念的教育平台。
- [PWN.TN](https://pwn.tn/) - 教育性和非商业性的战争游戏。
- [Pwnable.kr](http://pwnable.kr/) - Pwn/漏洞利用平台。
- [Pwnable.tw](https://pwnable.tw/) - Pwn/漏洞利用平台。
- [Pwnable.xyz](https://pwnable.xyz/) - Pwn/Exploiting 平台。
- [PWNChallenge](http://pwn.eonew.cn/) - Pwn/漏洞利用平台。
- [Reversing.kr](http://reversing.kr/) - 逆向工程平台。
- [Root-me](https://www.root-me.org/) - CTF 训练平台。
- [VibloCTF](https://ctf.viblo.asia/landing) - CTF 训练平台。
- [VulnHub](https://www.vulnhub.com/) - 基于 VM 的渗透测试平台。
- [W3Challs](https://w3challs.com/) - 黑客/CTF 平台。
- [WebHacking](https://webhacking.kr/) - Web 挑战平台。
- [Websec.fr](http://websec.fr/) - Web 挑战平台。
- [WeChall](https://www.wechall.net/active_sites) - 挑战网站目录和论坛。
- [YEHD 2015](https://2015-yehd-ctf.meiji-ncc.tech/) - YEHD CTF 2015 在线挑战。

*自托管 CTF*

- [AWSGoat](https://github.com/ine-labs/AWSGoat) - 一个非常脆弱的 AWS 基础设施。
- [CICD-goat](https://github.com/cider-security-research/cicd-goat) - 一个故意设置漏洞的 CI/CD 环境。通过多项挑战学习 CI/CD 安全性。
- [该死的易受攻击的 Web 应用程序](https://dvwa.co.uk/) - 该死的易受攻击的 PHP/MySQL Web 应用程序。
- [GCPGoat](https://github.com/ine-labs/GCPGoat) - 一个非常脆弱的 GCP 基础设施。
- [Juice Shop](https://github.com/juice-shop/juice-shop-ctf) - OWASP Juice Shop 的 Capture-the-Flag (CTF) 环境设置工具。

## 协作工具

- [CTFNote](https://github.com/TFNS/CTFNote) - 旨在帮助 CTF 团队组织工作的协作工具。

## 写入存储库

*CTF 写作库*

- [Courgettes.Club](https://ctf.courgettes.club/) - CTF Writeup Finder。
- [CTFtime](https://ctftime.org/writeups) - CTFtime Writeups 合集。
- [Github.com/CTFs](https://github.com/ctfs) - CTF 写作文集。

## 课程

- [Roppers 训练营](https://www.roppers.org/courses/ctf) - CTF 训练营。

# 0x03. 参考书目

*此处提供的资源来自众多来源。但最重要的是：*

- [apsdehal_awesome-ctf](https://github.com/apsdehal/awesome-ctf)
- [vavkamil_awesome-bugbounty-tools](https://github.com/vavkamil/awesome-bugbounty-tools)
- [zardus_ctf-tools]（https://github.com/zardus/ctf-tools）
