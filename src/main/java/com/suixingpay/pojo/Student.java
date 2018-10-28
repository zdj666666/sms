/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: hexin[he_xin@suixingpay.com]
 * @date: 2018年10月27日 13时55分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.pojo;

import java.io.Serializable;
import java.util.Date;

public class Student implements Serializable {

    private String id;          //学号
    private String name;        //姓名
    private Integer age;        //年龄
    private String sex;         //性别
    private String classes;     //班级
    private String teacher;     //老师
    private Date createTime;    //创建时间
    private Date enrolment;     //入学年份
    private boolean status;     //是否毕业

    public Student() {
        super();
    }

    public Student(String id, String name, Integer age, String sex, String classes, String teacher, Date createTime, Date enrolment, boolean status) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.classes = classes;
        this.teacher = teacher;
        this.createTime = createTime;
        this.enrolment = enrolment;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge(int i) {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getClasses() {
        return classes;
    }

    public void setClasses(String classes) {
        this.classes = classes;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public Date getCreateTime(Date date) {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getEnrolment() {
        return enrolment;
    }

    public void setEnrolment(Date enrolment) {
        this.enrolment = enrolment;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
