import { Component } from '@angular/core';

declare var showSearchResult: boolean;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;

  //asign the global variable to a component property
  showSearchResult: boolean = showSearchResult;
}
