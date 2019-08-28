import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router, RouterStateSnapshot} from '@angular/router';
import {filter, map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() url: string;

  constructor() {

  }

  getColor(url: string) {
    const factory = {
      dashboard: 'bg-primary',
      categories: 'bg-warning',
      users: 'bg-success',
    };
    return factory[url.toLowerCase()] || 'bg-info';
  }

  ngOnInit() {
    // this.route.pathFromRoot[1].url.subscribe(val => console.log(val[0].path));
    // this.router.changes.subscribe((val) => /*whatever*/)

  }

}
