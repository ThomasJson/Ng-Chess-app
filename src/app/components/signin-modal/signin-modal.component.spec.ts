import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SigninModalComponent } from './signin-modal.component';
import { provideLocationMocks } from '@angular/common/testing';

describe('SigninModalComponent', () => {
  let component: SigninModalComponent;
  let fixture: ComponentFixture<SigninModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninModalComponent],
      providers: [
        provideRouter([]),
        provideLocationMocks()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SigninModalComponent', () => {
    expect(component).toBeTruthy();
  });
});
