import { APP_ID, Injectable } from '@angular/core';
import { Course } from '../model/course';
import{HttpClient} from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
  
})
export class CoursesService {

  private readonly API = 'localhost:8080/api/courses';
  
  //AJAX
  constructor(private httpClient: HttpClient) { }
  
  list(){  
    return this.httpClient.get<Course[]>(this.API).pipe( 
      first(),
      //delay(5000),
    tap(courses => console.log(courses))
    )
  }

}
