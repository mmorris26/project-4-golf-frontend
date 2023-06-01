import { useState } from "react";
import { getAllCourses } from "../apis/CourseApis";
import { useEffect } from "react";
import ListOfCourses from "./ListOfCourses";

export default function CoursePage(){
    
    const[newCourse, setNewCourse] = useState({
        name: "",
        par: ""
    })

    const[courseArray, setCourseArray] = useState([])

    function handleCourseTextInput(e){
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    }
useEffect(() => {
    getAllCourses()
        .then((course) => course.json())
        .then((data) => {
            // console.log(data)
            setCourseArray(data)
            
        })
}, []) 
  
    
    return(
        <>
        <h1>Course</h1>
        <form>
            <label>Course Name</label>
                <input
                    name="name"
                    placeholder="Enter the Course name"
                    required
                    value={newCourse.name}
                    onChange={handleCourseTextInput}
                /> 
            <label>Par</label>
                <input
                    name="par"
                    placeholder="What is par for this course"
                    required
                    value={newCourse.par}
                    onChange={handleCourseTextInput}
                /> 
            <button type="submit" onClick={(e) => {
            e.preventDefault();
            
          }}>Create Course</button>
        </form>
        <h1>Or Pick From Our List of Courses</h1>
          <div>
          {courseArray.map(course => (
            <ListOfCourses key={course.id} name={course.name} par={course.par_score} />
          ))}
          </div>
        </>

    );
}