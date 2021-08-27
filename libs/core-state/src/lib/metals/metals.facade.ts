import { MetalsService, NotifyService } from '@mines/core-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Metal } from '@mines/api-interfaces';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetalsFacade {
  private _allMetalsSource$ = new BehaviorSubject<Metal[]>([]);
  allMetals$: Observable<Metal[]> = this._allMetalsSource$.asObservable();
  private _selectedMetalSource$ = new BehaviorSubject<Metal>({} as Metal);
  selectedMetal$: Observable<Metal> = this._selectedMetalSource$.asObservable();

  constructor(
    private metalsService: MetalsService,
    private notify: NotifyService
  ) {}

  loadMetals() {
    this.metalsService
      .all()
      .pipe(
        tap((metals) => this._allMetalsSource$.next(metals)),
        take(1)
      )
      .subscribe();
  }

  selectMetal(metalId: string) {
    return this.metalsService
      .find(metalId)
      .pipe(
        tap((metalId) => this._selectedMetalSource$.next(metalId)),
        take(1)
      )
      .subscribe(() => {
        this.loadMetals();
      });
  }

  createMetal(metal: Metal) {
    return this.metalsService
      .create(metal)
      .pipe(
        tap((metal) => this._selectedMetalSource$.next(metal)),
        take(1)
      )
      .subscribe(() => {
        this.loadMetals();
        this.notify.notification(`Created ${metal.name} successfully!`);
      });
  }

  updateMetal(metal: Metal) {
    return this.metalsService
      .update(metal)
      .pipe(
        tap((metal) => this._selectedMetalSource$.next(metal)),
        take(1)
      )
      .subscribe(() => {
        this.loadMetals();
        this.notify.notification(`Updated ${metal.name} successfully!`);
      });
  }

  deleteMetal(metal: Metal) {
    return this.metalsService
      .delete(metal)
      .pipe(
        tap((metal) => this._selectedMetalSource$.next(metal)),
        take(1)
      )
      .subscribe(() => {
        this.loadMetals();
        this.notify.notification(`Deleted ${metal.name} successfully!`);
      });
  }
}
