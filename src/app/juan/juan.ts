import { Component } from "@angular/core";

@Component({
  selector: "app-juan",
  standalone: true,
  template: `
    <header class="encabezado-juan">
      <div class="avatar-juan">J</div>
      <h1>¡Hola! Soy Juan</h1>
      <p>Bienvenido a mi primera página web.</p>
    </header>
  `,
  styles: [`
    :host { display: block; }
    .encabezado-juan {
      text-align: center;
      padding: 45px 20px;
      margin: 30px auto;
      max-width: 900px;
      background: #e5f0ff;
      border-radius: 18px;
      color: #243b5a;
      font-family: Arial, sans-serif;
    }
    .avatar-juan {
      width: 75px;
      height: 75px;
      margin: 0 auto 15px;
      border-radius: 50%;
      background: #3976c5;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }
    p { margin-top: 12px; }
  `]
})
export class Juan {}
