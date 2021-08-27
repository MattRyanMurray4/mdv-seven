import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Metal } from '@mines/api-interfaces';

@Component({
  selector: 'mines-metals-list',
  templateUrl: './metals-list.component.html',
  styleUrls: ['./metals-list.component.scss'],
})
export class MetalsListComponent {
  @Input() metals: Metal[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
