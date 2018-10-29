package com.suixingpay.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import com.suixingpay.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/student")
public class AddStudentController {

    @Autowired
    StudentService studentService;

    @RequestMapping("addStudent")
    public String addStudent(HttpServletRequest request){

        String getStuId=request.getParameter("StuId");

        System.out.println("这里的学生Id"+getStuId);
        if(getStuId==null) {
            return "add";
        }else{
            String getStuName=request.getParameter("Name");
            System.out.println(getStuName);
            Integer getStuAge=Integer.parseInt(request.getParameter("Age"));
            System.out.println(getStuAge);
            Student student=new Student();
                    student.setId(getStuId);
                    student.setAge(getStuAge);
                    student.setName(getStuName);
                    studentService.addStudent(student);
            List<Student> studentsList = studentService.getAllStudent();
            request.setAttribute("allStudent",studentsList);
            return "check";
        }
        }

    @RequestMapping("deleteStudent")
    public String deleteStudent(HttpServletRequest request){
        List<String> allList=new ArrayList<String>();
        String getStuId=request.getParameter("allId");
        System.out.println("这里的学生Id==========="+getStuId);
        String[] getper=getStuId.split(",");
       for(int i=0;i<getper.length;i++){
           allList.add(getper[i]);
           System.out.println("这里是对应的Id值:"+getper[i]);
       }
        //在这里写入删除操作:
        studentService.deleteStudent(allList);

        List<Student> studentsList = studentService.getAllStudent();
        request.setAttribute("allStudent",studentsList);
        return "check";



    }

}
