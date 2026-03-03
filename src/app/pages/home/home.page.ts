import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../../components/sobre/sobre.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.components';
import { invokeParticles } from '../../app';

@Component({
  styleUrl: './home.scss',
  templateUrl: './home.html',
  imports: [CommonModule, SobreComponent, ProjetosComponent, ExperienciaComponent],
})
export class HomePage {
  ngOnInit(): void {
    invokeParticles();
  }
}
