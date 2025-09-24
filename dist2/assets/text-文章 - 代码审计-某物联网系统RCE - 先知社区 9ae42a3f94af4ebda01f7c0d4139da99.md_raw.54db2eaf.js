const o=`# \u6587\u7AE0 - \u4EE3\u7801\u5BA1\u8BA1-\u67D0\u7269\u8054\u7F51\u7CFB\u7EDFRCE  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:37 AM
URL: https://xz.aliyun.com/news/16285
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

**Author\uFF1AHa1ey**

\u5168\u5C40\u641C\u7D22\u627E\u5230\u4EE3\u7801\u4E2D\u6709\u4E00\u5904\u5173\u4E8E\`newInstance\`\u5B9E\u4F8B\u5316\u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u4F4D\u4E8E\`jetlinks-supports-1.2.3-SNAPSHOT.jar!/org/jetlinks/supports/protocol/management/jar/JarProtocolSupportLoader.class\`\u7C7B\u7684\`lookupProvider\`\u65B9\u6CD5\u4E2D

\u4EE3\u7801\u5982\u4E0B\uFF1A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171211-7ef2b5bc-beb2-1.png)

\u4E0D\u96BE\u53D1\u73B0\`providerType.getDeclaredConstructor().newInstance()\`\u5728\u8FD9\u4E2A\u4F4D\u7F6E\u6709\u4E00\u5904\u8C03\u7528\u6784\u9020\u65B9\u6CD5\u5B9E\u4F8B\u5316\u8FD4\u56DE\u4E00\u4E2A\`ProtocolSupportProvider\`\u5BF9\u8C61\u3002

\u5411\u4E0A\u627E\u5230\`org.jetlinks.community.protocol.AutoDownloadJarProtocolSupportLoader#load\`\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E24\u5904\u8C03\u7528\uFF0C\u4E00\u5904\u662F\`location\`\u53C2\u6570\u662F\`http\`\u5F62\u5F0F\u7684

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171226-87fbabe6-beb2-1.png)

\u53E6\u4E00\u5904\u5219\u662F\u53C2\u6570\u4E3Afileid\u6307\u5B9A\u7684\u6587\u4EF6\uFF1A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171237-8ea14384-beb2-1.png)

\u6700\u540E\u5B9A\u4F4D\u5230\u5165\u53E3\u70B9\`org.jetlinks.community.device.web.ProtocolSupportController#convertToDetail\`\uFF0Cweb\u6839\u8DEF\u5F84\u662F/api\uFF0C\u6240\u4EE5\u5BF9\u5E94\u7684\u8DEF\u7531\u662F\`/api/protocol/convert\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171251-96c6a8f6-beb2-1.png)

\u540E\u9762\u52A8\u6001\u8C03\u8BD5\u4E00\u4E0B\u6C42\u8BC1\u4E00\u4E0B\u524D\u9762\u7684\u731C\u60F3

\u65AD\u70B9\u653E\u5728\`org.jetlinks.community.device.web.ProtocolSupportController#convertToDetail\`\u65B9\u6CD5\u4E2D\uFF0C\u4F1A\u8C03\u7528\u5230\`org.jetlinks.community.protocol.SpringProtocolSupportLoader#load\`\u8FD9\u4E2A\u65B9\u6CD5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171310-a22bd112-beb2-1.png)

\u518D\u5F80\u4E0B\u5C31\u5230\u4E86\u6211\u4EEC\u5173\u6CE8\u7684\`org.jetlinks.community.protocol.AutoDownloadJarProtocolSupportLoader#load\`\u8FD9\u4E2Aload\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E24\u90E8\u5206\u52A0\u8F7D\u65B9\u5F0F\uFF0C\u9996\u5148\u770B\u7B2C\u4E00\u79CD

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171327-ac25c650-beb2-1.png)

\u83B7\u53D6\u53C2\u6570\`location\`\u7684\u503C\uFF0C\u5224\u65AD\u662F\u5426\u662Fhttp\uFF0C\u628A\u503Cmd5\u540E\u627E\u4E00\u4E0B\u4E34\u65F6\u76EE\u5F55\u4E2D\u7684jar\u5305\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u76F4\u63A5\u8C03\u7528\`org.jetlinks.supports.protocol.management.jar.JarProtocolSupportLoader#load\`\u65B9\u6CD5\u5904\u7406\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5C31\u4ECE\u6307\u5B9A\u7684url\u4E0B\u8F7Djar\u5305\u5230\u672C\u5730\uFF0C\u7136\u540E\u5728\u8C03\u7528\`load\`\u53BB\u52A0\u8F7D\uFF0C

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171340-b3eac4bc-beb2-1.png)

\u53E6\u4E00\u79CD\u5219\u662F\u901A\u8FC7\u6211\u4EEC\u6307\u5B9AfileId\u53C2\u6570\u53BB\u6307\u5B9A\u52A0\u8F7D\u76EE\u6807\u672C\u5730\u7684\u4E00\u4E2Ajar\u5305\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171350-ba2dff74-beb2-1.png)

\u4E0A\u8FF0\u4E24\u79CD\u83B7\u53D6jar\u7684\u65B9\u5F0F\u6700\u540E\u90FD\u4F1A\u8D70\u5230\`org.jetlinks.supports.protocol.management.jar.JarProtocolSupportLoader#load\`\u8FD9\u91CC\u4E3B\u8981\u662F\u83B7\u53D6\u4E00\u4E2Aclassloader

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171402-c0ffab0e-beb2-1.png)

\u6700\u540E\u8C03\u7528sink\u70B9

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171415-c8cc56f2-beb2-1.png)

\`org.jetlinks.supports.protocol.management.jar.JarProtocolSupportLoader#lookupProvider\`\u65B9\u6CD5\u4E2D\u6709\u4E00\u5904

loaderScanner.walkClass((loader, name, clazz) -> {
this.visitor.validate(name, clazz);
});

\u8FD9\u91CC\u8C03\u7528ASM\u53BB\u68C0\u67E5\u4E86\u6211\u4EECjar\u5305\u7684classname\u662F\u5426\u5305\u542B\`com.google\`\u3001\`org.apache\`\u3001\`cn.hutool\`\u8FD9\u51E0\u4E2A\u5305\u540D

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171432-d303e126-beb2-1.png)

\u5982\u679C\u4E0D\u662F\u4EE5\u4E0A\u8FF0\u5305\u540D\u5F00\u5934\u7684\u7C7B\uFF0C\u5C31\u68C0\u67E5\u65B9\u6CD5\u8C03\u7528\u7684\u9ED1\u540D\u5355

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171449-dd04ff34-beb2-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171500-e3adfe44-beb2-1.png)

\u8FD9\u91CC\u5F88\u597D\u7ED5\u8FC7\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u53CD\u5C04\u52A0\u8F7D\u5B57\u8282\u7801\u7684\u65B9\u5F0F\u8FDB\u884C\u6076\u610F\u7C7B\u52A0\u8F7D\u3002

**\u4E24\u79CD\u52A0\u8F7D\u6076\u610Fjar\u7684\u65B9\u5F0F**

\u7B2C\u4E00\u79CD\uFF1B

\u5229\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684upload\u63A5\u53E3\u53BB\u4E0A\u4F20\u4E00\u4E2Ajar\uFF0C\u62FF\u5230id

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171518-ee97ecac-beb2-1.png)

\u7136\u540E\u8FDB\u884C\u52A0\u8F7D

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171530-f5723d52-beb2-1.png)

\u7B2C\u4E8C\u79CD\uFF1A

\u76F4\u63A5\u51FA\u7F51\u8FDC\u7A0B\u52A0\u8F7D\u4E00\u4E2Ajar

![](https://xzfile.aliyuncs.com/media/upload/picture/20241220171541-fbdc35ee-beb2-1.png)

**\u672C\u6587\u7AE0\u4EC5\u4F9B\u5B66\u4E60\u4EA4\u6D41\u4F7F\u7528\uFF0C\u6587\u4E2D\u6240\u6D89\u53CA\u7684\u6280\u672F\u3001\u601D\u8DEF\u548C\u5DE5\u5177\u4EC5\u4F9B\u4EE5\u5B89\u5168\u4E3A\u76EE\u7684\u7684\u5B66\u4E60\u4EA4\u6D41\u4F7F\u7528\uFF0C\u4EFB\u4F55\u4EBA\u4E0D\u5F97\u5C06\u5176\u7528\u4E8E\u975E\u6CD5\u7528\u9014\u4EE5\u53CA\u76C8\u5229\u7B49\u76EE\u7684\uFF0C\u5426\u5219\u540E\u679C\u81EA\u884C\u627F\u62C5\uFF01**`;export{o as _};
