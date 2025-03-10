https://github.com/wpsec/Emergency-response-notes

# **应急响应个人笔记**

## [**Linux-应急响应**](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md)

* [一. 账户安全](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%80-%E8%B4%A6%E6%88%B7%E5%AE%89%E5%85%A8)  
* [1.1 查询特权账户 & 组](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#11-%E6%9F%A5%E8%AF%A2%E7%89%B9%E6%9D%83%E8%B4%A6%E6%88%B7--%E7%BB%84)  
* [1.2 查询可远程登录账户及其它信息](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#12-%E6%9F%A5%E8%AF%A2%E5%8F%AF%E8%BF%9C%E7%A8%8B%E7%99%BB%E5%BD%95%E8%B4%A6%E6%88%B7%E5%8F%8A%E5%85%B6%E5%AE%83%E4%BF%A1%E6%81%AF)  
* [1.3 查询 sudo 权限账户](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#13-%E6%9F%A5%E8%AF%A2-sudo-%E6%9D%83%E9%99%90%E8%B4%A6%E6%88%B7)  
* [1.4 禁用or删除账户](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#14-%E7%A6%81%E7%94%A8or%E5%88%A0%E9%99%A4%E8%B4%A6%E6%88%B7)  
* [1.5 用户历史命令](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#15-%E7%94%A8%E6%88%B7%E5%8E%86%E5%8F%B2%E5%91%BD%E4%BB%A4)  
* [二. 异常端口进程服务文件](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%BA%8C-%E5%BC%82%E5%B8%B8%E7%AB%AF%E5%8F%A3%E8%BF%9B%E7%A8%8B%E6%9C%8D%E5%8A%A1%E6%96%87%E4%BB%B6)  
* [2.1 端口](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#21-%E7%AB%AF%E5%8F%A3)  
* [2.2 进程](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#22-%E8%BF%9B%E7%A8%8B)  
* [2.3 使用 lsof分析进程](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#23-%E4%BD%BF%E7%94%A8-lsof%E5%88%86%E6%9E%90%E8%BF%9B%E7%A8%8B)  
* [2.4 服务](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#24-%E6%9C%8D%E5%8A%A1)  
* [2.5 文件](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#25-%E6%96%87%E4%BB%B6)  
* [2.6 其它](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#26-%E5%85%B6%E5%AE%83)  
* [三. 启动项与定时任务](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%89-%E5%90%AF%E5%8A%A8%E9%A1%B9%E4%B8%8E%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)  
* [3.1 开机启动文件](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#31-%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8%E6%96%87%E4%BB%B6)  
* [3.2 定时任务](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#32-%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)  
* [3.3 日志](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#33-%E6%97%A5%E5%BF%97)  
* [ubuntu](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#ubuntu)  
* [判断爆破](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%88%A4%E6%96%AD%E7%88%86%E7%A0%B4)  
* [centos](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#centos)  
* [定位有哪些IP在爆破：](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%AE%9A%E4%BD%8D%E6%9C%89%E5%93%AA%E4%BA%9Bip%E5%9C%A8%E7%88%86%E7%A0%B4)  
* [爆破用户名字典是什么？](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E7%88%86%E7%A0%B4%E7%94%A8%E6%88%B7%E5%90%8D%E5%AD%97%E5%85%B8%E6%98%AF%E4%BB%80%E4%B9%88)  
* [登录成功的IP有哪些：](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F%E7%9A%84ip%E6%9C%89%E5%93%AA%E4%BA%9B)  
* [登录成功的日期、用户名、IP：](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E7%99%BB%E5%BD%95%E6%88%90%E5%8A%9F%E7%9A%84%E6%97%A5%E6%9C%9F%E7%94%A8%E6%88%B7%E5%90%8Dip)  
* [WEB日志](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#web%E6%97%A5%E5%BF%97)  
* [WEB日志中的敏感特征](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#web%E6%97%A5%E5%BF%97%E4%B8%AD%E7%9A%84%E6%95%8F%E6%84%9F%E7%89%B9%E5%BE%81)  
* [3.4 自动化辅助工具](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#34-%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7)  
* [3.5 勒索病毒引擎](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#35-%E5%8B%92%E7%B4%A2%E7%97%85%E6%AF%92%E5%BC%95%E6%93%8E)  
* [3.6 反勒索病毒工具](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#36-%E5%8F%8D%E5%8B%92%E7%B4%A2%E7%97%85%E6%AF%92%E5%B7%A5%E5%85%B7)  
* [3.7 溯源分析脚本](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#37-%E6%BA%AF%E6%BA%90%E5%88%86%E6%9E%90%E8%84%9A%E6%9C%AC)  
* [四. 挖矿木马](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%9B%9B-%E6%8C%96%E7%9F%BF%E6%9C%A8%E9%A9%AC)  
* [4.1 阻断通信](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#41-%E9%98%BB%E6%96%AD%E9%80%9A%E4%BF%A1)  
* [4.2 计划任务检查](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#42-%E8%AE%A1%E5%88%92%E4%BB%BB%E5%8A%A1%E6%A3%80%E6%9F%A5)  
* [4.3 启动项](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#43-%E5%90%AF%E5%8A%A8%E9%A1%B9)  
* [4.4 判断可疑进程](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#44-%E5%88%A4%E6%96%AD%E5%8F%AF%E7%96%91%E8%BF%9B%E7%A8%8B)  
* [4.5 top源文件被篡改](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#45-top%E6%BA%90%E6%96%87%E4%BB%B6%E8%A2%AB%E7%AF%A1%E6%94%B9)  
* [五. 处置办法](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%BA%94-%E5%A4%84%E7%BD%AE%E5%8A%9E%E6%B3%95)  
* [给出相应解决办法](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E7%BB%99%E5%87%BA%E7%9B%B8%E5%BA%94%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)  
* [上线前做好安全基线检查](https://github.com/wpsec/Emergency-response-notes/blob/main/Linux-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%8A%E7%BA%BF%E5%89%8D%E5%81%9A%E5%A5%BD%E5%AE%89%E5%85%A8%E5%9F%BA%E7%BA%BF%E6%A3%80%E6%9F%A5)

## [**Windows-应急响应**](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md)

* [一. 账户安全](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%80-%E8%B4%A6%E6%88%B7%E5%AE%89%E5%85%A8)  
* [利用LogParser查看日志](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%88%A9%E7%94%A8logparser%E6%9F%A5%E7%9C%8B%E6%97%A5%E5%BF%97)  
* [二. 检查异常端口进程](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%BA%8C-%E6%A3%80%E6%9F%A5%E5%BC%82%E5%B8%B8%E7%AB%AF%E5%8F%A3%E8%BF%9B%E7%A8%8B)  
* [三. 启动项](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%89-%E5%90%AF%E5%8A%A8%E9%A1%B9)  
* [系统定时任务](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E7%B3%BB%E7%BB%9F%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)  
* [任务清单](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%BB%BB%E5%8A%A1%E6%B8%85%E5%8D%95)  
* [删除任务计划](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%88%A0%E9%99%A4%E4%BB%BB%E5%8A%A1%E8%AE%A1%E5%88%92)  
* [五. 系统服务](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%BA%94-%E7%B3%BB%E7%BB%9F%E6%9C%8D%E5%8A%A1)  
* [六. 文件](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E5%85%AD-%E6%96%87%E4%BB%B6)  
* [七. 安防软件日志记录](https://github.com/wpsec/Emergency-response-notes/blob/main/Windows-%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94.md#%E4%B8%83-%E5%AE%89%E9%98%B2%E8%BD%AF%E4%BB%B6%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95)

## [**工具整合**](https://github.com/wpsec/Emergency-response-notes/tree/main/tools)

| [ARK+辅助工具](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/ARK%2B%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7) | [update](https://github.com/wpsec/Emergency-response-notes/commit/2bb2d0df34d0977f5f8a8dc1cf877b633d0de305) | last year |
| :---- | :---- | ----: |
| [内存取证](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E5%86%85%E5%AD%98%E5%8F%96%E8%AF%81) | [update](https://github.com/wpsec/Emergency-response-notes/commit/2cf79b7afcc3ecfa13baaf2aa7fffbd1b94c1033) | last year |
| [安全运维巡检](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E5%AE%89%E5%85%A8%E8%BF%90%E7%BB%B4%E5%B7%A1%E6%A3%80) | [update tools](https://github.com/wpsec/Emergency-response-notes/commit/8c2f1e3291c338ef141dfe4881779bf86ef99cef) | last year |
| [应急响应](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94) | [update](https://github.com/wpsec/Emergency-response-notes/commit/2041e6889f02d4a6c498e2daf09c3e314608becd) | last year |
| [开源容器检测](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E5%BC%80%E6%BA%90%E5%AE%B9%E5%99%A8%E6%A3%80%E6%B5%8B) | [update](https://github.com/wpsec/Emergency-response-notes/commit/2bb2d0df34d0977f5f8a8dc1cf877b633d0de305) | last year |
| [日志分析](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90) | [update tools](https://github.com/wpsec/Emergency-response-notes/commit/8c2f1e3291c338ef141dfe4881779bf86ef99cef) | last year |
| [流量分析工具](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E6%B5%81%E9%87%8F%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7) | [update tools](https://github.com/wpsec/Emergency-response-notes/commit/8c2f1e3291c338ef141dfe4881779bf86ef99cef) | last year |
| [病毒Webshell查杀](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E7%97%85%E6%AF%92Webshell%E6%9F%A5%E6%9D%80) | [update](https://github.com/wpsec/Emergency-response-notes/commit/bf160b9eaf7ea9a2b935c18fcaff9085b9d51ea0) | last year |
| [痕迹取证](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E7%97%95%E8%BF%B9%E5%8F%96%E8%AF%81) | [update](https://github.com/wpsec/Emergency-response-notes/commit/2041e6889f02d4a6c498e2daf09c3e314608becd) | last year |
| [进程分析](https://github.com/wpsec/Emergency-response-notes/tree/main/tools/%E8%BF%9B%E7%A8%8B%E5%88%86%E6%9E%90) | [update tools](https://github.com/wpsec/Emergency-response-notes/commit/8c2f1e3291c338ef141dfe4881779bf86ef99cef) | last year |

