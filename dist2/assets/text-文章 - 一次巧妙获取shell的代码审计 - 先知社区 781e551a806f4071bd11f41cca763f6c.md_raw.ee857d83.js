const n=`# \u6587\u7AE0 - \u4E00\u6B21\u5DE7\u5999\u83B7\u53D6shell\u7684\u4EE3\u7801\u5BA1\u8BA1  - \u5148\u77E5\u793E\u533A

Created: March 23, 2025 4:38 PM
URL: https://xz.aliyun.com/news/16945
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

\u4E00\u6B21\u5DE7\u5999\u83B7\u53D6shell\u7684\u4EE3\u7801\u5BA1\u8BA1

 [Werqy3](https://xz.aliyun.com/users/158140) [\u6F0F\u6D1E\u5206\u6790](https://xz.aliyun.com/news?cate_id=2) 132\u6D4F\u89C8 \xB7 2025-02-18 13:42

![](https://xz.aliyun.com/assets/pc/images/pic_default_secret.png)

\u8FD4\u56DE\u6587\u6863

\u73AF\u5883\u642D\u5EFA

\u6E90\u7801\u4E0B\u8F7D\u5730\u5740\uFF1A[https://github.com/rainrocka/xinhu](https://github.com/rainrocka/xinhu)\u4E0B\u8F7D\u540E\u89E3\u538B\u5230\u672C\u5730\u7F51\u7AD9\u6839\u76EE\u5F55\u4E0B\uFF0C\u914D\u7F6E\u597D\u6570\u636E\u5E93\uFF0C\u7136\u540E\u5B89\u88C5\u5373\u53EF

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173304-af649e47-ef6d-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173305-b01f5d9a-ef6d-1.png)

\u9ED8\u8BA4\u5BC6\u7801\u662Fadmin/123456\uFF0C\u767B\u5F55\u8FDB\u53BB\u5F97\u66F4\u6539\u4E00\u6B21\u5BC6\u7801

\u8DEF\u7531\u5206\u6790

\u5728include/View.php\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u8DEF\u7531\u7684\u5B9A\u4E49

\u200B\u8FD9\u91CC\u7528get\u65B9\u5F0F\u4F1A\u63A5\u6536m\uFF0Cd\uFF0Ca\uFF0Cajaxbool\u53C2\u6570

\u25CF

![](https://cdn.nlark.com/yuque/__latex/10d4d9b73e015930a3aa12e07ba66b47.svg)

rock->jm->gettoken\u83B7\u53D6\u3002\u5F53ajaxbool\u4E3Afalse\u65F6\uFF0C\u662F\u5BF9xxxAction.php\u7684\u5185\u5BB9\u8BBF\u95EE\uFF0C\u5F53ajaxbool\u4E3Atrue\u65F6\uFF0C\u662F\u5BF9xxxAjax.php\u7684\u5185\u5BB9\u8FDB\u884C\u8BBF\u95EE

\u25CF

![](https://cdn.nlark.com/yuque/__latex/2b58cab9b6a24c7bbe4e2c103e43ae27.svg)

a, $d\uFF1A\u5206\u522B\u4EE3\u8868php\u6587\u4EF6\u540D\uFF08\u4E0D\u542BAction\uFF09\u3001\u52A8\u4F5C\u540D\uFF08action\uFF09\u3001\u76EE\u5F55\u540D(webadmin\u4E0B\u7684\u5B50\u76EE\u5F55\uFF09\uFF0C\u9ED8\u8BA4\u503C\u5206\u522B\u4E3Aindex\uFF0Cdefault\u3001\u7A7A\u5B57\u7B26\u4E32\u3002

\u4E3E\u4F8B\uFF1Aindex.php?a=deluser&m=imgroup&ajaxbool=true&gid=38&sid=1

\u25CF$m\uFF1Auser\uFF0C\u8868\u793A\u8BF7\u6C42\u7684\u662Fwebadmin\u4E0B\u7684imgroup \u76EE\u5F55\u3002

\u25CF$a\uFF1Alist\uFF0C\u8868\u793A\u8BF7\u6C42\u7684\u65B9\u6CD5\u662F deluser\u3002

\u25CF ajaxbool\uFF1Atrue\uFF0C\u8868\u793A\u8FD9\u662F\u4E00\u4E2A AJAX \u8BF7\u6C42

\u6F0F\u6D1E\u5206\u6790

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173307-b103ba53-ef6d-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173308-b1a7ea49-ef6d-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173309-b2230d1a-ef6d-1.png)

\u6839\u636E\u8DEF\u7531\u5B9A\u4F4D\u6587\u4EF6\uFF1Awebmain/public/upload/uploadAction.php\u6587\u4EF6\u4E0B\u7684upfileAjax\u65B9\u6CD5

\u200B\u8DDF\u8FDB\u4E00\u4E0Bc()\u65B9\u6CD5\uFF0C\u770B\u770B$upimg\u6307\u5411\u90A3\u4E2A\u7C7B

\u200B\u8FD9\u91CC\u4E3B\u8981\u5305\u542B\u4E86upfileChajian.php\u6587\u4EF6

\u518D\u8DDF\u8FDB\u4E00\u4E0BupfileChajian.php\u6587\u4EF6\u4E2D\u7684up()\u65B9\u6CD5\uFF0C\u770B\u770B\u600E\u6837\u5B9E\u73B0\u6587\u4EF6\u4E0A\u4F20\u7684

\u200B\u8FD9\u91CC\u6709\u4E00\u4E2Aissavefile()\u65B9\u6CD5\u662F\u7528\u6765\u8FDB\u884C\u540E\u7F00\u5224\u65AD\uFF0C\u8DDF\u8FDB\u4E00\u4E0B

\u200B\u5982\u679C\u4E0D\u5728\u767D\u540D\u5355\u91CC\u9762$bo\u5C31\u8FD4\u56DEfalse\uFF0C\u7531\u4E8E\u6211\u4EEC\u4E0A\u4F20\u7684\u662Fphp\u6587\u4EF6\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E3Afalse\uFF0C$filekup\u5C31\u4E3Afalse\u4E86

\u200B\u6240\u4EE5\u4F1A\u8C03\u7528filesave(\u65B9\u6CD5\uFF0C\u8DDF\u8FDB\u4E00\u4E0B

\u200B\u8FD9\u4E2A\u529F\u80FD\u4E3B\u8981\u662F\u5C06\u6587\u4EF6\u5185\u5BB9base64\u7F16\u7801\uFF0C\u5E76\u5C06\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230.uptemp\u6587\u4EF6\uFF0C\u4F7F\u7528\u8FD9\u91CC\u6211\u4EEC\u662F\u65E0\u6CD5\u5229\u7528\u7684

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173309-b288d127-ef6d-1.png)

\u8FD9\u91CC\u4E5F\u786E\u5B9E\u66FF\u6362\u4E86\u540E\u7F00

\u4F46\u662F\u5728webmain/task/runt/qcloudCosAction.php\u6587\u4EF6\u4E2D\u5B58\u5728\u4E00\u4E2ArunAction\u65B9\u6CD5

\u200B\u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7\u63A7\u5236id\u6765\u8FD8\u539F.uptemp\u540E\u7F00\u4E3A\u4E4B\u524D\u4E0A\u4F20\u7684\u540E\u7F00

\u6839\u636E\u6587\u4EF6\u6765\u6784\u9020\u4E00\u4E0B\u8DEF\u7531

task.php?m=qcloudCos|runt&a=run&fileid=10

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173310-b2bfe218-ef6d-1.png)

\u6210\u529F\u66FF\u6362\u540E\u7F00

\u8BBF\u95EE\u4E00\u4E0B

![](https://xzfile.aliyuncs.com/media/upload/picture/20250220173310-b338a6d4-ef6d-1.png)

\u200B

0 \u4EBA\u6536\u85CF 0 \u4EBA\u559C\u6B22
 \u8F6C\u8F7D
 \u5206\u4EAB

![](https://xz.aliyun.com/assets/pc/images/forward.png)

![](https://xz.aliyun.com/assets/pc/images/share.png)

0 \u6761\u8BC4\u8BBA

[https://ldmmifpegigmeammaeckplhnjbbpccmm/rich-editor/yuque](https://ldmmifpegigmeammaeckplhnjbbpccmm/rich-editor/yuque)

\u67D0\u4EBA

\u8868\u60C5

\u53EF\u8F93\u5165 255 \u5B57 \u8BC4\u8BBA

![](https://xz.aliyun.com/assets/pc/images/pic_default_content.png)

\u6CA1\u6709\u8BC4\u8BBA

\xA0 [\u53D1\u5E03\u6295\u7A3F](https://xz.aliyun.com/news/release)

![](https://xz.aliyun.com/assets/pc/images/icon-publish.png)

\u70ED\u95E8\u6587\u7AE0

- 
    
    [Merlin\u540E\u6E17\u900F\u5229\u7528\u6846\u67B6\u4E4BMerlin Agent\u8FDC\u63A7\u6728\u9A6C\u5256\u6790](https://xz.aliyun.com/news/16796)
    
- 
    
    [cyberstrikelab\u2014Thunder](https://xz.aliyun.com/news/16753)
    
- 
    
    [\u5185\u6838\u653B\u9632-(2)\u81F4\u76F2EDR](https://xz.aliyun.com/news/16779)
    
- 
    
    [\u8D85\u5E72\u4FE1\u606F\u6536\u96C6\uFF0C\u8BA9\u8D44\u4EA7\u8BF4NO\uFF01](https://xz.aliyun.com/news/16765)
    
- 
    
    [\u5148\u77E5\u793E\u533A\u65B0\u7248\u4E0A\u7EBF\u516C\u544A](https://xz.aliyun.com/news/16567)
    

\u4F18\u79C0\u4F5C\u8005

- [1](https://xz.aliyun.com/users/90660)
    
    ![](https://xz.aliyun.com/assets/pc/images/pic_default_secret.png)
    
    [\u963F\u91CC\u4E91\u5148\u77E5](https://xz.aliyun.com/users/90660)
    
    [\u8D21\u732E\u503C\uFF1A100](https://xz.aliyun.com/users/90660)
    

\u76EE\u5F55

- *\uE63F*
    
    \u73AF\u5883\u642D\u5EFA
    
- *\uE63F*
    
    \u8DEF\u7531\u5206\u6790
    
- *\uE63F*
    
    \u6F0F\u6D1E\u5206\u6790
    

\u8F6C\u8F7D

![](https://xz.aliyun.com/assets/pc/images/close.png)

\u6807\u9898

\u4F5C\u8005\uFF1A\u4F60\u597D

http://www.a.com/asdsabdas

\u6587\u7AE0\u8F6C\u8F7D\u81EA

\u590D\u5236\u5230\u526A\u8D34\u677F`;export{n as _};
