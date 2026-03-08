import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoIonic, ionLogoElectron } from '@ng-icons/ionicons';
import {
  diJavaPlain,
  diVimPlain,
  diAngularPlain,
  diJavascriptPlain,
  diCss3Plain,
  diHtml5Plain,
  diCsharpPlain,
  diChartjsPlain,
  diCplusplusPlain,
  diFirebasePlain,
  diTypescriptPlain,
  diSqlitePlain,
} from '@ng-icons/devicon/plain';
import { diTailwindcssOriginal } from '@ng-icons/devicon/original';

@Component({
  selector: 'app-chip',
  styleUrl: './chip.scss',
  templateUrl: './chip.html',
  imports: [NgIcon],
  providers: provideIcons({
    diAngularPlain,
    diVimPlain,
    diTailwindcssOriginal,
    diChartjsPlain,
    diCsharpPlain,
    diSqlitePlain,
    diFirebasePlain,
    diJavascriptPlain,
    diCss3Plain,
    diHtml5Plain,
    ionLogoElectron,
    diJavaPlain,
    diTypescriptPlain,
    diCplusplusPlain,
    ionLogoIonic,
  }),
})
export class ChipComponent {
  @Input() iconName: string = '';
  @Input({ required: true }) text: string = '';
}
