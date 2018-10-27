/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: hexin[he_xin@suixingpay.com]
 * @date: 2018年10月27日 14时55分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.dao;

import com.suixingpay.pojo.Student;
import com.suixingpay.util.IoUtils;

import java.util.List;
import java.util.ListIterator;

public class StudentDaoImpl implements StudentDao{
    @Override
    public void addStudent(Student student) {
        IoUtils.writeStudentInfo(student);
    }

    @Override
    public void deleteStudent(List<String> ids) {
        List<Student> students = IoUtils.readStudentInfo(Student.class);
        ListIterator<Student> iterator = students.listIterator();
        Student student  = null;
        for (String id : ids){
            while (iterator.hasNext()){
                student = iterator.next();
                if(id.equals(student.getId())){
                    iterator.remove();
                }
            }
        }
    }

    @Override
    public void editStudent(Student student) {

    }

    @Override
    public List<Student> getAllStudent() {
        return null;
    }

    @Override
    public Student getStudentById(String id) {
        return null;
    }

    @Override
    public List<Student> getStudentByName(String name) {
        return null;
    }
}
