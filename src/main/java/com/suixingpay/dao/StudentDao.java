/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: hexin[he_xin@suixingpay.com]
 * @date: 2018年10月27日 13时53分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.dao;

import com.suixingpay.pojo.Student;

import java.util.List;

public interface StudentDao {

    void addStudent(Student student);

    void deleteStudent(List<String> ids);

    void editStudent(Student student);

    List<Student> getAllStudent();

    Student getStudentById(String id);

    List<Student> getStudentByName(String name);


}
