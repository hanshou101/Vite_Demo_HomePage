const e=`# \u3010\u6709\u4E00\u70B9\u7528\uFF0C\u4E0D\u8FC7\u662F\u6B63\u5411\u5206\u6790\u3002\u800C\u4E14\u8F83\u6563\u8F83\u7410\u788E\uFF0C\u6CA1\u6709\u7A81\u51FA\u91CD\u70B9\u3011\u3010\u8FDE\u8F7D\u3011\u7EAF\u9E3F\u8499\u5E94\u7528\u5B89\u5168\u5F00\u53D1\u6307\u5357-\u516C\u5171\u4E8B\u4EF6\u5B89\u5168\u5F00\u53D1 | \u957F\u4EAD\u767E\u5DDD\u4E91

Created: November 22, 2024 10:11 PM
URL: https://rivers.chaitin.cn/blog/cq952ap0lnechd244jgg
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u9E3F\u8499HarmonyOS
\u8BC4\u5206: 7

\u8FD9\u662F\u672C\u7CFB\u5217\u7684\u7B2C\u4E94\u7BC7\u6587\u7AE0\uFF0C\u7B14\u8005\u5E26\u7740\u5BF9OpenHarmony\u7EC4\u4EF6\u516C\u5171\u4E8B\u4EF6\u5F00\u53D1\u7684\u5B89\u5168\u98CE\u9669\u7684\u4E00\u4E9B\u6D45\u89C1\uFF0C\u4E0E\u5404\u4F4D\u5206\u4EAB\u3002\u968F\u7740HarmonyOS NEXT\u8D8A\u6765\u8D8A\u8FD1\uFF0C\u5E0C\u671B\u80FD\u901A\u8FC7\u672C\u7CFB\u5217\u6587\u7AE0\u4E3A\u7EAF\u9E3F\u8499\u5E94\u7528\u7684\u5F00\u53D1\u8005\u6216\u8005\u51C6\u5F00\u53D1\u8005\u4EEC\u5E26\u6765\u4E00\u4E1D\u4E1D\u5B89\u5168\u4E0A\u7684\u5EFA\u8BAE

## \u4E00. \u516C\u5171\u4E8B\u4EF6\u7B80\u4ECB

\`Openharmony\`\u516C\u5171\u4E8B\u4EF6\u670D\u52A1 CES\uFF08Common Event Service\uFF09\u63D0\u4F9B\u4E86\u4E00\u5BF9\u591A\u7684\u901A\u4FE1\u573A\u666F\uFF0C\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u8BA2\u9605\u3001\u53D1\u5E03\u3001\u9000\u8BA2\u516C\u5171\u4E8B\u4EF6\u7684\u80FD\u529B\u3002\u516C\u5171\u4E8B\u4EF6\u4ECE\u7CFB\u7EDF\u89D2\u5EA6\u53EF\u5206\u4E3A\uFF1A\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u548C\u81EA\u5B9A\u4E49\u516C\u5171\u4E8B\u4EF6

- 
    - \u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\uFF1A\`CES\`\u5185\u90E8\u5B9A\u4E49\u7684\u516C\u5171\u4E8B\u4EF6\uFF0C\u53EA\u6709\u7CFB\u7EDF\u5E94\u7528\u548C\u7CFB\u7EDF\u670D\u52A1\u624D\u80FD\u53D1\u5E03\uFF0C\u4F8B\u5982HAP\u5B89\u88C5\uFF0C\u66F4\u65B0\uFF0C\u5378\u8F7D\u7B49\u516C\u5171\u4E8B\u4EF6\u3002\u76EE\u524D\u652F\u6301\u7684\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u8BE6\u89C1\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u5B9A\u4E49\u3002
- 
    - \u81EA\u5B9A\u4E49\u516C\u5171\u4E8B\u4EF6\uFF1A\u5E94\u7528\u81EA\u5B9A\u4E49\u4E00\u4E9B\u516C\u5171\u4E8B\u4EF6\u7528\u6765\u5B9E\u73B0\u8DE8\u8FDB\u7A0B\u7684\u4E8B\u4EF6\u901A\u4FE1\u80FD\u529B\u3002

\u516C\u5171\u4E8B\u4EF6\u6309\u53D1\u9001\u65B9\u5F0F\u53EF\u5206\u4E3A\uFF1A**\u65E0\u5E8F\u516C\u5171\u4E8B\u4EF6**\u3001**\u6709\u5E8F\u516C\u5171\u4E8B\u4EF6**\u548C**\u7C98\u6027\u516C\u5171\u4E8B\u4EF6**

- 
    - **\u65E0\u5E8F\u516C\u5171\u4E8B\u4EF6\uFF1A**\`CES\`\u8F6C\u53D1\u516C\u5171\u4E8B\u4EF6\u65F6\uFF0C\u4E0D\u8003\u8651\u8BA2\u9605\u8005\u662F\u5426\u63A5\u6536\u5230\uFF0C\u4E14\u8BA2\u9605\u8005\u63A5\u6536\u5230\u7684\u987A\u5E8F\u4E0E\u5176\u8BA2\u9605\u987A\u5E8F\u65E0\u5173\u3002
- 
    - **\u6709\u5E8F\u516C\u5171\u4E8B\u4EF6\uFF1A**\`CES\`\u8F6C\u53D1\u516C\u5171\u4E8B\u4EF6\u65F6\uFF0C\u6839\u636E\u8BA2\u9605\u8005\u8BBE\u7F6E\u7684\u4F18\u5148\u7EA7\u7B49\u7EA7\uFF0C\u4F18\u5148\u5C06\u516C\u5171\u4E8B\u4EF6\u53D1\u9001\u7ED9\u4F18\u5148\u7EA7\u8F83\u9AD8\u7684\u8BA2\u9605\u8005\uFF0C\u7B49\u5F85\u5176\u6210\u529F\u63A5\u6536\u8BE5\u516C\u5171\u4E8B\u4EF6\u4E4B\u540E\u518D\u5C06\u4E8B\u4EF6\u53D1\u9001\u7ED9\u4F18\u5148\u7EA7\u8F83\u4F4E\u7684\u8BA2\u9605\u8005\u3002\u5982\u679C\u6709\u591A\u4E2A\u8BA2\u9605\u8005\u5177\u6709\u76F8\u540C\u7684\u4F18\u5148\u7EA7\uFF0C\u5219\u4ED6\u4EEC\u5C06\u968F\u673A\u63A5\u6536\u5230\u516C\u5171\u4E8B\u4EF6\u3002
- 
    - **\u7C98\u6027\u516C\u5171\u4E8B\u4EF6\uFF1A**\u80FD\u591F\u8BA9\u8BA2\u9605\u8005\u6536\u5230\u5728\u8BA2\u9605\u524D\u5DF2\u7ECF\u53D1\u9001\u7684\u516C\u5171\u4E8B\u4EF6\u5C31\u662F\u7C98\u6027\u516C\u5171\u4E8B\u4EF6\u3002\u666E\u901A\u7684\u516C\u5171\u4E8B\u4EF6\u53EA\u80FD\u5728\u8BA2\u9605\u540E\u53D1\u9001\u624D\u80FD\u6536\u5230\uFF0C\u800C\u7C98\u6027\u516C\u5171\u4E8B\u4EF6\u7684\u7279\u6B8A\u6027\u5C31\u662F\u53EF\u4EE5\u5148\u53D1\u9001\u540E\u8BA2\u9605\u3002\u53D1\u9001\u7C98\u6027\u4E8B\u4EF6\u5FC5\u987B\u662F\u7CFB\u7EDF\u5E94\u7528\u6216\u7CFB\u7EDF\u670D\u52A1\uFF0C\u4E14\u9700\u8981\u7533\u8BF7\`ohos.permission.COMMONEVENT_STICKY\`\u6743\u9650\uFF0C\u914D\u7F6E\u65B9\u5F0F\u8BF7\u53C2\u9605\u8BBF\u95EE\u63A7\u5236\u6388\u6743\u7533\u8BF7\u6307\u5BFC\u3002

\u6BCF\u4E2A\u5E94\u7528\u90FD\u53EF\u4EE5\u6309\u9700\u8BA2\u9605\u516C\u5171\u4E8B\u4EF6\uFF0C\u8BA2\u9605\u6210\u529F\uFF0C\u5F53\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5C06\u5176\u53D1\u9001\u7ED9\u5BF9\u5E94\u7684\u5E94\u7528\u3002\u8FD9\u4E9B\u516C\u5171\u4E8B\u4EF6\u53EF\u80FD\u6765\u81EA\u7CFB\u7EDF\u3001\u5176\u4ED6\u5E94\u7528\u548C\u5E94\u7528\u81EA\u8EAB\u3002

> 
> 
> 
> **\u56FE1** \u516C\u5171\u4E8B\u4EF6\u793A\u610F\u56FE
> 

## \u4E8C. \u516C\u5171\u4E8B\u4EF6\u8BA2\u9605/\u53D1\u5E03\u5E94\u7528\u5F00\u53D1

## \u516C\u5171\u4E8B\u4EF6\u53D1\u5E03

\u5F53\u9700\u8981\u53D1\u5E03\u67D0\u4E2A\u81EA\u5B9A\u4E49\u516C\u5171\u4E8B\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7publish()\u65B9\u6CD5\u53D1\u5E03\u4E8B\u4EF6\u3002\u53D1\u5E03\u7684\u516C\u5171\u4E8B\u4EF6\u53EF\u4EE5\u643A\u5E26\u6570\u636E\uFF0C\u4F9B\u8BA2\u9605\u8005\u89E3\u6790\u5E76\u8FDB\u884C\u4E0B\u4E00\u6B65\u5904\u7406\u3002

- 
    - **\u53D1\u5E03\u516C\u5171\u4E8B\u4EF6\u63A5\u53E3**
    
    **\u63A5\u53E3\u540D**
    
    **\u63A5\u53E3\u63CF\u8FF0**
    
    publish(event: string, callback: AsyncCallback)
    
    \u53D1\u5E03\u516C\u5171\u4E8B\u4EF6\u3002
    
    publish(event: string, options: CommonEventPublishData, callback: AsyncCallback)
    
    \u6307\u5B9A\u53D1\u5E03\u4FE1\u606F\u5E76\u53D1\u5E03\u516C\u5171\u4E8B\u4EF6\u3002
    
    **\u53C2\u6570\u540D**
    
    **\u7C7B\u578B**
    
    event
    
    string
    
    options
    
    CommonEventPublishData
    
    callback
    
    syncCallback
    
- 
    - **CommonEventPublishData\u7C7B\u578B\u8BF4\u660E**
    
    **\u540D\u79F0**
    
    **\u8BFB\u5199\u5C5E\u6027**
    
    **\u7C7B\u578B**
    
    **\u63CF\u8FF0**
    
    bundleName
    
    \u53EA\u8BFB
    
    string
    
    \u8868\u793A\u5305\u540D\u79F0
    
    code
    
    \u53EA\u8BFB
    
    int
    
    \u8868\u793A\u516C\u5171\u4E8B\u4EF6\u7684\u7ED3\u679C\u4EE3\u7801
    
    data
    
    \u53EA\u8BFB
    
    string
    
    \u8868\u793A\u516C\u5171\u4E8B\u4EF6\u7684\u81EA\u5B9A\u4E49\u7ED3\u679C\u6570\u636E
    
    subscriberPermissions
    
    \u53EA\u8BFB
    
    Array
    
    \u8868\u793A\u8BA2\u9605\u8005\u6240\u9700\u7684\u6743\u9650
    
    isOrdered
    
    \u53EA\u8BFB
    
    bool
    
    \u8868\u793A\u662F\u5426\u662F\u6709\u5E8F\u516C\u5171\u4E8B\u4EF6
    

\u793A\u4F8B\u5982\u4E0B

\`\`\`
\`\`//\xA0\u516C\u5171\u4E8B\u4EF6\u76F8\u5173\u4FE1\u606F   var\xA0options\xA0={   \xA0 code:2,//\xA0\u516C\u5171\u4E8B\u4EF6\u7684\u521D\u59CB\u4EE3\u7801   \xA0 data:"client\xA0data",//\xA0\u516C\u5171\u4E8B\u4EF6\u7684\u521D\u59CB\u6570\u636E   }      //\xA0\u53D1\u5E03\u516C\u5171\u4E8B\u4EF6   commonEventManager.publish("event",\xA0options,(err)\xA0=>{   \xA0 if(err.code){   \xA0 \xA0 Logger.error(TAG,\`[CommonEvent]PublishCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0}else{   \xA0 Logger.info(TAG,"[CommonEvent]Publish2")   \xA0 }   })\`\`

\`\`\`

\u82E5\u53D1\u5E03\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u4F1A\u5728\u5982\u4E0B\u51FD\u6570\u4E2D\u8FDB\u884C\u6821\u9A8C\uFF0C\u8BE5\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u5168\u90E8\u7684\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6

\`\`\`
\`//\xA0xref/base/notification/common_event_service/frameworks/native/src/common_event_support.cpp#2735   bool\xA0CommonEventSupport::IsSystemEvent(std::string\xA0&str)   {   \xA0 \xA0 EVENT_LOGD("enter");   \xA0\xA0\xA0\xA0std::vector<std::string>::iterator\xA0iter\xA0=find(commonEventSupport_.begin(),\xA0commonEventSupport_.end(),\xA0str);   \xA0\xA0\xA0\xA0if(iter\xA0!=\xA0commonEventSupport_.end()){   \xA0\xA0\xA0\xA0\xA0 returntrue;   \xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0returnfalse;   }\`

\`\`\`

\u6821\u9A8C\u4E3A\u7CFB\u7EDF\u4E8B\u4EF6\u540E\uFF0CCheck \u5F53\u524D\u5E94\u7528

- 
    - \u662F\u5426\u4E3A\u5B50\u7CFB\u7EDF\u5E94\u7528\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u6846\u67B6\u5C42\u7684 native \u8FDB\u7A0B\uFF0C\u901A\u8FC7 callerToken \u6821\u9A8C\u662F\u5426\u4E3A Subsystem \u5E94\u7528\uFF1B
- 
    - \u901A\u8FC7 uid \u83B7\u53D6\u5E94\u7528\u7CFB\u7EDF\u662F\u5426\u4E3A\u7CFB\u7EDF\u5E94\u7528\uFF0C\u901A\u8FC7\u5E94\u7528\u6388\u6743\u914D\u7F6E\u6587\u4EF6 HarmonyAppProvision \u4E2D app-feature \u662F\u5426\u4E3A hos_system_app
- 
    - \u662F\u5426\u4E3A CEM \u8C03\u8BD5\u5DE5\u5177\u53D1\u9001\u7684\u516C\u5171\u4E8B\u4EF6\uFF0C\u6821\u9A8C callerToken \u662F\u5426\u4E3A shellToken\uFF0C\u5E76\u4E14\u5177\u5907 PUBLISH_SYSTEM_COMMON_EVENT \u6743\u9650\uFF0C\u8BE5\u6743\u9650\u4E3A SYSTEM_BASIC \u6743\u9650

\`\`\`
\`//\xA0xref/base/notification/common_event_service/services/src/inner_common_event_manager.cpp#378   bool\xA0InnerCommonEventManager::CheckUserId(const\xA0pid_t\xA0&pid,\xA0const\xA0uid_t\xA0&uid,   \xA0\xA0\xA0\xA0const\xA0Security::AccessToken::AccessTokenID\xA0&callerToken,\xA0EventComeFrom\xA0&comeFrom,\xA0int32_t\xA0&userId)   {   \xA0 \xA0 HITRACE_METER_NAME(HITRACE_TAG_NOTIFICATION,\xA0__PRETTY_FUNCTION__);   \xA0\xA0\xA0\xA0EVENT_LOGD("enter");      \xA0\xA0\xA0\xA0if(userId\xA0<\xA0UNDEFINED_USER){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGE("Invalid\xA0User\xA0ID\xA0%{public}d",\xA0userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0returnfalse;   \xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0comeFrom.isSubsystem\xA0=AccessTokenHelper::VerifyNativeToken(callerToken);   \xA0\xA0\xA0\xA0if(!comeFrom.isSubsystem\xA0||\xA0supportCheckSaPermission_.compare("true")==0){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0comeFrom.isSystemApp\xA0=DelayedSingleton<BundleManagerHelper>::GetInstance()->CheckIsSystemAppByUid(uid);   \xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0comeFrom.isProxy\xA0=\xA0pid\xA0==\xA0UNDEFINED_PID;   \xA0\xA0\xA0\xA0if((comeFrom.isSystemApp\xA0||\xA0comeFrom.isSubsystem\xA0||\xA0comeFrom.isCemShell)&&!comeFrom.isProxy){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(userId\xA0==\xA0CURRENT_USER){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0DelayedSingleton<OsAccountManagerHelper>::GetInstance()->GetOsAccountLocalIdFromUid(uid,\xA0userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}elseif(userId\xA0==\xA0UNDEFINED_USER){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0userId\xA0=\xA0ALL_USER;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(userId\xA0==\xA0UNDEFINED_USER){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0DelayedSingleton<OsAccountManagerHelper>::GetInstance()->GetOsAccountLocalIdFromUid(uid,\xA0userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGE("No\xA0permission\xA0to\xA0subscribe\xA0or\xA0send\xA0a\xA0common\xA0event\xA0to\xA0another\xA0user\xA0from\xA0uid\xA0=\xA0%{public}d",\xA0uid);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0returnfalse;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0returntrue;   }      //\xA0\u6821\u9A8C\u662F\u5426\u4E3A\u7CFB\u7EDF\u5E94\u7528\u6743\u9650   if(isSystemEvent){   \xA0\xA0\xA0\xA0EVENT_LOGD("System\xA0common\xA0event");   \xA0\xA0\xA0\xA0if(!comeFrom.isSystemApp\xA0&&!comeFrom.isSubsystem\xA0&&!comeFrom.isCemShell){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGE(   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"No\xA0permission\xA0to\xA0send\xA0a\xA0system\xA0common\xA0event\xA0from\xA0%{public}s(pid\xA0=\xA0%{public}d,\xA0uid\xA0=\xA0%{public}d)"   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",\xA0userId\xA0=\xA0%{public}d",\xA0bundleName.c_str(),\xA0pid,\xA0uid,\xA0userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendPublishHiSysEvent(user,\xA0bundleName,\xA0pid,\xA0uid,\xA0data.GetWant().GetAction(),false);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0returnfalse;   \xA0\xA0\xA0\xA0}   }\`

\`\`\`

## \u516C\u5171\u4E8B\u4EF6\u8BA2\u9605

### \u52A8\u6001\u8BA2\u9605

\u52A8\u6001\u8BA2\u9605\u662F\u6307\u5F53\u5E94\u7528\u5728\u8FD0\u884C\u72B6\u6001\u65F6\u5BF9\u67D0\u4E2A\u516C\u5171\u4E8B\u4EF6\u8FDB\u884C\u8BA2\u9605\uFF0C\u5728\u8FD0\u884C\u671F\u95F4\u5982\u679C\u6709\u8BA2\u9605\u7684\u4E8B\u4EF6\u53D1\u5E03\uFF0C\u90A3\u4E48\u8BA2\u9605\u4E86\u8FD9\u4E2A\u4E8B\u4EF6\u7684\u5E94\u7528\u5C06\u4F1A\u6536\u5230\u8BE5\u4E8B\u4EF6\u53CA\u5176\u4F20\u9012\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u67D0\u5E94\u7528\u5E0C\u671B\u5728\u5176\u8FD0\u884C\u671F\u95F4\u6536\u5230\u7535\u91CF\u8FC7\u4F4E\u7684\u4E8B\u4EF6\uFF0C\u5E76\u6839\u636E\u8BE5\u4E8B\u4EF6\u964D\u4F4E\u5176\u8FD0\u884C\u529F\u8017\uFF0C\u90A3\u4E48\u8BE5\u5E94\u7528\u4FBF\u53EF\u52A8\u6001\u8BA2\u9605\u7535\u91CF\u8FC7\u4F4E\u4E8B\u4EF6\uFF0C\u6536\u5230\u8BE5\u4E8B\u4EF6\u540E\u5173\u95ED\u4E00\u4E9B\u975E\u5FC5\u8981\u7684\u4EFB\u52A1\u6765\u964D\u4F4E\u529F\u8017\u3002\u8BA2\u9605\u90E8\u5206\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u9700\u8981\u5148\u7533\u8BF7\u6743\u9650\uFF0C\u8BA2\u9605\u8FD9\u4E9B\u4E8B\u4EF6\u6240\u9700\u8981\u7684\u6743\u9650\u8BF7\u89C1\u516C\u5171\u4E8B\u4EF6\u6743\u9650\u5217\u8868\u3002

- 
    - **\u8BA2\u9605\u516C\u5171\u4E8B\u4EF6\u63A5\u53E3**
    
    **\u63A5\u53E3\u540D**
    
    **\u63A5\u53E3\u63CF\u8FF0**
    
    createSubscriber(subscribeInfo: CommonEventSubscribeInfo, callback: AsyncCallback<CommonEventData>): void
    
    \u521B\u5EFA\u8BA2\u9605\u8005\u5BF9\u8C61(callback)
    
    createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise
    
    \u521B\u5EFA\u8BA2\u9605\u8005\u5BF9\u8C61(promise)
    
    subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback): void
    
    \u8BA2\u9605\u516C\u5171\u4E8B\u4EF6
    
- 
    - **\u53D6\u6D88\u8BA2\u9605**
    
    **\u63A5\u53E3\u540D**
    
    **\u63A5\u53E3\u63CF\u8FF0**
    
    unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback)
    
    \u53D6\u6D88\u8BA2\u9605\u516C\u5171\u4E8B\u4EF6
    

\u52A8\u6001\u8BA2\u9605\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B

\`\`\`
\`\`//\xA0\u8BA2\u9605\u8005\u4FE1\u606F   var\xA0subscribeInfo\xA0={   \xA0\xA0\xA0\xA0events:["event"],//\xA0\u8BA2\u9605event\u4E8B\u4EF6   }   //\xA0\u521B\u5EFA\u8BA2\u9605\u8005   commonEventManager.createSubscriber(subscribeInfo,(err,\xA0subscriber)\xA0=>{   \xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`[commonEventManager]CreateSubscriberCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.log(TAG,"[commonEventManager]CreateSubscriber")   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.subscriber=\xA0subscriber   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.result="Create\xA0subscriber\xA0succeed"   \xA0\xA0\xA0\xA0}   })   if(this.subscriber!=null){   \xA0\xA0commonEventManager.subscribe(this.subscriber,(err,\xA0data)\xA0=>{   \xA0\xA0\xA0\xA0let\xA0callerUid\xA0=\xA0rpc.IPCSkeleton.getCallingUid();   \xA0\xA0\xA0\xA0Logger.info(TAG,\`[commonEventManager]SubscribeCallBack\xA0data=\xA0=\xA0\${callerUid}\`);   \xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`[commonEventManager]SubscribeCallBack\xA0err=\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.info(TAG,\`[commonEventManager]SubscribeCallBack\xA0data=\xA0=\xA0\${JSON.stringify(data)}\`)   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.result=\`receive\xA0=\xA0\${callerUid},\xA0event\xA0=\xA0\${data.event}\xA0,\xA0data\xA0=\xA0\${data.data},\xA0code\xA0=\xA0\${data.code}\`   \xA0\xA0\xA0\xA0}   })      //\xA0\u53D6\u6D88\u8BA2\u9605\u8005   //\xA0subscriber\u4E3A\u8BA2\u9605\u4E8B\u4EF6\u65F6\u521B\u5EFA\u7684\u8BA2\u9605\u8005\u5BF9\u8C61   if(subscriber\xA0!==null){   \xA0\xA0\xA0\xA0commonEventManager.unsubscribe(subscriber,(err)\xA0=>{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(err){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0console.error(\`[CommonEvent]\xA0UnsubscribeCallBack\xA0err=\${JSON.stringify(err)}\`);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0console.info(\`[CommonEvent]\xA0Unsubscribe\`);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriber\xA0=null   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0})   }\`\`

\`\`\`

### \u9759\u6001\u8BA2\u9605

\u4EC5\u5BF9\u7CFB\u7EDF\u5E94\u7528\u5F00\u653E\uFF0C\u9759\u6001\u8BA2\u9605\u8005\u5728\u672A\u63A5\u6536\u8BA2\u9605\u7684\u76EE\u6807\u4E8B\u4EF6\u65F6\uFF0C\u5904\u4E8E\u672A\u62C9\u8D77\u72B6\u6001\u3002\u5F53\u7CFB\u7EDF\u6216\u5E94\u7528\u53D1\u5E03\u4E86\u6307\u5B9A\u7684\u516C\u5171\u4E8B\u4EF6\u540E\uFF0C\u9759\u6001\u8BA2\u9605\u8005\u5C06\u88AB\u62C9\u8D77\uFF0C\u5E76\u6267\u884C\`onReceiveEvent\`\u56DE\u8C03\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u5728\`onReceiveEvent\`\u56DE\u8C03\u4E2D\u6267\u884C\u4E1A\u52A1\u903B\u8F91\uFF0C\u5B9E\u73B0\u5F53\u5E94\u7528\u63A5\u6536\u5230\u7279\u5B9A\u516C\u5171\u4E8B\u4EF6\u65F6\u6267\u884C\u4E1A\u52A1\u903B\u8F91\u7684\u76EE\u7684\u3002\u4F8B\u5982\uFF0C\u5E94\u7528\u5E0C\u671B\u5728\u8BBE\u5907\u5F00\u673A\u65F6\u6267\u884C\u4E00\u4E9B\u521D\u59CB\u5316\u4EFB\u52A1\uFF0C\u90A3\u4E48\u8BE5\u5E94\u7528\u53EF\u4EE5\u9759\u6001\u8BA2\u9605\u5F00\u673A\u4E8B\u4EF6\uFF0C\u5728\u6536\u5230\u5F00\u673A\u4E8B\u4EF6\u540E\u4F1A\u62C9\u8D77\u8BE5\u5E94\u7528\uFF0C\u7136\u540E\u6267\u884C\u521D\u59CB\u5316\u4EFB\u52A1\u3002\u9759\u6001\u8BA2\u9605\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u58F0\u660E\u548C\u5B9E\u73B0\u7EE7\u627F\u81EA\`StaticSubscriberExtensionAbility\`\u7684\u7C7B\u5B9E\u73B0\u5BF9\u516C\u5171\u4E8B\u4EF6\u7684\u8BA2\u9605\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9759\u6001\u8BA2\u9605\u516C\u5171\u4E8B\u4EF6\u5BF9\u7CFB\u7EDF\u529F\u8017\u6709\u4E00\u5B9A\u5F71\u54CD\uFF0C\u5EFA\u8BAE\u8C28\u614E\u4F7F\u7528\u3002\u9759\u6001\u8BA2\u9605\u9700\u8981\u5728\`module.json5\`\u4E2D\u914D\u7F6E\u8BA2\u9605\u8005\u4FE1\u606F

\`\`\`
{
"module":{
\xA0\xA0\xA0\xA0"extensionAbilities":[
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0{
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"name":"StaticSubscriber",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0\u8868\u793AExtensionAbility\u7684\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"srcEntry":"./ets/staticsubscriber/StaticSubscriber.ts",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"description":"$string:StaticSubscriber_desc",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"icon":"$media:icon",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"label":"$string:StaticSubscriber_label",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0\u9759\u6001\u8BA2\u9605\u9700\u8981\u58F0\u660E\xA0staticSubscriber
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"type":"staticSubscriber",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"exported":true,
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0ExtensionAbility\u7684\u4E8C\u7EA7\u914D\u7F6E\u6587\u4EF6\u4FE1\u606F
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"metadata":[
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0{
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 \xA0 //\xA0\u5BF9\u4E8E\u9759\u6001\u8BA2\u9605\u7C7B\u578B\uFF0Cname\u5FC5\u987B\u58F0\u660E\u4E3Aohos.extension.staticSubscriber
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"name":"ohos.extension.staticSubscriber",
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"resource":"$profile:subscribe"
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}]
\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}
\xA0\xA0\xA0\xA0]
\xA0 }
}

//\xA0metadata\xA0\u4E8C\u7EA7\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E
{
\xA0\xA0\xA0\xA0"commonEvents":[
\xA0\xA0\xA0\xA0{
\xA0\xA0\xA0\xA0\xA0 \xA0 //\xA0\u9759\u6001\u8BA2\u9605ExtensionAbility\u7684\u540D\u79F0\uFF0C\u9700\u8981\u548Cmodule.json5\u4E2D\u58F0\u660E\u7684ExtensionAbility\u7684name\u4E00\u81F4\u3002
\xA0\xA0\xA0\xA0\xA0 \xA0"name":"xxx",
\xA0\xA0\xA0\xA0\xA0 \xA0//\xA0\u8BA2\u9605\u8005\u8981\u6C42\u7684\u53D1\u5E03\u8005\u9700\u8981\u5177\u5907\u7684\u6743\u9650\uFF0C\u5BF9\u4E8E\u53D1\u5E03\u4E86\u76EE\u6807\u4E8B\u4EF6\u4F46\u4E0D\u5177\u5907permission\u4E2D\u58F0\u660E\u7684\u6743\u9650\u7684\u53D1\u5E03\u8005\u5C06\u88AB\u89C6\u4E3A\u975E\u6CD5\u4E8B\u4EF6\u4E0D\u4E88\u5904\u7406\u3002
\xA0\xA0\xA0\xA0\xA0 \xA0"permission":"xxx",
\xA0\xA0\xA0\xA0\xA0 \xA0//\xA0\u8BA2\u9605\u7684\u76EE\u6807\u4E8B\u4EF6\u5217\u8868\u3002
\xA0\xA0\xA0\xA0\xA0 \xA0"events":[
\xA0\xA0\xA0\xA0\xA0 \xA0 \xA0 \xA0"xxx"
\xA0\xA0\xA0\xA0\xA0 \xA0]
\xA0\xA0\xA0\xA0}]
}

\`\`\`

\u8FD8\u9700\u8981\u4FEE\u6539\u8BBE\u5907\u7684\u9884\u914D\u7F6E\u6587\u4EF6\`/system/etc/app/install_list_capability.json\`\uFF0C\u8BBE\u5907\u5F00\u673A\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u8BE5\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u5E94\u7528\u5B89\u88C5\u4F1A\u5BF9\u5728\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684\`allowCommonEvent\`\u516C\u5171\u4E8B\u4EF6\u7C7B\u578B\u8FDB\u884C\u6388\u6743\u3002\u9884\u6388\u6743\u914D\u7F6E\u6587\u4EF6\u5B57\u6BB5\u5185\u5BB9\u5305\u62EC\`bundleName\`\u3001\`app_signature\`\u548C\`allowCommonEvent\`\uFF08\u5F53\u524D\u4EC5\u652F\u6301\u9884\u7F6E\u5E94\u7528\u914D\u7F6E\u8BE5\u6587\u4EF6\uFF09

- 
    - bundleName\u5B57\u6BB5\u914D\u7F6E\u4E3A\u5E94\u7528\u7684Bundle\u540D\u79F0\u3002
- 
    - app_signature\u5B57\u6BB5\u914D\u7F6E\u4E3A\u5E94\u7528\u7684\u6307\u7EB9\u4FE1\u606F\u3002\u6307\u7EB9\u4FE1\u606F\u7684\u914D\u7F6E\u8BF7\u53C2\u89C1\u5E94\u7528\u7279\u6743\u914D\u7F6E\u6307\u5357\u3002
- 
    - allowCommonEvent\u5B57\u6BB5\u914D\u7F6E\u4E3A\u5141\u8BB8\u9759\u6001\u5E7F\u64AD\u62C9\u8D77\u7684\u516C\u5171\u4E8B\u4EF6\u9879\u3002

## \u4E09. \u5E94\u7528\u5F00\u53D1\u5B89\u5168\u98CE\u9669\u5206\u6790

\u516C\u5171\u4E8B\u4EF6\u4F5C\u4E3A\u8FDB\u7A0B\u95F4\u901A\u4FE1\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u5176\u5B89\u5168\u8FB9\u754C\u5C31\u843D\u5728\u4E86\u8FDB\u7A0B\u95F4\u901A\u4FE1\u7684\u63A5\u53E3\u4E0A\u3002\u5BF9\u4E8E\u8BA2\u9605\u8005\u800C\u8A00\uFF0C\u6211\u4EEC\u9700\u8981\u8003\u8651\u53EF\u80FD\u5B58\u5728\u7684\u98CE\u9669\uFF1A

- 
    - \u662F\u5426\u9700\u8981\u63A5\u6536\u5E76\u5904\u7406\u4EFB\u610F\u5E94\u7528\u7684\u516C\u5171\u4E8B\u4EF6\u6D88\u606F\uFF0C\u662F\u5426\u53EF\u80FD\u5BFC\u81F4\u8BA2\u9605\u8005\u7684\u63A5\u53E3\u529F\u80FD\u88AB\u6EE5\u7528
- 
    - \u516C\u5171\u4E8B\u4EF6\u7684\u5904\u7406\u4E2D\u662F\u5426\u5B58\u5728\u4E00\u4E9B\u903B\u8F91\u4E0A\u7684\u95EE\u9898\uFF0C\u9700\u8981\u5BF9\u5916\u90E8\u4E8B\u4EF6\u6570\u636E\u505A\u4E25\u683C\u7684\u6821\u9A8C

\u5BF9\u4E8E\u53D1\u9001\u65B9\u800C\u8A00\uFF1A

- 
    - \u662F\u5426\u6709\u5FC5\u8981\u5C06\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u7ED9\u4EFB\u610F\u5E94\u7528
- 
    - \u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u6570\u636E\u4E2D\u662F\u5426\u5305\u542B\u9690\u79C1\u4FE1\u606F\u6216\u8005\u654F\u611F\u6570\u636E\u7B49

\u5982\u4E0A\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\u5927\u90FD\u53EF\u4EE5\u4F7F\u7528\u6743\u9650\u63A7\u5236\u6765\u505A\u98CE\u9669\u6D88\u51CF\uFF0C\u800C\u5BF9\u4E8E\u5916\u90E8\u6570\u636E\u7684\u5904\u7406\u662F\u5426\u5B89\u5168\uFF0C\u8FD9\u9700\u8981\u6211\u4EEC\u5177\u4F53\u4EE3\u7801\u5177\u4F53\u5206\u6790\u4E86\u3002\u53E6\u5916\uFF0C\u5BF9\u4E8E\u4E0D\u9700\u8981\u8DE8\u8FDB\u7A0B\u7684\u4E8B\u4EF6\u901A\u4FE1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 Emitter \u6765\u8FDB\u884C\u7EBF\u7A0B\u95F4\u901A\u4FE1\u3002\u5982\u4E0B\u6211\u4EEC\u8FDB\u4E00\u6B65\u8BE6\u7EC6\u4ECB\u7ECD

## \u8DE8\u8FDB\u7A0B\u63A5\u53E3\u8BBF\u95EE\u63A7\u5236

### \u8BA2\u9605\u8005\u63A5\u53E3\u8BBF\u95EE\u63A7\u5236

\u5BF9\u4E8E\u9759\u6001\u8BA2\u9605\u6211\u4EEC\u5728\u4E0A\u6587\u7684\u4ECB\u7ECD\u4E2D\u6709\u8BF4\u660E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7684\u65B9\u5F0F\u6DFB\u52A0\u4E8B\u4EF6\u53D1\u5E03\u65B9\u7684\u6743\u9650\u8981\u6C42\u3002\u5BF9\u4E8E\u52A8\u6001\u8BA2\u9605\u516C\u5171\u4E8B\u4EF6\uFF0C\u5982\u679C\u8BA2\u9605\u7684\u4E3A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF08\u7CFB\u7EDF\u516C\u5171\u4E8B\u4EF6\u666E\u901A\u5E94\u7528\u65E0\u6743\u9650\u53D1\u9001\uFF09\uFF0C\u4E14\u672A\u58F0\u660E\u53D1\u5E03\u8005\u7684\u6743\u9650\u8981\u6C42\uFF0C\u90A3\u4E48\u6B64\u8BA2\u9605\u8005\u5C06\u63A5\u6536\u5E76\u5904\u7406\u4EFB\u610F\u4E09\u65B9\u5E94\u7528\u7684\u8BE5\u8BA2\u9605\u4E8B\u4EF6\u6D88\u606F\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u52A8\u6001\u8BA2\u9605\u7684\u4EE3\u7801\u5982\u4E0B\u65F6

\`\`\`
\`\`createSubscriber(){   \xA0\xA0\xA0\xA0var\xA0subscribeInfo\xA0={   \xA0\xA0\xA0\xA0events:["example_event"],   }      commonEvent.createSubscriber(subscribeInfo,(err,\xA0subscriber)\xA0=>{   \xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`[CommonEvent]CreateSubscriberCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.log(TAG,"[CommonEvent]CreateSubscriber")   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.subscriber=\xA0subscriber   \xA0\xA0\xA0\xA0}   })}\`\`

\`\`\`

\u5219\u4EFB\u610F\u4E09\u65B9\u5E94\u7528\u5747\u53EF\u5411\`example_event\`\u7684\u8BA2\u9605\u8005\u53D1\u9001\u4E8B\u4EF6\u6D88\u606F

\`\`\`
\`\`publish(){   \xA0\xA0\xA0\xA0commonEvent.publish("example_event",(err)\xA0=>{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`[CommonEvent]PublishCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.info(TAG,"[CommonEvent]Publish")   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0})   }\`\`

\`\`\`

\u5728\u67D0\u4E0B\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u63A5\u6536\u6765\u81EA\u4EFB\u610F\u5E94\u7528\u7684\u4E8B\u4EF6\u6D88\u606F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u4E24\u79CD\u65B9\u5F0F\u9650\u5236\u8BA2\u9605\u8005\u63A5\u53E3\u7684\u66B4\u9732\u8303\u56F4\uFF1A

- 
    - \u8BBE\u7F6E\u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u7684\u53D1\u5E03\u65B9\u6743\u9650
- 
    - \u8BBE\u7F6E\u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u7684\u53D1\u5E03\u65B9\u5305\u540D\uFF08 API11+ \uFF09

### \u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u65B9\u9700\u8981\u5177\u6709\u7684\u6743\u9650

\u5173\u4E8E\u9759\u6001\u8BA2\u9605\u6211\u4EEC\u5728\u4E0A\u6587\u4E2D\u6709\u4ECB\u7ECD\uFF0C\u5728\u9759\u6001\u8BA2\u9605\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EF\u4EE5\u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u65B9\u7684\u6743\u9650\u4FE1\u606F\u3002\u5728\u52A8\u6001\u8BA2\u9605\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6765\u9650\u5236\u53EA\u63A5\u6536\u67D0\u4E9B\u5177\u6709\u6307\u5B9A\u6743\u9650\u7684\u53D1\u5E03\u65B9\u7684\u6D88\u606F\uFF0C\u5982\u4E0B\u4EE5\`ohos.permission.READ_MEDIA\`\u6743\u9650\u4E3A\u4F8B

\`\`\`
\`var\xA0subscribeInfo\xA0=\xA0{   \xA0\xA0events:\xA0["example_event"],   \xA0\xA0publisherPermission:"ohos.permission.READ_MEDIA",   }\`

\`\`\`

\u914D\u7F6E\u6743\u9650\u540E\uFF0C\u5C1D\u8BD5\u5728\u53D1\u5E03\u8005\u53D1\u5E03\u516C\u5171\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u65E5\u5FD7\u4E2D\u6821\u9A8C\u672A\u901A\u8FC7\uFF0C\u5982\u4E0B

\`\`\`
\`C01200/Ces\xA0\xA0foundation\xA0\xA0W\xA0\xA0[common_event_control_manager.cpp:(CheckSubscriberRequiredPermission):821]\xA0No\xA0permission\xA0to\xA0send\xA0common\xA0event\xA0example_event\xA0from\xA0com.example.mycepclient\xA0(pid\xA0=\xA014725,\xA0uid\xA0=\xA020010056),\xA0userId\xA0=\xA0100\xA0to\xA0ohos.samples.etscommonevent\xA0(pid\xA0=\xA024539,\xA0uid\xA0=\xA020010046),\xA0userId\xA0=\xA0100\xA0due\xA0to\xA0registered\xA0subscriber\xA0requires\xA0the\xA0ohos.permission.READ_MEDIA\xA0permission.\`

\`\`\`

\u4ECE\u62A5\u9519\u7684\u65E5\u5FD7\u53EF\u4EE5\u770B\u5230\u516C\u5171\u4E8B\u4EF6\u5728\u88AB\`CES\`\u670D\u52A1\u8F6C\u53D1\u7684\u8FC7\u7A0B\u4E2D\u88AB\u62E6\u622A\uFF0COpenHarmony \u4E2D\u76F8\u5173\u6E90\u7801\u5982\u4E0B

\`\`\`
\`bool\xA0CommonEventControlManager::CheckSubscriberRequiredPermission(const\xA0std::string\xA0&subscriberRequiredPermission,   \xA0\xA0\xA0\xA0const\xA0CommonEventRecord\xA0&eventRecord,\xA0const\xA0EventSubscriberRecord\xA0&subscriberRecord)   {   \xA0\xA0\xA0\xA0bool\xA0ret\xA0=false;   \xA0\xA0\xA0\xA0if(subscriberRequiredPermission.empty()||\xA0eventRecord.eventRecordInfo.isSubsystem){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return\xA0true;   \xA0\xA0\xA0\xA0}      \xA0 \xA0 ret\xA0=AccessTokenHelper::VerifyAccessToken(eventRecord.eventRecordInfo.callerToken,\xA0subscriberRequiredPermission);   \xA0\xA0\xA0\xA0if(!ret){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("No\xA0permission\xA0to\xA0send\xA0common\xA0event\xA0%{public}s\xA0"   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"from\xA0%{public}s\xA0(pid\xA0=\xA0%{public}d,\xA0uid\xA0=\xA0%{public}d),\xA0userId\xA0=\xA0%{public}d\xA0"   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"to\xA0%{public}s\xA0(pid\xA0=\xA0%{public}d,\xA0uid\xA0=\xA0%{public}d),\xA0userId\xA0=\xA0%{public}d\xA0"   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"due\xA0to\xA0registered\xA0subscriber\xA0requires\xA0the\xA0%{public}s\xA0permission.",   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.commonEventData->GetWant().GetAction().c_str(),   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.eventRecordInfo.bundleName.c_str(),   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.eventRecordInfo.pid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.eventRecordInfo.uid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.userId,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriberRecord.eventRecordInfo.bundleName.c_str(),   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriberRecord.eventRecordInfo.pid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriberRecord.eventRecordInfo.uid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriberRecord.eventSubscribeInfo->GetUserId(),   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriberRequiredPermission.c_str());   \xA0\xA0\xA0\xA0}   return\xA0ret;   }\`

\`\`\`

\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u9664\u4E86\u6743\u9650\u6821\u9A8C\u901A\u8FC7\u5916\uFF0C\`eventRecord\`\u4E3A\`Subsystem\`\u65F6\u4E5F\u53EF\u4EE5\u6821\u9A8C\u901A\u8FC7\uFF0C\u662F\u5426\u4E3A\`Subsystem\`\u7684\u5224\u5B9A\u6765\u81EA\u8FDB\u7A0B\`tokenid\`\u4E2D\u7684\u6807\u5FD7\u4F4D\`type\`\uFF0C\u5F53\`type\`\u4E3A\`TOKEN_NATIVE\`\u65F6\u6807\u8BB0\u4E3A\`subsystem\`\u5E94\u7528\u3002\u5B9E\u9645\u4E0A\u6211\u4EEC\u5728\u6B63\u5E38\u5B89\u88C5\`HAP\`\u5E94\u7528\u65F6\uFF0CtokenId \u4F1A\u88AB\u6807\u8BB0\u4E3A\`TOKEN_HAP\`\uFF0C\u90A3\u4E48\u4EC0\u4E48\u60C5\u51B5\u4E0B\u8FDB\u7A0B\u4F1A\u88AB\u6807\u8BB0\u4E3A\`TOKEN_NATI VE\`? \u5728\u672C\u7CFB\u5217\u7684\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\u6709\u4ECB\u7ECD\u9E3F\u8499\u7CFB\u7EDF\u7684\u542F\u52A8\u6D41\u7A0B\uFF0C\u5185\u6838\u52A0\u8F7D\u540E\u542F\u52A8\`/bin/init\`\u8FDB\u7A0B\uFF0C\`init\`\u8FDB\u7A0B\u9996\u5148\u5B8C\u6210\u7CFB\u7EDF\u521D\u59CB\u5316\u5DE5\u4F5C\uFF0C\u7136\u540E\u5F00\u59CB\u89E3\u6790\u914D\u7F6E\u6587\u4EF6\uFF0C\u914D\u7F6E\u6587\u4EF6\u5206\u4E3A\u4E09\u7C7B\uFF1A

- 
    - init.cfg\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\uFF0C\u7531 init \u7CFB\u7EDF\u5B9A\u4E49\uFF0C\u4F18\u5148\u89E3\u6790\u3002
- 
    - /system/etc/init/*.cfg \u5404\u5B50\u7CFB\u7EDF\u5B9A\u4E49\u7684\u914D\u7F6E\u6587\u4EF6\u3002
- 
    - /vender/etc/init.cfg \u5382\u5546\u5B9A\u4E49\u7684\u914D\u7F6E\u6587\u4EF6\u3002

\u5728\u7CFB\u7EDF\u542F\u52A8\u65F6\u4F1A\u8C03\u7528\`ParseAllServices\`\u8BFB\u53D6\`etc/init\`\u76EE\u5F55\u4E0B\u7684 \`*.cfg\` \u521D\u59CB\u5316\u7CFB\u7EDF\u670D\u52A1\u914D\u7F6E\u9879\uFF0C\u5E76\u5C06\u5168\u90E8\u670D\u52A1\u8FDB\u7A0B\u52A0\u5165\u5168\u5C40\u94FE\u8868\`g_initWorkspace.groupNode[NODE_TYPE_SERVICE]\`\u4E2D\uFF0C\u5728\u542F\u52A8\`accesstoken_service\`\u7684 jobs \u8C03\u7528\`AddNewTokenToListAndFile\`\u4E3A\u6BCF\u4E2A service \u5206\u914D tokenid\uFF0C\u5176\u4E2D\u4F7F\u7528\`/dev/urandom\`\u751F\u6210\u968F\u673A\`tokenid\`\uFF0C\u5E76\u8BBE\u7F6E token type \u4E3A \`TOKEN_NATIVE_TYPE\`\uFF0C\u5982\u679C\u8FDB\u7A0B\u540D\u4E3A\`hdcd\`\u5219\u8BBE\u7F6E\u4E3A\`TOKEN_SHELL_TYPE\`\uFF0C\u7136\u540E\u5C06 token \u7B49\u4FE1\u606F\u5199\u5165\u6587\u4EF6 \`/data/service/el0/access_token/nativetoken.json\`\u4E2D\uFF0C\u5E76\u5728 jobs \u4E2D\u4E3A\u8BE5\u6587\u4EF6\u5939\u914D\u7F6E\u6743\u9650\uFF0C\u666E\u901A\u8FDB\u7A0B\u65E0\u6CD5\u8BBF\u95EE

\u540E\u7EED\u542F\u52A8\u7CFB\u7EDF\u4F1A\u76F4\u63A5\u8C03\u7528\`AtlibInit\`\u5C1D\u8BD5\u4ECE\`/data/service/el0/access_token/nativetoken.json\`\u52A0\u8F7D token \u4FE1\u606F\u3002\u5982\u4E0A\u6211\u4EEC\u53EF\u4EE5\u4E86\u89E3\u5230\uFF0C\u6211\u4EEC\u5728\u5F00\u53D1\u516C\u5171\u4E8B\u4EF6\u8BA2\u9605\u65B9\u65F6\uFF0C\u9488\u5BF9\u4E00\u4E9B\u573A\u666F\u53EF\u4EE5\u5408\u7406\u914D\u7F6E\u6743\u9650\u6765\u9650\u5236\u8BA2\u9605\u63A5\u53E3\u7684\u8BBF\u95EE\u8303\u56F4\u3002

### \u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u65B9\u7684\u5305\u540D

\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u8005\u7684\u5305\u540D\u4E3A com.samples.xxx \uFF0C\u6CE8\u610F\`publisherBundleName\`\u6700\u4F4E\u9700\u8981 API11 \u652F\u6301

\`\`\`
\`\`var\xA0subscribeInfo\xA0={   \xA0\xA0\xA0\xA0events:["event"],   \xA0\xA0\xA0\xA0publisherBundleName:"com.samples.xxx"   }      commonEvent.createSubscriber(subscribeInfo,(err,\xA0subscriber)\xA0=>{   \xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`CreateSubscriberCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.log(TAG,"[CommonEvent]CreateSubscriber")   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.subscriber=\xA0subscriber   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0this.result="Create\xA0subscriber\xA0succeed"   \xA0\xA0\xA0\xA0}   })      \`\`

\`\`\`

openharmony \u6E90\u7801\u6821\u9A8C\u4F4D\u7F6E\u5982\u4E0B\uFF0C\`CES\`\u83B7\u53D6\u516C\u5171\u4E8B\u4EF6\u8FDB\u884C\u5206\u53D1\u524D\uFF0C\u5982\u4E0B\u662F\u52A8\u6001\u8BA2\u9605\u7684\u4EE3\u7801

\`\`\`
\`//\xA0xref/base/notification/common_event_service/services/src/common_event_subscriber_manager.cpp#377   void\xA0CommonEventSubscriberManager::GetSubscriberRecordsByWantLocked(const\xA0CommonEventRecord\xA0&eventRecord,   \xA0\xA0\xA0\xA0std::vector<SubscriberRecordPtr>\xA0&records)   {   \xA0\xA0\xA0\xA0std::lock_guard<std::mutex>\xA0lock(mutex_);   \xA0\xA0\xA0\xA0if(eventSubscribers_.size()<=0){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return;   \xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0auto\xA0recordsItem\xA0=\xA0eventSubscribers_.find(eventRecord.commonEventData->GetWant().GetAction());   \xA0\xA0\xA0\xA0if(recordsItem\xA0==\xA0eventSubscribers_.end()){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return;   \xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0bool\xA0isSystemApp\xA0=(eventRecord.eventRecordInfo.isSystemApp\xA0||\xA0eventRecord.eventRecordInfo.isSubsystem)&&   !eventRecord.eventRecordInfo.isProxy;      \xA0\xA0\xA0\xA0auto\xA0bundleName\xA0=\xA0eventRecord.eventRecordInfo.bundleName;   \xA0\xA0\xA0\xA0auto\xA0uid\xA0=\xA0eventRecord.eventRecordInfo.uid;      \xA0\xA0\xA0\xA0for(auto\xA0it\xA0=(recordsItem->second).begin();\xA0it\xA0!=(recordsItem->second).end();\xA0it++){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if((*it)->eventSubscribeInfo\xA0==nullptr){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!(*it)->eventSubscribeInfo->GetMatchingSkills().Match(eventRecord.commonEventData->GetWant())){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0publisher\u6307\u5B9A\u63A5\u6536\u65B9bundlename   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!eventRecord.publishInfo->GetBundleName().empty()&&   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0eventRecord.publishInfo->GetBundleName()!=(*it)->eventRecordInfo.bundleName){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0subscriber\u6307\u5B9A\u53D1\u9001\u65B9bundlename   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0auto\xA0publisherBundleName\xA0=(*it)->eventSubscribeInfo->GetPublisherBundleName();   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!publisherBundleName.empty()&&\xA0publisherBundleName\xA0!=\xA0bundleName){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0auto\xA0publisherUid\xA0=(*it)->eventSubscribeInfo->GetPublisherUid();   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(publisherUid\xA0>0&&\xA0uid\xA0>0&&static_cast<uid_t>(publisherUid)!=\xA0uid){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(CheckSubscriberByUserId((*it)->eventSubscribeInfo->GetUserId(),\xA0isSystemApp,\xA0eventRecord.userId)){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0records.emplace_back(*it);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0}   }\`

\`\`\`

\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u53D1\u5E03\u8005\u662F\u5426\u53EF\u4EE5\u63A7\u5236\u5305\u540D\u4FE1\u606F\uFF1F\u7B54\u6848\u662F\u5426\u5B9A\u7684\u3002\u5E94\u7528\u7A0B\u5E8F\u548C\`CES\`\u7684\u901A\u4FE1\u8D70 binder \u7684 IPC \u901A\u4FE1\uFF0C\u5728\`CES\`\u4FA7\u8C03\u7528\u5982\u4E0B\u4EE3\u7801\u83B7\u53D6\u5BA2\u6237\u7AEF\u7684\`Uid\`

\`\`\`
\`//\xA0xref/base/notification/common_event_service/services/src/common_event_manager_service.cpp#121   int32_t\xA0CommonEventManagerService::PublishCommonEvent(const\xA0CommonEventData\xA0&event,   \xA0\xA0\xA0\xA0const\xA0CommonEventPublishInfo\xA0&publishinfo,\xA0const\xA0sptr<IRemoteObject>\xA0&commonEventListener,   \xA0\xA0\xA0\xA0const\xA0int32_t\xA0&userId)   {   \xA0\xA0\xA0\xA0EVENT_LOGD("enter");      \xA0\xA0\xA0\xA0if(!IsReady()){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGE("CommonEventManagerService\xA0not\xA0ready");   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return\xA0ERR_NOTIFICATION_CESM_ERROR;   \xA0\xA0\xA0\xA0}      \xA0\xA0\xA0\xA0if(userId\xA0!=\xA0ALL_USER\xA0&&\xA0userId\xA0!=\xA0CURRENT_USER\xA0&&\xA0userId\xA0!=\xA0UNDEFINED_USER){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0bool\xA0isSubsystem\xA0=AccessTokenHelper::VerifyNativeToken(IPCSkeleton::GetCallingTokenID());   \xA0\xA0\xA0\xA0if(!isSubsystem\xA0&&!AccessTokenHelper::IsSystemApp()){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGE("publish\xA0to\xA0special\xA0user\xA0must\xA0be\xA0system\xA0application.");   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0return\xA0ERR_NOTIFICATION_CES_COMMON_NOT_SYSTEM_APP;   \xA0\xA0\xA0\xA0}   }      return\xA0PublishCommonEventDetailed(event,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0publishinfo,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0commonEventListener,   IPCSkeleton::GetCallingPid(),   IPCSkeleton::GetCallingUid(),   IPCSkeleton::GetCallingTokenID(),   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0userId);   }\`

\`\`\`

\u8DDF\u5165 PublishCommonEventDetailed \uFF0C\u5176\u4E2D\u4F7F\u7528 BundleManagerHelper \u7684 GetBundleName \u83B7\u53D6\u5305\u540D

\`\`\`
\`//\xA0xref/base/notification/common_event_service/services/src/common_event_manager_service.cpp#PublishCommonEventDetailed   int32_t\xA0CommonEventManagerService::PublishCommonEventDetailed(const\xA0CommonEventData&event,   constCommonEventPublishInfo&publishinfo,const\xA0sptr<IRemoteObject>&commonEventListener,constpid_t&pid,   constuid_t&uid,constint32_t&clientToken,constint32_t&userId)   {   //\xA0...   \xA0\xA0\xA0\xA0std::string\xA0bundleName\xA0=DelayedSingleton<BundleManagerHelper>::GetInstance()->GetBundleName(uid);   \xA0\xA0\xA0\xA0bool\xA0ret\xA0=\xA0innerCommonEventManager->PublishCommonEvent(event,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0publishinfo,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0commonEventListener,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0recordTime,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0pid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0uid,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0clientToken,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0userId,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0bundleName,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0commonEventManagerService);   }\`

\`\`\`

\u5173\u4E8E GetBundleName \uFF0C\u4E0E\u672C\u7CFB\u5217\u4E2D\u7684\u6587\u7AE0 ServiceExternsionAbility \u4E2D\u4ECB\u7ECD\u7684 getBundleNameByUid \u5E95\u5C42\u662F\u4E00\u81F4\u7684\uFF0C\u8C03\u7528 GetNameForUid \u83B7\u53D6\u7684 BundleName \u5728\u5E94\u7528\u5B89\u88C5\u65F6\u4E0E uid \u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB\uFF0C\u5728 uid \u53EF\u4FE1\u7684\u60C5\u51B5\u4E0B\uFF0C\u83B7\u53D6\u7684 BundleName \u4E5F\u662F\u53EF\u4FE1\u7684\u3002

### \u53D1\u5E03\u8005\u4E8B\u4EF6\u8BBF\u95EE\u63A7\u5236

### \u6307\u5B9A\u516C\u5171\u4E8B\u4EF6\u8BA2\u9605\u8005\u7684\u5305\u540D

\u540C\u6837\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u53D1\u5E03\u65B9\u7684\u516C\u5171\u4E8B\u4EF6\u4E2D\u53EF\u80FD\u4F1A\u5305\u542B\u67D0\u4E9B\u654F\u611F\u4FE1\u606F\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u654F\u611F\u4FE1\u606F\u4E0D\u88AB\u4EFB\u610F\u7B2C\u4E09\u65B9\u5E94\u7528\u63A5\u6536\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u63A5\u6536\u65B9\u7684\u5305\u540D\u4EE5\u53CA\u63A5\u6536\u65B9\u6240\u9700\u5177\u6709\u7684\u6743\u9650\u3002\u901A\u8FC7\u4E0A\u6587\u4E2D\u516C\u5171\u4E8B\u4EF6\u53D1\u5E03\u7684\u76F8\u5173 API \u4ECB\u7ECD\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6307\u5B9A\u63A5\u6536\u65B9\u7684\u5305\u540D\u4E3A com.samples.xxx\uFF0C\u6240\u9700\u6743\u9650\u4FE1\u606F\u4E3A ohos.permission.READ_MEDIA\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\`bundleName\`\u548C\`subscriberPermissions\`\u540C\u6837\u9700\u8981 API Version 11 \u7684\u652F\u6301

\`\`\`
\`\`var\xA0options\xA0={   \xA0\xA0\xA0\xA0code:1,//\xA0Initial\xA0code\xA0for\xA0CommonEvent   \xA0\xA0\xA0\xA0data:"initial\xA0data",//\xA0Initial\xA0data\xA0for\xA0CommonEvent   \xA0\xA0\xA0\xA0//data:\xA0{\xA0info:"hello"\xA0},\xA0//\xA0Type\xA0'{\xA0info:\xA0string;\xA0}'\xA0is\xA0not\xA0assignable\xA0to\xA0type\xA0'string'.\xA0<tsCheck>   \xA0\xA0\xA0\xA0bundleName:"com.samples.xxx",   \xA0\xA0\xA0\xA0subscriberPermissions:"ohos.permission.READ_MEDIA"   }   //\xA0Publish\xA0CommonEvent   commonEvent.publish("event",\xA0options,(err)\xA0=>{   \xA0\xA0\xA0\xA0if(err.code){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.error(TAG,\`[CommonEvent]PublishCallBack\xA0err\xA0=\xA0\${JSON.stringify(err)}\`)   \xA0\xA0\xA0\xA0}else{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0Logger.info(TAG,"[CommonEvent]Publish2")   \xA0\xA0\xA0\xA0}   })\`\`

\`\`\`

Openharmony \u6E90\u7801\u4E2D\u6821\u9A8C\u5305\u540D\u4F4D\u7F6E\uFF0C\u5982\u4E0B46\u884C\uFF0C\u901A\u8FC7\u6BD4\u8F83 publishInfo \u4E2D\u7684 bundleName \u4E0E subscriber \u7684 bundleName\uFF0C\u5982\u4E0B\u662F\u9759\u6001\u8BA2\u9605\u8005\u7684\u6821\u9A8C\uFF0C\u52A8\u6001\u8BA2\u9605\u89C1\u4E0A\u8282\u4E2D\u5206\u6790

\`\`\`
\`//\xA0xref/base/notification/common_event_service/services/src/static_subscriber_manager.cpp#153   void\xA0StaticSubscriberManager::PublishCommonEventInner(const\xA0CommonEventData&data,   constCommonEventPublishInfo&publishInfo,constSecurity::AccessToken::AccessTokenID&callerToken,   constint32_t&userId,const\xA0sptr<IRemoteObject>&service,const\xA0std::string\xA0&bundleName)   {   \xA0\xA0\xA0\xA0auto\xA0targetSubscribers\xA0=\xA0validSubscribers_.find(data.GetWant().GetAction());   \xA0\xA0\xA0\xA0if(targetSubscribers\xA0!=\xA0validSubscribers_.end()){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0for(auto\xA0subscriber\xA0:\xA0targetSubscribers->second){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGI("subscriber.userId\xA0=\xA0%{public}d,\xA0userId\xA0=\xA0%{public}d,\xA0event\xA0=\xA0%{public}s",\xA0subscriber.userId,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0userId,\xA0data.GetWant().GetAction().c_str());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(IsDisableEvent(subscriber.bundleName,\xA0targetSubscribers->first)){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGD("Current\xA0subscriber\xA0is\xA0disable,\xA0subscriber.userId\xA0=\xA0%{public}d.",\xA0subscriber.userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendStaticEventProcErrHiSysEvent(   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0userId,\xA0bundleName,\xA0subscriber.bundleName,\xA0data.GetWant().GetAction());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(subscriber.userId\xA0<\xA0SUBSCRIBE_USER_SYSTEM_BEGIN){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("subscriber\xA0userId\xA0is\xA0invalid,\xA0subscriber.userId\xA0=\xA0%{public}d",\xA0subscriber.userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendStaticEventProcErrHiSysEvent(userId,\xA0bundleName,\xA0subscriber.bundleName,\xA0data.GetWant().GetAction());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if((subscriber.userId\xA0>\xA0SUBSCRIBE_USER_SYSTEM_END)&&(userId\xA0!=\xA0ALL_USER)   &&(subscriber.userId\xA0!=\xA0userId)){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("subscriber\xA0userId\xA0is\xA0not\xA0match,\xA0subscriber.userId\xA0=\xA0%{public}d,\xA0userId\xA0=\xA0%{public}d",   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0subscriber.userId,\xA0userId);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendStaticEventProcErrHiSysEvent(userId,\xA0bundleName,\xA0subscriber.bundleName,\xA0data.GetWant().GetAction());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0//\xA0judge\xA0if\xA0app\xA0is\xA0system\xA0app.   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!DelayedSingleton<BundleManagerHelper>::GetInstance()->   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0CheckIsSystemAppByBundleName(subscriber.bundleName,\xA0subscriber.userId)){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("subscriber\xA0is\xA0not\xA0system\xA0app,\xA0not\xA0allow.");   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!VerifyPublisherPermission(callerToken,\xA0subscriber.permission)){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("publisher\xA0does\xA0not\xA0have\xA0required\xA0permission\xA0%{public}s",\xA0subscriber.permission.c_str());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendStaticEventProcErrHiSysEvent(userId,\xA0bundleName,\xA0subscriber.bundleName,\xA0data.GetWant().GetAction());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!VerifySubscriberPermission(subscriber.bundleName,\xA0subscriber.userId,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0publishInfo.GetSubscriberPermissions())){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("subscriber\xA0does\xA0not\xA0have\xA0required\xA0permissions");   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0SendStaticEventProcErrHiSysEvent(userId,\xA0bundleName,\xA0subscriber.bundleName,\xA0data.GetWant().GetAction());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0if(!publishInfo.GetBundleName().empty()&&\xA0subscriber.bundleName\xA0!=\xA0publishInfo.GetBundleName()){   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0EVENT_LOGW("subscriber\xA0bundleName\xA0is\xA0not\xA0match,\xA0subscriber.bundleName\xA0=\xA0%{public}s,\xA0"   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"bundleName\xA0=\xA0%{public}s",\xA0subscriber.bundleName.c_str(),\xA0publishInfo.GetBundleName().c_str());   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0continue;   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0PublishCommonEventConnecAbility(data,\xA0service,\xA0subscriber.userId,\xA0subscriber.bundleName,\xA0subscriber.name);   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0}   \xA0\xA0\xA0\xA0}   }\`

\`\`\`

## \u8FDB\u7A0B\u5185\u8BA2\u9605\u53D1\u5E03\u4E8B\u4EF6

\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u4F7F\u7528\u4E8B\u4EF6\u8BA2\u9605\u53D1\u5E03\u673A\u5236\uFF0C\u4F46\u53C8\u4E0D\u9700\u8981\u4E8B\u4EF6\u8DE8\u8FDB\u7A0B\u901A\u4FE1\uFF0C\u4E3A\u4E86\u6709\u6548\u51CF\u5C11\u4E0A\u4E00\u8282\u4E2D\u5B58\u5728\u7684\u63A5\u53E3\u8BBF\u95EE\u63A7\u5236\u7684\u98CE\u9669\u9762\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 Emitter \u8FDB\u884C\u7EBF\u7A0B\u95F4\u901A\u4FE1\u3002Emitter \u7684\u5F00\u53D1\u6B65\u9AA4\u793A\u4F8B\u5982\u4E0B\uFF1A

### \u8BA2\u9605\u4E8B\u4EF6

\u8BA2\u9605\u4E8B\u4EF6\u5F00\u53D1\u793A\u4F8B

\`\`\`
\`import\xA0emitter\xA0from\xA0"@ohos.events.emitter";      //\xA0\u5B9A\u4E49\u4E00\u4E2AeventId\u4E3A1\u7684\u4E8B\u4EF6   let\xA0event\xA0={   \xA0\xA0\xA0\xA0eventId:1   };      //\xA0\u6536\u5230eventId\u4E3A1\u7684\u4E8B\u4EF6\u540E\u6267\u884C\u8BE5\u56DE\u8C03   let\xA0callback\xA0=(eventData)=>{   \xA0\xA0\xA0\xA0console.info('event\xA0callback');   };      //\xA0\u8BA2\u9605eventId\u4E3A1\u7684\u4E8B\u4EF6   emitter.on(event,\xA0callback);\`

\`\`\`

### \u53D1\u9001\u4E8B\u4EF6

\u53D1\u9001\u4E8B\u4EF6\u5F00\u53D1\u793A\u4F8B

\`\`\`
\`import\xA0emitter\xA0from\xA0"@ohos.events.emitter";      //\xA0\u5B9A\u4E49\u4E00\u4E2AeventId\u4E3A1\u7684\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u4F18\u5148\u7EA7\u4E3ALow   let\xA0event\xA0={   \xA0\xA0\xA0\xA0eventId:1,   \xA0\xA0\xA0\xA0priority:\xA0emitter.EventPriority.LOW   };      let\xA0eventData\xA0={   \xA0\xA0\xA0\xA0data:{   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"content":"c",   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"id":1,   \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"isEmpty":false,   \xA0\xA0\xA0\xA0}   };      //\xA0\u53D1\u9001eventId\u4E3A1\u7684\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5185\u5BB9\u4E3AeventData   emitter.emit(event,\xA0eventData);\`

\`\`\`

\u5728\u4E8B\u4EF6\u901A\u77E5\u4E0D\u9700\u8981\u8DE8\u8FDB\u7A0B\u7684\u573A\u666F\u4E2D\uFF0C\u4F7F\u7528 Emitter \u65E0\u7591\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9 ~

## \u53C2\u8003

- 
    - [https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-overview-0000001427744568-V2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/common-event-overview-0000001427744568-V2)
- 
    - [https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/itc-with-emitter-0000001427584616-V2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V2/itc-with-emitter-0000001427584616-V2)`;export{e as _};
