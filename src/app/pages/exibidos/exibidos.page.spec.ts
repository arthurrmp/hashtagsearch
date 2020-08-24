import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExibidosPage } from './exibidos.page';

describe('ExibidosPage', () => {
  let component: ExibidosPage;
  let fixture: ComponentFixture<ExibidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExibidosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExibidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
