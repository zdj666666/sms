package com.suixingpay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan("com.suixingpay")
public class SmsApplication {



	public static void main(String[] args) {
		SpringApplication.run(SmsApplication.class, args);
	}

}
