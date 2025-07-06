package dev.rupam.cicdtool;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class CicdAutomationApplication {

	public static void main(String[] args) {
		SpringApplication.run(CicdAutomationApplication.class, args);
	}

}
