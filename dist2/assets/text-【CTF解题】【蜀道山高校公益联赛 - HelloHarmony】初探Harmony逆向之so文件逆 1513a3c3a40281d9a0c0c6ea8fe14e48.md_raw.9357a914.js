const n=`# \u3010CTF\u89E3\u9898\u3011\u3010\u8700\u9053\u5C71\u9AD8\u6821\u516C\u76CA\u8054\u8D5B - HelloHarmony\u3011\u521D\u63A2Harmony\u9006\u5411\u4E4Bso\u6587\u4EF6\u9006\u5411\u5206\u6790\u7BC7 - \u5148\u77E5\u793E\u533A

Created: December 3, 2024 10:41 AM
URL: https://xz.aliyun.com/t/16295?time__1311=GuD%3DPROiiKGNDQtiQGkDu0KDkIPFucDpD
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 8

\u6700\u8FD1CTF\u9E3F\u8499\u9006\u5411\u9898\u51FA\u7684\u9891\u7387\u8FD8\u7B97\u9AD8\uFF0C\u672C\u7BC7\u6587\u7AE0\u4EE5\u8700\u9053\u5C71\u9AD8\u6821\u516C\u76CA\u8054\u8D5B\u4E0A\u7684HelloHarmony\u8FD9\u9898\u4E3A\u6838\u5FC3\u6765\u8BB2\u89E3\u4E00\u4E0BHarmony\u9006\u5411\u7684so\u6587\u4EF6\u9006\u5411\u5206\u6790

\u9644\u4EF6\u76F4\u63A5\u7ED9\u4E86\u4E2AHarmony\u7CFB\u7EDF\u7684\u5E94\u7528\u7A0B\u5E8F\u5B89\u88C5\u5305.hap\u6587\u4EF6

\u76F4\u63A5\u6539\u6210zip\u8FDB\u884C\u89E3\u538B\u62FF\u5230\u6E90\u7801\u6587\u4EF6\u53BB\u53CD\u7F16\u8BD1\u770B\u903B\u8F91

.abc\u6587\u4EF6\u5C31\u662FHarmony\u7684\u6E90\u7801wen'j

![https://xzfile.aliyuncs.com/media/upload/picture/20241118160641-0b74cac2-a584-1.png](https://xzfile.aliyuncs.com/media/upload/picture/20241118160641-0b74cac2-a584-1.png)

## \u7A0B\u5E8F\u53CD\u7F16\u8BD1

\u7F16\u8BD1\u5DE5\u5177\u8FD8\u662F\u7528\u7684jadx-gui-dev-all.jar

[https://github.com/ohos-decompiler/abc-decompiler/releases](https://github.com/ohos-decompiler/abc-decompiler/releases)

![https://xzfile.aliyuncs.com/media/upload/picture/20241118160610-f88243b8-a583-1.png](https://xzfile.aliyuncs.com/media/upload/picture/20241118160610-f88243b8-a583-1.png)

\u53BBIndex\u91CC\u9762\u770B\u770B

![https://xzfile.aliyuncs.com/media/upload/picture/20241118160957-803c2d50-a584-1.png](https://xzfile.aliyuncs.com/media/upload/picture/20241118160957-803c2d50-a584-1.png)

\u8FD9\u91CC\u5E94\u8BE5\u5C31\u662F\u4E3B\u903B\u8F91\u4E86\uFF0C\u53EF\u4EE5\u770B\u5F97\u51FA\u8FD9\u662F\u4E00\u4E2A\u767B\u5F55\u8F6F\u4EF6\uFF0C\u8D26\u53F7\u76F4\u63A5\u7ED9\u51FA\u6765\u4E86

LZSDS

## \u9759\u6001\u5206\u6790java\u5C42

\u90A3\u5C31\u662F\u8981\u9006\u5BC6\u7801\u4E86

\u6211\u4EEC\u770B\u4E00\u4E0B\u4ED6\u83B7\u53D6\u6211\u8F93\u5165\u7684\u5BC6\u7801\u505A\u4E86\u54EA\u4E9B\u64CD\u4F5C

(200 == testNapi.check(newobjrange.encrypt(_lexenv_0*1*.password)) ? 1 : 0

newobjrange\u5B9E\u9645\u4E0A\u662F

\u53EF\u4EE5\u5728\u53CD\u7F16\u8BD1\u51FA\u6765\u7684\u7C7B\u91CC\u9762\u770B\u89C1

encrypt\u91CC\u9762\u8C03\u7528\u7684\u662Ftransform

transform\u5219\u662F\u4E00\u4E2A\u9B54\u6539\u7684\u51EF\u6492\uFF0C\u5BF9\u5927\u5199\u5B57\u6BCD\u7684\u504F\u79FB\u662F\u4F20\u53C2\u8FDB\u6765\u76845\u800C\u5C0F\u5199\u5B57\u6BCD\u5219\u662F5+2

\u90A3\u4E48newobjrange.encrypt(_lexenv_0*1*.password)\u5C31\u5206\u6790\u5B8C\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u770B\u770BtestNapi.check()\u8FD9\u4E2A\u51FD\u6570\u662F\u505A\u4EC0\u4E48\u7684

\u9996\u5148testNapi = import { default as testNapi } from "@normalized:Y&&&libentry.so&";

\u90A3\u4E48\u8FD9\u4E2Acheck\u5B9E\u9645\u4E0A\u5C31\u662Flibentry.so\u91CC\u9762\u7684\u51FD\u6570

# \u5206\u6790SO\u6587\u4EF6

so\u6587\u4EF6\u5728\u54EA\u4E86\uFF1F\u8FD9\u91CC\u548C\u5B89\u5353\u4E00\u6837\uFF0C\u5B89\u88C5\u5305\u89E3\u538B\u51FA\u6765\u6709\u4E2Alibs\u76EE\u5F55\uFF0Cso\u6587\u4EF6\u5C31\u5728libs\u76EE\u5F55\u91CC\u9762

\u62D6\u5165ida\u8FDB\u884C\u5206\u6790

\u901A\u8FC7\u5B57\u7B26\u4E32\u5B9A\u4F4D\u5230check\u51FD\u6570

\u6DF1\u5165\u5206\u6790\u51FD\u6570

\u5BC6\u94A5\u6269\u5C55\u91CC\u9762\u6709\u4E24\u6B65\u64CD\u4F5C\uFF0C\u5148\u662F\u901A\u8FC7WTF::banana(this);\u521D\u59CB\u5316Sbox

\u518D\u901A\u8FC7WTF::bananana(this, a2, a3);\u628Akey\u7ECF\u8FC7\u6620\u5C04\u5173\u7CFB\u548C\u6216\u8FD0\u7B97\u7ED9Sbox

\u63A5\u4E0B\u6765\u5206\u6790Sbox\u548C\u8F93\u5165\u7684\u5BC6\u7801\u8FDB\u884C\u7684\u52A0\u5BC6\u64CD\u4F5C

WTF::heiheihei\u7684\u4F20\u53C2\u5219\u662FSbox\uFF0C\u8F93\u5165\uFF0C\u5B58\u50A8\u7ED3\u679C\u7684temp

\u52A0\u5BC6\u7ECF\u8FC78\u8F6E\u8FED\u4EE3\uFF0C\u5206\u6790\u4E00\u4E0B\u8FD98\u8F6E\u8FED\u4EE3\u505A\u4E86\u4EC0\u4E48

WTF::blablablablabla(Sbox, temp, i);\u51FD\u6570\u8FDB\u884C\u7684\u662F\u4E00\u4E2A\u5F02\u6216\u64CD\u4F5C\uFF0C\u6211\u521A\u5F00\u59CB\u5206\u6790\u7684\u65F6\u5019\u4EE5\u4E3A\u8FD9\u4E2A\u52A0\u5BC6\u7B97\u6CD5\u53EA\u5BF9\u524D8byte\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u770B\u5B8C\u540E\u9762\u51E0\u4E2A\u51FD\u6570\u6211\u5C31\u660E\u767D\u4E86\u3002

WTF::bla(Sbox, temp);\u8FD9\u91CC\u9762\u5219\u662F\u4E00\u4E2A\u6620\u5C04\u64CD\u4F5C

WTF::blablabla(Sbox, temp);\u51FD\u6570\u5219\u662F\u5BF9\u8F93\u5165\u8FDB\u884C\u4E86\u4E00\u4E2A\u5FAA\u73AF\u5DE6\u79FB\u7684\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u9762\u6CA1\u7528\u5230Sbox

\u5FAA\u73AF\u5DE6\u79FB1\u4F4D

\u5230\u8FD9\u91CC\u4F60\u5E94\u8BE5\u5C31\u660E\u767D\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u662F\u53EA\u5BF9\u524D8byte\u7684\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u4E86\uFF0C\u524D8byte\u7684\u6570\u636E\u7ECF\u8FC7\u5FAA\u73AF\u79FB\u4F4D\u4F1A\u4E0D\u65AD\u7684\u53D8\u6362\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u6BCF\u4E00\u4F4D\u90FD\u4F1A\u7ECF\u8FC7\u5F02\u6216\u5904\u7406

## \u9006\u7B97\u6CD5

\u90A3\u6211\u4EEC\u63A5\u4E0B\u6765\u7684\u89E3\u5BC6\u987A\u5E8F\u5219\u662F

\u5FAA\u73AF\u53F3\u79FB\u2014\u2014>\u9006Sbox\u2014\u2014>Xor

\u8FED\u4EE3\u6570\u4E5F\u8981\u4ECE7\u5F00\u59CB

Sbox\u600E\u4E48\u9006\u4E86\uFF1F

Input[i] = Sbox[Input[i]]

\u52A0\u5BC6\u91CC\u9762\u662F\u4EE5Input[i]\u4F5C\u4E3A\u7D22\u5F15\u5728Sbox\u91CC\u53BB\u53D6\u503C\u7684

\u4E5F\u5C31\u662F\u8BF4\u7D22\u5F15\u5C31\u662FInput[i]

\u5199\u4E2AFind\u53BB\u904D\u5386\u7D22\u5F15\u5373\u53EF

\u5B8C\u6574\u89E3\u5BC6

\`\`\`
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>

void Init_Key(uint8_t* Sbox) {
    int i = 0;
    for (i = 0; i < 256; ++i) {
        Sbox[i] = (167 * i + 173) % 256;
    }
}

void GK(uint8_t* Sbox, char* key, int len) {
    int i = 0;
    for (i = 0; i < 8; ++i) {
        uint32_t key_chunk = key[(i + 3) % len] |
            (key[(i + 2) % len] << 8) |
            (key[(i + 1) % len] << 16) |
            (key[i % len] << 24);
        *((uint32_t*)Sbox + i + 64) = key_chunk;
    }
}

void GetKeyStream(uint8_t* Sbox, char* key, int len) {
    Init_Key(Sbox);
    GK(Sbox, key, len);
}

// \u53F3\u79FB\u51FD\u6570
void Right(uint8_t* enc) {
    uint8_t temp[40] = { 0 };
    int i;
    for (i = 0; i < 39; i++) {
        temp[i + 1] = enc[i];
    }
    temp[0] = enc[39];
    memcpy(enc, temp, sizeof(temp));
}

int Find(uint8_t enc, uint8_t* Sbox) {
    int index = 0;
    for (index = 0; index < 256; index++) {
        if (enc == Sbox[index]) {
            return index;
        }
    }
    return -1;
}

void ReSbox(uint8_t* Sbox, uint8_t* enc) {
    int i;
    for (i = 0; i < 40; i++) {
        enc[i] = Find(enc[i], Sbox);
    }
}

void deXor(uint8_t* enc, uint8_t* Sbox, int i) {
    *((uint32_t*)enc) ^= *((uint32_t*)Sbox + i + 64);
    *((uint32_t*)enc + 1) ^= *((uint32_t*)Sbox + i + 64);
}

void Decrypt(uint8_t* Sbox, uint8_t* enc, int i) {
    Right(enc);
    ReSbox(Sbox, enc);
    deXor(enc, Sbox, i);
}

void CaesarDecrypt(uint8_t* text, int shift) {
    int i = 0;
    while (text[i] != '\\0') {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            text[i] = ((text[i] - 'A' - shift + 26) % 26) + 'A';
        }
        else if (text[i] >= 'a' && text[i] <= 'z') {

            text[i] = ((text[i] - 'a' - shift-2 + 26) % 26) + 'a';
        }

        i++;
    }
}

int main() {
    char key[] = "HelloSDS";
    uint8_t Sbox[256] = { 0 };
    uint8_t enc[40] = {
        0xF6, 0xB0, 0xA6, 0x36, 0x9A, 0xB3, 0x2B, 0xBF, 0x94, 0x54,
        0x15, 0x97, 0x93, 0x59, 0xBF, 0x50, 0x4D, 0xBF, 0x0A, 0x59,
        0x06, 0xD7, 0x97, 0x50, 0xD6, 0x59, 0x54, 0xD7, 0xCF, 0x06,
        0x5D, 0x20, 0x1D, 0x5A, 0x22, 0xEE, 0x99, 0x1F, 0xE1, 0x18
    };

    int i;
    int len = strlen(key);

    GetKeyStream(Sbox, key, len);

    for (i = 7; i >= 0; i--) {
        Decrypt(Sbox, enc, i);
    }
    CaesarDecrypt(enc, 5);

    puts((char*)enc);
    return 0;
}

//LZSDS{y0u_4r3_4_m4573r_0f_cryp706r4phy}

\`\`\`

\u53BB\u7528\u7A0B\u5E8F\u9A8C\u8BC1\u4E00\u4E0B

\u4F9D\u65E7\u662F\u4F7F\u7528DevEco Studio\u53BB\u6A21\u62DFHarmony

\u628A.hap\u6587\u4EF6\u76F4\u63A5\u62D6\u8FDB\u53BB\u5373\u53EF\u5B89\u88C5

\u9A8C\u8BC1\u6210\u529F\uFF01

\u611F\u8C22\u5E08\u5085\u4EEC\u7684\u89C2\u770B\uFF01

HelloHarmony.zip (1.028 MB) [\u4E0B\u8F7D\u9644\u4EF6](https://xzfile.aliyuncs.com/upload/affix/20241118171606-bdf9e7fa-a58d-1.zip)`;export{n as _};
