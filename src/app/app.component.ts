import {Component, inject, Input} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() dataSource = inject(DataService).datasource;
  @Input() tab =false;

  isShow(data:any) {
    data.isVisible = data.isVisible !== true;
  }

  getStyle(tab: number) {
    return {'display': 'inline-block', 'margin-left': tab*40+'px'};
  }
}
