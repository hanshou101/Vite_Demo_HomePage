https://github.com/openblockchains/awesome-blockchains

一次一个区块地开采数字黄金？！• 不要指望（快速）致富 • 郁金香🌷🌷🌷（就像区块链一样）伟大而华丽（并将持久）  
b0 \= Block.first(  
        { from: "Dutchgrown", to: "Vincent", what: "Tulip Bloemendaal Sunset", qty: 10 },  
        { from: "Keukenhof",  to: "Anne",    what: "Tulip Semper Augustus",    qty: 7  } )

b1 \= Block.next( b0,  
        { from: "Flowers",    to: "Ruben",   what: "Tulip Admiral van Eijck",  qty: 5  },  
        { from: "Vicent",     to: "Anne",    what: "Tulip Bloemendaal Sunset", qty: 3  },  
        { from: "Anne",       to: "Julia",   what: "Tulip Semper Augustus",    qty: 1  },  
        { from: "Julia",      to: "Luuk",    what: "Tulip Semper Augustus",    qty: 1  } )  
...  
（来源：[`blockchain_with_transactions.rb`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.rb/blockchain_with_transactions.rb)）

# **很棒的区块链**

关于超棒区块链的合集 \- 开放分布式数据库，带有加密哈希，包括 git ;-)。区块链是新的郁金香 🌷🌷🌷。  
内容：

* [常见问题 (FAQ) 和答案](https://github.com/openblockchains/awesome-blockchains#frequently-asked-questions-faqs--answers)  
* [自己动手 (DIY) \- 构建自己的区块链](https://github.com/openblockchains/awesome-blockchains#do-it-yourself-diy---build-your-own-blockchain)  
  * [Python](https://github.com/openblockchains/awesome-blockchains#python) • [Ruby](https://github.com/openblockchains/awesome-blockchains#ruby) • [JavaScript](https://github.com/openblockchains/awesome-blockchains#javascript) • [Java](https://github.com/openblockchains/awesome-blockchains#java) • [Go](https://github.com/openblockchains/awesome-blockchains#go)  
* [区块链文章](https://github.com/openblockchains/awesome-blockchains#blockchain-articles)  
* [区块链书籍](https://github.com/openblockchains/awesome-blockchains#blockchain-books)  
* [区块链（精简版）加密哈希库](https://github.com/openblockchains/awesome-blockchains#blockchain-lite-crypto-hash-libraries)  
* [Git，Git，Git——带有加密哈希的愚蠢内容跟踪器](https://github.com/openblockchains/awesome-blockchains#git-git-git---the-stupid-content-tracker-with-crypto-hashes)  
* [经典郁金香狂热](https://github.com/openblockchains/awesome-blockchains#classic-tulip-mania)  
* [太棒了](https://github.com/openblockchains/awesome-blockchains#awesome-awesomeness)

## **有什么新闻？**

对于区块链书籍，请参阅新的[最佳加密书籍页面 »](https://openblockchains.github.io/crypto-books/)

### **2020 年度开放区块链书籍奖颁给...**

**![][image1]** [《Libra 耸耸肩：Facebook 如何试图接管货币》](https://davidgerard.co.uk/blockchain/libra/) 作者：David Gerard，2020 年 11 月，182 页—— *简介：接管货币++Libra 用户指南++Libra 的起源：Beller 的区块链++推出 Libra：让我们开始加密货币++比特币：为什么 Libra 是这样的++Libra 白皮书++为无银行账户者提供银行服务++Libra 储备计划和经济稳定性++Libra、隐私和您的数字身份++监管机构惊恐地退缩++David Marcus 在美国众议院和参议院面前++2019 年 7 月至 9 月：Libra 面临严峻考验++2019 年 10 月：Libra 的糟糕月份++Mark Zuckerberg 在美国众议院面前++2019 年 11 月：衰落++央行数字货币++结语：Libra 2.0：尚未消亡++附录：2010-2013 年：Facebook Credits 的兴衰*  
有关 Diem (以前称为 Libra) 的更多信息，请参阅[Awesome Diem (以前称为 Libra) 和 Move 页面 »](https://github.com/openblockchains/awesome-diem)  
---

有关加密货币报价，请参阅新的[100+ 最佳加密货币报价 \- 我 HODL，你 HODL，我们 HODL！ \- 突发新闻：比特币刚刚突破 22,000 美元！页面 »](https://github.com/openblockchains/crypto-quotes)

### **2020 年度最佳加密货币名言“预言家名言”奖颁给……**

SEC投资者教育：

* 不懂投资？  
* 不要投资它。

是的，但是如果只有 2100 万呢？  
\- Trolly McTrollface

## **常见问题 (FAQ) 和答案**

问：什么是区块链？  
答：区块链是一种分布式数据库，其中包含一系列记录（即区块）（即链），这些记录由数字指纹（即加密哈希）链接和保护。示例来自[`blockchain.rb`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.rb/blockchain.rb)：  
\[\#\<Block:0x1eed2a0  
  @timestamp     \= 1637-09-15 20:52:38,  
  @data          \= "Genesis",  
  @previous\_hash \= "0000000000000000000000000000000000000000000000000000000000000000",  
  @hash          \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b"\>,  
 \#\<Block:0x1eec9a0  
  @timestamp     \= 1637-09-15 21:02:38,  
  @data          \= "Transaction Data...",  
  @previous\_hash \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b",  
  @hash          \= "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743"\>,  
 \#\<Block:0x1eec838  
  @timestamp     \= 1637-09-15 21:12:38,  
  @data          \= "Transaction Data......",  
  @previous\_hash \= "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743",  
  @hash          \= "be50017ee4bbcb33844b3dc2b7c4e476d46569b5df5762d14ceba9355f0a85f4"\>,  
  ...

![][image2]  
问：什么是哈希？什么是（单向）加密（图形）哈希摘要校验和？  
答：哈希值`eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743` 是使用单向加密（图形）哈希摘要校验和函数（例如 SHA256（256 位安全哈希算法））从数据中计算出的小型摘要校验和。示例来自[`blockchain.rb`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.rb/blockchain.rb)：  
def calc\_hash  
  sha \= Digest::SHA256.new  
  sha.update( @timestamp.to\_s \+ @previous\_hash \+ @data )  
  sha.hexdigest   \#\# returns "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743"  
end  
区块链使用

* 区块时间戳（例如`1637-09-15 20:52:38`）和  
* 来自前一个块的哈希值（例如`edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b`），最后  
* 区块数据（例如`Transaction Data...`）

计算新的哈希摘要校验和，即哈希例如`be50017ee4bbcb33844b3dc2b7c4e476d46569b5df5762d14ceba9355f0a85f4`。  
问：什么是 Merkle 树？  
答：Merkle 树是一种哈希树，以 Ralph Merkle 的名字命名，他于 1979 年为该概念申请了专利（专利于 2002 年到期）。哈希树是哈希列表或哈希链的泛化，其中每个叶节点（在树中）都标有数据块，每个非叶节点（在树中）都标有其子节点标签的加密（图形）哈希。有关更多信息，请参阅[Merkle 树](https://en.wikipedia.org/wiki/Merkle_tree)Wikipedia 文章。  
注意：通过添加加密（图形）哈希函数，您可以“默克尔化”任何数据结构。  
问：什么是 Merkelized DAG（有向无环图）？  
答：它是一个由加密（图形）哈希保护的区块链，使用有向无环图数据结构（而不​​是线性“经典”链表）。  
注意：Git 使用 merkelized dag（有向无环图）作为其区块链。  
问：Git Repo 是区块链吗？  
答：是的，git repo 中的每个分支都是一个区块链。“经典”的 Satoshi 区块链就像一个只有一个主分支的 git repo。

## **自己动手 (DIY) \- 构建自己的区块链**

**![][image3]**  
[Python](https://github.com/openblockchains/awesome-blockchains#python) • [Ruby](https://github.com/openblockchains/awesome-blockchains#ruby) • [JavaScript](https://github.com/openblockchains/awesome-blockchains#javascript) • [Java](https://github.com/openblockchains/awesome-blockchains#java) • [Go](https://github.com/openblockchains/awesome-blockchains#go)

### **Python**

Gerald Nash 撰写的《让我们用 Python 构建最小的区块链》系列

* [让我们用不到 50 行 Python 代码构建最小的区块链 (第 1 部分)](https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b)，2016 年 7 月  
* [让我们用更多的 Python 代码让最小的区块链变得更大（第 2 部分）](https://medium.com/crypto-currently/lets-make-the-tiniest-blockchain-bigger-ac360a328f4d)，2016 年 7 月

[构建自己的区块链：](http://ecomunsing.com/build-your-own-blockchain) Eric Munsing 的 Python 教程，2017 年 3 月，[（来源）](https://github.com/emunsing/tutorials/blob/master/BuildYourOwnBlockchain.ipynb)  
[通过构建区块链（Python 版）学习区块链，](https://hackernoon.com/learn-blockchains-by-building-one-117428612f46) 作者：Daniel van Flymen，2017 年 9 月，[（来源）](https://github.com/dvf/blockchain) ——学习区块链工作原理的最快方法是构建一个  
Jack Schultz 撰写的《构建你自己的区块链（使用 Python 3）》系列，[（来源）](https://github.com/jackschultz/jbc)

* [第 1 部分：创建、存储、同步、显示、挖掘和证明工作](https://bigishdata.com/2017/10/17/write-your-own-blockchain-part-1-creating-storing-syncing-displaying-mining-and-proving-work/)，2017 年 10 月  
* [第二部分：同步来自不同节点的链](https://bigishdata.com/2017/10/27/build-your-own-blockchain-part-2-syncing-chains-from-different-nodes/)，2017 年 10 月  
* [第 3 部分：编写可挖矿和交流的节点](https://bigishdata.com/2017/11/02/build-your-own-blockchain-part-3-writing-nodes-that-mine/)，2017 年 11 月

[Adil Moujahid 撰写的《使用 Python 进行区块链实用介绍》](http://adilmoujahid.com/posts/2018/03/intro-blockchain-bitcoin-python/) ，2018 年 3 月，[（来源）](https://github.com/adilmoujahid/blockchain-python-tutorial)

### **红宝石**

[比特币如何迫使拜占庭将军达成共识？](http://www.akitaonrails.com/2017/11/01/how-does-bitcoin-force-consensus-among-byzantine-generals)作者：Fabio Akita，2017 年 11 月  
[blockchain-lite \- 使用加密哈希构建自己的区块链；用区块链、区块链、区块链一次一个区块彻底改变世界！](https://planetruby.github.io/calendar/advent2017/01-blockchain-lite)作者：Gerald Bauer，Ruby Advent Calendar 2017 / 第 1 天，2017 年 12 月  
[merkletree 库 \- 构建您自己的加密哈希树；在树上种植您自己的钱，](https://planetruby.github.io/calendar/advent2017/19-merkletree.html)作者：Gerald Bauer，Ruby Advent Calendar 2017 / 第 19 天，2017 年 12 月  
[centralbank 命令行工具（和库） \- 打印您自己的货币/加密货币；通过 HTTP 在区块链上点对点运行您自己的联邦中央银行节点，](https://planetruby.github.io/calendar/advent2017/24-centralbank.html)作者：Gerald Bauer，Ruby Advent Calendar 2017 / 第 24 天，2017 年 12 月  
[从零开始构建区块链和加密货币的指南](https://antoinefink.com/building-a-blockchain-and-cryptocurrency-in-ruby) [（来源）](https://github.com/antoinefink/melon)作者：Antoine Fink，2021 年 4 月

### **水晶**

[使用 Bradford Lamson-Scribner 于 2018 年 5 月撰写的 Crystal 编写自己的区块链和工作量证明 (PoW) 算法](https://medium.com/@bradford_hamilton/write-your-own-blockchain-and-pow-algorithm-using-crystal-d53d5d9d0c52)， [（来源）](https://github.com/bradford-hamilton/crystal-blockchain)

### **JavaScript**

[用 JavaScript 编写微型区块链，](https://www.savjee.be/2017/07/Writing-tiny-blockchain-in-JavaScript/) 作者 Xavier Decuyper，2017 年 7 月  
[Node.js 区块链实现：BrewChain：Chain+WebSockets+HTTP 服务器，](http://www.darrenbeck.co.uk/blockchain/nodejs/nodejscrypto/)作者 Darren Beck，2017 年 11 月，[（来源）](https://github.com/dbbddb/BrewChain) ——保护制茶账本免受不道德同事的侵害  
[使用 Javascript 构建自己的区块链/区块链可视化，](https://github.com/nambrot/blockchain-in-js)作者：Nam Chu Hoai，2018 年 1 月

### **TypeScript**

Naivecoin： Lauri Hartikka 撰写的[加密货币构建教程](https://lhartikk.github.io/)[， （来源）](https://github.com/lhartikk/naivecoin)

### **Java**

[使用 Java 创建您的第一个区块链，第 1 部分，](https://medium.com/programmers-blockchain/create-simple-blockchain-java-tutorial-from-scratch-6eeed3cb03fa)作者 Kass，2017 年 12 月，[（来源）](https://github.com/CryptoKass/NoobChain-Tutorial-Part-1)

### **科特林**

[让我们用 Kotlin 实现一种加密货币，](https://medium.com/@vasilyf/lets-implement-a-cryptocurrency-in-kotlin-part-1-blockchain-8704069f8580)作者：Vasily Fomin，2018 年 7 月， [（来源）](https://github.com/VasilyFomin/kCoin)

### **SQL**

[本杰明·坎贝尔 (Benjamin Campbell) 撰写的 SQL Server 区块链示例](https://medium.com/@benjaminsky/blockchain-by-example-in-sql-server-8376b410128)，2017 年 12 月，[（来源）](https://github.com/benjaminsky/BlockchainMessenger)

### **锈**

Jacob Lindahl在 GeekLaunch 撰写的《使用 Rust 构建区块链》系列文章[（来源）](https://github.com/GeekLaunch/blockchain-rust)，[（PDF 格式的幻灯片）](https://github.com/GeekLaunch/slides)

* [第 1 部分：区块和哈希](https://medium.com/geeklaunch/blockchain-in-rust-01-blocks-hashing-4192f2265d3d)，2019 年 1 月  
* [第 2 部分：采矿](https://medium.com/geeklaunch/blockchain-in-rust-02-mining-companion-guide-9106b7a7696d)，2019 年 1 月  
* [第 3 部分：链条和检查](https://medium.com/geeklaunch/blockchain-in-rust-03-chains-checks-companion-guide-2714e1a76654)，2019 年 1 月

### **去**

Ivan Kuznetsov 撰写的《用围棋构建区块链》系列文章[（来源）](https://github.com/Jeiwan/blockchain_go)

* [第 1 部分：基本原型](https://jeiwan.cc/posts/building-blockchain-in-go-part-1/)，2017 年 8 月  
* [第 2 部分：工作量证明](https://jeiwan.cc/posts/building-blockchain-in-go-part-2/)，2017 年 8 月  
* [第 3 部分：持久性和 CLI](https://jeiwan.cc/posts/building-blockchain-in-go-part-3/)，2017 年 8 月  
* [第 4 部分：交易 1](https://jeiwan.cc/posts/building-blockchain-in-go-part-4/)，2017 年 9 月  
* [第 5 部分：](https://jeiwan.cc/posts/building-blockchain-in-go-part-5/) 2017 年 9 月  
* [第 6 部分：交易 2](https://jeiwan.cc/posts/building-blockchain-in-go-part-6/)，2017 年 9 月  
* [第 7 部分：网络](https://jeiwan.cc/posts/building-blockchain-in-go-part-7/)，2017 年 10 月

Coral Health 的 Go 区块链系列[（来源）](https://github.com/mycoralhealth/blockchain-tutorial)

* [使用不到 200 行 Go 语言编写自己的区块链！](https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc)作者：Coral Health，2018 年 1 月  
* [第 2 部分：网络 — 使用不到 200 行 Go 语言编写自己的区块链！](https://medium.com/@mycoralhealth/part-2-networking-code-your-own-blockchain-in-less-than-200-lines-of-go-17fe1dad46e1)作者：Coral Health，2018 年 2 月  
* [使用 Go 编写自己的区块链挖掘算法！](https://medium.com/@mycoralhealth/code-your-own-blockchain-mining-algorithm-in-go-82c6a71aba1f)作者：Coral Health，2018 年 3 月

### **谈话笔记**

* [区块链！区块链！区块链！——从零开始用 JavaScript 构建你自己的区块链（Scratch）](https://github.com/geraldb/talks/blob/master/blockchain.md)作者：Gerald Bauer，Vienna.js，2017 年 9 月  
* [区块链！区块链！区块链！——从零开始用 Ruby 构建自己的区块链（Scratch）](https://github.com/geraldb/talks/blob/master/blockchain_ruby.md)作者：Gerald Bauer，Vienna.rb，2017 年 12 月  
* [区块链与（超级）账本 \- 超级）账本精简版内部 \- 每次添加一个区块的交易并平衡账户（账簿）](https://github.com/geraldb/talks/blob/master/hyperledger.md)作者：Gerald Bauer，Hyperledger Vienna，2018 年 3 月  
* [区块链！区块链！区块链！——用 Go 从零开始构建你自己的区块链（Scratch）](https://github.com/geraldb/talks/blob/master/blockchain_go.md)作者：Gerald Bauer，Vienna.go，2018 年 4 月

### **更多的**

请参阅[构建您自己的区块链/加密货币](https://github.com/danistefanovic/build-your-own-x#build-your-own-blockchain--cryptocurrency)@构建您自己的（在此处插入技术）

### **示例**

#### **从头开始的区块链 \- Ruby 版本**

class Block

  attr\_reader :timestamp  
  attr\_reader :data  
  attr\_reader :previous\_hash  
  attr\_reader :hash

  def initialize(data, previous\_hash)  
    @timestamp     \= Time.now  
    @data          \= data  
    @previous\_hash \= previous\_hash  
    @hash          \= calc\_hash  
  end

  def self.first( data="Genesis" )    \# create genesis (big bang\! first) block  
    \#\# note: uses all zero for previous\_hash ("0")  
    Block.new( data, "0000000000000000000000000000000000000000000000000000000000000000" )  
  end

  def self.next( previous, data="Transaction Data..." )  
    Block.new( data, previous.hash )  
  end

private

  def calc\_hash  
    sha \= Digest::SHA256.new  
    sha.update( @timestamp.to\_s \+ @previous\_hash \+ @data )  
    sha.hexdigest  
  end

end  \# class Block

\#\#\#\#\#  
\#\# let's get started  
\#\#   build a blockchain a block at a time

b0 \= Block.first( "Genesis" )  
b1 \= Block.next( b0, "Transaction Data..." )  
b2 \= Block.next( b1, "Transaction Data......" )  
b3 \= Block.next( b2, "More Transaction Data..." )

blockchain \= \[b0, b1, b2, b3\]

pp blockchain  
（来源：[`blockchain.rb`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.rb/blockchain.rb)）  
将漂亮地打印（pp）如下：  
\[\#\<Block:0x1eed2a0  
  @timestamp     \= 1637-09-15 20:52:38,  
  @data          \= "Genesis",  
  @previous\_hash \= "0000000000000000000000000000000000000000000000000000000000000000",  
  @hash          \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b"\>,  
 \#\<Block:0x1eec9a0  
  @timestamp     \= 1637-09-15 21:02:38,  
  @data          \= "Transaction Data...",  
  @previous\_hash \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b",  
  @hash          \= "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743"\>,  
 \#\<Block:0x1eec838  
  @timestamp     \= 1637-09-15 21:12:38,  
  @data          \= "Transaction Data......",  
  @previous\_hash \= "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743",  
  @hash          \= "be50017ee4bbcb33844b3dc2b7c4e476d46569b5df5762d14ceba9355f0a85f4"\>,  
 \#\<Block:0x1eec6d0  
  @timestamp     \= 1637-09-15 21:22:38,  
  @data          \= "More Transaction Data...",  
  @previous\_hash \= "be50017ee4bbcb33844b3dc2b7c4e476d46569b5df5762d14ceba9355f0a85f4",  
  @hash          \= "5ee2981606328abfe0c3b1171440f0df746c1e1f8b3b56c351727f7da7ae5d8d"\>\]

[来自reddit ruby​​ 帖子](https://www.reddit.com/r/ruby/comments/70c30f/build_your_own_blockchain_in_20_lines_of_ruby/)的评论：  
等等，那么区块链只是一个链表吗？  
否。链接列表只需要引用前一个元素，块必须具有一个依赖于前一个块标识符的标识符，这意味着您无法替换一个块，除非重新计算后面的每个块。在此实现中，上一个摘要被输入到 calc\_hash 方法中。  
工作量证明/浪费又如何呢？  
让我们在区块链中添加工​​作量/浪费证明。在经典区块链中，您必须计算以前导零（`00`）开头的块哈希。前导零越多，计算越困难（越困难）。让我们使用两个前导零（）来简化计算`00`，即 16^2 \= 256 种可能性（^1,2）。三个前导零（`000`）将是 16^3 \= 4\_096 种可能性，四个零（`0000`）将是 16^4 \= 65\_536，依此类推。  
(^1)：有 16 种可能性，因为它是十六进制或十六进制数，或者说是基数 16，即`0` `1` `2` `3` `4` `6` `7` `8` `9` `a`(10) `b`(11) `c`(12) `d`(13) `e`(14) `f`(15)。  
(^2)：随机安全哈希算法平均需要 256 次尝试（例如，可能是 305 次尝试，因为它不是可能性的完美统计分布）。  
例子：  
def compute\_hash\_with\_proof\_of\_work( difficulty="00" )  
  nonce \= 0  
  loop do  
    hash \= calc\_hash\_with\_nonce( nonce )  
    if hash.start\_with?( difficulty )  
      return \[nonce,hash\]     \#\# bingo\! proof of work if hash starts with leading zeros (00)  
    else  
      nonce \+= 1              \#\# keep trying (and trying and trying)  
    end  
  end  
end

def calc\_hash\_with\_nonce( nonce=0 )  
  sha \= Digest::SHA256.new  
  sha.update( nonce.to\_s \+ @timestamp.to\_s \+ @previous\_hash \+ @data )  
  sha.hexdigest  
end  
（来源：[`blockchain_with_proof_of_work.rb`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.rb/blockchain_with_proof_of_work.rb)）  
让我们重新运行添加了工作量证明机制的示例。现在示例将漂亮地打印 (pp) 如下内容：  
\[\#\<Block:0x1e204f0  
  @timestamp     \= 1637-09-20 20:13:38,  
  @data          \= "Genesis",  
  @previous\_hash \= "0000000000000000000000000000000000000000000000000000000000000000",  
  @nonce         \= 242,  
  @hash          \= "00b8e77e27378f9aa0afbcea3a2882bb62f6663771dee053364beb1887e18bcf"\>,  
 \#\<Block:0x1e56e20  
  @timestamp     \= 1637-09-20 20:23:38,  
  @data          \= "Transaction Data...",  
  @previous\_hash \= "00b8e77e27378f9aa0afbcea3a2882bb62f6663771dee053364beb1887e18bcf",  
  @nonce         \= 46,  
  @hash          \= "00aae8d2e9387e13c71b33f8cd205d336ac250d2828011f5970062912985a9af"\>,  
 \#\<Block:0x1e2bd58  
  @timestamp     \= 1637-09-20 20:33:38,  
  @data          \= "Transaction Data......",  
  @previous\_hash \= "00aae8d2e9387e13c71b33f8cd205d336ac250d2828011f5970062912985a9af",  
  @nonce         \= 350,  
  @hash          \= "00ea45e0f4683c3bec4364f349ee2b6816be0c9fd95cfd5ffcc6ed572c62f190"\>,  
 \#\<Block:0x1fa8338  
  @timestamp     \= 1637-09-20 20:43:38,  
  @data          \= "More Transaction Data...",  
  @previous\_hash \= "00ea45e0f4683c3bec4364f349ee2b6816be0c9fd95cfd5ffcc6ed572c62f190",  
  @nonce         \= 59,  
  @hash          \= "00436f0fca677652963e904ce4c624606a255946b921132d5b1f70f7d86c4ab8"\>\]

发现区别了吗？现在所有哈希值都以零开头 ( `00`)，而 nonce 是让它发生的随机“幸运数字”。这就是工作量证明背后的魔力。

##### **从头开始的区块链 \- JavaScript 版本**

class Block {

  constructor(data, previousHash) {  
    this.timestamp    \= new Date()  
    this.data         \= data  
    this.previousHash \= previousHash  
    this.hash         \= this.calcHash()  
  }

  calcHash() {  
    var sha \= SHA256.create()  
    sha.update( this.timestamp.toString() \+ this.previousHash \+ this.data )  
    return sha.hex()  
  }

  static first( data="Genesis" ) {    // create genesis (big bang\! first) block  
    // uses all-zero previousHash  
    return new Block( data, "0000000000000000000000000000000000000000000000000000000000000000" )  
  }

  static next( previous, data="Transaction Data..." ) {  
    return new Block( data, previous.hash )  
  }  
}

//////  
// let's get started  
//   build a blockchain a block at a time

b0 \= Block.first( "Genesis" )  
b1 \= Block.next( b0, "Transaction Data..." )  
b2 \= Block.next( b1, "Transaction Data......" )  
b3 \= Block.next( b2, "More Transaction Data..." )

blockchain \= \[b0, b1, b2, b3\]

console.log( blockchain )  
（来源：[`blockchain.js`](https://github.com/openblockchains/awesome-blockchains/blob/master/blockchain.js/blockchain.js)）  
将会记录如下内容：  
\[ Block {  
     timestamp    : 1637-09-18 08:25:54,  
     data         : 'Genesis',  
     previousHash : '0000000000000000000000000000000000000000000000000000000000000000',  
     hash         : 'c396de4c03ddb5275661982adc75ce5fc5905d2a2457d1266c74436c1f3c50f1' },  
   Block {  
     timestamp    : 1637-09-18 08:35:54,  
     data         : 'Transaction Data...',  
     previousHash : 'c396de4c03ddb5275661982adc75ce5fc5905d2a2457d1266c74436c1f3c50f1',  
     hash         : '493131e09c069645c82795c96e4715cea0f5558be514b5096d853a5b9899154a' },  
   Block {  
     timestamp    : 1637-09-18 08:45:54,  
     data         : 'Transaction Data......',  
     previousHash : '493131e09c069645c82795c96e4715cea0f5558be514b5096d853a5b9899154a',  
     hash         : '97aa3cb5052615d60ff8e6b41bef606562588c4874f011970ac2f218e2f0f4a8' },  
   Block {  
     timestamp    : 1637-09-18 08:55:54,  
     data         : 'More Transaction Data...',  
     previousHash : '97aa3cb5052615d60ff8e6b41bef606562588c4874f011970ac2f218e2f0f4a8',  
     hash         : 'e10e020f832e46c2b60e1c3c0412bd370b2fde5f0f782c16eb87d0313ea0d3a3' } \]

## **区块链文章**

[Rufus Pollock 撰写的《区块链思考](http://rufuspollock.com/2016/07/02/reflections-on-the-blockchain)》（开放知识基金会），2016 年 7 月 *——DAO：代码不是法律——这样想很危险 \++ 互联网改变了世界——区块链肯定也会改变？++ 淘金热还是互联网热？++ 比特币中的治理问题 \++ 无成本、无所有者网络的神话 \++ 历史教训*  
2016 年 1 月，Tony Arcieri 撰写的 [《论区块链单一文化的危险》](https://tonyarcieri.com/on-the-dangers-of-a-blockchain-monoculture) *——比特币区块链：世界上最糟糕的数据库 \++ 下一代协议 \++ 去中心化账本协议 \++ Bitcoin-NG \++ 区块链！区块链！区块链！++ 天空中巨大的去中心化数据库*  
[我不相信区块链，](https://www.tbray.org/ongoing/When/201x/2017/05/13/Not-Believing-in-Blockchain)作者：Tim Bray，2017 年 5 月  
[最小可行区块链，](https://www.igvita.com/2014/05/05/minimum-viable-block-chain/)作者：Ilya Grigorik，2014 年 5 月 \- *使用三重记账法保护交易 \++ 使用 PKI 保护交易 \++ 余额 \= Σ（收据） \++ 多方转账和验证 \++ 双重支付和分布式共识 \- 分布式共识网络的要求；保护网络免受 Sybil 攻击；以工作量证明作为参与要求 \++ 构建最小可行区块链 \- 添加“区块”和交易费激励；竞相索取交易费；解决链冲突；区块永远不是最终的 \++ （最小可行）区块链的属性*  
[区块链的类比和应用：区块链与 Git、Raft 和其他技术的比较。](https://www.oreilly.com/ideas/blockchains-by-analogies-and-applications) 作者：Kieren James-Lubin，2016 年 1 月 \- *区块链是数据库 \++ 理解交易 \++ 持久、复制数据库（相关技术：Git）++ 点对点网络（相关技术：BitTorrent）++ 分布式共识（相关技术：分布式数据库、Raft）++ 铸造新币（挖矿）++ 嵌入式身份（相关技术：TLS）++ 智能合约：如 SQL 表达式和触发器 \++ 我们能用区块链做什么？*

## **区块链书籍**

[50 英尺区块链的攻击：比特币、区块链、以太坊和智能合约](https://davidgerard.co.uk/blockchain/table-of-contents/)，David Gerard，伦敦，2017 年—— *什么是比特币？++ 比特币的意识形态 \++ 比特币的惊人前景！++ 早期比特币：第一次泡沫的兴起 \++ 比特币挖矿如何中心化 \++ 谁是中本聪？++ 2017 年比特币消费 \++ 2017 年比特币交易：第二次加密货币泡沫 \++ 山寨币 \++ 智能合约，愚蠢的人类 \++ 商业上的胡言乱语，但关于区块链 \++ 案例研究：为什么你不能将音乐产业放在区块链上*  
[精通比特币 \- 编写开放区块链](https://github.com/bitcoinbook/bitcoinbook/blob/second_edition/ch09.asciidoc)第 2 版，作者 Andreas M. Antonopoulos，2017 年 \- 免费（在线源版本）-- *什么是比特币？++ 比特币的工作原理 \++ 比特币核心：参考实现 \++ 密钥、地址 \++ 钱包 \++ 交易 \++ 高级交易和脚本 \++ 比特币网络 \++ 区块链 \++ 挖矿和共识 \++ 比特币安全 \++ 区块链应用程序*  
---

![][image4]  
注意：比特币是一个巨大的庞氏骗局¹。飞向月球！？新的金本位！？不要“投资”试图快速致富。为什么不呢？比特币代码已经过时了。烧掉吧，宝贝，烧掉吧！工作量证明/浪费是一场全球能源环境灾难，每笔比特币交易使用 300 千瓦时（！），约合 179 公斤二氧化碳排放量²。可编程货币（或价值互联网）适用于所有后代，使用（比特币）脚本，没有循环和跳转（goto），并且完全“无状态”！？哈哈。  
¹:（来源：[比特币极端主义者的最佳作品 \- 骗子、白痴、小丑、托儿和 BagHODLers \- 新加密庞氏经济学内幕](https://bitsblocks.github.io/bitcoin-maximalist)）  
²：假设每千瓦时排放 0.596 千克二氧化碳（这是德国的能源效率），那么每笔比特币交易约排放 179 千克二氧化碳（300 千瓦时 × 0.596 千克）。如需更多见解，请参阅[比特币能源消耗指数](https://digiconomist.net/bitcoin-energy-consumption)。  
---

[Jimmy Song 编写的从头开始编写比特币](https://github.com/jimmysong/programmingbitcoin)，2019 年 \- 免费（在线源版本）--[*第 6 章 \- 脚本*](https://github.com/jimmysong/programmingbitcoin/blob/master/ch06.asciidoc)*\- 脚本的工作原理 • 示例操作 • 解析脚本字段 • 组合脚本字段 • 标准脚本 • p2pk • p2pk 的问题 • 解决 p2pkh 的问题 • 脚本可以任意构造 • 结论 \++* [*第 8 章 \- 支付到脚本哈希*](https://github.com/jimmysong/programmingbitcoin/blob/master/ch08.asciidoc)*\- 裸多重签名 • 编码 OP\_CHECKMULTISIG • 裸多重签名的问题 • 支付到脚本哈希 (p2sh) • 编码 p2sh • 结论 \++* [*第 13 章 \- 隔离见证*](https://github.com/jimmysong/programmingbitcoin/blob/master/ch13.asciidoc)*\- 支付到见证公钥哈希 (p2wpkh) • p2wpkh 交易 • p2sh-p2wpkh • 编码 p2wpkh 和 p2sh-p2wpkh • 支付到见证脚本哈希（p2wsh）• p2sh-p2wsh • 编码 p2wsh 和 p2sh-p2wsh • 其他改进 • 结论*  
[逐步编写比特币脚本交易（加密）合约（测试版 / 草稿），](https://github.com/openblockchains/programming-bitcoin-script) 作者：Gerald Bauer 等人，2019 年 \- 免费（在线版） \- *让我们从零开始构建您自己的比特币堆栈机，然后运行您自己的比特币操作（操作）...*  
[从头开始使用 Ruby 编写区块链程序，逐步从加密哈希开始……（测试版/草稿）](https://github.com/yukimotopress/programming-blockchains-step-by-step) 作者：Gerald Bauer 等人，2018 年 \- 免费（在线版本）- *（加密）哈希++（加密）区块++（加密）具有工作量证明的区块++区块链！区块链！区块链！++区块链损坏？++时间戳++挖矿，挖矿，挖矿 \- 您的哈希率是多少？++比特币，比特币，比特币++（加密）带有交易（Tx）的区块*  
[精通以太坊 \- 在区块链上构建合约服务和去中心化应用](https://github.com/ethereumbook/ethereumbook)\- 作者：Andreas M. Antonopoulos、Gavin Wood，2018 年 \- 免费（在线源版本） *什么是以太坊 \++ 简介 \++ 以太坊客户端 \++ 以太坊测试网 \++ 密钥和地址 \++ 钱包 \++ 交易 \++ 合约服务 \++ 代币 \++ 预言机 \++ 会计和 Gas \++ EVM（以太坊虚拟机） \++ 共识 \++ DevP2P（点对点）协议 \++ 开发工具和框架 \++ 去中心化应用 \++ 以太坊标准 (EIPs/ERCs)*  
[Roberto Infante 于 2018 年撰写的《在以太坊区块链上构建去中心化应用程序](https://www.manning.com/books/building-ethereum-dapps)》 ——免费第 1 章 \- *了解去中心化应用程序 \++ 以太坊区块链 \++ 在（类似 JavaScript）Solidity 中构建合约服务 \++ 在以太坊区块链上运行合约服务 \++ 使用 Truffle 开发以太坊去中心化应用程序 \++ 最佳设计和安全实践*  
[编程加密区块链合约分步书/指南（测试版/草稿）](https://github.com/openblockchains/programming-cryptocontracts)作者：Gerald Bauer 等人，2019 年 \- 免费（在线版本）—— *让我们从庞氏骗局和金字塔骗局开始。在区块链世界计算机上运行您自己的彩票、赌场等……*  
[使用 Ruby 编写加密货币和区块链（测试版 / 草稿）](http://yukimotopress.github.io/blockchains) ，作者：Gerald Bauer 等人，2018 年 \- 免费（在线版本）@Yuki & Moto Press 书架 \- *数字 $$$ 炼金术 \- 什么是区块链？ \- 如何将数字位转换为 $$$ 或 €€€？• 分散支付。分散交易。分散区块链。• 布丁​​的证明是......比特币 (BTC) 区块链++ 从头开始​​构建区块链 \- 20 行 Ruby 区块链！区块链是一种数据结构 • 那工作量证明呢？那共识呢？• 找到幸运数字 \- Nonce \== 使用过一次的数字 \++ 添加交易 \- 世界上最糟糕的数据库 \- 比特币区块链挖矿 • 区块链上的郁金香！添加交易 \++ Blockchain Lite \- 基本区块 • 工作量证明区块 • 交易 \++ Merkle Tree \- 构建您自己的加密哈希树；在树上种植自己的钱 • 什么是 Merkle 树？ • 交易 \++ 中央银行 \- 在区块链上运行您自己的联邦中央银行节点 通过 HTTP 进行点对点连接 • 内部挖矿 \- 在区块链上打印加密货币、加密货币、加密货币 \++ 超棒的加密货币 \++ 案例研究 \- 荷兰盾 • 先令 • CryptoKitties（和 CryptoCopycats）*  
[区块链入门指南，IBM 限量版](https://www.ibm.com/blockchain/what-is-blockchain.html)，Manav Gupta 著，2017 年 \- 免费（通过电子邮件进行数字下载）- *掌握区块链基础知识 \++ 了解区块链的工作原理 \++ 利用区块链推动业务发展 \++ 区块链实际应用：用例 \++ Hyperledger，Linux 基金会项目 \++ 开发首个区块链应用程序的十个步骤*  
[快速致富“商业区块链”圣经 \- 免费轻松赚钱的秘密](https://github.com/bitsblocks/get-rich-quick-bible)，2018 \- 免费 \- *步骤 1：卖空。怎么做？++ 步骤 2：提升你的代币。怎么做？++ 步骤 3：改变世界。怎么做？*  
[比特币极端主义者精选 \- 骗子、白痴、小丑、托儿和 BagHODLers \- 新加密货币庞氏经济学内幕，](https://github.com/bitsblocks/bitcoin-maximalist)作者 Trolly McTrollface 等人，2018 年 \- 免费  
[加密货币事实 \- 去中心化支付 \- 高效、低成本、公平、干净 \- 真还是假？](https://github.com/bitsblocks/crypto-facts)作者：Nouriel Roubini、David Gerard 等人，2018 年 \- 免费  
[加密货币是所有骗局和（现已破灭的）泡沫之母 \- 虽然区块链是有史以来最被过度炒作的技术，但它并不比电子表格/数据库更好](https://github.com/bitsblocks/crypto-bubbles)作者：Nouriel Roubini，2018 年 \- 免费  
[IslandCoin 白皮书 \- 纸笔现金系统 \- 如何在荒岛上运行区块链（](https://github.com/bitsblocks/islandcoin-whitepaper) 作者：Tal Kol）-- *动机 \++ 共识 \++ 交易和区块规范 \- 交易格式 • 区块格式 • 创世区块 \++ 参考资料*

## **区块链（精简版）加密哈希库**

[Ruby](https://github.com/openblockchains/awesome-blockchains#ruby) • [JavaScript](https://github.com/openblockchains/awesome-blockchains#javascript)

### **红宝石**

blockchain.lite (github: [openblockchains/blockchain.lite.rb](https://github.com/openblockchains/blockchain.lite.rb)，gem: [blockchain-lite](https://rubygems.org/gems/blockchain-lite) ) \- 使用加密哈希构建自己的区块链 \- 使用区块链、区块链、区块链一次一个区块彻底改变世界  
require 'blockchain-lite'

b0 \= Block.first( "Genesis" )  
b1 \= Block.next( b0, "Transaction Data..." )  
b2 \= Block.next( b1, "Transaction Data......" )  
b3 \= Block.next( b2, "More Transaction Data..." )

blockchain \= \[b0, b1, b2, b3\]

pp blockchain  
将漂亮地打印（pp）如下：  
\[\#\<Block:0x1eed2a0  
  @timestamp     \= 1637-09-15 20:52:38,  
  @data          \= "Genesis",  
  @previous\_hash \= "0000000000000000000000000000000000000000000000000000000000000000",  
  @hash          \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b"\>,  
 \#\<Block:0x1eec9a0  
  @timestamp     \= 1637-09-15 21:02:38,  
  @data          \= "Transaction Data...",  
  @hash          \= "eb8ecbf6d5870763ae246e37539d82e37052cb32f88bb8c59971f9978e437743",  
  @previous\_hash \= "edbd4e11e69bc399a9ccd8faaea44fb27410fe8e3023bb9462450a0a9c4caa1b"\>,  
  ...

### **JavaScript**

blockchain.lite (github: [openblockchains/blockchain.lite.js](https://github.com/openblockchains/blockchain.lite.js) , npm: [blockchain-lite](https://www.npmjs.com/package/blockchain-lite) ) \- 使用加密哈希构建自己的区块链 \- 使用区块链、区块链、区块链一次一个区块彻底改变世界  
const Blocks \= require( "blockchain-lite" )

// use basic block  
let Block \= Blocks.basic

let b0 \= Block.first( 'Genesis' )  
let b1 \= Block.next( b0, 'Transaction Data...' )  
let b2 \= Block.next( b1, 'Transaction Data......' )  
let b3 \= Block.next( b2, 'More Transaction Data...' )

let blockchain \= \[b0, b1, b2, b3\]

console.log( blockchain )  
将会记录如下内容：  
\[ Block {  
    timestamp:     2017-09-25 17:03:38,  
    data:         'Genesis',  
    previousHash: '0000000000000000000000000000000000000000000000000000000000000000',  
    hash:         '08f4fa71628c5bc6b430228738bc8c41afaf508ece0b1cf9c9cac53d02e11829' },  
  Block {  
    timestamp:     2017-09-25 17:13:38,  
    data:         'Transaction Data...',  
    previousHash: '08f4fa71628c5bc6b430228738bc8c41afaf508ece0b1cf9c9cac53d02e11829',  
    hash:         '740a4aeb3441484c96d1e7f63d31b716220ccee3b6fe94547cae2afbb6010626' },  
  Block {  
    timestamp:     2017-09-25 17:23:38,  
    data:         'Transaction Data......',  
    previousHash: '740a4aeb3441484c96d1e7f63d31b716220ccee3b6fe94547cae2afbb6010626',  
    hash:         '28b6892a069e2ff7f1c3128ab495d7cd9b9b1636a51a7f69db93a14b1ee6b1a7' },  
  Block {  
    timestamp:     2017-09-25 17:33:38,  
    data:         'More Transaction Data...',  
    previousHash: '28b6892a069e2ff7f1c3128ab495d7cd9b9b1636a51a7f69db93a14b1ee6b1a7',  
    hash:         '4cc0329b2c0cb32e0451fa3179bd944d4cd0fcf410939172f979e9fd2aa9f5f3' } \]

## **Git，Git，Git——带有加密哈希的愚蠢内容跟踪器**

*一切都是本地的。分布式是新的集中式。*  
*![][image5]*

### **引言 \- 区块链和 Git**

是的，这是个笑话。没人能向我解释“区块链”这个流行词与“git repo”有何不同。—— [Yaakov](https://twitter.com/yaakov_h/status/902659507255312384)  
但如果你说“让我们建立一种货币，所有交易都存储在 git repo 中”，那么你甚至在 24 小时内都不会被认真对待。—— [Yaakov](https://twitter.com/yaakov_h/status/902659847224664064)  
很快解释 git 就像“git repo 就像一个区块链，但有提交而不是区块”。—— [Nicolás Berger](https://twitter.com/nicoberger/status/901776907418697729)  
“本地分支就像一个状态通道。它可以随时被推送并合并到主区块链中。”—— [Nicolás Berger](https://twitter.com/nicoberger/status/901777571456614400)  
\#区块链改变了世界。我在这里提出的观点是，\#区块链就像\#git。——[杰克逊·凯利](https://twitter.com/sjkelleyjr/status/901464041163341824)  
`git merge [-m REF] [-g BLOB] --push` 合并并将所有签名的提交推送到区块链。—— [Git 命令](https://twitter.com/git_commands/status/935574015015612416)

### **图书**

[学习足够的 Git 来应对危险，](https://learnenough.com/git-tutorial)作者：Michael Hartl \- 免费（在线版本）-- *入门 \++ 备份和共享 \++ 中级工作流程 \++ 协作 \++ 结论 \++ 高级设置*  
[Pro Git，](https://git-scm.com/book)作者：Scott Chacon 和 Ben Straub，第 2 版，2014 年 \- 免费（在线版本）-- *入门 \++ Git 基础知识 \++ Git 分支 \++ 服务器上的 Git \++ 分布式 Git \++ GitHub \++ Git 工具 \++ 自定义 Git \++ Git 和其他系统 \++ Git 内部原理 \++ A1：其他环境中的 Git \++ A2：将 Git 嵌入到您的应用程序中 \++ A3：Git 命令*  
一旦你理解了分支是映射希尔伯特空间子流形的同胚内函子这一基本思想，Git 就会变得更容易。——匿名

### **在 Git 上打开分布式数据库**

[football.db——](https://github.com/openfootball)开放公共领域足球数据集（包括俱乐部、国家队、联赛、比赛日程等）  
[world.db](https://github.com/openmundi) \- 开放公共领域世界（国家）数据集  
[beer.db](https://github.com/openbeer) \- 开放公共领域啤酒和酿酒厂数据集  
在 \#git 上的 \#blockchain 中添加啤酒交易，赢取免费的维也纳啤酒！干杯。干杯。—— [Gerald Bauer @ Austria Codes](https://twitter.com/austriacodes/status/907240018435088384)

### **在 Git 上打开分布式（超级）账本**

[先令（或 Schilling）](https://github.com/bitshilling/bitshilling) ——区块链上的先令！——奥地利坚如磐石的阿尔卑斯银元  
[郁金香](https://github.com/openblockchains/awesome-blockchains/blob/master/TULIPS.md)\- 区块链上的郁金香！ \- 通过现实世界的例子学习（Anno 1637） \- 买！卖！持有！享受海军上将、永远的奥古斯都等的美丽

## **经典郁金香狂热**

*荷兰黄金时代的一个时期，新引进的郁金香球茎的合同价格达到了异常高的水平，然后在 1637 年 2 月急剧暴跌。*  
*![][image6]*

### **引言 \- 区块链是下一个互联网 / 郁金香**

将数字代币与郁金香进行比较的人本质上是在说数字代币是一种仅由纯粹的炒作和投机支撑的泡沫。  
他们没有意识到的是，郁金香来自泥土，而不是区块链。  
众所周知，区块链可能是自互联网以来最伟大的技术创新。它将对全球商业和整个社会产生巨大影响。—— [TulipToken](http://tuliptoken.com/)

### **图书**

郁金香狂热：世界上最令人垂涎​​的花朵及其所激起的非凡激情的故事，作者：迈克·达什，2001 年—— *郁金香狂热 \++ 天山山谷 \++ 极乐居所 \++ 东方陌生人 \++ 克鲁修斯 \++ 莱顿 \++ 乳沟装饰 \++ 镜中郁金香 \++ 花店 \++ 繁荣 \++ 金葡萄的标志 \++ 沃特·温克尔的孤儿 \++ 半身像 \++ 妓女女神 \++ 郁金香之王的宫廷 \++ 晚开*  
郁金香狂热：荷兰黄金时代的金钱、荣誉和知识，作者：安妮·戈德加，2007 年—— *《奇怪的事情》++《艺术与鲜花》++《鲜花》++《悲伤的金钱》++《恶意》++《卷心菜热》++《词汇表》++《关于金钱的注释》*  
*![][image7]*

## **突发新闻：CryptoKitties（是的，可爱的小卡通猫）出现在区块链上！**

可收藏。可繁殖。可爱。  
收集和饲养数字猫。开始喵喵叫。买！卖！持有！  
了解更多信息@ [cryptokitties.co](https://cryptokitties.co/)  
![][image8]  
最新（也是最棒的）投资机会！  
区块链释放了数字稀缺性的魔力，并将其与使数字商品持久的力量相结合，赋予了它们潜在的价值，而这种价值仅取决于富人对该物品所有权的声望。  
——[贾斯汀·](https://twitter.com/tokenizedcap/status/938460753589424128)普瓦里尔  
我圣诞节想要的只是一只 CryptoKitty。  
——[凯拉·威廉姆斯](https://twitter.com/kaylaw/status/938590748655550464)  
我发烧了。唯一的办法就是多买些 CryptoKitties。  
——[爱德华多·萨拉查](https://twitter.com/ceduardosalazar/status/938558630663634944)  
我的第七代 CryptoKitty \#104375。未来属于喵喵。  
\--[安舒尔·达万](https://twitter.com/TheAnshulDhawan/status/938551642202324993)  
![][image9]

* 绝妙的波斯史波克沙鼠金棉花糖 \- 极其罕见的第五代 Swift Virgin | 2.9 ETH  
* 稀有度：0.00264% 第 5 代 JAGUAR FABULOUS GOLD DALI！！处女！  
* 稀有度：0.0015% 泡泡糖公主现已发售！第 12 代 | Brisk | Virgin | Chartreux | Bubblegum | Otaku | Emeraldgreen | Saycheese | Mauveover | Spock \- 开始 ETH 20/结束 ETH 10  
* 金币，Gen 5，Virgin，Swift。非常便宜  
* 便宜的 1 代可爱小猫，带有稀有基因！仅需 0.125 ETH  
* 独特 Virgin Peach Googly Gold Mauveover gen:2 冷却时间：1 0.87992% 稀有  
* 超级便宜：沙鼠、布娃娃、猩红色、栗色、棉花糖！！！0.02 ETH（约 14 美元）  
* 我正在免费赠送第一代 FAST Gold......

\-- [CrypoKittiesMarket](https://www.reddit.com/r/CryptoKittiesMarket)

### **很棒的 CryptoKitties (和 CryptoCopycats)**

**![][image10]**  
关于区块链上的 Awesome CryptoKitties（是的，可爱的小卡通猫）的集合！和 CryptoCopycats \- 数字收藏品，在分布式公共数据库中使用加密哈希进行保护。CryptoPuppies 是新的 CryptoKitties 吗？通过现实世界中的例子来学习（Anno 2017） \- 买！卖！持有！  
更多 @ [163035.com](https://github.com/cryptocopycats/awesome-cryptokitties)  
![][image11]

## **活动、聚会、组织**

*一次改变一个国家，改变世界。全世界的区块链人，团结起来！*

* [奥地利区块链 • Blockkette Österreich——](https://github.com/austriacodes/blockchain-austria)奥地利（中欧）区块链聚会和组织的分布式集中页面

## **太棒了**

*精选的精彩清单。*

* [区块链资料](https://github.com/Xel/Blockchain-stuff)——区块链和通用加密货币资源的精选列表  
* [区块链路线图](https://roadmap.sh/blockchain)——成为区块链程序员的分步路线图/指南  
* [Igor Barinov 等人撰写的《Awesome Blockchain》](https://github.com/igorbarinov/awesome-blockchain) ——比特币区块链服务精选列表  
* [Tim Reznich 等人撰写的Awesome Blockchain](https://github.com/imbaniac/awesome-blockchain) \- 精选的区块链服务和交易所列表  
* et al的[Awesome Blockchain——](https://github.com/istinspring/awesome-blockchain)`istinspring`基于区块链技术的优秀项目和服务的精选列表  
* [Kenneth Reitz 等人撰写的《Awesome Coins》](https://github.com/kennethreitz/awesome-coins) ——加密货币及其算法指南  
* [Gerald Bauer 等人撰写的《Awesome CryptoKitties (and CryptoCopycats)》](https://github.com/openblockchains/awesome-cryptokitties) ——关于出色的加密猫和模仿者的精选列表  
* [Dick Tang 等人撰写的Awesome Git](https://github.com/dictcp/awesome-git) — 精选的令人惊叹的 Git 工具、资源和闪亮事物列表  
* [Sindre Sorhus 等人撰写的Awesome 列表](https://github.com/sindresorhus/awesome)——精选的精彩列表

## **元**

执照

精彩列表专用于公共领域。您可以随意使用它，没有任何限制。  


[image1]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/libra-shrugged.png

[image2]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/blockchain-jesus.png

[image3]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/fake-dilbert-blockchain.png

[image4]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/trolly-ponzi.png

[image5]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/xkcd1597.png

[image6]:https://github.com/openblockchains/awesome-blockchains/blob/master/i/tulipmania-ii.png

[image7]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/tulipmania.png

[image8]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/cryptokitties-top10-sales.png

[image9]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/cryptokitties-genes01.png

[image10]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/cryptokitties-modernart-paintings.png

[image11]:https://github.com/openblockchains/awesome-blockchains/raw/master/i/cryptokitties-modernart-paintings-iii.png
