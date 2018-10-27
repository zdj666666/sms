/**
 * All rights Reserved, Designed By Suixingpay.
 *
 * @author: hexin[he_xin@suixingpay.com]
 * @date: 2018年10月27日 15时00分
 * @Copyright 2018 Suixingpay. All rights reserved.
 * 注意：本内容仅限于随行付支付有限公司内部传阅，禁止外泄以及用于其他的商业用途。
 */
package com.suixingpay.util;

import com.suixingpay.exception.ServerException;
import java.io.*;
import java.util.Arrays;
import java.util.List;

public class IoUtils {

    /**
     * 把对象写入到文件中
     * @param t 任何对象
     * @param <T>
     */
    public static <T> void writeStudentInfo(T t){

        try {
            // 拿到学生数据库的txt输出文件流
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream("F:\\studentDb.txt"));
            // 把对象写入到文件中
            objectOutputStream.writeObject(t);
        } catch (IOException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");
        }
    }

    /**
     * 在文件里取出所有的对象
     * @param clazz 判断返回的对象类型
     * @param <T>
     * @return 返回集合对象
     */
    public static <T> List<T> readStudentInfo(Class<T> clazz){

        try {
            // 拿到学生数据库的txt输入文件流
            ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream("F:\\studentDb.txt"));
            // 拿到txt保存的所有的对象
            T[] object = (T[])objectInputStream.readObject();
            List<T> t = Arrays.asList(object);
            return t;
        } catch (IOException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");

        }
    }
}
