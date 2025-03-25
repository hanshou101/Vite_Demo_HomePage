const n=`# \u3010\u9759\u6001\u5206\u6790-\u5F00\u6E90\u9879\u76EE\u3011arkanalyzer: \u65B9\u821F\u5206\u6790\u5668\uFF1A\u9762\u5411ArkTS\u8BED\u8A00\u7684\u9759\u6001\u7A0B\u5E8F\u5206\u6790\u6846\u67B6

Created: November 22, 2024 10:15 PM
URL: https://gitee.com/openharmony-sig/arkanalyzer
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 8.8

# sig_programanalysis

English | [\u7B80\u4F53\u4E2D\u6587](https://gitee.com/openharmony-sig/arkanalyzer/blob/master/README.md)

## SIG Group Work Objectives and Scope

### Work Objectives

- 
    
    Sig_programanalysis aims to carry out program analysis technology exploration, key technology identification, and competitiveness building for OpenHarmony systems and apps, striving to become the gathering place for OpenHarmony system and app analysis capabilities and an incubation place for related engineering tools.
    
- 
    
    Sig_programanalysis will build a basic program analysis framework for OpenHarmony apps, and subsequently based on it to provide application developers with out-of-the-box defect scanning and analysis tools, making it possible to automatically vet code for scenarios such as IDE, CI/CD pipelines, etc.
    

### Work Scope

- 
    
    Responsible for building and maintaining the key technology map of program analysis, as well as the decomposition of functional modules in the field, interface definition, and maintenance management.
    
- 
    
    Responsible for the architecture design, open source development, and project maintenance of projects related to program analysis.
    

### Projects

Sig_programanalysis currently incubates the following projects. Everyone is welcome to participate (you can apply to participate in the co-construction of existing projects, or you can apply to create a new program analysis project).

- 
    
    ArkAnalyzer: The Static Analysis Framework for ArkTS-based OpenHarmony Apps.
    
- 
    
    ArkCheck: Checking OpenHarmony Apps for Potential Code-level Defects
    

## SIG Members

### Leader

- [lilicoding](https://gitee.com/lilicoding)

### Committers

- [kubigao](https://gitee.com/kubigao)
- [yifei-xue](https://gitee.com/yifei_xue)
- [kubrick-hjh](https://gitee.com/kubrick-hjh)
- [speed9](https://gitee.com/speeds)
- [bbsun](https://gitee.com/bbsun)
- [chn](https://gitee.com/chn)
- [Elouan](https://gitee.com/Elouan)
- [Rnine](https://gitee.com/Rnine)
- [workspace_cb](https://gitee.com/workspace_cb)
- [longyuC](https://gitee.com/longyuC)
- [xyji95](https://gitee.com/xyji95)
- [xulingyun-red](https://gitee.com/xulingyun-red)

### Meetings

- Meeting Time: Bi-weekly meeting, Thursday 19:30 Beijing time
- Meeting Application\uFF1A[Link](https://gitee.com/link?target=https%3A%2F%2Fshimo.im%2Fforms%2FB1Awd60W7bU51g3m%2Ffill)
- Meeting Link: Welink or Others
- Meeting Notification: [Subscribe to](https://gitee.com/link?target=https%3A%2F%2Flists.openatom.io%2Fpostorius%2Flists%2Fdev.openharmony.io) mailing list [dev@openharmony.io](https://gitee.com/link?target=mailto%3Adev%40openharmony.io) for the meeting link
- Meeting Summary: [Archive link address](https://gitee.com/openharmony-sig/sig-content)

### Contact

- Mailing list: [dev@openharmony.io](https://gitee.com/link?target=https%3A%2F%2Flists.openatom.io%2Fpostorius%2Flists%2Fdev%40openharmony.io%2F)

# ArkAnalyzer: Static Program Analysis Framework for the ArkTS Language

## Develope environment setup

1. [Download Visual Studio Code](https://gitee.com/link?target=https%3A%2F%2Fcode.visualstudio.com%2Fdownload) or other IDEA;
2. [Download Node.js](https://gitee.com/link?target=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2Fcurrent) and install it. Node.js is a runtime environment for JavaScript, which comes with its own package manager, npm.
3. Install Typescript via npm:

\`\`\`
npm install -g typescript

\`\`\`

1. Install dependency libraries

\`\`\`
cd arkanalyzer
npm install

\`\`\`

## Commit codes

Follow the code repository standards of Openharmony-Sig, refer to the [link](https://gitee.com/openharmony-sig/arkanalyzer/blob/master/docs/HowToCreatePR.md#english)

## Debug

Modify the \`args\` parameter array in the debug configuration file \`.vscode/launch.json\` to the path of the test file you want to debug, and then start the debugging process.

## Add test cases

Place all new test codes in the \`tests\` directory. Corresponding sample code and other resource files should be placed in the \`\`tests\\resources\` directory, and create different folders for each testing scenario.`;export{n as _};
