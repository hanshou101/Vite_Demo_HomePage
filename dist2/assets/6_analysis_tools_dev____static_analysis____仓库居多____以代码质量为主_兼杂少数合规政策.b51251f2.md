analysis-tools-dev/static-analysis: ⚙️ A curated list of static analysis (SAST) tools and linters for all programming languages, config files, build tools, and more. The focus is on tools which improve code quality.    https://github.com/analysis-tools-dev/static-analysis


<!-- 🚨🚨 不要直接编辑此文件。请改为编辑 `data/tools.yml`。🚨🚨 -->

 <a href="https://analysis-tools.dev/">
   <img alt="分析工具网站" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/redesign.svg" />
 </一>

此存储库列出了所有编程语言的**静态分析工具**、构建工具、配置文件等。重点介绍可提高代码质量的工具，例如 linters 和 formatter。
官方网站 [analysis-tools.dev](https://analysis-tools.dev/) 基于此存储库，并为每个工具添加了排名、用户评论和视频等附加资源。

[![网站](https://img.shields.io/badge/Website-Online-2B5BAE)](https://analysis-tools.dev)
![CI](https://github.com/analysis-tools-dev/static-analysis/workflows/CI/badge.svg)
[![链接](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml/badge.svg)](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml)

## 赞助商

如果没有我们赞助商的慷慨支持，这个项目就不可能实现。

<table>
   <tr>
      <td>
         <a href="https://bugprove.com">
            <图片>
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/bugprove-dark.svg">
               <img width="200px" alt="BugProve" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/bugprove-light.svg">
            </图片>
         </一>
      <td> 复制代码
      <td>
         <a href="https://www.betterscan.io">
            <图片>
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/betterscan-dark.svg">
               <img width="200px" alt="Betterscan" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/betterscan-light.svg">
            </图片>
         </一>
      <td> 复制代码
      <td>
         <a href="https://www.pixee.ai/">
            <图片>
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-light.png">
               <img width="200px" alt="Pixee" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-dark.png">
            </图片>
         </一>
      <td> 复制代码
      <td>
         <a href="https://coderabbit.ai">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/code-rabbit.svg" />
         </一>
      <td> 复制代码
      <td>
         <a href="https://semgrep.dev/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/semgrep.svg" />
         </一>
      <td> 复制代码
      <td>
         <a href="https://offensive360.com/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/offensive360.png" />
         </一>
      <td> 复制代码
   </tr>
</table>

如果您也想支持这个项目，请访问我们的 [Github 赞助商页面](https://github.com/sponsors/analysis-tools-dev)。

## 符号含义：

- :copyright: 代表专有软件。所有其他工具都是开源的。
- :information_source: 表示社区不再建议在新项目中使用该工具。图标链接到讨论问题。
- :warning: 表示此工具已超过 1 年没有更新，或者 repo 已被存档。

非常欢迎拉取请求！  
另请查看姊妹项目 [awesome-dynamic-analysis](https://github.com/mre/awesome-dynamic-analysis)。

＃＃ 目录

[编程语言](#programming-languages-1)


-[ABAP]（#abap）
- [艾达](#艾达)
- [汇编](#asm)
- [Awk](#awk)
- [C](#c)
- [C#](#csharp)
  -[C++]（#cpp）
- [Clojure](#clojure)
- [CoffeeScript](#coffeescript)
- [ColdFusion](#coldfusion)
- [水晶](#水晶)
- [Dart](#dart)
- [Delphi](#delphi)
- [Dlang](#dlang)
- [Elixir](#elixir)
- [Elm](#elm)
- [Erlang](#erlang)
- [F#](#fsharp)
- [Fortran](#fortran)
- [开始](#go)
- [Groovy](#groovy)
- [Haskell](#haskell)
- [Haxe](#haxe)
- [Java](#java)
- [JavaScript](#javascript)
- [朱莉娅](#julia)
- [Kotlin](#kotlin)
- [Lua](#lua)
  -[MATLAB]（MATLAB）
- [Nim](#nim)
- [Ocaml]（ocaml）
- [PHP](#php)
- [PL/SQL](#plsql)
- [Perl](#perl)
  -[Python]（python）
- [R](#r)
- [Rego](#rego)
- [Ruby](#ruby)
- [Rust](#rust)
- [SQL](#sql)
- [Scala](#scala)
- [Shell](#shell)
- [Swift](#swift)
- [Tcl](#tcl)
- [TypeScript](#typescript)
  -[Verilog/SystemVerilog]（Verilog）
- [Vim 脚本](#vim-script)

#### [多种语言](#multiple-languages-1)

#### [其他](#其他-1)
<详细信息>
 <summary>显示其他</summary>

- [.env](#dotenv)
- [Ansible](#ansible)
- [存档](#archive)
- [Azure 资源管理器](#arm)
- [二进制](#binary)
- [构建工具](#buildtool)
- [CSS/SASS/SCSS](#css)
- [配置文件](#configfile)
- [配置管理](#configmanagement)
- [容器](#container)
- [持续集成](#ci)
- [Deno](#deno)
- [嵌入](#embedded)
- [嵌入式 Ruby（又名 ERB、eRuby）](#erb)
- [小黄瓜](#小黄瓜)
- [HTML](#html)
- [JSON](#json)
- [Kubernetes](#kubernetes)
- [LaTeX](#latex)
- [Laravel](#laravel)
- [Makefile](#make)
- [Markdown](#markdown)
- [Metalinter](#meta)
- [移动](#mobile)
- [Nix](#nix)
- [Node.js](#nodejs)
- [软件包](#package)
- [普罗米修斯](#prometheus)
- [协议缓冲区](#protobuf)
- [傀儡](#puppet)
- [Rails](#rails)
- [安全/SAST](#security)
- [智能合约](#smart-contracts)
- [支持](#support)
- [模板语言](#template)
- [地形](#地形)
- [翻译](#translation)
- [Vue.js](#vue)
- [Webassembly](#wasm)
- [写作](#写作)
- [YAML](#yaml)
- [git](#git)
  </详情>

---

编程语言

<a 名称="abap" />
<h2>ABAP</h2>


- [abaplint](https://abaplint.org) — 用于 ABAP 的 Linter，用 TypeScript 编写。

- [abapOpenChecks](https://docs.abapopenchecks.org) — 通过新的和可定制的检查增强 SAP 代码检查器。


<a 名称="ada" />
<h2>艾达</h2>


- [Codepeer](https://www.adacore.com/static-analysis/codepeer) :copyright: — 检测运行时和逻辑错误。

- [Polyspace for Ada](https://www.mathworks.com/products/polyspace-ada.html) :copyright: — 提供代码验证，证明源代码中不存在溢出、除以零、越界数组访问和某些其他运行时错误。

- [SPARK](https://www.adacore.com/about-spark) :copyright: — Ada 的静态分析和形式验证工具集。


<a 名称="asm" />
<h2>组装</h2>


- [STOKE](https://github.com/StanfordPL/stoke) :warning: — 一种与编程语言无关的随机优化器，适用于 x86_64 指令集。它使用随机搜索来探索所有可能的程序转换的极高维空间。


<a 名称="awk" />
<h2>Awk</h2>


- [gawk --lint](https://www.gnu.org/software/gawk/manual/html_node/Options.html) — 警告那些可疑或无法移植到其他 awk 实现的构造。


<a 名称="c" />
<h2>C</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — Astrée 自动证明 C/C++ 应用程序中不存在运行时错误和无效并发行为。它适用于浮点计算，速度非常快，而且非常精确。该分析器还会检查 MISRA/CERT/CWE/Adaptive Autosar 编码规则，并支持符合 ISO 26262、DO-178C A 级和其他安全标准的资格。Jenkins 和 Eclipse 插件可用。

- [CBMC](http://www.cprover.org/cbmc) — 用于 C 程序的有界模型检查器、用户定义断言、标准断言、多个覆盖率指标分析。

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — 基于 Clang 的 C++ linter 工具，具有（有限的）修复问题的能力。

- [clazy](https://github.com/KDE/clazy) — 基于 Clang 框架的面向 Qt 的静态代码分析器。clazy 是一个编译器插件，允许 clang 理解 Qt 语义。您会收到 50 多个与 Qt 相关的编译器警告，从不需要的内存分配到 API 的误用，包括自动重构的修复程序。

- [CMetrics](https://github.com/MetricsGrimoire/CMetrics) — 测量 C 文件的大小和复杂性。

- [CPAchecker](https://cpachecker.sosy-lab.org) — 用于 C 程序的可配置软件验证工具。CPAchecker 这个名字是为了反映该工具基于 CPA 概念并用于检查软件程序。

- [cppcheck](https://cppcheck.sourceforge.io) — C/C++ 代码的静态分析。

- [CppDepend](https://www.cppdepend.com) :copyright: — 测量、查询和可视化您的代码，避免意外问题、技术债务和复杂性。

- [cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint) — 遵循 Google 风格指南的自动 C++ 检查器。

- [cqmetrics](https://github.com/dspinellis/cqmetrics) — C 代码的质量指标。

- [CScout](https://www.spinellis.gr/cscout) — C 和 C 预处理器代码的复杂性和质量指标。

- [ENRE-cpp](https://github.com/xjtu-enre/ENRE-cpp) — ENRE（ENtity Relationship Extractor）是一种从源代码中提取代码实体依赖关系或关系的工具。ENRE-cpp 是基于 @eclipse/CDT 的 C/C++ ENtity Relationship Extractor。（正在开发中）

- [ESBMC](http://esbmc.org) — ESBMC 是一个开源的、许可宽松的、基于可满足性模理论的上下文绑定模型检查器，用于验证单线程和多线程 C/C++ 程序。

- [flawfinder](http://dwheeler.com/flawfinder/) :warning: — 查找可能的安全漏洞。

- [flint++](https://github.com/JossWhittle/FlintPlusPlus) :warning: — 跨平台、零依赖的 flint 端口，一个由 Facebook 开发并使用的 C++ lint 程序。

- [Frama-C](https://www.frama-c.com) — 一个健全且可扩展的 C 代码静态分析器。

- [GCC](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html) — GCC 编译器自版本 10 起具有静态分析功能。仅当 GCC 配置为启用分析器支持时，此选项才可用。它还可以将其诊断结果输出到 SARIF 格式的 JSON 文件中（从 v13 开始）。

- [Goblint](https://goblint.in.tum.de) — 用于分析多线程 C 程序的静态分析器。它主要关注数据竞争检测，但也报告其他运行时错误，例如缓冲区溢出和空指针取消引用。

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — 嵌入式软件的企业级静态分析。支持 MISRA、CERT 和 AUTOSAR 编码标准。

- [IKOS](https://github.com/nasa-sw-vnv/ikos) — 基于 LLVM 的 C/C++ 代码健全静态分析器。

- [Joern](https://joern.io) — 基于代码属性图的 C/C++ 开源代码分析平台

- [KLEE](http://klee.github.io/) — 一个基于 LLVM 编译器基础架构构建的动态符号执行引擎。它可以自动生成程序的测试用例，以便测试用例尽可能多地执行程序。

- [LDRA](https://ldra.com) :copyright: — 一套包括对各种标准进行静态分析（TBVISION）的工具套件，包括 MISRA C & C++、JSF++ AV、CWE、CERT C、CERT C++ 和自定义规则。

- [MATE](https://galoisinc.github.io/MATE/) :warning: — 一套用于交互式程序分析的工具，专注于寻找 C 和 C++ 代码中的错误。MATE 使用代码属性图 (CPG) 统一特定于应用程序和低级漏洞分析，从而能够发现依赖于目标 C/C++ 程序的实现细节和高级语义的高度特定于应用程序的漏洞。

- [PC-lint](https://pclintplus.com/) :copyright: — C/C++ 静态分析。可在 Windows/Linux/MacOS 下本地运行。可分析几乎任何平台的代码，支持 C11/C18 和 C++17。

- [Phasar](https://phasar.org) — 一个基于 LLVM 的静态分析框架，带有污点和类型状态分析。

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — 识别 C 和 C++ 嵌入式软件中的运行时错误、并发问题、安全漏洞和其他缺陷。

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — 提供代码验证，证明 C 和 C++ 源代码中不存在溢出、除以零、越界数组访问和某些其他运行时错误。

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — 通过常规构建来驱动内置于 Clang 中的 Clang 静态分析器的前端。

- [splint](http://splint.org) — 注释辅助静态程序检查器。

- [SVF](https://svf-tools.github.io/SVF) — 一种静态工具，可对 C 和 C++ 程序进行可扩展且精确的过程间依赖性分析。

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — 全面检测编码错误及其相关的安全漏洞。这包括完善的未定义行为检测（缓冲区溢出、越界数组访问、空指针取消引用、释放后使用、除以零、未初始化的内存访问、有符号溢出、无效指针算法等）、数据流和控制流验证以及形式规范的完整功能验证。支持 C 到 C18 的所有版本和 C++ 到 C++20 的所有版本。TrustInSoft Analyzer 将于 2023 年第二季度获得 ISO 26262 认证（TCL3）。还捆绑了 MISRA C 检查器。

- [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) :warning: — Vera++ 是一个用于验证、分析和转换 C++ 源代码的可编程工具。


<a 名称="csharp" />
<h2>C#</h2>


- [.NET 分析器](https://github.com/DotNetAnalyzers) — 使用 .NET 编译器平台开发分析器（诊断和代码修复）的组织。

- [ArchUnitNET](https://github.com/TNG/ArchUnitNET) — C# 架构测试库，用于在 C# 中指定和断言架构规则以进行自动化测试。

- [code-cracker](https://code-cracker.github.io) — 一个用于 C# 和 VB 的分析器库，使用 Roslyn 进行重构、代码分析和其他细节功能。

- [CSharpEssentials](https://github.com/DustinCampbell/CSharpEssentials) :warning: — C# Essentials 是 Roslyn 诊断分析器、代码修复和重构的集合，可以轻松使用 C# 6 语言功能。

- [Designite](http://www.designite-tools.com) :copyright: — Designite 支持检测各种架构、设计和实现气味，计算各种代码质量指标，以及趋势分析。

- [Gendarme](https://www.mono-project.com/docs/tools+libraries/tools/gendarme) — Gendarme 检查包含 ECMA CIL 格式 (Mono 和 .NET) 代码的程序和库。

- [Infer#](https://github.com/microsoft/infersharp) :warning: — InferSharp（也称为 Infer#）是一款跨过程且可扩展的 C# 静态代码分析器。借助 Facebook 的 Infer 功能，此工具可检测空指针取消引用和资源泄漏。

- [Meziantou.Analyzer](https://github.com/meziantou/Meziantou.Analyzer) — 一个 Roslyn 分析器，用于在设计、使用、安全性、性能和风格方面强制执行 C# 中的一些良好实践。

- [NDepend](http://www.ndepend.com) :copyright: — 测量、查询和可视化您的代码并避免意外问题、技术债务和复杂性。

- [Puma Scan](https://pumasecurity.io) — 当开发团队在 Visual Studio 中编写代码时，Puma Scan 为常见漏洞（XSS、SQLi、CSRF、LDAPi、加密、反序列化等）提供实时安全代码分析。

- [Roslynator](https://github.com/JosefPihrt/Roslynator) — 由 Roslyn 提供支持的 190 多个 C# 分析器和 190 多个重构的集合。

- [SonarAnalyzer.CSharp](https://github.com/SonarSource/sonar-dotnet) — 这些 Roslyn 分析器可帮助您查找和纠正代码库中的错误、漏洞和代码异味，从而让您生成安全、可靠且可维护的干净代码。

- [VSDiagnostics](https://github.com/Vannevelj/VSDiagnostics) :warning: — 基于 Roslyn 的静态分析器集合，可与 VS 集成。

- [Wintellect.Analyzers](https://github.com/Wintellect/Wintellect.Analyzers) — .NET 编译器平台（“Roslyn”）诊断分析器和代码修复。


<a 名称="cpp" />
<h2>C++</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — Astrée 自动证明 C/C++ 应用程序中不存在运行时错误和无效并发行为。它适用于浮点计算，速度非常快，而且非常精确。该分析器还会检查 MISRA/CERT/CWE/Adaptive Autosar 编码规则，并支持符合 ISO 26262、DO-178C A 级和其他安全标准的资格。Jenkins 和 Eclipse 插件可用。

- [CBMC](http://www.cprover.org/cbmc) — 用于 C 程序的有界模型检查器、用户定义断言、标准断言、多个覆盖率指标分析。

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — 基于 Clang 的 C++ linter 工具，具有（有限的）修复问题的能力。

- [clazy](https://github.com/KDE/clazy) — 基于 Clang 框架的面向 Qt 的静态代码分析器。clazy 是一个编译器插件，允许 clang 理解 Qt 语义。您会收到 50 多个与 Qt 相关的编译器警告，从不需要的内存分配到 API 的误用，包括自动重构的修复程序。

- [CMetrics](https://github.com/MetricsGrimoire/CMetrics) — 测量 C 文件的大小和复杂性。

- [cppcheck](https://cppcheck.sourceforge.io) — C/C++ 代码的静态分析。

- [CppDepend](https://www.cppdepend.com) :copyright: — 测量、查询和可视化您的代码，避免意外问题、技术债务和复杂性。

- [cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint) — 遵循 Google 风格指南的自动 C++ 检查器。

- [cqmetrics](https://github.com/dspinellis/cqmetrics) — C 代码的质量指标。

- [CScout](https://www.spinellis.gr/cscout) — C 和 C 预处理器代码的复杂性和质量指标。

- [ENRE-cpp](https://github.com/xjtu-enre/ENRE-cpp) — ENRE（ENtity Relationship Extractor）是一种从源代码中提取代码实体依赖关系或关系的工具。ENRE-cpp 是基于 @eclipse/CDT 的 C/C++ ENtity Relationship Extractor。（正在开发中）

- [ESBMC](http://esbmc.org) — ESBMC 是一个开源的、许可宽松的、基于可满足性模理论的上下文绑定模型检查器，用于验证单线程和多线程 C/C++ 程序。

- [flawfinder](http://dwheeler.com/flawfinder/) :warning: — 查找可能的安全漏洞。

- [flint++](https://github.com/JossWhittle/FlintPlusPlus) :warning: — 跨平台、零依赖的 flint 端口，一个由 Facebook 开发并使用的 C++ lint 程序。

- [Frama-C](https://www.frama-c.com) — 一个健全且可扩展的 C 代码静态分析器。

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — 嵌入式软件的企业级静态分析。支持 MISRA、CERT 和 AUTOSAR 编码标准。

- [IKOS](https://github.com/nasa-sw-vnv/ikos) — 基于 LLVM 的 C/C++ 代码健全静态分析器。

- [Joern](https://joern.io) — 基于代码属性图的 C/C++ 开源代码分析平台

- [KLEE](http://klee.github.io/) — 一个基于 LLVM 编译器基础架构构建的动态符号执行引擎。它可以自动生成程序的测试用例，以便测试用例尽可能多地执行程序。

- [LDRA](https://ldra.com) :copyright: — 一套包括对各种标准进行静态分析（TBVISION）的工具套件，包括 MISRA C & C++、JSF++ AV、CWE、CERT C、CERT C++ 和自定义规则。

- [MATE](https://galoisinc.github.io/MATE/) :warning: — 一套用于交互式程序分析的工具，专注于寻找 C 和 C++ 代码中的错误。MATE 使用代码属性图 (CPG) 统一特定于应用程序和低级漏洞分析，从而能够发现依赖于目标 C/C++ 程序的实现细节和高级语义的高度特定于应用程序的漏洞。

- [PC-lint](https://pclintplus.com/) :copyright: — C/C++ 静态分析。可在 Windows/Linux/MacOS 下本地运行。可分析几乎任何平台的代码，支持 C11/C18 和 C++17。

- [Phasar](https://phasar.org) — 一个基于 LLVM 的静态分析框架，带有污点和类型状态分析。

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — 识别 C 和 C++ 嵌入式软件中的运行时错误、并发问题、安全漏洞和其他缺陷。

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — 提供代码验证，证明 C 和 C++ 源代码中不存在溢出、除以零、越界数组访问和某些其他运行时错误。

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — 通过常规构建来驱动内置于 Clang 中的 Clang 静态分析器的前端。

- [splint](http://splint.org) — 注释辅助静态程序检查器。

- [SVF](https://svf-tools.github.io/SVF) — 一种静态工具，可对 C 和 C++ 程序进行可扩展且精确的过程间依赖性分析。

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — 全面检测编码错误及其相关的安全漏洞。这包括完善的未定义行为检测（缓冲区溢出、越界数组访问、空指针取消引用、释放后使用、除以零、未初始化的内存访问、有符号溢出、无效指针算法等）、数据流和控制流验证以及形式规范的完整功能验证。支持 C 到 C18 的所有版本和 C++ 到 C++20 的所有版本。TrustInSoft Analyzer 将于 2023 年第二季度获得 ISO 26262 认证（TCL3）。还捆绑了 MISRA C 检查器。

- [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) :warning: — Vera++ 是一个用于验证、分析和转换 C++ 源代码的可编程工具。


<a 名称="clojure" />
<h2>Clojure</h2>


- [clj-kondo](https://github.com/borkdude/clj-kondo) — 一款能激发乐趣的 Clojure 代码 linter。它会在您输入时通知您可能遇到的错误。


<a name="coffeescript" />
<h2>CoffeeScript</h2>


- [coffeelint](https://coffeelint.github.io/) :warning: — 一种有助于保持 CoffeeScript 代码整洁和一致的样式检查器。


<a 名称="coldfusion" />
<h2>ColdFusion</h2>


- [Fixinator](https://fixinator.app) :copyright: — ColdFusion 或 CFML 代码的静态安全代码分析。设计用于在 CI 管道或开发人员终端内工作。


<a 名称="水晶" />
<h2>水晶</h2>


- [ameba](https://crystal-ameba.github.io) — Crystal 的静态代码分析工具。

- [crystal](https://crystal-lang.org) — Crystal 编译器具有内置的 linting 功能。


<a 名称="dart" />
<h2>飞镖</h2>


- [Dart 代码指标](https://pub.dev/packages/dart_code_metrics) :warning: — Dart 的附加 linter。报告代码指标、检查反模式并为 Dart 分析器提供附加规则。

- [effective_dart](https://pub.dev/packages/effective_dart) — 与 Effective Dart 中的指南相对应的 Linter 规则

- [lint](https://github.com/passsy/dart-lint) — 一套由社区驱动的、针对 Dart 和 Flutter 项目的 lint 规则。类似迂腐但更严格

- [dart 的 Linter](https://dart-lang.github.io/linter) — Dart 的样式 linter。


<a 名称="delphi" />
<h2>德尔福</h2>


- [DelphiLint](https://github.com/integrated-application-development/delphilint) — 一个 Delphi IDE 包，提供即时代码分析和 linting，由 SonarDelphi 提供支持。

- [Fix Insight](https://www.tmssoftware.com/site/fixinsight.asp) :copyright: — 用于静态代码分析的免费 IDE 插件。_Pro_ 版本包含用于自动化目的的命令行工具。

- [Pascal Analyzer](https://peganza.com/products_pal.html) :copyright: — 一款具有大量报告的静态代码分析工具。免费 _Lite_ 版本提供有限的报告。

- [Pascal Expert](https://peganza.com/products_pex.html) :copyright: — 用于代码分析的 IDE 插件。包括 Pascal Analyzer 报告功能的子集，适用于 Delphi 2007 及更高版本。

- [SonarDelphi](https://github.com/integrated-application-development/sonar-delphi) — 用于 SonarQube 代码质量平台的 Delphi 静态分析器。


<a 名称="dlang" />
<h2>Dlang</h2>


- [D-scanner](https://github.com/dlang-community/D-Scanner) — D-Scanner 是一个用于分析 D 源代码的工具。


<a name="elixir" />
<h2>灵丹妙药</h2>


- [credo](https://github.com/rrrene/credo) — 一款专注于代码一致性和教学的静态代码分析工具。

- [dialyxir](https://github.com/jeremyjh/dialyxir) — 混合任务以简化在 Elixir 项目中使用 Dialyzer 的操作。

- [sobelow](https://github.com/nccgroup/sobelow) — 针对 Phoenix 框架的安全静态分析。


<a 名称="榆树" />
<h2>榆树</h2>


- [elm-analyse](https://stil4m.github.io/elm-analyse) :warning: — 一种可让您分析 Elm 代码、识别缺陷并应用最佳实践的工具。

- [elm-review](https://package.elm-lang.org/packages/jfmengels/elm-review/latest) — 分析整个 Elm 项目，重点关注用 Elm 编写的可共享和自定义规则，这些规则增加了 Elm 编译器无法提供的保证。


<a 名称="erlang" />
<h2>Erlang</h2>


- [dialyzer](https://www.erlang.org/doc/man/dialyzer.html) — DIALYZER，用于 ERlang 程序的差异分析器。Dialyzer 是一种静态分析工具，可识别单个 Erlang 模块或整个（一组）应用程序中的软件差异，例如明确的类型错误、由于编程错误而变得死或无法访问的代码以及不必要的测试。
  Dialyzer 从调试编译的 BEAM 字节码或 Erlang 源代码开始分析。报告差异的文件和行号以及差异的原因。Dialyzer 基于成功类型概念进行分析，允许发出声音警告（无误报）。

- [elvis](https://github.com/inaka/elvis) — Erlang 风格审阅者。

- [原始 Erlang 安全工具 (PEST)](https://github.com/okeuday/pest) — 一种对 Erlang 源代码进行基本扫描并报告任何可能导致 Erlang 源代码不安全的函数调用的工具。


<a name="fsharp" />
<h2>F#</h2>


- [fantomas](https://fsprojects.github.io/fantomas/) — F# 源代码格式化程序。

- [FSharpLint](https://fsprojects.github.io/FSharpLint) — F# 的 Lint 工具。

- [ionide-analyzers](https://ionide.io/ionide-analyzers/) — 使用 FSharp.Analyzers.SDK 构建的 F# 分析器集合。


<a 名称="fortran" />
<h2>Fortran</h2>


- [fprettify](https://pypi.python.org/pypi/fprettify) — 用 Python 编写的现代 Fortran 源代码的自动格式化程序。
  Fprettify 是一种工具，它在代码中提供一致的空格、缩进和分隔符对齐，包括更改字母大小写和处理预处理器指令的能力，同时保留修订历史并经过编辑器集成测试。

- [i-Code CNES for Fortran](https://github.com/lequal/i-CodeCNES) — 适用于 Fortran 77、Fortran 90 和 Shell 的开源静态代码分析工具。


<a name="go" />
<h2>前往</h2>


- [aligncheck](https://gitlab.com/opennota/check) — 查找效率低下的打包结构。

- [bodyclose](https://github.com/timakin/bodyclose) — 检查 HTTP 响应主体是否已关闭。

- [deadcode](https://github.com/tsenart/deadcode) — 查找未使用的代码。

- [dingo-hunter](https://github.com/nickng/dingo-hunter) :warning: — 用于查找 Go 中死锁的静态分析器。

- [dogsled](https://github.com/alexkohler/dogsled) — 查找具有过多空白标识符的赋值/声明。

- [dupl](https://github.com/mibk/dupl) :warning: — 报告可能重复的代码。

- [errcheck](https://github.com/kisielk/errcheck) — 检查是否使用了错误返回值。

- [errwrap](https://github.com/fatih/errwrap) — 使用新的 %w verb 指令包装并修复 Go 错误。此工具分析 fmt.Errorf() 调用并报告包含与 Go v1.13 中引入的新 %w verb 指令不同的 verb 指令的调用。它还能够重写调用以使用新的 %w wrap verb 指令。

- [flen](https://github.com/lafolle/flen) — 获取有关 Go 包中函数长度的信息。

- [Go Meta Linter](https://github.com/alecthomas/gometalinter) :warning: — 同时运行 Go lint 工具并规范其输出。新项目请使用 `golangci-lint`。

- [go tool vet --shadow](https://golang.org/cmd/vet#hdr-Shadowed_variables) — 报告可能被无意中遮蔽的变量。

- [go vet](https://golang.org/cmd/vet) — 检查 Go 源代码并报告可疑内容。

- [go-consistent](https://github.com/Quasilyte/go-consistent) — 分析器可帮助您使 Go 程序更加一致。

- [go-critic](https://github.com/go-critic/go-critic) — Go 源代码 linter，用于维护其他 linter 中当前未实现的检查。

- [go/ast](https://golang.org/pkg/go/ast) — ast 包声明用于表示 Go 包语法树的类型。

- [goast](https://github.com/m-mizutani/goast) :warning: — 使用 Rego 的基于 Go AST（抽象语法树）的静态分析工具。

- [gochecknoglobals](https://github.com/leighmcculloch/gochecknoglobals) :warning: — 检查是否存在全局变量。

- [goconst](https://github.com/jgautheron/goconst) — 查找可以用常量替换的重复字符串。

- [gocyclo](https://github.com/fzipp/gocyclo) :warning: — 计算 Go 源代码中函数的圈复杂度。

- [gofmt -s](https://golang.org/cmd/gofmt) — 检查代码格式是否正确且无法进一步简化。

- [gofumpt](https://github.com/mvdan/gofumpt) — 强制执行比 `gofmt` 更严格的格式，同时向后兼容。也就是说，`gofumpt` 可以接受 `gofmt` 所接受的格式的子集。
  该工具是 Go 1.19 版“gofmt”的一个分支，需要 Go 1.18 或更高版本。它可以用作格式化 Go 代码的替代品，在 gofumpt 之后运行 gofmt 不会产生任何变化。
  `gofumpt` 永远不会添加与 `gofmt` 格式不一致的规则。所以我们扩展 `gofmt` 而不是与它竞争。

- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) — 检查缺失或未引用的包导入。

- [gokart](https://github.com/praetorian-inc/gokart) — Golang 安全分析，重点是尽量减少误报。它能够追踪变量和函数参数的来源，以确定输入源是否安全。

- [GolangCI-Lint](https://golangci-lint.run) — `Go Meta Linter` 的替代品：GolangCI-Lint 是一个 linters 聚合器。

- [golint](https://github.com/golang/lint) — 打印出 Go 源代码中的编码风格错误。

- [goreporter](https://github.com/360EntSecGroup-Skylar/goreporter) — 同时运行多个 linters 并将其输出规范化为报告。

- [goroutine-inspect](https://github.com/linuxerwang/goroutine-inspect) — 一个用于分析 Golang goroutine 转储的交互式工具。

- [gosec (gas)](https://securego.io) — 通过扫描 Go AST 检查源代码是否存在安全问题。

- [gotype](https://pkg.go.dev/golang.org/x/tools/cmd/gotype) — 与 Go 编译器类似的语法和语义分析。

- [govulncheck](https://go.dev/blog/vuln) — Govulncheck 报告影响 Go 代码的已知漏洞。它使用源代码或二进制文件的符号表的静态分析来将报告范围缩小到仅可能影响应用程序的漏洞。
  默认情况下，govulncheck 会向 https://vuln.go.dev 上的 Go 漏洞数据库发出请求。对漏洞数据库的请求仅包含模块路径，而不包含代码或程序的其他属性。

- [ineffassign](https://github.com/gordonklaus/ineffassign) — 检测 Go 代码中的无效分配。

- [interfacer](https://github.com/mvdan/interfacer) :warning: — 建议使用更窄的接口。

- [lll](https://github.com/walle/lll) :warning: — 报告长行。

- [maligned](https://github.com/mdempsky/maligned) :warning: — 检测那些如果字段排序后占用内存较少的结构。

- [misspell](https://github.com/client9/misspell) — 查找常见的拼写错误的英文单词。

- [nakedret](https://github.com/alexkohler/nakedret) — 查找裸回报。

- [nargs](https://github.com/alexkohler/nargs) — 查找函数声明中未使用的参数。

- [prealloc](https://github.com/alexkohler/prealloc) — 查找可能预分配的切片声明。

- [Reviewdog](https://github.com/haya14busa/reviewdog) — 用于在任何代码托管服务中发布来自任何 linter 的审核评论的工具。

- [revive](https://revive.run) — 快速、可配置、可扩展、灵活且美观的 Go 语言 linter。golint 的直接替代品。

- [safesql](https://github.com/stripe/safesql) :warning: — 用于防止 SQL 注入的 Golang 静态分析工具。

- [shisho](https://github.com/flatt-security/shisho) :warning: — 一款专为开发人员和安全团队设计的轻量级静态代码分析器。它允许您使用类似于 sed 的直观 DSL 分析和转换源代码，但针对的是代码。

- [staticcheck](https://staticcheck.io) — Go 静态分析，专门用于查找错误、简化代码和提高性能。

- [structcheck](https://gitlab.com/opennota/check) — 查找未使用的结构体字段。

- [structslop](https://github.com/orijtech/structslop) — Go 的静态分析器，建议重新排列结构字段，以提供最大的空间 / 分配效率

- [test](https://pkg.go.dev/testing) — 显示 stdlib 测试模块中测试失败的位置。

- [unconvert](https://github.com/mdempsky/unconvert) :warning: — 检测冗余类型转换。

- [unparam](https://github.com/mvdan/unparam) — 查找未使用的函数参数。

- [varcheck](https://gitlab.com/opennota/check) — 查找未使用的全局变量和常量。

- [wsl](https://github.com/bombsimon/wsl) — 在正确的位置强制使用空行。


<a 名称="groovy" />
<h2>Groovy</h2​​>


- [CodeNarc](https://codenarc.github.io/CodeNarc) — Groovy 源代码的静态分析工具，支持监控和执行许多编码标准和最佳实践。


<a name="haskell" />
<h2>哈斯克尔</h2>


- [brittany](https://github.com/lspitzner/brittany) :warning: — Haskell 源代码格式化程序

- [HLint](https://github.com/ndmitchell/hlint) — HLint 是一个用于对 Haskell 代码提出改进建议的工具。

- [Liquid Haskell](https://ucsd-progsys.github.io/liquidhaskell-blog/) — Liquid Haskell 是 Haskell 程序的细化类型检查器。

- [Stan](https://kowainik.github.io/projects/stan) — Stan 是一个命令行工具，用于分析 Haskell 项目并以有用的方式输出发现的漏洞以及检测到的问题的可能解决方案。

- [Weeder](https://github.com/ocharles/weeder) — 一种用于检测 Haskell 代码中的无效导出或包导入的工具。


<a 名称="haxe" />
<h2>斧头</h2>


- [Haxe Checkstyle](https://haxecheckstyle.github.io/docs/haxe-checkstyle/home.html) — 一种静态分析工具，帮助开发人员编写符合编码标准的 Haxe 代码。


<a 名称="java" />
<h2>Java</h2>


- [Checker Framework](https://checkerframework.org) — Java 的可插入类型检查。这不仅仅是一个错误查找器，还是一个保证正确性的验证工具。它带有 27 个预构建的类型系统，并允许用户定义自己的类型系统；手册列出了 30 多个用户贡献的类型系统。

- [checkstyle](https://checkstyle.org) — 检查 Java 源代码是否遵守代码标准或一组验证规则（最佳实践）。

- [ck](https://github.com/mauricioaniche/ck) — 通过处理源 Java 文件计算 Chidamber 和 Kemerer 面向对象度量。

- [ckjm](http://www.spinellis.gr/sw/ckjm) — 通过处理已编译 Java 文件的字节码来计算 Chidamber 和 Kemerer 面向对象度量。

- [CogniCrypt](https://www.eclipse.org/cognicrypt) — 检查 Java 源代码和字节码中是否存在加密 API 的错误使用。

- [Dataflow Framework](https://github.com/typetools/checker-framework) — 适用于 Java 的工业级数据流框架。Dataflow Framework 用于 Checker Framework、Google 的 Error Prone、Uber 的 NullAway、Meta 的 Nullsafe 以及其他环境中。它与 Checker Framework 一起发布。

- [DesigniteJava](http://www.designite-tools.com/designitejava) :copyright: — DesigniteJava 支持检测各种架构、设计和实现气味以及计算各种代码质量指标。

- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblue 是一家为软件开发团队提供人工智能代码分析和测试解决方案的软件公司。
  该公司的技术可帮助开发人员实现测试自动化、发现错误并减少软件开发过程中的人工劳动。该公司的主要产品 Diffblue Cover 使用人工智能来生成和运行 Java 代码的单元测试，帮助发现错误并提高代码质量。

- [Doop](https://bitbucket.org/yanniss/doop) — Doop 是一个用于静态分析 Java/Android 程序的声明式框架，以指针分析算法为中心。Doop 提供了各种各样的分析以及运行端到端分析（事实生成、处理、统计等）的周边脚手架。

- [ENRE-java](https://github.com/xjtu-enre/ENRE-java) — ENRE（ENtity Relationship Extractor）是一种从源代码中提取代码实体依赖关系或关系的工具。ENRE-java 是基于 @Eclipse JDT/parser 的 Java 项目的 ENtity Relationship Extractor。

- [Error Prone](https://errorprone.info) — 将常见的 Java 错误捕获为编译时错误。

- [fb-contrib](http://fb-contrib.sourceforge.net) — 一个带有附加错误检测器的 FindBugs 插件。

- [forbidden-apis](https://github.com/policeman-tools/forbidden-apis) — 检测并禁止特定方法/类/字段的调用（例如从没有字符集的文本流中读取）。兼容 Maven/Gradle/Ant。

- [google-java-format](https://github.com/google/google-java-format) — 重新格式化 Java 源代码以符合 Google Java 风格

- [HuntBugs](https://github.com/amaembo/huntbugs) :warning: — 基于 Procyon Compiler Tools 的字节码静态分析工具，旨在取代 FindBugs。

- [IntelliJ IDEA](https://www.jetbrains.com/idea) :copyright: — 捆绑了大量针对 Java 和 Kotlin 的检查，并包含重构、格式化等工具。

- [JArchitect](https://www.jarchitect.com) :copyright: — 测量、查询和可视化您的代码并避免意外问题、技术债务和复杂性。

- [JBMC](https://www.cprover.org/jbmc) — Java（字节码）的有界模型检查器，验证用户定义的断言、标准断言、多个覆盖率指标分析。

- [Mariana Trench](https://mariana-tren.ch/) — 我们针对 Android 和 Java 应用程序的安全而开发的静态分析工具。Mariana Trench 分析 Dalvik 字节码，可在大型代码库（数千万行代码）上快速运行。它可以在代码更改时发现漏洞，而这些漏洞甚至不会进入您的存储库。

- [NullAway](https://github.com/uber/NullAway) — 基于类型的空指针检查器，具有较低的构建时间开销；一个 [Error Prone](http://errorprone.info/) 插件。

- [OWASP 依赖关系检查]（https://owasp.org/www-project-dependency-check）— 检查依赖关系中是否存在已知的、公开披露的漏洞。

- [qulice](https://www.qulice.com) — 结合一些（预配置的）静态分析工具（checkstyle、PMD、Findbugs 等）。

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — 识别并优先考虑 Java 代码库中应首先重构的上帝类和高度耦合的类。

- [Soot](https://soot-oss.github.io/soot) — 一个用于分析和转换 Java 和 Android 应用程序的框架。

- [Spoon](https://spoon.gforge.inria.fr) — Spoon 是一个元编程库，用于分析和转换 Java 源代码（包括 Java 9、10、11、12、13、14）。它解析源文件以构建设计良好的 AST，并具有强大的分析和转换 API。可以集成到 Maven 和 Gradle 中。

- [SpotBugs](https://spotbugs.github.io) — SpotBugs 是 FindBugs 的后继者。一款用于静态分析 Java 代码中错误的工具。

- [steady](https://eclipse.github.io/steady/) — 分析 Java 应用程序中是否存在已知漏洞的开源依赖项，使用静态分析和测试来确定代码上下文和使用情况，从而获得更高的准确性。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 用于解析静态代码分析报告文件的 Java 库。被大量 Jenkins、Maven 和 Gradle 插件使用。


<a 名称="javascript" />
<h2>JavaScript</h2>


- [aether](http://aetherjs.com) :warning: — 在节点或浏览器中，对用户 JavaScript 进行 Lint、分析、规范化、转换、沙盒化、运行、逐步执行和可视化。

- [Closure Compiler](https://developers.google.com/closure/compiler) — 一种编译器工具，用于提高效率，减少文件大小，并在 JavaScript 文件中提供代码警告。

- [ClosureLinter](https://github.com/google/closure-linter) :warning: — 确保项目的所有 JavaScript 代码都符合 Google JavaScript 样式指南中的准则。它还可以自动修复许多常见错误。

- [complexity-report](https://github.com/escomplex/complexity-report) :warning: — JavaScript 项目的软件复杂性分析。

- [DeepScan](https://deepscan.io) :copyright: — 一种 JavaScript 分析器，主要针对运行时错误和质量问题，而不是编码约定。

- [es6-plato](https://github.com/the-simian/es6-plato) :warning: — 可视化 JavaScript (ES6) 源复杂性。

- [escomplex](https://github.com/jared-stilwell/escomplex) :warning: — JavaScript 系列抽象语法树的软件复杂性分析。

- [Esprima](https://esprima.org) :warning: — 用于多用途分析的 ECMAScript 解析基础设施。

- [flow](https://flow.org) — JavaScript 的静态类型检查器。

- [hegel](https://hegel.js.org) — 一种偏向于类型推断和强类型系统的 JavaScript 静态类型检查器。

- [jshint](https://jshint.com/about) [:information_source:](<https://github.com/analysis-tools-dev/static-analysis/issues/223>) — 检测 JavaScript 代码中的错误和潜在问题，并强制执行团队的编码约定。

- [JSLint](https://github.com/douglascrockford/JSLint) [:information_source:](<https://github.com/analysis-tools-dev/static-analysis/issues/223>) — JavaScript 代码质量工具。

- [JSPrime](https://dpnishant.github.io/jsprime) :warning: — 静态安全分析工具。

- [NodeJSScan](https://opensecurity.in) :warning: — 一款基于 njsscan cli 工具构建的 Node.js 应用程序静态安全代码扫描器，由 libsast 和 semgrep 提供支持。它具有一个 UI，其中包含有关应用程序安全状态的各种仪表板。

- [plato](https://github.com/es-analysis/plato) :warning: — 可视化 JavaScript 源代码的复杂性。

- [Polymer-analyzer](https://github.com/Polymer/tools/tree/master/packages/analyzer) — 一个用于 Web 组件的静态分析框架。

- [retire.js](https://retirejs.github.io/retire.js) — 扫描仪检测已知漏洞的 JavaScript 库的使用情况。

- [RSLint](http://rslint.org/) :warning: — 用 Rust 编写的（WIP）JavaScript linter，旨在尽可能快、可定制且易于使用。

- [standard](http://standardjs.com) — 一个检查 JavaScript 样式指南问题的 npm 模块。

- [tern](https://ternjs.net) — 一个用于深度、跨编辑器语言支持的 JavaScript 代码分析器。

- [TypL](https://typl.dev) :warning: — 使用 TypL，您只需编写完全标准的 JS，该工具就会通过强大的推理功能找出您的类型。

- [xo](https://github.com/xojs/xo) — 固执己见但可配置的 ESLint 包装器，包含许多好东西。强制执行严格且可读的代码。

- [yardstick](https://github.com/calmh/yardstick) :warning: — Javascript 代码指标。


<a 名称="julia" />
<h2>朱莉娅</h2>


- [JET](https://github.com/aviatesk/JET.jl) — 静态类型推断系统，用于检测错误和类型不稳定性。

- [StaticLint](https://github.com/julia-vscode/StaticLint.jl) — Julia 的静态代码分析


<a 名称="kotlin" />
<h2>科特林</h2>


- [detekt](https://detekt.github.io/detekt) — Kotlin 代码的静态代码分析。

- [diktat](https://diktat.saveourtool.com) — Kotlin 的严格编码标准以及检测和自动修复代码异味的 linter。

- [ktfmt](https://facebook.github.io/ktfmt/) — 重新格式化 Kotlin 源代码以符合 Kotlin 代码约定的通用社区标准的程序。
  插件库中提供了 ktfmt IntelliJ 插件。要安装它，请转到 IDE 的设置并选择插件类别。单击 Marketplace 选项卡，搜索 ktfmt 插件，然后单击 Install 按钮。

- [ktlint](https://ktlint.github.io) — 一款内置格式化程序的反 bikeshedding Kotlin linter。


<a 名称="lua" />
<h2>Lua</h2>


- [luacheck](https://github.com/lunarmodules/luacheck) — 用于 Lua 代码的 linting 和静态分析的工具。

- [lualint](https://github.com/philips/lualint) — lualint 对 Lua 源代码中的全局变量使用情况执行基于 luac 的静态分析。

- [Luanalysis](https://plugins.jetbrains.com/plugin/14698-luanalysis) — 用于静态类型 Lua 开发的 IDE。


<a 名称="matlab" />
<h2>MATLAB</h2>


- [mlint](https://mathworks.com/help/matlab/ref/mlint.html) :copyright: — 检查 MATLAB 代码文件是否存在问题。


<a name="nim" />
<h2>尼姆</h2>


- [DrNim](https://nim-lang.org/docs/drnim.html) — DrNim 将 Nim 前端与 Z3 证明引擎相结合，以便验证/确认用 Nim 编写的软件。

- [nimfmt](https://github.com/FedericoCeratto/nimfmt) — Nim 代码格式化程序 / linter / 样式检查器


<a 名称="ocaml" />
<h2>Ocaml</h2>


- [Sys](https://github.com/PLSysSec/sys) — 用于查找 (浏览器) 代码中的错误的静态/符号工具。它使用 LLVM AST 来查找未初始化内存访问等错误。

- [VeriFast](https://github.com/verifast/verifast) — 一种模块化形式化验证工具，用于验证单线程和多线程 C 和 Java 程序的正确性，这些程序使用分离逻辑编写的先决条件和后置条件进行注释。为了表达丰富的规范，程序员可以定义归纳数据类型、这些数据类型上的原始递归纯函数以及抽象分离逻辑谓词。


<a name="php" />
<h2>PHP</h2>


- [CakeFuzzer](https://zigrin.com/tools/cake-fuzzer/) — 用于基于 CakePHP 的 Web 应用程序的 Web 应用程序安全测试工具。CakeFuzzer 采用一组预定义的攻击，这些攻击在执行前会随机修改。凭借对 Cake PHP 框架的深入了解，Cake Fuzzer 可以对所有潜在的应用程序入口点发起攻击。

- [churn-php](https://github.com/bmitch/churn-php) — 帮助发现适合重构的候选对象。

- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — 快速检测 Composer 依赖问题。

* 💪 强大：检测未使用、影子和放错位置的 Composer 依赖项
* ⚡ 高性能：2 秒内扫描 15,000 个文件！
* ⚙️ 可配置：通过 PHP 配置进行细粒度的忽略
  *🕸️ 轻量级：无需依赖 Composer
* 🍰 易于使用：首次尝试无需配置
  *✨ 兼容：PHP >= 7.2


- [dephpend](https://github.com/mihaeu/dephpend) — 依赖关系分析工具。

- [deprecation-detector](https://github.com/sensiolabs-de/deprecation-detector) — 查找已弃用的 (Symfony) 代码的用法。

- [deptrac](https://github.com/sensiolabs-de/deptrac) — 强制执行软件层之间的依赖关系规则。

- [DesignPatternDetector](https://github.com/Halleck45/DesignPatternDetector) — 检测 PHP 代码中的设计模式。

- [EasyCodingStandard](https://www.tomasvotruba.com/blog/2017/05/03/combine-power-of-php-code-sniffer-and-php-cs-fixer-in-3-lines) — 结合 [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) 和 [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)。

- [Enlightn](https://www.laravel-enlightn.com/) — 一款用于 Laravel 应用程序的静态和动态分析工具，可提供改进 Laravel 应用程序性能、安全性和代码可靠性的建议。包含 120 项自动检查。

- [exakat](https://www.exakat.io) — 一个用于 PHP 的自动代码审查引擎。

- [GrumPHP](https://github.com/phpro/grumphp) — 每次提交时检查代码。

- [larastan](https://github.com/larastan/larastan) — 为 Laravel 添加静态分析，提高开发人员的工作效率和代码质量。它是 PHPStan 的包装器。

- [Mondrian](https://trismegiste.github.io/Mondrian) :warning: — 一组使用图论的静态分析和重构工具。

- [Nitpick CI](https://nitpick-ci.com) :copyright: — 自动化 PHP 代码审查。

- [parallel-lint](https://github.com/php-parallel-lint/PHP-Parallel-Lint) — 此工具检查 PHP 文件的语法比串行检查更快，并且输出更精美。

- [Parse](https://github.com/psecio/parse) — 静态安全扫描程序。

- [pdepend](https://pdepend.org) — 计算 PHP 代码的圈复杂度等软件指标。

- [phan](https://github.com/phan/phan/wiki) — 来自 etsy 的现代静态分析器。

- [PHP 架构测试器](https://github.com/carlosas/phpat) — 易于使用的 PHP 架构测试工具。

- [PHP 假设](https://github.com/rskuipers/php-assumptions) — 检查弱假设。

- [PHP 编码标准修复器](https://cs.symfony.com) — 根据 PSR-1、PSR-2 和 Symfony 标准等标准修复您的代码。

- [PHP Insights](https://phpinsights.com) — 从控制台即时检查 PHP 质量。分析代码质量和编码风格以及概述代码架构及其复杂性。

- [Php Inspections (EA Extended)](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-) — PHP 静态代码分析器。

- [PHP 重构浏览器](https://qafool​​abs.github.io/php-refactoring-browser) — 重构助手。

- [PHP 语义版本检查器](https://github.com/tomzx/php-semver-checker) :warning: — 根据语义版本建议下一个版本。

- [PHP-Parser](https://github.com/nikic/PHP-Parser) — 用 PHP 编写的 PHP 解析器。

- [php-speller](https://github.com/mekras/php-speller) — PHP 拼写检查库。

- [PHP-Token-Reflection](https://github.com/Andrewsville/PHP-Token-Reflection) :warning: — 模拟 PHP 内部反射的库。

- [php7cc](https://github.com/sstalle/php7cc) :warning: — PHP 7 兼容性检查器。

- [php7mar](https://github.com/Alexia/php7mar) :warning: — 帮助开发人员快速将其代码移植到 PHP 7。

- [PHP_CodeSniffer](https://pear.php.net/package/PHP_CodeSniffer) — 检测违反一组定义的编码标准的行为。

- [PHPArkitect](https://github.com/phparkitect/arkitect) — PHPArkitect 允许在工作流程中添加一些架构约束检查，从而帮助您保持 PHP 代码库的连贯性和稳定性。您可以用简单易读的 PHP 代码表达要强制执行的约束。

- [phpca](https://github.com/wapmorgan/PhpCodeAnalyzer) :warning: — 发现非内置扩展的使用。

- [phpcpd](https://github.com/sebastianbergmann/phpcpd) :warning: — PHP 代码的复制/粘贴检测器。

- [phpdcd](https://github.com/sebastianbergmann/phpdcd) :warning: — 用于 PHP 代码的死代码检测器 (DCD)。

- [PhpDependencyAnalysis](https://mamuz.github.io/PhpDependencyAnalysis) :warning: — 为项目构建依赖关系图。

- [PhpDeprecationDetector](https://github.com/wapmorgan/PhpDeprecationDetector) — PHP 代码分析器，用于搜索较新版本解释器中已弃用功能的问题。它会查找已删除的对象（函数、变量、常量和 ini 指令）、已弃用的函数功能以及禁用名称或技巧的使用（例如较新版本中的保留标识符）。

- [phpdoc-to-typehint](https://github.com/dunglas/phpdoc-to-typehint) :warning: — 使用 PHPDoc 注释向现有 PHP 项目添加标量类型提示并返回类型。

- [phpDocumentor](https://www.phpdoc.org) — 分析 PHP 源代码以生成文档。

- [phploc](https://github.com/sebastianbergmann/phploc) — 一种用于快速测量 PHP 项目大小和分析其结构的工具。

- [PHPMD](https://phpmd.org) — 查找代码中可能存在的错误。

- [PhpMetrics](http://www.phpmetrics.org) — 计算并可视化各种代码质量指标。

- [phpmnd](https://github.com/povils/phpmnd) — 帮助检测魔法数字。

- [PHPQA](https://edgedesigncz.github.io/phpqa) :warning: — 用于运行 QA 工具 (phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics) 的工具。

- [phpqa - jakzal](https://github.com/jakzal/phpqa) — 一个容器中有许多用于 PHP 静态分析的工具。

- [phpqa - jmolivas](https://github.com/jmolivas/phpqa) — PHPQA 一体化分析器 CLI 工具。

- [phpsa](https://github.com/ovr/phpsa) :warning: — PHP 的静态分析工具。

- [PHPStan](https://phpstan.org) — PHP 静态分析工具 - 无需运行代码即可发现其中的错误！

- [Progpilot](https://github.com/designsecurity/progpilot) — 用于安全目的的静态分析工具。

- [Psalm](https://psalm.dev) — 用于查找 PHP 应用程序中类型错误的静态分析工具。

- [Qafoo 质量分析器]（https://github.com/Qafoo/QualityAnalyzer）：warning：— 可视化指标和源代码。

- [rector](https://getrector.org) — 即时升级和自动重构任何 PHP 5.3+ 代码。它可以将您的代码升级到 PHP 7.4、8.0 及更高版本。Rector 承诺较低的误报率，因为它会寻找定义狭窄的 AST（抽象语法树）模式。主要用例是解决遗留代码中的技术债务并删除死代码。Rector 为 Symfony、Doctrine、PHPUnit 等提供了一组特殊规则。

- [Reflection](https://github.com/phpDocumentor/Reflection) — 用于对 PHP 项目进行静态分析的反射库

- [Symfony Insight](https://insight.symfony.com/) :copyright: — 检测安全风险、查找错误并为 PHP 项目提供可操作的指标。

- [Tuli](https://github.com/ircmaxell/Tuli) — 静态分析引擎。

- [twig-lint](https://github.com/asm89/twig-lint) — twig-lint 是一个用于 twig 文件的 lint 工具。

- [WAP](https://securityonline.info/owasp-wap-web-application-protection-project) — 用于检测和纠正 PHP（4.0 或更高版本）Web 应用程序中的输入验证漏洞的工具，并通过结合静态分析和数据挖掘来预测误报。


<a 名称="plsql" />
<h2>PL/SQL</h2>


- [ZPA](https://zpa.felipebz.com) — PL/SQL 和 Oracle SQL 代码的开源解析器和代码分析器。


<a 名称="perl" />
<h2>Perl</h2>


- [Perl::Analyzer](https://technix.github.io/Perl-Analyzer/) — Perl-Analyzer 是一组程序和模块，通过提供有关命名空间及其关系、依赖关系、继承以及在包中实现、继承和重新定义的方法的信息，以及通过 SUPER 对父包中方法的调用，允许用户分析和可视化 Perl 代码库。

- [Perl::Critic](https://metacpan.org/pod/Perl::Critic) — 批评 Perl 源代码以获得最佳实践。

- [perltidy](https://perltidy.sourceforge.net/) — Perltidy 是一个 Perl 脚本，它可以缩进和重新格式化 Perl 脚本，使其更易于阅读。
  可以使用命令行参数控制格式。默认参数设置大致遵循 Perl 样式指南中的建议。
  除了重新格式化脚本之外，Perltidy 还可以很好地帮助追踪缺失或多余的大括号、圆括号和方括号的错误，因为它非常擅长定位错误。

- [zarn](https://github.com/htrgouvea/zarn) — 适用于现代 Perl 应用的轻量级静态安全分析工具


<a 名称="python" />
<h2>Python</h2>


- [autoflake](https://github.com/PyCQA/autoflake) — Autoflake 从 Python 代码中删除未使用的导入和未使用的变量。

- [autopep8](https://pypi.org/project/autopep8/) — 一种自动格式化 Python 代码以符合 PEP 8 样式指南的工具。
  它使用 pycodestyle 实用程序来确定代码的哪些部分需要格式化。

- [bandit](https://bandit.readthedocs.io/en/latest) — 一种用于查找 Python 代码中常见安全问题的工具。

- [bellybutton](https://github.com/hchasestevens/bellybutton) — 支持自定义项目特定规则的 linting 引擎。

- [Black](https://black.readthedocs.io/en/stable) — 不妥协的 Python 代码格式化程序。

- [Bowler](https://pybowler.io/) — 适用于现代 Python 的安全代码重构。Bowler 是一种用于在语法树级别操作 Python 的重构工具。它支持安全的大规模代码修改，同时保证生成的代码能够编译和运行。它提供了一个简单的命令行界面和一个流畅的 Python API，用于在代码中生成复杂的代码修改。

- [ciocheck](https://github.com/ContinuumIO/ciocheck) :warning: — Linter、格式化程序和测试套件助手。作为 linter，它是 `pep8`、`pydocstyle`、`flake8` 和 `pylint` 的包装器。

- [cohesion](https://github.com/mschwager/cohesion) :warning: — 用于测量 Python 类内聚力的工具。

- [deal](https://deal.readthedocs.io/) — 为 Python 进行合同设计。编写无错误的代码。通过在代码中添加一些装饰器，您可以获得免费测试、静态分析、形式验证等。

- [Dlint](https://github.com/dlint-py/dlint) — 一种确保 Python 代码安全的工具。

- [Dodgy](https://github.com/landscapeio/dodgy) — Dodgy 是一款非常基本的工具，可针对您的代码库运行以搜索看起来“可疑”的值。它是一系列简单的正则表达式，旨在检测意外的 SCM diff 签入，或硬编码到文件中的密码或密钥等内容。

- [ENRE-py](https://github.com/xjtu-enre/ENRE-py) :warning: — ENRE (ENtity Relationship Extractor) 是一种从源代码中提取代码实体依赖关系或关系的工具。ENRE-py 是基于标准库的 Python 语言服务的 Python ENtity Relationship Extractor。

- [fixit](https://pypi.org/project/fixit) — 用于创建 lint 规则和相应的源代码自动修复的框架。

- [flake8](https://github.com/PyCQA/flake8) — 围绕 `pyflakes`、`pycodestyle` 和 `mccabe` 的​​包装器。

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheaven 是一个围绕 flake8 构建的 python linter，用于支持可继承和复杂的 toml 配置。

- [InspectorTiger](https://github.com/thg-consulting/it) :warning: — IT，Inspector Tiger，是一款现代 Python 代码审查工具/框架。它附带一系列预定义的处理程序，可警告您有关改进和可能的错误。除了这些处理程序之外，您还可以编写自己的处理程序或使用社区处理程序。

- [jedi](https://jedi.readthedocs.io/en/latest) — Python 的自动完成/静态分析库。

- [linty fresh](https://github.com/lyft/linty_fresh) — 解析 lint 错误并将其作为拉取请求的评论报告给 Github。

- [mccabe](https://pypi.org/project/mccabe) — 检查 McCabe 复杂度。

- [multilint](https://github.com/adamchainz/multilint) :warning: — 围绕 `flake8`、`isort` 和 `modernize` 的包装器。

- [mypy](http://www.mypy-lang.org) — 一种静态类型检查器，旨在结合鸭子类型和静态类型的优点，经常与 [MonkeyType](https://github.com/Instagram/MonkeyType) 一起使用。

- [prospector](https://github.com/PyCQA/prospector) — 围绕 `pylint`、`pep8`、`mccabe` 等的包装器。

- [py-find-injection](https://github.com/uber/py-find-injection) :warning: — 查找 Python 代码中的 SQL 注入漏洞。

- [pyanalyze](https://pyanalyze.readthedocs.io/en/latest/) — 一种以编程方式检测 Python 代码中常见错误的工具，例如对未定义变量的引用和类型错误。它可以扩展以添加其他规则并执行特定于特定函数的检查。

- [PyCodeQual](https://pycodequ.al) :copyright: — PyCodeQual 让您深入了解复杂性和错误风险。它为您的拉取请求添加自动审核。

- [pycodestyle](https://pycodestyle.pycqa.org/en/latest) —（以前称为“pep8”）根据 PEP 8 中的某些样式约定检查 Python 代码。

- [pydocstyle](http://www.pydocstyle.org) — 检查是否符合 Python 文档字符串约定。

- [pyflakes](https://pypi.org/project/pyflakes) — 检查 Python 源文件中是否存在错误。

- [pylint](http://pylint.pycqa.org/en/latest) — 查找编程错误，帮助执行编码标准并嗅探一些代码异味。它还包括“pyreverse”（UML 图生成器）和“symilar”（相似性检查器）。

- [pylyzers](https://mtshiba.github.io/pylyzer/) — 一个用 Rust 编写的 Python 静态代码分析器/语言服务器，专注于类型检查和可读输出。

- [pyre-check](https://pyre-check.org) — 适用于大型 Python 代码库的快速、可扩展的类型检查器。

- [pyright](https://github.com/Microsoft/pyright) — Python 的静态类型检查器，旨在解决 mypy 等现有工具中的缺陷。

- [pyroma](https://github.com/regebro/pyroma) — 评价 Python 项目符合 Python 打包生态系统最佳实践的程度，并列出可以改进的问题。

- [Pysa](https://pyre-check.org/docs/pysa-basics.html) — 一种基于 Facebook 的 pyre-check 的工具，用于通过污点分析识别 Python 代码中的潜在安全问题。

- [PyT - Python Taint](https://github.com/python-security/pyt) :warning: — 用于检测 Python Web 应用程序中的安全漏洞的静态分析工具。

- [pytype](https://google.github.io/pytype) — Python 代码的静态类型分析器。

- [pyupgrade](https://pypi.org/project/pyupgrade-docs/) — 一种工具（和预提交钩子），用于自动升级语言较新版本的语法。

- [QuantifiedCode](https://github.com/quantifiedcode/quantifiedcode) :warning: — 自动代码审查和修复。它可以帮助您跟踪软件项目中的问题和指标，并且可以轻松扩展以支持新类型的分析。

- [radon](https://radon.readthedocs.io/en/latest) :warning: — 一个从源代码计算各种指标的 Python 工具。

- [refurb](https://github.com/dosisod/refurb) — 用于翻新和现代化 Python 代码库的工具。Refurb 深受 Rust 内置 linter clippy 的启发。

- [ruff](https://astral.sh/ruff) — 用 Rust 编写的快速 Python linter。比现有的 linter 快 10-100 倍。兼容 Python 3.10。支持文件监视程序。

- [unimport](https://unimport.hakancelik.dev) — 一个用于查找和删除未使用的导入语句的 linter、格式化程序。

- [vulture](https://github.com/jendrikseipp/vulture) — 查找 Python 代码中未使用的类、函数和变量。

- [wemake-python-styleguide](https://wemake-python-styleguide.rtfd.io/) — 有史以来最严格、最固执己见的 python linter。

- [wily](https://github.com/tonybaloney/wily) — 用于存档、探索和绘制 Python 源代码复杂性的命令行工具。

- [xenon](https://xenon.readthedocs.io) :warning: — 使用 [`radon`](https://github.com/rubik/radon) 监控代码复杂度。

- [yapf](https://github.com/google/yapf) — Google 创建的 Python 文件格式化程序
  YAPF 遵循一种独特的方法，源自 Daniel Jasper 创建的“clang-format”工具。本质上，即使原始代码已经遵循了样式指南，该程序也会将代码重新设计为最合适的格式，并遵守样式指南。这个概念类似于 Go 编程语言的“gofmt”工具，该工具旨在通过让项目的整个代码库在每次进行更改时都通过 YAPF 来结束关于格式的争论，从而在整个项目中保持一致的风格，并消除在每次代码审查中争论风格的需要。


<a 名称="r" />
<h2>R</h2>


- [cyclocomp](https://github.com/MangoTheCat/cyclocomp) — 量化 R 函数/表达式的圈复杂度。

- [goodpractice](https://mangothecat.github.io/goodpractice) — 分析 R 包的源代码并提供最佳实践建议。

- [lintr](https://github.com/ji mhester/lintr) — R 的静态代码分析。

- [styler](https://styler.r-lib.org) — 格式化 R 源代码文件并漂亮地打印 R 代码。


<a 名称="rego" />
<h2>雷戈</h2>


- [Regal](https://github.com/styrainc/regal) — Regal 是策略语言 Rego 的 linter。Regal 旨在捕捉策略代码中的错误和失误，同时帮助人们学习该语言、最佳实践和惯用结构。


<a 名称="ruby" />
<h2>红宝石</h2>


- [brakeman](https://brakemanscanner.org) — 针对 Ruby on Rails 应用程序的静态分析安全漏洞扫描程序。

- [bundler-audit](https://github.com/rubysec/bundler-audit) — 审计 Gemfile.lock 中与 [Ruby 咨询数据库](https://github.com/rubysec/ruby-advisory-db) 中报告的安全漏洞相关的 gem。

- [cane](https://github.com/square/cane) :warning: — 作为构建的一部分，代码质量阈值检查。

- [Churn](https://github.com/danmayer/churn) — 该项目用于为给定签入的项目提供改动文件、类和方法。随着时间的推移，该工具会累计改动的历史记录，以提供项目生命周期内文件、类或方法更改的次数。

- [dawnscanner](https://github.com/thesp0nge/dawnscanner) — 一款用于 Ruby 编写的 Web 应用程序的静态分析安全扫描器。它支持 Sinatra、Padrino 和 Ruby on Rails 框架。

- [ERB Lint](https://github.com/Shopify/erb-lint) — 对 ERB 或 HTML 文件进行 Lint 处理

- [Fasterer](https://github.com/DamirSvrtan/fasterer) — 常见 Ruby 习语检查器。

- [flay](https://ruby.sadi.st/Flay.html) — Flay 分析代码的结构相似性。

- [flog](https://ruby.sadi.st/Flog.html) :warning: — Flog 以易于阅读的痛苦报告形式报告最痛苦的代码。分数越高，代码越痛苦。

- [Fukuzatsu](https://github.com/CoralineAda/fukuzatsu) — 用于测量 Ruby 类文件中代码复杂度的工具。其分析基于圈复杂度算法生成分数，不添加任何“意见”。

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 一款 HTML 规范化器/美化器，同时支持嵌入的 Ruby。非常适合整理 Rails 模板。

- [laser](https://github.com/michaeledgar/laser) :warning: — Ruby 代码的静态分析和样式检查。

- [MetricFu](https://github.com/metricfu/metric_fu) :warning: — MetricFu 是一组提供报告的工具，可显示代码的哪些部分可能需要额外的工作。

- [pelusa](https://github.com/codegram/pelusa) — 静态分析 Lint 类型工具，用于改进你的 OO Ruby 代码。

- [quality](https://github.com/apiology/quality) :warning: — 使用社区工具对您的代码运行质量检查，并确保您的数字不会随着时间的推移而变得更糟。

- [Querly](https://github.com/soutaro/querly) :warning: — 基于模式的 Ruby 检查工具。

- [Railroader](https://railroader.org) :warning: — 一款针对 Ruby on Rails 应用程序的开源静态分析安全漏洞扫描程序。

- [rails_best_practices](https://rails-bestpractices.com) :warning: — Rails 项目的代码度量工具

- [reek](https://github.com/troessner/reek) — Ruby 代码异味检测器。

- [Roodi](https://github.com/roodi/roodi) :warning: — Roodi 是 Ruby 面向对象设计推断仪的缩写。它会解析您的 Ruby 代码，并根据其配置的检查向您发出设计问题警告。

- [RuboCop](https://docs.rubocop.org/rubocop) — 一个基于社区 Ruby 风格指南的 Ruby 静态代码分析器。

- [Rubrowser](https://github.com/blazeeboy/rubrowser) — Ruby 类交互式依赖图生成器。

- [ruby-lint](http://code.yorickpeterse.com/ruby-lint/latest) :warning: — Ruby 的静态代码分析。

- [rubycritic](https://github.com/whitesmith/rubycritic) — Ruby 代码质量报告器。

- [rufo](https://github.com/ruby-formatter/rufo) — 一种自以为是的 ruby​​ 格式化程序，旨在通过命令行作为文本编辑器插件使用，在保存或需要时自动格式化文件。

- [Saikuro](https://metricfu.github.io/Saikuro) :warning: — Ruby 圈复杂度分析器。

- [SandiMeter](https://rubygems.org/gems/sandi_meter) :warning: — 用于检查 Ruby 代码是否符合 Sandi Metz 规则的静态分析工具。

- [Sorbet](https://sorbet.org) — 专为 Ruby 设计的快速、强大的类型检查器。

- [标准 Ruby](https://github.com/testdouble/standard) — Ruby 风格指南，带有 linter 和自动代码修复程序

- [Steep](https://github.com/soutaro/steep) — Ruby 的渐进式类型化。


<a 名称="rust" />
<h2>Rust</h2>


- [C2Rust](https://c2rust.com) — C2Rust 可帮助您将符合 C99 的代码迁移到 Rust。转换器 (或转译器) 生成的 Rust 代码与输入的 C 代码非常相似，但不安全。

- [cargo udeps](https://github.com/est31/cargo-udeps) — 在 Cargo.toml 中查找未使用的依赖项。它要么打印出一行列出包的“未使用的包”，要么打印出一行说明没有未使用的包。

- [cargo-audit](https://rustsec.org) — 审计 Cargo.lock 中存在安全漏洞的包，并将其报告给 [RustSec 咨询数据库](https://github.com/RustSec/advisory-db/)。

- [cargo-bloat](https://github.com/RazrFalcon/cargo-bloat) — 找出可执行文件中占用大部分空间的内容。支持 ELF (Linux、BSD)、Mach-O (macOS) 和 PE (Windows) 二进制文件。

- [cargo-breaking](https://github.com/iomentum/cargo-breaking) — cargo-breaking 比较两个不同分支之间的板条箱的公共 API，显示更改的内容，并根据 semver 建议下一个版本。

- [cargo-call-stack](https://github.com/japaric/cargo-call-stack) — 整个程序静态堆栈分析该工具以点文件的形式生成程序的完整调用图。

- [cargo-deny](https://embarkstudios.github.io/cargo-deny) — 用于检查依赖项的 Cargo 插件。它也可以用作命令行、Rust 包或 CI 的 Github 操作。它会检查有效的许可证信息、重复的包、安全漏洞等。

- [cargo-expand](https://github.com/dtolnay/cargo-expand) — Cargo 子命令，用于显示应用于当前包的宏扩展和 #[derive] 扩展的结果。这是一个更详细的编译器命令的包装器。

- [cargo-geiger](https://github.com/geiger-rs/cargo-geiger) — 用于分析不安全 Rust 代码使用情况的 Cargo 插件，提供统计输出以协助安全审计

- [cargo-inspect](https://github.com/mre/cargo-inspect) :warning: — 检查没有语法糖的 Rust 代码，看看编译器在幕后做了什么。

- [cargo-semver-checks](https://crates.io/crates/cargo-semver-checks) — 扫描您的 Rust crate 版本是否存在 semver 违规。它可以直接通过 CLI 使用，也可以作为 CI 中的 GitHub Action 使用，也可以通过“release-plz”等发布管理器使用。它在 crates.io 上下载次数最多的 1000 个 crate 中发现 [超过六分之一](https://predr.ag/blog/semver-violations-are-common-better-tooling-is-the-answer/) 存在 semver 违规。

- [cargo-show-asm](https://github.com/pacak/cargo-show-asm) — cargo 子命令，显示为 Rust 代码生成的汇编、LLVM-IR 和 MIR

- [cargo-spellcheck](https://github.com/drahnr/cargo-spellcheck) — 使用 hunspell (已就绪) 和 languagetool (预览) 检查所有文档中的拼写和语法错误

- [cargo-unused-features](https://github.com/TimonPost/cargo-unused-features) :warning: — 查找潜在未使用的已启用功能标志并删除它们。您可以从 json 生成简单的 HTML 报告，以便更轻松地检查结果。
  它会删除依赖项的功能，然后编译项目以查看它是否仍可编译。如果可以，则可能会删除功能标志，但这可能是误报。

- [clippy](https://rust-lang.github.io/rust-clippy) — 一个代码检查器，用于捕捉常见错误并改进你的 Rust 代码。

- [diff.rs](https://diff.rs) — Web 应用程序（WASM）用于呈现 Rust 板条箱版本之间的差异。

- [dylint](https://www.trailofbits.com/post/write-rust-lints-without-forking-clippy) — 一种用于从动态库运行 Rust lint 的工具。Dylint 让开发人员可以轻松维护自己的个人 lint 集合。

- [electrolysis](https://kha.github.io/electrolysis) :warning: — 通过将 Rust 程序转换为 Lean 定理证明器中的定义来对其进行形式化验证的工具。

- [herbie](https://github.com/mcarton/rust-herbie-lint) :warning: — 当使用数值不稳定的浮点表达式时向您的板条箱添加警告或错误。

- [kani](https://github.com/model-checking/kani) — Kani Rust Verifier 是 Rust 的位精确模型检查器。
  Kani 对于验证 Rust 中不安全的代码块特别有用，
  其中“不安全的超级能力”未被编译器检查。
  Kani 确认：

* 内存安全（例如，空指针取消引用）
* 用户指定的断言（即assert！（...））
* 不存在恐慌（例如，对 None 值执行 unwrap()）
* 不存在某些类型的意外行为（例如算术溢出）


- [linter-rust](https://github.com/AtomLinter/linter-rust) :warning: — 使用 rustc 和 cargo 在 Atom 中对 Rust 文件进行 Linting。

- [lockbud](https://github.com/BurtonQin/lockbud) — 静态检测 Rust 死锁错误。它目前检测两种常见的死锁错误：双重锁定和顺序冲突的锁定。它将以 JSON 格式打印错误以及源代码位置和每个错误的说明。

- [MIRAI](https://github.com/facebookexperimental/MIRAI) — 以及在 Rust 中级中间语言上运行的抽象解释器，并根据污点分析提供警告。

- [prae](https://github.com/teenjuna/prae) :warning: — 提供一个方便的宏，允许您生成类型包装器，保证始终支持您指定的任意不变量。

- [Prusti](https://www.pm.inf.ethz.ch/research/prusti.html) — 基于 Viper 验证基础架构的 Rust 静态验证器。默认情况下，Prusti 通过证明诸如 unreachable!() 和 panic!() 之类的语句无法访问来验证是否存在恐慌。

- [Rudra](https://github.com/sslab-gatech/Rudra) — Rust 内存安全和未定义行为检测。它能够分析单个 Rust 包以及 crates.io 上的所有包。

- [Rust 语言服务器](https://github.com/rust-lang-nursery/rls) :warning: — 支持“goto 定义”、符号搜索、重新格式化和代码完成等功能，并支持重命名和重构。

- [rust-analyzer](https://rust-analyzer.github.io) — 支持“goto 定义”、类型推断、符号搜索、重新格式化和代码完成等功能，并支持重命名和重构。

- [rust-audit](https://github.com/Shnatsel/rust-audit) — 审计 Rust 二进制文件中的已知错误或安全漏洞。其工作原理是将有关依赖关系树 (Cargo.lock) 的数据以 JSON 格式嵌入到已编译可执行文件的专用链接器部分中。

- [rustfix](https://github.com/rust-lang/rustfix) — 阅读并应用 rustc（以及第三方 lint，如 clippy 提供的建议）提出的建议。

- [rustfmt](https://github.com/rust-lang/rustfmt) — 一种根据样式指南格式化 Rust 代码的工具。

- [RustViz](https://github.com/rustviz/rustviz) — RustViz 是一款从简单的 Rust 程序生成可视化效果的工具，可帮助用户更好地理解 Rust 生命周期和借用机制。它生成带有图形指示器的 SVG 文件，这些文件与 mdbook 集成以呈现 Rust 程序中数据流的可视化效果。

- [warnalyzer](https://github.com/est31/warnalyzer) — 显示来自多包 Rust 项目的未使用代码


<a 名称="sql" />
<h2>SQL</h2>


- [dbcritic](https://github.com/channable/dbcritic) — dbcritic 查找数据库模式中的问题，例如表中缺少主键约束。

- [holistic](https://holistic.dev/) — 超过 1,300 条规则用于分析 SQL 查询。采用 SQL 模式定义和查询源代码来生成改进建议。检测代码异味、未使用的索引、未使用的表、视图、物化视图等。

- [pgspot](https://github.com/timescale/pgspot) — 发现 postgres 扩展脚本中的漏洞。在 PostgreSQL 扩展脚本或任何其他 PostgreSQL SQL 代码中查找不安全的 search_path 使用和不安全的对象创建。

- [sleek](https://github.com/nrempel/sleek) — Sleek 是一个用于格式化 SQL 的 CLI 工具。它可以帮助您在 SQL 代码中保持一致的风格，从而提高可读性和工作效率。繁重的工作由 sqlformat crate 完成。

- [sqlcheck](https://github.com/jarulraj/sqlcheck) — 自动识别 SQL 查询中的反模式。

- [SQLFluff](https://www.sqlfluff.com/) — 多方言 SQL linter 和格式化程序。

- [sqlint](https://github.com/purcell/sqlint) — 简单的 SQL linter。

- [squawk](https://squawkhq.com) — PostgreSQL 的 Linter，专注于迁移。防止数据库迁移导致的意外停机，并鼓励围绕 Postgres 模式和 SQL 的最佳实践。

- [tsqllint](https://github.com/tsqllint/tsqllint) — 特定于 T-SQL 的 linter。

- [TSqlRules](https://github.com/ashleyglee/TSqlRules) :warning: — SQL Server 的 TSQL 静态代码分析规则。

- [Visual Expert](https://www.visual-expert.com) :copyright: — PowerBuilder、Oracle 和 SQL Server 的代码分析探索、分析和记录代码


<a 名称="scala" />
<h2>Scala</h2>


- [linter](https://github.com/HairyFotr/linter) :warning: — Linter 是一个 Scala 静态分析编译器插件，它添加了针对各种可能的错误、效率低下和风格问题的编译时检查。

- [Scalastyle](http://www.scalastyle.org) — Scalastyle 检查你的 Scala 代码并指出其中的潜在问题。

- [scapegoat](https://github.com/sksamuel/scapegoat) — 用于静态代码分析的 Scala 编译器插件。

- [WartRemover](https://www.wartremover.org) — 一款灵活的 Scala 代码检查工具。


<a 名称="shell" />
<h2>外壳</h2>


- [bashate](https://github.com/openstack/bashate) — 强制执行 bash 程序的代码样式。输出格式旨在遵循 pycodestyle (pep8) 默认输出格式。

- [i-Code CNES for Shell](https://github.com/lequal/i-CodeCNES) — 适用于 Shell 和 Fortran (77 和 90) 的开源静态代码分析工具。

- [kmdr](https://github.com/ediardo/kmdr-cli) — 用于从终端学习命令的 CLI 工具。kmdr 提供了命令的细分，并解释了每个属性。

- [sh](https://pkg.go.dev/mvdan.cc/sh/v3) — 具有 bash 支持的 shell 解析器、格式化程序和解释器；包括 shfmt

- [shellcheck](https://www.shellcheck.net) — ShellCheck，一个为 bash/sh shell 脚本提供警告和建议的静态分析工具。

- [shellharden](https://github.com/anordal/shellharden) — 一个语法高亮器和一个用于半自动化地将脚本重写为符合 ShellCheck 规范的工具，主要侧重于引用。


<a 名称="swift" />
<h2>快速</h2>


- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) — 用于重新格式化 Swift 代码的库和命令行格式化工具。

- [SwiftLint](https://realm.github.io/SwiftLint) — 强制执行 Swift 风格和约定的工具。

- [Tailor](https://sleekbyte.github.io/tailor) :warning: — 用 Apple 的 Swift 编程语言编写的源代码静态分析和 lint 工具。


<a 名称="tcl" />
<h2>Tcl</h2>


- [Frink](http://catless.ncl.ac.uk/Programs/Frink) — Tcl 格式化和静态检查程序（可以美化程序、最小化、混淆或仅进行健全性检查）。

- [Nagelfar](https://sourceforge.net/projects/nagelfar) — Tcl 的静态语法检查器。

- [tclchecker](https://github.com/ActiveState/tdk/blob/master/docs/3.0/TDK_3.0_Checker.txt) — 静态语法分析模块（作为 [TDK](https://github.com/ActiveState/tdk) 的一部分）。


<a 名称="typescript" />
<h2>类型脚本</h2>


- [Angular ESLint](https://github.com/angular-eslint/angular-eslint#readme) — 用于 Angular 项目的 Linter

- [Codelyzer](http://codelyzer.com) :warning: — 一组用于 Angular 2 TypeScript 项目静态代码分析的 tslint 规则。

- [ENRE-ts](https://github.com/xjtu-enre/ENRE-ts) — ENRE (ENtity Relationship Extractor) 是一种从源代码中提取代码实体依赖关系或关系的工具。ENRE-ts 是基于 @babel/parser 的 ECMAScript 和 TypeScript 的 ENtity Relationship Extractor。

- [fta](https://ftaproject.dev/) — 基于 Rust 的 TypeScript 项目静态分析

- [stc](https://stc.dudy.dev) — 用 Rust 编写的快速 TypeScript 类型检查器

- [tslint](https://palantir.github.io/tslint/) :warning: — TSLint 自 2019 年起已弃用。请参阅[此问题](https://github.com/palantir/tslint/issues/4534)了解更多详细信息。`typescript-eslint` 现在是检查 TypeScript 代码的最佳选择。
  TSLint 是一款可扩展的静态分析工具，可检查 TypeScript 代码的可读性、可维护性和功能性错误。它受到现代编辑器和构建系统的广泛支持，并且可以使用您自己的 lint 规则、配置和格式化程序进行自定义。

- [tslint-clean-code](https://www.npmjs.com/package/tslint-clean-code) — 一组受 Clean Code 手册启发的 TSLint 规则。

- [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) :warning: — 由微软维护的一组用于 TypeScript 项目静态代码分析的 tslint 规则。

- [TypeScript 调用图](https://github.com/whyboris/TypeScript-Call-Graph) :warning: — CLI 用于从 TypeScript 文件中生成函数和调用的交互式图表

- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) — eslint 的 TypeScript 语言扩展。

- [zod](https://zod.dev) — 具有静态类型推断的 TypeScript 优先模式验证。目标是消除重复的类型声明。使用 Zod，您只需声明一次验证器，Zod 就会自动推断静态 TypeScript 类型。将更简单的类型组合成复杂的数据结构很容易。


<a 名称="verilog" />
<h2>Verilog/SystemVerilog</h2>


- [Icarus Verilog](https://github.com/steveicarus/iverilog) — 一款 Verilog 仿真和综合工具，其工作原理是将 IEEE-1364 Verilog 编写的源代码编译成某种目标格式

- [svls](https://github.com/dalance/svls) — Verilog 和 SystemVerilog 的语言服务器协议实现，包括 lint 功能。

- [verible-linter-action](https://github.com/chipsalliance/verible-linter-action) — 在 Verible 的帮助下，在 github 操作中自动进行 SystemVerilog linting 用于对 Verilog 和 SystemVerilog 源文件进行 linting，并自动注释 Pull 请求中的错误代码行。

- [Verilator](https://www.veripool.org/verilator) — 一种将 Verilog 转换为 C++ 或 SystemC 中周期精确行为模型的工具。执行 lint 代码质量检查。

- [vscode-verilog-hdl-support](https://github.com/mshr-h/vscode-verilog-hdl-support) — Verilog HDL/SystemVerilog/Bluespec SystemVerilog 对 VS Code 的支持。提供 Icarus Verilog、Vivado Logical Simulation、Modelsim 和 Verilator 的语法高亮和 Linting 支持


<a name="vim-script" />
<h2>Vim 脚本</h2>


- [vint](https://github.com/Kuniwak/vint) — 由 Python 实现的快速且高度可扩展的 Vim 脚本语言 Lint。


多种语言


- [ale](https://github.com/w0rp/ale) — 适用于 Vim 和 NeoVim 的异步 Lint 引擎，支持多种语言。

- [Android Studio](https://developer.android.com/studio) — 基于 IntelliJ IDEA，并捆绑了包括 Android Lint 在内的 Android 工具。

- [AppChecker](https://npo-echelon.ru/en/solutions/appchecker.php) :copyright: — 对 C/C++/C#、PHP 和 Java 进行静态分析。

- [应用程序检查器]（https://www.ptsecurity.com/ww-en/products/ai）：版权所有：— 商业静态代码分析，可生成漏洞利用程序来验证漏洞。

- [ApplicationInspector](https://github.com/microsoft/ApplicationInspector) — 创建超过 400 种规则模式的报告，用于功能检测（例如应用程序中加密或版本控制的使用）。

- [ArchUnit](https://www.archunit.org) — 对你的 Java 或 Kotlin 架构进行单元测试。

- [Atom-Beautify](https://atom.io/packages/atom-beautify) :warning: — 在 Atom 编辑器中美化 HTML、CSS、JavaScript、PHP、Python、Ruby、Java、C、C++、C#、Objective-C、CoffeeScript、TypeScript、Coldfusion、SQL 等。

- [autocorrect](https://huacnlee.github.io/autocorrect) — 一个 linter 和格式化程序，可帮助您改进文案，纠正 CJK（中文、日文、韩文）之间的空格、单词和标点符号。

- [Axivion Bauhaus Suite](https://www.axivion.com/en/products-services-9#products_bauhaussuite) :copyright: — 追踪 C/C++、C#/.NET、Java 和 Ada 83/Ada 95 中容易出错的代码位置、样式违规、克隆或死代码、循环依赖等。

- [Bearer](https://github.com/bearer/bearer) — 开源静态代码分析工具，用于发现、过滤和优先处理导致敏感数据泄露（PII、PHI、PD）的安全风险和漏洞。高度可配置且易于扩展，专为安全和工程团队打造。

- [Better Code Hub](https://bettercodehub.com) :copyright: — Better Code Hub 会根据软件质量权威机构 Software Improvement Group 制定的 10 条工程指南检查您的 GitHub 代码库。

- [Betterscan CE](https://github.com/tcosolutions/betterscan-ce) — 检查您的代码和基础设施（支持各种 Git 存储库、云堆栈、CLI、Web 界面平台、可用的集成）是否存在安全性和质量问题。使用多种工具/扫描仪进行代码扫描/SAST/Linting，并使用一份报告进行重复数据删除（AI 可选）。

- [biome](https://biomejs.dev) — 一个用于 Web 项目的工具链，旨在提供维护这些项目的功能。Biome 可在几分之一秒内格式化和检查代码。它是 Rome 的后继者。它旨在最终取代 Biome，最终取代 Babel、ESLint、webpack、Prettier、Jest 等。

- [BugProve](https://www.bugprove.com) :copyright: — BugProve 是一个固件分析平台，采用静态和动态分析技术来发现内存损坏、命令注入以及二进制代码中的其他类别或常见弱点。它还可以检测易受攻击的依赖项、弱加密参数、错误配置等。

- [callGraph](https://github.com/koknat/callGraph) — 静态生成调用图图像并将其显示在屏幕上。

- [CAST Highlight](https://www.castsoftware.com/products/highlight) :copyright: — 商业静态代码分析，在本地运行，但将结果上传到云端进行展示。

- [Checkmarx CxSAST](https://www.checkmarx.com/products/static-application-security-testing) :copyright: — 不需要预编译的商业静态代码分析。

- [ClassGraph](https://github.com/classgraph/classgraph) — 用于查询或可视化类元数据或类相关性的类路径和模块路径扫描器。

- [Clayton](https://www.getclayton.com/) :copyright: — 为 Salesforce 提供 AI 代码审查。保护您的开发成果，执行最佳实践，并实时控制您的技术债务。

- [coala](https://coala.io) :warning: — 用于创建代码分析的独立于语言的框架 - 默认支持[超过 60 种语言](https://coala.io/languages)。

- [Cobra](https://spinroot.com/cobra) :copyright: — 由美国国家航空航天局喷气推进实验室开发的结构源代码分析器。

- [Codacy](https://www.codacy.com) :copyright: — 代码分析可以更快地交付更好的代码。

- [Code Intelligence](https://www.code-intelligence.com) :copyright: — CI/CD 不可知的 DevSecOps 平台，结合了业界领先的模糊测试引擎，用于查找错误和可视化代码覆盖率

- [Codeac](https://www.codeac.io/?ref=awesome-static-analysis) :copyright: — 自动代码审查工具与 GitHub、Bitbucket 和 GitLab 集成（甚至自托管）。适用于 JavaScript、TypeScript、Python、Ruby、Go、PHP、Java、Docker 等。（开源免费）

- [codeburner](https://groupon.github.io/codeburner) — 提供统一的界面来对发现的问题进行分类和处理。

- [codechecker](https://codechecker.readthedocs.io/en/latest) — 带有 Web GUI 的 Clang 静态分析器的缺陷数据库和查看器扩展。

- [CodeFactor](https://codefactor.io) :copyright: — 对 GitHub 或 BitBucket 上的存储库进行自动代码分析。

- [CodeFlow](https://www.getcodeflow.com) :copyright: — 自动代码分析工具，用于处理技术深度问题。与 Bitbucket 和 Gitlab 集成。（对开源项目免费）

- [CodeIt.Right](https://submain.com/products/codeit.right.aspx) :copyright: — CodeIt.Right™ 提供一种快速、自动化的方法来确保您的源代码遵守（您的）预定义的设计和样式指南以及最佳编码实践。

- [Codemodder](https://codemodder.io/) — Codemodder 是一个可插入的框架，用于构建富有表现力的 codemods。如果您需要的不仅仅是 linter 或代码格式化工具，请使用 Codemodder。使用它来修复非平凡的安全问题和其他代码质量问题。

- [CodePatrol](https://cyber-security.claranet.fr/en/codepatrol) :copyright: — 由安全驱动的自动 SAST 代码审查，支持 15 种以上语言并包含安全培训。

- [codeql](https://github.com/github/codeql) — 深度代码分析 - 通过 VSCode 插件支持多种语言的语义查询和数据流。

- [CodeQue](https://codeque.co) — 用于结构匹配 JavaScript 和 TypeScript 代码的生态系统。提供理解代码结构的搜索工具。可用作 CLI 工具和 Visual Studio Code 扩展。它有助于更​​快、更准确地搜索代码，从而使您的工作流程更有效。很快它将提供 ESLint 插件，让您在几分钟内创建自己的规则，以帮助确保代码库质量。

- [CodeRush](https://www.devexpress.com/products/coderush) :copyright: — 使用 Visual Studio 2015 及更高版本中的 Roslyn 引擎的代码创建、调试、导航、重构、分析和可视化工具。

- [CodeScan](https://www.codescan.io/) :copyright: — 为 Salesforce 开发人员提供代码质量和安全性。CodeScan 的代码分析解决方案专为 Salesforce 平台打造，可让您全面了解代码的健康状况。

- [CodeScene](https://codescene.com) :copyright: — CodeScene 是一款软件质量可视化工具。可确定技术债务的优先级、检测交付风险并衡量组织方面。完全自动化。

- [CodeSee](https://www.codesee.io/) :copyright: — CodeSee 正在映射和自动化您的应用的服务、目录、文件依赖项和代码更改。它就像 Google Map，但适用于 code.t

- [GrammaTech 的 CodeSonar](https://codesecure.com/our-products/codesonar/) :copyright: — 高级、完整程序、深度路径、C、C++、Java 和 C# 的静态分析，带有易于理解的解释以及代码和路径可视化。

- [Codety](https://www.codety.io) :copyright: — Codety Scanner 是一款综合性的源代码扫描器，嵌入了 5000 多个静态代码分析规则，旨在检测 20 多种编程语言和 IaC 工具的代码问题。

- [Codiga](https://www.codiga.io) :copyright: — 支持 12 种以上语言的自动代码审查和技术债务管理平台。

- [Corrode](https://github.com/jameysharp/corrode) :warning: — 从 C 到 Rust 的半自动翻译。可以通过显示 Rust 编译器警告和错误来揭示原始实现中的错误。已被 C2Rust 取代。

- [Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — Synopsys Coverity 支持 20 种语言和 70 多个框架，包括 Ruby on rails、Scala、PHP、Python、JavaScript、TypeScript、Java、Fortran、C、C++、C#、VB.NET。

- [cpp-linter-action](https://cpp-linter.github.io/cpp-linter-action/) — 一个 Github Action，用于对 C/C++ 代码进行 linting，集成 clang-tidy 和 clang-format，以收集以线程注释和/或注解形式提供的反馈。

- [cqc](https://github.com/xcatliu/cqc) :warning: — 检查 js、jsx、vue、css、less、scss、sass 和 styl 文件的代码质量。

- [DeepCode](https://www.deepcode.ai) :warning: :copyright: — DeepCode 已被 Snyk 收购，现为 Snyk Code。

- [DeepSource](https://deepsource.com) :copyright: — 深入静态分析，发现漏洞风险、安全性、反模式、性能、文档和风格等垂直领域的问题。与 GitHub、GitLab 和 Bitbucket 本地集成。误报率低于 5%。

- [Depends](https://github.com/multilang-depends/depends) — 分析 Java、C/C++、Ruby 代码元素的综合依赖关系。

- [DevSkim](https://github.com/microsoft/devskim) — 基于正则表达式的 Visual Studio、VS Code 和 Sublime Text 静态分析工具 - C/C++、C#、PHP、ASP、Python、Ruby、Java 等。

- [dotenet-format](https://github.com/dotnet/format) — .NET 的代码格式化程序。如果存在 `.editorconfig` 文件，则将从该文件中读取首选项，否则将使用一组默认首选项。目前，dotnet-format 能够使用受支持的 `.editorconfig` 选项子集来格式化 C# 和 Visual Basic 项目。

- [Embold](https://embold.io) :copyright: — 智能软件分析平台，可识别设计问题、代码问题、重复和指标。支持 Java、C、C++、C#、JavaScript、TypeScript、Python、Go、Kotlin 等。

- [emerge](https://github.com/glato/emerge) — Emerge 是一个源代码和依赖项可视化工具，可用于收集有关源代码结构、指标、依赖项和软件项目复杂性的见解。扫描项目源代码后，它会为您提供一个交互式 Web 界面，以便使用图形结构探索和分析您的项目。

- [ESLint](https://github.com/eslint/eslint) — 一个可扩展的 JS linter，遵循 ECMAScript 标准。

- [ezno](https://kaleidawave.github.io/posts/introducing-ezno/) — 用 Rust 编写的 JavaScript 编译器和 TypeScript 检查器，专注于静态分析和运行时性能。Ezno 的类型检查器是从头开始构建的。该检查器与 TypeScript 类型注释完全兼容，无需任何类型注释即可工作。

- [查找安全漏洞]（https://find-sec-bugs.github.io）— 用于 Java Web 应用程序和 Android 应用程序安全审计的 SpotBugs 插件。（也适用于 Kotlin、Groovy 和 Scala 项目）

- [Fortify](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer) :copyright: — 一个商业静态分析平台，支持 C/C++、C#、VB.NET、VB6、ABAP/BSP、ActionScript、Apex、ASP.NET、Classic ASP、VB Script、Cobol、ColdFusion、HTML、Java、JS、JSP、MXML/Flex、Objective-C、PHP、PL/SQL、T-SQL、Python (2.6、2.7)、Ruby (1.9.3)、Swift、Scala、VB 和 XML 的扫描。

- [Freeplane 代码浏览器](https://docs.freeplane.org/user-documentation/Code_Explorer.html) — Freeplane 中的代码浏览器模式旨在分析编译为 JVM 类文件的代码的结构和依赖关系。如果 Freeplane 正在运行且 ArchUnit 在测试期间检测到规则违规，它还允许直接在 Freeplane 中显示 ArchUnit 测试结果。


- [Goodcheck](https://sider.github.io/goodcheck) — 基于正则表达式的可定制 linter。

- [goone](https://github.com/masibw/goone) :warning: — 在 go 代码中查找 N+1 个查询（for 循环中的 SQL 调用）

- [graudit](http://www.justanotherhacker.com) — Grep 粗略审计 - 源代码审计工具。

- [HCL AppScan 源](https://www.hcltechsw.com/products/appscan) :copyright: — 商业静态代码分析。

- [Hopper](https://github.com/cuplv/hopper) :warning: — 用 scala 编写的针对在 JVM 上运行的语言的静态分析工具。

- [Hound CI](https://houndci.com) :warning: — 对 GitHub 拉取请求中的样式违规进行评论。支持 Coffeescript、Go、HAML、JavaScript、Ruby、SCSS 和 Swift。

- [imhotep](https://github.com/justinabrahms/imhotep) :warning: — 对进入您存储库的提交进行评论并检查语法错误和常规 lint 警告。

- [include-gardener](https://github.com/feddischson/include_gardener) :warning: — 一种针对 C/C++/Obj-C/Python/Ruby 的多语言静态分析器，用于创建图表（以 dot 或 graphml 格式）来显示给定文件集的所有 `#include` 关系。

- [Infer](https://fbinfer.com) — Java、C 和 Objective-C 的静态分析器

- [Kiuwan](https://www.kiuwan.com/code-security-sast) :copyright: — 在极快的协作环境中识别和补救网络威胁，并与您的 SDLC 无缝集成。Python、C\C++、Java、C#、PHP 等。

- [Klocwork](https://www.perforce.com/products/klocwork) :copyright: — 针对 C/C++、Java 和 C# 的质量和安全静态分析。

- [LGTM](https://lgtm.com/) :copyright: — 使用 CodeQL 查询源代码查找安全漏洞、变体和关键代码质量问题。自动 PR 代码审查；免费开源。前身为 semmle。它支持托管在 Bitbucket Cloud、GitHub.com、GitLab.com 上的公共 Git 存储库。

- [lizard](https://github.com/terryyin/lizard) — Lizard 是一款可扩展的循环复杂度分析器，适用于多种编程语言，包括 C/C++（不需要所有头文件或 Java 导入）。它还可以进行复制粘贴检测（代码克隆检测/代码重复检测）和许多其他形式的静态代码分析。计算无注释的代码行数、CCN（循环复杂度数）、函数的标记数、函数的参数数。

- [Mega-Linter](https://nvuillam.github.io/mega-linter/) — Mega-Linter 拥有 70 多个嵌入式 Linters，可以处理任何类型的项目。
  其先进的报告功能可在任何 CI 系统或本地运行，
  通过协助安装和配置，能够应用格式和修复

- [Mobb](https://mobb.ai) :copyright: — Mobb 是一款值得信赖的自动漏洞修复程序，可保护应用程序、减少安全积压并让开发人员专注于创新。Mobb 对开源项目免费。

- [MOPSA](https://mopsa.lip6.fr) — 一种静态分析器，旨在轻松地跨不同语言（如 C 和 Python）重用抽象域。

- [oclint](http://oclint.org) :warning: — 一种静态源代码分析工具，用于提高 C、C++ 和 Objective-C 的质量并减少缺陷。

- [Offensive 360​​](https://offensive360.com/) :copyright: — 商业静态代码分析系统不需要构建源代码或预编译。

- [OpenRewrite](https://docs.openrewrite.org/) — OpenRewrite [修复了通过 Sonar 和其他工具使用 Maven 和 Gradle 插件或 Moderne CLI 报告的常见静态分析问题](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/common-static-analysis-issue-remediation)。

- [OpenStaticAnalyzer](https://github.com/sed-inf-u-szeged/OpenStaticAnalyzer) — OpenStaticAnalyzer 是一个源代码分析工具，可以对复杂系统的源代码进行深度静态分析。

- [oxc](https://github.com/web-infra-dev/oxc) — Oxidation Compiler 正在为用 Rust 重写的 JavaScript / TypeScript 语言创建一套高性能工具。

- [parasoft](https://www.parasoft.com/) :copyright: — 用于单元、API 和 Web UI 测试的自动化软件测试解决方案。符合 MISRA、OWASP 和其他标准。

- [pfff](https://github.com/facebookarchive/pfff/wiki/Main) :warning: — Facebook 用于多种语言的代码分析、可视化或保留样式的源转换的工具。

- [Pixee](https://pixee.ai) :copyright: — Pixeebot 会查找您代码中的安全性和代码质量问题，并创建可合并的拉取请求以及建议的修复方法。

- [PMD](https://pmd.github.io) — Java、Salesforce Apex、Javascript、PLSQL、XML、XSL 等的源代码分析器。

- [pre-commit](https://pre-commit.com) — 用于管理和维护多语言预提交钩子的框架。

- [Precaution](https://www.securesauce.dev/) — Precaution 是一种静态分析安全工具 (SAST)，旨在在生产之前查找源代码中潜在的严重漏洞。它可作为 CLI、GitHub Action 和 GitHub App 使用。

- [Prettier](https://prettier.io) — 一个有主见的代码格式化程序。

- [Pronto](https://github.com/prontolabs/pronto) — 快速自动审查代码变更。支持 40 多种语言的运行器，包括 Clang、Elixir、JavaScript、PHP、Ruby 等。

- [PT.PM](https://github.com/PositiveTechnologies/PT.PM) :warning: — 基于统一 AST 或 UST 的源代码模式搜索引擎。目前支持 C#、Java、PHP、PL/SQL、T-SQL 和 JavaScript。可以在代码中或使用 DSL 描述模式。

- [Putout](https://github.com/coderaiser/putout) — 可插拔、可配置的代码转换器，内置 eslint、babel 插件支持 js、jsx typescript、flow、markdown、yaml 和 json。

- [PVS-Studio](https://pvs-studio.com) :copyright: — 对 C、C++、C# 和 Java 代码进行静态分析（[有条件免费](https://pvs-studio.com/en/order/open-source-license)，适用于 FOSS 和个人开发者。出于广告目的 [您可以提出一个大型 FOSS 项目供 PVS 员工进行分析](https://github.com/viva64/pvs-studio-check-list)。支持 CWE 映射、OWASP ASVS、MISRA、AUTOSAR 和 SEI CERT 编码标准。

- [pylama](https://klen.github.io/pylama/) — Python 和 JavaScript 的代码审计工具。包含 pycodestyle、pydocstyle、PyFlakes、Mccabe、Pylint 等

- [Qwiet AI](https://qwiet.ai/) :copyright: — 在代码库投入生产之前识别出代码库独有的漏洞。利用代码属性图 (CPG) 在单个图形中同时运行分析。自动查找开发中的业务逻辑缺陷，如硬编码机密和逻辑炸弹

- [重构要点](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.RefactoringEssentialsforVisualStudio) — 针对 C# 和 VB.NET 重构的免费 Visual Studio 2015 扩展，包括代码最佳实践分析器。

- [relint](https://github.com/codingjoe/relint) — 一个静态文件 linter，允许您使用正则表达式 (RegEx) 编写自定义规则。

- [ReSharper](https://www.jetbrains.com/resharper) :copyright: — 通过对 C#、VB.NET、ASP.NET、JavaScript、TypeScript 和其他技术的实时代码检查来扩展 Visual Studio。

- [RIPS](https://www.ripstech.com) :copyright: — 用于检测 PHP 脚本漏洞的静态源代码分析器。

- [Roslyn 分析器](https://github.com/dotnet/roslyn-analyzers) — 基于 Roslyn 的 FxCop 分析器实现。

- [Roslyn Security Guard](https://security-code-scan.github.io) — 该项目专注于识别潜在漏洞，例如 SQL 注入、跨站点脚本 (XSS)、CSRF、加密弱点、硬编码密码等。

- [SafeQL](https://safeql.dev) — 从 PostgreSQL 中的原始 SQL 查询验证并自动生成 TypeScript 类型。SafeQL 是一个 ESLint 插件，用于以类型安全的方式编写 SQL 查询。

- [SAST Online](https://sast.online/) :copyright: — 彻底检查 Android 源代码，发现并解决潜在的安全问题和漏洞。静态应用程序安全测试（静态代码分析）工具在线

- [Scrutinizer](https://scrutinizer-ci.com) :copyright: — 可与 GitHub 集成的专有代码质量检查器。

- [安全代码扫描](https://security-code-scan.github.io) — C# 和 VB.NET 的安全代码分析器。检测各种安全漏洞模式：SQLi、XSS、CSRF、XXE、Open Redirect 等。集成到 Visual Studio 2015 及更新版本中。检测各种安全漏洞模式：SQLi、XSS、CSRF、XXE、Open Redirect 等。

- [Semgrep](https://semgrep.dev) — 一款快速、开源、静态分析工具，用于在编辑器、提交和 CI 时查找错误并强制执行代码标准。其规则看起来就像您已经编写的代码；没有抽象语法树或正则表达式。支持 17 种以上的语言。

- [Semgrep Supply Chain](https://semgrep.dev/products/semgrep-supply-chain) :copyright: — 快速查找并修复高优先级安全问题。Semgrep Supply Chain 优先处理可从您的代码中发现的 2% 漏洞。

- [ShiftLeft Scan](https://github.com/ShiftLeftSecurity/sast-scan) — Scan 是一个免费的开源 DevSecOps 平台，用于检测源代码和依赖项中的安全问题。它支持多种语言和 CI/CD 管道。

- [shipshape](https://github.com/google/shipshape) :warning: — 静态程序分析平台，允许自定义分析器通过通用接口插入。

- [Sigrid](https://www.softwareimprovementgroup.com/solutions/sigrid-software-assurance-platform/) :copyright: — Sigrid 通过测量系统的代码质量来帮助您改进软件，然后将结果与数千个行业系统的基准进行比较，为您提供有关可改进领域的具体建议。

- [相似性测试器](https://dickgrune.com/Programs/similarity_tester/) — 一种在文件之间或文件内部查找相似性的工具，可帮助您发现违反 DRY 原则的情况。

- [Snyk Code](https://snyk.io) :copyright: — Snyk Code 基于 AI 查找安全漏洞。其分析速度使我们能够实时分析您的代码，并在您点击 IDE 中的保存按钮时提供结果。支持的语言包括 Java、JavaScript、Python、PHP、C#、Go 和 TypeScript。与 GitHub、BitBucket 和 Gitlab 集成。它可以免费试用，并且是 Snyk 平台的一部分，还涵盖 SCA、容器和 IaC。

- [SonarCloud](https://sonarcloud.io) :copyright: — SonarCloud 使您的团队能够使用代码审查工具一致、高效地交付干净的代码，该工具可轻松集成到云 DevOps 平台并扩展您的 CI/CD 工作流程。SonarCloud 对开源项目免费。

- [SonarLint](https://sonarlint.org) — SonarLint 是一款适用于 IntelliJ、VS Code、Visual Studio 和 Eclipse 的免费 IDE 扩展，可实时查找和修复编码问题，并在编码时标记问题，就像拼写检查器一样。它不仅仅是一个 linter，还提供丰富的上下文指导，帮助开发人员了解问题的原因、评估风险并指导他们如何修复问题。

- [SonarQube](https://sonarqube.org) — SonarQube 为开发团队提供代码质量和安全解决方案，该解决方案可深度集成到您的企业环境中；使您能够一致且可靠地部署干净的代码。SonarQube 提供免费的开源社区版。

- [Sonatype](https://www.sonatype.com) :copyright: — 报告常见依赖项中的已知漏洞，并建议更新软件包以尽量减少重大更改

- [Soto 平台](https://www.hello2morrow.com/products/sotograph) :copyright: — 静态分析工具套件，由 Sotoarc（架构分析）、Sotograph（质量分析）和 Sotoreport（质量报告）三个组件组成。帮助查找架构和实现之间的差异、接口违规（例如外部访问子系统的私有部分、检测所有通过循环关系紧密耦合的类、文件、包和子系统等）。Sotograph 产品系列可在 Windows 和 Linux 上运行。

- [SourceMeter](https://www.sourcemeter.com/) :copyright: — 针对 C/C++、Java、C#、Python 以及 RPG III 和 RPG IV 版本（包括自由形式）进行静态代码分析。

- [sqlvet](https://github.com/houqp/sqlvet) — 对 Go 代码库中的原始 SQL 查询执行静态分析，以发现潜在的运行时错误。它会检查 SQL 语法错误，识别可能导致 SQL 注入的不安全查询，确保列数与 INSERT 语句中的值数匹配，并验证表名和列名。

- [StaticReviewer](https://securityreviewer.atlassian.net/wiki/spaces/KC/pages/196633/Static+Reviewer) :copyright: — Static Reviewer 根据最相关的安全编码标准 OWASP、CWE、CVE、CVSS、MISRA、CERT 对 40 多种编程语言执行代码检查，使用 1000 多种内置验证规则来确保安全性、死代码与最佳实践，提供软件组合分析 (SCA) 模块来查找开源和第三方库中的漏洞。

- [Super-Linter](https://github.com/github/super-linter) — 组合多个 linter 以作为 GitHub Action 安装。

- [Svace](https://www.ispras.ru/en/technologies/svace/) :copyright: — Java、C、C++、C#、Go 的静态代码分析工具。

- [Synopsys](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — 一个商业静态分析平台，允许扫描多种语言（C/C++、Android、C#、Java、JS、PHP、Python、Node.JS、Ruby、Fortran 和 Swift）。

- [Teamscale](https://www.cqse.eu/en/teamscale/overview/) :copyright: — 支持超过 25 种语言和直接 IDE 集成的静态和动态分析工具。可根据要求提供免费的开源项目托管。提供免费的学术许可证。

- [TencentCodeAnalysis](https://tca.tencent.com/) — 腾讯云代码分析（简称TCA，公司内部早期代号CodeDog）是一个综合的代码分析和问题追踪平台。TCA由服务端、Web端和客户端三个组件组成，集成了多款自研工具，同时支持动态集成多种编程语言的代码分析工具。

- [ThreatMapper](https://github.com/deepfence/ThreatMapper) — 运行时容器、无服务器和主机的漏洞扫描和风险评估。ThreatMapper 从依赖项和操作系统包生成运行时 BOM，与多个威胁源进行匹配，扫描未受保护的机密，并根据严重性和利用风险对问题进行评分。

- [todocheck](https://github.com/preslavmihaylov/todocheck) — 用于将带注释的 TODO 与问题跟踪器集成的 Linter

- [trivy](https://github.com/aquasecurity/trivy) — 一款简单全面的容器和其他工件漏洞扫描器，适用于 CI。Trivy 可检测操作系统软件包（Alpine、RHEL、CentOS 等）和应用程序依赖项（Bundler、Composer、npm、yarn 等）的漏洞。检查容器和文件系统。


- [trunk](https://trunk.io) :copyright: — 现代存储库包含许多技术，每种技术都有自己的一套 linters。Trunk 拥有 30 多种 linters，并且数量还在不断增加，因此您可以非常轻松地识别、安装、配置和运行适合您所有存储库的 linters、静态分析器和格式化程序。

- [TscanCode](https://github.com/Tencent/TscanCode) — 腾讯提供的针对 C/C++、C#、Lua 代码的快速、精准静态分析解决方案。采用 GPLv3 许可。

- [Undebt](https://github.com/Yelp/undebt) — 基于简单模式定义进行大规模、自动、可编程重构的独立于语言的工具。

- [了解]（https://www.scitools.com）：版权：— 代码可视化工具，为 Ada、VHDL 和其他语言提供代码分析、标准测试、指标、图形、依赖性分析等。

- [Unibeautify](https://unibeautify.com) :warning: — 带有 GitHub 应用程序的通用代码美化器。支持 HTML、CSS、JavaScript、TypeScript、JSX、Vue、C++、Go、Objective-C、Java、Python、PHP、GraphQL、Markdown 等。

- [Upsource](https://www.jetbrains.com/upsource) :copyright: — 具有静态代码分析和针对 Java、PHP、JavaScript 和 Kotlin 的代码感知导航的代码审查工具。

- [Veracode](https://www.veracode.com/security/static-code-analysis) :copyright: — 无需源代码即可查找二进制文件和字节码中的缺陷。支持所有主流编程语言：Java、.NET、JavaScript、Swift、Objective-C、C、C++ 等。

- [WALA](https://github.com/wala/WALA) — Java 字节码和相关语言以及 JavaScript 的静态分析功能。

- [weggli](https://github.com/googleprojectzero/weggli) — 一款针对 C 和 C++ 代码库的快速而强大的语义搜索工具。旨在帮助安全研究人员在大型代码库中识别有趣的功能。

- [WhiteHat 应用安全平台](https://www.whitehatsec.com/platform/static-application-security-testing) :copyright: — WhiteHat Scout (针对开发者) 与 WhiteHat Sentinel Source (针对运营) 相结合，支持 WhiteHat Top 40 和 OWASP Top 10。

- [Wotan](https://github.com/fimbullinter/wotan) :warning: — 可插入的 TypeScript 和 JavaScript linter。

- [XC​​ode](https://developer.apple.com/xcode) :copyright: — XCode 为 [Clang](https://clang-analyzer.llvm.org/xcode.html) 静态代码分析器 (C/C++, Obj-C) 提供了相当不错的 UI。


＃＃ 其他



<a name="dotenv" />
<h2> .环境</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。


<a 名称="ansible" />
<h2>Ansible</h2>


- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook 扫描工具，可分析您的剧本并提供建议。


<a name="存档" />
<h2>存档</h2>


- [alquitran](https://github.com/ferivoz/alquitran) — 检查 tar 档案并尝试发现与 POSIX 2017 pax 规范和常见 tar 实现有关的可移植性问题。
  该项目旨在供希望为尽可能多的系统提供可移植源代码档案的项目维护者使用。在发布 tar 档案之前使用 alquitran 检查它们应该有助于在它们到达分销商和用户之前发现问题。

- [packj](https://packj.dev) — Packj（发音为 package）是一个命令行 (CLI) 工具，用于审查开源软件包是否存在“危险”属性，这些属性会导致它们容易受到供应链攻击。这是我们大型安全分析平台 Packj.dev 背后的工具，该平台会持续审查软件包并提供免费报告。

- [pure](https://github.com/ronomon/pure) :warning: — Pure 是一个静态分析文件格式检查器，可检查 ZIP 文件中是否存在危险的压缩率、规格偏差、恶意存档签名、不匹配的本地和中央目录头、模糊的 UTF-8 文件名、目录和符号链接遍历、无效的 MS-DOS 日期、重叠头、溢出、下溢、稀疏、意外缓冲区溢出等。


<a 名称="arm" />
<h2>Azure 资源管理器</h2>


- [AzSK](https://azsk.azurewebsites.net/) — 适用于 Azure 的安全 DevOps 工具包 (AzSK) 提供安全 IntelliSense、安全验证测试 (SVT)、CICD 扫描漏洞、合规性问题以及基础设施即代码中的基础设施配置错误。通过 ARM 支持 Azure。


<a 名称="二进制" />
<h2>二进制文件</h2>


- [angr](https://github.com/angr/angr) — 支持符号执行的二进制代码分析工具。

- [binbloom](https://github.com/quarkslab/binbloom) — 分析原始二进制固件并确定字节序或加载地址等特性。该工具与所有架构兼容。
  加载地址：binbloom 可以解析原始二进制固件并确定其加载地址。字节序：binbloom 可以使用启发式方法来确定固件的字节序。UDS 数据库：binbloom 可以解析原始二进制固件并检查其是否包含包含 UDS 命令 ID 的数组。

- [BinSkim](https://github.com/Microsoft/binskim) — 一种二进制静态分析工具，为 Windows 可移植可执行文件提供安全性和正确性结果。

- [Black Duck](https://www.blackducksoftware.com) :copyright: — 用于分析源代码和二进制文件以查找可重用代码、必要的许可证和潜在的安全方面。

- [bloaty](https://github.com/google/bloaty) — 有没有想过是什么让你的二进制文件变大了？Bloaty McBloatface 会向你展示二进制文件的大小概况，这样你就可以了解里面占用了多少空间。Bloaty 会对二进制文件进行深入分析。使用自定义 ELF、DWARF 和 Mach-O 解析器，Bloaty 旨在准确地将二进制文件的每个字节归因于生成它的符号或编译单元。它甚至会反汇编二进制文件以查找对匿名数据的引用。F

- [cargo-bloat](https://github.com/RazrFalcon/cargo-bloat) — 找出可执行文件中占用大部分空间的内容。支持 ELF (Linux、BSD)、Mach-O (macOS) 和 PE (Windows) 二进制文件。

- [cwe_checker](https://github.com/fkie-cad/cwe_checker) — cwe_checker 查找二进制可执行文件中的易受攻击的模式。

- [Ghidra](https://ghidra-sre.org) — 由 NSA 研究理事会为支持网络安全任务而开发的软件逆向工程 (SRE) 工具套件

- [Hopper](https://www.hopperapp.com/) :copyright: — macOS 和 Linux 逆向工程工具，可让您反汇编、反编译和调试应用程序。Hopper 使用不同的表示形式显示代码，例如控制流图和过程的伪代码。支持 Apple Silicon。

- [IDA Free](https://www.hex-rays.com/products/ida/support/download_freeware) :copyright: — 二进制代码分析工具。

- [Jakstab](https://github.com/jkinder/jakstab) — Jakstab 是一个基于抽象解释的集成反汇编和静态分析框架，用于设计可执行文件的分析并恢复可靠的控制流图。

- [JEB 反编译器](https://www.pnfsoftware.com/) :copyright: — 反编译和调试二进制代码。分解和分析文档文件。Android Dalvik、MIPS、ARM、Intel x86、Java、WebAssembly 和 Ethereum 反编译器。

- [ktool](https://ktool.cynder.me/en/latest/ktool.html) — 用于 MachO+Obj-C 编辑/分析的完全跨平台工具包和库。包括 cli 工具包、curses GUI、ObjC 标头转储等。

- [Manalyze](https://github.com/JusticeRage/Manalyze) — 静态分析器，用于检查可移植可执行文件中是否存在恶意内容。

- [mcsema](https://github.com/lifting-bits/mcsema) :warning: — 用于将 x86、amd64、aarch64、sparc32 和 sparc64 程序二进制文件提升为 LLVM 位码的框架。它将可执行二进制文件从本机机器代码转换（“提升”）为 LLVM 位码，这对于执行程序分析方法非常有用。

- [Nauz 文件检测器](https://github.com/horsicq/Nauz-File-Detector) — 适用于 Windows、Linux 和 MacOS 的静态链接器/编译器/工具检测器。

- [rust-audit](https://github.com/Shnatsel/rust-audit) — 审计 Rust 二进制文件中的已知错误或安全漏洞。其工作原理是将有关依赖关系树 (Cargo.lock) 的数据以 JSON 格式嵌入到已编译可执行文件的专用链接器部分中。

- [Twiggy](https://rustwasm.github.io/twiggy) — 分析二进制文件的调用图以分析代码大小。目标是减小 wasm 二进制文件的大小。

- [VMware chap](https://github.com/vmware/chap) — chap 分析未检测的 ELF 核心文件是否存在泄漏、内存增长和损坏。它足够可靠，可以用于自动化，在泄漏发生之前捕获泄漏。作为一个交互式工具，它有助于解释内存增长，可以识别某些形式的损坏，并通过提供各种内存位置的状态来补充调试器。

- [zydis](https://zydis.re) — 快速、轻量的 x86/x86-64 反汇编库


<a name="buildtool" />
<h2>构建工具</h2>


- [checkmake](https://github.com/mrtazz/checkmake) :warning: — Makefile 的 Linter/分析器。

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — FreeBSD 和 DragonFlyBSD 端口目录的验证程序。


<a 名称="css" />
<h2>CSS/SASS/SCSS</h2>


- [CSS Stats](https://cssstats.com) — 有关样式表的潜在有趣统计数据。

- [CSScomb](https://github.com/csscomb/csscomb.js) — CSS 编码样式格式化程序。支持自定义配置，让样式表美观且一致。

- [CSSLint](http://csslint.net) — 进行基本的语法检查并查找有问题的模式或效率低下的迹象。

- [GraphMyCSS.com](https://graphmycss.com) — CSS 特殊性图表生成器。

- [Nu Html Checker](https://validator.github.io/validator/) — 帮助你捕捉 HTML/CSS/SVG 中的问题

- [Parker](https://github.com/katiefenn/parker) :warning: — 样式表分析工具。

- [PostCSS](https://postcss.org) — 一款使用 JS 插件转换样式的工具。这些插件可以检查 CSS、支持变量和混合、转换未来的 CSS 语法、内联图像等。

- [Project Wallace CSS 分析器](https://www.projectwallace.com) — CSS 分析器，是 [Project Wallace](https://www.projectwallace.com) 的一部分。

- [sass-lint](https://github.com/sasstools/sass-lint) :warning: — 仅适用于 Node 的 Sass linter，适用于 sass 和 scss 语法。

- [scsslint](https://github.com/brigade/scss-lint) — 用于 SCSS 文件的 Linter。

- [特异性图]（https://jonassebastianohlsson.com/specificity-graph）— CSS 特异性图生成器。

- [Stylelint](http://stylelint.io) — 用于 SCSS/CSS 文件的 Linter。


<a name="配置文件" />
<h2>配置文件</h2>


- [dotenv-linter](https://dotenv-linter.readthedocs.io/en/latest) — 轻松对 dotenv 文件进行 Linting。

- [dotenv-linter (Rust)](https://dotenv-linter.github.io/#/) — .env 文件的闪电般快速的 linter。用 Rust 编写

- [gixy](https://github.com/yandex/gixy) — 一款用于分析 Nginx 配置的工具。主要目标是防止配置错误并自动检测缺陷。


<a name="配置管理" />
<h2>配置管理</h2>


- [ansible-lint](https://docs.ansible.com/ansible-lint) — 检查剧本中可能改进的实践和行为。

- [AWS CloudFormation Guard](https://github.com/aws-cloudformation/cloudformation-guard) — 根据策略即代码规则检查本地 CloudFormation 模板并从现有模板生成规则。

- [AzSK](https://azsk.azurewebsites.net/) — 适用于 Azure 的安全 DevOps 工具包 (AzSK) 提供安全 IntelliSense、安全验证测试 (SVT)、CICD 扫描漏洞、合规性问题以及基础设施即代码中的基础设施配置错误。通过 ARM 支持 Azure。

- [cfn-lint](https://github.com/awslabs/cfn-python-lint) — AWS 实验室 CloudFormation linter。

- [cfn_nag](https://github.com/stelligent/cfn_nag) — AWS CloudFormation 模板的 linter。

- [checkov](https://www.checkov.io) — Terraform 文件的静态分析工具（tf>=v0.12），防止构建时云配置错误。

- [cookstyle](https://docs.chef.io/cookstyle.html) — Cookstyle 是一款基于 RuboCop Ruby linting 工具的 Chef 食谱检查工具。

- [foodcritic](http://www.foodcritic.io) — 一款用于检查 Chef 菜谱中常见问题的 lint 工具。

- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [metadata-json-lint](https://github.com/voxpupuli/metadata-json-lint) — 用于检查 Puppet metadata.json 文件有效性的工具。

- [Puppet Lint](https://github.com/rodjek/puppet-lint) :warning: — 检查你的 Puppet 清单是否符合样式指南。

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook 扫描工具，可分析您的剧本并提供建议。

- [terraform-compliance](https://terraform-compliance.com) — 一个针对 Terraform 的轻量级、合规性和安全性为重点的 BDD 测试框架。

- [terrascan](https://github.com/cesar-rodriguez/terrascan) — Terraform 模板静态代码分析的安全性和最佳实践测试集合。

- [tflint](https://github.com/wata727/tflint) — 一个 Terraform linter，用于检测 `terraform plan` 无法检测到的错误。

- [tfsec](https://github.com/tfsec/tfsec) — Terraform 静态分析工具，通过在构建时检查云配置错误来防止潜在的安全问题，并直接与 HCL 解析器集成以获得更好的结果。检查是否违反了 AWS、Azure 和 GCP 安全最佳实践建议。


<a name="容器" />
<h2>容器</h2>


- [anchore](https://anchore.io) — 发现、分析和认证容器镜像。该服务可分析 Docker 镜像并应用用户定义的验收策略，以允许自动验证和认证容器镜像

- [clair](https://github.com/coreos/clair) — 容器漏洞静态分析。

- [collector](https://github.com/banyanops/collector) :warning: — 在容器内运行任意脚本，并收集有用的信息。

- [dagda](https://github.com/eliasgranderubio/dagda) :warning: — 对 docker 镜像/容器中已知漏洞进行静态分析。

- [Docker Label Inspector](https://github.com/garethr/docker-label-inspector) :warning: — Lint 并验证 Dockerfile 标签。

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。

- [Haskell Dockerfile Linter](https://github.com/lukasmartinelli/hadolint) — 一个更智能的 Dockerfile linter，可帮助您构建最佳实践的 Docker 镜像。

- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [krane](https://github.com/appvia/krane) :warning: — Krane 是一个简单的 Kubernetes RBAC 静态分析工具。
  它识别了 K8s RBAC 设计中的潜在安全风险并提出了缓解建议。Krane 仪表板显示当前的 RBAC 安全态势并让您浏览其定义。

- [OpenSCAP](https://www.open-scap.org/) — 一套自动审计工具，用于按照 NIST 认证的安全内容自动化协议 (SCAP) 检查配置和已知漏洞。

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — 容器原生应用程序保护，提供容器化应用程序的可见性和控制。

- [sysdig](https://sysdig.com/) :copyright: — 一个用于云和容器取证的安全 DevOps 平台。Sysdig 建立在开源堆栈上，提供 Docker 镜像扫描，并创建了 Falco，这是用于容器、Kubernetes 和云的运行时威胁检测的开放标准。

- [Vuls](https://vuls.io/) — 基于 NVD、OVAL 等信息的无代理 Linux 漏洞扫描程序。它具有一些容器映像支持，尽管它不是特定于容器的工具。


<a 名称="ci" />
<h2>持续集成</h2>


- [actionlint](https://rhysd.github.io/actionlint) — GitHub Actions 工作流文件的静态检查器。提供在线版本。

- [AzSK](https://azsk.azurewebsites.net/) — 适用于 Azure 的安全 DevOps 工具包 (AzSK) 提供安全 IntelliSense、安全验证测试 (SVT)、CICD 扫描漏洞、合规性问题以及基础设施即代码中的基础设施配置错误。通过 ARM 支持 Azure。

- [Code Climate](https://codeclimate.com) — 开放且可扩展的静态分析平台，适合所有人。

- [Codecov](https://about.codecov.io/) :copyright: — Codecov 是一家为开发人员和工程领导者提供代码覆盖率工具的公司，以了解他们的代码覆盖率。
  它们提供灵活统一的报告、无缝的覆盖率洞察和强大的覆盖率控制。Codecov 支持 20 多种语言，并且与 CI/CD 无关。超过 29,000 个组织和 100 万开发人员使用 Codecov。Codecov 最近加入了 Sentry。

- [CodeRabbit](https://coderabbit.ai) :copyright: — 人工智能代码审查工具，可帮助开发人员更快地编写更好的代码。CodeRabbit 提供自动代码审查，识别安全漏洞并建议代码改进。它与 GitHub 和 GitLab 集成。

- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — 快速检测 Composer 依赖问题。

* 💪 强大：检测未使用、影子和放错位置的 Composer 依赖项
* ⚡ 高性能：2 秒内扫描 15,000 个文件！
* ⚙️ 可配置：通过 PHP 配置进行细粒度的忽略
  *🕸️ 轻量级：无需依赖 Composer
* 🍰 易于使用：首次尝试无需配置
  *✨ 兼容：PHP >= 7.2


- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblue 是一家为软件开发团队提供人工智能代码分析和测试解决方案的软件公司。
  该公司的技术可帮助开发人员实现测试自动化、发现错误并减少软件开发过程中的人工劳动。该公司的主要产品 Diffblue Cover 使用人工智能来生成和运行 Java 代码的单元测试，帮助发现错误并提高代码质量。

- [exakat](https://www.exakat.io) — 一个用于 PHP 的自动代码审查引擎。

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。

- [Goblint](https://goblint.in.tum.de) — 用于分析多线程 C 程序的静态分析器。它主要关注数据竞争检测，但也报告其他运行时错误，例如缓冲区溢出和空指针取消引用。

- [Nitpick CI](https://nitpick-ci.com) :copyright: — 自动化 PHP 代码审查。

- [PullRequest](https://www.pullrequest.com) :copyright: — 代码审查即服务，内置静态分析。通过由专家工程师在最佳自动化支持下进行高质量代码审查，提高速度并减少技术债务。

- [quality](https://github.com/apiology/quality) :warning: — 使用社区工具对您的代码运行质量检查，并确保您的数字不会随着时间的推移而变得更糟。

- [QuantifiedCode](https://github.com/quantifiedcode/quantifiedcode) :warning: — 自动代码审查和修复。它可以帮助您跟踪软件项目中的问题和指标，并且可以轻松扩展以支持新类型的分析。

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — 识别并优先考虑 Java 代码库中应首先重构的上帝类和高度耦合的类。

- [Reviewdog](https://github.com/haya14busa/reviewdog) — 用于在任何代码托管服务中发布来自任何 linter 的审核评论的工具。

- [Symfony Insight](https://insight.symfony.com/) :copyright: — 检测安全风险、查找错误并为 PHP 项目提供可操作的指标。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 用于解析静态代码分析报告文件的 Java 库。被大量 Jenkins、Maven 和 Gradle 插件使用。


<a 名称="deno" />
<h2>Deno</h2>


- [deno_lint](https://github.com/denoland/deno_lint) — Deno 的官方 linter。


<a name="embedded" />
<h2>嵌入式</h2>


- [oelint-adv](https://github.com/priv-kweihmann/oelint-adv) — 在 open-embedded 和 YOCTO 中使用的 bitbake 配方的 Linter


<a name="erb" />
<h2>嵌入式 Ruby (又名 ERB、eRuby)</h2>


- [ERB Lint](https://github.com/Shopify/erb-lint) — 对 ERB 或 HTML 文件进行 Lint 处理

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 一款 HTML 规范化器/美化器，同时支持嵌入的 Ruby。非常适合整理 Rails 模板。


<a name="小黄瓜" />
<h2>小黄瓜</h2>


- [gherkin-lint](https://github.com/vsiakka/gherkin-lint) — 用 Ja​​vascript 编写的 Gherkin-Syntax 的 linter。


<a 名称="html" />
<h2>HTML</h2>


- [Angular ESLint](https://github.com/angular-eslint/angular-eslint#readme) — 用于 Angular 项目的 Linter

- [Bootlint](https://github.com/twbs/bootlint) :warning: — 适用于 Bootstrap 项目的 HTML linter。

- [ERB Lint](https://github.com/Shopify/erb-lint) — 对 ERB 或 HTML 文件进行 Lint 处理

- [grunt-bootlint](https://github.com/twbs/grunt-bootlint) :warning: — 用于 [Bootlint](https://github.com/twbs/bootlint) 的 Grunt 包装器，用于 Bootstrap 项目的 HTML linter。

- [gulp-bootlint](https://github.com/tschortsch/gulp-bootlint) :warning: — [Bootlint](https://github.com/twbs/bootlint) 的 gulp 包装器，用于 Bootstrap 项目的 HTML linter。

- [HTML Inspector](https://github.com/philipwalton/html-inspector) :warning: — HTML Inspector 是一个代码质量工具，可以帮助您和您的团队编写更好的标记。

- [HTML Tidy](http://www.html-tidy.org) — 通过修复标记错误并将遗留代码升级到现代标准来纠正和清理 HTML 和 XML 文档。

- [HTML-Validate](https://html-validate.org/) — 离线 HTML5 验证器。

- [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) — 一款 HTML 规范化器/美化器，同时支持嵌入的 Ruby。非常适合整理 Rails 模板。

- [HTMLHint](https://htmlhint.com) — HTML 静态代码分析工具。

- [Nu Html Checker](https://validator.github.io/validator/) — 帮助你捕捉 HTML/CSS/SVG 中的问题

- [Polymer-analyzer](https://github.com/Polymer/tools/tree/master/packages/analyzer) — 一个用于 Web 组件的静态分析框架。


<a 名称="json" />
<h2>JSON</h2>


- [jsonlint](https://jsonlint.com/) — 带有 CLI 的 JSON 解析器和验证器。jsonlint.com 的独立版本

- [Spectral](https://stoplight.io/open-source/spectral) — 一个灵活的 JSON/YAML linter，对 OpenAPI v2/v3 和 AsyncAPI v2 提供开箱即用的支持。


<a 名称="kubernetes" />
<h2>库伯奈特</h2>


- [chart-testing](https://github.com/helm/chart-testing) — ct 是用于测试 Helm chart 的工具。它旨在用于 linting 和测试拉取请求。它会自动检测针对目标分支更改的 chart。

- [clusterlint](https://github.com/digitalocean/clusterlint) — Clusterlint 查询实时 Kubernetes 集群中的资源，针对这些资源执行常见和平台特定的检查，并向集群操作员提供可操作的反馈。它是一种外部运行的非侵入式工具。Clusterlint 不会更改资源配置。

- [Datree](https://datree.io/) — 一种 CLI 工具，可确保清单和 Helm 图表遵循最佳实践以及组织的政策，从而防止 Kubernetes 配置错误

- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [klint](https://github.com/uswitch/klint) — 一种监听 Kubernetes 资源变化并针对这些变化运行 linting 规则的工具。识别和调试错误对象，并根据策略推动对象，因为两者都会随时间而变化。Klint 帮助我们对检查进行编码，并在团队需要采取行动时主动提醒他们。

- [krane](https://github.com/appvia/krane) :warning: — Krane 是一个简单的 Kubernetes RBAC 静态分析工具。
  它识别了 K8s RBAC 设计中的潜在安全风险并提出了缓解建议。Krane 仪表板显示当前的 RBAC 安全态势并让您浏览其定义。

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — 寻找 Kubernetes 集群中的安全漏洞。

- [kube-lint](https://github.com/viglesiasce/kube-lint) — 具有可自定义规则集的 Kubernetes 资源 linter。您可以定义要针对资源进行验证的规则列表，然后 kube-lint 将根据这些规则评估这些规则。

- [kube-linter](https://github.com/stackrox/kube-linter) — KubeLinter 是一个静态分析工具，可检查 Kubernetes YAML 文件和 Helm 图表，以确保其中所代表的应用程序符合最佳实践。

- [kube-score](https://kube-score.com) — 对 Kubernetes 对象定义进行静态代码分析。

- [kubeconform](https://github.com/yannh/kubeconform) — 一个快速的 Kubernetes 清单验证器，支持自定义资源。

它受到 [Kubeval](https://analysis-tools.dev/tool/kubeval) 的启发，包含其代码，并且设计得与它非常接近。
但有以下改进：
* 高性能：将通过多个例程验证和下载清单，并将下载的文件缓存在内存中
* 可配置的远程或本地模式位置列表，支持验证 Kubernetes 自定义资源 (CRD) 和离线验证功能
* 默认使用由 kubernetes-json-schema 项目维护的模式注册表的自我更新分支 - 这保证了 Kubernetes 所有最新版本的模式都是最新的。


- [KubeLinter](https://github.com/stackrox/kube-linter) — KubeLinter 是一个静态分析工具，可检查 Kubernetes YAML 文件和 Helm 图表，以确保其中所代表的应用程序符合最佳实践。

- [kubeval](https://kubeval.instrumenta.dev) — 验证你的 Kubernetes 配置文件并支持多个 Kubernetes 版本。


<a 名称="latex" />
<h2>乳胶</h2>


- [ChkTeX](http://www.nongnu.org/chktex) — LaTex 的 linter，可捕获 LaTeX 监督的一些印刷错误。

- [lacheck](https://www.ctan.org/pkg/lacheck) — 一种用于查找 LaTeX 文档中常见错误的工具。

- [TeXLab](https://texlab.netlify.app) — TeX/LaTeX 的语言服务器协议实现，包括 lint 功能。


<a 名称="laravel" />
<h2>Laravel</h2>


- [Enlightn](https://www.laravel-enlightn.com/) — 一款用于 Laravel 应用程序的静态和动态分析工具，可提供改进 Laravel 应用程序性能、安全性和代码可靠性的建议。包含 120 项自动检查。

- [larastan](https://github.com/larastan/larastan) — 为 Laravel 添加静态分析，提高开发人员的工作效率和代码质量。它是 PHPStan 的包装器。


<a name="make" />
<h2>Makefile</h2>


- [checkmake](https://github.com/mrtazz/checkmake) :warning: — Makefile 的 Linter/分析器。

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — FreeBSD 和 DragonFlyBSD 端口目录的验证程序。


<a 名称="markdown" />
<h2>降价</h2>


- [markdownlint](https://github.com/DavidAnson/markdownlint) — 基于 Node.js 的 Markdown/CommonMark 文件样式检查器和 lint 工具。

- [mdformat](https://mdformat.rtfd.io) — 符合 CommonMark 规范的 Markdown 格式化程序

- [mdl](https://github.com/mivok/markdownlint) — 用于检查 Markdown 文件并标记样式问题的工具。

- [remark-lint](https://remark.js.org) — 用 Ja​​vaScript 编写的可插入式 Markdown 代码样式 linter。

- [textlint](https://textlint.github.io/) — textlint 是一个用 JavaScript 编写的开源文本检查实用程序。


<a name="meta" />
<h2>金属界面</h2>


- [ciocheck](https://github.com/ContinuumIO/ciocheck) :warning: — Linter、格式化程序和测试套件助手。作为 linter，它是 `pep8`、`pydocstyle`、`flake8` 和 `pylint` 的包装器。

- [flake8](https://github.com/PyCQA/flake8) — 围绕 `pyflakes`、`pycodestyle` 和 `mccabe` 的​​包装器。

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheaven 是一个围绕 flake8 构建的 python linter，用于支持可继承和复杂的 toml 配置。

- [Go Meta Linter](https://github.com/alecthomas/gometalinter) :warning: — 同时运行 Go lint 工具并规范其输出。新项目请使用 `golangci-lint`。

- [goreporter](https://github.com/360EntSecGroup-Skylar/goreporter) — 同时运行多个 linters 并将其输出规范化为报告。

- [multilint](https://github.com/adamchainz/multilint) :warning: — 围绕 `flake8`、`isort` 和 `modernize` 的包装器。

- [prospector](https://github.com/PyCQA/prospector) — 围绕 `pylint`、`pep8`、`mccabe` 等的包装器。


<a name="mobile" />
<h2>移动</h2>


- [Android Lint](http://tools.android.com/tips/lint) — 对 Android 项目运行静态分析。

- [android-lint-summary](https://passy.github.io/android-lint-summary) :warning: — 将多个项目的 lint 错误合并为一个输出，一次检查多个子项目的 lint 结果。

- [FlowDroid](https://github.com/secure-software-engineering/FlowDroid) — Android 应用程序的静态污点分析工具。

- [iblessing](https://www.kitploit.com/2020/08/iblessing-ios-security-exploiting.html) :warning: — iblessing 是一个 iOS 安全漏洞利用工具包。它可用于逆向工程、二进制分析和漏洞挖掘。

- [Mariana Trench](https://mariana-tren.ch/) — 我们针对 Android 和 Java 应用程序的安全而开发的静态分析工具。Mariana Trench 分析 Dalvik 字节码，可在大型代码库（数千万行代码）上快速运行。它可以在代码更改时发现漏洞，而这些漏洞甚至不会进入您的存储库。

- [Oversecured](https://oversecured.com) :copyright: — 适用于 Android 和 iOS 应用程序的企业漏洞扫描程序。它允许应用程序所有者和开发人员通过将 Oversecured 集成到开发过程中来保护每个新版本的移动应用程序。

- [paprika](https://github.com/GeoffreyHecht/paprika) :warning: — 一个用于检测所分析的 Android 应用程序中某些代码异味的工具包。

- [qark](https://github.com/linkedin/qark) :warning: — 用于查找多个与 Android 应用程序安全相关的漏洞的工具。

- [redex](https://fbredex.com) — Redex 提供了一个用于读取、写入和分析 .dex 文件的框架，以及一组使用此框架改进字节码的优化过程。通过 Redex 优化的 APK 应该更小、更快。


<a name="nix" />
<h2>尼克斯</h2>


- [deadnix](https://github.com/astro/deadnix) — 扫描 Nix 文件中的死代码（未使用的变量绑定）

- [statix](https://git.peppe.rs/languages/statix/about/) — Nix 编程语言的 Lint 和建议。“statix check”突出显示了 Nix 代码中的反模式。“statix fix”可以修复几个此类情况。


<a 名称="nodejs" />
<h2>Node.js</h2>


- [lockfile-lint](https://github.com/lirantal/lockfile-lint) — 对 npm 或 yarn 锁文件进行 Lint 以分析和检测安全问题

- [njsscan](https://opensecurity.in) — 一种静态应用程序测试 (SAST) 工具，可以使用来自 libsast 的简单模式匹配器和语法感知语义代码模式搜索工具 semgrep 在 node.js 应用程序中查找不安全的代码模式。

- [NodeJSScan](https://opensecurity.in) :warning: — 一款基于 njsscan cli 工具构建的 Node.js 应用程序静态安全代码扫描器，由 libsast 和 semgrep 提供支持。它具有一个 UI，其中包含有关应用程序安全状态的各种仪表板。

- [standard](http://standardjs.com) — 一个检查 JavaScript 样式指南问题的 npm 模块。


<a name="包" />
<h2>包</h2>


- [composer-dependency-analyser](https://github.com/shipmonk-rnd/composer-dependency-analyser) — 快速检测 Composer 依赖问题。

* 💪 强大：检测未使用、影子和放错位置的 Composer 依赖项
* ⚡ 高性能：2 秒内扫描 15,000 个文件！
* ⚙️ 可配置：通过 PHP 配置进行细粒度的忽略
  *🕸️ 轻量级：无需依赖 Composer
* 🍰 易于使用：首次尝试无需配置
  *✨ 兼容：PHP >= 7.2


- [lintian](https://wiki.debian.org/Lintian) — Debian 软件包的静态分析工具。

- [rpmlint](https://github.com/rpm-software-management/rpmlint) — 用于检查 rpm 包中常见错误的工具。


<a name="prometheus" />
<h2>普罗米修斯</h2>


- [promformat](https://github.com/facetoe/promformat) :warning: — Promformat 是一个用 Python 编写的 PromQL 格式化程序。

- [promval](https://github.com/facetoe/promval) :warning: — 用 Python 编写的 PromQL 验证器。可用于验证 PromQL 表达式是否按预期编写。


<a name="protobuf" />
<h2>协议缓冲区</h2>


- [buf](https://buf.build) — 提供 CLI linter，强制执行良好的 API 设计选择和结构

- [protolint](https://github.com/yoheimuta/protolint) — 可插入的 linter 和修复程序，用于强制执行协议缓冲区样式和约定。


<a name="puppet" />
<h2>傀儡</h2>


- [metadata-json-lint](https://github.com/voxpupuli/metadata-json-lint) — 用于检查 Puppet metadata.json 文件有效性的工具。


<a name="rails" />
<h2>轨道</h2>


- [dawnscanner](https://github.com/thesp0nge/dawnscanner) — 一款用于 Ruby 编写的 Web 应用程序的静态分析安全扫描器。它支持 Sinatra、Padrino 和 Ruby on Rails 框架。


<a name="安全" />
<h2>安全/SAST</h2>


- [AzSK](https://azsk.azurewebsites.net/) — 适用于 Azure 的安全 DevOps 工具包 (AzSK) 提供安全 IntelliSense、安全验证测试 (SVT)、CICD 扫描漏洞、合规性问题以及基础设施即代码中的基础设施配置错误。通过 ARM 支持 Azure。

- [brakeman](https://brakemanscanner.org) — 针对 Ruby on Rails 应用程序的静态分析安全漏洞扫描程序。

- [Credential Digger](https://github.com/SAP/credential-digger) — Credential Digger 是一款 GitHub 扫描工具，可识别硬编码凭证（密码、API 密钥、密钥、令牌、个人信息等），并通过名为 [密码模型](https://huggingface.co/SAPOSS/password-model) 的机器学习模型过滤误报数据。此扫描器能够以较低的误报率检测密码和非结构化令牌。

- [Datree](https://datree.io/) — 一种 CLI 工具，可确保清单和 Helm 图表遵循最佳实践以及组织的政策，从而防止 Kubernetes 配置错误

- [detect-secrets](https://github.com/Yelp/detect-secrets) — 一种企业友好的检测和防止代码中秘密的方法。
  它通过定期针对启发式编写的正则表达式运行 diff 输出来实现这一点，以确定是否有任何新的秘密被提交。这样，它就避免了挖掘所有 git 历史记录的开销，也避免了每次扫描整个存储库的需要。

- [Enlightn](https://www.laravel-enlightn.com/) — 一款用于 Laravel 应用程序的静态和动态分析工具，可提供改进 Laravel 应用程序性能、安全性和代码可靠性的建议。包含 120 项自动检查。

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。

- [Gitleaks](https://github.com/zricethezav/gitleaks) — 一种 SAST 工具，用于检测 git 存储库中的密码、API 密钥和令牌等硬编码机密。

- [gokart](https://github.com/praetorian-inc/gokart) — Golang 安全分析，重点是尽量减少误报。它能够追踪变量和函数参数的来源，以确定输入源是否安全。

- [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) :copyright: — HasMySecretLeaked 是 GitGuardian 的一个项目，旨在帮助个人用户和组织搜索 2000 万个暴露的机密，以验证他们的开发人员机密是否已在 GitHub 项目的公共存储库、要点和问题中泄露。

- [iblessing](https://www.kitploit.com/2020/08/iblessing-ios-security-exploiting.html) :warning: — iblessing 是一个 iOS 安全漏洞利用工具包。它可用于逆向工程、二进制分析和漏洞挖掘。

- [kani](https://github.com/model-checking/kani) — Kani Rust Verifier 是 Rust 的位精确模型检查器。
  Kani 对于验证 Rust 中不安全的代码块特别有用，
  其中“不安全的超级能力”未被编译器检查。
  Kani 确认：

* 内存安全（例如，空指针取消引用）
* 用户指定的断言（即assert！（...））
* 不存在恐慌（例如，对 None 值执行 unwrap()）
* 不存在某些类型的意外行为（例如算术溢出）


- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [ktool](https://ktool.cynder.me/en/latest/ktool.html) — 用于 MachO+Obj-C 编辑/分析的完全跨平台工具包和库。包括 cli 工具包、curses GUI、ObjC 标头转储等。

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — 寻找 Kubernetes 集群中的安全漏洞。

- [lockfile-lint](https://github.com/lirantal/lockfile-lint) — 对 npm 或 yarn 锁文件进行 Lint 以分析和检测安全问题

- [LunaSec](https://www.lunasec.io) — 开源 AppSec 平台，可在下次发生 Log4Shell 或 node-ipc 等漏洞时自动通知您。在集中式服务中跟踪您的依赖项和构建。

- [njsscan](https://opensecurity.in) — 一种静态应用程序测试 (SAST) 工具，可以使用来自 libsast 的简单模式匹配器和语法感知语义代码模式搜索工具 semgrep 在 node.js 应用程序中查找不安全的代码模式。

- [NodeJSScan](https://opensecurity.in) :warning: — 一款基于 njsscan cli 工具构建的 Node.js 应用程序静态安全代码扫描器，由 libsast 和 semgrep 提供支持。它具有一个 UI，其中包含有关应用程序安全状态的各种仪表板。

- [Oversecured](https://oversecured.com) :copyright: — 适用于 Android 和 iOS 应用程序的企业漏洞扫描程序。它允许应用程序所有者和开发人员通过将 Oversecured 集成到开发过程中来保护每个新版本的移动应用程序。

- [PT Application Inspector](https://www.ptsecurity.com) :copyright: — 识别代码缺陷并检测漏洞以防止网络攻击。通过展示可能的漏洞来演示远程代码执行。

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — 容器原生应用程序保护，提供容器化应用程序的可见性和控制。

- [QuantifiedCode](https://github.com/quantifiedcode/quantifiedcode) :warning: — 自动代码审查和修复。它可以帮助您跟踪软件项目中的问题和指标，并且可以轻松扩展以支持新类型的分析。

- [Rezilion](https://www.rezilion.com/) :copyright: — 发现您环境中所有组件的漏洞，过滤掉 85% 不可利用的漏洞，并创建补救计划和开具票据以升级违反您的安全策略的组件和/或在 CI 中自动修补。

- [scorecard](https://github.com/ossf/scorecard) — 安全记分卡 - 开源的安全健康指标

- [SearchDiggity](https://resources.bishopfox.com/resources/tools/google-hacking-diggity/attack-tools/) :copyright: — 识别托管在 Github、Google Code、MS CodePlex、SourceForge 等平台上的开源代码项目中的漏洞。该工具附带 130 多个默认搜索，可识别 SQL 注入、跨站点脚本 (XSS)、不安全的远程和本地文件包含、硬编码密码等。

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook 扫描工具，可分析您的剧本并提供建议。

- [Symfony Insight](https://insight.symfony.com/) :copyright: — 检测安全风险、查找错误并为 PHP 项目提供可操作的指标。

- [tfsec](https://github.com/tfsec/tfsec) — Terraform 静态分析工具，通过在构建时检查云配置错误来防止潜在的安全问题，并直接与 HCL 解析器集成以获得更好的结果。检查是否违反了 AWS、Azure 和 GCP 安全最佳实践建议。

- [trufflehog](https://trufflesecurity.com) — 到处查找凭证
  TruffleHog 是一个开源秘密扫描引擎，可以解决公司整个技术栈中暴露的秘密。

- [Tsunami 安全扫描器](https://github.com/google/tsunami-security-scanner) — 一款通用网络安全扫描器，具有可扩展插件系统，可高可信度地检测高严重性 RCE 类漏洞。可添加用于查找漏洞（例如开放 API）的自定义检测器。


<a name="智能合约" />
<h2>智能合约</h2>


- [mythril](https://github.com/ConsenSys/mythril) — 一个自带电池的符号执行框架，可用于自动查找和利用智能合约中的漏洞。

- [MythX](https://mythx.io) :copyright: — MythX 是一个易于使用的分析平台，它集成了模糊测试、符号执行和静态分析等多种分析方法，可以高精度地查找漏洞。它可以与 Remix 或 VSCode 等工具链集成，也可以从命令行调用。

- [slither](https://github.com/trailofbits/slither) — 静态分析框架，运行一套漏洞检测器，打印有关合同详细信息的视觉信息，并提供一个 API 来轻松编写自定义分析。

- [solhint](https://protofire.github.io/solhint) — Solhint 是由 https://protofire.io 创建的一个开源项目。其目标是为 Solidity 代码提供一个 linting 实用程序。

- [solium](https://ethlint.readthedocs.io/en/latest) — Solium 是一个用于识别和修复 Solidity 智能合约中的风格和安全问题的 linter。


<a name="支持" />
<h2>支持</h2>


- [LibVCS4j](https://github.com/uni-bremen-agst/libvcs4j) — 一个 Java 库，通过为不同的版本控制系统和问题跟踪器提供通用 API，允许现有工具分析软件系统的演变。

- [RefactorFirst](https://github.com/jimbethancourt/RefactorFirst) — 识别并优先考虑 Java 代码库中应首先重构的上帝类和高度耦合的类。

- [Violations Lib](https://github.com/tomasbjerre/violations-lib) — 用于解析静态代码分析报告文件的 Java 库。被大量 Jenkins、Maven 和 Gradle 插件使用。


<a name="模板" />
<h2>模板语言</h2>


- [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint) — 用于 Ember 或 Handlebars 模板的 Linter。

- [haml-lint](https://github.com/sds/haml-lint) — 用于编写干净、一致的 HAML 的工具。

- [slim-lint](https://github.com/sds/slim-lint) — 用于分析 Slim 模板的可配置工具。

- [yamllint](https://yamllint.readthedocs.io) — 检查 YAML 文件的语法有效性、密钥重复和外观问题（例如行长度、尾随空格和缩进）。


<a 名称="terraform" />
<h2>地形</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。

- [kics](https://kics.io/) — 查找基础设施即代码中的安全漏洞、合规性问题和基础设施配置错误。支持 Terraform、Kubernetes、Docker、AWS CloudFormation 和 Ansible

- [shisho](https://github.com/flatt-security/shisho) :warning: — 一款专为开发人员和安全团队设计的轻量级静态代码分析器。它允许您使用类似于 sed 的直观 DSL 分析和转换源代码，但针对的是代码。


<a name="翻译" />
<h2>翻译</h2>


- [dennis](https://github.com/willkg/dennis) — 一组用于处理 PO 文件的实用程序，以简化开发并提高质量。


<a 名称="vue" />
<h2>Vue.js</h2>


- [HTML-Validate](https://html-validate.org/) — 离线 HTML5 验证器。

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) :warning: — VS Code 的 Vue 工具，由 vls（vue 语言服务器）提供支持。Vetur 支持格式化嵌入式 HTML、CSS、SCSS、JS、TypeScript 等。Vetur 仅有“整个文档格式化程序”，无法格式化任意范围。


<a name="wasm" />
<h2>Webassembly</h2​​>


- [Twiggy](https://rustwasm.github.io/twiggy) — 分析二进制文件的调用图以分析代码大小。目标是减小 wasm 二进制文件的大小。


<a name="写作" />
<h2>写作</h2>


- [After the Deadline](https://open.afterthedeadline.com) :warning: — 拼写、风格和语法检查器。

- [alex](https://alexjs.com) — 捕捉不敏感、不体贴的写作

- [codespell](https://github.com/codespell-project/codespell) — 检查代码中常见的拼写错误。

- [languagetool](https://languagetool.org) — 25 种以上语言的风格和语法检查器。它可以发现许多简单的拼写检查器无法检测到的错误。

- [misspell-fixer](https://github.com/vlajos/misspell-fixer) :warning: — 用于快速修复源代码中常见拼写错误和打字错误的工具。

- [上下文中的拼写错误单词]（https://jwilk.net/software/mwic）——一种拼写检查器，可对可能的拼写错误进行分组并在其上下文中显示它们。

- [proselint](https://github.com/amperser/proselint) — 一款针对英语散文的 linter，侧重于写作风格而非语法。

- [vale](https://vale.sh) — 一款针对散文的语法感知 linter，在构建时充分考虑了速度和可扩展性。

- [write-good](https://github.com/btford/write-good) — 一款专注于消除“模棱两可的词语”的 linter。


<a 名称="yaml" />
<h2>YAML</h2>


- [Spectral](https://stoplight.io/open-source/spectral) — 一个灵活的 JSON/YAML linter，对 OpenAPI v2/v3 和 AsyncAPI v2 提供开箱即用的支持。

- [yamllint](https://yamllint.readthedocs.io) — 检查 YAML 文件的语法有效性、密钥重复和外观问题（例如行长度、尾随空格和缩进）。


<a 名称="git" />
<h2>git</h2>


- [commitlint](https://commitlint.js.org) — 检查你的提交信息是否符合常规提交格式

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield 是一个 CLI 应用程序，可在您的本地环境或 CI 环境中运行，帮助您检测 350 多种类型的机密，以及其他影响代码库的潜在安全漏洞或策略违规。

- [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) :copyright: — HasMySecretLeaked 是 GitGuardian 的一个项目，旨在帮助个人用户和组织搜索 2000 万个暴露的机密，以验证他们的开发人员机密是否已在 GitHub 项目的公共存储库、要点和问题中泄露。


## 更多合集

- [干净的代码 linters](https://github.com/collections/clean-code-linters) — github 集合中的 linters 集合
- [PHP 项目代码质量检查工具](https://github.com/collections/code-quality-in-php) — github 集合中的 PHP linters 集合
- [go-tools](https://github.com/dominikh/go-tools) — 用于处理 Go 代码的工具和库的集合，包括 linters 和静态分析
- [linters](https://github.com/mcandre/linters) — 静态代码分析简介
- [OWASP 源代码分析工具](https://owasp.org/www-community/Source_Code_Analysis_Tools) — 开放 Web 应用程序安全项目维护的工具列表
- [php-static-analysis-tools](https://github.com/exakat/php-static-analysis-tools) — 有用的 PHP 静态分析工具的列表
- [维基百科](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) — 静态代码分析工具列表。

＃＃ 执照

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，[Matthias Endler](https://endler.dev) 放弃了对该作品的所有版权以及相关或邻近的权利。
用于格式化和显示该内容的底层源代码是根据 MIT 许可证授权的。


标题图片[由Freepik设计](http://www.freepik.com)。
