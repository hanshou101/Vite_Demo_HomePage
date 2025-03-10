tushartushar/awesome-static-analysis: A curated list of static analysis tools, linters and code quality checkers for various programming languages    https://github.com/tushartushar/awesome-static-analysis

![徽标](awesome.png)

> 静态程序分析是对计算机软件进行的分析，但并不实际执行程序 — [维基百科](https://en.wikipedia.org/wiki/Static_program_analysis)

这是静态分析工具和代码质量检查器的集合。非常欢迎 Pull 请求！

* :copyright: 代表专有软件。所有其他工具都是开源的。
* :warning: 表示社区不建议使用此工具
  由于过时或不再维护，因此不再接受新项目。

另请查看姊妹项目 [awesome-dynamic-analysis](https://github.com/mre/awesome-dynamic-analysis)。

＃ 目录

[编程语言](#programming-languages-1)

<详细信息>
 <summary>显示语言</summary>
  <!-- 请在此处使用 HTML 语法，以便它适用于 Github 和 mkdocs -->
  <ul>
    <li><a href="#abap">ABAP</a></li>
    <li><a href="#ada">艾达</a></li>
    <li><a href="#awk">awk</a></li>
    <li><a href="#cc">C/C++</a></li>
    <li><a href="#c">C#</a></li>
    <li><a href="#crystal">水晶</a></li>
    <li><a href="#dlang">Dlang</a></li>
    <li><a href="#elixir">灵丹妙药</a></li>
    <li><a href="#erlang">Erlang</a></li>
    <li><a href="#f">F#</a></li>
    <li><a href="#fortran">Fortran</a></li>
    <li><a href="#go">前往</a></li>
    <li><a href="#groovy">Groovy</a></li>
    <li><a href="#haskell">Haskell</a></li>
    <li><a href="#haxe">Haxe</a></li>
    <li><a href="#java">Java</a></li>
    <li><a href="#javascript">JavaScript</a></li>
    <li><a href="#kotlin">Kotlin</a></li>
    <li><a href="#lua">Lua</a></li>
    <li><a href="#matlab">Matlab</a></li>
    <li><a href="#perl">Perl</a></li>
    <li><a href="#php">PHP</a></li>
    <li><a href="#python">Python</a></li>
    <li><a href="#r">R</a></li>
    <li><a href="#rpg">角色扮演游戏</a></li>
    <li><a href="#ruby">Ruby</a></li>
    <li><a href="#rust">Rust</a></li>
    <li><a href="#scala">Scala</a></li>
    <li><a href="#shell">外壳</a></li>
    <li><a href="#solidity">Solidity</a></li>
    <li><a href="#sql">SQL</a></li>
    <li><a href="#swift">Swift</a></li>
    <li><a href="#tcl">Tcl</a></li>
    <li><a href="#typescript">TypeScript</a></li>
    <li><a href="#vbscript">VBScript</a></li>
  </ul>
</详情>

#### [多种语言](#multiple-languages-1)

#### [其他](#其他-1)

- [构建工具](#build-tools)
- [二进制文件](#binaries)
- [容器](#containers)
- [配置文件](#config-files)
- [配置管理](#configuration-management)
- [CSS](#css)
- [小黄瓜](#小黄瓜)
- [HTML](#html)
- [IDE 插件](#ide-plugins)
- [LaTeX](#latex)
- [Makefile](#makefiles)
- [Markdown](#markdown)
- [移动](#mobile)
- [软件包](#软件包)
- [支持工具](#supporting-tools)
- [模板语言](#template-languages)
- [翻译](#translation)
- [Web 服务](#web-services)
- [写作](#写作)

#### [更多收藏](#more-collections-1)

---

# 编程语言

## ABAP

* [abaplint](https://github.com/larshp/abaplint) - 用于 ABAP 的 Linter，用 TypeScript 编写。
* [abapOpenChecks](https://github.com/larshp/abapOpenChecks) - 通过新的和可定制的检查增强了 SAP 代码检查器。

## 艾达

* [Codepeer](http://www.adacore.com/codepeer) - 检测运行时和逻辑错误
* [Polyspace for Ada](https://www.mathworks.com/products/polyspace-ada.html) :copyright: - 提供代码验证，证明源代码中不存在溢出、除以零、越界数组访问和某些其他运行时错误。
* [SPARK](http://www.spark-2014.org/about) :copyright: - Ada 的静态分析和形式验证工具集
* [了解]（https://scitools.com/ada-programming-essential/）：版权： - 为 Ada 和 VHDL 提供代码分析、标准测试、指标、图形、依赖性分析等的 IDE。

awk 的

* [gawk --lint](https://www.gnu.org/software/gawk/manual/html_node/Options.html) - 警告那些可疑或无法移植到其他 awk 实现的构造。

C/C++

* [Astrée](https://www.absint.com/astree/index.htm) :copyright: - 基于 C/C++ 抽象解释的声音静态分析器，用于检测内存、类型和并发缺陷以及 MISRA 违规。
* [CBMC](http://www.cprover.org/cbmc/) - C 程序的有界模型检查器、用户定义断言、标准断言、多种覆盖率指标分析
* [clang-tidy](http://clang.llvm.org/extra/clang-tidy/) - clang 静态分析器
* [CMetrics](https://github.com/MetricsGrimoire/CMetrics) - 测量 C 文件的大小和复杂性
* [Codecheker](https://github.com/Ericsson/codechecker) - 静态分析 C/C++ 代码，带有 Web GUI
* [GrammaTech 的 CodeSonar](https://www.grammatech.com/products/codesonar) :copyright: - 高级、完整程序、深度路径、C 和 C++ 静态分析，带有易于理解的解释以及代码和路径可视化。
* [Corrode](https://github.com/jameysharp/corrode) - 从 C 到 Rust 的半自动翻译。可以通过显示 Rust 编译器警告和错误来揭示原始实现中的错误。
* [cppcheck](https://github.com/danmar/cppcheck) - C/C++ 代码的静态分析
* [CppDepend](https://www.cppdepend.com) :copyright: - 测量、查询和可视化您的代码并避免意外问题、技术债务和复杂性。
* [cpplint](https://github.com/google/styleguide/tree/gh-pages/cpplint) - 遵循 Google 风格指南的自动 C++ 检查器
* [cqmetrics](https://github.com/dspinellis/cqmetrics) - C 代码的质量指标
* [CScout](https://www.spinellis.gr/cscout/) - C 和 C 预处理器代码的复杂性和质量指标
* [flawfinder](http://www.dwheeler.com/flawfinder/) - 查找可能的安全漏洞
* [flint++](http://l2program.co.uk/category/flint) - 跨平台、零依赖的 flint 端口，flint 是 Facebook 开发并使用的 C++ lint 程序。
* [Frama-C](http://frama-c.com/) - 一个完善且可扩展的 C 代码静态分析器
* [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: - 嵌入式软件的企业级静态分析。支持 MISRA、CERT 和 AUTOSAR 编码标准。
* [IKOS](https://github.com/nasa-sw-vnv/ikos) - 基于 LLVM 的 C/C++ 代码声音静态分析器
* [include-gardener](https://github.com/feddischson/include_gardener) - 一个用于 C/C++/Obj-C 的静态分析器，用于创建图表（以 dot 或 graphml 格式）来显示给定文件集的所有 `#include` 关系。
* [LDRA](https://ldra.com/) :copyright: - 一套包括对各种标准进行静态分析（TBVISION）的工具套件，包括 MISRA C & C++、JSF++ AV、CWE、CERT C、CERT C++ 和自定义规则。
* [oclint](http://oclint.org/) – C/C++代码的静态分析
* [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: - 识别 C 和 C++ 嵌入式软件中的运行时错误、并发问题、安全漏洞和其他缺陷。
* [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: - 提供代码验证，证明 C 和 C++ 源代码中不存在溢出、除以零、越界数组访问和某些其他运行时错误。
* [scan-build](https://clang-analyzer.llvm.org/scan-build.html) - 在编译时使用 LLVM 分析 C/C++ 代码
* [splint](https://github.com/ravenexp/splint) - 注释辅助静态程序检查器
* [SVF](https://github.com/SVF-tools/SVF) - 一种静态工具，可对 C 和 C++ 程序进行可扩展且精确的过程间依赖性分析。
* [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) - Vera++ 是一个用于验证、分析和转换 C++ 源代码的可编程工具。

## 计算机#

* [.NET 分析器](https://github.com/DotNetAnalyzers) - 使用 .NET 编译器平台开发分析器（诊断和代码修复）的组织。
* [代码分析规则集合](https://carc.codeplex.com/) - 包含一组基于 Microsoft .NET 编译器平台“Roslyn”构建的诊断、代码修复和重构。
* [code-cracker](https://github.com/code-cracker/code-cracker) - 一个用于 C# 和 VB 的分析器库，使用 Roslyn 进行重构、代码分析和其他细节功能。
* [CodeRush](https://www.devexpress.com/products/coderush/) :copyright: - 使用 Visual Studio 2015 及更高版本中的 Roslyn 引擎的代码创建、调试、导航、重构、分析和可视化工具。
* [CSharpEssentials](https://github.com/DustinCampbell/CSharpEssentials) - C# Essentials 是 Roslyn 诊断分析器、代码修复和重构的集合，可以轻松使用 C# 6 语言功能。
* [Designite](http://www.designite-tools.com) :copyright: - Designite 支持检测各种架构、设计和实现气味，计算各种代码质量指标，以及趋势分析。
* [Gendarme](http://www.mono-project.com/docs/tools+libraries/tools/gendarme/) - Gendarme 检查包含 ECMA CIL 格式 (Mono 和 .NET) 代码的程序和库。
* [NDepend](http://www.ndepend.com/) :copyright: - 测量、查询和可视化您的代码并避免意外问题、技术债务和复杂性。
* [Puma Scan](https://github.com/pumasecurity/puma-scan) - 当开发团队在 Visual Studio 中编写代码时，Puma Scan 为常见漏洞（XSS、SQLi、CSRF、LDAPi、加密、反序列化等）提供实时安全代码分析。
* [重构要点](http://vsrefactoringessentials.com/) - 用于 C# 和 VB.NET 重构的免费 Visual Studio 2015 扩展，包括代码最佳实践分析器。
* [ReSharper](https://www.jetbrains.com/resharper/) :copyright: - 通过对 C#、VB.NET、ASP.NET、JavaScript、TypeScript 和其他技术的实时代码检查来扩展 Visual Studio。
* [Roslyn Security Guard](https://dotnet-security-guard.github.io/) - 该项目专注于识别潜在漏洞，例如 SQL 注入、跨站点脚本 (XSS)、CSRF、加密弱点、硬编码密码等。
* [Roslynator](https://github.com/JosefPihrt/Roslynator/) - 由 Roslyn 提供支持的 190 多个 C# 分析器和 190 多个重构的集合。
* [安全代码扫描](https://security-code-scan.github.io/) - C# 和 VB.NET 的安全代码分析器。检测各种安全漏洞模式：SQLi、XSS、CSRF、XXE、Open Redirect 等。
* [SonarLint for Visual Studio](https://vs.sonarlint.org/) - SonarLint 是 Visual Studio 2015 和 2017 的扩展，可为开发人员提供有关 .NET 代码中注入的新错误和质量问题的实时反馈。
* [VSDiagnostics](https://github.com/Vannevelj/VSDiagnostics) - 基于 Roslyn 的静态分析器集合，可与 VS 集成。
* [Wintellect.Analyzers](https://github.com/Wintellect/Wintellect.Analyzers) - .NET 编译器平台（“Roslyn”）诊断分析器和代码修复。

＃＃ 水晶

* [ameba](https://github.com/veelenga/ameba) - Crystal 的静态代码分析工具
* [crystal](https://crystal-lang.org/) - Crystal 编译器具有内置的 linting 功能。

## 德朗

* [D-Scanner](https://github.com/dlang-community/D-Scanner) - D-Scanner 是一款用于分析 D 源代码的工具

灵丹妙药

* [credo](https://github.com/rrrene/credo) - 一款专注于代码一致性和教学的静态代码分析工具。
* [sobelow](https://github.com/nccgroup/sobelow) - 针对 Phoenix 框架的安全静态分析

## Erlang

* [elvis](https://github.com/inaka/elvis) - Erlang 风格审阅者

## 法##

* [FSharpLint](https://github.com/fsprojects/FSharpLint) - F# 的 Lint 工具

Fortran 语言

* [i-Code CNES for Fortran](https://github.com/lequal/i-CodeCNES) - 一个针对 Fortran 77、Fortran 90 和 Shell 的开源静态代码分析工具。

＃＃ 去

* [deadcode](https://github.com/tsenart/deadcode) - 查找未使用的代码。
* [dingo-hunter](https://github.com/nickng/dingo-hunter) - 用于查找 Go 中死锁的静态分析器。
* [dupl](https://github.com/mibk/dupl) - 报告可能重复的代码。
* [errcheck](https://github.com/kisielk/errcheck) - 检查是否使用了错误返回值。
* [flen](https://github.com/lafolle/flen) - 获取 Go 包中函数长度的信息。
* [gas](https://github.com/GoASTScanner/gas) - 通过扫描 Go AST 检查源代码是否存在安全问题。
* [Go Meta Linter](https://github.com/alecthomas/gometalinter) - 同时运行 Go lint 工具并规范化其输出。
* [go tool vet --shadow](https://golang.org/cmd/vet/#hdr-Shadowed_variables) - 报告可能被无意中遮蔽的变量。
* [go vet](https://golang.org/cmd/vet/) - 检查 Go 源代码并报告可疑内容。
* [go-consistent](https://github.com/Quasilyte/go-consistent) - 可帮助您使 Go 程序更加一致的分析器。
* [go-critic](https://github.com/go-critic/go-critic) - Go 源代码 linter，维护其他 linter 中当前未实现的检查。
* [go-staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - go vet 的增强版，类似于 C# 版的 ReSharper。
* [go/ast](https://golang.org/pkg/go/ast/) - 包 ast 声明用于表示 Go 包语法树的类型。
* [goconst](https://github.com/jgautheron/goconst) - 查找可以用常量替换的重复字符串。
* [gocyclo](https://github.com/fzipp/gocyclo) - 计算 Go 源代码中函数的圈复杂度。
* [gofmt -s](https://golang.org/cmd/gofmt/) - 检查代码格式是否正确且无法进一步简化。
* [goimports](https://godoc.org/golang.org/x/tools/cmd/goimports) - 检查缺失或未引用的包导入。
* [GolangCI-Lint](https://github.com/golangci/golangci-lint) - `Go Meta Linter` 的替代品：GolangCI-Lint 是一个 linters 聚合器。
* [golint](https://github.com/golang/lint) - 打印出 Go 源代码中的编码风格错误。
* [goreporter](https://github.com/wgliang/goreporter) - 同时运行多个 linter 并将其输出规范化为报告。
* [goroutine-inspect](https://github.com/linuxerwang/goroutine-inspect) - 用于分析 Golang goroutine dump 的交互式工具。
* [gosimple](https://github.com/dominikh/go-tools/tree/master/cmd/gosimple) - 报告代码中的简化。
* [gotype](https://golang.org/x/tools/cmd/gotype) - 类似于 Go 编译器的句法和语义分析。
* [ineffassign](https://github.com/gordonklaus/ineffassign) - 检测 Go 代码中的无效赋值
* [interfacer](https://github.com/mvdan/interfacer) - 建议使用更窄的接口。
* [lll](https://github.com/walle/lll) - 报告长线。
* [maligned](https://github.com/mdempsky/maligned) - 检测如果字段排序则占用更少内存的结构。
* [megacheck](https://github.com/dominikh/go-tools/tree/master/cmd/megacheck) - 运行 staticcheck、gosimple 和 unused，共享工作。
* [misspell](https://github.com/client9/misspell) - 查找常见的拼写错误的英文单词。
* [nakedret](https://github.com/alexkohler/nakedret) - 查找裸回报。
* [nargs](https://github.com/alexkohler/nargs) - 查找函数声明中未使用的参数。
* [prealloc](https://github.com/alexkohler/prealloc) - 查找可能预分配的切片声明。
* [revive](https://github.com/mgechev/revive) - 快速、可配置、可扩展、灵活且美观的 Go 语言 linter。golint 的直接替代品。
* [safesql](https://github.com/stripe/safesql) - Golang 的静态分析工具，可防止 SQL 注入。
* [structcheck](https://github.com/opennota/check) - 查找未使用的结构体字段。
* [test](http://golang.org/pkg/testing/) - 显示 stdlib 测试模块中测试失败的位置。
* [testify](https://github.com/stretchr/testify) - 显示失败的 testify 断言的位置。
* [unconvert](https://github.com/mdempsky/unconvert) - 检测冗余类型转换。
* [unimport](https://github.com/alexkohler/unimport) - 查找不必要的导入别名
* [unparam](https://github.com/mvdan/unparam) - 查找未使用的函数参数。
* [unused](https://github.com/dominikh/go-tools/tree/master/cmd/unused) - 查找未使用的变量。
* [varcheck](https://github.com/opennota/check) - 查找未使用的全局变量和常量。

Groovy

* [CodeNarc](https://github.com/CodeNarc/CodeNarc) - Groovy 源代码的静态分析工具，可监控和执行多项编码标准和最佳实践。

哈斯克尔

* [HLint](https://github.com/ndmitchell/hlint) - HLint 是一个用于对 Haskell 代码提出改进建议的工具。
* [Weeder](https://github.com/ndmitchell/weeder) - 用于检测 Haskell 代码中的死导出或包导入的工具。

## 哈克斯

* [Haxe Checkstyle](https://github.com/HaxeCheckstyle/haxe-checkstyle) - 一种静态分析工具，帮助开发人员编写符合编码标准的 Haxe 代码。

Java 版本
* [ArchUnit](https://www.archunit.org/) - 对 Java 架构进行单元测试
* [Checker Framework](https://github.com/typetools/checker-framework/) - Java 的可插入类型检查 http://checkerframework.org/
* [checkstyle](https://github.com/checkstyle/checkstyle) - 检查 Java 源代码是否遵守代码标准或一组验证规则（最佳实践）
* [ck](https://github.com/mauricioaniche/ck) - 通过处理源 Java 文件来计算 Chidamber 和 Kemerer 面向对象度量
* [ckjm](http://www.spinellis.gr/sw/ckjm/) - 通过处理已编译 Java 文件的字节码来计算 Chidamber 和 Kemerer 面向对象度量
* [ClassGraph](https://github.com/classgraph/classgraph) - 一个类路径和模块路径扫描器，用于查询或可视化类元数据或类相关性
* [CogniCrypt](https://www.eclipse.org/cognicrypt/) - 检查 Java 源代码和字节码中是否存在加密 API 的错误使用
* [DesigniteJava](http://www.designite-tools.com/designitejava) :copyright: - DesigniteJava 支持检测各种架构、设计和实现气味以及计算各种代码质量指标。
* [Error-prone](https://github.com/google/error-prone) - 将常见的 Java 错误捕获为编译时错误
* [fb-contrib](https://github.com/mebigfatguy/fb-contrib) - 一个带有附加错误检测器的 FindBugs 插件
* [查找安全漏洞]（https://find-sec-bugs.github.io/） - 用于 Java Web 应用程序安全审计的 IDE/SonarQube 插件。
* [google-java-format](https://github.com/google/google-java-format) - Google 风格重新格式化
* [Hopper](https://github.com/cuplv/hopper) - 用 Scala 编写的针对在 JVM 上运行的语言的静态分析工具
* [HuntBugs](https://github.com/amaembo/huntbugs) – 基于 Procyon Compiler Tools 的字节码静态分析工具，旨在取代 FindBugs。
* [JArchitect](https://www.jarchitect.com) :copyright: - 测量、查询和可视化您的代码并避免意外问题、技术债务和复杂性。
* [JBMC](http://www.cprover.org/jbmc/) - Java（字节码）的有界模型检查器，验证用户定义的断言、标准断言、多个覆盖率指标分析
* [NullAway](https://github.com/uber/NullAway) - 基于类型的空指针检查器，具有较低的构建时间开销；一个 [Error Prone](http://errorprone.info/) 插件
* [OWASP 依赖性检查]（https://www.owasp.org/index.php/OWASP_Dependency_Check） - 检查依赖性中是否存在已知的、公开披露的漏洞。
* [qulice](https://www.qulice.com/) - 结合了一些（预配置的）静态分析工具（checkstyle、PMD、Findbugs 等）。
* [Soot](https://sable.github.io/soot/) - 一个用于分析和转换 Java 和 Android 应用程序的框架。
* [Spoon](https://github.com/INRIA/spoon) - 用于编写您自己的 Java 静态分析和架构规则检查器的库。可以集成到 Maven 和 Gradle 中。
* [SpotBugs](https://spotbugs.github.io/) - SpotBugs 是 FindBugs 的后继者。一种用于静态分析 Java 代码中查找错误的工具。

JavaScript

* [aether](https://github.com/codecombat/aether)——在节点或浏览器中，对用户 JavaScript 进行 Lint、分析、规范化、转换、沙盒化、运行、逐步执行和可视化。
* [ClosureLinter](https://github.com/google/closure-linter) - 确保项目的所有 JavaScript 代码都遵循 Google JavaScript 样式指南中的准则。它还可以自动修复许多常见错误
* [coffeelint](https://github.com/clutchski/coffeelint) - 一个帮助保持 CoffeeScript 代码干净和一致的风格检查器。
* [complexity-report](https://github.com/jared-stilwell/complexity-report) - JavaScript 项目的软件复杂度分析
* [DeepScan](https://deepscan.io) :copyright: - 一种 JavaScript 分析器，主要针对运行时错误和质量问题，而不是编码约定。
* [escomplex](https://github.com/jared-stilwell/escomplex) - JavaScript 系列抽象语法树的软件复杂度分析。
* [eslint](https://github.com/eslint/eslint) - 一个完全可插入的工具，用于识别和报告 JavaScript 中的模式
* [Esprima](https://github.com/jquery/esprima) - 用于多用途分析的 ECMAScript 解析基础结构
* [flow](https://flow.org/) - JavaScript 的静态类型检查器。
* [jshint](https://github.com/jshint/jshint) :warning: - 检测 JavaScript 代码中的错误和潜在问题并强制执行团队的编码约定
* [JSLint](https://github.com/douglascrockford/JSLint) :warning: - JavaScript 代码质量工具
* [JSPrime](https://github.com/dpnishant/jsprime) – 静态安全分析工具
* [NodeJSScan](https://github.com/ajinabraham/NodeJsScan) - NodeJsScan 是用于 Node.js 应用程序的静态安全代码扫描器。
* [plato](https://github.com/es-analysis/plato) - 可视化 JavaScript 源代码复杂度
* [Prettier](https://github.com/prettier/prettier) - 一个有主见的代码格式化程序。
* [quality](https://github.com/jden/quality) - 零配置代码和模块 linting
* [retire.js](https://github.com/RetireJS/retire.js) - 扫描程序，检测是否存在已知漏洞的 JavaScript 库的使用情况
* [standard](http://standardjs.com/) - 一个用于检查 JavaScript 样式指南问题的 npm 模块
* [tern](https://github.com/ternjs/tern) - 一款深度、跨编辑器语言支持的 JavaScript 代码分析器
* [xo](https://github.com/xojs/xo) - 固执己见但可配置的 ESLint 包装器，包含许多好东西。强制执行严格且可读的代码。
* [yardstick](https://github.com/calmh/yardstick) - Javascript 代码指标

科特林

* [detekt](https://github.com/arturbosch/detekt) - Kotlin 代码的静态代码分析。
* [ktlint](https://github.com/shyiko/ktlint) - 一款内置格式化程序的反 bikeshedding Kotlin linter

## Lua

* [luacheck](https://github.com/mpeterv/luacheck) - 用于 Lua 代码的 linting 和静态分析的工具。

## MATLAB

* [mlint](https://de.mathworks.com/help/matlab/ref/mlint.html) :copyright: - 检查 MATLAB 代码文件是否存在问题。

Perl 的

* [Perl::Critic](http://search.cpan.org/~thaljef/Perl-Critic-1.126/lib/Perl/Critic.pm) - 批评 Perl 源代码以获得最佳实践。

PHP

* [dephpend](https://github.com/mihaeu/dephpend) - 依赖分析工具
* [deprecation-detector](https://github.com/sensiolabs-de/deprecation-detector) - 查找已弃用的 (Symfony) 代码的用法
* [deptrac](https://github.com/sensiolabs-de/deptrac) - 强制执行软件层之间的依赖规则。
* [DesignPatternDetector](https://github.com/Halleck45/DesignPatternDetector) - 检测 PHP 代码中的设计模式
* [EasyCodingStandard](https://github.com/Symplify/EasyCodingStandard) - 结合 [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) 和 [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
* [exakat](https://github.com/exakat/exakat) - PHP 的自动代码审查引擎
* [GrumPHP](https://github.com/phpro/grumphp) - 每次提交时检查代码
* [Mondrian](https://github.com/Trismegiste/Mondrian) - 一组使用图论的静态分析和重构工具
* [parallel-lint](https://github.com/JakubOnderka/PHP-Parallel-Lint) - 此工具检查 PHP 文件的语法比串行检查更快，并且输出更精美。
* [Parse](https://github.com/psecio/parse) - 静态安全扫描器
* [pdepend](https://pdepend.org/) - 计算 PHP 代码的圈复杂度等软件指标。
* [phan](https://github.com/etsy/phan) - 来自 etsy 的现代静态分析器
* [PHP 假设](https://github.com/rskuipers/php-assumptions) - 检查弱假设
* [PHP 编码标准修复器]（http://cs.sensiolabs.org/） - 根据 PSR-1、PSR-2 和 Symfony 标准等标准修复您的代码。
* [Php Inspections (EA Extended)](https://github.com/kalessil/phpinspectionsea) - PHP 的静态代码分析器。
* [PHP 重构浏览器](https://github.com/QafooLabs/php-refactoring-browser) - 重构助手
* [PHP 语义版本检查器](https://github.com/tomzx/php-semver-checker) - 根据语义版本建议下一个版本
* [PHP-Parser](https://github.com/nikic/PHP-Parser) - 用 PHP 编写的 PHP 解析器
* [PHP-Token-Reflection](https://github.com/Andrewsville/PHP-Token-Reflection) - 模拟 PHP 内部反射的库
* [php7cc](https://github.com/sstalle/php7cc) - PHP 7 兼容性检查器
* [php7mar](https://github.com/Alexia/php7mar) - 帮助开发者快速将代码移植到 PHP 7
* [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) - 检测违反定义的一组编码标准的情况
* [phpca](https://github.com/wapmorgan/PhpCodeAnalyzer) - 查找非内置扩展的使用情况
* [phpcf](http://wapmorgan.github.io/PhpCodeFixer/) - 查找已弃用的 PHP 功能的使用情况
* [phpcpd](https://github.com/sebastianbergmann/phpcpd)——PHP 代码的复制/粘贴检测器。
* [phpdcd](https://github.com/sebastianbergmann/phpdcd) - PHP 代码的死代码检测器 (DCD)。
* [PhpDependencyAnalysis](https://github.com/mamuz/PhpDependencyAnalysis) - 为项目构建依赖关系图
* [phpdoc-to-typehint](https://github.com/dunglas/phpdoc-to-typehint) - 使用 PHPDoc 注释向现有 PHP 项目添加标量类型提示和返回类型
* [phpDocumentor](https://www.phpdoc.org/) - 分析 PHP 源代码以生成文档
* [PHPMD](https://phpmd.org/) - 查找代码中可能存在的错误
* [PhpMetrics](http://www.phpmetrics.org/) - 计算并可视化各种代码质量指标
* [phpmnd](https://github.com/povils/phpmnd) - 帮助检测魔法数字
* [PHPQA](https://github.com/EdgedesignCZ/phpqa) - 用于运行 QA 工具 (phploc、phpcpd、phpcs、pdepend、phpmd、phpmetrics) 的工具
* [phpqa - jakzal](https://github.com/jakzal/phpqa) - 一个容器中包含多种用于 PHP 静态分析的工具
* [phpqa - jmolivas](https://github.com/jmolivas/phpqa) - PHPQA 一体化分析器 CLI 工具
* [phpsa](https://github.com/ovr/phpsa) – PHP 的静态分析工具。
* [PHPStan](https://github.com/phpstan/phpstan)——PHP 静态分析工具——无需运行代码即可发现其中的错误！
* [Progpilot](https://github.com/designsecurity/progpilot) - 用于安全目的的静态分析工具
* [Psalm](https://getpsalm.org/) - 用于查找 PHP 应用程序中类型错误的静态分析工具
* [Qafoo 质量分析器](https://github.com/Qafoo/QualityAnalyzer) - 可视化指标和源代码
* [RIPS](https://www.ripstech.com/) :copyright: - 用于检测 PHP 脚本漏洞的静态源代码分析器
* [Tuli](https://github.com/ircmaxell/Tuli) - 静态分析引擎
* [twig-lint](https://github.com/asm89/twig-lint) - twig-lint 是一个用于 twig 文件的 lint 工具。
* [WAP](https://www.owasp.org/index.php/OWASP_WAP-Web_Application_Protection) – 用于检测和纠正 PHP (4.0 或更高版本) Web 应用程序中的输入验证漏洞的工具，并通过结合静态分析和数据挖掘来预测误报。

＃＃ Python

* [bandit](https://github.com/PyCQA/bandit) - 一款用于查找 Python 代码中常见安全问题的工具
* [bellybutton](https://github.com/hchasestevens/bellybutton) - 支持自定义项目特定规则的 linting 引擎
* [Black](https://github.com/ambv/black) – 不妥协的 Python 代码格式化程序
* [cohesion](https://github.com/mschwager/cohesion) - 一个用于测量 Python 类内聚力的工具
* [Dlint](https://github.com/duo-labs/dlint) - 确保 Python 代码安全的工具
* [jedi](https://github.com/davidhalter/jedi) – Python 的自动完成/静态分析库
* [linty fresh](https://github.com/lyft/linty_fresh) - 解析 lint 错误并将其作为 pull request 的评论报告给 Github
* [mccabe](https://github.com/PyCQA/mccabe) - 检查 McCabe 复杂度
* [mypy](https://github.com/python/mypy) - 一个静态类型检查器，旨在结合鸭子类型和静态类型的优点，经常与 [MonkeyType](https://github.com/Instagram/MonkeyType) 一起使用
* [py-find-injection](https://github.com/uber/py-find-injection) - 查找 Python 代码中的 SQL 注入漏洞
* [pycodestyle](https://github.com/PyCQA/pycodestyle) - (以前称为 `pep8`) 根据 PEP 8 中的一些样式约定检查 Python 代码
* [pydocstyle](https://github.com/PyCQA/pydocstyle) - 检查是否符合 Python 文档字符串约定
* [pyflakes](https://github.com/pyflakes/pyflakes/) - 检查 Python 源文件中是否存在错误
* [pylint](https://github.com/PyCQA/pylint) - 查找编程错误，帮助执行编码标准并嗅探一些代码异味。它还包括“pyreverse”（UML 图生成器）和“symilar”（相似性检查器）。
* [pyre-check](https://github.com/facebook/pyre-check) - 适用于大型 Python 代码库的快速、可扩展的类型检查器
* [pyright](https://github.com/Microsoft/pyright) - Python 的静态类型检查器，旨在解决 mypy 等现有工具中的缺陷。
* [pyroma](https://github.com/regebro/pyroma) - 评价 Python 项目符合 Python 打包生态系统最佳实践的程度，并列出可以改进的问题
* [PyT - Python Taint](https://github.com/python-security/pyt) - 用于检测 Python Web 应用程序中的安全漏洞的静态分析工具。
* [pytype](https://github.com/google/pytype) - Python 代码的静态类型分析器。
* [radon](https://github.com/rubik/radon) - 一个从源代码计算各种指标的 Python 工具
* [vulture](https://github.com/jendrikseipp/vulture) - 查找 Python 代码中未使用的类、函数和变量
* [wemake-python-styleguide](https://github.com/wemake-services/wemake-python-styleguide) - 迄今为止最严格、最有主见的 python linter
* [wily](https://github.com/tonybaloney/wily) - 用于归档、探索和绘制 Python 源代码复杂性的命令行工具
* [xenon](https://github.com/rubik/xenon) - 使用 [`radon`](https://github.com/rubik/radon) 监控代码复杂度

Python 包装器

* [ciocheck](https://github.com/ContinuumIO/ciocheck) - linter、格式化程序和测试套件助手。作为 linter，它是 `pep8`、`pydocstyle`、`flake8` 和 `pylint` 的包装器。
* [flake8](https://github.com/PyCQA/flake8) - 一个围绕 `pyflakes`、`pycodestyle` 和 `mccabe` 的​​包装器
* [multilint](https://github.com/adamchainz/multilint) - 围绕 `flake8`、`isort` 和 `modernize` 的包装器
* [prospector](https://github.com/PyCQA/prospector) - 一个围绕 `pylint`、`pep8`、`mccabe` 和其他的包装器

## R

* [cyclocomp](https://github.com/MangoTheCat/cyclocomp) - 量化 R 函数/表达式的圈复杂度。
* [goodpractice](http://mangothecat.github.io/goodpractice/) - 分析 R 包的源代码并提供最佳实践建议。
* [lintr](https://github.com/jimhester/lintr) - R 的静态代码分析。
* [styler](https://styler.r-lib.org/)——R 源代码文件的格式化和 R 代码的漂亮打印。

角色扮演游戏

* [SourceMeter](https://www.sourcemeter.com/resources/rpg/) :copyright: - 针对 RPG III 和 RPG IV 版本（包括自由形式）的静态代码分析

红宝石

* [brakeman](https://github.com/presidentbeef/brakeman) - 用于 Ruby on Rails 应用程序的静态分析安全漏洞扫描器
* [cane](https://github.com/square/cane) - 作为构建的一部分，检查代码质量阈值
* [dawnscanner](https://github.com/thesp0nge/dawnscanner) - 一款用于 Ruby 编写的 Web 应用程序的静态分析安全扫描器。它支持 Sinatra、Padrino 和 Ruby on Rails 框架。
* [flay](https://github.com/seattlerb/flay) - Flay 分析代码的结构相似性。
* [flog](https://github.com/seattlerb/flog) - Flog 以易于阅读的痛苦报告形式报告最痛苦的代码。分数越高，代码越痛苦。
* [laser](https://github.com/michaeledgar/laser) – Ruby 代码的静态分析和样式检查。
* [pelusa](https://github.com/codegram/pelusa) – 静态分析 Lint 类型的工具，用于改进你的 OO Ruby 代码
* [quality](https://github.com/apiology/quality) - 使用社区工具对您的代码运行质量检查，并确保您的数字不会随着时间的推移而变得更糟。
* [Querly](https://github.com/soutaro/querly) - 基于模式的 Ruby 检查工具
* [Railroader](https://railroader.org/) - 一个针对 Ruby on Rails 应用程序的开源静态分析安全漏洞扫描器。
* [reek](https://github.com/troessner/reek) - Ruby 代码异味检测器
* [RuboCop](https://github.com/rubocop-hq/rubocop) - 一个 Ruby 静态代码分析器，基于社区 Ruby 风格指南。
* [Rubrowser](https://github.com/blazeeboy/rubrowser) - Ruby 类交互式依赖图生成器。
* [ruby-lint](https://github.com/YorickPeterse/ruby-lint) - Ruby 的静态代码分析
* [rubycritic](https://github.com/whitesmith/rubycritic) - Ruby 代码质量报告器
* [SandiMeter](https://github.com/makaroni4/sandi_meter) - 用于检查 Ruby 代码是否符合 Sandi Metz 规则的静态分析工具。
* [Sorbet](https://github.com/sorbet/sorbet) - 专为 Ruby 设计的快速、强大的类型检查器

## 锈

* [cargo-audit](https://github.com/RustSec/cargo-audit) - 审计 Cargo.lock 中存在安全漏洞的包，并将其报告给 [RustSec 咨询数据库](https://github.com/RustSec/advisory-db/)。
* [cargo-inspect](https://github.com/mre/cargo-inspect) - 检查没有语法糖的 Rust 代码，看看编译器在幕后做了什么。
* [clippy](https://github.com/Manishearth/rust-clippy) - 一个代码检查器，用于捕捉常见错误并改进你的 Rust 代码。
* [electrolysis](https://github.com/Kha/electrolysis) - 一种通过将 Rust 程序转换为 Lean 定理证明器中的定义来对其进行形式化验证的工具。
* [herbie](https://github.com/mcarton/rust-herbie-lint) - 使用数值不稳定的浮点表达式时向您的板条箱添加警告或错误。
* [linter-rust](https://github.com/AtomLinter/linter-rust) - 使用 rustc 和 cargo 在 Atom 中对 Rust 文件进行 Linting
* [Rust 语言服务器](https://github.com/rust-lang-nursery/rls) - 支持“goto 定义”、符号搜索、重新格式化和代码完成等功能，并支持重命名和重构。
* [rustfix](https://github.com/killercup/rustfix) - 阅读并应用 rustc（以及第三方 lint，如 clippy 提供的建议）提出的建议。

Scala 的

* [linter](https://github.com/HairyFotr/linter) - Linter 是一个 Scala 静态分析编译器插件，它添加了针对各种可能的错误、效率低下和风格问题的编译时检查。
* [Scalastyle](http://www.scalastyle.org) - Scalastyle 检查你的 Scala 代码并指出其中的潜在问题。
* [scapegoat](https://github.com/sksamuel/scapegoat) - 用于静态代码分析的 Scala 编译器插件
* [WartRemover](https://github.com/puffnfresh/wartremover) - 一个灵活的 Scala 代码检查工具。

＃＃ 壳

* [i-Code CNES for Shell](https://github.com/lequal/i-CodeCNES) - 一个针对 Shell 和 Fortran (77 和 90) 的开源静态代码分析工具。
* [shellcheck](https://github.com/koalaman/shellcheck) - ShellCheck，一个为 bash/sh shell 脚本提供警告和建议的静态分析工具

坚固性

* [slither](https://github.com/trailofbits/slither) - 静态分析框架，运行一套漏洞检测器，打印有关合同详细信息的视觉信息，并提供 API 以轻松编写自定义分析
* [solium](https://github.com/duaraghav8/Solium) - Solium 是一个用于识别和修复 Solidity 智能合约风格和安全问题的 linter 工具。

SQL 语句

* [sqlcheck](https://github.com/jarulraj/sqlcheck) - 自动识别 SQL 查询中的反模式
* [sqlint](https://github.com/purcell/sqlint) - 简单的 SQL linter
* [tsqllint](https://github.com/tsqllint/tsqllint) - 特定于 T-SQL 的 linter
* [TSqlRules](https://github.com/ashleyglee/TSqlRules) - SQL Server 的 TSQL 静态代码分析规则

迅速

* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - 用于重新格式化 Swift 代码的库和命令行格式化工具
* [SwiftLint](https://github.com/realm/SwiftLint) - 强制执行 Swift 风格和约定的工具
* [Tailor](https://github.com/sleekbyte/tailor) - 用 Apple 的 Swift 编程语言编写的源代码静态分析和 lint 工具。

Tcl 简介

* [Frink](https://catless.ncl.ac.uk/Programs/Frink/) - Tcl 格式化和静态检查程序（可以美化程序、最小化、混淆或仅进行健全性检查）。
* [Nagelfar](https://sourceforge.net/projects/nagelfar/) - Tcl 的静态语法检查器
* [tclchecker](https://github.com/ActiveState/tdk/blob/master/docs/3.0/TDK_3.0_Checker.txt) - 静态语法分析模块（作为 [TDK](https://github.com/ActiveState/tdk) 的一部分）。

TypeScript

* [Codelyzer](https://github.com/mgechev/codelyzer) - 一组用于 Angular 2 TypeScript 项目静态代码分析的 tslint 规则。
* [TSLint](https://github.com/palantir/tslint) - TypeScript 语言的可扩展 linter。
* [tslint-clean-code](https://github.com/Glavin001/tslint-clean-code) - 一组受 Clean Code 手册启发的 TSLint 规则。
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib) - 微软维护的一套用于 TypeScript 项目静态代码分析的 tslint 规则。

VBScript

* [测试设计工作室]（http://patterson-consulting.net/tds）：版权所有： - 一个完整的 IDE，具有静态代码分析功能，适用于基于 Micro Focus Unified Functional Testing VBScript 的自动化测试。

# 多种语言

* [AppChecker](https://npo-echelon.ru/en/solutions/appchecker.php) :copyright: - 对 C/C++/C#、PHP 和 Java 进行静态分析
* [应用程序检查器](https://www.ptsecurity.com/ww-en/products/ai/) :copyright: - 商业静态代码分析，可生成漏洞来验证漏洞。支持：Java（包括 JSP 和 JSF）、C#、VB.Net、ASP.NET、Php、JavaScript、Objective-C、Swift、C\C++、SQL（PL/SQL、T-SQL、MySQL）、HTML5
* [AppScan 源](https://www.hcltechsw.com/wps/portal/products/appscan/home) :copyright: - 商业静态代码分析。支持：Microsoft .NET Framework（C#、ASP.NET、VB.NET）、ASP（JavaScript/VBScript）、C/C++、COBOL、ColdFusion、JavaScript、JavaServer Pages（JSP）、Java™（包括对 Android API 的支持）、Perl、PHP、PL/SQL、T-SQL、Visual Basic 6
* [APPscreener](https://appscreener.us) :copyright: - 二进制和源代码的静态代码分析 - Java/Scala、PHP、Javascript、C#、PL/SQL、Python、T-SQL、C/C++、ObjectiveC/Swift、Visual Basic 6.0、Ruby、Delphi、ABAP、HTML5 和 Solidity
* [Axivion Bauhaus Suite](https://www.axivion.com/en/products-services-9#products_bauhaussuite) :copyright: - 追踪 C/C++、C#/.NET、Java 和 Ada 83/Ada 95 中容易出错的代码位置、样式违规、克隆或死代码、循环依赖等
* [Checkmarx CxSAST](https://www.checkmarx.com/products/static-application-security-testing/) :copyright: - 无需预编译的商业静态代码分析。支持：Android (Java)、Apex 和 VisualForce、ASP、C#、C/C++、Go、Groovy、HTML5、Java、JavaScript、Node.js、Objective C、Perl、PhoneGap、PHP、Python、Ruby、Scala、Swift、VB.NET、VB6、VBScript
* [coala](https://coala.io/) - 用于创建代码分析的独立于语言的框架 - 默认支持[超过 60 种语言](https://coala.io/languages)
* [Cobra](http://spinroot.com/cobra/) :copyright: - 美国宇航局喷气推进实验室的结构源代码分析器。支持 C、C++、Ada 和 Python。
* [codeburner](https://github.com/groupon/codeburner) - 提供统一的界面，对发现的问题进行排序和处理
* [CodeFactor](https://codefactor.io) :copyright: - 针对 C#、C、C++、CoffeeScript、CSS、Groovy、GO、JAVA、JavaScript、Less、Python、Ruby、Scala、SCSS、TypeScript 的静态代码分析。
* [CodeIt.Right](https://submain.com/products/codeit.right.aspx) :copyright: - CodeIt.Right™ 提供一种快速、自动化的方法来确保您的源代码符合（您的）预定义的设计和样式指南以及最佳编码实践。支持的语言：C#、VB.NET。
* [CodeScene](https://empear.com/) :copyright: - CodeScene 优先考虑技术债务，发现社交模式并识别代码中的隐藏风险。
* [cqc](https://github.com/xcatliu/cqc) - 检查 js、jsx、vue、css、less、scss、sass 和 styl 文件的代码质量。
* [Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: - Synopsys Coverity 支持 20 种语言和 70 多个框架，包括 Ruby on rails、Scala、PHP、Python、JavaScript、TypeScript、Java、Fortran、C、C++、C#、VB.NET。
* [Depends](https://github.com/multilang-depends/depends) - 分析 Java、C/C++、Ruby 代码元素的综合依赖关系。
* [DevSkim](https://github.com/microsoft/devskim) - 基于正则表达式的 Visual Studio、VS Code 和 Sublime Text 静态分析工具 - C/C++、C#、PHP、ASP、Python、Ruby、Java 等。
* [Fortify](https://software.microfocus.com/en-us/products/static-code-analysis-sast/overview) :copyright: 一个商业静态分析平台，支持 C/C++、C#、VB.NET、VB6、ABAP/BSP、ActionScript、Apex、ASP.NET、Classic ASP、VB Script、Cobol、ColdFusion、HTML、Java、JS、JSP、MXML/Flex、Objective-C、PHP、PL/SQL、T-SQL、Python (2.6、2.7)、Ruby (1.9.3)、Swift、Scala、VB 和 XML 的扫描。
* [Goodcheck](https://github.com/sideci/goodcheck) - 基于正则表达式的可定制 linter
* [graudit](https://github.com/wireghoul/graudit) - Grep 粗审计 - 源代码审计工具 - C/C++, PHP, ASP, C#, Java, Perl, Python, Ruby
* [Hound CI](https://houndci.com/) - 对 GitHub 拉取请求中的样式违规进行评论。支持 Coffeescript、Go、HAML、JavaScript、Ruby、SCSS 和 Swift。
* [imhotep](https://github.com/justinabrahms/imhotep) - 评论进入您存储库的提交并检查语法错误和常规 lint 警告。
* [Infer](https://github.com/facebook/infer) - Java、C 和 Objective-C 的静态分析器
* [Klocwork](http://www.klocwork.com/products-services/klocwork) :copyright: - 针对 C/C++、Java 和 C# 的质量和安全静态分析
* [Kiuwan](https://www.kiuwan.com/code-security-sast/) :copyright: - 在极快的协作环境中识别和补救网络威胁，并无缝集成到您的 SDLC 中。Python、C\C++、Java、C#、PHP 等
* [oclint](https://github.com/oclint/oclint) - 一个静态源代码分析工具，用于提高 C、C++ 和 Objective-C 的质量并减少缺陷。
* [pfff](https://github.com/facebook/pfff) - Facebook 用于多种语言的代码分析、可视化或保留样式的源转换的工具
* [PMD](https://pmd.github.io/) - Java、Javascript、PLSQL、XML、XSL 等源代码分析器
* [Pronto](https://github.com/prontolabs/pronto) - 快速自动审查代码变更。支持 40 多种语言的运行器，包括 Clang、Elixir、JavaSCript、PHP、Ruby 等
* [pre-commit](https://github.com/pre-commit/pre-commit) - 用于管理和维护多语言预提交钩子的框架。
* [PT.PM](https://github.com/PositiveTechnologies/PT.PM) - 基于统一 AST 或 UST 的源代码模式搜索引擎。目前支持 C#、Java、PHP、PL/SQL、T-SQL 和 JavaScript。可以在代码中或使用 DSL 描述模式。
* [PVS-Studio](https://www.viva64.com/en/pvs-studio/) :copyright: - a（[有条件免费](https://www.viva64.com/en/b/0614/) 适用于 FOSS 和个人开发者）静态分析 C、C++、C# 和 Java 代码。出于广告目的 [您可以提出一个大型 FOSS 项目供 PVS 员工进行分析](https://github.com/viva64/pvs-studio-check-list)。支持 CWE 映射、MISRA 和 CERT 编码标准。
* [Reviewdog](https://github.com/haya14busa/reviewdog) - 用于在任何代码托管服务中发布来自任何 linter 的审核评论的工具。
* [安全代码扫描](https://security-code-scan.github.io/) - C# 和 VB.NET 的安全代码分析器。检测各种安全漏洞模式：SQLi、XSS、CSRF、XXE、Open Redirect 等。
* [Semmle QL 和 LGTM](https://semmle.com/) :copyright: - 使用源代码查询查找安全漏洞、变体和关键代码质量问题。自动 PR 代码审查；免费提供给公共 GitHub/Bitbucket 存储库：[LGTM.com](https://LGTM.com)。
* [shipshape](https://github.com/google/shipshape) - 静态程序分析平台，允许自定义分析器通过通用接口插入
* [SonarQube](http://www.sonarqube.org/) - SonarQube 是一个管理代码质量的开放平台。
* [STOKE](https://github.com/StanfordPL/stoke) - 一种与编程语言无关的随机优化器，适用于 x86_64 指令集。它使用随机搜索来探索所有可能的程序转换的极高维空间
* [Synopsys](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: - 一个商业静态分析平台，允许扫描多种语言（C/C++、Android、C#、Java、JS、PHP、Python、Node.JS、Ruby、Fortran 和 Swift）
* [TscanCode](https://github.com/Tencent/TscanCode) - 腾讯提供的针对 C/C++、C#、Lua 代码的快速、精准静态分析解决方案。采用 GPLv3 许可。
* [Undebt](https://github.com/Yelp/undebt) - 基于简单模式定义进行大规模、自动、可编程重构的语言独立工具
* [Veracode](http://www.veracode.com/products/static-analysis-sast/static-code-analysis) :copyright: - 无需源代码即可查找二进制文件和字节码中的缺陷。支持所有主流编程语言：Java、.NET、JavaScript、Swift、Objective-C、C、C++ 等。
* [WALA](http://wala.sourceforge.net/wiki/index.php/Main_Page) - Java 字节码及相关语言和 JavaScript 的静态分析功能
* [WhiteHat 应用安全平台](https://www.whitehatsec.com/products/static-application-security-testing/) :copyright: - WhiteHat Scout（针对开发者）与 WhiteHat Sentinel Source（针对运营）相结合，支持 WhiteHat Top 40 和 OWASP Top 10。支持语言：Java、C#(.NET)、ASP.NET、PHP、JavaScript、Node.js、Objective-C、Android、HTML5、TypeScript。
* [Wotan](https://github.com/fimbullinter/wotan) - 可插入的 TypeScript 和 JavaScript linter
* [XCode](https://developer.apple.com/xcode/) :copyright: - XCode 为 [Clang](http://clang-analyzer.llvm.org/xcode.html) 静态代码分析器 (C/C++, Obj-C) 提供了相当不错的 UI

＃ 其他

构建工具

* [checkmake](https://github.com/mrtazz/checkmake) - Makefile 的 Linter / 分析器
* [codechecker](https://github.com/Ericsson/codechecker) - Clang Static Analyzer 的缺陷数据库和查看器扩展

二进制文件

* [BinSkim](https://github.com/Microsoft/binskim) - 一个二进制静态分析工具，为 Windows 可移植可执行文件提供安全性和正确性结果。
* [cwe_checker](https://github.com/fkie-cad/cwe_checker) - cwe_checker 查找二进制可执行文件中的易受攻击的模式。
* [Jakstab](https://github.com/jkinder/jakstab) - Jakstab 是一个基于抽象解释的集成反汇编和静态分析框架，用于设计可执行文件的分析并恢复可靠的控制流图。
* [Manalyze](https://github.com/JusticeRage/Manalyze) - 静态分析器，用于检查可移植可执行文件中是否存在恶意内容。
* [Twiggy](https://github.com/rustwasm/twiggy) - 分析二进制文件的调用图以分析代码大小。目标是精简二进制文件。


容器

* [anchore](https://anchore.io/) - 发现、分析和认证容器镜像
* [clair](https://github.com/coreos/clair) - 容器漏洞静态分析
* [collector](https://github.com/banyanops/collector) - 在容器内运行任意脚本，并收集有用的信息
* [dagda](https://github.com/eliasgranderubio/dagda) - 对 docker 镜像/容器中已知漏洞进行静态分析。
* [Docker Label Inspector](https://github.com/garethr/docker-label-inspector) - 检查并验证 Dockerfile 标签
* [Haskell Dockerfile Linter](https://github.com/lukasmartinelli/hadolint) - 更智能的 Dockerfile linter，可帮助您构建最佳实践的 Docker 镜像
* [kube-score](https://github.com/zegl/kube-score) - 对 Kubernetes 对象定义的静态代码分析。


## 配置文件

* [dotenv-linter](https://github.com/wemake-services/dotenv-linter) - 轻松对 dotenv 文件进行 Linting。
* [gixy](https://github.com/yandex/gixy) - 一款用于分析 Nginx 配置的工具。主要目标是防止错误配置并自动检测缺陷。

配置管理

* [ansible-lint](https://github.com/willthames/ansible-lint) - 检查剧本中可能改进的实践和行为
* [cfn-lint](https://github.com/awslabs/cfn-python-lint) - AWS 实验室 CloudFormation linter。
* [cfn_nag](https://github.com/stelligent/cfn_nag) - 用于 AWS CloudFormation 模板的 linter。
* [cookstyle](https://docs.chef.io/cookstyle.html) - Cookstyle 是一款基于 RuboCop Ruby linting 工具的 Chef 食谱检查工具
* [foodcritic](http://www.foodcritic.io/) - 一款用于检查 Chef 菜谱中常见问题的 lint 工具。
* [Puppet Lint](https://github.com/rodjek/puppet-lint) - 检查你的 Puppet 清单是否符合样式指南。
* [terrascan](https://github.com/cesar-rodriguez/terrascan) - 用于 Terraform 模板静态代码分析的安全性和最佳实践测试集合。
* [tflint](https://github.com/wata727/tflint) - 一个 Terraform linter，用于检测 `terraform plan` 无法检测到的错误。


## CSS

* [CSS 统计](https://github.com/cssstats/cssstats) - 样式表上可能有趣的统计数据
* [CSScomb](https://github.com/csscomb/csscomb.js) - CSS 编码样式格式化程序。支持自定义配置，让样式表美观一致
* [CSSLint](https://github.com/CSSLint/csslint) - 进行基本语法检查并查找有问题的模式或效率低下的迹象
* [GraphMyCSS.com](https://graphmycss.com) - CSS 特异性图表生成器
* [Parker](https://github.com/katiefenn/parker) - 样式表分析工具
* [Project Wallace CSS Analyzer](https://github.com/projectwallace/css-analyzer) - CSS 分析工具，是 [Project Wallace](https://www.projectwallace.com) 的一部分
* [sass-lint](https://github.com/sasstools/sass-lint) - 仅适用于 Node 的 Sass linter，适用于 sass 和 scss 语法。
* [scsslint](https://github.com/brigade/scss-lint) - 用于 SCSS 文件的 Linter
* [特异性图]（https://github.com/pocketjoso/specificity-graph） - CSS 特异性图生成器
* [Stylelint](http://stylelint.io/) - 用于 SCSS/CSS 文件的 Linter

小黄瓜

* [gherkin-lint](https://github.com/vsiakka/gherkin-lint) - 用 Ja​​vascript 编写的 Gherkin-Syntax 的 linter。

HTML

* [HTML Inspector](https://github.com/philipwalton/html-inspector) - HTML Inspector 是一个代码质量工具，可以帮助您和您的团队编写更好的标记。
* [HTML Tidy](http://www.html-tidy.org/) - 通过修复标记错误并将遗留代码升级到现代标准来纠正和清理 HTML 和 XML 文档。
* [HTMLHint](https://github.com/yaniswang/HTMLHint) - HTML 静态代码分析工具
* [Polymer-analyzer](https://github.com/Polymer/polymer-analyzer) - 一个针对 Web 组件的静态分析框架。


IDE 插件

* [ale](https://github.com/w0rp/ale) - 用于 Vim 和 NeoVim 的异步 Lint 引擎，支持多种语言
* [Attackflow Extension](https://www.attackflow.com/Extension) :copyright: - Visual Studio 的 Attackflow 插件，使开发人员无需任何先验知识即可在源代码中实时查找关键的安全漏洞。
* [DevSkim](https://github.com/Microsoft/DevSkim) - 内联、实时安全分析。适用于多种编程语言和 IDE（VS、VS Code、Sublime Text 等）。
* [Puma Scan](https://github.com/pumasecurity/puma-scan) - 当开发团队在 Visual Studio 中编写代码时，Puma Scan 为常见漏洞（XSS、SQLi、CSRF、LDAPi、加密、反序列化等）提供实时安全代码分析。
* [安全代码扫描](https://security-code-scan.github.io/) - 集成到 Visual Studio 2015 及更新版本的 C# 和 VB.NET 安全代码分析器。检测各种安全漏洞模式：SQLi、XSS、CSRF、XXE、Open Redirect 等。
* [vint](https://github.com/Kuniwak/vint) – 由 Python 实现的快速且高度可扩展的 Vim 脚本语言 Lint。

＃＃ 乳胶

* [ChkTeX](http://www.nongnu.org/chktex/) - LaTex 的 linter，可以捕获 LaTeX 监督下的一些印刷错误。
* [lacheck](https://www.ctan.org/pkg/lacheck) - 用于查找 LaTeX 文档中常见错误的工具。

## 生成文件

* [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) - FreeBSD 和 DragonFlyBSD 端口目录的验证程序。

## 降价

* [markdownlint](https://github.com/DavidAnson/markdownlint) - 基于 Node.js 的 Markdown/CommonMark 文件样式检查器和 lint 工具。
* [mdl](https://github.com/mivok/markdownlint) - 用于检查 Markdown 文件并标记样式问题的工具。

＃＃ 移动的

* [android-lint-summary](https://github.com/passy/android-lint-summary) - 将多个项目的 lint 错误合并为一个输出，一次检查多个子项目的 lint 结果。
* [FlowDroid](https://github.com/secure-software-engineering/soot-infoflow-android) - Android 应用程序的静态污点分析工具
* [paprika](https://github.com/GeoffreyHecht/paprika) - 一个用于检测所分析的 Android 应用程序中某些代码异味的工具包。
* [qark](https://github.com/linkedin/qark) - 用于查找多个与 Android 应用程序安全相关的漏洞的工具

## 软件包

* [lintian](https://github.com/Debian/lintian) - Debian 软件包静态分析工具
* [rpmlint](https://github.com/rpm-software-management/rpmlint) - 检查 rpm 包常见错误的工具

## 支持工具

* [LibVCS4j](https://github.com/uni-bremen-agst/libvcs4j) - 一个 Java 库，通过为不同的版本控制系统和问题跟踪器提供通用 API，允许现有工具分析软件系统的演变。
* [Violations Lib](https://github.com/tomasbjerre/violations-lib) - 用于解析静态代码分析报告文件的 Java 库。被大量 Jenkins、Maven 和 Gradle 插件使用。

## 模板语言

* [ember-template-lint](https://github.com/rwjblue/ember-template-lint) - Ember 或 Handlebars 模板的 Linter。
* [haml-lint](https://github.com/brigade/haml-lint) - 用于编写干净、一致的 HAML 的工具
* [slim-lint](https://github.com/sds/slim-lint) - 用于分析 Slim 模板的可配置工具
* [yamllint](https://github.com/adrienverge/yamllint) - 检查 YAML 文件的语法有效性、密钥重复和外观问题（例如行长度、尾随空格和缩进）。

＃＃ 翻译

* [dennis](https://github.com/willkg/dennis/) - 一组用于处理 PO 文件的实用程序，可简化开发并提高质量。

写作

* [After the Deadline](https://afterthedeadline.com/) :warning: - 拼写、风格和语法检查器
* [codespell](https://github.com/codespell-project/codespell) - 检查代码中常见的拼写错误
* [languagetool](https://github.com/languagetool-org/languagetool) - 25 种以上语言的风格和语法检查器。它可以发现许多简单的拼写检查器无法检测到的错误。
* [misspell-fixer](https://github.com/vlajos/misspell-fixer) - 用于修复源代码中常见拼写错误和错别字的快速工具
* [上下文中的拼写错误单词]（https://github.com/jwilk/mwic） - 一个拼写检查器，它将可能的拼写错误分组并在其上下文中显示出来
* [proselint](https://github.com/amperser/proselint/) - 一个针对英语散文的 linter，侧重于写作风格而不是语法。
* [vale](https://github.com/ValeLint/vale) - 一个可定制的、语法感知的散文 linter。
* [write-good](https://github.com/btford/write-good) - 一款专注于消除“模棱两可的词语”的 linter。

Web 服务
* [Codacy](https://www.codacy.com/) :copyright: - 代码分析可以更快地交付更好的代码。
* [Code Climate](https://codeclimate.com/) :copyright: - 开放且可扩展的静态分析平台，适合所有人。
* [Code Inspector](https://www.code-inspector.com) :copyright: - 支持 10 多种语言的代码质量和技术债务管理平台。
* [Codeac](https://www.codeac.io?ref=awesome-static-analysis) :copyright: - 自动代码审查工具与 GitHub、Bitbucket 和 GitLab 集成（甚至自托管）。适用于 JavaScript、TypeScript、Python、Ruby、Go、PHP、Java、Docker 等。（开源免费）
* [CodeFactor](https://codefactor.io) :copyright: - 对 GitHub 或 BitBucket 上的存储库进行自动代码分析。
* [CodeFlow](https://www.getcodeflow.com) :copyright: - 自动代码分析工具，用于处理技术深度。与 Bitbucket 和 Gitlab 集成。（对开源项目免费）
* [Gamma](https://mygamma.io) :copyright: - 一个智能软件分析平台，可从多个角度识别问题：设计问题、代码问题、重复和指标。适用于 Java、C、C++ 和 C#。
* [kiuwan](https://www.kiuwan.com/) :copyright: - 云端软件分析支持超过 22 种编程语言。
* [Landscape](https://landscape.io/) :copyright: - Python 的静态代码分析
* [Layered Insight](https://layeredinsight.com/) :copyright: - 容器原生应用程序保护，提供容器化应用程序的可见性和控制。
* [LGTM.com](https://lgtm.com/) :copyright: - 对 GitHub 和 Bitbucket 进行深度代码分析，以查找安全漏洞和关键代码质量问题（使用 Semmle QL）。自动对拉取请求进行代码审查；对公共存储库免费。
* [Nitpick CI](https://nitpick-ci.com) :copyright: - 自动 PHP 代码审查
* [PullRequest](https://www.pullrequest.com) :copyright: - 内置静态分析的代码审查服务
* [QuantifiedCode](https://www.quantifiedcode.com/) - 自动代码审查和修复
* [Reshift](https://softwaresecured.com/reshift/) :copyright: - 用于检测和管理 Java 安全漏洞的源代码分析工具。
* [Scrutinizer](https://scrutinizer-ci.com/) :copyright: - 可与 GitHub 集成的专有代码质量检查器
* [SensioLabs Insight](https://insight.sensiolabs.com/) :copyright: - 检测安全风险、查找错误并为 PHP 项目提供可操作的指标
* [Sider](https://sider.review) :copyright: - 一款自动化代码审查工具。提高开发人员的生产力。
* [Snyk](https://snyk.io/) :copyright: - 用于 node.js 应用程序依赖项的漏洞扫描程序（对开源项目免费）
* [SonarCloud](https://sonarcloud.io) :copyright: - 基于云的多语言静态代码分析。历史、趋势、安全热点、拉取请求分析等。免费开源。
* [Teamscale](http://www.teamscale.com/) :copyright: - 支持超过 25 种语言和直接 IDE 集成的静态和动态分析工具。可根据要求提供免费的开源项目托管。提供免费的学术许可证。
* [Upsource](https://www.jetbrains.com/upsource/) :copyright: - 具有静态代码分析和针对 Java、PHP、JavaScript 和 Kotlin 的代码感知导航的代码审查工具。

# 更多合集

* [go-tools](https://github.com/dominikh/go-tools) - 用于处理 Go 代码的工具和库的集合，包括 linters 和静态分析
* [linters](https://github.com/mcandre/linters) - 静态代码分析简介
* [php-static-analysis-tools](https://github.com/exakat/php-static-analysis-tools) - 有用的 PHP 静态分析工具的列表
* [C/C++ 工具](https://www.peerlyst.com/posts/a-list-of-static-analysis-tools-for-cc-peerlyst?utm_source=twitter&utm_medium=social&utm_content=peerlyst_post&utm_campaign=peerlyst_resources) - C/C++ 静态分析工具列表
* [Tcl 工具](https://wiki.tcl-lang.org/page/Static+syntax+analysis#95329c336da897c3dea8ab434ca30575f4529bf6f514c1519881bd126e1d1423) - 包含多个 Tcl 检查器和静态语法分析工具的 wiki 页面。
* [维基百科](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) - 静态代码分析工具列表。

＃＃ 执照

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，[Matthias Endler](http://matthias-endler.de) 放弃了对该作品的所有版权以及相关或邻接的权利。
标题图片[由Freepik设计](http://www.freepik.com)。
