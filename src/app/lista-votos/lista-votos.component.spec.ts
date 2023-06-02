import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVotosComponent } from './lista-votos.component';

describe('ListaVotosComponent', () => {
  let component: ListaVotosComponent;
  let fixture: ComponentFixture<ListaVotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVotosComponent]
    });
    fixture = TestBed.createComponent(ListaVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
