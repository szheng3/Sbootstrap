import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // this.route.url.pipe(tap(value => console.log(value))).subscribe();
    // this.route.paramMap.pipe(tap(value => console.log(value))).subscribe();
  }

  ngOnInit() {
  }

}
