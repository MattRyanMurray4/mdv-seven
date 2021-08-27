import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyMetal, Metal } from '@mines/api-interfaces';
import { MetalsFacade } from '@mines/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'mines-metals',
  templateUrl: './metals.component.html',
  styleUrls: ['./metals.component.scss'],
})
export class MetalsComponent implements OnInit {
  metals$: Observable<Metal[]> = this.metalsFacade.allMetals$;
  selectedMetal$: Observable<Metal> = this.metalsFacade.selectedMetal$;
  form: FormGroup;

  constructor(
    private metalsFacade: MetalsFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.metalsFacade.loadMetals();
    this.reset();
  }

  selectMetal(metal: Metal) {
    this.metalsFacade.selectMetal(metal.id);
    this.form.patchValue(metal);
  }

  reset() {
    this.selectMetal(emptyMetal);
    this.form.reset();
  }

  createMetal(metal: Metal) {
    this.metalsFacade.createMetal(metal);
    this.reset();
  }

  updateMetal(metal: Metal) {
    this.metalsFacade.updateMetal(metal);
    this.reset();
  }

  saveMetal(metal: Metal) {
    metal.id
      ? this.metalsFacade.updateMetal(metal)
      : this.metalsFacade.createMetal(metal);
  }

  deleteMetal(metal: Metal) {
    this.metalsFacade.deleteMetal(metal);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      classification: ['', Validators.required],
      valuePerOunce: ['', Validators.required],
      meltingPoint: ['', Validators.required],
      preciousMetal: [''],
    });
  }
}
