package com.example.Ex1Junit;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
    public void sampleTest() {
        System.out.println("Test is running!");
    }

}
