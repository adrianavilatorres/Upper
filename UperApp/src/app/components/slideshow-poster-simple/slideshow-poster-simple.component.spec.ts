import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideshowPosterSimpleComponent } from './slideshow-poster-simple.component';

describe('SlideshowPosterSimpleComponent', () => {
  let component: SlideshowPosterSimpleComponent;
  let fixture: ComponentFixture<SlideshowPosterSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowPosterSimpleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideshowPosterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
