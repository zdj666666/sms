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
public class stucontroller {

    @Autowired
    StudentService studentService;


    @RequestMapping(value = "/check")
    public String itemList3() throws Exception{

        Student student=studentService.getStudentById("1");
        System.out.println(student.getName());
        return "check";
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





}
