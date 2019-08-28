import {Component, OnInit} from '@angular/core';
import {LibComponent} from 'src/app/share/lib.component';
import {debounce, debounceTime, defaultIfEmpty, distinct, map, shareReplay, startWith, takeLast, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable, of, timer} from 'rxjs'; // For RxJs  5.0+
import {Location} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends LibComponent implements OnInit {
  url$: Observable<string>;
  current: string;

  constructor(private router: Router, private location: Location) {
    super();
    this.current = location.path();
    // this.location;
    // this.url$ = of(this.location);

  }

  ngOnInit() {
    this.url$ = this.router.events.pipe(
      debounceTime( 0),
      startWith(this.location.path()),
      tap(x => console.log(x)),
      map(() => this.location.path().split('/').reduce((previousValue, currentValue) => currentValue)),
    );

  }

}
