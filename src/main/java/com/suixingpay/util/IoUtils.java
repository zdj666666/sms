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
    static File file = null;
    /**
     * 把对象写入到文件中
     * @param t 任何对象
     * @param <T>
     */
    public static <T> void writeStudentInfo(T t){

        FileOutputStream fileOutputStream = null;
        ObjectOutputStream objectOutputStream = null;

        try {

            System.out.println("------???????????");
            file = new File("F:\\studentDb.txt");
            System.out.println("这里的文件没有改变？？？？");
            if (!file.exists()) {

                file.createNewFile();

            }

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
        }finally {
            try {
                if (fileOutputStream != null)
                    fileOutputStream.close();
                if (objectOutputStream != null)
                    objectOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
                throw new ServerException("服务器出现故障，请尽快联系管理员！");
            }
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
            if (!file.exists()) {

                file.createNewFile();

            }
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
        try {
            if (fileInputStream != null)
                fileInputStream.close();
            if (objectInputStream != null)
                objectInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");
        }
        return list;
    }

    /**
     * 覆盖原有文件对象
     * @param list
     * @param <T>
     */
    public static <T> void coverStudentInfo(List<T> list){

        File file = null;
        FileOutputStream fileOutputStream = null;
        ObjectOutputStream objectOutputStream = null;
        file = new File("F:\\studentDb.txt");
        try {
            for(int i = 0;i<list.size();i++){
                // 第一次覆盖时需要覆盖文件并且打印出序列化的头否则不需要
                if(i==0){
                    fileOutputStream = new FileOutputStream(file);
                    objectOutputStream = new ObjectOutputStream(fileOutputStream);
                }else {
                    fileOutputStream = new FileOutputStream(file, true);
                    objectOutputStream = new MyObjectOutputStream(fileOutputStream);
                }
                objectOutputStream.writeObject(list.get(i));
            }
        } catch (IOException e) {
            e.printStackTrace();
            throw new ServerException("服务器出现故障，请尽快联系管理员！");
        } finally {
            try {
                if (fileOutputStream != null)
                    fileOutputStream.close();
                if (objectOutputStream != null)
                    objectOutputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
                throw new ServerException("服务器出现故障，请尽快联系管理员！");
            }
        }
    }
}
