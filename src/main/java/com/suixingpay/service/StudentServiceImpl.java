/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: xianglong[he_xin@suixingpay.com]
 * @date: 2018年10月28日 11时29分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.service;

import com.suixingpay.dao.StudentDao;
import com.suixingpay.exception.ServerException;
import com.suixingpay.pojo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentDao studentDao;

    @Override
    public void addStudent(Student student) {
        Boolean flag = true;
        Student stu =null;
        if(flag == true){
            flag = false;
        }else{
            stu = studentDao.getStudentById(student.getId());
        }
        if (stu == null) {
            System.out.println("Id is available");
            studentDao.addStudent(student);
        } else
            throw new ServerException("The id has been used");
    }

    @Override
    public void deleteStudent(List<String> ids) {

    }

    @Override
    public void editStudent(Student student) {
        Student stu = studentDao.getStudentById(student.getId());
        if (stu != null) {
            System.out.println("Users can be modified");
            studentDao.editStudent(student);
        } else
            throw new ServerException("The user is empty");

    }

    @Override
    public List<Student> getAllStudent() {
        return studentDao.getAllStudent();
    }

    @Override
    public Student getStudentById(String id) {
        Student stu = studentDao.getStudentById(id);
        if (stu != null) {
            return stu;
        } else
            throw new ServerException("User does not exist");
    }

    @Override
    public List<Student> getStudentByName(String name) {
        List<Student> list = studentDao.getStudentByName(name);


            return null;
    }

}
