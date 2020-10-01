import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnyadirProyectoPage } from './anyadir-proyecto.page';

describe('AnyadirProyectoPage', () => {
  let component: AnyadirProyectoPage;
  let fixture: ComponentFixture<AnyadirProyectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyadirProyectoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnyadirProyectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
