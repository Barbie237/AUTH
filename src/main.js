import { createApp } from 'vue'
import App from './App.vue'
import translate from './translate';

import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/main.css";
import { createI18n } from 'vue-i18n'

// Vérifiez si la locale est déjà enregistrée dans le stockage local
const storedLocale = localStorage.getItem('locale');
// Utilisez la locale enregistrée ou utilisez la locale par défaut si aucune n'est enregistrée
const defaultLocale = 'en';
const initialLocale = storedLocale || defaultLocale;

// const i18n = createI18n({
//     legacy: false,
//     locale: initialLocale,
//     messages: translate
//   })
  
  const app = createApp(App)

// app.use(i18n)
app.mount('#app')

// Enregistrez la valeur de locale dans le stockage local lorsqu'elle est modifiée
// i18n.global.watchI18nLocale = (locale) => {
//     localStorage.setItem('locale', locale);
//     };
