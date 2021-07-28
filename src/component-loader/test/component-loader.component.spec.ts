import { ComponentFixture, TestBed } from '@angular/core/testing';
// @angular-package/testing.
import {
  // Class.
  Testing
} from '@angular-package/testing';
// Module.
import { TestModule } from './module/test.module';
// Component.
import { ComponentLoaderComponent } from './module/component-loader.component';
/**
 * Testing instance.
 */
const testing = new Testing(false, true);
/**
 * Tests.
 */
testing.describe('ComponentLoaderComponent', () => {
  let component: ComponentLoaderComponent;
  let fixture: ComponentFixture<ComponentLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLoaderComponent ],
      imports: [ TestModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing.it('', () => {
  //   console.log(component);
  //   expect(component).toBeTruthy();
  // });
  testing.it('', () => {
    console.log(fixture);
    // testing.toBeInstanceOfObject();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
