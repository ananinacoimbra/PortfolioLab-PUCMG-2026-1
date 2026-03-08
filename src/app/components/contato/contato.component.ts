import { Component, inject, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroPaperAirplaneSolid } from '@ng-icons/heroicons/solid';
import { TranslationService } from '../../services/translation.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contato',
  styleUrl: './contato.scss',
  templateUrl: './contato.html',
  imports: [FormsModule, NgIcon],
  providers: [provideIcons({ heroPaperAirplaneSolid })],
})
export class ContatoComponent implements AfterViewInit {
  tSer = inject(TranslationService);

  contato = {
    nome: '',
    email: '',
    mensagem: '',
  };

  isLoading = false;
  successMessage = '';
  errorMessage = '';

  // Configurações do EmailJS - substitua com suas chaves
  private readonly SERVICE_ID = environment.EMAILJS_SERVICE_ID;
  private readonly TEMPLATE_ID = environment.EMAILJS_TEMPLATE_ID;
  private readonly PUBLIC_KEY = environment.EMAILJS_PUBLIC_KEY;

  ngAfterViewInit() {
    emailjs.init(this.PUBLIC_KEY);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      // Template no EmailJS tem que estar com os campos {{name}}, {{email}} e {{message}}
      emailjs
        .send(this.SERVICE_ID, this.TEMPLATE_ID, {
          name: this.contato.nome,
          email: this.contato.email,
          message: this.contato.mensagem,
        })
        .then(
          () => {
            this.successMessage = 'Mensagem enviada com sucesso!';
            form.resetForm();
            this.contato = {
              nome: '',
              email: '',
              mensagem: '',
            };
            this.isLoading = false;
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          },
          (error) => {
            this.errorMessage = `Erro ao enviar mensagem: ${(error as EmailJSResponseStatus).text}`;
            this.isLoading = false;
            console.error('Erro ao enviar email:', error);
          },
        );
    }
  }
}
