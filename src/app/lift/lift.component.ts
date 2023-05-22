import {Component, ContentChild, inject, Input} from '@angular/core';
import {DataService} from "../data.service";
import {ContainRefDirective} from "../contain-ref.directive";

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.scss']
})
export class LiftComponent {
  @Input() dataSource: any ;
  @ContentChild(ContainRefDirective) content!: ContainRefDirective;
  @Input() tab =false;

}
