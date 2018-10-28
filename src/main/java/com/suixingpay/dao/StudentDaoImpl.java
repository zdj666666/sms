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

import java.util.ArrayList;
import java.util.Iterator;
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
        // 覆盖原有文件信息
        IoUtils.coverStudentInfo(students);
    }

    @Override
    public void editStudent(Student student) {

        // 获得文件中所有的对象
        List<Student> students = IoUtils.readStudentInfo(Student.class);
        Iterator<Student> iterator = students.listIterator();
        while (iterator.hasNext()) {
            // 如果id相同则移除掉id相同的对象
            if((iterator.next().getId()).equals(student.getId())){
                iterator.remove();
                break;
            }
        }
        // 把修改之后的对象添加进来
        students.add(student);
        // 覆盖掉文件中的序列化对象
        IoUtils.coverStudentInfo(students);
    }

    @Override
    public List<Student> getAllStudent() {
        return IoUtils.readStudentInfo(Student.class);
    }

    /**
     * 根据学号查询学生信息，如果没有对应的学生则返回null
     * @param id 需要查询的学号
     * @return
     */
    @Override
    public Student getStudentById(String id) {

        // 获得文件中所有的对象
        List<Student> students = IoUtils.readStudentInfo(Student.class);
        Iterator<Student> iterator = students.listIterator();
        Student result = null;
        while (iterator.hasNext()) {
            Student student = iterator.next();
            // 如果id相同则则通过对象保存下来
            if ((student.getId()).equals(id)) {
                result = student;
                break;
            }
        }
        return result;
    }

    /**
     * 根据姓名查询学生的信息，如果没有查询到则返回一个空的集合
     * @param name 需要查询的名称
     * @return
     */
    @Override
    public List<Student> getStudentByName(String name) {
        // 获得文件中所有的对象
        List<Student> students = IoUtils.readStudentInfo(Student.class);
        Iterator<Student> iterator = students.listIterator();
        // 保存和查询名称相同的对象
        List<Student> studentList = new ArrayList<Student>();
        while (iterator.hasNext()) {
            Student student = iterator.next();
            // 如果name相同则保存在集合中
            if ((student.getName()).equals(name)) {
                studentList.add(student);
            }
        }
        return studentList;
    }
}
