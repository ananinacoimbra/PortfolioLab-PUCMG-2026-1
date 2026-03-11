import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

export interface Experiencia {
  titleKey: string;
  year: string;
  descriptionKey: string;
  detailKey: string;
  image: string;
}

@Component({
  selector: 'app-experiencia',
  styleUrl: './experiencia.scss',
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent {
  tSer = inject(TranslationService);
  selectedExp: Experiencia | null = null;

  experiencias: Experiencia[] = [
    {
      titleKey: 'expTitulo1',
      year: '2026',
      descriptionKey: 'expDescricao1',
      detailKey: 'expDetalhe1',
      image: 'Python.jpeg',
    },
    {
      titleKey: 'expTitulo2',
      year: '2026',
      descriptionKey: 'expDescricao2',
      detailKey: 'expDetalhe2',
      image: '/AG.jpeg',
    },
    {
      titleKey: 'expTitulo3',
      year: '2022',
      descriptionKey: 'expDescricao3',
      detailKey: 'expDetalhe3',
      image: '/arq.jpeg',
    },
    
    
  ];

  openModal(exp: Experiencia) {
    this.selectedExp = exp;
  }

  closeModal() {
    this.selectedExp = null;
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
