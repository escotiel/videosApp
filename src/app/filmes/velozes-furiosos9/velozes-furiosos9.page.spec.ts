import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VelozesFuriosos9Page } from './velozes-furiosos9.page';

describe('VelozesFuriosos9Page', () => {
  let component: VelozesFuriosos9Page;
  let fixture: ComponentFixture<VelozesFuriosos9Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VelozesFuriosos9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VelozesFuriosos9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
