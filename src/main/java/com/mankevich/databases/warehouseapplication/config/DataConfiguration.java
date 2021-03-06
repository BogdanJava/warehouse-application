package com.mankevich.databases.warehouseapplication.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author Bogdan Shishkin bogdanshishkin1998@gmail.com
 * created on 12/11/2018
 */
@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.mankevich.databases.warehouseapplication.repository")
public class DataConfiguration {
}
