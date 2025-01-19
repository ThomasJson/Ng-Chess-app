import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GameComponent } from './game.component';
import { provideLocationMocks } from '@angular/common/testing';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent],
      providers: [
        provideRouter([
          { path: '', component: GameComponent }
        ]),
        provideLocationMocks()
      ],
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

    // Vérifie si l'en-tête "Échiquier" est rendu
    const header = compiled.querySelector('h2');
    expect(header).toBeTruthy();
    expect(header?.textContent).toBe('Échiquier');

    // Vérifie si le texte "Échiquier en cours d'implémentation..." est rendu
    const placeholder = compiled.querySelector('p');
    expect(placeholder).toBeTruthy();
    expect(placeholder?.textContent).toBe("Échiquier en cours d'implémentation...");
  });
});