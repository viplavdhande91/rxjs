import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const observable$ = new Observable<string>((observer) => {
      try {
        observer.next('Peter');

        setTimeout(() => {
          observer.next('Lisa');
        }, 3000);

        setTimeout(() => {
          observer.next('Charlie');
        }, 6000);
      } catch (e) {
        observer.error(e);
      }
    });

    const subscription = observable$.subscribe((value) => console.log(value));

    setTimeout(() => {
      console.log('Unsubscribe');
      subscription.unsubscribe();
    }, 3000);
  }
}
