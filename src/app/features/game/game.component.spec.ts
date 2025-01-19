import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GameComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render chessboard placeholder', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toBe('Échiquier');
    expect(compiled.querySelector('p')?.textContent).toBe('Échiquier en cours d\'implémentation...');
  });
});
