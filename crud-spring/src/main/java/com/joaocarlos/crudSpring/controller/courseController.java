package com.joaocarlos.crudSpring.controller;

import com.joaocarlos.crudSpring.model.Course;
import com.joaocarlos.crudSpring.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class courseController {

    //@Autowired
    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list (){
        return courseRepository.findAll();
    }

}
