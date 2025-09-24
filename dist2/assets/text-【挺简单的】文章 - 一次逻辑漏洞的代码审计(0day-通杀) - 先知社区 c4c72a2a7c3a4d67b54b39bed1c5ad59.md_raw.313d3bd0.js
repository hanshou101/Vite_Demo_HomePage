const n=`# \u3010\u633A\u7B80\u5355\u7684\u3011\u6587\u7AE0 - \u4E00\u6B21\u903B\u8F91\u6F0F\u6D1E\u7684\u4EE3\u7801\u5BA1\u8BA1(0day-\u901A\u6740)  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:21 AM
URL: https://xz.aliyun.com/news/17407
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

\u4E00\u6B21\u903B\u8F91\u6F0F\u6D1E\u7684\u4EE3\u7801\u5BA1\u8BA1(0day-\u901A\u6740)

 [\u7528\u6237HHCTOgeOH2](https://xz.aliyun.com/users/166563) [\u6F0F\u6D1E\u5206\u6790](https://xz.aliyun.com/news?cate_id=2) 39\u6D4F\u89C8 \xB7 21\u5C0F\u65F6\u524D

![](https://xz.aliyun.com/assets/pc/images/pic_default_secret.png)

\u8FD4\u56DE\u6587\u6863

\u4E00\u3001\u6F0F\u6D1E\u8BE6\u60C5

\u6B64\u6F0F\u6D1E\u53EF\u4EE5\u7ED5\u8FC7\u767B\u5F55\u9650\u5236\uFF0C\u76F4\u63A5\u8FDB\u5165\u540E\u53F0\u3002

\u4E8C\u3001\u4EE3\u7801\u5206\u6790

[](https://xz.aliyun.com/api/v2/files/f4010f75-59b9-39a5-9112-ea00bda1a903)

\u6E90\u7801\u5F88\u660E\u663E\u7684\u662F\u6846\u67B6\u7ED3\u6784\u3002

\u6F0F\u6D1E\u6587\u4EF6\u5728

lianjieerp_new/app/src/Endpoint/Web/Users/LoginController.php\u6587\u4EF6\u4E0B

[](https://xz.aliyun.com/api/v2/files/40540075-ddc8-37ae-9b52-b1f6e49b86f7)

\u200B

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

#[Route(route: '/users/checklogin', name: 'checklogin',methods:['POST'])]

public function checkLogin(InputManager $input)

{

global $global_session;

global $global_Cache_Multuser;//\u591A\u79DF\u6237

// \u83B7\u53D6 POST \u53C2\u6570

$username = $input->input('username');

$password = $input->input('password');

$code = -1;

$salt = 'ldcrm';

$filename=directory('source').'pwd.txt';

\u9996\u5148\u5B9A\u4E49\u4E86\u8FD9\u4E2A\u51FD\u6570\u7684\u8C03\u7528\u8DEF\u7531\u4E3A/users/checklogin\uFF0C\u63A5\u6536\u53C2\u6570\u4E3APOST\u4F20\u53C2\uFF0C\u4E4B\u540E\u83B7\u53D6username\u548Cpassword\uFF0C\u867D\u6709\u5B9A\u4E49code\u53C2\u6570\u4E3A-1\u3002

\u200B

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

if(!empty($input->input('confirm_password')) && $input->input('confirm_password') == 'yes'){

if(!empty($global_Cache_Multuser))

{

$BaseEncryptobj=new \\App\\Endpoint\\Web\\BaseController\\BaseEncrypt();

$password=$input->input('login_pwd');

$enterprise_account_arr=$global_session->get("multitenantuserinfo");

$enterprise_account=$enterprise_account_arr['enterprise_account'];

$password=$BaseEncryptobj->Encrypt($password,$enterprise_account);

$CreateMultiDbobj=new CreateMultiDb();

$adb= $CreateMultiDbobj->getDb();

$sql='update erp_multitenancy set userpwd=? where tenant_id=?';

$adb->pquery($sql,array($password,$enterprise_account_arr['tenant_id']));

unset($adb);

return ConvertToArray(2,[],'success');

}

$myfile = fopen($filename, "w");

$txt = MD5($input->input('login_pwd') . $salt);

fwrite($myfile, $txt);

fclose($myfile);

$code = 1;

}

//\u767B\u5F55

else {

//session\u6709\u6548

if ($global_session->get('username')) {

$code = 1;

} else {

$user_name =$input->input('login_user_name');

$password =$input->input('login_password');

$exch_module=$input->input('exch_module');

$exchaccount_billid=$input->input('exchaccount_billid');

$exchaccountid=$input->input('exchaccountid');

$filename = directory('source').'pwd.txt';

if (file_exists($filename)) {

//\u91CD\u7F6E\u8FC7\u5BC6\u7801

$myfile = fopen($filename, "r");

$md5_pwd = fread($myfile, filesize($filename));

if ($md5_pwd == MD5($password . $salt)) {

$code = 1;

// \u6CE8\u518C\u767B\u9646\u6210\u529F\u7684 admin \u53D8\u91CF\uFF0C\u5E76\u8D4B\u503C true

$global_session->set('username',$user_name);

//@edit:zhaosk @Date: 2024/7/16 @reason:\u53D8\u91CF\u672A\u4F7F\u7528,\u6CE8\u91CA\u6389

/* $filename = 'reg.txt';

if (file_exists($filename)) {

$myfile = fopen($filename, "r");

$data = json_decode(fread($myfile, filesize($filename)));

}*/

}

} else {

//\u672A\u91CD\u7F6E\u8FC7\u5BC6\u7801

$code = 3;

$global_session->set('username',$user_name);

}

}

}

\u9996\u5148\u5C31\u662F\u5224\u65ADconfirm_password\u662F\u4E0D\u662F\u4E3A\u7A7A\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u5176\u4E3A\u7A7A\u8D70\u5230else\u8BED\u53E5\u4E2D\uFF0C\u5982\u679Csession\u6709\u6548\uFF0C\u90A3\u4E48\u5C31\u8BA9code\u4E3A1\uFF0C\u6216\u8005\u662F\u4F60\u767B\u5F55\u7684\u8D26\u53F7\u5BC6\u7801\u6B63\u786E\uFF0C\u7136\u540Ecode\u4E3A1\u3002

\u200B

9

1

2

if ($md5_pwd == MD5($password . $salt)) {

$code = 1;

\u7EE7\u7EED\u5F80\u4E0B\u8D70

[](https://xz.aliyun.com/api/v2/files/13b280ed-7f23-3edb-9a37-2942bd4ed6e3)

\u5F88\u660E\u663E\u80FD\u770B\u5230\u4E86\uFF0C\u5F53code\u7B49\u4E8E1\u6216\u8005code\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u8FDB\u53BB\u540E\u53F0\uFF0C\u4F46\u662F\u8FD9\u4E2Acode\u53C2\u6570\u5E76\u4E0D\u662F\u6211\u4EEC\u7684\u53EF\u63A7\u70B9\uFF0C\u600E\u4E48\u53BB\u66F4\u6539\u5462\u3002

\u6CA1\u9519\u5C31\u662F\u53BB\u52AB\u6301\u767B\u5F55\u54CD\u5E94\u5305\uFF0C\u7136\u540E\u53BB\u66F4\u6539code\u7684\u503C\u3002 \u4E09\u3001\u6F0F\u6D1E\u590D\u73B0

[](https://xz.aliyun.com/api/v2/files/7752a756-3773-3538-8514-afa80f735845)

[](https://xz.aliyun.com/api/v2/files/b0cda194-230e-3ce9-b398-5bfdce2811e5)

\u6539\u4E3A1\u6216\u80053\uFF0C\u653E\u5305\u5373\u53EF\u8FDB\u5165\u540E\u53F0\u3002

[](https://xz.aliyun.com/api/v2/files/0c1fc63d-007a-33a0-a9c6-bf9aa14c5f7f)

\u200B

[0 \u4EBA\u6536\u85CF](javascript:;) [0 \u4EBA\u559C\u6B22](javascript:;)
 [\u8F6C\u8F7D](javascript:void(0))
 [\u5206\u4EAB](javascript:void(0))

![](https://xz.aliyun.com/assets/pc/images/forward.png)

![](https://xz.aliyun.com/assets/pc/images/share.png)

0 \u6761\u8BC4\u8BBA

[https://ldmmifpegigmeammaeckplhnjbbpccmm/rich-editor/yuque](https://ldmmifpegigmeammaeckplhnjbbpccmm/rich-editor/yuque)

\u67D0\u4EBA

\u8868\u60C5

\u53EF\u8F93\u5165 255 \u5B57 \u8BC4\u8BBA

![](https://xz.aliyun.com/assets/pc/images/pic_default_content.png)

\u6CA1\u6709\u8BC4\u8BBA`;export{n as _};
