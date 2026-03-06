import { Component, DOCUMENT, ElementRef, HostListener, Inject, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ParticlesConfigDark, ParticlesConfigLight } from './particles-config';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroChevronUpSolid } from '@ng-icons/heroicons/solid';

declare let particlesJS: any;

let theme: 'light' | 'dark' = 'dark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NgIcon],
  providers: [provideIcons({ heroChevronUpSolid })],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('PortfolioLaboratorio');

  theme = theme;
  showScrollTop = false;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  onScroll(event: Event) {
    const el = event.target as HTMLElement;
    this.showScrollTop = el.scrollTop > 300;
  }

  scrollToTop() {
    this.scrollContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    invokeParticles();
  }

  toggleTheme() {
    const htmlEl = this.document.documentElement;
    if (this.theme === 'dark') {
      this.renderer.removeClass(htmlEl, 'dark');
      this.theme = 'light';
    } else {
      this.renderer.addClass(htmlEl, 'dark');
      this.theme = 'dark';
    }
    theme = this.theme;
    invokeParticles();
  }
}

export function invokeParticles(): void {
  particlesJS(
    'particles-js',
    theme === 'dark' ? ParticlesConfigDark : ParticlesConfigLight,
    function () {},
  );
}
