package com.suixingpay.service;

import com.suixingpay.pojo.Student;

import java.util.List;

public interface StudentService {

    void addStudent(Student student);

    void deleteStudent(List<String> ids);

    void editStudent(Student student);

    List<Student> getAllStudent();

    Student getStudentById(String id);

    List<Student> getStudentByName(String name);
}
