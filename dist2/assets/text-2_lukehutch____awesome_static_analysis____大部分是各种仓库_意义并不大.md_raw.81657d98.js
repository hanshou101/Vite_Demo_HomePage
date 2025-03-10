const t=`lukehutch/awesome-static-analysis: A curated list of linters, code quality checkers, and other static analysis tools for various programming languages    https://github.com/lukehutch/awesome-static-analysis\r
\r
![\u5FBD\u6807](awesome.png)\r
\r
> \u9759\u6001\u7A0B\u5E8F\u5206\u6790\u662F\u5BF9\u8BA1\u7B97\u673A\u8F6F\u4EF6\u8FDB\u884C\u7684\u5206\u6790\uFF0C\u4F46\u5E76\u4E0D\u5B9E\u9645\u6267\u884C\u7A0B\u5E8F \u2014 [\u7EF4\u57FA\u767E\u79D1](https://en.wikipedia.org/wiki/Static_program_analysis)\r
\r
\u8FD9\u662F\u9759\u6001\u5206\u6790\u5DE5\u5177\u548C\u4EE3\u7801\u8D28\u91CF\u68C0\u67E5\u5668\u7684\u96C6\u5408\u3002\u975E\u5E38\u6B22\u8FCE Pull \u8BF7\u6C42\uFF01  \r
**\u6CE8\u610F\uFF1A:copyright: \u4EE3\u8868\u4E13\u6709\u8F6F\u4EF6\u3002\u6240\u6709\u5176\u4ED6\u5DE5\u5177\u90FD\u662F\u5F00\u6E90\u7684\u3002**  \r
\u53E6\u8BF7\u67E5\u770B\u59CA\u59B9\u9879\u76EE [awesome-dynamic-analysis](https://github.com/mre/awesome-dynamic-analysis)\u3002\r
\r
\uFF03 \u76EE\u5F55\r
\r
- [\u7F16\u7A0B\u8BED\u8A00](#programming-languages)\r
- [\u591A\u79CD\u8BED\u8A00](#multiple-languages)\r
- [\u5176\u4ED6](#\u5176\u4ED6)\r
  - [\u6784\u5EFA\u5DE5\u5177](#build-tools)\r
  - [\u4E8C\u8FDB\u5236\u6587\u4EF6](#binaries)\r
  - [\u5BB9\u5668](#containers)\r
  - [\u914D\u7F6E\u6587\u4EF6](#config-files)\r
  - [\u914D\u7F6E\u7BA1\u7406](#configuration-management)\r
  - [CSS](#css)\r
  - [\u5C0F\u9EC4\u74DC](#\u5C0F\u9EC4\u74DC)\r
  - [HTML](#html)\r
  - [IDE \u63D2\u4EF6](#ide-plugins)\r
  - [LaTeX](#latex)\r
  - [Makefile](#makefiles)\r
  - [Markdown](#markdown)\r
  - [\u79FB\u52A8](#mobile)\r
  - [\u8F6F\u4EF6\u5305](#\u8F6F\u4EF6\u5305)\r
  - [\u652F\u6301\u5DE5\u5177](#supporting-tools)\r
  - [\u6A21\u677F\u8BED\u8A00](#template-languages)\r
  - [\u7FFB\u8BD1](#translation)\r
  - [Web \u670D\u52A1](#web-services)\r
  - [\u5199\u4F5C](#\u5199\u4F5C)\r
- [\u66F4\u591A\u6536\u85CF](#more-collections)\r
\r
\r
# \u7F16\u7A0B\u8BED\u8A00\r
\r
\uFF03\uFF03 \u6709\r
\r
* [Codepeer](http://www.adacore.com/codepeer) - \u68C0\u6D4B\u8FD0\u884C\u65F6\u548C\u903B\u8F91\u9519\u8BEF\r
* [Polyspace for Ada](https://www.mathworks.com/products/polyspace-ada.html) :copyright: - \u63D0\u4F9B\u4EE3\u7801\u9A8C\u8BC1\uFF0C\u8BC1\u660E\u6E90\u4EE3\u7801\u4E2D\u4E0D\u5B58\u5728\u6EA2\u51FA\u3001\u9664\u4EE5\u96F6\u3001\u8D8A\u754C\u6570\u7EC4\u8BBF\u95EE\u548C\u67D0\u4E9B\u5176\u4ED6\u8FD0\u884C\u65F6\u9519\u8BEF\u3002\r
* [SPARK](http://www.spark-2014.org/about) :copyright: - Ada \u7684\u9759\u6001\u5206\u6790\u548C\u5F62\u5F0F\u9A8C\u8BC1\u5DE5\u5177\u96C6\r
* [\u4E86\u89E3]\uFF08https://scitools.com/ada-programming-essential/\uFF09\uFF1A\u7248\u6743\uFF1A - \u4E3A Ada \u548C VHDL \u63D0\u4F9B\u4EE3\u7801\u5206\u6790\u3001\u6807\u51C6\u6D4B\u8BD5\u3001\u6307\u6807\u3001\u56FE\u5F62\u3001\u4F9D\u8D56\u6027\u5206\u6790\u7B49\u7684 IDE\u3002\r
\r
awk \u7684\r
\r
* [gawk --lint](https://www.gnu.org/software/gawk/manual/html_node/Options.html) - \u8B66\u544A\u90A3\u4E9B\u53EF\u7591\u6216\u65E0\u6CD5\u79FB\u690D\u5230\u5176\u4ED6 awk \u5B9E\u73B0\u7684\u6784\u9020\u3002\r
\r
C/C++\r
\r
* [CBMC](http://www.cprover.org/cbmc/) - C \u7A0B\u5E8F\u7684\u6709\u754C\u6A21\u578B\u68C0\u67E5\u5668\u3001\u7528\u6237\u5B9A\u4E49\u65AD\u8A00\u3001\u6807\u51C6\u65AD\u8A00\u3001\u591A\u79CD\u8986\u76D6\u7387\u6307\u6807\u5206\u6790\r
* [clang-tidy](http://clang.llvm.org/extra/clang-tidy/) - clang \u9759\u6001\u5206\u6790\u5668\r
* [CMetrics](https://github.com/MetricsGrimoire/CMetrics) - \u6D4B\u91CF C \u6587\u4EF6\u7684\u5927\u5C0F\u548C\u590D\u6742\u6027\r
* [GrammaTech \u7684 CodeSonar](https://www.grammatech.com/products/codesonar) :copyright: - \u9AD8\u7EA7\u3001\u5B8C\u6574\u7A0B\u5E8F\u3001\u6DF1\u5EA6\u8DEF\u5F84\u3001C \u548C C++ \u9759\u6001\u5206\u6790\uFF0C\u5E26\u6709\u6613\u4E8E\u7406\u89E3\u7684\u89E3\u91CA\u4EE5\u53CA\u4EE3\u7801\u548C\u8DEF\u5F84\u53EF\u89C6\u5316\u3002\r
* [Corrode](https://github.com/jameysharp/corrode) - \u4ECE C \u5230 Rust \u7684\u534A\u81EA\u52A8\u7FFB\u8BD1\u3002\u53EF\u4EE5\u901A\u8FC7\u663E\u793A Rust \u7F16\u8BD1\u5668\u8B66\u544A\u548C\u9519\u8BEF\u6765\u63ED\u793A\u539F\u59CB\u5B9E\u73B0\u4E2D\u7684\u9519\u8BEF\u3002\r
* [cppcheck](https://github.com/danmar/cppcheck) - C/C++ \u4EE3\u7801\u7684\u9759\u6001\u5206\u6790\r
* [CppDepend](https://www.cppdepend.com) :copyright: - \u6D4B\u91CF\u3001\u67E5\u8BE2\u548C\u53EF\u89C6\u5316\u60A8\u7684\u4EE3\u7801\u5E76\u907F\u514D\u610F\u5916\u95EE\u9898\u3001\u6280\u672F\u503A\u52A1\u548C\u590D\u6742\u6027\u3002\r
* [cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint) - \u9075\u5FAA Google \u98CE\u683C\u6307\u5357\u7684\u81EA\u52A8 C++ \u68C0\u67E5\u5668\r
* [cqmetrics](https://github.com/dspinellis/cqmetrics) - C \u4EE3\u7801\u7684\u8D28\u91CF\u6307\u6807\r
* [CScout](https://www.spinellis.gr/cscout/) - C \u548C C \u9884\u5904\u7406\u5668\u4EE3\u7801\u7684\u590D\u6742\u6027\u548C\u8D28\u91CF\u6307\u6807\r
* [flawfinder](http://www.dwheeler.com/flawfinder/) - \u67E5\u627E\u53EF\u80FD\u7684\u5B89\u5168\u6F0F\u6D1E\r
* [flint++](http://l2program.co.uk/category/flint) - \u8DE8\u5E73\u53F0\u3001\u96F6\u4F9D\u8D56\u7684 flint \u7AEF\u53E3\uFF0Cflint \u662F Facebook \u5F00\u53D1\u5E76\u4F7F\u7528\u7684 C++ lint \u7A0B\u5E8F\u3002\r
* [Frama-C](http://frama-c.com/) - \u4E00\u4E2A\u5B8C\u5584\u4E14\u53EF\u6269\u5C55\u7684 C \u4EE3\u7801\u9759\u6001\u5206\u6790\u5668\r
* [IKOS](https://github.com/nasa-sw-vnv/ikos) - \u57FA\u4E8E LLVM \u7684 C/C++ \u4EE3\u7801\u58F0\u97F3\u9759\u6001\u5206\u6790\u5668\r
* [oclint](http://oclint.org/) \u2013 C/C++\u4EE3\u7801\u7684\u9759\u6001\u5206\u6790\r
* [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: - \u8BC6\u522B C \u548C C++ \u5D4C\u5165\u5F0F\u8F6F\u4EF6\u4E2D\u7684\u8FD0\u884C\u65F6\u9519\u8BEF\u3001\u5E76\u53D1\u95EE\u9898\u3001\u5B89\u5168\u6F0F\u6D1E\u548C\u5176\u4ED6\u7F3A\u9677\u3002\r
* [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: - \u63D0\u4F9B\u4EE3\u7801\u9A8C\u8BC1\uFF0C\u8BC1\u660E C \u548C C++ \u6E90\u4EE3\u7801\u4E2D\u4E0D\u5B58\u5728\u6EA2\u51FA\u3001\u9664\u4EE5\u96F6\u3001\u8D8A\u754C\u6570\u7EC4\u8BBF\u95EE\u548C\u67D0\u4E9B\u5176\u4ED6\u8FD0\u884C\u65F6\u9519\u8BEF\u3002\r
* [scan-build](https://clang-analyzer.llvm.org/scan-build.html) - \u5728\u7F16\u8BD1\u65F6\u4F7F\u7528 LLVM \u5206\u6790 C/C++ \u4EE3\u7801\r
* [splint](https://github.com/ravenexp/splint) - \u6CE8\u91CA\u8F85\u52A9\u9759\u6001\u7A0B\u5E8F\u68C0\u67E5\u5668\r
* [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) - Vera++ \u662F\u4E00\u4E2A\u7528\u4E8E\u9A8C\u8BC1\u3001\u5206\u6790\u548C\u8F6C\u6362 C++ \u6E90\u4EE3\u7801\u7684\u53EF\u7F16\u7A0B\u5DE5\u5177\u3002\r
\r
## \u8BA1\u7B97\u673A#\r
\r
* [.NET \u5206\u6790\u5668](https://github.com/DotNetAnalyzers) - \u4F7F\u7528 .NET \u7F16\u8BD1\u5668\u5E73\u53F0\u5F00\u53D1\u5206\u6790\u5668\uFF08\u8BCA\u65AD\u548C\u4EE3\u7801\u4FEE\u590D\uFF09\u7684\u7EC4\u7EC7\u3002\r
* [\u4EE3\u7801\u5206\u6790\u89C4\u5219\u96C6\u5408](https://carc.codeplex.com/) - \u5305\u542B\u4E00\u7EC4\u57FA\u4E8E Microsoft .NET \u7F16\u8BD1\u5668\u5E73\u53F0\u201CRoslyn\u201D\u6784\u5EFA\u7684\u8BCA\u65AD\u3001\u4EE3\u7801\u4FEE\u590D\u548C\u91CD\u6784\u3002\r
* [code-cracker](https://github.com/code-cracker/code-cracker) - \u4E00\u4E2A\u7528\u4E8E C# \u548C VB \u7684\u5206\u6790\u5668\u5E93\uFF0C\u4F7F\u7528 Roslyn \u8FDB\u884C\u91CD\u6784\u3001\u4EE3\u7801\u5206\u6790\u548C\u5176\u4ED6\u7EC6\u8282\u529F\u80FD\u3002\r
* [CodeRush](https://www.devexpress.com/products/coderush/) :copyright: - \u4F7F\u7528 Visual Studio 2015 \u53CA\u66F4\u9AD8\u7248\u672C\u4E2D\u7684 Roslyn \u5F15\u64CE\u7684\u4EE3\u7801\u521B\u5EFA\u3001\u8C03\u8BD5\u3001\u5BFC\u822A\u3001\u91CD\u6784\u3001\u5206\u6790\u548C\u53EF\u89C6\u5316\u5DE5\u5177\u3002\r
* [CSharpEssentials](https://github.com/DustinCampbell/CSharpEssentials) - C# Essentials \u662F Roslyn \u8BCA\u65AD\u5206\u6790\u5668\u3001\u4EE3\u7801\u4FEE\u590D\u548C\u91CD\u6784\u7684\u96C6\u5408\uFF0C\u53EF\u4EE5\u8F7B\u677E\u4F7F\u7528 C# 6 \u8BED\u8A00\u529F\u80FD\u3002\r
* [Designite](http://www.designite-tools.com) :copyright: - Designite \u662F\u4E00\u6B3E\u8F6F\u4EF6\u8BBE\u8BA1\u8D28\u91CF\u8BC4\u4F30\u5DE5\u5177\u3002\u5B83\u652F\u6301\u68C0\u6D4B\u5B9E\u65BD\u548C\u8BBE\u8BA1\u5F02\u5473\u3001\u8BA1\u7B97\u5404\u79CD\u4EE3\u7801\u8D28\u91CF\u6307\u6807\u4EE5\u53CA\u8D8B\u52BF\u5206\u6790\u3002\r
* [Gendarme](http://www.mono-project.com/docs/tools+libraries/tools/gendarme/) - Gendarme \u68C0\u67E5\u5305\u542B ECMA CIL \u683C\u5F0F (Mono \u548C .NET) \u4EE3\u7801\u7684\u7A0B\u5E8F\u548C\u5E93\u3002\r
* [NDepend](http://www.ndepend.com/) :copyright: - \u6D4B\u91CF\u3001\u67E5\u8BE2\u548C\u53EF\u89C6\u5316\u60A8\u7684\u4EE3\u7801\u5E76\u907F\u514D\u610F\u5916\u95EE\u9898\u3001\u6280\u672F\u503A\u52A1\u548C\u590D\u6742\u6027\u3002\r
* [Puma Scan](https://github.com/pumasecurity/puma-scan) - \u5F53\u5F00\u53D1\u56E2\u961F\u5728 Visual Studio \u4E2D\u7F16\u5199\u4EE3\u7801\u65F6\uFF0CPuma Scan \u4E3A\u5E38\u89C1\u6F0F\u6D1E\uFF08XSS\u3001SQLi\u3001CSRF\u3001LDAPi\u3001\u52A0\u5BC6\u3001\u53CD\u5E8F\u5217\u5316\u7B49\uFF09\u63D0\u4F9B\u5B9E\u65F6\u5B89\u5168\u4EE3\u7801\u5206\u6790\u3002\r
* [\u91CD\u6784\u8981\u70B9](http://vsrefactoringessentials.com/) - \u7528\u4E8E C# \u548C VB.NET \u91CD\u6784\u7684\u514D\u8D39 Visual Studio 2015 \u6269\u5C55\uFF0C\u5305\u62EC\u4EE3\u7801\u6700\u4F73\u5B9E\u8DF5\u5206\u6790\u5668\u3002\r
* [ReSharper](https://www.jetbrains.com/resharper/) :copyright: - \u901A\u8FC7\u5BF9 C#\u3001VB.NET\u3001ASP.NET\u3001JavaScript\u3001TypeScript \u548C\u5176\u4ED6\u6280\u672F\u7684\u5B9E\u65F6\u4EE3\u7801\u68C0\u67E5\u6765\u6269\u5C55 Visual Studio\u3002\r
* [Roslyn Security Guard](https://dotnet-security-guard.github.io/) - \u8BE5\u9879\u76EE\u4E13\u6CE8\u4E8E\u8BC6\u522B\u6F5C\u5728\u6F0F\u6D1E\uFF0C\u4F8B\u5982 SQL \u6CE8\u5165\u3001\u8DE8\u7AD9\u70B9\u811A\u672C (XSS)\u3001CSRF\u3001\u52A0\u5BC6\u5F31\u70B9\u3001\u786C\u7F16\u7801\u5BC6\u7801\u7B49\u3002\r
* [Roslynator](https://github.com/JosefPihrt/Roslynator/) - \u7531 Roslyn \u63D0\u4F9B\u652F\u6301\u7684 190 \u591A\u4E2A C# \u5206\u6790\u5668\u548C 190 \u591A\u4E2A\u91CD\u6784\u7684\u96C6\u5408\u3002\r
* [\u5B89\u5168\u4EE3\u7801\u626B\u63CF](https://security-code-scan.github.io/) - C# \u548C VB.NET \u7684\u5B89\u5168\u4EE3\u7801\u5206\u6790\u5668\u3002\u68C0\u6D4B\u5404\u79CD\u5B89\u5168\u6F0F\u6D1E\u6A21\u5F0F\uFF1ASQLi\u3001XSS\u3001CSRF\u3001XXE\u3001Open Redirect \u7B49\u3002\r
* [SonarLint for Visual Studio](https://vs.sonarlint.org/) - SonarLint \u662F Visual Studio 2015 \u548C 2017 \u7684\u6269\u5C55\uFF0C\u53EF\u4E3A\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u6709\u5173 .NET \u4EE3\u7801\u4E2D\u6CE8\u5165\u7684\u65B0\u9519\u8BEF\u548C\u8D28\u91CF\u95EE\u9898\u7684\u5B9E\u65F6\u53CD\u9988\u3002\r
* [VSDiagnostics](https://github.com/Vannevelj/VSDiagnostics) - \u57FA\u4E8E Roslyn \u7684\u4E0E VS \u96C6\u6210\u7684\u9759\u6001\u5206\u6790\u5668\u96C6\u5408\u3002\r
* [Wintellect.Analyzers](https://github.com/Wintellect/Wintellect.Analyzers) - .NET \u7F16\u8BD1\u5668\u5E73\u53F0\uFF08\u201CRoslyn\u201D\uFF09\u8BCA\u65AD\u5206\u6790\u5668\u548C\u4EE3\u7801\u4FEE\u590D\u3002\r
\r
\uFF03\uFF03 \u6C34\u6676\r
\r
* [ameba](https://github.com/veelenga/ameba) - Crystal \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\r
* [crystal](https://crystal-lang.org/) - Crystal \u7F16\u8BD1\u5668\u5177\u6709\u5185\u7F6E\u7684 linting \u529F\u80FD\u3002\r
\r
## \u5FB7\u6717\r
\r
* [D-Scanner](https://github.com/dlang-community/D-Scanner) - D-Scanner \u662F\u4E00\u6B3E\u7528\u4E8E\u5206\u6790 D \u6E90\u4EE3\u7801\u7684\u5DE5\u5177\r
\r
\u7075\u4E39\u5999\u836F\r
\r
* [credo](https://github.com/rrrene/credo) - \u4E00\u6B3E\u4E13\u6CE8\u4E8E\u4EE3\u7801\u4E00\u81F4\u6027\u548C\u6559\u5B66\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\u3002\r
* [sobelow](https://github.com/nccgroup/sobelow) - \u9488\u5BF9 Phoenix \u6846\u67B6\u7684\u5B89\u5168\u9759\u6001\u5206\u6790\r
\r
## Erlang\r
\r
* [elvis](https://github.com/inaka/elvis) - Erlang \u98CE\u683C\u5BA1\u9605\u8005\r
\r
## \u6CD5##\r
\r
* [FSharpLint](https://github.com/fsprojects/FSharpLint) - F# \u7684 Lint \u5DE5\u5177\r
\r
Fortran \u8BED\u8A00\r
\r
* [i-Code CNES for Fortran](https://github.com/lequal/i-CodeCNES) - \u4E00\u4E2A\u9488\u5BF9 Fortran 77\u3001Fortran 90 \u548C Shell \u7684\u5F00\u6E90\u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\u3002\r
\r
\uFF03\uFF03 \u53BB\r
\r
* [deadcode](https://github.com/tsenart/deadcode) - \u67E5\u627E\u672A\u4F7F\u7528\u7684\u4EE3\u7801\u3002\r
* [dingo-hunter](https://github.com/nickng/dingo-hunter) - \u7528\u4E8E\u67E5\u627E Go \u4E2D\u6B7B\u9501\u7684\u9759\u6001\u5206\u6790\u5668\u3002\r
* [dupl](https://github.com/mibk/dupl) - \u62A5\u544A\u53EF\u80FD\u91CD\u590D\u7684\u4EE3\u7801\u3002\r
* [errcheck](https://github.com/kisielk/errcheck) - \u68C0\u67E5\u662F\u5426\u4F7F\u7528\u4E86\u9519\u8BEF\u8FD4\u56DE\u503C\u3002\r
* [flen](https://github.com/lafolle/flen) - \u83B7\u53D6 Go \u5305\u4E2D\u51FD\u6570\u957F\u5EA6\u7684\u4FE1\u606F\u3002\r
* [gas](https://github.com/GoASTScanner/gas) - \u901A\u8FC7\u626B\u63CF Go AST \u68C0\u67E5\u6E90\u4EE3\u7801\u662F\u5426\u5B58\u5728\u5B89\u5168\u95EE\u9898\u3002\r
* [Go Meta Linter](https://github.com/alecthomas/gometalinter) - \u540C\u65F6\u8FD0\u884C Go lint \u5DE5\u5177\u5E76\u89C4\u8303\u5316\u5176\u8F93\u51FA\u3002\r
* [go tool vet --shadow](https://golang.org/cmd/vet/#hdr-Shadowed_variables) - \u62A5\u544A\u53EF\u80FD\u88AB\u65E0\u610F\u4E2D\u906E\u853D\u7684\u53D8\u91CF\u3002\r
* [go vet](https://golang.org/cmd/vet/) - \u68C0\u67E5 Go \u6E90\u4EE3\u7801\u5E76\u62A5\u544A\u53EF\u7591\u5185\u5BB9\u3002\r
* [go-critic](https://github.com/go-critic/go-critic) - Go \u6E90\u4EE3\u7801 linter\uFF0C\u7EF4\u62A4\u5176\u4ED6 linter \u4E2D\u5F53\u524D\u672A\u5B9E\u73B0\u7684\u68C0\u67E5\u3002\r
* [go-staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - go vet \u7684\u589E\u5F3A\u7248\uFF0C\u7C7B\u4F3C\u4E8E C# \u7248\u7684 ReSharper\u3002\r
* [go/ast](https://golang.org/pkg/go/ast/) - \u5305 ast \u58F0\u660E\u7528\u4E8E\u8868\u793A Go \u5305\u8BED\u6CD5\u6811\u7684\u7C7B\u578B\u3002\r
* [goconst](https://github.com/jgautheron/goconst) - \u67E5\u627E\u53EF\u4EE5\u7528\u5E38\u91CF\u66FF\u6362\u7684\u91CD\u590D\u5B57\u7B26\u4E32\u3002\r
* [gocyclo](https://github.com/fzipp/gocyclo) - \u8BA1\u7B97 Go \u6E90\u4EE3\u7801\u4E2D\u51FD\u6570\u7684\u5708\u590D\u6742\u5EA6\u3002\r
* [gofmt -s](https://golang.org/cmd/gofmt/) - \u68C0\u67E5\u4EE3\u7801\u683C\u5F0F\u662F\u5426\u6B63\u786E\u4E14\u65E0\u6CD5\u8FDB\u4E00\u6B65\u7B80\u5316\u3002\r
* [goimports](https://godoc.org/golang.org/x/tools/cmd/goimports) - \u68C0\u67E5\u7F3A\u5931\u6216\u672A\u5F15\u7528\u7684\u5305\u5BFC\u5165\u3002\r
* [golint](https://github.com/golang/lint) - \u6253\u5370\u51FA Go \u6E90\u4EE3\u7801\u4E2D\u7684\u7F16\u7801\u98CE\u683C\u9519\u8BEF\u3002\r
* [goreporter](https://github.com/wgliang/goreporter) - \u540C\u65F6\u8FD0\u884C\u591A\u4E2A linter \u5E76\u5C06\u5176\u8F93\u51FA\u89C4\u8303\u5316\u4E3A\u62A5\u544A\u3002\r
* [goroutine-inspect](https://github.com/linuxerwang/goroutine-inspect) - \u7528\u4E8E\u5206\u6790 Golang goroutine dump \u7684\u4EA4\u4E92\u5F0F\u5DE5\u5177\u3002\r
* [gosimple](https://github.com/dominikh/go-tools/tree/master/cmd/gosimple) - \u62A5\u544A\u4EE3\u7801\u4E2D\u7684\u7B80\u5316\u3002\r
* [gotype](https://golang.org/x/tools/cmd/gotype) - \u7C7B\u4F3C\u4E8E Go \u7F16\u8BD1\u5668\u7684\u53E5\u6CD5\u548C\u8BED\u4E49\u5206\u6790\u3002\r
* [ineffassign](https://github.com/gordonklaus/ineffassign) - \u68C0\u6D4B Go \u4EE3\u7801\u4E2D\u7684\u65E0\u6548\u8D4B\u503C\r
* [interfacer](https://github.com/mvdan/interfacer) - \u5EFA\u8BAE\u4F7F\u7528\u66F4\u7A84\u7684\u63A5\u53E3\u3002\r
* [lll](https://github.com/walle/lll) - \u62A5\u544A\u957F\u7EBF\u3002\r
* [maligned](https://github.com/mdempsky/maligned) - \u68C0\u6D4B\u5982\u679C\u5B57\u6BB5\u6392\u5E8F\u5219\u5360\u7528\u66F4\u5C11\u5185\u5B58\u7684\u7ED3\u6784\u3002\r
* [megacheck](https://github.com/dominikh/go-tools/tree/master/cmd/megacheck) - \u8FD0\u884C staticcheck\u3001gosimple \u548C unused\uFF0C\u5171\u4EAB\u5DE5\u4F5C\u3002\r
* [misspell](https://github.com/client9/misspell) - \u67E5\u627E\u5E38\u89C1\u7684\u62FC\u5199\u9519\u8BEF\u7684\u82F1\u6587\u5355\u8BCD\u3002\r
* [nakedret](https://github.com/alexkohler/nakedret) - \u67E5\u627E\u88F8\u56DE\u62A5\u3002\r
* [prealloc](https://github.com/alexkohler/prealloc) - \u67E5\u627E\u53EF\u80FD\u9884\u5206\u914D\u7684\u5207\u7247\u58F0\u660E\u3002\r
* [safesql](https://github.com/stripe/safesql) - Golang \u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u9632\u6B62 SQL \u6CE8\u5165\u3002\r
* [structcheck](https://github.com/opennota/check) - \u67E5\u627E\u672A\u4F7F\u7528\u7684\u7ED3\u6784\u4F53\u5B57\u6BB5\u3002\r
* [test](http://golang.org/pkg/testing/) - \u663E\u793A stdlib \u6D4B\u8BD5\u6A21\u5757\u4E2D\u6D4B\u8BD5\u5931\u8D25\u7684\u4F4D\u7F6E\u3002\r
* [testify](https://github.com/stretchr/testify) - \u663E\u793A\u5931\u8D25\u7684 testify \u65AD\u8A00\u7684\u4F4D\u7F6E\u3002\r
* [unconvert](https://github.com/mdempsky/unconvert) - \u68C0\u6D4B\u5197\u4F59\u7C7B\u578B\u8F6C\u6362\u3002\r
* [unimport](https://github.com/alexkohler/unimport) - \u67E5\u627E\u4E0D\u5FC5\u8981\u7684\u5BFC\u5165\u522B\u540D\r
* [unparam](https://github.com/mvdan/unparam) - \u67E5\u627E\u672A\u4F7F\u7528\u7684\u51FD\u6570\u53C2\u6570\u3002\r
* [unused](https://github.com/dominikh/go-tools/tree/master/cmd/unused) - \u67E5\u627E\u672A\u4F7F\u7528\u7684\u53D8\u91CF\u3002\r
* [varcheck](https://github.com/opennota/check) - \u67E5\u627E\u672A\u4F7F\u7528\u7684\u5168\u5C40\u53D8\u91CF\u548C\u5E38\u91CF\u3002\r
\r
Groovy\r
\r
* [CodeNarc](https://github.com/CodeNarc/CodeNarc) - Groovy \u6E90\u4EE3\u7801\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u53EF\u76D1\u63A7\u548C\u6267\u884C\u591A\u9879\u7F16\u7801\u6807\u51C6\u548C\u6700\u4F73\u5B9E\u8DF5\u3002\r
\r
\u54C8\u65AF\u514B\u5C14\r
\r
* [HLint](https://github.com/ndmitchell/hlint) - HLint \u662F\u4E00\u4E2A\u7528\u4E8E\u5BF9 Haskell \u4EE3\u7801\u63D0\u51FA\u6539\u8FDB\u5EFA\u8BAE\u7684\u5DE5\u5177\u3002\r
\r
## \u6DF7\u5408\r
\r
* [Haxe Checkstyle](https://github.com/HaxeCheckstyle/haxe-checkstyle) - \u4E00\u79CD\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u7F16\u5199\u7B26\u5408\u7F16\u7801\u6807\u51C6\u7684 Haxe \u4EE3\u7801\u3002\r
\r
Java \u7248\u672C\r
* [ArchUnit](https://www.archunit.org/) - \u5BF9 Java \u67B6\u6784\u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\r
* [Checker Framework](https://github.com/typetools/checker-framework/) - Java \u7684\u53EF\u63D2\u5165\u7C7B\u578B\u68C0\u67E5 http://checkerframework.org/\r
* [checkstyle](https://github.com/checkstyle/checkstyle) - \u68C0\u67E5 Java \u6E90\u4EE3\u7801\u662F\u5426\u9075\u5B88\u4EE3\u7801\u6807\u51C6\u6216\u4E00\u7EC4\u9A8C\u8BC1\u89C4\u5219\uFF08\u6700\u4F73\u5B9E\u8DF5\uFF09\r
* [ckjm](http://www.spinellis.gr/sw/ckjm/) - \u901A\u8FC7\u5904\u7406\u5DF2\u7F16\u8BD1 Java \u6587\u4EF6\u7684\u5B57\u8282\u7801\u6765\u8BA1\u7B97 Chidamber \u548C Kemerer \u9762\u5411\u5BF9\u8C61\u5EA6\u91CF\r
* [Error-prone](https://github.com/google/error-prone) - \u5C06\u5E38\u89C1\u7684 Java \u9519\u8BEF\u6355\u83B7\u4E3A\u7F16\u8BD1\u65F6\u9519\u8BEF\r
* [fb-contrib](https://github.com/mebigfatguy/fb-contrib) - \u4E00\u4E2A\u5E26\u6709\u9644\u52A0\u9519\u8BEF\u68C0\u6D4B\u5668\u7684 FindBugs \u63D2\u4EF6\r
* [\u67E5\u627E\u5B89\u5168\u6F0F\u6D1E]\uFF08https://find-sec-bugs.github.io/\uFF09 - \u7528\u4E8E Java Web \u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u5BA1\u8BA1\u7684 IDE/SonarQube \u63D2\u4EF6\u3002\r
* [Hopper](https://github.com/cuplv/hopper) - \u7528 Scala \u7F16\u5199\u7684\u9488\u5BF9\u5728 JVM \u4E0A\u8FD0\u884C\u7684\u8BED\u8A00\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\r
* [HuntBugs](https://github.com/amaembo/huntbugs) \u2013 \u57FA\u4E8E Procyon Compiler Tools \u7684\u5B57\u8282\u7801\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u65E8\u5728\u53D6\u4EE3 FindBugs\u3002\r
* [JArchitect](https://www.jarchitect.com) :copyright: - \u6D4B\u91CF\u3001\u67E5\u8BE2\u548C\u53EF\u89C6\u5316\u60A8\u7684\u4EE3\u7801\u5E76\u907F\u514D\u610F\u5916\u95EE\u9898\u3001\u6280\u672F\u503A\u52A1\u548C\u590D\u6742\u6027\u3002\r
* [JBMC](http://www.cprover.org/jbmc/) - Java\uFF08\u5B57\u8282\u7801\uFF09\u7684\u6709\u754C\u6A21\u578B\u68C0\u67E5\u5668\uFF0C\u9A8C\u8BC1\u7528\u6237\u5B9A\u4E49\u7684\u65AD\u8A00\u3001\u6807\u51C6\u65AD\u8A00\u3001\u591A\u4E2A\u8986\u76D6\u7387\u6307\u6807\u5206\u6790\r
* [NullAway](https://github.com/uber/NullAway) - \u57FA\u4E8E\u7C7B\u578B\u7684\u7A7A\u6307\u9488\u68C0\u67E5\u5668\uFF0C\u5177\u6709\u8F83\u4F4E\u7684\u6784\u5EFA\u65F6\u95F4\u5F00\u9500\uFF1B\u4E00\u4E2A [Error Prone](http://errorprone.info/) \u63D2\u4EF6\r
* [OWASP \u4F9D\u8D56\u6027\u68C0\u67E5]\uFF08https://www.owasp.org/index.php/OWASP_Dependency_Check\uFF09 - \u68C0\u67E5\u4F9D\u8D56\u6027\u4E2D\u662F\u5426\u5B58\u5728\u5DF2\u77E5\u7684\u3001\u516C\u5F00\u62AB\u9732\u7684\u6F0F\u6D1E\u3002\r
* [Spoon](https://github.com/INRIA/spoon) - \u7528\u4E8E\u7F16\u5199\u60A8\u81EA\u5DF1\u7684 Java \u9759\u6001\u5206\u6790\u548C\u67B6\u6784\u89C4\u5219\u68C0\u67E5\u5668\u7684\u5E93\u3002\u53EF\u4EE5\u96C6\u6210\u5230 Maven \u548C Gradle \u4E2D\u3002\r
* [SpotBugs](https://spotbugs.github.io/) - SpotBugs \u662F FindBugs \u7684\u540E\u7EE7\u8005\u3002\u4E00\u79CD\u7528\u4E8E\u9759\u6001\u5206\u6790 Java \u4EE3\u7801\u4E2D\u67E5\u627E\u9519\u8BEF\u7684\u5DE5\u5177\u3002\r
\r
JavaScript\r
\r
* [aether](https://github.com/codecombat/aether)\u2014\u2014\u5728\u8282\u70B9\u6216\u6D4F\u89C8\u5668\u4E2D\uFF0C\u5BF9\u7528\u6237 JavaScript \u8FDB\u884C Lint\u3001\u5206\u6790\u3001\u89C4\u8303\u5316\u3001\u8F6C\u6362\u3001\u6C99\u76D2\u5316\u3001\u8FD0\u884C\u3001\u9010\u6B65\u6267\u884C\u548C\u53EF\u89C6\u5316\u3002\r
* [ClosureLinter](https://github.com/google/closure-linter) - \u786E\u4FDD\u9879\u76EE\u7684\u6240\u6709 JavaScript \u4EE3\u7801\u90FD\u9075\u5FAA Google JavaScript \u6837\u5F0F\u6307\u5357\u4E2D\u7684\u51C6\u5219\u3002\u5B83\u8FD8\u53EF\u4EE5\u81EA\u52A8\u4FEE\u590D\u8BB8\u591A\u5E38\u89C1\u9519\u8BEF\r
* [coffeelint](https://github.com/clutchski/coffeelint) - \u4E00\u4E2A\u5E2E\u52A9\u4FDD\u6301 CoffeeScript \u4EE3\u7801\u5E72\u51C0\u548C\u4E00\u81F4\u7684\u98CE\u683C\u68C0\u67E5\u5668\u3002\r
* [complexity-report](https://github.com/jared-stilwell/complexity-report) - JavaScript \u9879\u76EE\u7684\u8F6F\u4EF6\u590D\u6742\u5EA6\u5206\u6790\r
* [DeepScan](https://deepscan.io) :copyright: - \u4E00\u79CD JavaScript \u5206\u6790\u5668\uFF0C\u4E3B\u8981\u9488\u5BF9\u8FD0\u884C\u65F6\u9519\u8BEF\u548C\u8D28\u91CF\u95EE\u9898\uFF0C\u800C\u4E0D\u662F\u7F16\u7801\u7EA6\u5B9A\u3002\r
* [escomplex](https://github.com/jared-stilwell/escomplex) - JavaScript \u7CFB\u5217\u62BD\u8C61\u8BED\u6CD5\u6811\u7684\u8F6F\u4EF6\u590D\u6742\u5EA6\u5206\u6790\u3002\r
* [eslint](https://github.com/eslint/eslint) - \u4E00\u4E2A\u5B8C\u5168\u53EF\u63D2\u5165\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u8BC6\u522B\u548C\u62A5\u544A JavaScript \u4E2D\u7684\u6A21\u5F0F\r
* [Esprima](https://github.com/jquery/esprima) - \u7528\u4E8E\u591A\u7528\u9014\u5206\u6790\u7684 ECMAScript \u89E3\u6790\u57FA\u7840\u7ED3\u6784\r
* [flow](https://flow.org/) - JavaScript \u7684\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u5668\u3002\r
* [jshint](https://github.com/jshint/jshint) - \u68C0\u6D4B JavaScript \u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u548C\u6F5C\u5728\u95EE\u9898\u5E76\u5F3A\u5236\u6267\u884C\u56E2\u961F\u7684\u7F16\u7801\u7EA6\u5B9A\r
* [JSLint](https://github.com/douglascrockford/JSLint) :copyright: - JavaScript \u4EE3\u7801\u8D28\u91CF\u5DE5\u5177\r
* [JSPrime](https://github.com/dpnishant/jsprime) \u2013 \u9759\u6001\u5B89\u5168\u5206\u6790\u5DE5\u5177\r
* [NodeJSScan](https://github.com/ajinabraham/NodeJsScan) - NodeJsScan \u662F\u7528\u4E8E Node.js \u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u5B89\u5168\u4EE3\u7801\u626B\u63CF\u5668\u3002\r
* [plato](https://github.com/es-analysis/plato) - \u53EF\u89C6\u5316 JavaScript \u6E90\u4EE3\u7801\u590D\u6742\u5EA6\r
* [Prettier](https://github.com/prettier/prettier) - \u4E00\u4E2A\u6709\u4E3B\u89C1\u7684\u4EE3\u7801\u683C\u5F0F\u5316\u7A0B\u5E8F\u3002\r
* [quality](https://github.com/jden/quality) - \u96F6\u914D\u7F6E\u4EE3\u7801\u548C\u6A21\u5757 linting\r
* [retire.js](https://github.com/RetireJS/retire.js) - \u626B\u63CF\u7A0B\u5E8F\uFF0C\u68C0\u6D4B\u662F\u5426\u5B58\u5728\u5DF2\u77E5\u6F0F\u6D1E\u7684 JavaScript \u5E93\u7684\u4F7F\u7528\u60C5\u51B5\r
* [standard](http://standardjs.com/) - \u4E00\u4E2A\u7528\u4E8E\u68C0\u67E5 JavaScript \u6837\u5F0F\u6307\u5357\u95EE\u9898\u7684 npm \u6A21\u5757\r
* [XO](https://github.com/sindresorhus/xo) - \u5F3A\u5236\u6267\u884C\u4E25\u683C\u7684\u4EE3\u7801\u98CE\u683C\u3002\u5207\u52FF\u518D\u5728\u62C9\u53D6\u8BF7\u6C42\u4E2D\u8BA8\u8BBA\u4EE3\u7801\u98CE\u683C\uFF01\r
* [yardstick](https://github.com/calmh/yardstick) - Javascript \u4EE3\u7801\u6307\u6807\r
\r
\u79D1\u7279\u6797\r
\r
* [detekt](https://github.com/arturbosch/detekt) - Kotlin \u4EE3\u7801\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u3002\r
* [ktlint](https://github.com/shyiko/ktlint) - \u4E00\u6B3E\u5185\u7F6E\u683C\u5F0F\u5316\u7A0B\u5E8F\u7684\u53CD bikeshedding Kotlin linter\r
\r
\uFF03\uFF03 \u4E8C\r
\r
* [luacheck](https://github.com/mpeterv/luacheck) - \u7528\u4E8E Lua \u4EE3\u7801\u7684 linting \u548C\u9759\u6001\u5206\u6790\u7684\u5DE5\u5177\u3002\r
\r
## MATLAB\r
\r
* [mlint](https://de.mathworks.com/help/matlab/ref/mlint.html) :copyright: - \u68C0\u67E5 MATLAB \u4EE3\u7801\u6587\u4EF6\u662F\u5426\u5B58\u5728\u95EE\u9898\u3002\r
\r
Perl \u7684\r
\r
* [Perl::Critic](http://search.cpan.org/~thaljef/Perl-Critic-1.126/lib/Perl/Critic.pm) - \u6279\u8BC4 Perl \u6E90\u4EE3\u7801\u4EE5\u83B7\u5F97\u6700\u4F73\u5B9E\u8DF5\u3002\r
\r
PHP\r
\r
* [dephpend](https://github.com/mihaeu/dephpend) - \u4F9D\u8D56\u5206\u6790\u5DE5\u5177\r
* [deprecation-detector](https://github.com/sensiolabs-de/deprecation-detector) - \u67E5\u627E\u5DF2\u5F03\u7528\u7684 (Symfony) \u4EE3\u7801\u7684\u7528\u6CD5\r
* [deptrac](https://github.com/sensiolabs-de/deptrac) - \u5F3A\u5236\u6267\u884C\u8F6F\u4EF6\u5C42\u4E4B\u95F4\u7684\u4F9D\u8D56\u89C4\u5219\u3002\r
* [DesignPatternDetector](https://github.com/Halleck45/DesignPatternDetector) - \u68C0\u6D4B PHP \u4EE3\u7801\u4E2D\u7684\u8BBE\u8BA1\u6A21\u5F0F\r
* [EasyCodingStandard](https://github.com/Symplify/EasyCodingStandard) - \u7ED3\u5408 [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) \u548C [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)\r
* [exakat](https://github.com/exakat/exakat) - PHP \u7684\u81EA\u52A8\u4EE3\u7801\u5BA1\u67E5\u5F15\u64CE\r
* [GrumPHP](https://github.com/phpro/grumphp) - \u6BCF\u6B21\u63D0\u4EA4\u65F6\u68C0\u67E5\u4EE3\u7801\r
* [Mondrian](https://github.com/Trismegiste/Mondrian) - \u4E00\u7EC4\u4F7F\u7528\u56FE\u8BBA\u7684\u9759\u6001\u5206\u6790\u548C\u91CD\u6784\u5DE5\u5177\r
* [parallel-lint](https://github.com/JakubOnderka/PHP-Parallel-Lint) - \u6B64\u5DE5\u5177\u68C0\u67E5 PHP \u6587\u4EF6\u7684\u8BED\u6CD5\u6BD4\u4E32\u884C\u68C0\u67E5\u66F4\u5FEB\uFF0C\u5E76\u4E14\u8F93\u51FA\u66F4\u7CBE\u7F8E\u3002\r
* [Parse](https://github.com/psecio/parse) - \u9759\u6001\u5B89\u5168\u626B\u63CF\u5668\r
* [pdepend](https://pdepend.org/) - \u8BA1\u7B97 PHP \u4EE3\u7801\u7684\u5708\u590D\u6742\u5EA6\u7B49\u8F6F\u4EF6\u6307\u6807\u3002\r
* [phan](https://github.com/etsy/phan) - \u6765\u81EA etsy \u7684\u73B0\u4EE3\u9759\u6001\u5206\u6790\u5668\r
* [PHP \u5047\u8BBE](https://github.com/rskuipers/php-assumptions) - \u68C0\u67E5\u5F31\u5047\u8BBE\r
* [PHP \u7F16\u7801\u6807\u51C6\u4FEE\u590D\u5668]\uFF08http://cs.sensiolabs.org/\uFF09 - \u6839\u636E PSR-1\u3001PSR-2 \u548C Symfony \u6807\u51C6\u7B49\u6807\u51C6\u4FEE\u590D\u60A8\u7684\u4EE3\u7801\u3002\r
* [Php Inspections (EA Extended)](https://github.com/kalessil/phpinspectionsea) - PHP \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u5668\u3002\r
* [PHP \u91CD\u6784\u6D4F\u89C8\u5668](https://github.com/QafooLabs/php-refactoring-browser) - \u91CD\u6784\u52A9\u624B\r
* [PHP \u8BED\u4E49\u7248\u672C\u68C0\u67E5\u5668](https://github.com/tomzx/php-semver-checker) - \u6839\u636E\u8BED\u4E49\u7248\u672C\u5EFA\u8BAE\u4E0B\u4E00\u4E2A\u7248\u672C\r
* [PHP-Parser](https://github.com/nikic/PHP-Parser) - \u7528 PHP \u7F16\u5199\u7684 PHP \u89E3\u6790\u5668\r
* [PHP-Token-Reflection](https://github.com/Andrewsville/PHP-Token-Reflection) - \u6A21\u62DF PHP \u5185\u90E8\u53CD\u5C04\u7684\u5E93\r
* [php7cc](https://github.com/sstalle/php7cc) - PHP 7 \u517C\u5BB9\u6027\u68C0\u67E5\u5668\r
* [php7mar](https://github.com/Alexia/php7mar) - \u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u5C06\u4EE3\u7801\u79FB\u690D\u5230 PHP 7\r
* [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) - \u68C0\u6D4B\u8FDD\u53CD\u5B9A\u4E49\u7684\u4E00\u7EC4\u7F16\u7801\u6807\u51C6\u7684\u60C5\u51B5\r
* [phpca](https://github.com/wapmorgan/PhpCodeAnalyzer) - \u67E5\u627E\u975E\u5185\u7F6E\u6269\u5C55\u7684\u4F7F\u7528\u60C5\u51B5\r
* [phpcf](http://wapmorgan.github.io/PhpCodeFixer/) - \u67E5\u627E\u5DF2\u5F03\u7528\u7684 PHP \u529F\u80FD\u7684\u4F7F\u7528\u60C5\u51B5\r
* [phpcpd](https://github.com/sebastianbergmann/phpcpd)\u2014\u2014PHP \u4EE3\u7801\u7684\u590D\u5236/\u7C98\u8D34\u68C0\u6D4B\u5668\u3002\r
* [phpdcd](https://github.com/sebastianbergmann/phpdcd) - PHP \u4EE3\u7801\u7684\u6B7B\u4EE3\u7801\u68C0\u6D4B\u5668 (DCD)\u3002\r
* [PhpDependencyAnalysis](https://github.com/mamuz/PhpDependencyAnalysis) - \u4E3A\u9879\u76EE\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u56FE\r
* [phpdoc-to-typehint](https://github.com/dunglas/phpdoc-to-typehint) - \u4F7F\u7528 PHPDoc \u6CE8\u91CA\u5411\u73B0\u6709 PHP \u9879\u76EE\u6DFB\u52A0\u6807\u91CF\u7C7B\u578B\u63D0\u793A\u548C\u8FD4\u56DE\u7C7B\u578B\r
* [phpDocumentor](https://www.phpdoc.org/) - \u5206\u6790 PHP \u6E90\u4EE3\u7801\u4EE5\u751F\u6210\u6587\u6863\r
* [PHPMD](https://phpmd.org/) - \u67E5\u627E\u4EE3\u7801\u4E2D\u53EF\u80FD\u5B58\u5728\u7684\u9519\u8BEF\r
* [PhpMetrics](http://www.phpmetrics.org/) - \u8BA1\u7B97\u5E76\u53EF\u89C6\u5316\u5404\u79CD\u4EE3\u7801\u8D28\u91CF\u6307\u6807\r
* [phpmnd](https://github.com/povils/phpmnd) - \u5E2E\u52A9\u68C0\u6D4B\u9B54\u6CD5\u6570\u5B57\r
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - \u7528\u4E8E\u8FD0\u884C QA \u5DE5\u5177 (phploc\u3001phpcpd\u3001phpcs\u3001pdepend\u3001phpmd\u3001phpmetrics) \u7684\u5DE5\u5177\r
* [phpqa - jakzal](https://github.com/jakzal/phpqa) - \u4E00\u4E2A\u5BB9\u5668\u4E2D\u5305\u542B\u591A\u79CD\u7528\u4E8E PHP \u9759\u6001\u5206\u6790\u7684\u5DE5\u5177\r
* [phpqa - jmolivas](https://github.com/jmolivas/phpqa) - PHPQA \u4E00\u4F53\u5316\u5206\u6790\u5668 CLI \u5DE5\u5177\r
* [phpsa](https://github.com/ovr/phpsa) \u2013 PHP \u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\u3002\r
* [PHPStan](https://github.com/phpstan/phpstan)\u2014\u2014PHP \u9759\u6001\u5206\u6790\u5DE5\u5177\u2014\u2014\u65E0\u9700\u8FD0\u884C\u4EE3\u7801\u5373\u53EF\u53D1\u73B0\u5176\u4E2D\u7684\u9519\u8BEF\uFF01\r
* [Progpilot](https://github.com/designsecurity/progpilot) - \u7528\u4E8E\u5B89\u5168\u76EE\u7684\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\r
* [Psalm](https://getpsalm.org/) - \u7528\u4E8E\u67E5\u627E PHP \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7C7B\u578B\u9519\u8BEF\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\r
* [Qafoo \u8D28\u91CF\u5206\u6790\u5668](https://github.com/Qafoo/QualityAnalyzer) - \u53EF\u89C6\u5316\u6307\u6807\u548C\u6E90\u4EE3\u7801\r
* [RIPS](https://github.com/ripsscanner/rips) - \u7528\u4E8E\u68C0\u6D4B PHP \u811A\u672C\u6F0F\u6D1E\u7684\u9759\u6001\u6E90\u4EE3\u7801\u5206\u6790\u5668\r
* [Tuli](https://github.com/ircmaxell/Tuli) - \u9759\u6001\u5206\u6790\u5F15\u64CE\r
* [twig-lint](https://github.com/asm89/twig-lint) - twig-lint \u662F\u4E00\u4E2A\u7528\u4E8E twig \u6587\u4EF6\u7684 lint \u5DE5\u5177\u3002\r
* [WAP](https://www.owasp.org/index.php/OWASP_WAP-Web_Application_Protection) \u2013 \u7528\u4E8E\u68C0\u6D4B\u548C\u7EA0\u6B63 PHP (4.0 \u6216\u66F4\u9AD8\u7248\u672C) Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u8F93\u5165\u9A8C\u8BC1\u6F0F\u6D1E\u7684\u5DE5\u5177\uFF0C\u5E76\u901A\u8FC7\u7ED3\u5408\u9759\u6001\u5206\u6790\u548C\u6570\u636E\u6316\u6398\u6765\u9884\u6D4B\u8BEF\u62A5\u3002\r
\r
\uFF03\uFF03 Python\r
\r
* [bandit](https://github.com/PyCQA/bandit) - \u4E00\u6B3E\u7528\u4E8E\u67E5\u627E Python \u4EE3\u7801\u4E2D\u5E38\u89C1\u5B89\u5168\u95EE\u9898\u7684\u5DE5\u5177\r
* [Black](https://github.com/ambv/black) \u2013 \u4E0D\u59A5\u534F\u7684 Python \u4EE3\u7801\u683C\u5F0F\u5316\u7A0B\u5E8F\r
* [jedi](https://github.com/davidhalter/jedi) \u2013 Python \u7684\u81EA\u52A8\u5B8C\u6210/\u9759\u6001\u5206\u6790\u5E93\r
* [linty fresh](https://github.com/lyft/linty_fresh) - \u89E3\u6790 lint \u9519\u8BEF\u5E76\u5C06\u5176\u4F5C\u4E3A pull request \u7684\u8BC4\u8BBA\u62A5\u544A\u7ED9 Github\r
* [mccabe](https://github.com/PyCQA/mccabe) - \u68C0\u67E5 McCabe \u590D\u6742\u5EA6\r
* [mypy](https://github.com/python/mypy) - \u4E00\u4E2A\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u5668\uFF0C\u65E8\u5728\u7ED3\u5408\u9E2D\u5B50\u7C7B\u578B\u548C\u9759\u6001\u7C7B\u578B\u7684\u4F18\u70B9\uFF0C\u7ECF\u5E38\u4E0E [MonkeyType](https://github.com/Instagram/MonkeyType) \u4E00\u8D77\u4F7F\u7528\r
* [py-find-injection](https://github.com/uber/py-find-injection) - \u67E5\u627E Python \u4EE3\u7801\u4E2D\u7684 SQL \u6CE8\u5165\u6F0F\u6D1E\r
* [pycodestyle](https://github.com/PyCQA/pycodestyle) - (\u4EE5\u524D\u79F0\u4E3A \`pep8\`) \u6839\u636E PEP 8 \u4E2D\u7684\u4E00\u4E9B\u6837\u5F0F\u7EA6\u5B9A\u68C0\u67E5 Python \u4EE3\u7801\r
* [pydocstyle](https://github.com/PyCQA/pydocstyle) - \u68C0\u67E5\u662F\u5426\u7B26\u5408 Python \u6587\u6863\u5B57\u7B26\u4E32\u7EA6\u5B9A\r
* [pyflakes](https://github.com/pyflakes/pyflakes/) - \u68C0\u67E5 Python \u6E90\u6587\u4EF6\u4E2D\u662F\u5426\u5B58\u5728\u9519\u8BEF\r
* [pylint](https://github.com/PyCQA/pylint) - \u67E5\u627E\u7F16\u7A0B\u9519\u8BEF\uFF0C\u5E2E\u52A9\u6267\u884C\u7F16\u7801\u6807\u51C6\u5E76\u55C5\u63A2\u4E00\u4E9B\u4EE3\u7801\u5F02\u5473\u3002\u5B83\u8FD8\u5305\u62EC\u201Cpyreverse\u201D\uFF08UML \u56FE\u751F\u6210\u5668\uFF09\u548C\u201Csymilar\u201D\uFF08\u76F8\u4F3C\u6027\u68C0\u67E5\u5668\uFF09\u3002\r
* [pyre-check](https://github.com/facebook/pyre-check) - \u9002\u7528\u4E8E\u5927\u578B Python \u4EE3\u7801\u5E93\u7684\u5FEB\u901F\u3001\u53EF\u6269\u5C55\u7684\u7C7B\u578B\u68C0\u67E5\u5668\r
* [pyroma](https://github.com/regebro/pyroma) - \u8BC4\u4EF7 Python \u9879\u76EE\u7B26\u5408 Python \u6253\u5305\u751F\u6001\u7CFB\u7EDF\u6700\u4F73\u5B9E\u8DF5\u7684\u7A0B\u5EA6\uFF0C\u5E76\u5217\u51FA\u53EF\u4EE5\u6539\u8FDB\u7684\u95EE\u9898\r
* [PyT - Python Taint](https://github.com/python-security/pyt) - \u7528\u4E8E\u68C0\u6D4B Python Web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5B89\u5168\u6F0F\u6D1E\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\u3002\r
* [radon](https://github.com/rubik/radon) - \u4E00\u4E2A\u4ECE\u6E90\u4EE3\u7801\u8BA1\u7B97\u5404\u79CD\u6307\u6807\u7684 Python \u5DE5\u5177\r
* [vulture](https://github.com/jendrikseipp/vulture) - \u67E5\u627E Python \u4EE3\u7801\u4E2D\u672A\u4F7F\u7528\u7684\u7C7B\u3001\u51FD\u6570\u548C\u53D8\u91CF\r
* [xenon](https://github.com/rubik/xenon) - \u4F7F\u7528 [\`radon\`](https://github.com/rubik/radon) \u76D1\u63A7\u4EE3\u7801\u590D\u6742\u5EA6\r
\r
Python \u5305\u88C5\u5668\r
\r
* [ciocheck](https://github.com/ContinuumIO/ciocheck) - linter\u3001\u683C\u5F0F\u5316\u7A0B\u5E8F\u548C\u6D4B\u8BD5\u5957\u4EF6\u52A9\u624B\u3002\u4F5C\u4E3A linter\uFF0C\u5B83\u662F \`pep8\`\u3001\`pydocstyle\`\u3001\`flake8\` \u548C \`pylint\` \u7684\u5305\u88C5\u5668\u3002\r
* [flake8](https://github.com/PyCQA/flake8) - \u4E00\u4E2A\u56F4\u7ED5 \`pyflakes\`\u3001\`pycodestyle\` \u548C \`mccabe\` \u7684\u200B\u200B\u5305\u88C5\u5668\r
* [prospector](https://github.com/landscapeio/prospector) - \u4E00\u4E2A\u56F4\u7ED5 \`pylint\`\u3001\`pep8\`\u3001\`mccabe\` \u548C\u5176\u4ED6\u7684\u5305\u88C5\u5668\u3002\r
\r
## R\r
\r
* [lintr](https://github.com/jimhester/lintr) :copyright: - R \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\r
\r
\u89D2\u8272\u626E\u6F14\u6E38\u620F\r
\r
* [SourceMeter](https://www.sourcemeter.com/resources/rpg/) :copyright: - \u9488\u5BF9 RPG III \u548C RPG IV \u7248\u672C\uFF08\u5305\u62EC\u81EA\u7531\u5F62\u5F0F\uFF09\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\r
\r
\u7EA2\u5B9D\u77F3\r
\r
* [brakeman](https://github.com/presidentbeef/brakeman) - \u7528\u4E8E Ruby on Rails \u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u5206\u6790\u5B89\u5168\u6F0F\u6D1E\u626B\u63CF\u5668\r
* [cane](https://github.com/square/cane) - \u4F5C\u4E3A\u6784\u5EFA\u7684\u4E00\u90E8\u5206\uFF0C\u68C0\u67E5\u4EE3\u7801\u8D28\u91CF\u9608\u503C\r
* [dawnscanner](https://github.com/thesp0nge/dawnscanner) - \u4E00\u6B3E\u7528\u4E8E Ruby \u7F16\u5199\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u5206\u6790\u5B89\u5168\u626B\u63CF\u5668\u3002\u5B83\u652F\u6301 Sinatra\u3001Padrino \u548C Ruby on Rails \u6846\u67B6\u3002\r
* [flay](https://github.com/seattlerb/flay) - Flay \u5206\u6790\u4EE3\u7801\u7684\u7ED3\u6784\u76F8\u4F3C\u6027\u3002\r
* [flog](https://github.com/seattlerb/flog) - Flog \u4EE5\u6613\u4E8E\u9605\u8BFB\u7684\u75DB\u82E6\u62A5\u544A\u5F62\u5F0F\u62A5\u544A\u6700\u75DB\u82E6\u7684\u4EE3\u7801\u3002\u5206\u6570\u8D8A\u9AD8\uFF0C\u4EE3\u7801\u8D8A\u75DB\u82E6\u3002\r
* [laser](https://github.com/michaeledgar/laser) \u2013 Ruby \u4EE3\u7801\u7684\u9759\u6001\u5206\u6790\u548C\u6837\u5F0F\u68C0\u67E5\u3002\r
* [pelusa](https://github.com/codegram/pelusa) \u2013 \u9759\u6001\u5206\u6790 Lint \u7C7B\u578B\u7684\u5DE5\u5177\uFF0C\u7528\u4E8E\u6539\u8FDB\u4F60\u7684 OO Ruby \u4EE3\u7801\r
* [quality](https://github.com/apiology/quality) - \u4F7F\u7528\u793E\u533A\u5DE5\u5177\u5BF9\u60A8\u7684\u4EE3\u7801\u8FD0\u884C\u8D28\u91CF\u68C0\u67E5\uFF0C\u5E76\u786E\u4FDD\u60A8\u7684\u6570\u5B57\u4E0D\u4F1A\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u800C\u53D8\u5F97\u66F4\u7CDF\u3002\r
* [reek](https://github.com/troessner/reek) - Ruby \u4EE3\u7801\u5F02\u5473\u68C0\u6D4B\u5668\r
* [RuboCop](https://github.com/rubocop-hq/rubocop) - \u4E00\u4E2A Ruby \u9759\u6001\u4EE3\u7801\u5206\u6790\u5668\uFF0C\u57FA\u4E8E\u793E\u533A Ruby \u98CE\u683C\u6307\u5357\u3002\r
* [Rubrowser](https://github.com/blazeeboy/rubrowser) - Ruby \u7C7B\u4EA4\u4E92\u5F0F\u4F9D\u8D56\u56FE\u751F\u6210\u5668\u3002\r
* [ruby-lint](https://github.com/YorickPeterse/ruby-lint) - Ruby \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\r
* [rubycritic](https://github.com/whitesmith/rubycritic) - Ruby \u4EE3\u7801\u8D28\u91CF\u62A5\u544A\u5668\r
* [SandiMeter](https://github.com/makaroni4/sandi_meter) - \u7528\u4E8E\u68C0\u67E5 Ruby \u4EE3\u7801\u662F\u5426\u7B26\u5408 Sandi Metz \u89C4\u5219\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\u3002\r
\r
## \u9508\r
\r
* [clippy](https://github.com/Manishearth/rust-clippy) - \u4E00\u4E2A\u4EE3\u7801\u68C0\u67E5\u5668\uFF0C\u7528\u4E8E\u6355\u6349\u5E38\u89C1\u9519\u8BEF\u5E76\u6539\u8FDB\u4F60\u7684 Rust \u4EE3\u7801\u3002\r
* [electrolysis](https://github.com/Kha/electrolysis) - \u4E00\u79CD\u901A\u8FC7\u5C06 Rust \u7A0B\u5E8F\u8F6C\u6362\u4E3A Lean \u5B9A\u7406\u8BC1\u660E\u5668\u4E2D\u7684\u5B9A\u4E49\u6765\u5BF9\u5176\u8FDB\u884C\u5F62\u5F0F\u5316\u9A8C\u8BC1\u7684\u5DE5\u5177\u3002\r
* [herbie](https://github.com/mcarton/rust-herbie-lint) - \u4F7F\u7528\u6570\u503C\u4E0D\u7A33\u5B9A\u7684\u6D6E\u70B9\u8868\u8FBE\u5F0F\u65F6\u5411\u60A8\u7684\u677F\u6761\u7BB1\u6DFB\u52A0\u8B66\u544A\u6216\u9519\u8BEF\u3002\r
* [linter-rust](https://github.com/AtomLinter/linter-rust) - \u4F7F\u7528 rustc \u548C cargo \u5728 Atom \u4E2D\u5BF9 Rust \u6587\u4EF6\u8FDB\u884C Linting\r
* [Rust \u8BED\u8A00\u670D\u52A1\u5668](https://github.com/rust-lang-nursery/rls) - \u652F\u6301\u201Cgoto \u5B9A\u4E49\u201D\u3001\u7B26\u53F7\u641C\u7D22\u3001\u91CD\u65B0\u683C\u5F0F\u5316\u548C\u4EE3\u7801\u5B8C\u6210\u7B49\u529F\u80FD\uFF0C\u5E76\u652F\u6301\u91CD\u547D\u540D\u548C\u91CD\u6784\u3002\r
* [rustfix](https://github.com/killercup/rustfix) - \u9605\u8BFB\u5E76\u5E94\u7528 rustc\uFF08\u4EE5\u53CA\u7B2C\u4E09\u65B9 lint\uFF0C\u5982 clippy \u63D0\u4F9B\u7684\u5EFA\u8BAE\uFF09\u63D0\u51FA\u7684\u5EFA\u8BAE\u3002\r
\r
Scala \u7684\r
\r
* [linter](https://github.com/HairyFotr/linter) - Linter \u662F\u4E00\u4E2A Scala \u9759\u6001\u5206\u6790\u7F16\u8BD1\u5668\u63D2\u4EF6\uFF0C\u5B83\u6DFB\u52A0\u4E86\u9488\u5BF9\u5404\u79CD\u53EF\u80FD\u7684\u9519\u8BEF\u3001\u6548\u7387\u4F4E\u4E0B\u548C\u98CE\u683C\u95EE\u9898\u7684\u7F16\u8BD1\u65F6\u68C0\u67E5\u3002\r
* [Scalastyle](http://www.scalastyle.org) - Scalastyle \u68C0\u67E5\u4F60\u7684 Scala \u4EE3\u7801\u5E76\u6307\u51FA\u5176\u4E2D\u7684\u6F5C\u5728\u95EE\u9898\u3002\r
* [scapegoat](https://github.com/sksamuel/scapegoat) - \u7528\u4E8E\u9759\u6001\u4EE3\u7801\u5206\u6790\u7684 Scala \u7F16\u8BD1\u5668\u63D2\u4EF6\r
* [WartRemover](https://github.com/puffnfresh/wartremover) - \u4E00\u4E2A\u7075\u6D3B\u7684 Scala \u4EE3\u7801\u68C0\u67E5\u5DE5\u5177\u3002\r
\r
\uFF03\uFF03 \u58F3\r
\r
* [i-Code CNES for Shell](https://github.com/lequal/i-CodeCNES) - \u4E00\u4E2A\u9488\u5BF9 Shell \u548C Fortran (77 \u548C 90) \u7684\u5F00\u6E90\u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\u3002\r
* [shellcheck](https://github.com/koalaman/shellcheck) - ShellCheck\uFF0C\u4E00\u4E2A\u4E3A bash/sh shell \u811A\u672C\u63D0\u4F9B\u8B66\u544A\u548C\u5EFA\u8BAE\u7684\u9759\u6001\u5206\u6790\u5DE5\u5177\r
\r
\u575A\u56FA\u6027\r
\r
* [solium](https://github.com/duaraghav8/Solium) - Solium \u662F\u4E00\u4E2A\u7528\u4E8E\u8BC6\u522B\u548C\u4FEE\u590D Solidity \u667A\u80FD\u5408\u7EA6\u98CE\u683C\u548C\u5B89\u5168\u95EE\u9898\u7684 linter \u5DE5\u5177\u3002\r
\r
SQL \u8BED\u53E5\r
\r
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - \u81EA\u52A8\u8BC6\u522B SQL \u67E5\u8BE2\u4E2D\u7684\u53CD\u6A21\u5F0F\r
* [sqlint](https://github.com/purcell/sqlint) - \u7B80\u5355\u7684 SQL linter\r
* [tsqllint](https://github.com/tsqllint/tsqllint) - \u7279\u5B9A\u4E8E T-SQL \u7684 linter\r
* [TSqlRules](https://github.com/ashleyglee/TSqlRules) - SQL Server \u7684 TSQL \u9759\u6001\u4EE3\u7801\u5206\u6790\u89C4\u5219\r
\r
\u8FC5\u901F\r
\r
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - \u7528\u4E8E\u91CD\u65B0\u683C\u5F0F\u5316 Swift \u4EE3\u7801\u7684\u5E93\u548C\u547D\u4EE4\u884C\u683C\u5F0F\u5316\u5DE5\u5177\r
* [SwiftLint](https://github.com/realm/SwiftLint) - \u5F3A\u5236\u6267\u884C Swift \u98CE\u683C\u548C\u7EA6\u5B9A\u7684\u5DE5\u5177\r
* [Tailor](https://github.com/sleekbyte/tailor) - \u7528 Apple \u7684 Swift \u7F16\u7A0B\u8BED\u8A00\u7F16\u5199\u7684\u6E90\u4EE3\u7801\u9759\u6001\u5206\u6790\u548C lint \u5DE5\u5177\u3002\r
\r
TypeScript\r
\r
* [Codelyzer](https://github.com/mgechev/codelyzer) - \u4E00\u7EC4\u7528\u4E8E Angular 2 TypeScript \u9879\u76EE\u9759\u6001\u4EE3\u7801\u5206\u6790\u7684 tslint \u89C4\u5219\u3002\r
* [TSLint](https://github.com/palantir/tslint) - TypeScript \u8BED\u8A00\u7684\u53EF\u6269\u5C55 linter\u3002\r
* [tslint-clean-code](https://github.com/Glavin001/tslint-clean-code) - \u4E00\u7EC4\u53D7 Clean Code \u624B\u518C\u542F\u53D1\u7684 TSLint \u89C4\u5219\u3002\r
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) - \u5FAE\u8F6F\u7EF4\u62A4\u7684\u4E00\u5957\u7528\u4E8E TypeScript \u9879\u76EE\u9759\u6001\u4EE3\u7801\u5206\u6790\u7684 tslint \u89C4\u5219\u3002\r
\r
VBScript\r
\r
* [\u6D4B\u8BD5\u8BBE\u8BA1\u5DE5\u4F5C\u5BA4]\uFF08http://patterson-consulting.net/tds\uFF09\uFF1A\u7248\u6743\u6240\u6709\uFF1A - \u4E00\u4E2A\u5B8C\u6574\u7684 IDE\uFF0C\u5177\u6709\u9759\u6001\u4EE3\u7801\u5206\u6790\u529F\u80FD\uFF0C\u9002\u7528\u4E8E\u57FA\u4E8E Micro Focus Unified Funtional Testing VBScript \u7684\u81EA\u52A8\u5316\u6D4B\u8BD5\u3002\r
\r
# \u591A\u79CD\u8BED\u8A00\r
\r
* [AppChecker](https://npo-echelon.ru/en/solutions/appchecker.php) :copyright: - \u5BF9 C/C++/C#\u3001PHP \u548C Java \u8FDB\u884C\u9759\u6001\u5206\u6790\r
* [\u5E94\u7528\u7A0B\u5E8F\u68C0\u67E5\u5668](https://www.ptsecurity.com/ww-en/products/ai/) :copyright: - \u7ED3\u5408 SAST\u3001DAST\u3001IAST \u5B89\u5168\u626B\u63CF\u5668\uFF0C\u9002\u7528\u4E8E C#\u3001PHP\u3001Java\u3001SQL \u8BED\u8A00\r
* [AppScan](https://www.ibm.com/support/knowledgecenter/en/SSS9LM_9.0.3/com.ibm.rational.appscansrc.install.doc/topics/system_requirements_language_support.html) :copyright: - \u5546\u4E1A\u9759\u6001\u4EE3\u7801\u5206\u6790\u3002\u652F\u6301\uFF1AMicrosoft .NET Framework\uFF08C#\u3001ASP.NET\u3001VB.NET\uFF09\u3001ASP\uFF08JavaScript/VBScript\uFF09\u3001C/C++\u3001COBOL\u3001ColdFusion\u3001JavaScript\u3001JavaServer Pages\uFF08JSP\uFF09\u3001Java\u2122\uFF08\u5305\u62EC\u5BF9 Android API \u7684\u652F\u6301\uFF09\u3001Perl\u3001PHP\u3001PL/SQL\u3001T-SQL\u3001Visual Basic 6\r
* [APPscreener](https://appscreener.us) :copyright: - \u4E8C\u8FDB\u5236\u548C\u6E90\u4EE3\u7801\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790 - Java/Scala\u3001PHP\u3001Javascript\u3001C#\u3001PL/SQL\u3001Python\u3001T-SQL\u3001C/C++\u3001ObjectiveC/Swift\u3001Visual Basic 6.0\u3001Ruby\u3001Delphi\u3001ABAP\u3001HTML5 \u548C Solidity\r
* [Axivion Bauhaus Suite](https://www.axivion.com/en/products-services-9#products_bauhaussuite) :copyright: - \u8FFD\u8E2A C/C++\u3001C#/.NET\u3001Java \u548C Ada 83/Ada 95 \u4E2D\u5BB9\u6613\u51FA\u9519\u7684\u4EE3\u7801\u4F4D\u7F6E\u3001\u6837\u5F0F\u8FDD\u89C4\u3001\u514B\u9686\u6216\u6B7B\u4EE3\u7801\u3001\u5FAA\u73AF\u4F9D\u8D56\u7B49\r
* [Checkmarx](https://www.checkmarx.com/technology/supported-coding-languages/) :copyright: - \u65E0\u9700\u9884\u7F16\u8BD1\u7684\u5546\u4E1A\u9759\u6001\u4EE3\u7801\u5206\u6790\u3002\u652F\u6301\uFF1AAndroid (Java)\u3001Apex \u548C VisualForce\u3001ASP\u3001C#\u3001C/C++\u3001Go\u3001Groovy\u3001HTML5\u3001Java\u3001JavaScript\u3001Node.js\u3001Objective C\u3001Perl\u3001PhoneGap\u3001PHP\u3001Python\u3001Ruby\u3001Scala\u3001Swift\u3001VB.NET\u3001VB6\u3001VBScript\r
* [coala](https://coala.io/) - \u7528\u4E8E\u521B\u5EFA\u4EE3\u7801\u5206\u6790\u7684\u72EC\u7ACB\u4E8E\u8BED\u8A00\u7684\u6846\u67B6 - \u9ED8\u8BA4\u652F\u6301[\u8D85\u8FC7 60 \u79CD\u8BED\u8A00](https://coala.io/languages)\r
* [Cobra](http://spinroot.com/cobra/) :copyright: - \u7F8E\u56FD\u5B87\u822A\u5C40\u55B7\u6C14\u63A8\u8FDB\u5B9E\u9A8C\u5BA4\u7684\u7ED3\u6784\u6E90\u4EE3\u7801\u5206\u6790\u5668\u3002\u652F\u6301 C\u3001C++\u3001Ada \u548C Python\u3002\r
* [codeburner](https://github.com/groupon/codeburner) - \u63D0\u4F9B\u7EDF\u4E00\u7684\u754C\u9762\uFF0C\u5BF9\u53D1\u73B0\u7684\u95EE\u9898\u8FDB\u884C\u6392\u5E8F\u548C\u5904\u7406\r
* [CodeFactor](https://codefactor.io) :copyright: - \u9488\u5BF9 C#\u3001C\u3001C++\u3001CoffeeScript\u3001CSS\u3001Groovy\u3001GO\u3001JAVA\u3001JavaScript\u3001Less\u3001Python\u3001Ruby\u3001Scala\u3001SCSS\u3001TypeScript \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u3002\r
* [CodeIt.Right](https://submain.com/products/codeit.right.aspx) :copyright: - CodeIt.Right\u2122 \u63D0\u4F9B\u4E00\u79CD\u5FEB\u901F\u3001\u81EA\u52A8\u5316\u7684\u65B9\u6CD5\u6765\u786E\u4FDD\u60A8\u7684\u6E90\u4EE3\u7801\u7B26\u5408\uFF08\u60A8\u7684\uFF09\u9884\u5B9A\u4E49\u7684\u8BBE\u8BA1\u548C\u6837\u5F0F\u6307\u5357\u4EE5\u53CA\u6700\u4F73\u7F16\u7801\u5B9E\u8DF5\u3002\u652F\u6301\u7684\u8BED\u8A00\uFF1AC#\u3001VB.NET\u3002\r
* [cqc](https://github.com/xcatliu/cqc) - \u68C0\u67E5 js\u3001jsx\u3001vue\u3001css\u3001less\u3001scss\u3001sass \u548C styl \u6587\u4EF6\u7684\u4EE3\u7801\u8D28\u91CF\u3002\r
* [DevSkim](https://github.com/microsoft/devskim) - \u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684 Visual Studio\u3001VS Code \u548C Sublime Text \u9759\u6001\u5206\u6790\u5DE5\u5177 - C/C++\u3001C#\u3001PHP\u3001ASP\u3001Python\u3001Ruby\u3001Java \u7B49\u3002\r
* [Fortify](https://software.microfocus.com/en-us/products/static-code-analysis-sast/overview) :copyright: \u4E00\u4E2A\u5546\u4E1A\u9759\u6001\u5206\u6790\u5E73\u53F0\uFF0C\u652F\u6301 C/C++\u3001C#\u3001VB.NET\u3001VB6\u3001ABAP/BSP\u3001ActionScript\u3001Apex\u3001ASP.NET\u3001Classic ASP\u3001VB Script\u3001Cobol\u3001ColdFusion\u3001HTML\u3001Java\u3001JS\u3001JSP\u3001MXML/Flex\u3001Objective-C\u3001PHP\u3001PL/SQL\u3001T-SQL\u3001Python (2.6\u30012.7)\u3001Ruby (1.9.3)\u3001Swift\u3001Scala\u3001VB \u548C XML \u7684\u626B\u63CF\u3002\r
* [Goodcheck](https://github.com/sideci/goodcheck) - \u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u53EF\u5B9A\u5236 linter\r
* [graudit](https://github.com/wireghoul/graudit) - Grep \u7C97\u5BA1\u8BA1 - \u6E90\u4EE3\u7801\u5BA1\u8BA1\u5DE5\u5177 - C/C++, PHP, ASP, C#, Java, Perl, Python, Ruby\r
* [Hound CI](https://houndci.com/) - \u5BF9 GitHub \u62C9\u53D6\u8BF7\u6C42\u4E2D\u7684\u6837\u5F0F\u8FDD\u89C4\u8FDB\u884C\u8BC4\u8BBA\u3002\u652F\u6301 Coffeescript\u3001Go\u3001HAML\u3001JavaScript\u3001Ruby\u3001SCSS \u548C Swift\u3002\r
* [imhotep](https://github.com/justinabrahms/imhotep) - \u8BC4\u8BBA\u8FDB\u5165\u60A8\u5B58\u50A8\u5E93\u7684\u63D0\u4EA4\u5E76\u68C0\u67E5\u8BED\u6CD5\u9519\u8BEF\u548C\u5E38\u89C4 lint \u8B66\u544A\u3002\r
* [Infer](https://github.com/facebook/infer) - Java\u3001C \u548C Objective-C \u7684\u9759\u6001\u5206\u6790\u5668\r
* [Klocwork](http://www.klocwork.com/products-services/klocwork) :copyright: - \u9488\u5BF9 C/C++\u3001Java \u548C C# \u7684\u8D28\u91CF\u548C\u5B89\u5168\u9759\u6001\u5206\u6790\r
* [Kiuwan](https://www.kiuwan.com/code-security-sast/) :copyright: - \u5728\u6781\u5FEB\u7684\u534F\u4F5C\u73AF\u5883\u4E2D\u8BC6\u522B\u548C\u8865\u6551\u7F51\u7EDC\u5A01\u80C1\uFF0C\u5E76\u65E0\u7F1D\u96C6\u6210\u5230\u60A8\u7684 SDLC \u4E2D\u3002Python\u3001C\\C++\u3001Java\u3001C#\u3001PHP \u7B49\r
* [oclint](https://github.com/oclint/oclint) - \u4E00\u4E2A\u9759\u6001\u6E90\u4EE3\u7801\u5206\u6790\u5DE5\u5177\uFF0C\u7528\u4E8E\u63D0\u9AD8 C\u3001C++ \u548C Objective-C \u7684\u8D28\u91CF\u5E76\u51CF\u5C11\u7F3A\u9677\u3002\r
* [pfff](https://github.com/facebook/pfff) - Facebook \u7528\u4E8E\u591A\u79CD\u8BED\u8A00\u7684\u4EE3\u7801\u5206\u6790\u3001\u53EF\u89C6\u5316\u6216\u4FDD\u7559\u6837\u5F0F\u7684\u6E90\u8F6C\u6362\u7684\u5DE5\u5177\r
* [PMD](https://pmd.github.io/) - Java\u3001Javascript\u3001PLSQL\u3001XML\u3001XSL \u7B49\u6E90\u4EE3\u7801\u5206\u6790\u5668\r
* [Pronto](https://github.com/prontolabs/pronto) - \u5FEB\u901F\u81EA\u52A8\u5BA1\u67E5\u4EE3\u7801\u53D8\u66F4\u3002\u652F\u6301 40 \u591A\u79CD\u8BED\u8A00\u7684\u8FD0\u884C\u5668\uFF0C\u5305\u62EC Clang\u3001Elixir\u3001JavaSCript\u3001PHP\u3001Ruby \u7B49\r
* [pre-commit](https://github.com/pre-commit/pre-commit) - \u7528\u4E8E\u7BA1\u7406\u548C\u7EF4\u62A4\u591A\u8BED\u8A00\u9884\u63D0\u4EA4\u94A9\u5B50\u7684\u6846\u67B6\u3002\r
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) :\u7248\u6743\uFF1A - \u5BF9 C/C++ \u548C C# \u4EE3\u7801\u8FDB\u884C\u9759\u6001\u5206\u6790\uFF08[\u6709\u6761\u4EF6\u514D\u8D39](https://www.viva64.com/en/b/0457/) \u7528\u4E8E FOSS\uFF09\u3002\u51FA\u4E8E\u5E7F\u544A\u76EE\u7684 [\u60A8\u53EF\u4EE5\u63D0\u51FA\u4E00\u4E2A\u5927\u578B FOSS \u9879\u76EE\u4F9B PVS \u5458\u5DE5\u8FDB\u884C\u5206\u6790](https://github.com/viva64/pvs-studio-check-list)\u3002\r
* [\u5B89\u5168\u4EE3\u7801\u626B\u63CF](https://security-code-scan.github.io/) - C# \u548C VB.NET \u7684\u5B89\u5168\u4EE3\u7801\u5206\u6790\u5668\u3002\u68C0\u6D4B\u5404\u79CD\u5B89\u5168\u6F0F\u6D1E\u6A21\u5F0F\uFF1ASQLi\u3001XSS\u3001CSRF\u3001XXE\u3001Open Redirect \u7B49\u3002\r
* [shipshape](https://github.com/google/shipshape) - \u9759\u6001\u7A0B\u5E8F\u5206\u6790\u5E73\u53F0\uFF0C\u5141\u8BB8\u81EA\u5B9A\u4E49\u5206\u6790\u5668\u901A\u8FC7\u901A\u7528\u63A5\u53E3\u63D2\u5165\r
* [SonarQube](http://www.sonarqube.org/) - SonarQube \u662F\u4E00\u4E2A\u7BA1\u7406\u4EE3\u7801\u8D28\u91CF\u7684\u5F00\u653E\u5E73\u53F0\u3002\r
* [STOKE](https://github.com/StanfordPL/stoke) - \u4E00\u79CD\u4E0E\u7F16\u7A0B\u8BED\u8A00\u65E0\u5173\u7684\u968F\u673A\u4F18\u5316\u5668\uFF0C\u9002\u7528\u4E8E x86_64 \u6307\u4EE4\u96C6\u3002\u5B83\u4F7F\u7528\u968F\u673A\u641C\u7D22\u6765\u63A2\u7D22\u6240\u6709\u53EF\u80FD\u7684\u7A0B\u5E8F\u8F6C\u6362\u7684\u6781\u9AD8\u7EF4\u7A7A\u95F4\r
* [Synopsys](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: - \u4E00\u4E2A\u5546\u4E1A\u9759\u6001\u5206\u6790\u5E73\u53F0\uFF0C\u5141\u8BB8\u626B\u63CF\u591A\u79CD\u8BED\u8A00\uFF08C/C++\u3001Android\u3001C#\u3001Java\u3001JS\u3001PHP\u3001Python\u3001Node.JS\u3001Ruby\u3001Fortran \u548C Swift\uFF09\r
* [TscanCode](https://github.com/Tencent/TscanCode) - \u817E\u8BAF\u63D0\u4F9B\u7684\u9488\u5BF9 C/C++\u3001C#\u3001Lua \u4EE3\u7801\u7684\u5FEB\u901F\u3001\u7CBE\u51C6\u9759\u6001\u5206\u6790\u89E3\u51B3\u65B9\u6848\u3002\u91C7\u7528 GPLv3 \u8BB8\u53EF\u3002\r
* [Undebt](https://github.com/Yelp/undebt) - \u57FA\u4E8E\u7B80\u5355\u6A21\u5F0F\u5B9A\u4E49\u8FDB\u884C\u5927\u89C4\u6A21\u3001\u81EA\u52A8\u3001\u53EF\u7F16\u7A0B\u91CD\u6784\u7684\u8BED\u8A00\u72EC\u7ACB\u5DE5\u5177\r
* [Veracode](http://www.veracode.com/products/static-analysis-sast/static-code-analysis) :copyright: - \u65E0\u9700\u6E90\u4EE3\u7801\u5373\u53EF\u67E5\u627E\u4E8C\u8FDB\u5236\u6587\u4EF6\u548C\u5B57\u8282\u7801\u4E2D\u7684\u7F3A\u9677\u3002\u652F\u6301\u6240\u6709\u4E3B\u6D41\u7F16\u7A0B\u8BED\u8A00\uFF1AJava\u3001.NET\u3001JavaScript\u3001Swift\u3001Objective-C\u3001C\u3001C++ \u7B49\u3002\r
* [WALA](http://wala.sourceforge.net/wiki/index.php/Main_Page) - Java \u5B57\u8282\u7801\u53CA\u76F8\u5173\u8BED\u8A00\u548C JavaScript \u7684\u9759\u6001\u5206\u6790\u529F\u80FD\r
* [Wotan](https://github.com/fimbullinter/wotan) - \u53EF\u63D2\u5165\u7684 TypeScript \u548C JavaScript linter\r
* [XCode](https://developer.apple.com/xcode/) :copyright: - XCode \u4E3A [Clang](http://clang-analyzer.llvm.org/xcode.html) \u9759\u6001\u4EE3\u7801\u5206\u6790\u5668 (C/C++, Obj-C) \u63D0\u4F9B\u4E86\u76F8\u5F53\u4E0D\u9519\u7684 UI\r
\r
\uFF03 \u5176\u4ED6\r
\r
\u6784\u5EFA\u5DE5\u5177\r
\r
* [checkmake](https://github.com/mrtazz/checkmake) - Makefile \u7684 Linter / \u5206\u6790\u5668\r
* [codechecker](https://github.com/Ericsson/codechecker) - Clang Static Analyzer \u7684\u7F3A\u9677\u6570\u636E\u5E93\u548C\u67E5\u770B\u5668\u6269\u5C55\r
\r
\u4E8C\u8FDB\u5236\u6587\u4EF6\r
\r
* [BinSkim](https://github.com/Microsoft/binskim) - \u4E00\u4E2A\u4E8C\u8FDB\u5236\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u4E3A Windows \u53EF\u79FB\u690D\u53EF\u6267\u884C\u6587\u4EF6\u63D0\u4F9B\u5B89\u5168\u6027\u548C\u6B63\u786E\u6027\u7ED3\u679C\u3002\r
* [Jakstab](https://github.com/jkinder/jakstab) - Jakstab \u662F\u4E00\u4E2A\u57FA\u4E8E\u62BD\u8C61\u89E3\u91CA\u7684\u96C6\u6210\u53CD\u6C47\u7F16\u548C\u9759\u6001\u5206\u6790\u6846\u67B6\uFF0C\u7528\u4E8E\u8BBE\u8BA1\u53EF\u6267\u884C\u6587\u4EF6\u7684\u5206\u6790\u5E76\u6062\u590D\u53EF\u9760\u7684\u63A7\u5236\u6D41\u56FE\u3002\r
* [Manalyze](https://github.com/JusticeRage/Manalyze) - \u9759\u6001\u5206\u6790\u5668\uFF0C\u7528\u4E8E\u68C0\u67E5\u53EF\u79FB\u690D\u53EF\u6267\u884C\u6587\u4EF6\u4E2D\u662F\u5426\u5B58\u5728\u6076\u610F\u5185\u5BB9\u3002\r
* [Twiggy](https://github.com/rustwasm/twiggy) - \u5206\u6790\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u8C03\u7528\u56FE\u4EE5\u5206\u6790\u4EE3\u7801\u5927\u5C0F\u3002\u76EE\u6807\u662F\u7CBE\u7B80\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002\r
\r
\r
\u5BB9\u5668\r
\r
* [anchore](https://anchore.io/) - \u53D1\u73B0\u3001\u5206\u6790\u548C\u8BA4\u8BC1\u5BB9\u5668\u955C\u50CF\r
* [clair](https://github.com/coreos/clair) - \u5BB9\u5668\u6F0F\u6D1E\u9759\u6001\u5206\u6790\r
* [collector](https://github.com/banyanops/collector) - \u5728\u5BB9\u5668\u5185\u8FD0\u884C\u4EFB\u610F\u811A\u672C\uFF0C\u5E76\u6536\u96C6\u6709\u7528\u7684\u4FE1\u606F\r
* [dagda](https://github.com/eliasgranderubio/dagda) - \u5BF9 docker \u955C\u50CF/\u5BB9\u5668\u4E2D\u5DF2\u77E5\u6F0F\u6D1E\u8FDB\u884C\u9759\u6001\u5206\u6790\u3002\r
* [Docker Label Inspector](https://github.com/garethr/docker-label-inspector) - \u68C0\u67E5\u5E76\u9A8C\u8BC1 Dockerfile \u6807\u7B7E\r
* [Haskell Dockerfile Linter](https://github.com/lukasmartinelli/hadolint) - \u66F4\u667A\u80FD\u7684 Dockerfile linter\uFF0C\u53EF\u5E2E\u52A9\u60A8\u6784\u5EFA\u6700\u4F73\u5B9E\u8DF5\u7684 Docker \u955C\u50CF\r
\r
## \u914D\u7F6E\u6587\u4EF6\r
\r
* [gixy](https://github.com/yandex/gixy) - \u4E00\u6B3E\u7528\u4E8E\u5206\u6790 Nginx \u914D\u7F6E\u7684\u5DE5\u5177\u3002\u4E3B\u8981\u76EE\u6807\u662F\u9632\u6B62\u9519\u8BEF\u914D\u7F6E\u5E76\u81EA\u52A8\u68C0\u6D4B\u7F3A\u9677\u3002\r
\r
\u914D\u7F6E\u7BA1\u7406\r
\r
* [ansible-lint](https://github.com/willthames/ansible-lint) - \u68C0\u67E5\u5267\u672C\u4E2D\u53EF\u80FD\u6539\u8FDB\u7684\u5B9E\u8DF5\u548C\u884C\u4E3A\r
* [cfn_nag](https://github.com/stelligent/cfn_nag) - \u7528\u4E8E AWS CloudFormation \u6A21\u677F\u7684 linter\u3002\r
* [foodcritic](http://www.foodcritic.io/) - \u4E00\u6B3E\u7528\u4E8E\u68C0\u67E5 Chef \u83DC\u8C31\u4E2D\u5E38\u89C1\u95EE\u9898\u7684 lint \u5DE5\u5177\u3002\r
* [Puppet Lint](https://github.com/rodjek/puppet-lint) - \u68C0\u67E5\u4F60\u7684 Puppet \u6E05\u5355\u662F\u5426\u7B26\u5408\u6837\u5F0F\u6307\u5357\u3002\r
\r
## CSS\r
\r
* [CSS \u7EDF\u8BA1](https://github.com/cssstats/cssstats) - \u6837\u5F0F\u8868\u4E0A\u53EF\u80FD\u6709\u8DA3\u7684\u7EDF\u8BA1\u6570\u636E\r
* [CSScomb](https://github.com/csscomb/csscomb.js) - CSS \u7F16\u7801\u6837\u5F0F\u683C\u5F0F\u5316\u7A0B\u5E8F\u3002\u652F\u6301\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u8BA9\u6837\u5F0F\u8868\u7F8E\u89C2\u4E00\u81F4\r
* [CSSLint](https://github.com/CSSLint/csslint) - \u8FDB\u884C\u57FA\u672C\u8BED\u6CD5\u68C0\u67E5\u5E76\u67E5\u627E\u6709\u95EE\u9898\u7684\u6A21\u5F0F\u6216\u6548\u7387\u4F4E\u4E0B\u7684\u8FF9\u8C61\r
* [Parker](https://github.com/katiefenn/parker) - \u6837\u5F0F\u8868\u5206\u6790\u5DE5\u5177\r
* [sass-lint](https://github.com/sasstools/sass-lint) - \u4EC5\u9002\u7528\u4E8E Node \u7684 Sass linter\uFF0C\u9002\u7528\u4E8E sass \u548C scss \u8BED\u6CD5\u3002\r
* [scsslint](https://github.com/brigade/scss-lint) - \u7528\u4E8E SCSS \u6587\u4EF6\u7684 Linter\r
* [\u7279\u5F02\u6027\u56FE]\uFF08https://github.com/pocketjoso/specificity-graph\uFF09 - CSS \u7279\u5F02\u6027\u56FE\u751F\u6210\u5668\r
* [Stylelint](http://stylelint.io/) - \u7528\u4E8E SCSS/CSS \u6587\u4EF6\u7684 Linter\r
\r
\u5C0F\u9EC4\u74DC\r
\r
* [gherkin-lint](https://github.com/vsiakka/gherkin-lint) - \u7528 Ja\u200B\u200Bvascript \u7F16\u5199\u7684 Gherkin-Syntax \u7684 linter\u3002\r
\r
HTML\r
\r
* [HTML Inspector](https://github.com/philipwalton/html-inspector) - HTML Inspector \u662F\u4E00\u4E2A\u4EE3\u7801\u8D28\u91CF\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u60A8\u548C\u60A8\u7684\u56E2\u961F\u7F16\u5199\u66F4\u597D\u7684\u6807\u8BB0\u3002\r
* [HTML Tidy](http://www.html-tidy.org/) - \u901A\u8FC7\u4FEE\u590D\u6807\u8BB0\u9519\u8BEF\u5E76\u5C06\u9057\u7559\u4EE3\u7801\u5347\u7EA7\u5230\u73B0\u4EE3\u6807\u51C6\u6765\u7EA0\u6B63\u548C\u6E05\u7406 HTML \u548C XML \u6587\u6863\u3002\r
* [HTMLHint](https://github.com/yaniswang/HTMLHint) - HTML \u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\r
* [Polymer-analyzer](https://github.com/Polymer/polymer-analyzer) - \u4E00\u4E2A\u9488\u5BF9 Web \u7EC4\u4EF6\u7684\u9759\u6001\u5206\u6790\u6846\u67B6\u3002\r
\r
\r
IDE \u63D2\u4EF6\r
\r
* [ale](https://github.com/w0rp/ale) - \u7528\u4E8E Vim \u548C NeoVim \u7684\u5F02\u6B65 Lint \u5F15\u64CE\uFF0C\u652F\u6301\u591A\u79CD\u8BED\u8A00\r
* [Attackflow Extension](https://www.attackflow.com/Extension) :copyright: - Visual Studio \u7684 Attackflow \u63D2\u4EF6\uFF0C\u4F7F\u5F00\u53D1\u4EBA\u5458\u65E0\u9700\u4EFB\u4F55\u5148\u9A8C\u77E5\u8BC6\u5373\u53EF\u5728\u6E90\u4EE3\u7801\u4E2D\u5B9E\u65F6\u67E5\u627E\u5173\u952E\u7684\u5B89\u5168\u6F0F\u6D1E\u3002\r
* [DevSkim](https://github.com/Microsoft/DevSkim) - \u5185\u8054\u3001\u5B9E\u65F6\u5B89\u5168\u5206\u6790\u3002\u9002\u7528\u4E8E\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u548C IDE\uFF08VS\u3001VS Code\u3001Sublime Text \u7B49\uFF09\u3002\r
* [Puma Scan](https://github.com/pumasecurity/puma-scan) - \u5F53\u5F00\u53D1\u56E2\u961F\u5728 Visual Studio \u4E2D\u7F16\u5199\u4EE3\u7801\u65F6\uFF0CPuma Scan \u4E3A\u5E38\u89C1\u6F0F\u6D1E\uFF08XSS\u3001SQLi\u3001CSRF\u3001LDAPi\u3001\u52A0\u5BC6\u3001\u53CD\u5E8F\u5217\u5316\u7B49\uFF09\u63D0\u4F9B\u5B9E\u65F6\u5B89\u5168\u4EE3\u7801\u5206\u6790\u3002\r
* [\u5B89\u5168\u4EE3\u7801\u626B\u63CF](https://security-code-scan.github.io/) - \u96C6\u6210\u5230 Visual Studio 2015 \u53CA\u66F4\u65B0\u7248\u672C\u7684 C# \u548C VB.NET \u5B89\u5168\u4EE3\u7801\u5206\u6790\u5668\u3002\u68C0\u6D4B\u5404\u79CD\u5B89\u5168\u6F0F\u6D1E\u6A21\u5F0F\uFF1ASQLi\u3001XSS\u3001CSRF\u3001XXE\u3001Open Redirect \u7B49\u3002\r
* [vint](https://github.com/Kuniwak/vint) \u2013 \u7531 Python \u5B9E\u73B0\u7684\u5FEB\u901F\u4E14\u9AD8\u5EA6\u53EF\u6269\u5C55\u7684 Vim \u811A\u672C\u8BED\u8A00 Lint\u3002\r
\r
\uFF03\uFF03 \u4E73\u80F6\r
\r
* [ChkTeX](http://www.nongnu.org/chktex/) - LaTex \u7684 linter\uFF0C\u53EF\u4EE5\u6355\u83B7 LaTeX \u76D1\u7763\u4E0B\u7684\u4E00\u4E9B\u5370\u5237\u9519\u8BEF\u3002\r
* [lacheck](https://www.ctan.org/pkg/lacheck) - \u7528\u4E8E\u67E5\u627E LaTeX \u6587\u6863\u4E2D\u5E38\u89C1\u9519\u8BEF\u7684\u5DE5\u5177\u3002\r
\r
## \u751F\u6210\u6587\u4EF6\r
\r
* [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) - FreeBSD \u548C DragonFlyBSD \u7AEF\u53E3\u76EE\u5F55\u7684\u9A8C\u8BC1\u7A0B\u5E8F\r
\r
## \u964D\u4EF7\r
\r
* [mdl](https://github.com/mivok/markdownlint) - \u7528\u4E8E\u68C0\u67E5 markdown \u6587\u4EF6\u5E76\u6807\u8BB0\u6837\u5F0F\u95EE\u9898\u7684\u5DE5\u5177\u3002\r
\r
\uFF03\uFF03 \u79FB\u52A8\u7684\r
\r
* [android-lint-summary](https://github.com/passy/android-lint-summary) - \u5C06\u591A\u4E2A\u9879\u76EE\u7684 lint \u9519\u8BEF\u5408\u5E76\u4E3A\u4E00\u4E2A\u8F93\u51FA\uFF0C\u4E00\u6B21\u68C0\u67E5\u591A\u4E2A\u5B50\u9879\u76EE\u7684 lint \u7ED3\u679C\u3002\r
* [FlowDroid](https://github.com/secure-software-engineering/soot-infoflow-android) - Android \u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u6C61\u70B9\u5206\u6790\u5DE5\u5177\r
* [paprika](https://github.com/GeoffreyHecht/paprika) - \u4E00\u4E2A\u7528\u4E8E\u68C0\u6D4B\u6240\u5206\u6790\u7684 Android \u5E94\u7528\u7A0B\u5E8F\u4E2D\u67D0\u4E9B\u4EE3\u7801\u5F02\u5473\u7684\u5DE5\u5177\u5305\u3002\r
* [qark](https://github.com/linkedin/qark) - \u7528\u4E8E\u67E5\u627E\u591A\u4E2A\u4E0E Android \u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u76F8\u5173\u7684\u6F0F\u6D1E\u7684\u5DE5\u5177\r
\r
## \u8F6F\u4EF6\u5305\r
\r
* [lintian](https://github.com/Debian/lintian) - Debian \u8F6F\u4EF6\u5305\u9759\u6001\u5206\u6790\u5DE5\u5177\r
* [rpmlint](https://github.com/rpm-software-management/rpmlint) - \u68C0\u67E5 rpm \u5305\u5E38\u89C1\u9519\u8BEF\u7684\u5DE5\u5177\r
\r
## \u652F\u6301\u5DE5\u5177\r
\r
* [LibVCS4j](https://github.com/uni-bremen-agst/libvcs4j) - \u4E00\u4E2A Java \u5E93\uFF0C\u901A\u8FC7\u4E3A\u4E0D\u540C\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u548C\u95EE\u9898\u8DDF\u8E2A\u5668\u63D0\u4F9B\u901A\u7528 API\uFF0C\u5141\u8BB8\u73B0\u6709\u5DE5\u5177\u5206\u6790\u8F6F\u4EF6\u7CFB\u7EDF\u7684\u6F14\u53D8\u3002\r
\r
## \u6A21\u677F\u8BED\u8A00\r
\r
* [ember-template-lint](https://github.com/rwjblue/ember-template-lint) - Ember \u6216 Handlebars \u6A21\u677F\u7684 Linter\u3002\r
* [haml-lint](https://github.com/brigade/haml-lint) - \u7528\u4E8E\u7F16\u5199\u5E72\u51C0\u3001\u4E00\u81F4\u7684 HAML \u7684\u5DE5\u5177\r
* [slim-lint](https://github.com/sds/slim-lint) - \u7528\u4E8E\u5206\u6790 Slim \u6A21\u677F\u7684\u53EF\u914D\u7F6E\u5DE5\u5177\r
* [yamllint](https://github.com/adrienverge/yamllint) - \u68C0\u67E5 YAML \u6587\u4EF6\u7684\u8BED\u6CD5\u6709\u6548\u6027\u3001\u5BC6\u94A5\u91CD\u590D\u548C\u5916\u89C2\u95EE\u9898\uFF08\u4F8B\u5982\u884C\u957F\u5EA6\u3001\u5C3E\u968F\u7A7A\u683C\u548C\u7F29\u8FDB\uFF09\u3002\r
\r
\uFF03\uFF03 \u7FFB\u8BD1\r
\r
* [dennis](https://github.com/willkg/dennis/) - \u4E00\u7EC4\u7528\u4E8E\u5904\u7406 PO \u6587\u4EF6\u7684\u5B9E\u7528\u7A0B\u5E8F\uFF0C\u53EF\u7B80\u5316\u5F00\u53D1\u5E76\u63D0\u9AD8\u8D28\u91CF\u3002\r
\r
\u5199\u4F5C\r
\r
* [misspell-fixer](https://github.com/vlajos/misspell-fixer) - \u7528\u4E8E\u4FEE\u590D\u6E90\u4EE3\u7801\u4E2D\u5E38\u89C1\u62FC\u5199\u9519\u8BEF\u548C\u9519\u522B\u5B57\u7684\u5FEB\u901F\u5DE5\u5177\r
* [proselint](https://github.com/amperser/proselint/) - \u4E00\u4E2A\u9488\u5BF9\u82F1\u8BED\u6563\u6587\u7684 linter\uFF0C\u4FA7\u91CD\u4E8E\u5199\u4F5C\u98CE\u683C\u800C\u4E0D\u662F\u8BED\u6CD5\u3002\r
* [vale](https://github.com/ValeLint/vale) - \u4E00\u4E2A\u53EF\u5B9A\u5236\u7684\u3001\u8BED\u6CD5\u611F\u77E5\u7684\u6563\u6587 linter\u3002\r
* [write-good](https://github.com/btford/write-good) - \u4E00\u6B3E\u4E13\u6CE8\u4E8E\u6D88\u9664\u201C\u6A21\u68F1\u4E24\u53EF\u7684\u8BCD\u8BED\u201D\u7684 linter\u3002\r
\r
Web \u670D\u52A1\r
\r
* [Attackflow](https://www.attackflow.com) :copyright: - \u5E94\u7528\u7A0B\u5E8F\u5B89\u5168\u6D4B\u8BD5\u5DE5\u5177\uFF0C\u5176\u89C4\u5219\u5206\u4E3A\u4E5D\u7C7B\uFF0C\u5305\u62EC\u6388\u6743\u3001\u6CE8\u5165\u3001\u52A0\u5BC6\u3001\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u4EE3\u7801\u8D28\u91CF\u3002\r
* [Bithound](https://www.bithound.io/) :copyright: - \u8D85\u8D8A Lint \u7684\u4EE3\u7801\u5206\u6790\uFF0C\u4E13\u95E8\u9488\u5BF9 Node.js\u3002\r
* [Codacy](https://www.codacy.com/) :copyright: - \u4EE3\u7801\u5206\u6790\u53EF\u4EE5\u66F4\u5FEB\u5730\u4EA4\u4ED8\u66F4\u597D\u7684\u4EE3\u7801\u3002\r
* [Code Climate](https://codeclimate.com/) :copyright: - \u5F00\u653E\u4E14\u53EF\u6269\u5C55\u7684\u9759\u6001\u5206\u6790\u5E73\u53F0\uFF0C\u9002\u5408\u6240\u6709\u4EBA\u3002\r
* [CodeFactor](https://codefactor.io) :copyright: - \u5BF9 GitHub \u6216 BitBucket \u4E0A\u7684\u5B58\u50A8\u5E93\u8FDB\u884C\u81EA\u52A8\u4EE3\u7801\u5206\u6790\u3002\r
* [Functor Prevent](http://www.functor.se/products/prevent/) :copyright: - C \u4EE3\u7801\u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\u3002\r
* [Gamma](https://mygamma.io) :copyright: - \u4E00\u4E2A\u667A\u80FD\u8F6F\u4EF6\u5206\u6790\u5E73\u53F0\uFF0C\u53EF\u4ECE\u591A\u4E2A\u89D2\u5EA6\u8BC6\u522B\u95EE\u9898\uFF1A\u8BBE\u8BA1\u95EE\u9898\u3001\u4EE3\u7801\u95EE\u9898\u3001\u91CD\u590D\u548C\u6307\u6807\u3002\u9002\u7528\u4E8E Java\u3001C\u3001C++ \u548C C#\u3002\r
* [kiuwan](https://www.kiuwan.com/) :copyright: - \u4E91\u7AEF\u8F6F\u4EF6\u5206\u6790\u652F\u6301\u8D85\u8FC7 22 \u79CD\u7F16\u7A0B\u8BED\u8A00\u3002\r
* [Landscape](https://landscape.io/) :copyright: - Python \u7684\u9759\u6001\u4EE3\u7801\u5206\u6790\r
* [Layered Insight](https://layeredinsight.com/) :copyright: - \u5BB9\u5668\u539F\u751F\u5E94\u7528\u7A0B\u5E8F\u4FDD\u62A4\uFF0C\u63D0\u4F9B\u5BB9\u5668\u5316\u5E94\u7528\u7A0B\u5E8F\u7684\u53EF\u89C1\u6027\u548C\u63A7\u5236\u3002\r
* [Nitpick CI](https://nitpick-ci.com) :copyright: - \u81EA\u52A8 PHP \u4EE3\u7801\u5BA1\u67E5\r
* [Node \u5B89\u5168\u5E73\u53F0](https://nodesecurity.io/) :copyright: - \u4E3A\u60A8\u7684\u8282\u70B9\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u6301\u7EED\u7684\u5B89\u5168\u76D1\u63A7\uFF08\u5BF9\u5F00\u6E90\u9879\u76EE\u514D\u8D39\uFF09\r
* [QuantifiedCode](https://www.quantifiedcode.com/) - \u81EA\u52A8\u4EE3\u7801\u5BA1\u67E5\u548C\u4FEE\u590D\r
* [Scrutinizer](https://scrutinizer-ci.com/) :copyright: - \u53EF\u4E0E GitHub \u96C6\u6210\u7684\u4E13\u6709\u4EE3\u7801\u8D28\u91CF\u68C0\u67E5\u5668\r
* [SensioLabs Insight](https://insight.sensiolabs.com/) :copyright: - \u68C0\u6D4B\u5B89\u5168\u98CE\u9669\u3001\u67E5\u627E\u9519\u8BEF\u5E76\u4E3A PHP \u9879\u76EE\u63D0\u4F9B\u53EF\u64CD\u4F5C\u7684\u6307\u6807\r
* [Sider](https://sider.review) :copyright: - \u4E00\u6B3E\u81EA\u52A8\u5316\u4EE3\u7801\u5BA1\u67E5\u5DE5\u5177\u3002\u63D0\u9AD8\u5F00\u53D1\u4EBA\u5458\u7684\u751F\u4EA7\u529B\u3002\r
* [Snyk](https://snyk.io/) :copyright: - \u7528\u4E8E node.js \u5E94\u7528\u7A0B\u5E8F\u4F9D\u8D56\u9879\u7684\u6F0F\u6D1E\u626B\u63CF\u7A0B\u5E8F\uFF08\u5BF9\u5F00\u6E90\u9879\u76EE\u514D\u8D39\uFF09\r
* [Teamscale](http://www.teamscale.com/) :copyright: - \u652F\u6301\u8D85\u8FC7 25 \u79CD\u8BED\u8A00\u548C\u76F4\u63A5 IDE \u96C6\u6210\u7684\u9759\u6001\u548C\u52A8\u6001\u5206\u6790\u5DE5\u5177\u3002\u53EF\u6839\u636E\u8981\u6C42\u63D0\u4F9B\u514D\u8D39\u7684\u5F00\u6E90\u9879\u76EE\u6258\u7BA1\u3002\u63D0\u4F9B\u514D\u8D39\u7684\u5B66\u672F\u8BB8\u53EF\u8BC1\u3002\r
* [Upsource](https://www.jetbrains.com/upsource/) :copyright: - \u5177\u6709\u9759\u6001\u4EE3\u7801\u5206\u6790\u548C\u9488\u5BF9 Java\u3001PHP\u3001JavaScript \u548C Kotlin \u7684\u4EE3\u7801\u611F\u77E5\u5BFC\u822A\u7684\u4EE3\u7801\u5BA1\u67E5\u5DE5\u5177\u3002\r
\r
# \u66F4\u591A\u5408\u96C6\r
\r
* [go-tools](https://github.com/dominikh/go-tools) - \u7528\u4E8E\u5904\u7406 Go \u4EE3\u7801\u7684\u5DE5\u5177\u548C\u5E93\u7684\u96C6\u5408\uFF0C\u5305\u62EC linters \u548C\u9759\u6001\u5206\u6790\r
* [linters](https://github.com/mcandre/linters) - \u9759\u6001\u4EE3\u7801\u5206\u6790\u7B80\u4ECB\r
* [php-static-analysis-tools](https://github.com/exakat/php-static-analysis-tools) - \u6709\u7528\u7684 PHP \u9759\u6001\u5206\u6790\u5DE5\u5177\u7684\u5217\u8868\r
* [C/C++ \u5DE5\u5177](https://www.peerlyst.com/posts/a-list-of-static-analysis-tools-for-cc-peerlyst?utm_source=twitter&utm_medium=social&utm_content=peerlyst_post&utm_campaign=peerlyst_resources) - C/C++ \u9759\u6001\u5206\u6790\u5DE5\u5177\u5217\u8868\r
* [\u7EF4\u57FA\u767E\u79D1](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) - \u9759\u6001\u4EE3\u7801\u5206\u6790\u5DE5\u5177\u5217\u8868\u3002\r
\r
\uFF03\uFF03 \u6267\u7167\r
\r
[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)\r
\r
\u5728\u6CD5\u5F8B\u5141\u8BB8\u7684\u8303\u56F4\u5185\uFF0C[Matthias Endler](http://matthias-endler.de) \u653E\u5F03\u4E86\u5BF9\u8BE5\u4F5C\u54C1\u7684\u6240\u6709\u7248\u6743\u4EE5\u53CA\u76F8\u5173\u6216\u90BB\u63A5\u7684\u6743\u5229\u3002\r
\u6807\u9898\u56FE\u7247[\u7531Freepik\u8BBE\u8BA1](http://www.freepik.com)\u3002\r
`;export{t as _};
