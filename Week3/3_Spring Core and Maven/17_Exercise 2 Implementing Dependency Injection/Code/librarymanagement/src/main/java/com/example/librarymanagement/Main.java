package com.example.librarymanagement;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.librarymanagement.service.BookService;
public class Main {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		BookService bookService = (BookService) context.getBean("bookService");

		bookService.addBook("Spring in Action");

		((ClassPathXmlApplicationContext) context).close();
	}
}
