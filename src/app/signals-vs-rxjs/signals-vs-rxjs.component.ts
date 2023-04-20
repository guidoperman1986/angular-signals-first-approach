import { Component, signal, computed, effect } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signals-vs-rxjs',
  templateUrl: './signals-vs-rxjs.component.html',
  styleUrls: ['./signals-vs-rxjs.component.css'],
})
export class SignalsVsRxjsComponent {
  constructor() {
    effect(()=>{
      console.log(`Count: ${this.count()}, Count2: ${this.count2()}`)
      console.log(`Signal for effect ${this.signalForEffect()}`);
    });
  }

  value = 10

  //signals
  public count = signal(10);
  public doubleCount = computed(() => this.count() * 2);
  public signalForEffect = signal(this.value);

  public count2 = signal(5);
  public count1PlusCount2 = computed(() => this.count() + this.count2());

  //rxjs
  public count$ = new BehaviorSubject(10);
  public doubleCount$ = this.count$.pipe(map((value) => value * 2));

  public count2$ = new BehaviorSubject(5);

  public count1PlusCount2$ = combineLatest([this.count$, this.count2$])
    .pipe(
      map(([count1, count2])=> count1 + count2)
    )

  triggerChanges() {
    this.count.set(15);
    this.count$.next(15);

    this.signalForEffect.set(this.value+=1)
  }
}
