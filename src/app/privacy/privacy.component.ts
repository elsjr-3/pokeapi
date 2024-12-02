import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="privacy-container">
      <h2>Privacy Settings</h2>

      <div class="privacy-section">
        <h3>Profile Visibility</h3>
        <div class="privacy-item">
          <label>Show Profile to Public</label>
          <input type="checkbox">
        </div>
        <div class="privacy-item">
          <label>Show Online Status</label>
          <input type="checkbox" checked>
        </div>
      </div>

      <div class="privacy-section">
        <h3>Data Access</h3>
        <div class="privacy-item">
          <label>Allow Location Tracking</label>
          <input type="checkbox">
        </div>
        <div class="privacy-item">
          <label>Share Data with Partners</label>
          <input type="checkbox">
        </div>
      </div>

      <div class="privacy-section">
        <h3>Security</h3>
        <div class="privacy-item">
          <label>Enable Two-Factor Authentication</label>
          <input type="checkbox" checked>
        </div>
        <div class="privacy-item">
          <label>Allow Login Notifications</label>
          <input type="checkbox">
        </div>
      </div>

      <button class="save-button">Save Privacy Settings</button>
    </div>
  `,
  styles: [`
    /* Contenedor principal */
    .privacy-container {
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 12px;
      background: linear-gradient(135deg, #fbd101, #ff5722); /* Gradiente amarillo a naranja */
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      font-family: 'Comic Sans MS', cursive, sans-serif; /* Fuente cursiva y estilo dinámico */
      color: #fff; /* Texto blanco */
    }

    /* Título principal */
    .privacy-container h2 {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      font-style: italic;
      color: #3b4cca; /* Azul vibrante */
    }

    /* Secciones de configuración */
    .privacy-section {
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      color: #333;
    }

    .privacy-section h3 {
      margin: 0 0 10px;
      font-size: 20px;
      font-style: italic;
      color: #f57c00; /* Naranja oscuro */
    }

    /* Estilo de cada elemento de configuración */
    .privacy-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .privacy-item label {
      font-size: 18px;
      font-style: italic; /* Texto inclinado */
      color: #555;
    }

    /* Estilo de los checkbox */
    input[type="checkbox"] {
      transform: scale(1.5); /* Tamaño aumentado */
      accent-color: #ff9800; /* Naranja vibrante */
    }

    /* Botón de guardar */
    .save-button {
      display: block;
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 8px;
      background-color: #3b4cca; /* Azul vibrante */
      color: white;
      font-size: 18px;
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
    }

    /* Efecto hover del botón */
    .save-button:hover {
      background-color: #283593; /* Azul más oscuro */
      transform: translateY(-3px);
    }

    /* Efecto cuando se presiona el botón */
    .save-button:active {
      transform: translateY(1px);
    }
  `]
})
export class PrivacyComponent {}
