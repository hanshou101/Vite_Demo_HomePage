const n=`# \u3010CTF\u89E3\u9898\u3011\u3010\u65B0\u7684\u9898-\u4F3C\u4E4E\u6CA1\u5199\u5B8C\u3011\u4EAC\u9E92ctf2024-Re-babyharmony(\u9E3F\u8499OS\u9006\u5411)_\u9E3F\u8499app\u9006\u5411-CSDN\u535A\u5BA2

Created: December 3, 2024 10:46 AM
URL: https://blog.csdn.net/qq_65474192/article/details/139221789
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 7.8

[\u9E3F\u8499HarmonyOS\u9006\u5411](https://blog.csdn.net/qq_65474192/article/details/%E9%B8%BF%E8%92%99HarmonyOS%E9%80%86%E5%90%91.md)

\u627E\u5230\u7684\u5DE5\u5177\uFF1A[HapViewer \u53D1\u884C\u7248 - Gitee.com](https://gitee.com/westinyang/hap-viewer/releases)

\u5B8C\u5168\u4E0D\u77E5\u9053[\u9E3F\u8499](https://so.csdn.net/so/search?q=%E9%B8%BF%E8%92%99&spm=1001.2101.3001.7020)os\u5982\u4F55\u9006\u5411QAQ

\u90A3\u5C31\u6309\u5B89\u5353\u7684\u65B9\u6CD5\u6765\u9006\u4F46\u662F\u6CA1\u6709\u5DE5\u5177\uFF01\uFF01\uFF01

.apk\u5176\u5B9E\u53EF\u4EE5\u6309zip\u7684\u683C\u5F0F\u6253\u5F00\u770B\u89C1\u62E5\u6709[\u6E90\u7801](https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&spm=1001.2101.3001.7020)\u7684.dex\u6587\u4EF6\uFF0C\u90A3\u4E48.hap\u662F\u4E0D\u662F\u4E5F\u53EF\u4EE5\u8FD9\u6837\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/6311114bc0f1bd1188f8ac7afab8daa3.png](https://i-blog.csdnimg.cn/blog_migrate/6311114bc0f1bd1188f8ac7afab8daa3.png)

\u767E\u5EA6\u4E00\u4E9B.abc\u6587\u4EF6\u53D1\u73B0\u5565\u4E5F\u6CA1\u6709\u8D44\u6599QAQ\uFF0C\u76F4\u63A5\u7528txt\u6253\u5F00\u53D1\u73B0\u5C45\u7136\u6709\u6E90\u7801\u5728\u91CC\u9762\uFF01\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/562912c61c4229dfbcba176c18e98e8c.png](https://i-blog.csdnimg.cn/blog_migrate/562912c61c4229dfbcba176c18e98e8c.png)

\u53D1\u73B0\u9700\u8981\u7528utf-8\u53EF\u4EE5\u89E3\u51B3\u90E8\u5206\u4E2D\u6587\u4E71\u7801\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/9241c04cbf25aec06af6b8280ecb93c9.png](https://i-blog.csdnimg.cn/blog_migrate/9241c04cbf25aec06af6b8280ecb93c9.png)

\u63D0\u53D6\u51FA\u4E3B\u8981\u7684\u4EE3\u7801\uFF1A

\`\`\`
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.context = getContext(this);
        this.__message = new ObservedPropertySimplePU('\u8BF7\u8F93\u5165flag', this, "message");
        this.__button_name = new ObservedPropertySimplePU('\u63D0\u4EA4', this, "button_name");
        this.__flag = new ObservedPropertySimplePU('', this, "flag");
        this.__result = new ObservedPropertySimplePU('', this, "result");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomDialogExample(this, {
                    textValue: this.__result,
                });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
            }
        }, this);
        this.setInitiallyProvidedValue(params);
    }
123456789101112131415161718
\`\`\`

- 1
- 2
- 3
- 4
- 5
- 6
- 7
- 8
- 9
- 10
- 11
- 12
- 13
- 14
- 15
- 16
- 17
- 18

\u8FD9\u6BB5\u4EE3\u7801\u521D\u59CB\u5316\u4E86\u4E00\u4E2Aflag\u63D0\u4EA4\u6846\uFF01\uFF01\uFF01

\`\`\`
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.button_name);
            Button.onClick(() => {
                this.context.resourceManager.getRawFileContent("bin").then((value) => {
                    var c = testNapi.check(this.flag, value);
                    if ((c & 0b100) === 0b100) {
                        this.result = '\u7CFB\u7EDF\u73AF\u5883\u5F02\u5E38';
                    }
                    else if ((c & 0b10) === 0b10) {
                        this.result = 'flag\u683C\u5F0F\u9519\u8BEF';
                    }
                    else if ((c & 0b1) === 0b1) {
                        this.result = 'flag\u9519\u8BEF\u6216\u7CFB\u7EDF\u73AF\u5883\u5F02\u5E38';
                    }
                    else {
                        this.result = 'flag\u6B63\u786E';
                    }
                    this.dialogController.open();
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
1234567891011121314151617181920212223242526
\`\`\`

- 1
- 2
- 3
- 4
- 5
- 6
- 7
- 8
- 9
- 10
- 11
- 12
- 13
- 14
- 15
- 16
- 17
- 18
- 19
- 20
- 21
- 22
- 23
- 24
- 25
- 26

\u5728txt\u91CC\u9762\u627E\u5230\u4E86\u5224\u65ADflag\u7684\u6309\u94AE\uFF01\uFF01var c = testNapi.check(this.flag, value);

\u53D1\u73B0\u8FD9\u91CC\u5C31\u6709check[\u51FD\u6570](https://marketing.csdn.net/p/3127db09a98e0723b83b2914d9256174?pId=2782&utm_source=glcblog&spm=1001.2101.3001.7020)\u53EF\u4EE5\u5224\u65ADflag\uFF01

\u4F46\u662F\u627E\u4E0D\u5230testNapi.check\u65B9\u6CD5\u767E\u5EA6\u4E00\u4E0B\uFF01

\u53D1\u73B0testNapi\u5176\u5B9E\u5C31\u7C7B\u4F3C\u4E8E\u5B89\u5353\u7684Native\u65B9\u6CD5\uFF1A[16.7\uFF1ANAPI \u52A0\u8F7D\u539F\u7406\uFF08\u4E0A\uFF09 | \u300AArkUI\u5B9E\u6218\u300B](https://www.arkui.club/chapter16/16_7_source.html#_16-7-1-hap-%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84)

\u767E\u5EA6\u67E5\u4E00\u4E0B\u53D1\u73B0\u65B9\u6CD5\u662F\u5199\u5728libentry.so\u6587\u4EF6\u91CC\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/2b5a949fe39ef10a340af09dd680891f.png](https://i-blog.csdnimg.cn/blog_migrate/2b5a949fe39ef10a340af09dd680891f.png)

\u62D6\u5165ida\u76F4\u63A5\u641C\u7D22\u5B57\u7B26\u4E32\u627E\u5230\u4E86\u65B9\u6CD5\uFF01\uFF01\uFF01

\u53D1\u73B0\u8FD9\u4E2Acheck\u65B9\u6CD5\u662F\u5728so\u6587\u4EF6\u91CC\u7684\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/71cc192c8b68ba4664b9278c1a8a8512.png](https://i-blog.csdnimg.cn/blog_migrate/71cc192c8b68ba4664b9278c1a8a8512.png)

\u627E\u5230check\u65B9\u6CD5\uFF01\uFF01

![https://i-blog.csdnimg.cn/blog_migrate/152e6f49a1d9482815a80cc3f59b1239.png](https://i-blog.csdnimg.cn/blog_migrate/152e6f49a1d9482815a80cc3f59b1239.png)

\u53D1\u73B0\u8FD9\u4E2A\u8C03\u7528\u7684\u539F\u7406\u662F\u4F7F\u7528\u4F7F\u7528ArkTs\u8C03\u7528so\u65B9\u6CD5QAQ\uFF0C\u6211\u53BB\u95EEchatgpt\u4ED6\u8BF4\u662Fjs\u8C03\u7528so\u65B9\u6CD5\u5DEE\u70B9\u809D\u6B7B\u6211\u4E86\uFF01

js\u8C03\u7528so\u65B9\u6CD5\uFF1A[node-ffi-napi/node-ffi-napi\uFF1A\u7528\u4E8E Node.js N-API \u6837\u5F0F\u7684\u5916\u90E8\u51FD\u6570\u63A5\u53E3 \uFF08FFI\uFF09](https://github.com/node-ffi-napi/node-ffi-napi)

![https://i-blog.csdnimg.cn/blog_migrate/633add0a343e83f4f20d5d17f8d52512.png](https://i-blog.csdnimg.cn/blog_migrate/633add0a343e83f4f20d5d17f8d52512.png)

\`\`\`
// example.js
const ffi = require('ffi-napi'); // \u4F7F\u7528 ffi-napi \u6A21\u5757\u6765\u52A0\u8F7D SO \u6587\u4EF6

// \u52A0\u8F7D example.so \u6587\u4EF6
const example = ffi.Library('./libentry.so', {
  'add': ['int', ['int', 'int']] // \u5B9A\u4E49 SO \u6587\u4EF6\u4E2D\u7684 add \u51FD\u6570
});

// \u66B4\u9732\u4E00\u4E2A\u51FD\u6570\u7ED9 JavaScript \u4F7F\u7528
function add(a, b) {
  return example.add(a, b);
}

module.exports = { add };
1234567891011121314
\`\`\`

- 1
- 2
- 3
- 4
- 5
- 6
- 7
- 8
- 9
- 10
- 11
- 12
- 13
- 14

\`\`\`
// main.js
const { add } = require('./example');

// \u8C03\u7528\u5C01\u88C5\u7684 add \u51FD\u6570
const result = add(2, 3);
console.log(result); // \u8F93\u51FA 5
123456
\`\`\`

- 1
- 2
- 3
- 4
- 5
- 6

\u53BB\u914D\u4E86js\u7684\u7684ffi-napi\u5E93\u518D\u53BB\u8C03\u7528\u8FD9\u4E2Aso\u6587\u4EF6\u7684check\u65B9\u6CD5\u53D1\u73B0\u62A5\u9519\uFF1A

![https://i-blog.csdnimg.cn/blog_migrate/2d4edf7304c2973d92717b40995676df.png](https://i-blog.csdnimg.cn/blog_migrate/2d4edf7304c2973d92717b40995676df.png)

\u7136\u540E\u7EE7\u7EED\u767E\u5EA6\u624D\u53D1\u73B0\u5B83\u7528\u7684\u662FArkTs\u8C03\u7528so\u65B9\u6CD5\uFF01\uFF01\uFF01

\u90A3\u7EE7\u7EED\u809D\uFF0C\u53BB\u4E0B\u8F7D\u4E00\u4E2A\u9E3F\u8499\u5F00\u53D1\u73AF\u5883\uFF1A

1. [DevEco Studio-HarmonyOS SDK\u4E0B\u8F7D\u548C\u5347\u7EA7-\u534E\u4E3A\u5F00\u53D1\u8005\u8054\u76DF (huawei.com)](https://developer.huawei.com/consumer/cn/deveco-studio/)
2. [\u534E\u4E3A\u5B98\u65B9\uFF1A\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528\u9E3F\u8499 HarmonyOS \u672C\u5730\u6A21\u62DF\u5668 - IT\u4E4B\u5BB6 (ithome.com)](https://www.ithome.com/0/604/887.htm)
3. [\u9E3F\u8499\u624B\u673A\u7248JNI\u5B9E\u6218\uFF08JNI\u5F00\u53D1\u3001SO\u5E93\u751F\u6210\u3001SO\u5E93\u4F7F\u7528\uFF09 - \u9F50\u884C\u8D85 - \u535A\u5BA2\u56ED (cnblogs.com)](https://www.cnblogs.com/qixingchao/p/14708857.html) \u6210\u529F\u4E86\uFF01\uFF01\uFF01  \u6253\u5F00\u6A21\u62DF\u5668\uFF01\u6210\u529F\u5269\u4E0B\u7684\u5C31\u662F\u5206\u6790so\u6587\u4EF6\u7684\u5177\u4F53\u8C03\u7528\u4E86\uFF01\uFF01\uFF01
    
    ![https://i-blog.csdnimg.cn/blog_migrate/3785b88f6e0639006d9e993924d30188.png](https://i-blog.csdnimg.cn/blog_migrate/3785b88f6e0639006d9e993924d30188.png)
    
    ![https://i-blog.csdnimg.cn/blog_migrate/5785979fe148f47a00e334a252a66c30.png](https://i-blog.csdnimg.cn/blog_migrate/5785979fe148f47a00e334a252a66c30.png)
    

\u77E5\u8BC6\u94FE\u63A5\uFF1A

[DevEco Studio-HarmonyOS SDK\u4E0B\u8F7D\u548C\u5347\u7EA7-\u534E\u4E3A\u5F00\u53D1\u8005\u8054\u76DF (huawei.com)](https://developer.huawei.com/consumer/cn/deveco-studio/)

[\u534E\u4E3A\u5B98\u65B9\uFF1A\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528\u9E3F\u8499 HarmonyOS \u672C\u5730\u6A21\u62DF\u5668 - IT\u4E4B\u5BB6 (ithome.com)](https://www.ithome.com/0/604/887.htm)

[\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528HarmonyOS\u672C\u5730\u6A21\u62DF\u5668 (qq.com)](https://mp.weixin.qq.com/s/-cprXyOS10pTgbIo1RTngA)[\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528HarmonyOS\u672C\u5730\u6A21\u62DF\u5668_harmonyos\u600E\u4E48\u672C\u5730\u6A21\u62DF\u5668-CSDN\u535A\u5BA2](https://blog.csdn.net/HarmonyOSDev/article/details/122987004)

[\u9E3F\u8499 hap apk,\u9006\u5411\u5206\u6790\u7B2C\u4E00\u4E2A\u9E3F\u8499OS\u5E94\u7528-CSDN\u535A\u5BA2](https://blog.csdn.net/weixin_39639505/article/details/117362037)

[\u534E\u4E3Ahap\u5B89\u88C5\u5305\u9006\u5411\u8BB0\u5F55 - LY \u7684\u535A\u5BA2 (young-lord.github.io)](https://young-lord.github.io/posts/hap-reverse)

[[\u4E0B\u8F7D][\u539F\u521B]\u9E3F\u8499APP\u9006\u5411\u5206\u6790-HarmonyOS-\u770B\u96EA-\u5B89\u5168\u793E\u533A|\u5B89\u5168\u62DB\u8058|kanxue.com](https://bbs.kanxue.com/thread-268296.htm)

[\u786C\u6838\u6559\u7A0B\uFF1AOpenHarmony\u548C\u9E3F\u8499hap\u5305\u9006\u5411\u89E3\u6790\u5E94\u7528\u540D\u79F0~_\u54D4\u54E9\u54D4\u54E9_bilibili](https://www.bilibili.com/video/BV1jk4y1L7m3/?p=8&vd_source=50bf1de1542abaf8301b5b650d0f2292)

[hap\u67E5\u770B\u5668\u7684\u5B9E\u73B0\u539F\u7406\u4EE5\u53CA\u9006\u5411\u89E3\u6790\u5E94\u7528\u540D\u7684\u521D\u6B65\u65B9\u6848 - \u6587\u7AE0 OpenHarmony\u5F00\u53D1\u8005\u8BBA\u575B](https://forums.openharmony.cn/forum.php?mod=viewthread&tid=752)

\u5B89\u88C5js\u7684ffi-napi\u5E93\u5728kali\u4E0A\u6839\u672C\u88C5\u4E0D\u4E86\u4E00\u70B9\uFF01\uFF01\uFF01

nodejs\u52A8\u6001\u8C03\u8BD5\uFF1A`;export{n as _};
