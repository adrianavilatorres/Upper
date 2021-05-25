import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisSlideshowComponent } from './pelis-slideshow.component';

describe('PelisSlideshowComponent', () => {
  let component: PelisSlideshowComponent;
  let fixture: ComponentFixture<PelisSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
