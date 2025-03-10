const e=`# \u3010\u53EF\u7528\u5728\u7206\u7834\u3001Proxy\u52A0\u89E3\u5BC6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49JS\u4EE3\u7801\u7684\u81EA\u5B9A\u4E49\u7B97\u6CD5\u7F16\u5199\u3011whwlsfb/BurpCrypto: BurpCrypto is a collection of burpsuite encryption plug-ins, support AES/RSA/DES/ExecJs(execute JS encryption code in burpsuite). \u652F\u6301\u591A\u79CD\u52A0\u5BC6\u7B97\u6CD5\u6216\u76F4\u63A5\u6267\u884CJS\u4EE3\u7801\u7684\u7528\u4E8E\u7206\u7834\u524D\u7AEF\u52A0\u5BC6\u7684BurpSuite\u63D2\u4EF6

Created: November 6, 2024 9:19 AM
URL: https://github.com/whwlsfb/BurpCrypto
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): SRC_Bounty_\u8D4F\u91D1

# BurpCrypto

[https://camo.githubusercontent.com/ef4312c45e2834c0a626942e28e2e19e13fac34012fd16ed6e44c3d60fadb389/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f72656c656173652f7768776c7366622f4275727043727970746f2e7376673f696e636c7564655f70726572656c6561736573267374796c653d737175617265](https://camo.githubusercontent.com/ef4312c45e2834c0a626942e28e2e19e13fac34012fd16ed6e44c3d60fadb389/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f762f72656c656173652f7768776c7366622f4275727043727970746f2e7376673f696e636c7564655f70726572656c6561736573267374796c653d737175617265)

[https://camo.githubusercontent.com/971da6c840d17e29b5e42748d53a53b8fcdc4315ff21ec02a14ebbec264c9a91/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f7768776c7366622f4275727043727970746f2f746f74616c3f6c6162656c3d52656c65617365253230446f776e6c6f6164](https://camo.githubusercontent.com/971da6c840d17e29b5e42748d53a53b8fcdc4315ff21ec02a14ebbec264c9a91/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f646f776e6c6f6164732f7768776c7366622f4275727043727970746f2f746f74616c3f6c6162656c3d52656c65617365253230446f776e6c6f6164)

Burpcrypto is a collection of burpsuite encryption plug-ins, supporting AES/RSA/DES/ExecJs(execute JS encryption code in burpsuite).

English | [\u7B80\u4F53\u4E2D\u6587](https://github.com/whwlsfb/BurpCrypto/blob/master/README-zh_CN.md)

# Build

\`$ mvn package\`

# Usage

- Download the precompiled jar package from [Releases](https://github.com/whwlsfb/BurpCrypto/releases).
- Add this jar package to your burpsuite's Extensions.
- Switch to BurpCrypto tab, select you need Cipher tab.
- Set key or some value.
- press "Add processor", and give a name for this processor.
- Switch to Intruder->Payloads->Payload Processing.
- press "Add", select "Invoke Burp extension", and select processor you just created.
- press "Start attack", have fun!

## Key Example

- Aes Key(UTF8String): abcdefgabcdefg12
- Aes IV(UTF8String): abcdefgabcdefg12
- Rsa X509 Key: MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCC0hrRIjb3noDWNtbDpANbjt5Iwu2NFeDwU16Ec87ToqeoIm2KI+cOs81JP9aTDk/jkAlU97mN8wZkEMDr5utAZtMVht7GLX33Wx9XjqxUsDfsGkqNL8dXJklWDu9Zh80Ui2Ug+340d5dZtKtd+nv09QZqGjdnSp9PTfFDBY133QIDAQAB
- Rsa Modulus: ca27d90f03753cbbc9958011baf701ac99305b63f68e26ab5617593e01d2fb519127fb87bafbe6e0472ec3a038575fa292adadbc79390a955a61b29431f78f4734773048a45dcf100e23cabf2df11a55aa90cd6b024a44eed1096c3b9e1408d46aae54d7291b82fe4b7867c5eaa45e9cc0ba7f7ae3e5593337c7dcbace2d02ed2fbbff26c6df8a32bb26be80603fcd94c6c8dbd67878d77b37fedcf808e3d8f469aaa7c65d033d547a5c8ea9bdd5c89b836c65852f355a5efd9c7137a186a62b5eb0e052c8be3096d3b51133f8a8c108292a296c99d37bad42bcc3f6c39fa5e583582942b4fc4e7ff4b6779fff5bbaddc65b19c7c57d8cdb39b1a994e08d4a2f50793d8f707d069c380baf0f64bfdce3b35d0b5c5c59348a35a082012aaf4991080abf518b55787969ff24186cb95f7e7218c904cf1dcaeb5bed723e305b83f2e85d6f116d2c7400f9e49d904db8a5a3a0701cdb579fbf3128511acd0f789ece1233ed926d705b3b0dfa34bf33f5ae4bdc611a602aa03aaae13400bc7ad3813ea4474dc62de3d0cb1f5aac277d895a75d38f9b920938fa6b1de35bd6132798c122403c685bdb6e5e24bbd70cfb3e968da0b8affd398e539e7c1e7add09891780bcbd278f3900499ae09cee0dc62e3f92e70001bab6d46261d2801a37f80d84d0e39fce6eaedf106a61b5961960641b9db0e4e23c770e6370ac5d61c6c9eb0f07
- Rsa Exponent: 010001
- DES Key: 12345678
- DESede Key: 123456781234567812345678

## Screenshots

AES Example:

![https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/aes.gif](https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/aes.gif)

ExecJs Example (Here is the modified MD5 algorithm):

![https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/execjs.gif](https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/execjs.gif)

Quick Crypto:

![https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/quick_crypto.gif](https://github.com/whwlsfb/BurpCrypto/raw/master/screenshot/quick_crypto.gif)

# 404Starlink

![https://github.com/knownsec/404StarLink-Project/raw/master/logo.png](https://github.com/knownsec/404StarLink-Project/raw/master/logo.png)

BurpCrypto has joined [404Starlink](https://github.com/knownsec/404StarLink).`;export{e as _};
