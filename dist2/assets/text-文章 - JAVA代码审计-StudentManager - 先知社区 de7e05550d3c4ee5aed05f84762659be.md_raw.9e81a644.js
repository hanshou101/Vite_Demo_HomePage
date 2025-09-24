const e=`# \u6587\u7AE0 - JAVA\u4EE3\u7801\u5BA1\u8BA1-StudentManager  - \u5148\u77E5\u793E\u533A

Created: March 26, 2025 11:35 AM
URL: https://xz.aliyun.com/news/16427
\u6587\u7AE0\u4E8C\u7EA7\u7C7B\u522B: 0Day\u6316\u6398-\u6CE8\u610F\u56FE\u7247\u624B\u52A8\u62D6\u8FDB\u6765
\u6587\u7AE0\u7C7B\u522B(\u6839\u636EWebStorm\u7684\u76EE\u5F55\u6765): \u4EE3\u7801\u5BA1\u8BA1

# \u4E00\u3001\u73AF\u5883\u642D\u5EFA

\`\`\`
StudentManager
idea IntelliJ IDEA 2022.2.3
jdk1.8 
mysql 5.7.26
apache-tomcat-9.0.68
\`\`\`

\u642D\u5EFA\u8BBF\u95EE
\u7528idea\u6253\u5F00\u6587\u4EF6\u5939

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111313-806c1e10-c8b7-1.png)

\u63A5\u7740 \u70B9\u51FB\u9879\u76EE\u8BBE\u7F6E \u70B9\u51FB \u6A21\u5757 \u9009\u62E9\u8DEF\u5F84 \u9009\u62E9 \u4F7F\u7528\u6A21\u5757\u7F16\u8BD1\u8F93\u5165\u8DEF\u5F84

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111329-8a202320-c8b7-1.png)

\u5982\u679C\u8FD9\u91CC\u4E0D\u8BBE\u7F6E\u7684\u60C5\u51B5\u4E0B\u7F16\u8BD1\u7684\u65F6\u5019\u5C31\u4F1A\u81EA\u52A8\u5728\u9879\u76EE\u751F\u6210out\u76EE\u5F55 \u542F\u52A8\u9879\u76EE\u7684\u65F6\u5019\u4F1A\u5931\u8D25\u7684\u3002
\u521B\u5EFA\u6570\u636E\u5E93 \u5BFC\u5165mysql

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111357-9b15f2cc-c8b7-1.png)

\u4FEE\u6539java\u6587\u4EF6\u5939\u91CC\u7684mysql\u8BBE\u7F6E\u7684\u4FE1\u606F \u6570\u636E\u5E93 \u8D26\u53F7\u548C\u5BC6\u7801

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111406-a0044f86-c8b7-1.png)

\u8BBE\u7F6Etomcat \u8FD9\u91CC\u8BBE\u7F6E\u7AEF\u53E3\u662F8081

\u9009\u62E9\u90E8\u7F72 \u8BBE\u7F6E\u5916\u90E8\u6E90\u4E3Aweb\u76EE\u5F55

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111416-a668c56e-c8b7-1.png)

\u5BFC\u5165tomcat\u4F9D\u8D56 \u9009\u62E9\u9879\u76EE\u7ED3\u6784 \u9879\u76EE\u8BBE\u7F6E \u9009\u62E9\u4F9D\u8D56

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111428-ad19b396-c8b7-1.png)

\u542F\u52A8tomcat \u8BBF\u95EE8081\u7AEF\u53E3

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111437-b2db5d20-c8b7-1.png)

\u767B\u5F55\u7528\u6237 20162430634 \u5BC6\u7801 0

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111446-b83c4496-c8b7-1.png)

## \u5BA1\u8BA1\u601D\u8DEF

\u627E\u4E00\u4E2A\u529F\u80FD\u70B9 \u4F8B\u5982\u767B\u5F55\u7CFB\u7EDF \u8DDF\u8E2A\u89C2\u5BDF\u6574\u4E2A\u767B\u5F55\u8FC7\u7A0B\u3002
\u5173\u6CE8\u70B9 SQL\u662F\u5426\u91C7\u7528\u9884\u7F16\u8BD1\u5904\u7406\uFF0C\u8F93\u5165\u7684\u53C2\u6570\u662F\u5426\u88AB\u8FC7\u6EE4\u3002 \u4E25\u91CD\u662F\u5426\u5B58\u5728\u903B\u8F91\u6F0F\u6D1E
\u5206\u6790\u767B\u5F55\u70B9

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111458-bf138e64-c8b7-1.png)

\u627E\u5230\u5BF9\u5E94\u7684servlet

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111507-c4a5e6d8-c8b7-1.png)

\u4E09\u4E2A\u53C2\u6570\u6CA1\u6709\u8FC7\u6EE4

\`\`\`
String user = request.getParameter("user");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");
\`\`\`

\u5224\u65AD\u8EAB\u4EFD\u8FD9\u91CC\u90FD\u8981\u8C03\u7528\u6570\u636E\u5E93

\`\`\`
try {
            // \u5224\u65AD\u7528\u6237\u8EAB\u4EFD
            teacher = teacherD.checkAccount(user, password);
            student = studentD.checkAccount(user, password);
        }
\`\`\`

\u70B9\u51FB\u8FDB\u5165studentD checkAccount\u65B9\u6CD5

\`\`\`
package dao;
import vo.Student;
import java.sql.*;
import java.util.ArrayList;
public class StudentD {
    private Connection conn = null;
    public Student checkAccount(String user, String password) throws Exception {
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from student where id = '" + user + "' and password = '" + password + "'";
        ResultSet rs = stat.executeQuery(sql);
        Student stu = getStudent(rs);
        closeConnection();
        return stu;
    }
\`\`\`

SQL \u91C7\u7528 \u5B57\u7B26\u4E32\u62FC\u63A5 \u4E14\u6CA1\u6709\u8FDB\u884C\u8FC7\u6EE4 \u6240\u4EE5\u5B58\u5728\u6CE8\u5165\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111522-cd8ea334-c8b7-1.png)

\u767B\u5F55 \u8F93\u5165 admin'or 1=1# \u5BC6\u7801\u968F\u4FBF \u5373\u53EF\u4EFB\u610F\u7528\u6237\u767B\u5F55\u3002

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111533-d3e5e99a-c8b7-1.png)

\u767B\u5F55\u6210\u529F

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111543-d9cab908-c8b7-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111551-df0714a2-c8b7-1.png)

## SQL\u6CE8\u5165\u6F0F\u6D1E

TeacherD.java
checkAccount \u548C findWithId \u5747\u5B58\u5728\u6CE8\u5165

\`\`\`
public Teacher checkAccount(String id, String password) throws Exception {
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from teacher where id = '" + id + "' and password = '" + password + "'";
        ResultSet rs = stat.executeQuery(sql);
        Teacher tea = getTeacher(rs);
        closeConnection();
        return tea;
    }
    public Teacher findWithId(String id) throws Exception {
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from teacher where id = '" + id + "'";
        ResultSet rs = stat.executeQuery(sql);
        Teacher tea = getTeacher(rs);
        closeConnection();
        return tea;
    }
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111634-f88e0232-c8b7-1.png)

checkAccount \u8C03\u7528\u5904
\u65B9\u6CD5
checkAccount(String, String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93 (\u627E\u5230 1 \u4E2A\u7528\u6CD5)

\`\`\`
\u672A\u5206\u7C7B  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
            servlet  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                check_login  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    doGet(HttpServletRequest, HttpServletResponse)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        42 teacher = teacherD.checkAccount(user, password);
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111646-ffd93aca-c8b7-1.png)

findWithId \u8C03\u7528\u5904

\`\`\`
findWithId(String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93  (\u627E\u5230 4 \u4E2A\u7528\u6CD5)
    \u672A\u5206\u7C7B  (\u627E\u5230 4 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 4 \u4E2A\u7528\u6CD5)
            dao  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                TeacherD  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                    insertTeacher(String, String, String)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        39 Teacher teacher = findWithId(id);
                    updateTeacher(String, String, String, String, String)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        55 Teacher teacher = findWithId(id);
            web  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                index.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    index.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        31 teacher = teacherD.findWithId(user);
                sendCode.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    sendCode.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        36 teacher = teacherD.findWithId(id);
\`\`\`

StudentD\u91CC\u5F97 checkAccount findWithId findWithName deleteStudent\u65B9\u6CD5\u5747\u5B58\u5728SQL\u6CE8\u5165

\`\`\`
public class StudentD {
    private Connection conn = null;
    public Student checkAccount(String user, String password) throws Exception {
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from student where id = '" + user + "' and password = '" + password + "'";
        ResultSet rs = stat.executeQuery(sql);
        Student stu = getStudent(rs);
        closeConnection();
        return stu;
    }
    public Student findWithId(String id) throws Exception{
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from student where id = '" + id + "'";
        ResultSet rs = stat.executeQuery(sql);
        Student stu = getStudent(rs);
        closeConnection();
        return stu;
    }
    public ArrayList<Student> findWithName(String name) throws Exception{
        ArrayList<Student> al = new ArrayList<>();
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "select * from student where name = '" + name + "'";
        ResultSet rs = stat.executeQuery(sql);
        getMoreStudent(al, rs);
        closeConnection();
        return al;
    }
    public boolean deleteStudent(String id) throws Exception{
        initConnection();
        Statement stat = conn.createStatement();
        String sql = "delete from student where id='"+id+"'";
        int i = stat.executeUpdate(sql);
        closeConnection();
        return i==1;
    }
\`\`\`

checkAccount \u8C03\u7528

\`\`\`
checkAccount(String, String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
    \u672A\u5206\u7C7B  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
            servlet  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                check_login  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    doGet(HttpServletRequest, HttpServletResponse)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        43 student = studentD.checkAccount(user, password);
\`\`\`

findWithId \u65B9\u6CD5\u8C03\u7528

\`\`\`
findWithId(String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93  (\u627E\u5230 9 \u4E2A\u7528\u6CD5)
    \u672A\u5206\u7C7B  (\u627E\u5230 9 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 9 \u4E2A\u7528\u6CD5)
            servlet  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                one_page_student  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    doGet(HttpServletRequest, HttpServletResponse)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        62 Student student = studentD.findWithId(key);
            web  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                index.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    index.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        32 student = studentD.findWithId(user);
                sendCode.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    sendCode.jsp  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        37 student = studentD.findWithId(id);
            web\\student  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                main.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                    main.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                        58 String name = stuD.findWithId(student.getId()).getName();
                        59 String major = stuD.findWithId(student.getId()).getMajor();
            web\\teacher  (\u627E\u5230 4 \u4E2A\u7528\u6CD5)
                score.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                    score.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                        63 String name = stuD.findWithId(stu.getId()).getName();
                        64 String major = stuD.findWithId(stu.getId()).getMajor();
                score_excel.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                    score_excel.jsp  (\u627E\u5230 2 \u4E2A\u7528\u6CD5)
                        38 String name = stuD.findWithId(stu.getId()).getName();
                        39 String major = stuD.findWithId(stu.getId()).getMajor();
\`\`\`

findWithName \u8C03\u7528

\`\`\`
findWithName(String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
    \u672A\u5206\u7C7B  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
            servlet  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                one_page_student  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    doGet(HttpServletRequest, HttpServletResponse)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        73 ArrayList<Student> stus = studentD.findWithName(key);
\`\`\`

deleteStudent \u8C03\u7528

\`\`\`
deleteStudent(String)
\u7528\u6CD5\u6216\u57FA\u65B9\u6CD5\u7684\u7528\u6CD5 \u4F4D\u7F6E \u9879\u76EE\u548C\u5E93  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
    \u672A\u5206\u7C7B  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
        StudentManager  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
            servlet  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                delete_student  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                    doGet(HttpServletRequest, HttpServletResponse)  (\u627E\u5230 1 \u4E2A\u7528\u6CD5)
                        33 studentD.deleteStudent(id);
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102111702-08fdd066-c8b8-1.png)

2.\u8D8A\u6743\u8BBF\u95EE\u6F0F\u6D1E
\u5728\u767B\u5F55main.jsp\u9875\u9762\u4E2D\u5E76\u6CA1\u6709\u505A\u6743\u9650\u5224\u65AD\u9A8C\u8BC1 \u53EA\u6709\u4E00\u4E2A\u7B80\u5355\u7684session\u4FE1\u606F\u83B7\u53D6 \u5BFC\u81F4\u4E0D\u7528\u767B\u5F55\u5373\u53EF\u8BBF\u95EE\u654F\u611F\u9875\u9762
\u4F46\u662F\u9875\u9762\u4F1A\u62A5500\u9519\u8BEF

\`\`\`
student/main.jsp
<%
    Student student = (Student) session.getAttribute("info");
%>
teacher/main.jsp
<%
    Teacher teacher = (Teacher) session.getAttribute("info");
    ArrayList<Student> stus = (ArrayList<Student>) session.getAttribute("onePageStudent");
    int sumIndex = (int) session.getAttribute("sumIndex");
%>
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112245-d5e5be04-c8b8-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112256-dbe71320-c8b8-1.png)

## \u5BC6\u7801\u91CD\u7F6E\u6F0F\u6D1E

\u8FD9\u4E2A\u662F\u5B66\u751F\u66F4\u65B0\u5BC6\u7801\u7684\u4EE3\u7801

\`\`\`
@WebServlet("/update_student_security")
public class update_student_security extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");
        PrintWriter out = response.getWriter();
        StudentD studentD = new StudentD();
        String id = request.getParameter("id");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        try {
            studentD.updateStudentSecurity(id, email, password);
            out.print("<script>alert(\\"\u4FEE\u6539\u6210\u529F\\");window.location.href='login.jsp';<\/script>");
        }
        catch (Exception e){
            out.print(e);
        }
    }
}
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112427-123c8798-c8b9-1.png)

\u8DDF\u8E2A studentD.updateStudentSecurity \u8D26\u53F7id\u548C\u8D26\u53F7\u5BC6\u7801\u90FD\u662F\u53EF\u63A7\u7684 \u6240\u4EE5\u5B58\u5728\u4EFB\u610F\u8D26\u53F7\u5BC6\u7801\u4FEE\u6539\u6F0F\u6D1E

\`\`\`
public void updateStudentSecurity(String id, String email, String password) throws Exception{
        initConnection();
        String sql = "update student set password=?, email=? where id=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, password);
        ps.setString(2, email);
        ps.setString(3, id);
        ps.executeUpdate();
        closeConnection();
    }
\`\`\`

\u590D\u73B0
[http://localhost:8081/web/update_student_security?id=20162430646&email=&password=123456](http://localhost:8081/web/update_student_security?id=20162430646&email=&password=123456)
\u672A\u6388\u6743\u4EFB\u610F\u4FEE\u6539id\u4E3A20162430646\u7684\u5BC6\u7801

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112439-1958061a-c8b9-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112450-2056f962-c8b9-1.png)

\u540C\u7406teacker \u4E2D\u4E5F\u5B58\u5728\u4EFB\u610F\u8D26\u53F7\u5BC6\u7801\u4FEE\u6539\u6F0F\u6D1E

\`\`\`
@WebServlet("/update_teacher_password")
public class update_teacher_password extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");
        PrintWriter out = response.getWriter();
        TeacherD teacherD = new TeacherD();
        String id = request.getParameter("id");
        String password = request.getParameter("password");
        try {
            teacherD.updateTeacherPassword(id, password);
            out.print("<script>alert(\\"\u4FEE\u6539\u6210\u529F\\");window.location.href='login.jsp';<\/script>");
        }
        catch (Exception e){
            out.print(e);
        }
    }
}
\`\`\`

[http://localhost:8081/web/update_teacher_password?id=1&email=&password=123456](http://localhost:8081/web/update_teacher_password?id=1&email=&password=123456)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112459-25961c5a-c8b9-1.png)

3.4 \u9A8C\u8BC1\u7801\u91CD\u7528\u6F0F\u6D1E
\u9A8C\u8BC1\u7801\u5BF9\u6BD4\u4E4B\u540E\u76F4\u63A5\u8DF3\u8F6C \u5E76\u6CA1\u6709\u8FDB\u884C\u9500\u6BC1 \u6240\u4EE5\u5B58\u5728\u9A8C\u8BC1\u7801\u91CD\u7528\u6F0F\u6D1E

\`\`\`
@WebServlet("/check_register")
public class check_register extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");
        String email = request.getParameter("email");
        String user = request.getParameter("user");
        String password = request.getParameter("password1");
        String code = request.getParameter("code");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        String randStr = (String) session.getAttribute("randStr");
        if (!code.equals(randStr)) {
            out.print("<script>alert(\\"\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF01\\");location.href = \\"register.jsp\\";<\/script>");
        } else {
            TeacherD teacherD = new TeacherD();
            Teacher teacher = null;
            try {
                teacher = teacherD.insertTeacher(user, password, email);
            } catch (Exception e) {
                out.print(e);
            }
            if (teacher != null) {
                //\u5411session\u4E2D\u6DFB\u52A0\u7528\u6237\u4FE1\u606F
                session.setAttribute("info", teacher);
                response.sendRedirect("one_page_student");
            } else {
                out.print("<script>alert(\\"\u6B64\u7528\u6237\u5DF2\u7ECF\u6CE8\u518C\uFF01\\");location.href = \\"register.jsp\\";<\/script>");
            }
        }
    }
\`\`\`

\u590D\u73B0
\u8BBE\u7F6E\u6B63\u786E\u7684\u9A8C\u8BC1\u7801 \u4E4B\u540E \u4E00\u76F4\u91CD\u590D\u63D0\u4EA4\u3002\u5747\u6CA1\u6709\u9A8C\u8BC1\u7801\u9519\u8BEF\u63D0\u793A

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112512-2cf3cc36-c8b9-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112519-31634dfa-c8b9-1.png)

## \u76EE\u5F55\u7A7F\u8D8A\u6F0F\u6D1E

\u6F0F\u6D1E\u4EE3\u7801

\`\`\`
package servlet;
import com.jspsmart.upload.File;
import com.jspsmart.upload.Request;
import com.jspsmart.upload.SmartUpload;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
@WebServlet("/upload_studentImg")
public class upload_studentImg extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");
        PrintWriter out = response.getWriter();
        SmartUpload smartUpload = new SmartUpload();
        Request rq = smartUpload.getRequest();
        ServletConfig config = this.getServletConfig();
        smartUpload.initialize(config, request, response);
        try {
            //\u4E0A\u4F20\u6587\u4EF6
            smartUpload.upload();
            String id = rq.getParameter("id");
            File smartFile = smartUpload.getFiles().getFile(0);
            smartFile.saveAs("/userImg/"+id+".jpeg");
            out.print("<script>alert(\\"\u4E0A\u4F20\u6210\u529F!\\");window.location.href='student/personal.jsp';<\/script>");
        }
        catch (Exception e){
            out.print(e);
        }
    }
}
 String id = rq.getParameter("id"); \u662F\u6CA1\u6709\u8FDB\u884C\u8FC7\u6EE4\u7684
\`\`\`

\u6F0F\u6D1E\u590D\u73B0
\u76EE\u5F55\u8DF3\u8F6C../ \u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u90FD\u4E0D\u540C\u7684\u76EE\u5F55

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112531-38a634e2-c8b9-1.png)

## xss\u6F0F\u6D1E

jsp\u6587\u4EF6\u4E2D\u4F7F\u7528 <%=xx%> \u8FD9\u79CD\u8868\u8FBE\u5F0F \u5E76\u6CA1\u6709\u5BF9xss\u6076\u610F\u811A\u672C\u8FDB\u884C\u8FC7\u6EE4 \u6240\u4EE5\u5168\u5C40\u7528\u5230\u90FD\u5B58\u5728xss\u6F0F\u6D1E

\`\`\`
<tr>
                        <td height="35"><%=stu.getId()%></td>
                        <td><%=name%></td>
                        <td><%=major%></td>
                        <td><input value="<%=stu.getDatabase()%>" name="database" class="table-input"></td>
                        <td><input value="<%=stu.getAndroid()%>" name="android" class="table-input"></td>
                        <td><input value="<%=stu.getJsp()%>" name="jsp" class="table-input"></td>
                        <input value="<%=stu.getId()%>" name="id" type="hidden">
\`\`\`                    </tr>
\u6F0F\u6D1E\u9A8C\u8BC1
\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F \u586B\u5199 xss\u6076\u610F\u811A\u672C
\`\`\`

">alert(1)<"
\`\`\`

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112540-3e2a7f9a-c8b9-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112549-43388bd0-c8b9-1.png)

![](https://xzfile.aliyuncs.com/media/upload/picture/20250102112557-48082bfc-c8b9-1.png)`;export{e as _};
