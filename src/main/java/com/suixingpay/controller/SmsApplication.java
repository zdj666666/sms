package com.suixingpay.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;


@Controller
@SpringBootApplication
@Configuration
public class SmsApplication {



	public static void main(String[] args) {
		SpringApplication.run(SmsApplication.class, args);
	}

}
