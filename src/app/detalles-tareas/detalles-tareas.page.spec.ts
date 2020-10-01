import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesTareasPage } from './detalles-tareas.page';

describe('DetallesTareasPage', () => {
  let component: DetallesTareasPage;
  let fixture: ComponentFixture<DetallesTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
