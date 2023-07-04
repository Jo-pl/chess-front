import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessViewerComponent } from './chess-viewer.component';

describe('ChessViewerComponent', () => {
  let component: ChessViewerComponent;
  let fixture: ComponentFixture<ChessViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
