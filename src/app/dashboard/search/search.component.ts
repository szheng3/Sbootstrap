import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

  getColor(url: string) {
    const factory = {
      dashboard: 'btn-primary',
      categories: 'btn-warning',
      users: 'btn-success',
    };
    return factory[url.toLowerCase()] || 'btn-info';
  }

}
