import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Metal } from '@mines/api-interfaces';

@Component({
  selector: 'mines-metal-details',
  templateUrl: './metal-details.component.html',
  styleUrls: ['./metal-details.component.scss'],
})
export class MetalDetailsComponent {
  currentMetal: Metal;
  originalName: string;

  @Input() set metal(value: Metal | null) {
    if (value) this.originalName = value.name;
    this.currentMetal = Object.assign({}, value);
  }
  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(metal: Metal) {
    this.saved.emit(metal);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
