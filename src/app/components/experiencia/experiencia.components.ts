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
    { titleKey: 'expTitulo1', year: '2018', descriptionKey: 'expDescricao1', detailKey: 'expDetalhe1', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
    { titleKey: 'expTitulo2', year: '2019', descriptionKey: 'expDescricao2', detailKey: 'expDetalhe2', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
    { titleKey: 'expTitulo3', year: '2020', descriptionKey: 'expDescricao3', detailKey: 'expDetalhe3', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
    { titleKey: 'expTitulo4', year: '2021', descriptionKey: 'expDescricao4', detailKey: 'expDetalhe4', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
    { titleKey: 'expTitulo5', year: '2022', descriptionKey: 'expDescricao5', detailKey: 'expDetalhe5', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
    { titleKey: 'expTitulo6', year: '2023', descriptionKey: 'expDescricao6', detailKey: 'expDetalhe6', image: 'https://miro.medium.com/1*Kj8Eq401fP2ecTY8r9B89Q.png' },
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
