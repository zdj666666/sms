package com.suixingpay.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

        List<Student> perStudent=studentService.getAllStudent();
        System.out.println(perStudent.get(0).getName());

        return "check";
    }





}
