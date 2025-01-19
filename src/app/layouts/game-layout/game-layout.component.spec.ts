import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { GameLayoutComponent } from './game-layout.component';

describe('GameLayoutComponent', () => {
  let component: GameLayoutComponent;
  let fixture: ComponentFixture<GameLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLayoutComponent],
      providers: [
        provideRouter([
          { path: '', component: GameLayoutComponent }
        ]),
        provideLocationMocks()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GameLayoutComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the game room title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent?.trim()).toBe('Game Room');
  });

  it('should render navigation and game controls', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const backLink = compiled.querySelector('a');
    const resignButton = compiled.querySelector('button');

    expect(backLink?.textContent?.trim()).toContain('Back');
    expect(resignButton?.textContent?.trim()).toBe('Resign');
  });

  it('should call onResign when resign button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const resignButton = compiled.querySelector('button');
    const spy = spyOn(component, 'onResign');

    resignButton?.click();
    expect(spy).toHaveBeenCalled();
  });
});
