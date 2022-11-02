import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example-api';
  private user: User = { 
      'name': '5/',
      'height': '172',
      'mass': '77',
      'hair_color': 'blond',
      'skin_color': 'fair',
      'eye_color': 'blue',
      'birth_year': '19BBY',
      'gender': 'male',
      'homeworld': 'https://swapi.py4e.com/api/planets/1/',
      'films': [
        'https://swapi.py4e.com/api/films/2/',
        'https://swapi.py4e.com/api/films/6/',
        'https://swapi.py4e.com/api/films/3/',
        'https://swapi.py4e.com/api/films/1/',
        'https://swapi.py4e.com/api/films/7/'
      ],
      'species': [
        'https://swapi.py4e.com/api/species/1/'
      ],
      'vehicles': [
        'https://swapi.py4e.com/api/vehicles/14/',
        'https://swapi.py4e.com/api/vehicles/30/'
      ],
      'starships': [
        'https://swapi.py4e.com/api/starships/12/',
        'https://swapi.py4e.com/api/starships/22/'
      ],
      'created': '2014-12-09T13:50:51.644000Z',
      'edited': '2014-12-20T21:17:56.891000Z',
      'url': 'https://swapi.py4e.com/api/people/1'
    }


  constructor(private userService: UserService){}

  ngOnInit(): void{
    //this.onGetUsers();
    this.onUpdateUser();
    this.onGetUser();
    this.onCreateUser();
  }

  onGetUsers(): void {
      this.userService.getUsers().subscribe(
        (response) => console.table(response),
        (error: any) => console.log(error),
        () => console.log('Done getting users'),
      );
 }

 onGetUser(): void {
  this.userService.getUser().subscribe(
    (response) => console.log(response),
    (error: any) => console.log(error),
    () => console.log('Done getting user'),
  );
}

onCreateUser(): void {
  this.userService.createUser(this.user).subscribe(
    (response) => console.log(response),
    (error: any) => console.log(error),
    () => console.log('Done creating user'),
  );
}

onUpdateUser(): void {
  this.userService.updateUser(this.user).subscribe(
    (response) => console.log(response),
    (error: any) => console.log(error),
    () => console.log('Done updating user'),
  );
}


}
