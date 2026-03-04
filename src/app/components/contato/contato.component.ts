import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPaperAirplaneSolid } from '@ng-icons/heroicons/solid';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contato',
  styleUrl: './contato.scss',
  templateUrl: './contato.html',
  imports: [FormsModule, NgIcon],
  providers: [provideIcons({ heroPaperAirplaneSolid })],
})
export class ContatoComponent {
  tSer = inject(TranslationService);

  contato = {
    nome: '',
    email: '',
    mensagem: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário enviado:', this.contato);
      alert('Mensagem enviada com sucesso!');
      form.resetForm();
    }
  }
}
