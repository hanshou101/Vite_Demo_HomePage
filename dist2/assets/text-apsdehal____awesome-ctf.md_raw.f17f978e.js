const t=`apsdehal/awesome-ctf: A curated list of CTF frameworks, libraries, resources and softwares    https://github.com/apsdehal/awesome-ctf

# \u8D85\u68D2\u7684 CTF [![\u6784\u5EFA\u72B6\u6001](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![\u8D85\u68D2\u7684](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

\u7CBE\u9009\u7684 [\u593A\u65D7\u8D5B](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) \u6846\u67B6\u3001\u5E93\u3001\u8D44\u6E90\u3001\u8F6F\u4EF6\u548C\u6559\u7A0B\u5217\u8868\u3002\u6B64\u5217\u8868\u65E8\u5728\u5E2E\u52A9\u521D\u5B66\u8005\u548C\u7ECF\u9A8C\u4E30\u5BCC\u7684 CTF \u73A9\u5BB6\u5728\u4E00\u4E2A\u5730\u65B9\u627E\u5230\u4E0E CTF \u76F8\u5173\u7684\u6240\u6709\u5185\u5BB9\u3002

### \u8D21\u732E

\u8BF7\u9996\u5148\u5FEB\u901F\u6D4F\u89C8\u4E00\u4E0B[\u8D21\u732E\u6307\u5357](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md)\u3002

#### _\u5982\u679C\u60A8\u77E5\u9053\u8FD9\u91CC\u6CA1\u6709\u7684\u5DE5\u5177\uFF0C\u8BF7\u968F\u65F6\u6253\u5F00\u62C9\u53D6\u8BF7\u6C42\u3002_

\uFF03\uFF03\uFF03 \u4E3A\u4EC0\u4E48\uFF1F

\u5EFA\u7ACB CTF \u4E2D\u4F7F\u7528\u7684\u5DE5\u5177\u96C6\u5408\u5E76\u8BB0\u4F4F\u5B83\u4EEC\u9700\u8981\u65F6\u95F4\u3002\u6B64 repo \u6709\u52A9\u4E8E\u5C06\u6240\u6709\u8FD9\u4E9B\u5206\u6563\u7684\u5DE5\u5177\u96C6\u4E2D\u5230\u4E00\u4E2A\u5730\u65B9\u3002

\uFF03\uFF03\uFF03 \u5185\u5BB9

- [\u8D85\u68D2\u7684 CTF](#awesome-ctf)
  - [\u521B\u5EFA](#create)
    - [\u6CD5\u533B](#\u6CD5\u533B)
    - [\u5E73\u53F0](#platforms)
    - [\u9690\u5199\u672F](#\u9690\u5199\u672F)
    - [\u7F51\u7EDC](#web)
  - [\u89E3\u51B3](#\u89E3\u51B3)
    - [\u653B\u51FB](#\u653B\u51FB)
    - [\u66B4\u529B\u7834\u89E3\u8005](#\u66B4\u529B\u7834\u89E3\u8005)
    - [\u5BC6\u7801\u5B66](#crypto)
    - [\u6F0F\u6D1E](#\u6F0F\u6D1E)
    - [\u6CD5\u533B](#\u6CD5\u533B-1)
    - [\u7F51\u7EDC](#networking)
    - [\u53CD\u8F6C](#\u53CD\u8F6C)
    - [\u670D\u52A1](#services)
    - [\u9690\u5199\u672F](#\u9690\u5199\u672F-1)
    - [\u7F51\u7EDC](#web-1)

- [\u8D44\u6E90](#resources)
  - [\u64CD\u4F5C\u7CFB\u7EDF](#operating-systems)
  - [\u5165\u95E8\u5305](#starter-packs)
  - [\u6559\u7A0B](#\u6559\u7A0B)
  - [\u6218\u4E89\u6E38\u620F](#\u6218\u4E89\u6E38\u620F)
  - [\u7F51\u7AD9](#websites)
  - [\u7EF4\u57FA](#wikis)
  - [\u5199\u4F5C\u5408\u96C6](#writeups-collections)


\uFF03 \u521B\u9020

*\u7528\u4E8E\u521B\u5EFA CTF \u6311\u6218\u7684\u5DE5\u5177*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - \u5173\u4E8E\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u81EA\u5B9A\u4E49\u60A8\u81EA\u5DF1\u7684\u593A\u65D7\u6311\u6218\u7684\u5728\u7EBF\u4E66\u7C4D\u3002


\u53D6\u8BC1

*\u7528\u4E8E\u521B\u5EFA\u53D6\u8BC1\u6311\u6218\u7684\u5DE5\u5177*

- [Dnscat2](https://github.com/iagox86/dnscat2) - \u901A\u8FC7 DNS \u8FDB\u884C\u4E3B\u673A\u901A\u4FE1\u3002
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - \u5206\u7C7B\u7A0B\u5E8F\u3002
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - \u4EE5\u5DE5\u4EF6\u4E3A\u4E2D\u5FC3\u7684 DFIR \u5DE5\u5177\u3002
- [\u6CE8\u518C\u8868\u8F6C\u50A8\u7A0B\u5E8F](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_\u200B\u200Bregistry_keys.html) - \u8F6C\u50A8\u60A8\u7684\u6CE8\u518C\u8868\u3002

## \u5E73\u53F0

*\u53EF\u7528\u4E8E\u4E3E\u529E CTF \u7684\u9879\u76EE*

- [CTFd](https://github.com/isislab/CTFd) - \u6765\u81EA\u7EBD\u7EA6\u5927\u5B66\u5766\u987F\u5206\u6821 ISISLab \u7684\u5371\u9669\u98CE\u683C CTF \u6258\u7BA1\u5E73\u53F0\u3002
- [echoCTF.RED](https://github.com/echoCTF/echoCTF.RED) - \u5F00\u53D1\u3001\u90E8\u7F72\u548C\u7EF4\u62A4\u60A8\u81EA\u5DF1\u7684 CTF \u57FA\u7840\u8BBE\u65BD\u3002
- [FBCTF](https://github.com/facebook/fbctf) - \u6765\u81EA Facebook \u7684\u4E3E\u529E\u593A\u65D7\u6BD4\u8D5B\u7684\u5E73\u53F0\u3002
- [Haaukins](https://github.com/aau-network-security/haaukins) - \u4E00\u4E2A\u7528\u4E8E\u5B89\u5168\u6559\u80B2\u7684\u9AD8\u5EA6\u53EF\u8BBF\u95EE\u4E14\u81EA\u52A8\u5316\u7684\u865A\u62DF\u5316\u5E73\u53F0\u3002
- [HackTheArch](https://github.com/mcpa-stlouis/hack-the-arch) - CTF \u8BC4\u5206\u5E73\u53F0\u3002
- [Mellivora](https://github.com/Nakiami/mellivora) - \u7528 PHP \u7F16\u5199\u7684 CTF \u5F15\u64CE\u3002
- [MotherFucking-CTF](https://github.com/andreafioraldi/motherfucking-ctf) - \u7528\u4E8E\u4E3E\u529E CTF \u7684\u8D85\u8F7B\u91CF\u7EA7\u5E73\u53F0\u3002\u4E0D\u6D89\u53CA JS\u3002
- [NightShade](https://github.com/UnrealAkama/NightShade) - \u4E00\u4E2A\u7B80\u5355\u7684\u5B89\u5168 CTF \u6846\u67B6\u3002
- [OpenCTF](https://github.com/easyctf/openctf) - \u76D2\u5B50\u91CC\u7684 CTF\u3002\u53EA\u9700\u6700\u5C11\u7684\u8BBE\u7F6E\u3002
- [PicoCTF](https://github.com/picoCTF/picoCTF) - \u7528\u4E8E\u8FD0\u884C picoCTF \u7684\u5E73\u53F0\u3002\u4E00\u4E2A\u9002\u5408\u6258\u7BA1\u4EFB\u4F55 CTF \u7684\u4F18\u79C0\u6846\u67B6\u3002
- [PyChallFactory](https://github.com/pdautry/py_chall_factory) - \u7528\u4E8E\u521B\u5EFA/\u7BA1\u7406/\u6253\u5305\u5371\u9669\u8FB9\u7F18 CTF \u6311\u6218\u7684\u5C0F\u578B\u6846\u67B6\u3002
- [RootTheBox](https://github.com/moloch--/RootTheBox) - \u9ED1\u5BA2\u6E38\u620F\uFF08CTF \u8BB0\u5206\u724C\u548C\u6E38\u620F\u7BA1\u7406\u5668\uFF09\u3002
- [Scorebot](https://github.com/legitbs/scorebot) - Legitbs (Defcon) \u7684 CTF \u5E73\u53F0\u3002
- [SecGen](https://github.com/cliffe/SecGen) - \u5B89\u5168\u573A\u666F\u751F\u6210\u5668\u3002\u521B\u5EFA\u968F\u673A\u6613\u53D7\u653B\u51FB\u7684\u865A\u62DF\u673A\u3002

\u9690\u5199\u672F

*\u7528\u4E8E\u521B\u5EFA\u9690\u79D8\u6311\u6218\u7684\u5DE5\u5177*

\u68C0\u67E5\u9690\u5199\u672F\u7684\u89E3\u51B3\u65B9\u6848\u90E8\u5206\u3002

\u7F51\u7EDC

*\u7528\u4E8E\u521B\u5EFA Web \u6311\u6218\u7684\u5DE5\u5177*

*JavaScript \u6DF7\u6DC6\u5668*

- [Metasploit JavaScript \u6DF7\u6DC6\u5668](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify](https://github.com/mishoo/UglifyJS)


\uFF03 \u89E3\u51B3

*\u89E3\u51B3 CTF \u6311\u6218\u6240\u7528\u7684\u5DE5\u5177*

\u653B\u51FB

*\u7528\u4E8E\u6267\u884C\u5404\u79CD\u653B\u51FB\u7684\u5DE5\u5177*

- [Bettercap](https://github.com/bettercap/bettercap) - \u6267\u884C MITM\uFF08\u4E2D\u95F4\u4EBA\uFF09\u653B\u51FB\u7684\u6846\u67B6\u3002
- [Yersinia](https://github.com/tomac/yersinia) - \u653B\u51FB\u7B2C 2 \u5C42\u7684\u5404\u79CD\u534F\u8BAE\u3002

\u52A0\u5BC6

*\u7528\u4E8E\u89E3\u51B3\u52A0\u5BC6\u6311\u6218\u7684\u5DE5\u5177*

- [Cyber\u200B\u200BChef](https://gchq.github.io/Cyber\u200B\u200BChef) - \u7528\u4E8E\u5206\u6790\u548C\u89E3\u7801\u6570\u636E\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u3002
- [FeatherDuster](https://github.com/nccgroup/featherduster) - \u4E00\u79CD\u81EA\u52A8\u5316\u3001\u6A21\u5757\u5316\u7684\u5BC6\u7801\u5206\u6790\u5DE5\u5177\u3002
- [Hash Extender](https://github.com/iagox86/hash_extender) - \u7528\u4E8E\u6267\u884C\u54C8\u5E0C\u957F\u5EA6\u6269\u5C55\u653B\u51FB\u7684\u5B9E\u7528\u5DE5\u5177\u3002
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - \u7528\u4E8E\u6267\u884C padding oracle \u653B\u51FB\u7684 CLI \u5DE5\u5177\u3002
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - \u7528\u4E8E\u7834\u89E3 PkZip \u52A0\u5BC6\u7684\u5DE5\u5177\u3002
- [QuipQuip](https://quipqiup.com) - \u4E00\u79CD\u7834\u89E3\u66FF\u6362\u5BC6\u7801\u6216\u7EF4\u5409\u5C3C\u4E9A\u5BC6\u7801\u7684\u5728\u7EBF\u5DE5\u5177\uFF08\u65E0\u9700\u5BC6\u94A5\uFF09\u3002
- [RSACTFTool](https://github.com/Ganapati/RsaCtfTool) - \u7528\u4E8E\u901A\u8FC7\u5404\u79CD\u653B\u51FB\u6062\u590D RSA \u79C1\u94A5\u7684\u5DE5\u5177\u3002
- [RSATool](https://github.com/ius/rsatool) - \u5229\u7528 p \u548C q \u7684\u77E5\u8BC6\u751F\u6210\u79C1\u94A5\u3002
- [XORTool](https://github.com/hellman/xortool) - \u7528\u4E8E\u5206\u6790\u591A\u5B57\u8282\u5F02\u6216\u5BC6\u7801\u7684\u5DE5\u5177\u3002

## \u66B4\u529B\u7834\u89E3\u8005

*\u7528\u4E8E\u5404\u79CD\u66B4\u529B\u7834\u89E3\u7684\u5DE5\u5177\uFF08\u5BC6\u7801\u7B49\uFF09*

- [Hashcat](https://hashcat.net/hashcat/) - \u5BC6\u7801\u7834\u89E3\u5668
- [Hydra](https://tools.kali.org/password-attacks/hydra) - \u4E00\u6B3E\u5E76\u884C\u5316\u7684\u767B\u5F55\u7834\u89E3\u7A0B\u5E8F\uFF0C\u652F\u6301\u591A\u79CD\u653B\u51FB\u534F\u8BAE
- [John The Jumbo](https://github.com/magnumripper/JohnTheRipper) - John the Ripper \u7684\u793E\u533A\u589E\u5F3A\u7248\u672C\u3002
- [John The Ripper](http://www.openwall.com/john/) - \u5BC6\u7801\u7834\u89E3\u8005\u3002
- [Nozzlr](https://github.com/intrd/nozzlr) - Nozzlr \u662F\u4E00\u4E2A\u5F3A\u529B\u6846\u67B6\uFF0C\u771F\u6B63\u6A21\u5757\u5316\u5E76\u4E14\u811A\u672C\u53CB\u597D\u3002
- [Ophcrack](http://ophcrack.sourceforge.net/) - \u57FA\u4E8E\u5F69\u8679\u8868\u7684 Windows \u5BC6\u7801\u7834\u89E3\u5668\u3002
- [Patator](https://github.com/lanjelot/patator) - Patator \u662F\u4E00\u6B3E\u591A\u7528\u9014\u66B4\u529B\u7834\u89E3\u5668\uFF0C\u91C7\u7528\u6A21\u5757\u5316\u8BBE\u8BA1\u3002
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Burp Suite \u6269\u5C55\uFF0C\u7528\u4E8E\u53D1\u9001\u5927\u91CF HTTP \u8BF7\u6C42

\u6F0F\u6D1E

*\u7528\u4E8E\u89E3\u51B3\u6F0F\u6D1E\u6311\u6218\u7684\u5DE5\u5177*

- [DLLInjector](https://github.com/OpenSecurityResearch/dllinjector) - \u5728\u8FDB\u7A0B\u4E2D\u6CE8\u5165 dll\u3002
- [libformatstr](https://github.com/hellman/libformatstr) - \u7B80\u5316\u683C\u5F0F\u5B57\u7B26\u4E32\u7684\u5229\u7528\u3002
- [Metasploit](http://www.metasploit.com/) - \u6E17\u900F\u6D4B\u8BD5\u8F6F\u4EF6\u3002
  - [\u5907\u5FD8\u5355]\uFF08https://www.comparitech.com/net-admin/metasploit-cheat-sheet/\uFF09
- [one_gadget](https://github.com/david942j/one_gadget) - \u7528\u4E8E\u67E5\u627E\u5C0F\u5DE5\u5177 \`execve('/bin/sh', NULL, NULL)\` \u8C03\u7528\u7684\u5DE5\u5177\u3002
  -\`gem \u5B89\u88C5 one_gadget\`
- [Pwntools](https://github.com/Gallopsled/pwntools) - \u7528\u4E8E\u7F16\u5199\u6F0F\u6D1E\u5229\u7528\u7684 CTF \u6846\u67B6\u3002
- [Qira](https://github.com/BinaryAnalysisPlatform/qira) - QEMU \u4EA4\u4E92\u5F0F\u8FD0\u884C\u65F6\u5206\u6790\u5668\u3002
- [ROP Gadget](https://github.com/JonathanSalwan/ROPgadget) - ROP \u5229\u7528\u6846\u67B6\u3002
- [V0lt](https://github.com/P1kachu/v0lt) - \u5B89\u5168 CTF \u5DE5\u5177\u5305\u3002

\u53D6\u8BC1

*\u7528\u4E8E\u89E3\u51B3\u53D6\u8BC1\u96BE\u9898\u7684\u5DE5\u5177*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - \u7834\u89E3 802.11 WEP \u548C WPA-PSK \u5BC6\u94A5\u3002
  -\`apt-get \u5B89\u88C5 aircrack-ng\`
- [Audacity](http://sourceforge.net/projects/audacity/) - \u5206\u6790\u58F0\u97F3\u6587\u4EF6 (mp3\u3001m4a \u7B49\u7B49)\u3002
  -\`apt-get \u5B89\u88C5 audacity\`
- [Bkhive \u548C Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - \u8F6C\u50A8 SYSTEM \u548C SAM \u6587\u4EF6\u3002
  -\`apt-get \u5B89\u88C5 samdump2 bkhive\`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE \u7F16\u8F91\u5668\u3002
- [Creddump](https://github.com/moyix/creddump) - \u8F6C\u50A8 Windows \u51ED\u636E\u3002
- [DVCS Ripper](https://github.com/kost/dvcs-ripper) - Rips \u53EF\u901A\u8FC7 Web \u8BBF\u95EE\u7684\uFF08\u5206\u5E03\u5F0F\uFF09\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u3002
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - \u8BFB\u53D6\u3001\u5199\u5165\u548C\u7F16\u8F91\u6587\u4EF6\u5143\u6570\u636E\u3002
- [Extundelete](http://extundelete.sourceforge.net/) - \u7528\u4E8E\u4ECE\u53EF\u5B89\u88C5\u6620\u50CF\u4E2D\u6062\u590D\u4E22\u5931\u7684\u6570\u636E\u3002
- [Fibratus](https://github.com/rabbitstack/fibratus) - \u7528\u4E8E\u63A2\u7D22\u548C\u8DDF\u8E2A Windows \u5185\u6838\u7684\u5DE5\u5177\u3002
- [Foremost](http://foremost.sourceforge.net/) - \u4F7F\u7528\u6807\u9898\u63D0\u53D6\u7279\u5B9A\u7C7B\u578B\u7684\u6587\u4EF6\u3002
  -\`apt-get install foremost\`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - \u7528\u4E8E\u4FEE\u590D\u635F\u574F\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002
- [Malzilla](http://malzilla.sourceforge.net/) - \u6076\u610F\u8F6F\u4EF6\u641C\u5BFB\u5DE5\u5177\u3002
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - \u7F51\u7EDC\u53D6\u8BC1\u5206\u6790\u5DE5\u5177\u3002
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - \u67E5\u627E\u5E76\u63D0\u53D6 PDF \u6587\u4EF6\u4E2D\u538B\u7F29\u7684 zlib \u6587\u4EF6\u3002
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - \u9A8C\u8BC1 PNG \u7684\u5B8C\u6574\u6027\u5E76\u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u7684\u5F62\u5F0F\u8F6C\u50A8\u6240\u6709\u5757\u7EA7\u4FE1\u606F\u3002
  -\`apt-get \u5B89\u88C5 pngcheck\`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - \u4ECE exe \u6587\u4EF6\u4E2D\u63D0\u53D6\u5404\u79CD\u6587\u4EF6\u7C7B\u578B\u3002
- [Shellbags](https://github.com/williballenthin/shellbags) - \u8C03\u67E5 NT\\_USER.dat \u6587\u4EF6\u3002
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - \u4E00\u4E2A\u7A7A\u767D\u9690\u5199\u672F\u5DE5\u5177\u3002
- [USBRip](https://github.com/snovvcrash/usbrip) - \u7528\u4E8E\u5728 GNU/Linux \u4E0A\u8DDF\u8E2A USB \u8BBE\u5907\u5DE5\u4EF6\uFF08USB \u4E8B\u4EF6\u5386\u53F2\uFF09\u7684\u7B80\u5355 CLI \u53D6\u8BC1\u5DE5\u5177\u3002
- [Volatility](https://github.com/volatilityfoundation/volatility) - \u8C03\u67E5\u5185\u5B58\u8F6C\u50A8\u3002
- [Wireshark](https://www.wireshark.org) - \u7528\u4E8E\u5206\u6790 pcap \u6216 pcapng \u6587\u4EF6

*\u6CE8\u518C\u8868\u67E5\u770B\u5668*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - \u9002\u7528\u4E8E Windows \u7684\u7B80\u5355\u5DE5\u5177\uFF0C\u5141\u8BB8\u60A8\u4ECE\u5916\u90E8\u9A71\u52A8\u5668\u8BFB\u53D6\u79BB\u7EBF\u6CE8\u518C\u8868\u6587\u4EF6\u5E76\u4EE5 .reg \u6587\u4EF6\u683C\u5F0F\u67E5\u770B\u6240\u9700\u7684\u6CE8\u518C\u8868\u9879\u3002
- [Registry Viewer\xAE](https://accessdata.com/product-download/registry-viewer-2-0-0) - \u7528\u4E8E\u67E5\u770B Windows \u6CE8\u518C\u8868\u3002

\u7F51\u7EDC

*\u7528\u4E8E\u89E3\u51B3\u7F51\u7EDC\u6311\u6218\u7684\u5DE5\u5177*

- [Masscan](https://github.com/robertdavidgraham/masscan) - \u5927\u89C4\u6A21 IP \u7AEF\u53E3\u626B\u63CF\u5668\u3001TCP \u7AEF\u53E3\u626B\u63CF\u5668\u3002
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - \u4E00\u4E2A\u7528\u4E8E\u68C0\u67E5\u7F51\u7EDC\u4E0A\u7684\u4E3B\u673A\uFF08\u548C\u5176\u4ED6\u975E\u7F51\u7EDC\u6D3B\u52A8\uFF09\u7684 Linux \u5DE5\u5177\u3002
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipe \u662F\u4E00\u4E2A\u5C06 Tor \u7F51\u7EDC\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u7F51\u5173\u7684\u811A\u672C\u3002
- [Nmap](https://nmap.org/) - \u4E00\u4E2A\u7528\u4E8E\u7F51\u7EDC\u53D1\u73B0\u548C\u5B89\u5168\u5BA1\u8BA1\u7684\u5F00\u6E90\u5B9E\u7528\u7A0B\u5E8F\u3002
- [Wireshark](https://www.wireshark.org/) - \u5206\u6790\u7F51\u7EDC\u8F6C\u50A8\u3002
  -\`apt-get \u5B89\u88C5 wireshark\`
- [Zeek](https://www.zeek.org) - \u4E00\u4E2A\u5F00\u6E90\u7F51\u7EDC\u5B89\u5168\u76D1\u89C6\u5668\u3002
- [Zmap](https://zmap.io/) - \u4E00\u4E2A\u5F00\u6E90\u7F51\u7EDC\u626B\u63CF\u5668\u3002

\u53CD\u8F6C

*\u7528\u4E8E\u89E3\u51B3\u9006\u5411\u6311\u6218\u7684\u5DE5\u5177*

- [Androguard](https://github.com/androguard/androguard) - \u5BF9 Android \u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u9006\u5411\u5DE5\u7A0B\u3002
- [Angr](https://github.com/angr/angr) - \u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u4E8C\u8FDB\u5236\u5206\u6790\u6846\u67B6\u3002
- [Apk2Gold](https://github.com/lxdvs/apk2gold) - \u53C8\u4E00\u4E2A Android \u53CD\u7F16\u8BD1\u5668\u3002
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android\u53CD\u7F16\u8BD1\u5668\u3002
- [Barf](https://github.com/programa-stic/barf-project) - \u4E8C\u8FDB\u5236\u5206\u6790\u548C\u9006\u5411\u5DE5\u7A0B\u6846\u67B6\u3002
- [Binary Ninja](https://binary.ninja/) - \u4E8C\u8FDB\u5236\u5206\u6790\u6846\u67B6\u3002
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - \u4E8C\u8FDB\u5236\u5DE5\u5177\u96C6\u5408\u3002
- [BinWalk](https://github.com/devttys0/binwalk) - \u5206\u6790\u3001\u9006\u5411\u5DE5\u7A0B\u548C\u63D0\u53D6\u56FA\u4EF6\u6620\u50CF\u3002
- [Boomerang](https://github.com/BoomerangDecompiler/boomerang) - \u5C06 x86/SPARC/PowerPC/ST-20 \u4E8C\u8FDB\u5236\u6587\u4EF6\u53CD\u7F16\u8BD1\u4E3A C \u6587\u4EF6\u3002
- [ctf_import](https://github.com/docileninja/ctf_import) \u2013 \u8DE8\u5E73\u53F0\u4ECE\u7CBE\u7B80\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u8FD0\u884C\u57FA\u672C\u529F\u80FD\u3002
- [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker \u67E5\u627E\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u7684\u6613\u53D7\u653B\u51FB\u7684\u6A21\u5F0F\u3002
- [demovfuscator](https://github.com/kirschju/demovfuscator) - \u4E00\u4E2A\u6B63\u5728\u5F00\u53D1\u4E2D\u7684\u9488\u5BF9 movfuscated \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u53CD\u6DF7\u6DC6\u5668\u3002
- [Frida](https://github.com/frida/) - \u52A8\u6001\u4EE3\u7801\u6CE8\u5165\u3002
- [GDB](https://www.gnu.org/software/gdb/) - GNU \u9879\u76EE\u8C03\u8BD5\u5668\u3002
- [GEF](https://github.com/hugsy/gef) - GDB \u63D2\u4EF6\u3002
- [Ghidra](https://ghidra-sre.org/) - \u5F00\u6E90\u9006\u5411\u5DE5\u7A0B\u5DE5\u5177\u5957\u4EF6\u3002\u4E0E IDA Pro \u7C7B\u4F3C\u3002
- [Hopper](http://www.hopperapp.com/) - \u9002\u7528\u4E8E OSX \u548C Linux \u7684\u9006\u5411\u5DE5\u7A0B\u5DE5\u5177\uFF08\u53CD\u6C47\u7F16\u7A0B\u5E8F\uFF09\u3002
- [IDA Pro](https://www.hex-rays.com/products/ida/) - \u6700\u5E38\u7528\u7684\u9006\u5411\u8F6F\u4EF6\u3002
- [Jadx](https://github.com/skylot/jadx) - \u53CD\u7F16\u8BD1 Android \u6587\u4EF6\u3002
- [Java \u53CD\u7F16\u8BD1\u5668](http://www.javadecompilers.com) - Java \u548C Android APK \u7684\u5728\u7EBF\u53CD\u7F16\u8BD1\u5668\u3002
- [Krakatau](https://github.com/Storyyeller/Krakatau) - Java \u53CD\u7F16\u8BD1\u5668\u548C\u53CD\u6C47\u7F16\u5668\u3002
- [\u53CD\u5BF9\u610F\u89C1]\uFF08https://github.com/sensepost/objection\uFF09 - \u8FD0\u884C\u65F6\u79FB\u52A8\u63A2\u7D22\u3002
- [PEDA](https://github.com/longld/peda) - GDB \u63D2\u4EF6\uFF08\u4EC5\u9650 python2.7\uFF09\u3002
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - \u82F1\u7279\u5C14\u63A8\u51FA\u7684\u52A8\u6001\u4E8C\u8FDB\u5236\u68C0\u6D4B\u5DE5\u5177\u3002
- [PINCE](https://github.com/korcankaraokcu/PINCE) - GDB \u524D\u7AEF/\u9006\u5411\u5DE5\u7A0B\u5DE5\u5177\uFF0C\u4E13\u6CE8\u4E8E\u6E38\u620F\u9ED1\u5BA2\u548C\u81EA\u52A8\u5316\u3002
- [PinCTF](https://github.com/ChrisTheCoolHut/PinCTF) - \u4E00\u4E2A\u4F7F\u7528\u82F1\u7279\u5C14\u5F15\u811A\u8FDB\u884C\u4FA7\u4FE1\u9053\u5206\u6790\u7684\u5DE5\u5177\u3002
- [Plasma](https://github.com/joelpx/plasma) - \u4E00\u4E2A\u9488\u5BF9 x86/ARM/MIPS \u7684\u4EA4\u4E92\u5F0F\u53CD\u6C47\u7F16\u7A0B\u5E8F\uFF0C\u53EF\u4EE5\u751F\u6210\u5E26\u6709\u5F69\u8272\u8BED\u6CD5\u7684\u7F29\u8FDB\u4F2A\u4EE3\u7801\u3002
- [Pwndbg](https://github.com/pwndbg/pwndbg) - \u4E00\u4E2A GDB \u63D2\u4EF6\uFF0C\u63D0\u4F9B\u4E00\u5957\u5B9E\u7528\u7A0B\u5E8F\uFF0C\u53EF\u8F7B\u677E\u7834\u89E3 GDB\u3002
- [radare2](https://github.com/radare/radare2) - \u4E00\u4E2A\u53EF\u79FB\u690D\u7684\u9006\u5411\u6846\u67B6\u3002
- [Triton](https://github.com/JonathanSalwan/Triton/) - \u52A8\u6001\u4E8C\u8FDB\u5236\u5206\u6790\uFF08DBA\uFF09\u6846\u67B6\u3002
- [Uncompyle](https://github.com/gstarnberger/uncompyle) - \u53CD\u7F16\u8BD1 Python 2.7 \u4E8C\u8FDB\u5236\u6587\u4EF6 (.pyc)\u3002
- [WinDbg](http://www.windbg.org/) - Microsoft \u53D1\u5E03\u7684 Windows \u8C03\u8BD5\u5668\u3002
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - \u53EF\u4EE5\u590D\u5236\u5177\u6709\u6267\u884C\u6743\u9650\u4F46\u6CA1\u6709\u8BFB\u53D6\u6743\u9650\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7684\u7A0B\u5E8F\u3002
- [Z3](https://github.com/Z3Prover/z3) - \u6765\u81EA\u5FAE\u8F6F\u7814\u7A76\u9662\u7684\u5B9A\u7406\u8BC1\u660E\u5668\u3002

*JavaScript \u53CD\u6DF7\u6DC6\u5668*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - \u4E00\u4E2A Javascript \u6076\u610F\u8F6F\u4EF6\u5206\u6790\u5DE5\u5177\u3002
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - \u5206\u6790\u6DF7\u6DC6\u7684 Javascript \u4EE3\u7801\u3002

*SWF \u5206\u6790\u5668*
- [RABCDAsm](https://github.com/Cyber\u200B\u200BShadow/RABCDAsm) - \u5B9E\u7528\u7A0B\u5E8F\u96C6\u5408\uFF0C\u5305\u62EC ActionScript 3 \u6C47\u7F16\u5668/\u53CD\u6C47\u7F16\u5668\u3002
- [Swftools](http://www.swftools.org/) - \u7528\u4E8E\u5904\u7406 SWF \u6587\u4EF6\u7684\u5B9E\u7528\u7A0B\u5E8F\u96C6\u5408\u3002
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) - \u7528\u4E8E\u5206\u6790 Flash \u6587\u4EF6\u7684 Python \u811A\u672C\u3002

## \u670D\u52A1

*\u4E92\u8054\u7F51\u4E0A\u63D0\u4F9B\u5404\u79CD\u6709\u7528\u7684\u670D\u52A1*

- [CSWSH](http://cow.cat/cswsh.html) - \u8DE8\u7AD9\u70B9 WebSocket \u52AB\u6301\u6D4B\u8BD5\u5668\u3002
- [Request Bin](https://requestbin.com/) - \u8BA9\u60A8\u68C0\u67E5\u5BF9\u7279\u5B9A URL \u7684 http \u8BF7\u6C42\u3002

\u9690\u5199\u672F

*\u7528\u4E8E\u89E3\u51B3\u9690\u5199\u672F\u6311\u6218\u7684\u5DE5\u5177*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve \u662F\u4E00\u4E2A\u5BF9\u56FE\u50CF\u8FDB\u884C\u5C42\u5206\u6790\u7684\u5E73\u53F0\uFF08\u5F00\u6E90\uFF09\u3002
- [\u8F6C\u6362](http://www.imagemagick.org/script/convert.php) - \u8F6C\u6362\u56FE\u50CF\u9ED1\u767D\u683C\u5F0F\u5E76\u5E94\u7528\u8FC7\u6EE4\u5668\u3002
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - \u663E\u793A JPEG \u6587\u4EF6\u4E2D\u7684 EXIF \u4FE1\u606F\u3002
- [Exiftool](https://linux.die.net/man/1/exiftool) - \u8BFB\u53D6\u548C\u5199\u5165\u6587\u4EF6\u4E2D\u7684\u5143\u4FE1\u606F\u3002
- [Exiv2](http://www.exiv2.org/manpage.html) - \u56FE\u50CF\u5143\u6570\u636E\u64CD\u4F5C\u5DE5\u5177\u3002
- [\u56FE\u50CF\u9690\u5199\u672F](https://sourceforge.net/projects/image-steg/) - \u4F7F\u7528\u53EF\u9009\u52A0\u5BC6\u5C06\u6587\u672C\u548C\u6587\u4EF6\u5D4C\u5165\u56FE\u50CF\u4E2D\u3002\u6613\u4E8E\u4F7F\u7528\u7684\u7528\u6237\u754C\u9762\u3002
- [\u5728\u7EBF\u56FE\u50CF\u9690\u5199\u672F](https://incoherency.co.uk/image-steganography) - \u8FD9\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF Javascript \u5DE5\u5177\uFF0C\u7528\u4E8E\u5C06\u56FE\u50CF\u4EE5\u9690\u5199\u672F\u7684\u65B9\u5F0F\u9690\u85CF\u5728\u5176\u4ED6\u56FE\u50CF\u7684\u8F83\u4F4E\u201C\u4F4D\u201D\u5185
- [ImageMagick](http://www.imagemagick.org/script/index.php) - \u7528\u4E8E\u5904\u7406\u56FE\u50CF\u7684\u5DE5\u5177\u3002
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - \u901A\u7528\u9690\u5199\u672F\u5DE5\u5177\u3002
- [Pngtools](https://packages.debian.org/sid/pngtools) - \u7528\u4E8E\u4E0E PNG \u76F8\u5173\u7684\u5404\u79CD\u5206\u6790\u3002
  -\`apt-get \u5B89\u88C5 pngtools\`
- [SmartDeblur](https://github.com/Y-Vladimir/SmartDeblur) - \u7528\u4E8E\u53BB\u6A21\u7CCA\u548C\u4FEE\u590D\u5931\u7126\u56FE\u50CF\u3002
- [Steganabara](https://www.openhub.net/p/steganabara) - \u7528 Ja\u200B\u200Bva \u7F16\u5199\u7684\u9690\u5199\u5206\u6790\u5DE5\u5177\u3002
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - \u5728\u7EBF\u9690\u5199\u672F\u7F16\u7801\u5668\u548C\u89E3\u7801\u5668\u3002
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - \u5BF9 JPG \u56FE\u50CF\u53D1\u8D77\u66B4\u529B\u5B57\u5178\u653B\u51FB\u3002
- [StegCracker](https://github.com/Paradoxis/StegCracker) - \u9690\u5199\u672F\u66B4\u529B\u7834\u89E3\u5B9E\u7528\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u63ED\u793A\u6587\u4EF6\u5185\u7684\u9690\u85CF\u6570\u636E\u3002
- [stegextract](https://github.com/evyatarmeged/stegextract) - \u68C0\u6D4B\u56FE\u50CF\u4E2D\u7684\u9690\u85CF\u6587\u4EF6\u548C\u6587\u672C\u3002
- [Steghide](http://steghide.sourceforge.net/) - \u9690\u85CF\u5404\u79CD\u56FE\u50CF\u4E2D\u7684\u6570\u636E\u3002
- [StegOnline](https://georgeom.net/StegOnline/upload) - \u8FDB\u884C\u5E7F\u6CDB\u7684\u56FE\u50CF\u9690\u5199\u64CD\u4F5C\uFF0C\u4F8B\u5982\u9690\u85CF/\u663E\u793A\u9690\u85CF\u5728\u4F4D\u5185\u7684\u6587\u4EF6\uFF08\u5F00\u6E90\uFF09\u3002
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - \u5C06\u5404\u79CD\u9690\u5199\u672F\u5E94\u7528\u4E8E\u56FE\u50CF\u3002
- [Zsteg](https://github.com/zed-0xff/zsteg/) - PNG/BMP \u5206\u6790\u3002

\u7F51\u7EDC

*\u7528\u4E8E\u89E3\u51B3 Web \u6311\u6218\u7684\u5DE5\u5177*

- [BurpSuite](https://portswigger.net/burp) - \u7528\u4E8E\u6D4B\u8BD5\u7F51\u7AD9\u5B89\u5168\u6027\u7684\u56FE\u5F62\u5DE5\u5177\u3002
- [Commix](https://github.com/commixproject/commix) - \u81EA\u52A8\u5316\u4E00\u4F53\u5316\u64CD\u4F5C\u7CFB\u7EDF\u547D\u4EE4\u6CE8\u5165\u548C\u5229\u7528\u5DE5\u5177\u3002
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Firefox \u63D2\u4EF6\uFF0C\u53EF\u8F7B\u677E\u8FDB\u884C\u7F51\u7EDC\u653B\u51FB\u3002
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - \u62E6\u622A\u4EE3\u7406\u4EE5\u91CD\u653E\u3001\u8C03\u8BD5\u548C\u6A21\u7CCA\u6D4B\u8BD5 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - \u7528\u4E8E\u8C03\u8BD5\u7F51\u7EDC\u8BF7\u6C42\u7684 Chrome \u63D2\u4EF6\u3002
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - \u4E00\u79CD\u7528\u4E8E\u4FA6\u5BDF\u548C\u6F0F\u6D1E\u626B\u63CF\u7684\u9AD8\u6027\u80FD\u653B\u51FB\u6027\u5B89\u5168\u5DE5\u5177\u3002
- [SQLMap](https://github.com/sqlmapproject/sqlmap) - \u81EA\u52A8 SQL \u6CE8\u5165\u548C\u6570\u636E\u5E93\u63A5\u7BA1\u5DE5\u5177\u3002
  \`\`\`pip \u5B89\u88C5 sqlmap\`\`\`
- [W3af](https://github.com/andresriancho/w3af) - Web \u5E94\u7528\u7A0B\u5E8F\u653B\u51FB\u548C\u5BA1\u8BA1\u6846\u67B6\u3002
- [XSSer](http://xsser.sourceforge.net/) - \u81EA\u52A8\u5316 XSS \u6D4B\u8BD5\u5668\u3002


\uFF03 \u8D44\u6E90

*\u5982\u4F55\u4E86\u89E3 CTF*

\u64CD\u4F5C\u7CFB\u7EDF

*\u6E17\u900F\u6D4B\u8BD5\u548C\u5B89\u5168\u5B9E\u9A8C\u5BA4\u64CD\u4F5C\u7CFB\u7EDF*

- [Android Tamer](https://androidtamer.com/) - \u57FA\u4E8E Debian\u3002
- [BackBox](https://backbox.org/) - \u57FA\u4E8E Ubuntu\u3002
- [BlackArch Linux](https://blackarch.org/) - \u57FA\u4E8E Arch Linux\u3002
- [Fedora \u5B89\u5168\u5B9E\u9A8C\u5BA4](https://labs.fedoraproject.org/security/) - \u57FA\u4E8E Fedora\u3002
- [Kali Linux](https://www.kali.org/) - \u57FA\u4E8E Debian\u3002
- [Parrot Security OS](https://www.parrotsec.org/) - \u57FA\u4E8E Debian\u3002
- [Pentoo](http://www.pentoo.ch/) - \u57FA\u4E8E Gentoo\u3002
- [URIX OS](http://urix.us/) - \u57FA\u4E8E openSUSE\u3002
- [Wifislax](http://www.wifislax.com/) - \u57FA\u4E8E Slackware\u3002

*\u6076\u610F\u8F6F\u4EF6\u5206\u6790\u5E08\u548C\u9006\u5411\u5DE5\u7A0B*

- [Flare VM](https://github.com/fireeye/flare-vm/) - \u57FA\u4E8EWindows\u3002
- [REMnux](https://remnux.org/) - \u57FA\u4E8E Debian\u3002

## \u5165\u95E8\u5305

*\u5B89\u88C5\u7A0B\u5E8F\u811A\u672C\u3001\u5B9E\u7528\u5DE5\u5177\u7684\u96C6\u5408*

- [CTF \u5DE5\u5177](https://github.com/zardus/ctf-tools) - \u7528\u4E8E\u5B89\u88C5\u5404\u79CD\u5B89\u5168\u7814\u7A76\u5DE5\u5177\u7684\u5B89\u88C5\u811A\u672C\u96C6\u5408\u3002
- [LazyKali](https://github.com/jlevitsk/lazykali) - LazyKali \u7684 2016 \u5E74\u66F4\u65B0\u7248\uFF0C\u7B80\u5316\u4E86\u5DE5\u5177\u5B89\u88C5\u548C\u914D\u7F6E\u3002

## \u6559\u7A0B

*\u5B66\u4E60\u5982\u4F55\u73A9 CTF \u7684\u6559\u7A0B*

- [CTF \u73B0\u573A\u6307\u5357](https://trailofbits.github.io/ctf/) - Trails of Bits \u7684\u73B0\u573A\u6307\u5357\u3002
- [CTF \u8D44\u6E90](http://ctfs.github.io/resources/) - \u7531\u793E\u533A\u7EF4\u62A4\u7684\u5165\u95E8\u6307\u5357\u3002
- [\u5982\u4F55\u5F00\u59CB CTF](https://www.endgame.com/blog/how-get-started-ctf) - Endgame \u4E3A CTF \u521D\u5B66\u8005\u63D0\u4F9B\u7684\u7B80\u77ED\u6307\u5357
- [CTF \u8BFE\u7A0B\u7B80\u4ECB](https://www.hoppersroppers.org/courseCTF.html) - \u4E00\u95E8\u514D\u8D39\u8BFE\u7A0B\uFF0C\u5411\u521D\u5B66\u8005\u4F20\u6388\u53D6\u8BC1\u3001\u52A0\u5BC6\u548C Web-ex \u7684\u57FA\u7840\u77E5\u8BC6\u3002
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - \u6D41\u884C CTF \u5E73\u53F0\u7684\u89C6\u9891\u6559\u7A0B\u548C\u6F14\u7EC3\u3002
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - \u6709\u5173\u5229\u7528\u7684\u89C6\u9891\u6559\u7A0B\u3002
- [MIPT CTF](https://github.com/xairy/mipt-ctf) - \u9488\u5BF9 CTF \u521D\u5B66\u8005\u7684\u5C0F\u578B\u8BFE\u7A0B\uFF08\u4FC4\u8BED\uFF09\u3002


## \u6218\u4E89\u6E38\u620F

*\u6C38\u8FDC\u5728\u7EBF\u7684 CTF*

- [\u540E\u95E8](https://backdoor.sdslabs.co/) - \u7531 SDSLabs \u63D0\u4F9B\u7684\u5B89\u5168\u5E73\u53F0\u3002
- [Crackmes](https://crackmes.one/) - \u9006\u5411\u5DE5\u7A0B\u6311\u6218\u3002
- [CryptoHack](https://cryptohack.org/) - \u6709\u8DA3\u7684\u52A0\u5BC6\u6311\u6218\u3002
- [echoCTF.RED](https://echoctf.red/) - \u5728\u7EBF CTF\uFF0C\u53EF\u653B\u51FB\u591A\u79CD\u76EE\u6807\u3002
- [\u6F0F\u6D1E\u7EC3\u4E60](https://exploit-exercises.lains.space/) - \u5404\u79CD\u865A\u62DF\u673A\uFF0C\u7528\u4E8E\u4E86\u89E3\u5404\u79CD\u8BA1\u7B97\u673A\u5B89\u5168\u95EE\u9898\u3002
- [Exploit.Education](http://exploit.education) - \u5404\u79CD\u865A\u62DF\u673A\uFF0C\u7528\u4E8E\u5B66\u4E60\u5404\u79CD\u8BA1\u7B97\u673A\u5B89\u5168\u95EE\u9898\u3002
- [Gracker](https://github.com/Samuirai/gracker) - \u4E8C\u8FDB\u5236\u6311\u6218\u5177\u6709\u7F13\u6162\u7684\u5B66\u4E60\u66F2\u7EBF\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u7EA7\u522B\u90FD\u6709\u5199\u4F5C\u3002
- [Hack The Box](https://www.hackthebox.eu) - \u6BCF\u5468\u4E3A\u5404\u7C7B\u5B89\u5168\u7231\u597D\u8005\u63D0\u4F9B CTF \u6BD4\u8D5B\u3002
- [Hack This Site](https://www.hackthissite.org/) - \u9ED1\u5BA2\u7684\u8BAD\u7EC3\u573A\u3002
- [Hacker101](https://www.hacker101.com/) - \u6765\u81EA HackerOne \u7684 CTF
- [Hacking-Lab](https://hacking-lab.com/) - \u9053\u5FB7\u9ED1\u5BA2\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u548C\u5B89\u5168\u6311\u6218\u5E73\u53F0\u3002
- [\u78E8\u7EC3\u4F60\u7684\u5FCD\u8005\u6280\u80FD]\uFF08https://honeyourskills.ninja/\uFF09 - \u4ECE\u57FA\u7840\u5F00\u59CB\u7684\u7F51\u7EDC\u6311\u6218\u3002
- [IO](http://io.netgarage.org/) - \u4E8C\u8FDB\u5236\u6311\u6218\u7684\u6218\u4E89\u6E38\u620F\u3002
- [Microcorruption](https://microcorruption.com) - \u5D4C\u5165\u5F0F\u5B89\u5168 CTF\u3002
- [Over The Wire](http://overthewire.org/wargames/) - \u7531 OvertheWire \u793E\u533A\u7EF4\u62A4\u7684\u6218\u4E89\u6E38\u620F\u3002
- [PentesterLab](https://pentesterlab.com/) - \u5404\u79CD VM \u548C\u5728\u7EBF\u6311\u6218\uFF08\u4ED8\u8D39\uFF09\u3002
- [PicoCTF](https://2019game.picoctf.com) - \u5168\u5E74 ctf \u6E38\u620F\u3002\u6765\u81EA\u6BCF\u5E74 picoCTF \u6BD4\u8D5B\u7684\u95EE\u9898\u3002
- [PWN \u6311\u6218](http://pwn.eonew.cn/) - \u4E8C\u8FDB\u5236\u5229\u7528\u6218\u4E89\u6E38\u620F\u3002
- [Pwnable.kr](http://pwnable.kr/) - Pwn \u6E38\u620F\u3002
- [Pwnable.tw](https://pwnable.tw/) - \u4E8C\u8FDB\u5236\u6218\u4E89\u6E38\u620F\u3002
- [Pwnable.xyz](https://pwnable.xyz/) - \u4E8C\u8FDB\u5236\u5229\u7528\u6218\u4E89\u6E38\u620F\u3002
- [Reversin.kr](http://reversing.kr/) - \u5012\u8F66\u6311\u6218\u3002
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 \u56E2\u961F\u5728\u7EBF CTF\u3002
- [Root-Me](https://www.root-me.org/) - \u9ED1\u5BA2\u548C\u4FE1\u606F\u5B89\u5168\u5B66\u4E60\u5E73\u53F0\u3002
- [ROP \u6218\u4E89\u6E38\u620F](https://github.com/xelenonz/game) - ROP \u6218\u4E89\u6E38\u620F\u3002
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - \u4EE5\u8282\u65E5\u4E3A\u4E3B\u9898\u7684\u6311\u6218
  \u6BCF\u5E74\u53D1\u5E03\u5E76\u7531 SANS \u7EF4\u62A4\u3002
- [SmashTheStack](http://smashthestack.org/) - \u7531 SmashTheStack \u793E\u533A\u7EF4\u62A4\u7684\u5404\u79CD\u6218\u4E89\u6E38\u620F\u3002
- [Viblo CTF](https://ctf.viblo.asia) - \u5404\u79CD\u7CBE\u5F69\u7684 CTF \u6311\u6218\uFF0C\u5206\u4E3A\u591A\u4E2A\u7C7B\u522B\u3002\u6709\u7EC3\u4E60\u6A21\u5F0F\u548C\u7ADE\u8D5B\u6A21\u5F0F\u3002
- [VulnHub](https://www.vulnhub.com/) - \u57FA\u4E8E\u865A\u62DF\u673A\uFF0C\u9002\u7528\u4E8E\u6570\u5B57\u5B89\u5168\u3001\u8BA1\u7B97\u673A\u5E94\u7528\u548C\u7F51\u7EDC\u7BA1\u7406\u3002
- [W3Challs](https://w3challs.com) - \u4E00\u4E2A\u6E17\u900F\u6D4B\u8BD5\u8BAD\u7EC3\u5E73\u53F0\uFF0C\u63D0\u4F9B\u5404\u79CD\u7C7B\u522B\u7684\u5404\u79CD\u8BA1\u7B97\u673A\u6311\u6218\u3002
- [WebHacking](http://webhacking.kr) - \u9488\u5BF9\u7F51\u7EDC\u7684\u9ED1\u5BA2\u6311\u6218\u3002


*\u81EA\u6258\u7BA1 CTF*
- [\u8BE5\u6B7B\u7684\u6613\u53D7\u653B\u51FB\u7684 Web \u5E94\u7528\u7A0B\u5E8F](http://www.dvwa.co.uk/) - \u8BE5\u6B7B\u7684\u6613\u53D7\u653B\u51FB\u7684 PHP/MySQL Web \u5E94\u7528\u7A0B\u5E8F\u3002
- [Juice Shop CTF](https://github.com/bkimminich/juice-shop-ctf) - \u7528\u4E8E\u5728 [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) \u4E0A\u8F7B\u677E\u4E3E\u529E CTF \u7684\u811A\u672C\u548C\u5DE5\u5177\u3002

\u7F51\u7AD9

*\u6709\u5173 CTF \u7684\u5404\u79CD\u7EFC\u5408\u7F51\u7AD9*

- [\u5F88\u68D2\u7684 CTF \u5907\u5FD8\u5355](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF \u5907\u5FD8\u5355\u3002
- [CTF \u65F6\u95F4](https://ctftime.org/) - \u6709\u5173\u4E16\u754C\u5404\u5730 CTF \u7684\u4E00\u822C\u4FE1\u606F\u3002
- [Reddit \u5B89\u5168 CTF](http://www.reddit.com/r/securityctf) - Reddit CTF \u7C7B\u522B\u3002

## \u7EF4\u57FA

*\u6709\u5404\u79CD Wiki \u53EF\u4F9B\u60A8\u4E86\u89E3 CTF*

- [Bamboofox](https://bamboofox.github.io/) - \u5B66\u4E60 CTF \u7684\u4E2D\u6587\u8D44\u6E90\u3002
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - \u6765\u81EA bi0s \u56E2\u961F\u7684 Wiki\u3002
- [CTF \u5907\u5FD8\u5355](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF \u6280\u5DE7\u548C\u7A8D\u95E8\u3002
- [ISIS Lab](https://github.com/isislab/Project-Ideas/wiki) - \u7531 Isis lab \u63D0\u4F9B\u7684 CTF Wiki\u3002
- [OpenToAll](https://github.com/OpenToAllCTF/Tips) - OTA CTF \u56E2\u961F\u6210\u5458\u63D0\u4F9B\u7684 CTF \u6280\u5DE7\u3002

## \u5199\u4F5C\u5408\u96C6

*CTF \u5199\u4F5C\u96C6\u9526*

- [0e85dc6eaf](https://github.com/0e85dc6eaf/CTF-Writeups) - 0e85dc6eaf \u64B0\u5199\u7684 CTF \u6311\u6218\u8D5B\u5199\u4F5C
- [Captf](http://captf.com/) - \u7531 psifertex \u8F6C\u50A8\u7684 CTF \u6311\u6218\u548C\u6750\u6599\u3002
- [CTF write-ups (\u793E\u533A)](https://github.com/ctfs/) - \u7531\u793E\u533A\u7EF4\u62A4\u7684 CTF \u6311\u6218 + write-ups \u6863\u6848\u3002
- [CTFTime Scrapper](https://github.com/abdilahrf/CTFWriteupScrapper) - \u4ECE CTF Time \u4E2D\u6293\u53D6\u6240\u6709\u5199\u5165\u5185\u5BB9\u5E76\u7EC4\u7EC7\u4F18\u5148\u9605\u8BFB\u7684\u5185\u5BB9\u3002
- [HackThisSite](https://github.com/HackThisSite/CTF-Writeups) - \u7531 HackThisSite \u56E2\u961F\u7EF4\u62A4\u7684 CTF \u5199\u4F5C\u4ED3\u5E93\u3002
- [Mzfr](https://github.com/mzfr/ctf-writeups/) - mzfr \u64B0\u5199\u7684 CTF \u7ADE\u8D5B\u6587\u7AE0
- [pwntools writeups](https://github.com/Gallopsled/pwntools-write-ups) - \u4F7F\u7528 pwntools \u7684 CTF \u5199\u4F5C\u7684\u96C6\u5408\u3002
- [SababaSec](https://github.com/SababaSec/ctf-writeups) - SababaSec \u56E2\u961F\u7684 CTF \u5199\u4F5C\u5408\u96C6
- [Shell Storm](http://shell-storm.org/repo/CTF/) - \u7531 Jonathan Salwan \u7EF4\u62A4\u7684 CTF \u6311\u6218\u6863\u6848\u3002
- [Smoke Leet Everyday](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - \u7531 SmokeLeetEveryday \u56E2\u961F\u7EF4\u62A4\u7684 CTF \u5199\u4F5C\u4ED3\u5E93\u3002

\uFF03\uFF03\uFF03 \u6267\u7167

CC0 :)
`;export{t as _};
