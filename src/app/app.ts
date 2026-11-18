import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentMode = 'auto';
  
  DATA = {
    nombre: "Karen Ramírez",
    carrera: "Desarrollo de Software Multiplataforma",
    bio: "Me encanta crear con las manos y con el código: dibujo, pinto, hago manualidades y construyo apps que funcionan en cualquier dispositivo.",
    tarjetas: [
      { titulo: "Dibujo", desc: "Bocetos, retratos y todo lo que se pueda hacer con lápiz y papel.", icon: "pencil", color: "coral" },
      { titulo: "Pintura", desc: "Acuarela, acrílico y explorar colores nuevos.", icon: "brush", color: "sky" },
      { titulo: "Manualidades", desc: "Proyectos DIY, tejido, recortes y mucho pegamento.", icon: "craft", color: "sage" },
      { titulo: "Desarrollo Multiplataforma", desc: "Apps desde una sola base de código.", icon: "devices", color: "lilac" }
    ],
    stack: ["Kotlin Multiplatform", "Flutter", "Android", "iOS", "Web"],
    contacto: {
      "Email": "tu@email.com",
      "GitHub": "github.com/tuusuario",
      "LinkedIn": "linkedin.com/in/tuusuario"
    }
  };

  ICONS: { [key: string]: string } = {
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="#B4472E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3l7 7-9.5 9.5H4V12.5L14 3z"/><path d="M12.5 4.5l7 7"/></svg>',
    brush: '<svg viewBox="0 0 24 24" fill="none" stroke="#2E5670" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15c-2 0-3.5 1.5-3.5 3.5S4 21 3 21c1.8 0 4-1 4-3.5"/><path d="M9 15l9-9c1-1 2.5-1 3 0 .5 1 0 2-1 3l-9 9-2-3z"/></svg>',
    craft: '<svg viewBox="0 0 24 24" fill="none" stroke="#3E6B3C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="6" r="2.3"/><circle cx="7" cy="18" r="2.3"/><path d="M20 5L9 12l11 7"/></svg>',
    devices: '<svg viewBox="0 0 24 24" fill="none" stroke="#5C4E8C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="13" height="9.5" rx="1.4"/><path d="M6 17.5h5"/><rect x="17" y="8" width="5" height="10" rx="1.2"/></svg>'
  };

  SOFT: { [key: string]: string } = { 
    coral: 'var(--coral-soft)', 
    sky: 'var(--sky-soft)', 
    sage: 'var(--sage-soft)', 
    lilac: 'var(--lilac-soft)' 
  };

  getInitials(): string {
    return this.DATA.nombre.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  }

  getContactEntries() {
    return Object.entries(this.DATA.contacto).map(([key, value]) => ({ key, value }));
  }

  getContactHref(key: string, value: string): string {
    return key.toLowerCase() === 'email' ? 'mailto:' + value : 'https://' + value;
  }

  toggleTheme() {
    const states = ['auto', 'light', 'dark'];
    const currentIndex = states.indexOf(this.currentMode);
    const nextIndex = (currentIndex + 1) % states.length;
    this.currentMode = states[nextIndex];

    if (this.currentMode === 'auto') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', this.currentMode);
    }
  }
}