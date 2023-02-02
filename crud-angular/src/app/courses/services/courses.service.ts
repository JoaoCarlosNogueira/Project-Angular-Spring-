import { APP_ID, Injectable } from '@angular/core';
import { Course } from '../model/course';
import{HttpClient} from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
  
})
export class CoursesService {

<<<<<<< HEAD
  private readonly API = '/api/courses';
  
=======
  private readonly API = 'assets/cursos.json';
>>>>>>> parent of bc6410aa (refactor: changing api route at Angular)
  
  constructor(private httpClient: HttpClient) { }
  
  list(){  
    return this.httpClient.get<Course[]>(this.API).pipe( 
      first(),
      //delay(5000),
    tap(courses => console.log(courses))
    )
  }

}
