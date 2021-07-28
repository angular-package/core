import {
  Component,
  // ComponentFactoryResolver,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  // selector: 'dynamic-component',
  template: `Dynamic component created succesfully`
})
export class DynamicComponent {

  firstName = 'My first name';
  lastName = 'My last name';
  age = 27;
  birthDay = 1;
  birthMonth = 2;
  birthYear = 2050;
  happy = false;
  model = {
    defined: true
  };


  get justBirthDay(): number {
    return this.birthDay;
  }
  set justBirthDay(value: number) {
    this.birthDay = value;
  }

  get getAge(): number {
    return this.age;
  }

  @Output() event: EventEmitter<any> = new EventEmitter();

  emit(): void {
    this.event.emit('event');
  }

  emitComplete(): void {
    this.event.complete();
  }

  emitError(): void {
    this.event.error({
      error: new Error('event error')
    });
  }
}
