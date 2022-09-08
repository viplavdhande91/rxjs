
# Observables 


## A)

#### 1. [Can we subscribe multiple time? Ans:YES]Each Subscription is seperate individual observable execution.
```

import { Observable } from "rxjs";


const observable$ = new Observable<string>(subscriber => {
  console.log('Observable executed');
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

console.log('Subscription 1 starts');
observable$.subscribe(value => console.log('Subscription 1:', value));

setTimeout(() => {
  console.log('Subscription 2 starts');
  observable$.subscribe(value => console.log('Subscription 2:', value));
}, 1000);
```
```
OUTPUT: 

Subscription 1 starts
2 Observable executed
2 Subscription 1: Alice
2 Subscription 2 starts
2 Observable executed
2 Subscription 2: Alice
2 Subscription 1: Ben
2 Subscription 2: Ben
2 Subscription 1: Charlie
2 Subscription 2: Charlie
```

