import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  translation: any = {};
  private currentLang: 'br' | 'en' = 'br';

  constructor(private http: HttpClient) {
    this.loadTranslation(this.currentLang);
  }

  loadTranslation(lang: 'br' | 'en') {
    return this.http.get(`/i18n/${lang}.json`).subscribe((data: any) => {
      this.translation = data;
      this.currentLang = lang;
    });
  }

  translate(key: string) {
    return this.translation[key] || key;
  }

  get currentLanguage() {
    return this.currentLang;
  }
}
