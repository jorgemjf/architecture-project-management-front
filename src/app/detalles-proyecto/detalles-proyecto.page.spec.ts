import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesProyectoPage } from './detalles-proyecto.page';

describe('DetallesProyectoPage', () => {
  let component: DetallesProyectoPage;
  let fixture: ComponentFixture<DetallesProyectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesProyectoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesProyectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
