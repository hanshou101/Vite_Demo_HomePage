const n=`# \u3010\u4E3B\u8981\u548C\u5B89\u5168\u5F00\u53D1VPN\u6709\u5173\u5427\uFF0C\u548C\u6F0F\u6D1E\u5173\u7CFB\u4E0D\u5927\u3011@ohos.net.vpn (VPN \u7BA1\u7406)zh-cn/application-dev/reference/apis/js-apis-net-vpn.md \xB7 OpenHarmony/docs - Gitee.com

Created: November 22, 2024 8:45 PM
URL: https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 6

- 
    - [\u5BFC\u5165\u6A21\u5757](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#%E5%AF%BC%E5%85%A5%E6%A8%A1%E5%9D%97)
    - [vpn.createVpnConnection](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpncreatevpnconnection)
    - [VpnConnection](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpnconnection)
    - 
        - [setUp](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#setup)
        - [setUp](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#setup-1)
        - [protect](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#protect)
        - [protect](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#protect-1)
        - [destroy](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#destroy)
        - [destroy](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#destroy-1)
    - 
    - 
    - 
    - 
    - 
    - 
    - [VpnConfig](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpnconfig)

VPN \u7BA1\u7406\u6A21\u5757\uFF0C\u652F\u6301 VPN \u7684\u542F\u52A8\u548C\u505C\u6B62\u529F\u80FD\u3002

> 
> 
> 
> **\u8BF4\u660E\uFF1A** \u672C\u6A21\u5757\u9996\u6279\u63A5\u53E3\u4ECE API version 10 \u5F00\u59CB\u652F\u6301\u3002\u540E\u7EED\u7248\u672C\u7684\u65B0\u589E\u63A5\u53E3\uFF0C\u91C7\u7528\u4E0A\u89D2\u6807\u5355\u72EC\u6807\u8BB0\u63A5\u53E3\u7684\u8D77\u59CB\u7248\u672C\u3002
> 

## \u5BFC\u5165\u6A21\u5757

\`\`\`
import vpn from "@ohos.net.vpn";

\`\`\`

## vpn.createVpnConnection

createVpnConnection(context: AbilityContext): VpnConnection

\u521B\u5EFA\u4E00\u4E2A VPN \u8FDE\u63A5\u5BF9\u8C61\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| context | [AbilityContext](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-inner-application-uiAbilityContext.md#uiabilitycontext) | \u662F | \u6307\u5B9A context |

**\u8FD4\u56DE\u503C\uFF1A**

| \u7C7B\u578B | \u8BF4\u660E |
| --- | --- |
| [VpnConnection](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpnconnection) | \u8FD4\u56DE\u4E00\u4E2A VPN \u8FDE\u63A5\u5BF9\u8C61\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |

**\u793A\u4F8B\uFF1A** Stage \u6A21\u578B\u793A\u4F8B\uFF1A

\`\`\`
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  functiontest()
  {
    console.info("vpn createVpnConnection: " + JSON.stringify(this.VpnConnection));
  }
  build() {  }
}

\`\`\`

## VpnConnection

VPN \u8FDE\u63A5\u5BF9\u8C61\u3002\u5728\u8C03\u7528 VpnConnection \u7684\u65B9\u6CD5\u524D\uFF0C\u9700\u8981\u5148\u901A\u8FC7[vpn.createVpnConnection](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpncreatevpnconnection)\u521B\u5EFA VPN \u8FDE\u63A5\u5BF9\u8C61\u3002

### setUp

setUp(config: VpnConfig, callback: AsyncCallback<number>): void

\u4F7F\u7528 config \u521B\u5EFA\u4E00\u4E2A vpn \u7F51\u7EDC\uFF0C\u4F7F\u7528 callback \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| config | [VpnConfig](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpnconfig) | \u662F | \u6307\u5B9A VPN \u7F51\u7EDC\u7684\u914D\u7F6E\u4FE1\u606F\u3002 |
| callback | AsyncCallback<number> | \u662F | \u56DE\u8C03\u51FD\u6570\uFF0C\u5F53\u6210\u529F\u542F\u52A8 VPN \u7F51\u7EDC\u65F6\uFF0C\u8FD4\u56DE\u865A\u62DF\u7F51\u5361\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26 fd, error \u4E3A undefined\uFF0C\u5426\u5219\u4E3A\u9519\u8BEF\u5BF9\u8C61\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |
| 2203001 | VPN creation denied, please check the user type. |
| 2203002 | VPN exist already, please execute destroy first. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  SetUp(): void {
    let config: vpn.VpnConfig = {
      addresses: [{
        address: {
          address: "10.0.0.5",
          family: 1
        },
        prefixLength: 24
      }],
      mtu: 1400,
      dnsAddresses: ["114.114.114.114"]
    }
    this.VpnConnection.setUp(config, (error: BusinessError, data: number) => {
      console.info(JSON.stringify(error));
      console.info("tunfd: " + JSON.stringify(data));
    });
  }
  build() { }
}

\`\`\`

### setUp

setUp(config: VpnConfig): Promise<number>

\u4F7F\u7528 config \u521B\u5EFA\u4E00\u4E2A vpn \u7F51\u7EDC\uFF0C\u4F7F\u7528 Promise \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| config | [VpnConfig](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-vpn.md?skip_mobile=true#vpnconfig) | \u662F | \u6307\u5B9A VPN \u7F51\u7EDC\u7684\u914D\u7F6E\u4FE1\u606F\u3002 |

**\u8FD4\u56DE\u503C\uFF1A**

| \u7C7B\u578B | \u8BF4\u660E |
| --- | --- |
| Promise<number> | \u4EE5 Promise \u5F62\u5F0F\u8FD4\u56DE\u83B7\u53D6\u7ED3\u679C\uFF0C\u8FD4\u56DE\u6307\u5B9A\u865A\u62DF\u7F51\u5361\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26 fd\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |
| 2203001 | VPN creation denied, please check the user type. |
| 2203002 | VPN exist already, please execute destroy first. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  SetUp(): void {
    let config: vpn.VpnConfig = {
      addresses: [{
        address: {
          address: "10.0.0.5",
          family: 1
        },
        prefixLength: 24
      }],
      mtu: 1400,
      dnsAddresses: ["114.114.114.114"]
    }
    this.VpnConnection.setUp(config).then((data: number) => {
      console.info("setUp success, tunfd: " + JSON.stringify(data));
    }).catch((err: BusinessError) => {
      console.info("setUp fail" + JSON.stringify(err));
    });
  }
  build() { }
}

\`\`\`

### protect

protect(socketFd: number, callback: AsyncCallback<void>): void

\u4FDD\u62A4\u5957\u63A5\u5B57\u4E0D\u53D7 VPN \u8FDE\u63A5\u5F71\u54CD\uFF0C\u901A\u8FC7\u8BE5\u5957\u63A5\u5B57\u53D1\u9001\u7684\u6570\u636E\u5C06\u76F4\u63A5\u57FA\u4E8E\u7269\u7406\u7F51\u7EDC\u6536\u53D1\uFF0C\u56E0\u6B64\u5176\u6D41\u91CF\u4E0D\u4F1A\u901A\u8FC7 VPN \u8F6C\u53D1\uFF0C\u4F7F\u7528 callback \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| socketFd | number | \u662F | \u6307\u5B9A\u4FDD\u62A4\u7684 socketfd, \u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u901A\u8FC7[getSocketFd](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-socket.md#getsocketfd10)\u83B7\u53D6\u3002 |
| callback | AsyncCallback<void> | \u662F | \u56DE\u8C03\u51FD\u6570\uFF0C\u6210\u529F\u65F6\uFF0Cerror \u4E3A undefined\uFF0C\u5931\u8D25\u8FD4\u56DE\u9519\u8BEF\u7801\u9519\u8BEF\u4FE1\u606F\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |
| 2203004 | Invalid socket file descriptor. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import socket from "@ohos.net.socket";
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);

  Protect(): void {
    let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
    let ipAddress: socket.NetAddress = {
      address: "0.0.0.0"
    }
    tcp.bind(ipAddress);
    let addressConnect: socket.TCPConnectOptions = {
      address: {
        address: "192.168.1.11",
        port: 8888
      },
      timeout: 6000
    }
    tcp.connect(addressConnect);
    tcp.getSocketFd().then((tunnelfd: number) => {
      console.info("tunenlfd: " + tunnelfd);
      this.VpnConnection.protect(tunnelfd, (error: BusinessError) => {
        console.info(JSON.stringify(error));
      });
    });
  }
  build() { }
}

\`\`\`

### protect

protect(socketFd: number): Promise<void>

\u4FDD\u62A4\u5957\u63A5\u5B57\u4E0D\u53D7 VPN \u8FDE\u63A5\u5F71\u54CD\uFF0C\u901A\u8FC7\u8BE5\u5957\u63A5\u5B57\u53D1\u9001\u7684\u6570\u636E\u5C06\u76F4\u63A5\u57FA\u4E8E\u7269\u7406\u7F51\u7EDC\u6536\u53D1\uFF0C\u56E0\u6B64\u5176\u6D41\u91CF\u4E0D\u4F1A\u901A\u8FC7 VPN \u8F6C\u53D1, \u4F7F\u7528 Promise \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| socketFd | number | \u662F | \u6307\u5B9A\u4FDD\u62A4\u7684 socketfd, \u8BE5\u6587\u4EF6\u63CF\u8FF0\u7B26\u901A\u8FC7[getSocketFd](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-socket.md#getsocketfd10-1)\u83B7\u53D6\u3002 |

**\u8FD4\u56DE\u503C\uFF1A**

| \u7C7B\u578B | \u8BF4\u660E |
| --- | --- |
| Promise<void> | \u4EE5 Promise \u5F62\u5F0F\u8FD4\u56DE\u8BBE\u5B9A\u7ED3\u679C\uFF0C\u5931\u8D25\u8FD4\u56DE\u9519\u8BEF\u7801\u9519\u8BEF\u4FE1\u606F\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |
| 2203004 | Invalid socket file descriptor. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import socket from "@ohos.net.socket";
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);

  Protect(): void {
    let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
    let ipAddress: socket.NetAddress = {
      address: "0.0.0.0"
    }
    tcp.bind(ipAddress);
    let addressConnect: socket.TCPConnectOptions = {
      address: {
        address: "192.168.1.11",
        port: 8888
      },
      timeout: 6000
    }
    tcp.connect(addressConnect);
    tcp.getSocketFd().then((tunnelfd: number) => {
      console.info("tunenlfd: " + tunnelfd);
      this.VpnConnection.protect(tunnelfd).then(() => {
        console.info("protect success.");
      }).catch((err: BusinessError) => {
        console.info("protect fail" + JSON.stringify(err));
      });
    });
  }
  build() { }
}

\`\`\`

### destroy

destroy(callback: AsyncCallback<void>): void

\u9500\u6BC1\u542F\u52A8\u7684 VPN \u7F51\u7EDC\uFF0C\u4F7F\u7528 callback \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u53C2\u6570\uFF1A**

| \u53C2\u6570\u540D | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| callback | AsyncCallback<void> | \u662F | \u56DE\u8C03\u51FD\u6570\uFF0C\u6210\u529F\u65F6\uFF0Cerror \u4E3A undefined\uFF0C\u5931\u8D25\u8FD4\u56DE\u9519\u8BEF\u7801\u9519\u8BEF\u4FE1\u606F\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  Destroy(): void {
    this.VpnConnection.destroy((error: BusinessError) => {
      console.info(JSON.stringify(error));
    });
  }
  build() { }
}

\`\`\`

### destroy

destroy(): Promise<void>

\u9500\u6BC1\u542F\u52A8\u7684 VPN \u7F51\u7EDC\uFF0C\u4F7F\u7528 Promise \u65B9\u5F0F\u4F5C\u4E3A\u5F02\u6B65\u65B9\u6CD5\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u9700\u8981\u6743\u9650**\uFF1Aohos.permission.MANAGE_VPN

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

**\u8FD4\u56DE\u503C\uFF1A**

| \u7C7B\u578B | \u8BF4\u660E |
| --- | --- |
| Promise<void> | \u4EE5 Promise \u5F62\u5F0F\u8FD4\u56DE\u8BBE\u5B9A\u7ED3\u679C\uFF0C\u5931\u8D25\u8FD4\u56DE\u9519\u8BEF\u7801\u9519\u8BEF\u4FE1\u606F\u3002 |

**\u9519\u8BEF\u7801\uFF1A**

\u4EE5\u4E0B\u9519\u8BEF\u7801\u7684\u8BE6\u7EC6\u4ECB\u7ECD\u53C2\u89C1[VPN \u9519\u8BEF\u7801](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/errorcodes/errorcode-net-vpn.md)\u3002

| \u9519\u8BEF\u7801 ID | \u9519\u8BEF\u4FE1\u606F |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2200002 | Operation failed. Cannot connect to service. |
| 2200003 | System internal error. |

**\u793A\u4F8B\uFF1A**

\`\`\`
import vpn from '@ohos.net.vpn';
import common from '@ohos.app.ability.common';
import { BusinessError } from "@ohos.base";

@Entry
@Component
struct Index {
  private context = getContext(this) as common.UIAbilityContext;
  private VpnConnection: vpn.VpnConnection = vpn.createVpnConnection(this.context);
  Destroy(): void {
    this.VpnConnection.destroy().then(() => {
      console.info("destroy success.");
    }).catch((err: BusinessError) => {
      console.info("destroy fail" + JSON.stringify(err));
    });
  }
  build() { }
}

\`\`\`

## VpnConfig

VPN \u914D\u7F6E\u53C2\u6570\u3002

**\u7CFB\u7EDF\u63A5\u53E3**\uFF1A\u6B64\u63A5\u53E3\u4E3A\u7CFB\u7EDF\u63A5\u53E3\u3002

**\u7CFB\u7EDF\u80FD\u529B**\uFF1ASystemCapability.Communication.NetManager.Vpn

| \u540D\u79F0 | \u7C7B\u578B | \u5FC5\u586B | \u8BF4\u660E |
| --- | --- | --- | --- |
| addresses | Array<[LinkAddress](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-connection.md#linkaddress8)> | \u662F | VPN \u865A\u62DF\u7F51\u5361\u7684 IP \u5730\u5740\u3002 |
| routes | Array<[RouteInfo](https://gitee.com/openharmony/docs/blob/ab5c0b38f71a5b3f1b253347333dea8f36b4d707/zh-cn/application-dev/reference/apis/js-apis-net-connection.md#routeinfo8)> | \u5426 | VPN \u865A\u62DF\u7F51\u5361\u7684\u8DEF\u7531\u4FE1\u606F\u3002 |
| dnsAddresses | Array<string> | \u5426 | DNS \u670D\u52A1\u5668\u5730\u5740\u4FE1\u606F\u3002 |
| searchDomains | Array<string> | \u5426 | DNS \u7684\u641C\u7D22\u57DF\u5217\u8868\u3002 |
| mtu | number | \u5426 | \u6700\u5927\u4F20\u8F93\u5355\u5143 MTU \u503C(\u5355\u4F4D:\u5B57\u8282)\u3002 |
| isIPv4Accepted | boolean | \u5426 | \u662F\u5426\u652F\u6301 IPV4, \u9ED8\u8BA4\u503C\u4E3A true\u3002 |
| isIPv6Accepted | boolean | \u5426 | \u662F\u5426\u652F\u6301 IPV6, \u9ED8\u8BA4\u503C\u4E3A flase\u3002 |
| isLegacy | boolean | \u5426 | \u662F\u5426\u652F\u6301\u5185\u7F6E VPN, \u9ED8\u8BA4\u503C\u4E3A flase\u3002 |
| isBlocking | boolean | \u5426 | \u662F\u5426\u963B\u585E\u6A21\u5F0F, \u9ED8\u8BA4\u503C\u4E3A flase\u3002 |
| trustedApplications | Array<string> | \u5426 | \u767D\u540D\u5355\u4FE1\u606F, string \u7C7B\u578B\u8868\u793A\u7684\u5305\u540D\u3002 |
| blockedApplications | Array<string> | \u5426 | \u9ED1\u540D\u5355\u4FE1\u606F, string \u7C7B\u578B\u8868\u793A\u7684\u5305\u540D\u3002 |`;export{n as _};
