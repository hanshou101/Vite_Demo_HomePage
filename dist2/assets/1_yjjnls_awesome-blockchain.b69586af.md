https://github.com/yjjnls/awesome-blockchain

# **很棒的区块链**

**惊人的**  
区块链开发和应用的资源精选列表。  
区块链是一种不可篡改的经济交易数字账本，经过编程，不仅可以记录金融交易，还可以记录几乎所有有价值的东西（作者：[唐·泰普斯科特](https://www.linkedin.com/pulse/whats-next-generation-internet-surprise-its-all-don-tapscott)）。  
这不是简单的互联网资源集合，而是经过验证和组织的数据，确保它真正适合您的学习过程并对您的开发和应用有用。

## **内容**

点击展开

*   
  *   
  *   
    *   
    *   
      *   
      *   
      *   
    *   
    *   
    *   
  *   
    *   
    *   
    *   
    *   
      *   
      *   
    *   
    *   
    *   
    *   
      *   
        *   
        *   
        *   
      *   
      *   
      *   
      *   
    *   
  * 

## **常见问题 (FAQ) 和答案**

问：什么是区块链？  
答：区块链是一种分布式数据库，其中包含一系列记录（即区块）（即链），这些记录由数字指纹（即加密哈希）链接和保护。示例来自[`genesis_block.json`](https://github.com/yjjnls/awesome-blockchain/tree/master/src/js/genesis_block.json)：  
{  
    "version": 0,  
    "height": 1,  
    "previous\_hash": null,  
    "timestamp": 1550049140488,  
    "merkle\_hash": null,  
    "generator\_publickey": "18941c80a77f2150107cdde99486ba672b5279ddd469eeefed308540fbd46983",  
    "hash": "d611edb9fd86ee234cdc08d9bf382330d6ccc721cd5e59cf2a01b0a2a8decfff",  
    "block\_signature": "603b61b14348fb7eb087fe3267e28abacadf3932f0e33958fb016ab60f825e3124bfe6c7198d38f8c91b0a3b1f928919190680e44fbe7289a4202039ffbb2109",  
    "consensus\_data": {},  
    "transactions": \[\]  
}  
![][image1]  
问：什么是哈希？什么是（单向）加密（图形）哈希摘要校验和？  
答：哈希值`d611edb9fd86ee234cdc08d9bf382330d6ccc721cd5e59cf2a01b0a2a8decfff` 是使用单向加密（图形）哈希摘要校验和函数（例如 SHA256（256 位安全哈希算法））从数据中计算出的小型摘要校验和。示例来自[`crypto.js`](https://github.com/yjjnls/awesome-blockchain/blob/master/src/js/crypto.js)：  
function calc\_hash(data) {  
    return crypto.createHash('sha256').update(data).digest('hex');  
}  
区块链使用

* 区块头（例如`Version`、`TimeStamp`、`Previous Hash...`）和  
* 区块数据（例如`Transaction Data...`）

计算新的哈希摘要校验和。  
问：什么是 Merkle 树？  
答：Merkle 树是一种哈希树，以 Ralph Merkle 的名字命名，他于 1979 年为该概念申请了专利（专利于 2002 年到期）。哈希树是哈希列表或哈希链的泛化，其中每个叶节点（在树中）都标有数据块，每个非叶节点（在树中）都标有其子节点标签的加密（图形）哈希。有关更多信息，请参阅[Merkle 树](https://en.wikipedia.org/wiki/Merkle_tree)Wikipedia 文章。  
注意：通过添加加密（图形）哈希函数，您可以“默克尔化”任何数据结构。  
问：什么是 Merkelized DAG（有向无环图）？  
答：它是一个由加密（图形）哈希保护的区块链，使用有向无环图数据结构（而不​​是线性“经典”链表）。  
注意：Git 使用 merkelized dag（有向无环图）作为其区块链。  
问：Git Repo 是区块链吗？  
答：是的，git repo 中的每个分支都是一个区块链。“经典”的 Satoshi 区块链就像一个只有一个主分支的 git repo。  
更多问答

* [区块链面试问题](https://mindmajix.com/blockchain-interview-questions)  
* [10 个基本区块链面试问题](https://www.toptal.com/blockchain/interview-questions)  
* [36 个区块链工作面试常见问题及答案](https://blockchainsfactory.com/blockchain-interview-questions/)

---

## **基本介绍**

* 加密知识  
  * [基本概念](https://www.jianshu.com/p/a044b303f7d5)\-非对称加密、数字签名、证书  
  * [数字签名扩展](https://www.jianshu.com/p/410e77ec23fa) ——多重签名、盲签名、群签名、环签名  
  * [Merkle 树](https://www.jianshu.com/p/a044b303f7d5)  
  * [Merkle 有向无环图](http://www.sohu.com/a/247540268_100222281)  
  * [CryptoNote v2.0](https://cryptonote.org/whitepaper.pdf) \- 不可追踪的交易和平等的工作量证明  
* 共识  
  * [工作量证明](https://www.jianshu.com/p/3462f2ed74d7)  
  * [权益证明](https://www.jianshu.com/p/2fd3bce523b0)  
  * [权益证明常见问题解答](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs)/[中文版](https://ethfans.org/posts/Proof-of-Stake-FAQ-new-2018-3-15)  
  * [委托权益证明](https://www.jianshu.com/p/ccc3fff7a60d)  
  * [实用的拜占庭容错](https://www.jianshu.com/p/e991c1385f9f)  
* 账户和交易模型  
  * [UTXO模型](https://www.jianshu.com/p/2f4e75dbc2e4)  
* 交换  
* 应用  
  * [你需要区块链吗？](https://spectrum.ieee.org/computing/networks/do-you-need-a-blockchain)  
  * [区块链做不到什么？](https://www.jianshu.com/p/70f6a29a6296)  
  * [更多的](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/application.md)  
* 治理  
  * [区块链不应该是民主的](https://haseebq.com/blockchains-should-not-be-democracies/)  
* [数字货币排名](https://coinmarketcap.com/)

---

## **开发教程**

### [**比特币**](https://github.com/bitcoin/bitcoin)

比特币是一种实验性的数字货币，可向世界上任何地方的任何人进行即时支付。比特币使用点对点技术，无需中央权威即可运行：交易管理和货币发行由网络集体进行。

* [比特币白皮书：一种点对点的电子现金系统](https://bitcoin.org/bitcoin.pdf)/[中文版](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/white%20paper.md)/[比特币白皮书注释版](https://fermatslibrary.com/s/bitcoin)  
* [精通比特币](https://github.com/bitcoinbook/bitcoinbook)/[中文版](http://book.8btc.com/books/6/masterbitcoin2cn/_book/)/ [pdf下载](http://book.8btc.com/master_bitcoin?export=pdf)  
* [比特币改进提案（BIP）](https://github.com/bitcoin/bips/)  
* [但比特币究竟是如何运作的呢？](https://www.youtube.com/watch?v=bBC-nXj3Ng4)  
* [采矿可视化](http://www.yogh.io/#mine:last)  
* [钱包](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md#wallets-api)  
* [探索者](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md#blockchain-explorers)  
* [库](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md#libraries)\- C++、JavaScript、PHP、Ruby、Python、Java、.Net  
* [Web 服务](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md#blockchain-api-and-web-services)  
* [全节点](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md#full-nodes)  
* [更多的](https://github.com/yjjnls/awesome-blockchain/blob/master/BitCoin/awesome.md)

### [**以太坊**](https://github.com/ethereum)

**![][image2]**  
以太坊是一个运行智能合约的去中心化平台：应用程序完全按照程序运行，不存在停机、审查、欺诈或第三方干扰的可能性。  
这些应用程序在定制的区块链上运行，这是一个非常强大的共享全球基础设施，可以转移价值并代表财产所有权。

* [以太坊白皮书](https://github.com/ethereum/wiki/wiki/White-Paper)/[中文版](https://github.com/yjjnls/awesome-blockchain/blob/master/Ethereum/white%20paper.md)/[带注释的以太坊白皮书](https://fermatslibrary.com/s/ethereum-a-next-generation-smart-contract-and-decentralized-application-platform)  
* [精通以太坊](https://github.com/ethereumbook/ethereumbook)/[中文版](https://github.com/inoutcode/ethereum_book)  
* [以太坊黄皮书](https://ethereum.github.io/yellowpaper/paper.pdf)/[中文版](https://github.com/yuange1024/ethereum_yellowpaper)  
* [以太坊维基](https://github.com/ethereum/wiki/wiki)  
  * [以太坊设计原理](https://github.com/ethereum/wiki/wiki/Design-Rationale)/[中文版](https://ethfans.org/posts/510)  
  * [以太坊问题](https://github.com/ethereum/wiki/wiki/Problems)  
  * [分片路线图](https://github.com/ethereum/wiki/wiki/Sharding-roadmap)  
  * [以太坊风格的 WebAssembly (ewasm)](https://github.com/ewasm)  
  * [ÐΞVp2p 有线协议](https://github.com/ethereum/wiki/wiki/%C3%90%CE%9EVp2p-Wire-Protocol)  
  * [EVM-精彩列表](https://github.com/ethereum/wiki/wiki/Ethereum-Virtual-Machine-\(EVM\)-Awesome-List)  
  * [派翠西亚·特里](https://github.com/ethereum/wiki/wiki/Patricia-Tree)  
  * 共识  
    * [以太](https://github.com/ethereum/wiki/wiki/Ethash)  
    * [Ethash-DAG](https://github.com/ethereum/wiki/wiki/Ethash-DAG)  
    * [Ethash 规格](https://github.com/ethereum/wiki/wiki/Ethash)  
    * [挖矿 Ethash DAG](https://github.com/ethereum/wiki/wiki/Mining#ethash-dag)  
    * [Dagger-Hashimoto 算法](https://github.com/ethereum/wiki/blob/master/Dagger-Hashimoto.md)  
    * [DAG 解释和图像](https://ethereum.stackexchange.com/questions/1993/what-actually-is-a-dag)  
    * [以太坊黄皮书中的 Ethash](https://ethereum.github.io/yellowpaper/paper.pdf#appendix.J)  
    * [Ethash C API 示例用法](https://github.com/ethereum/wiki/wiki/Ethash-C-API)  
* [以太坊中的账户、交易、Gas 和区块 Gas 限制](https://hudsonjameson.com/2017-06-27-accounts-transactions-gas-ethereum/)  
* [以太坊改进提案](https://eips.ethereum.org/)  
* [重要的 EIP 和 ERC](https://github.com/ethereumbook/ethereumbook/blob/develop/appdx-standards-eip-erc.asciidoc#table-of-most-important-eips-and-ercs) / [EIP 列表](https://github.com/ethereum/EIPs)  
* 安全  
  * [以太坊智能合约安全最佳实践](https://consensys.github.io/smart-contract-best-practices/)/[中文版](https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md)  
  * [以太坊智能合约安全发展](https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702)  
  * [以太坊智能合约指南](https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05)  
  * [开放Zeppelin](https://docs.openzeppelin.com/openzeppelin/)  
  * [openzeppelin 合约](https://github.com/OpenZeppelin/openzeppelin-contracts)/[文档](https://docs.openzeppelin.com/contracts/2.x/)  
  * [openzepplin sdk](https://github.com/OpenZeppelin/openzeppelin-sdk)  
* 代币  
  * [ERC20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) /[实施](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20)  
  * [ERC721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) /[实现](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721)  
* 实用工具  
  * [以太坊区块链浏览器](https://etherscan.io/)  
  * [Eth加油站](https://ethgasstation.info/)  
  * [以太坊网络状态](https://ethstats.net/)  
* [EEA \- 企业以太坊：企业专用区块链](https://101blockchains.com/enterprise-ethereum/)  
  * [什么是企业以太坊？](https://101blockchains.com/enterprise-ethereum/#1)  
  * [什么是企业以太坊联盟？](https://101blockchains.com/enterprise-ethereum/#2)  
  * [企业以太坊的优势](https://101blockchains.com/enterprise-ethereum/#3)  
  * [企业以太坊区块链的架构堆栈](https://101blockchains.com/enterprise-ethereum/#4)  
  * [企业以太坊的可能用例有哪些？](https://101blockchains.com/enterprise-ethereum/#5)  
  * [以太坊区块链即服务提供商](https://101blockchains.com/enterprise-ethereum/#6)  
  * [现实世界中使用企业以太坊的公司](https://101blockchains.com/enterprise-ethereum/#7)  
  * [最后的话](https://101blockchains.com/enterprise-ethereum/#8)

### **联盟区块链**

* 理论  
  * [拜占庭将军问题](https://people.eecs.berkeley.edu/~luca/cs174/byzantine.pdf)  
  * [实用的拜占庭容错](http://pmg.csail.mit.edu/papers/osdi99.pdf)  
  * [联盟区块链是不是更好？](http://www.infoq.com/cn/news/2018/10/is-consortium-blockchain-better)  
  * [5 联盟链比较](http://www.infoq.com/cn/articles/5-consortium-blockchain-comparison)/[简版](https://upload-images.jianshu.io/upload_images/11336404-f753396df0e930c8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
  * [FISCO BCOS 与 Fabric](http://www.infoq.com/cn/news/2018/09/uncover-consortium-blockchain)  
* 使用以太坊实现联盟区块链  
  * [建立私人以太坊联盟](https://www.microsoft.com/developerblog/2018/06/01/creating-private-ethereum-consortium-kubernetes/)  
  * [将私有以太坊区块链部署到 Microsoft Azure 云](https://www.youtube.com/watch?v=HsConsFaZG8)  
  * [以太坊联盟网络部署变得简单](https://github.com/CatalystCode/ibera-ethereum-consortium-blockchain-network)  
  * [如何在 20 分钟内建立私有以太坊区块链](https://arctouch.com/blog/how-to-set-up-ethereum-blockchain/)

#### **超级账本**

* [Hyperledger 组织](https://wiki.hyperledger.org/)  
* 织物  
  * [面料组织](https://wiki.hyperledger.org/display/Fabric)  
  * [面料设计文件](https://wiki.hyperledger.org/display/fabric/Design+Documents)  
  * [面料维基](https://hyperledger-fabric.readthedocs.io/en/latest/)  
    * 1.4[授权](https://hyperledger-fabric.readthedocs.io/en/release-1.4/)/[授权](https://hyperledger-fabric.readthedocs.io/zh_CN/release-1.4/)/[发布](https://hyperledger-fabric.readthedocs.io/_/downloads/en/release-1.4/pdf/)  
    * 2.2[锌](https://hyperledger-fabric.readthedocs.io/en/release-2.2/)/[锌](https://hyperledger-fabric.readthedocs.io/zh_CN/release-2.2/)  
  * [Fabric 源代码分析](https://yeasy.gitbook.io/hyperledger_code_fabric/overview)  
  * [基于 Kafka 的 Fabric 订购服务](https://docs.google.com/document/d/19JihmW-8blTzN99lAubOfseLUZqdrB6sBR0HsRgCAnY/edit)  
* 探索者  
  * [探索者提案](https://docs.google.com/document/d/1GuVNHZ5Jqq-gTVKflnZ1YiJfEoozvugqenC6QEQFQj4/edit)  
  * [资源管理器文档](https://blockchain-explorer.readthedocs.io/en/master/architecture/index.html)  
* [IBM OpenTech Hyperledger Fabric 1.4 LTS 课程](https://space.bilibili.com/102734951/channel/detail?cid=69148)  
* [edx：Hyperledger 区块链技术简介免费课程](https://www.edx.org/course/introduction-to-hyperledger-blockchain-technologie)

#### [**XuperChain**](https://github.com/xuperchain/xuperchain)

**![][image3]**  
XuperChain是XuperChain实验室的首个开源项目，它引入了一种高度灵活、具有良好交易性能的区块链架构。  
XuperChain是联盟网络的底层解决方案，具有以下突出特点：  
高性能

* 创新的XuperModel技术，使合约执行与验证并行进行。  
* [TDPoS](https://xuperchain.readthedocs.io/zh/latest/design_documents/xpos.html)确保在大规模网络中快速达成共识。  
* WASM VM 使用 AOT 技术。

坚实的安全

* 合约账户受多重私钥保护，确保资产安全。  
* [灵活的授权系统](https://xuperchain.readthedocs.io/zh/latest/design_documents/permission_model.html)支持权重阈值、AK集，并且可以轻松扩展。

高可扩展性

* 强大的[P2P](https://xuperchain.readthedocs.io/zh/latest/design_documents/p2p.html)网络支持数千个节点的大规模网络。  
* 账本上的分支管理实现自动收敛一致性，支持全球部署。

多语言支持：使用[XuperBridge](https://xuperchain.readthedocs.io/zh/latest/design_documents/XuperBridge.html)技术支持可插入式多语言合约VM 。  
灵活性：模块化、可插拔的设计为用户构建适合各种业务场景的区块链解决方案提供了高度的灵活性。

* [百度区块链引擎](https://cloud.baidu.com/product/bbe.html)  
* [主页](https://xchain.baidu.com/)  
* [文件](https://xuperchain.readthedocs.io/zh/latest/index.html)  
* [维基百科](https://github.com/xuperchain/xuperchain/wiki)/[英文版](https://github.com/xuperchain/xuperchain/wiki/Wiki-in-English)  
* [入门](https://github.com/xuperchain/xuperchain/wiki/3.-Getting-Started)  
  * [账户操作](https://xuperchain.readthedocs.io/zh/latest/advanced_usage/contract_accounts.html)  
  * [多节点部署](https://xuperchain.readthedocs.io/zh/latest/advanced_usage/multi-nodes.html)  
  * [Wasm 合约](https://xuperchain.readthedocs.io/zh/latest/advanced_usage/create_contracts.html)  
  * [提议](https://xuperchain.readthedocs.io/zh/latest/advanced_usage/initiate_proposals.html)  
  * [平行链](https://xuperchain.readthedocs.io/zh/latest/advanced_usage/parallel_chain.html)  
* 软件开发工具包  
  * [Go SDK](https://github.com/xuperchain/xuper-java-sdk)  
  * [JavaScript SDK 简介](https://github.com/xuperchain/xuper-sdk-js)  
  * [Java SDK](https://github.com/xuperchain/xuper-python-sdk)  
  * [Python 开发工具包](https://github.com/xuperchain/xuper-python-sdk)  
* [详细常见问题解答](https://xuperchain.readthedocs.io/zh/latest/FAQs.html)  
* [与 Fabric 和以太坊的比较](https://github.com/xuperchain/xuperchain/wiki/%E9%99%84-%E8%AF%84%E6%B5%8B%E6%95%B0%E6%8D%AE%E5%AF%B9%E6%AF%94)

#### [**FISCO-BCOS**](https://github.com/FISCO-BCOS/Wiki)

## **相关工具**

### **坚固性**

* [doc](https://solidity.readthedocs.io/en/develop/index.html) /[中文版](https://solidity-cn.readthedocs.io/zh/develop/)

### **松露**

* [从零开始的区块链 KickStarter](https://prasannabrabourame.medium.com/blockchain-kickstarter-from-scratch-9a3906596cd0)

### **web3.js**

* [doc](https://web3js.readthedocs.io/en/1.0/) /[中文版](http://web3.tryblockchain.org/Web3.js-api-refrence.html)

## **区块链的实现**

* [ATS：*功能性区块链*](https://beta.observablehq.com/@galletti94/functional-blockchain)  
* [C\#：*使用 C\# 编写区块链程序*](https://programmingblockchain.gitbooks.io/programmingblockchain/)  
* [Crystal：*使用 Crystal 编写自己的区块链和 PoW 算法*](https://medium.com/@bradford_hamilton/write-your-own-blockchain-and-pow-algorithm-using-crystal-d53d5d9d0c52)  
* [C++：*从头开始的区块链*](https://github.com/openblockchains/awesome-blockchains/tree/master/blockchain.cpp)  
* [Go:*用 Go 语言构建区块链*](https://github.com/Jeiwan/blockchain_go)/[中文版 1](https://github.com/liuchengxu/blockchain-tutorial/blob/master/content/part-1/basic-prototype.md) /[中文版 2](https://zhangli1.gitbooks.io/dummies-for-blockchain/content/)  
  * [*第 1 部分：基本原型*](https://jeiwan.net/posts/building-blockchain-in-go-part-1/)  
  * [*第二部分：工作量证明*](https://jeiwan.net/posts/building-blockchain-in-go-part-2/)  
  * [*第 3 部分：持久性和 CLI*](https://jeiwan.net/posts/building-blockchain-in-go-part-3/)  
  * [*第 4 部分：交易 1*](https://jeiwan.net/posts/building-blockchain-in-go-part-4/)  
  * [*第 5 部分：地址*](https://jeiwan.net/posts/building-blockchain-in-go-part-5/)  
  * [*第 6 部分：交易 2*](https://jeiwan.net/posts/building-blockchain-in-go-part-6/)  
  * [*第 7 部分：网络*](https://jeiwan.net/posts/building-blockchain-in-go-part-7/)  
* [Go：*使用 Go 构建简单的区块链*](https://www.codementor.io/codehakase/building-a-simple-blockchain-with-go-k7crur06v)  
* [Go：*用不到 200 行 Go 代码编写自己的区块链*](https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc)  
* [Go：*用 Go 编写自己的区块链挖掘算法*](https://medium.com/@mycoralhealth/code-your-own-blockchain-mining-algorithm-in-go-82c6a71aba1f)  
* [Go：*GoCoin \- 用 Go 语言（golang）编写的完整比特币解决方案*](https://github.com/piotrnar/gocoin)  
* [Go：*GoChain \- Go 中区块链的基本实现*](https://github.com/crisadamo/gochain)  
* [Go：*使用 Golang 实现区块链的乐趣*](https://github.com/izqui/blockchain)  
* [Go：*NaiveChain \- 区块链的简单实现*](https://github.com/kofj/naivechain)  
* [Java：*使用 Java 创建你的第一个区块链*](https://medium.com/programmers-blockchain/create-simple-blockchain-java-tutorial-from-scratch-6eeed3cb03fa)  
* [Java：*用 Java 编写区块链*](https://www.jianshu.com/p/afd8c465c91a)  
* [JavaScript：*不到 1500 行代码即可实现加密货币*](https://github.com/conradoqg/naivecoin)  
* [JavaScript：*基于网络的区块链概念演示*](https://github.com/anders94/blockchain-demo/)  
* [JavaScript：*用 JavaScript 构建你自己的区块链*](https://github.com/nambrot/blockchain-in-js)  
* [JavaScript：*区块链演示代码*](https://github.com/seanjameshan/blockchain)  
* [JavaScript：*使用 JavaScript 创建区块链*](https://github.com/SavjeeTutorials/SavjeeCoin)  
* [JavaScript：*如何推出你自己的可投入生产的加密货币*](https://hackernoon.com/how-to-launch-your-own-production-ready-cryptocurrency-ab97cb773371)  
* [JavaScript：*学习并构建 JavaScript 区块链*](https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e)  
* [JavaScript：*Node.js 区块链实现：BrewChain：Chain+WebSockets+HTTP 服务器*](http://www.darrenbeck.co.uk/blockchain/nodejs/nodejscrypto/)  
* [JavaScript：*用 JavaScript 编写微型区块链*](https://www.savjee.be/2017/07/Writing-tiny-blockchain-in-JavaScript/)  
  * [*第 1 部分：实现基本区块链*](https://www.savjee.be/2017/07/Writing-tiny-blockchain-in-JavaScript/)  
  * [*第二部分：实施工作量证明*](https://www.savjee.be/2017/09/Implementing-proof-of-work-javascript-blockchain/)  
  * [*第三部分：交易和挖矿奖励*](https://www.savjee.be/2018/02/Transactions-and-mining-rewards/)  
  * [*第四部分：签署交易*](https://www.savjee.be/2018/10/Signing-transactions-blockchain-javascript/)  
* [Kotlin：*让我们用 Kotlin 实现一种加密货币*](https://medium.com/@vasilyf/lets-implement-a-cryptocurrency-in-kotlin-part-1-blockchain-8704069f8580)  
* [Python：*使用 Python 进行区块链实用介绍*](http://adilmoujahid.com/posts/2018/03/intro-blockchain-bitcoin-python/)  
* [Python：*构建你自己的区块链：Python 教程*](http://ecomunsing.com/build-your-own-blockchain)  
* [Python：*通过构建区块链来学习区块链*](https://hackernoon.com/learn-blockchains-by-building-one-117428612f46)  
* [Python：*让我们构建最小的区块链*](https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b)  
* [Python：*编写自己的区块链*](https://bigishdata.com/2017/10/17/write-your-own-blockchain-part-1-creating-storing-syncing-displaying-mining-and-proving-work/)  
  * [*第 1 部分 — 创建、存储、同步、显示、挖掘和证明工作*](https://bigishdata.com/2017/10/17/write-your-own-blockchain-part-1-creating-storing-syncing-displaying-mining-and-proving-work/)  
  * [*第 2 部分 — 同步来自不同节点的链*](https://bigishdata.com/2017/10/27/build-your-own-blockchain-part-2-syncing-chains-from-different-nodes/)  
  * [*第 3 部分 — 挖矿节点*](https://bigishdata.com/2017/11/02/build-your-own-blockchain-part-3-writing-nodes-that-mine/)  
  * [*第 4.1 部分 — 比特币工作量证明难度解析*](https://bigishdata.com/2017/11/13/how-to-build-a-blockchain-part-4-1-bitcoin-proof-of-work-difficulty-explained/)  
  * [*第 4.2 部分 — 以太坊工作量证明难度解析*](https://bigishdata.com/2017/11/21/how-to-build-your-own-blockchain-part-4-2-ethereum-proof-of-work-difficulty-explained/)  
* [Ruby：*让我们构建区块链*](https://github.com/Haseeb-Qureshi/lets-build-a-blockchain)  
* [Ruby：*循序渐进地编程区块链（手稿书版）*](https://github.com/yukimotopress/programming-blockchains-step-by-step)  
* [Scala：*如何构建简单的基于参与者的区块链*](https://medium.freecodecamp.org/how-to-build-a-simple-actor-based-blockchain-aac1e996c177)  
* [TypeScript：*Naivecoin：构建加密货币的教程*](https://lhartikk.github.io/)  
  * [*最小工作区块链*](https://lhartikk.github.io/jekyll/update/2017/07/14/chapter1.html)  
  * [*工作量证明*](https://lhartikk.github.io/jekyll/update/2017/07/13/chapter2.html)  
  * [*交易*](https://lhartikk.github.io/jekyll/update/2017/07/12/chapter3.html)  
  * [*钱包*](https://lhartikk.github.io/jekyll/update/2017/07/11/chapter4.html)  
  * [*交易中继*](https://lhartikk.github.io/jekyll/update/2017/07/10/chapter5.html)  
  * [*钱包用户界面和区块链浏览器*](https://lhartikk.github.io/jekyll/update/2017/07/09/chapter6.html)  
* [TypeScript：*NaivecoinStake：使用权益证明共识构建加密货币的教程*](https://naivecoinstake.learn.uno/)  
* [探索区块链 OSS、库、包、源代码、云功能和 API](https://kandi.openweaver.com/explore/blockchain)

---

## **项目和应用**

**![][image4]**

### **法定人数**

Quorum是一个基于以太坊的分布式账本协议，具有交易/合约隐私和新的共识机制。  
Quorum是[go-ethereum](https://github.com/ethereum/go-ethereum)的一个分支，并根据 go-ethereum 的发布进行更新。  
与 go-ethereum 相比的主要增强功能：

* 隐私- Quorum 通过公私状态分离支持私人交易和私人合约，并利用点对点加密消息交换（参见[Constellation](https://github.com/jpmorganchase/constellation)和[Tessera](https://github.com/jpmorganchase/tessera)）将私人数据直接传输给网络参与者  
* 替代共识机制 \- 在许可网络中不需要 POW/POS，Quorum 提供了多种更适合联盟链的共识机制：  
  * 基于 Raft 的共识——一种用于加快区块时间、交易最终性和按需区块创建的共识模型  
  * 伊斯坦布尔 BFT \- 一种由 AMIS 开发的受 PBFT 启发的具有交易最终性的共识算法。  
* 对等许可——使用智能合约进行节点/对等许可，确保只有已知的各方才能加入网络  
* 更高的性能- Quorum 的性能明显高于公共 geth

![][image5]

### **门罗币**

Monero是一种私密、安全、不可追踪的去中心化数字货币。您是您的银行，您控制您的资金，除非您允许，否则任何人都无法追踪您的转账。  
隐私：Monero 使用加密系统，允许您发送和接收资金，而不会在区块链（每个人都拥有的交易分类账）上轻易透露您的交易。这可确保您的购买、收据和所有转账默认保持绝对私密。  
安全性：利用分布式点对点共识网络的力量，网络上的每笔交易都经过加密保护。每个钱包都有一个 25 个单词的助记词种子，只显示一次，可以写下来备份钱包。钱包文件使用密码加密，以确保即使被盗也无法使用。  
不可追踪性：通过利用环签名（一种特定类型的加密技术的特殊属性），Monero 能够确保交易不仅不可追踪，而且具有可选的模糊性度量，确保交易不能轻易地与单个用户或计算机联系起来。

* [Getmonero.org](https://getmonero.org/) ——Monero 官方网站  
* [Lab.getmonero.org](https://lab.getmonero.org/) ——Monero 官方研究小组  
* [RPC 文档](https://getmonero.org/resources/developer-guides/daemon-rpc.html)\- Monero 守护进程的 RPC 文档  
* [钱包文档](https://getmonero.org/resources/developer-guides/wallet-rpc.html)\- Monero 守护进程的钱包文档  
* [Cryptonote 白皮书](https://cryptonote.org/whitepaper.pdf)\- Monero 加密货币家族 Cryptonote 的白皮书  
* [Cryptonote 白皮书评论](https://downloads.getmonero.org/whitepaper_review.pdf)\- 由 Monero 研究实验室撰写  
* [Cryptonote 标准](https://cryptonote.org/cns)\- 10 个 Cryptonote 标准（相当于比特币的 BIP）  
* [如何开始](https://github.com/monero-project/monero#compiling-monero-from-source)  
* [路线图](https://www.getmonero.org/resources/roadmap/)  
* [什么是Monero？ 最全面的指南](https://blockgeeks.com/guides/monero/)/[中文版](https://github.com/liuchengxu/blockchain-tutorial/blob/master/content/monero/what-is-monero.md)  
* [更多资源](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/monero.md)

![][image6]

### **IOTA**

IOTA是物联网革命性的新交易结算和数据完整性层。它基于一种新的分布式账本架构Tangle ，克服了当前区块链设计的低效率，并引入了一种在去中心化的点对点系统中达成共识的新方法。有史以来第一次，通过 IOTA，人们可以免费转账。这意味着即使是无限小的纳米支付也可以通过 IOTA 进行。  
IOTA是机器经济全面崛起并发挥其潜力所缺少的一块拼图。我们设想 IOTA 成为物联网的公共、无需许可的骨干，实现所有设备之间的真正互操作性。

* [IOTA——](https://iota.org/)下一代区块链  
* [白皮书](https://iota.org/IOTA_Whitepaper.pdf)\- The Tangle /[中文版](http://www.iotachina.com/wp-content/uploads/2016/11/2016112902003453.pdf)  
* [维基百科](https://en.wikipedia.org/wiki/IOTA_\(Distributed_Ledger_Technology\))  
* [IOTA 入门](https://blog.iota.org/a-primer-on-iota-with-presentation-e0a6eb2cc621)\- IOTA 入门（附演示）  
* [IOTA中国](http://iotachina.com/)\- IOTA中国首页  
* [IOTA 意大利](http://iotaitalia.com/)\- IOTA 意大利  
* [IOTA 韩国](http://blog.naver.com/iotakorea)\- IOTA 한국  
* [IOTA 日本](http://lhj.hatenablog.jp/entry/iota)\- IOTA 日本  
* [Reddit 上的 IOTA](https://www.reddit.com/r/Iota/)  
* [如何开始](https://github.com/iotaledger/iri#how-to-get-started)  
* [路线图](https://www.iota.org/research/roadmap)  
* [IOTA 交易、确认与共识](https://github.com/noneymous/iota-consensus-presentation)/[中文版](https://github.com/liuchengxu/blockchain-tutorial/blob/master/content/iota/iota_consensus_v1.0.md)  
* [更多资源](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/iota.md)

### **EOS**

EOSIO是一款引入区块链架构的软件，旨在实现去中心化应用程序的垂直和水平扩展（“EOSIO 软件”）。这是通过一个类似于操作系统的结构来实现的，应用程序可以在此基础上构建。该软件提供帐户、身份验证、数据库、异步通信以及跨多个 CPU 核心和/或集群的应用程序调度。由此产生的技术是一种区块链架构，它有可能扩展到每秒数百万笔交易，消除用户费用，并允许快速轻松地部署去中心化应用程序。有关更多信息，请阅读 [EOS.IO 技术白皮书](https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md)。

* [EOS Wiki](https://github.com/EOSIO/eos/wiki) \- EOS 软件高级概述  
* [技术白皮书](https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md)\- EOS.IO 技术白皮书 v2  
* [EOS：简介 \- 黑色版](http://iang.org/papers/EOS_An_Introduction-BLACK-EDITION.pdf)\- Ian Grigg 的白皮书  
* [EOSIO 开发者门户](https://developers.eos.io/)\- 官方 EOSIO 开发者门户，包含文档、API 等。  
* [如何开始](https://developers.eos.io/eosio-home)  
* [路线图](https://github.com/EOSIO/Documentation/blob/master/Roadmap.md)  
* [工具](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/eos.md#tools)  
* [语言支持](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/eos.md#language-support)

![][image7]

### **IPFS**

IPFS（[星际文件系统](https://github.com/ipfs/faq/issues/76)）是一种新的超媒体分发协议，通过内容和身份进行寻址。IPFS 支持创建完全分布式应用程序。它旨在使网络更快、更安全、更开放。  
IPFS是一种分布式文件系统，旨在将所有计算设备与相同的文件系统连接起来。在某些方面，这与 Web 的最初目标相似，但 IPFS 实际上更类似于交换 git 对象的单个 bittorrent 群。您可以在论文《[IPFS \- 内容寻址、版本化、P2P 文件系统》](https://github.com/ipfs/ipfs/blob/master/papers/ipfs-cap2pfs/ipfs-p2p-file-system.pdf?raw=true)中阅读有关其起源的更多信息。  
IPFS正在成为互联网的一个新的主要子系统。如果构建得当，它可以补充或取代 HTTP。它可以补充或取代更多。这听起来很疯狂。这*确实很*疯狂。

* [白皮书](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf)\-IPFS学术论文/[中文版](https://gguoss.github.io/2017/05/28/ipfs/)  
* [规格](https://github.com/ipfs/specs)\- IPFS 协议的规格  
* [注释](https://github.com/ipfs/notes)\- 各种相关注释和讨论（不适合其他地方）  
* [阅读清单](https://github.com/ipfs/reading-list)\- 了解 IPFS 需要阅读的论文  
* [协议实现](https://github.com/ipfs/ipfs#protocol-implementations)  
* [HTTP 客户端库](https://github.com/ipfs/ipfs#http-client-libraries)   
* [路线图](https://github.com/ipfs/roadmap)  
* [更多资源](https://github.com/yjjnls/awesome-blockchain/blob/master/Extension/ipfs.md)

#### [**Filecoin**](https://filecoin.io/)

* [白皮书](https://filecoin.io/filecoin.pdf)/[中文版](http://chainx.org/paper/index/index/id/13.html)

#### [**聚碱基**](https://polybase.xyz/)

* [白皮书](https://framerusercontent.com/modules/assets/GRv4t0d6jQOJbIO7ZOFgonnXqM~f7GLGr1YpwfK85uVr8su7Mxe_3b6VkIZW94sRev8jj4.pdf)/[文档](https://github.com/polybase/docs)

#### [**大链数据库**](https://www.bigchaindb.com/)

* [白皮书](https://www.bigchaindb.com/whitepaper)/[中文版](http://blog.csdn.net/fengqing79/article/details/70154076)

### **比特股**

* [白皮书](https://github.com/yjjnls/awesome-blockchain/blob/master)/[中文版](https://www.8btc.com/article/3369)

### **ArcBlock**

* [区块链开发者平台](https://www.arcblock.io/)/[白皮书](https://www.arcblock.io/en/whitepaper/latest)

![][image8]

### [**EthAir 气球**](https://github.com/petrosDemetrakopoulos/ethairballoons)

* 以太坊区块链的严格类型 ORM 库。它允许开发人员以有组织和面向模型的方式将以太坊区块链用作持久存储，而无需编写自定义的复杂智能合约。

---

## **进一步延伸**

### [**文件**](https://github.com/decrypto-org/blockchain-papers)

### **图书**

* [区块链指南](https://yeasy.gitbooks.io/blockchain_guide/content/)，作者：杨宝华，2017 年——介绍区块链相关技术，从理论到比特币、以太坊和超级账本的实践。  
* [区块链：从数字货币到信用社会](https://github.com/yjjnls/books/blob/master/block%20chain/%E5%8C%BA%E5%9D%97%E9%93%BE%20%E4%BB%8E%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81%E5%88%B0%E4%BF%A1%E7%94%A8%E7%A4%BE%E4%BC%9A.pdf)  
* [50 英尺区块链的攻击：比特币、区块链、以太坊和智能合约](https://davidgerard.co.uk/blockchain/table-of-contents/)，David Gerard，伦敦，2017 年—— *什么是比特币？++ 比特币的意识形态 \++ 比特币的惊人前景！++ 早期比特币：第一次泡沫的兴起 \++ 比特币挖矿如何中心化 \++ 谁是中本聪？++ 2017 年比特币消费 \++ 2017 年比特币交易：第二次加密货币泡沫 \++ 山寨币 \++ 智能合约，愚蠢的人类 \++ 商业上的胡言乱语，但关于区块链 \++ 案例研究：为什么你不能将音乐产业放在区块链上*  
* [精通比特币 \- 编写开放区块链](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch09.asciidoc)第 2 版，作者 Andreas M. Antonopoulos，2017 年 \- 免费（在线源版本）-- *什么是比特币？++ 比特币的工作原理 \++ 比特币核心：参考实现 \++ 密钥、地址 \++ 钱包 \++ 交易 \++ 高级交易和脚本 \++ 比特币网络 \++ 区块链 \++ 挖矿和共识 \++ 比特币安全 \++ 区块链应用程序*  
* [从头开始使用 Ruby 编写区块链程序，逐步从加密哈希开始……（测试版/草稿）](https://github.com/yukimotopress/programming-blockchains-step-by-step) 作者：Gerald Bauer 等人，2018 年 \- 免费（在线版本）- *（加密）哈希++（加密）区块++（加密）具有工作量证明的区块++区块链！区块链！区块链！++区块链损坏？++时间戳++挖矿，挖矿，挖矿 \- 您的哈希率是多少？++比特币，比特币，比特币++（加密）带有交易（Tx）的区块*  
* [使用 Ruby 编写加密货币和区块链（测试版 / 草稿）](http://yukimotopress.github.io/blockchains) ，作者：Gerald Bauer 等人，2018 年 \- 免费（在线版本）@Yuki & Moto Press 书架 \- *数字 $$$ 炼金术 \- 什么是区块链？ \- 如何将数字位转换为 $$$ 或 €€€？• 分散支付。分散交易。分散区块链。• 布丁​​的证明是......比特币 (BTC) 区块链++ 从头开始​​构建区块链 \- 20 行 Ruby 区块链！区块链是一种数据结构 • 那工作量证明呢？那共识呢？• 找到幸运数字 \- Nonce \== 使用过一次的数字 \++ 添加交易 \- 世界上最糟糕的数据库 \- 比特币区块链挖矿 • 区块链上的郁金香！添加交易 \++ Blockchain Lite \- 基本区块 • 工作量证明区块 • 交易 \++ Merkle Tree \- 构建您自己的加密哈希树；在树上种植自己的钱 • 什么是 Merkle 树？ • 交易 \++ 中央银行 \- 在区块链上运行您自己的联邦中央银行节点 通过 HTTP 进行点对点连接 • 内部挖矿 \- 在区块链上打印加密货币、加密货币、加密货币 \++ 超棒的加密货币 \++ 案例研究 \- 荷兰盾 • 先令 • CryptoKitties（和 CryptoCopycats）*  
* [区块链入门指南，IBM 限量版](https://www.ibm.com/blockchain/what-is-blockchain.html)，Manav Gupta 著，2017 年 \- 免费（通过电子邮件进行数字下载）- *掌握区块链基础知识 \++ 了解区块链的工作原理 \++ 利用区块链推动业务发展 \++ 区块链实际应用：用例 \++ Hyperledger，Linux 基金会项目 \++ 开发首个区块链应用程序的十个步骤*  
* [快速致富“商业区块链”圣经 \- 免费轻松赚钱的秘密](https://github.com/bitsblocks/get-rich-quick-bible)，2018 \- 免费 \- *步骤 1：卖空。怎么做？++ 步骤 2：提升你的代币。怎么做？++ 步骤 3：改变世界。怎么做？*  
* [精通以太坊 \- 在区块链上构建合约服务和去中心化应用](https://github.com/ethereumbook/ethereumbook)\- 作者：Andreas M. Antonopoulos、Gavin Wood，2018 年 \- 免费（在线源版本） *什么是以太坊 \++ 简介 \++ 以太坊客户端 \++ 以太坊测试网 \++ 密钥和地址 \++ 钱包 \++ 交易 \++ 合约服务 \++ 代币 \++ 预言机 \++ 会计和 Gas \++ EVM（以太坊虚拟机） \++ 共识 \++ DevP2P（点对点）协议 \++ 开发工具和框架 \++ 去中心化应用 \++ 以太坊标准 (EIPs/ERCs)*  
* [Roberto Infante 于 2018 年撰写的《在以太坊区块链上构建去中心化应用程序](https://www.manning.com/books/building-ethereum-dapps)》 ——免费第 1 章 \- *了解去中心化应用程序 \++ 以太坊区块链 \++ 在（类似 JavaScript）Solidity 中构建合约服务 \++ 在以太坊区块链上运行合约服务 \++ 使用 Truffle 开发以太坊去中心化应用程序 \++ 最佳设计和安全实践*  
* [比特币极端主义者的最佳之作 \- 骗子、白痴、小丑、托儿和 BagHODLers \- 新加密庞氏经济学内幕](https://github.com/bitsblocks/bitcoin-maximalist)，2018 年 \- 免费  
* [加密事实 \- 去中心化支付 \- 高效、低成本、公平、干净 \- 真还是假？](https://github.com/bitsblocks/crypto-facts)，2018 \- 免费  
* [IslandCoin 白皮书 \- 纸笔现金系统 \- 如何在荒岛上运行区块链（](https://github.com/bitsblocks/islandcoin-whitepaper) 作者：Tal Kol）-- *动机 \++ 共识 \++ 交易和区块规范 \- 交易格式 • 区块格式 • 创世区块 \++ 参考资料*  
* [Bina Ramamurthy 撰写的《区块链实战》](https://www.manning.com/books/blockchain-in-action)，抢先体验—— *了解区块链与其他分布式系统的区别 \++ 使用以太坊和 Solidity 语言进行智能合约开发 \++ 去中心化应用的 Web UI \++ 身份、隐私和安全技术 \++ 链上和链下数据存储*  
* Mansoor Ahmed-Rengers 和 Marta Piekarska-Geater 撰写的《 [许可区块链在行动》](https://www.manning.com/books/permissioned-blockchains-in-action) *，早期访问——使用区块链技术创建创新应用程序的指南 \++ 使用 Solidity 编写智能合约和分布式应用程序 \++ 配置 DLT 网络 \++ 为特定用例设计区块链解决方案 \++ 许可区块链网络中的身份管理*  
* [Siddharth Jain 编写的Hyperledger Fabric 编程](https://www.amazon.com/dp/0578802228)—— *企业用例区块链应用程序开发指南 \++ Fabric 在区块链领域中的位置 \++ 部署真实应用程序的来龙去脉 \++ 在 Node 中开发智能合约和客户端应用程序 \++ 调试和故障排除 \++ 保护生产应用程序*  
* [自我主权身份](https://www.manning.com/books/self-sovereign-identity)，作者：Alex Preukschat 和 Drummond Reed—— *在《自我主权身份：分散的数字身份和可验证凭证++》中，您将了解 SSI 如何使我们能够接收数字签名的凭证++并将其存储在私人钱包++中，并安全地证明我们的在线身份。*

### **应用**

#### **身份识别应用**

##### **公共区块链身份**

* [Awesome Name Services](https://github.com/scio-labs/awesome-name-services/) – 精选列表，整理所有分散的域名服务 (DNS)。  
* [Blockstack](https://blockstack.org/) \- 去中心化、无服务器应用平台，用户可控制其数据。包括身份信息。  
* [Evernym——](http://www.evernym.com/)建立在开源许可区块链之上的自主主权身份。  
* [Jolocom——](https://jolocom.com/)自主身份钱包。  
* [SIN——](https://en.bitcoin.it/wiki/Identity_protocol_v1)为比特币提出的身份协议。  
* [uPort ——](https://www.uport.me/) [ConsenSys在](https://consensys.net/)[以太坊](https://ethereum.org/)上实现的自主主权身份。

##### **区块链作为抵押品**

* [ShoCard——](https://shocard.com/)专有数字身份服务，使用区块链进行时间戳和安全文档交换。  
* [Tradle——](https://tradle.io/)在区块链上建立银行，以身份作为抵押。

##### **不清楚**

* [KYC Chain——](http://kyc-chain.com/)金融机构之间共享可验证身份声明、数据或文件的安全平台。  
* [ObjectChain Collab](http://www.objectchain-collab.com/) \- 通过分布式身份进行跨行业协作。  
* [UniquID——](http://uniquid.com/)人和设备的身份。  
* [Vida Identity——](https://vidaidentity.com/)企业级区块链身份软件。

##### **指导**

* [ID3——](https://idcubed.org/)数据驱动设计研究所，探讨有关自我主权身份和分布式组织的问题。  
* [OpenCreds](http://opencreds.org/) ——W3C 凭证社区团体。  
* [TAO 网络身份](http://tao.network/portfolio-item/the-identity-system/)\- Tao.Network 对区块链身份的描述。

#### **物联网应用**

* [Chronicled——](http://www.chronicled.com/)区块链上的物联网设备注册。  
* [Filament](http://filament.com/) \- 分散式物联网系统的软件和硬件  
* [IOTA——](http://www.iotatoken.com/)无区块区块链上的去中心化物联网代币。  
* [Machinomy](http://machinomy.com/) \- 物联网微支付分布式平台。  
* [Project Oaken——](https://www.projectoaken.com/)物联网区块链平台。  
* [Slock.it——](https://slock.it/)基于以太坊的构建共享事物的平台。

#### **能源应用**

* [bankymoon](http://bankymoon.co.za/) \- 区块链咨询公司。[推出了](http://goo.gl/L6vJBx)基于比特币的智能电表。充值后，它会选择一个计划，然后开始传输能源。  
* [Co-Tricity——由](https://co-tricity.com/)[Innogy](https://innovationhub.innogy.com/)和[ConsenSys](https://consensys.net/)打造的去中心化能源市场。  
* [Electron——](http://www.electron.org.uk/)在区块链上重塑能源。  
* [GridSingularity](http://gridsingularity.com/) \- 智能电网区块链。宣布三年来一直在研究该技术。  
* [lo3 energy](http://lo3energy.com/) \- 能源服务、产品研发。与[ConsenSys](https://consensys.net/)共同打造[布鲁克林微电网](http://brooklynmicrogrid.com/)。  
* [lumo](https://lumoenergy.com.au/) \- 能源供应商。使用区块链进行实验。  
* [PowerLedger——](https://powerledger.io/)分散的能源市场。  
* [PowerPeers——](https://www.powerpeers.nl/)荷兰的点对点能源市场。  
* [太阳能变革](http://www.solarchange.co/)\-[太阳能币](http://solarcoin.org/)的创造者。用于 1MW 太阳能的 AltCoin。  
* [Terraledger——](https://terraledger.com/)可再生能源证书提供商。  
* [ImpactPPA——](https://impactppa.com/)将电力购买协议下产生的电力再投资于更多的PPA。

#### **媒体与新闻**

* [Steem](https://steem.io/) \- 去中心化的社交网络，激励内容创作和策划。  
* [PopChest](https://popchest.com/) \- 激励分布式视频平台。  
* [Civil——](https://joincivil.com/)去中心化新闻制作平台。

#### **DeFi（去中心化金融）**

* [Uniswap——](https://uniswap.org/)由自动做市商模型（AMM）提供支持的去中心化交易所。  
* [Compound——](https://compound.finance/)去中心化的借贷。  
* [1inch Exchange](https://1inch.exchange/) \- 在多个 DEX 中获取最优惠汇率。  
* [Synthetix——](https://synthetix.io/)合成资产协议。  
* 工具  
  * [Defi Dashboard](https://debank.com/)：投资组合追踪器、项目列表、排名等。  
  * [Zapper](https://zapper.fi/)：用于查看和管理您的 DeFi 投资的仪表板。  
  * [Furucombo](https://furucombo.app/)：无需编写任何代码即可轻松创建闪电贷款。  
  * [Covalent](https://www.covalenthq.com/)：一个统一的 API，为数十亿区块链数据点带来可见性。

### **路线图**

* [区块链开发者路线图](https://roadmap.sh/blockchain)——成为区块链开发者的路线图。

---

## **贡献**

欢迎贡献！

1. 分叉它（[https://github.com/yjjnls/awesome-blockchain/fork](https://github.com/yjjnls/awesome-blockchain/fork)）  
2. 克隆它（`git clone https://github.com/yjjnls/awesome-blockchain`）  
3. 创建你的功能分支（`git checkout -b your_branch_name`）  
4. 提交更改 ( `git commit -m 'Description of a commit'`)  
5. 推送至分支 ( `git push origin your_branch_name`)  
6. 创建新的 Pull 请求

如果您发现此资源有用，请给它一个🌟，否则请为其做出贡献并给它一个⭐️。  


[image1]:https://github.com/yjjnls/awesome-blockchain/blob/master/Basic/img/blockchain-jesus.png

[image2]:https://github.com/yjjnls/Notes/raw/master/img/ethereum.png

[image3]:https://avatars3.githubusercontent.com/u/43258643?s=200&v=4

[image4]:https://raw.githubusercontent.com/jpmorganchase/quorum/master/logo.png

[image5]:https://avatars3.githubusercontent.com/u/7450663?s=460&v=4

[image6]:https://avatars0.githubusercontent.com/u/20126597?s=200&v=4

[image7]:https://avatars2.githubusercontent.com/u/10536621?s=200&v=4

[image8]:https://raw.githubusercontent.com/petrosDemetrakopoulos/ethairballoons/master/logo_official.png
