import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookStoreComponent } from './search-book-store.component';

describe('SearchBookStoreComponent', () => {
  let component: SearchBookStoreComponent;
  let fixture: ComponentFixture<SearchBookStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBookStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
