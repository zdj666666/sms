package com.suixingpay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by acer1 on 2018/10/27.
 */

@Controller
@RequestMapping("/student")
public class stucontroller {


    @RequestMapping(value = "check.action")
    public String itemList3() throws Exception{

        return "check";
    }





}
