/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: hexin[he_xin@suixingpay.com]
 * @date: 2018年10月27日 13时54分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.service;

import com.suixingpay.pojo.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {

    // 添加学生信息
    void addStudent(Student student);
    // 删除学生信息
    void deleteStudent(List<String> ids);
    // 编辑学生信息
    void editStudent(Student student);
    // 获取全部学生信息
    List<Student> getAllStudent();
    // 通过学号获取学生信息
    Student getStudentById(String id);
    // 通过姓名获取学生信息
    List<Student> getStudentByName(String name);

    void deteleStudentById(List<String> stu);
}
