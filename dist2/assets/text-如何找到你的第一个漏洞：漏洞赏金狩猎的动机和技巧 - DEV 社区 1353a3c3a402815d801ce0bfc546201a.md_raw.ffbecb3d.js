const n=`# \u5982\u4F55\u627E\u5230\u4F60\u7684\u7B2C\u4E00\u4E2A\u6F0F\u6D1E\uFF1A\u6F0F\u6D1E\u8D4F\u91D1\u72E9\u730E\u7684\u52A8\u673A\u548C\u6280\u5DE7 - DEV \u793E\u533A

Created: November 5, 2024 6:53 PM
URL: https://dev.to/iamahacker/how-to-find-your-first-bug-motivation-and-tips-for-bug-bounty-hunting-1m1g
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): SRC_Bounty_\u8D4F\u91D1

### \u5982\u4F55\u627E\u5230\u4F60\u7684\u7B2C\u4E00\u4E2A\u6F0F\u6D1E\uFF1A\u6F0F\u6D1E\u8D4F\u91D1\u72E9\u730E\u7684\u52A8\u673A\u548C\u6280\u5DE7

\u6F0F\u6D1E**\u8D4F\u91D1**\u641C\u5BFB**\u53EF\u80FD\u662F**\u4E00\u79CD**\u5145\u6EE1**\u6311\u6218\u548C**\u56DE\u62A5\u7684**\u7ECF\u5386**\uFF0C\u4F46\u627E\u5230\u7B2C\u4E00\u4E2A**\u6F0F\u6D1E\u4E5F\u53EF\u80FD**\u5F88**\u56F0\u96BE\u3002\u5982\u679C\u60A8\u662F\u6F0F\u6D1E**\u8D4F\u91D1\u641C\u5BFB**\u7684\u65B0\u624B\uFF0C**\u8BF7**\u4E0D\u8981**\u62C5\u5FC3**- \u53EA\u8981\u6709**\u6BC5\u529B\u3001**\u5949\u732E**\u7CBE\u795E**\u548C**\u6B63\u786E**\u7684**\u7B56\u7565**\uFF0C\u60A8\u5C31\u53EF\u4EE5**\u589E\u52A0\u6210\u529F**\u7684\u673A\u4F1A**\u3002**\u4EE5\u4E0B\u662F\u4E00\u4E9B**\u6709\u7528\u7684**\u63D0\u793A\uFF0C\u53EF\u6307\u5BFC**\u60A8**\u8E0F\u4E0A\u6F0F\u6D1E\u8D4F\u91D1\u4E4B\u65C5\u3002

## 1.\u7814\u7A76\u5E94\u7528\u7A0B\u5E8F\uFF1A

\u5728\u6D4B\u8BD5\u9519\u8BEF\u4E4B\u524D\uFF0C\u8BF7\u82B1\u4E00\u4E9B\u65F6\u95F4\u6CE8\u518C\u8BE5\u5E94\u7528\u5E76\u63A2\u7D22\u5176\u529F\u80FD\u3002\u50CF\u666E\u901A\u7528\u6237\u4E00\u6837\u4F7F\u7528\u8BE5\u5E94\u7528\uFF0C\u5E76\u95EE\u81EA\u5DF1\u4EE5\u4E0B\u95EE\u9898\uFF1A

- \u5982\u679C\u666E\u901A\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u6B64\u7BA1\u7406\u90E8\u5206\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\u60C5\u51B5\uFF1F
- \u975E\u7BA1\u7406\u5458\u7528\u6237\u53EF\u4EE5\u67E5\u770B\u8FD9\u4E2A\u79D8\u5BC6\u6587\u6863\u5417\uFF1F
- \u7528\u6237\u662F\u5426\u53EF\u4EE5\u5728 PHP \u5E94\u7528\u7A0B\u5E8F\u4E2D\u4E0A\u4F20\u975E\u57FA\u672C\u6587\u6863\u7C7B\u578B\uFF0C\u4F8B\u5982 PHP \u6587\u4EF6\uFF1F
- \u662F\u5426\u53EF\u4EE5\u5C06 HTML \u6807\u7B7E\u6CE8\u5165\u5230\u5BFC\u51FA\u7684 PDF \u4E2D\uFF1F\u5982\u679C\u53EF\u4EE5\uFF0C\u662F\u5426\u53EF\u4EE5\u4F7F\u7528\u6807\u7B7E\u8BFB\u53D6\u5185\u90E8\u6587\u4EF6\uFF1F
- \u521B\u5EFA\u65B0\u7684 webhook \u65F6\u662F\u5426\u53EF\u4EE5\u8C03\u7528 localhost\uFF0C\u751A\u81F3\u662F AWS \u5143\u6570\u636E\u5730\u5740\uFF1F
- \u5E94\u7528\u7A0B\u5E8F\u662F\u5426\u9700\u8981\u65E7\u5BC6\u7801\u624D\u80FD\u66F4\u6539\u5BC6\u7801\u6216\u7535\u5B50\u90AE\u4EF6\uFF1F \u5982\u679C\u4E0D\u9700\u8981\uFF0C\u90A3\u4E48\u662F\u5426\u6709\u53EF\u80FD\u5728\u67D0\u5904\u627E\u5230 XSS \u6765\u5B9E\u73B0\u5B8C\u6574\u7684 ATO\uFF08\u5E10\u6237\u63A5\u7BA1\uFF09\uFF1F
- \u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528\u4EC0\u4E48\u6837\u7684\u5806\u6808\u6784\u5EFA\uFF0C\u6709\u54EA\u4E9B\u7248\u672C\uFF0C\u662F\u5426\u5B58\u5728\u5E26\u6709 PoC \u7684\u6F0F\u6D1E /CVE\uFF1F
- URL \u53C2\u6570\u6216 POST \u6B63\u6587\u4E2D\u662F\u5426\u6709\u4EFB\u4F55\u6587\u4EF6\u8DEF\u5F84\u53EF\u4EE5\u6D4B\u8BD5 LFI\uFF08\u672C\u5730\u6587\u4EF6\u5305\u542B\uFF09\u6F0F\u6D1E\uFF1F
- \u662F\u5426\u6709\u4EFB\u4F55\u9AD8\u7EA7\u8BA2\u9605\u8BA1\u5212\u53EF\u4EE5\u5E26\u6765\u597D\u5904\uFF1F\u666E\u901A\u7528\u6237\u65E0\u9700\u8BA2\u9605\u5373\u53EF\u83B7\u5F97\u8FD9\u4E9B\u597D\u5904\u5417\uFF1F

\u63D0\u51FA\u8FD9\u4E9B\u95EE\u9898\u53EF\u4EE5\u5E2E\u52A9\u60A8\u8BC6\u522B\u6F5C\u5728\u7684\u6F0F\u6D1E\u5E76\u8BA9\u60A8\u66F4\u597D\u5730\u4E86\u89E3\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u6027\u3002

## 2.\u4FDD\u6301\u4E13\u6CE8\uFF1A

\u5728\u8003\u8BD5\u671F\u95F4\uFF0C\u5C3D\u91CF\u4FDD\u6301\u4E13\u6CE8\uFF0C\u907F\u514D\u5206\u5FC3\u3002\u5728\u8003\u8BD5\u671F\u95F4\u4F11\u606F\u4E00\u4E0B\u4E5F\u5F88\u91CD\u8981\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4FDD\u6301\u7CBE\u795E\u9971\u6EE1\u548C\u4E13\u6CE8\u3002\u4F8B\u5982\uFF0C\u4E00\u5929 2 \u5C0F\u65F6\uFF0C\u53E6\u4E00\u5929 2 \u5C0F\u65F6\uFF0C\u6BD4\u4E00\u5929 4 \u5C0F\u65F6\u8981\u597D\uFF0C\u56E0\u4E3A\u4F60\u7684\u5927\u8111\u9700\u8981\u65F6\u95F4\u6765\u5206\u6790\u4FE1\u606F\u3002

## 3. \u5BFB\u627E\u553E\u624B\u53EF\u5F97\u7684\u6210\u679C\uFF1A

\u4ECE\u57FA\u7840\u5F00\u59CB\uFF0C\u4F8B\u5982\u67E5\u627E\u65AD\u5F00\u7684\u94FE\u63A5\u3001SQL \u6CE8\u5165\u6216 XSS \u6F0F\u6D1E\u3002\u8FD9\u4E9B\u7C7B\u578B\u7684\u6F0F\u6D1E\u5F88\u5E38\u89C1\u4E14\u5BB9\u6613\u627E\u5230\uFF0C\u56E0\u6B64\u5B83\u4EEC\u53EF\u4EE5\u4F5C\u4E3A\u5165\u95E8\u7684\u597D\u65B9\u6CD5\u3002

## 4.\u4F7F\u7528\u81EA\u52A8\u5316\u5DE5\u5177\uFF1A

\u867D\u7136\u624B\u52A8\u6D4B\u8BD5\u5E94\u7528\u7A0B\u5E8F\u5F88\u91CD\u8981\uFF0C\u4F46\u81EA\u52A8\u5316\u5DE5\u5177\u53EF\u4EE5\u5E2E\u52A9\u60A8\u8986\u76D6\u66F4\u591A\u9886\u57DF\u5E76\u5FEB\u901F\u8BC6\u522B\u6F5C\u5728\u6F0F\u6D1E\u3002\u4F46\u662F\uFF0C\u5FC5\u987B\u6CE8\u610F\u7684\u662F\uFF0C\u81EA\u52A8\u5316\u5DE5\u5177\u4E0D\u80FD\u66FF\u4EE3\u624B\u52A8\u6D4B\u8BD5\u3002

## 5.\u4E13\u6CE8\u4E8E\u4E00\u4E2A\u9886\u57DF\uFF1A

\u4E0D\u8981\u5C1D\u8BD5\u4E00\u6B21\u6027\u6D4B\u8BD5\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u800C\u8981\u4E13\u6CE8\u4E8E\u67D0\u4E2A\u7279\u5B9A\u533A\u57DF\u6216\u529F\u80FD\u3002\u8FD9\u79CD\u65B9\u6CD5\u5C06\u5E2E\u52A9\u60A8\u66F4\u6DF1\u5165\u5730\u4E86\u89E3\u8BE5\u533A\u57DF\uFF0C\u5E76\u4E14\u60A8\u53EF\u80FD\u4F1A\u53D1\u73B0\u5426\u5219\u65E0\u6CD5\u53D1\u73B0\u7684\u6F0F\u6D1E\u3002

## 6.\u5411\u4ED6\u4EBA\u5B66\u4E60\uFF1A

\u52A0\u5165\u5728\u7EBF\u793E\u533A\u3001\u53C2\u52A0\u4F1A\u8BAE\u5E76\u9605\u8BFB\u5176\u4ED6\u7814\u7A76\u4EBA\u5458\u7684\u6F0F\u6D1E\u8D4F\u91D1\u62A5\u544A\u3002\u8FD9\u6837\uFF0C\u60A8\u5C31\u53EF\u4EE5\u4ECE\u4ED6\u4EEC\u7684\u7ECF\u9A8C\u3001\u6280\u672F\u548C\u89C1\u89E3\u4E2D\u5B66\u4E60\u3002

## 6.\u8BB0\u5F55\u4E00\u5207\uFF1A

\u786E\u4FDD\u8BB0\u5F55\u6D4B\u8BD5\u671F\u95F4\u6240\u505A\u7684\u4E00\u5207\uFF0C\u5305\u62EC\u5C4F\u5E55\u622A\u56FE\u3001\u6CE8\u91CA\u548C\u65E5\u5FD7\u3002\u8FD9\u4E9B\u8BB0\u5F55\u5728\u60A8\u63D0\u4EA4\u9519\u8BEF\u62A5\u544A\u65F6\u975E\u5E38\u6709\u7528\uFF0C\u8FD8\u53EF\u4EE5\u5E2E\u52A9\u60A8\u8DDF\u8E2A\u8FDB\u5EA6\u5E76\u786E\u5B9A\u9700\u8981\u6539\u8FDB\u7684\u5730\u65B9\u3002

\u8BF7\u8BB0\u4F4F\uFF0C\u6F0F\u6D1E\u8D4F\u91D1\u730E\u4EBA\u662F\u4E00\u6BB5\u65C5\u7A0B\uFF0C\u800C\u4E0D\u662F\u76EE\u7684\u5730\u3002\u9700\u8981\u65F6\u95F4\u3001\u8010\u5FC3\u548C\u5949\u732E\u7CBE\u795E\u6765\u57F9\u517B\u6210\u529F\u6240\u9700\u7684\u6280\u80FD\u548C\u77E5\u8BC6\u3002\u901A\u8FC7\u9075\u5FAA\u8FD9\u4E9B\u63D0\u793A\u5E76\u7EE7\u7EED\u5B66\u4E60\u548C\u6539\u8FDB\uFF0C\u60A8\u53EF\u4EE5\u589E\u52A0\u627E\u5230\u7B2C\u4E00\u4E2A\u6F0F\u6D1E\u5E76\u6210\u4E3A\u6210\u529F\u7684\u6F0F\u6D1E\u8D4F\u91D1\u730E\u4EBA\u7684\u673A\u4F1A\u3002\u795D\u4F60\u597D\u8FD0\uFF01`;export{n as _};
