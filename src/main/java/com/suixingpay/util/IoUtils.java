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
import java.util.ArrayList;
import java.util.List;

public class IoUtils {

    /**
     * 把对象写入到文件中
     * @param t 任何对象
     * @param <T>
     */
    public static <T> void writeStudentInfo(T t){
        File file = null;
        FileOutputStream fileOutputStream = null;
        ObjectOutputStream objectOutputStream = null;

        try {
            file = new File("F:\\studentDb.txt");
            fileOutputStream = new FileOutputStream(file, true);
            //如果数据库文件还没有被创建就创建有标识头的对象流，否则创建自定义的没有标识头的对象流
            if (file.length() < 1) {
                objectOutputStream = new ObjectOutputStream(fileOutputStream);
            } else {
                objectOutputStream = new MyObjectOutputStream(fileOutputStream);
            }
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

        // 保存文件中保存的对象
        List<T> list = new ArrayList<T>();
        ObjectInputStream objectInputStream = null;
        FileInputStream fileInputStream = null;
        try {
            fileInputStream = new FileInputStream("F:\\studentDb.txt");
            objectInputStream = new ObjectInputStream(fileInputStream);
        } catch (IOException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");
        }
        // 循环取出所有的对象
        while (true) {
            try {
                T t = (T) objectInputStream.readObject();
                list.add(t);
            } catch (EOFException e) {
                e.printStackTrace();
                // 达到文件末尾退出循环
                break;
            } catch (Exception e) {
                e.printStackTrace();
                throw new ServerException("服务器出现故障，请尽快联系管理员！");
            }
        }
        return list;
    }
}
