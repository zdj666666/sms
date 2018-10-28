package com.suixingpay.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

/**
 * Created by acer1 on 2018/10/27.
 */

@Controller
@RequestMapping("/student")
public class StudentController {

    @Autowired
    StudentService studentService;


    @RequestMapping(value = "/login")
    public String itemList3() throws Exception{

        return "login";
    }

    @RequestMapping(value={"/add.action"})
    public String add(){
        Student stu = new Student();
        stu.setId("1");
        stu.setName("xl");
        stu.getAge(12);
        stu.getCreateTime(new Date());
        studentService.addStudent(stu);
        return "add";
    }

    @RequestMapping(value={"/login.action"})
    public String details(){
        Student stu = new Student();
        stu.setId("1");
        stu.setName("xl");
        stu.getAge(12);
        stu.getCreateTime(new Date());
        studentService.addStudent(stu);
        return "login";
    }





}
