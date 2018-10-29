package com.example.controller;

import com.suixingpay.pojo.Student;
import com.suixingpay.service.StudentService;
import com.suixingpay.service.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 2018/10/28.
 */
@Controller
public class MainController {

    @Autowired
    StudentService studentService;
    /*这里是测试操作。
     * 在 suixingpay/controller/StudentController中为真正入口
      * */
    @RequestMapping(value={"/noConnection"})
    public String noJDBConnection(){
        List<Student> perStudent=studentService.getAllStudent();
        System.out.println(perStudent.get(0).getName());
        return "login";
    }




}
