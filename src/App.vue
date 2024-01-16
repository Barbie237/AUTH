<script>
import TheWelcome from './components/TheWelcome.vue'
export default {
  name: 'App',

  data() {
    return {
      user: {},
     }
  },

  methods: {
 
    //pour  changer la  langue 
    async changeLanguage(locale) {
      debugger;
      // Save the locale in localForage
      //localStorage.setItem("locale", locale);
      // Set the locale
      this.$root.$i18n.locale = locale;
      // this.toggleDropdown() //cache le droqdown after apres le  choix de la langue
         //save the language of the user automaticaly*************************
      // const  saveLanguage = locale;
      
      // const currentUserID = this.currentUser.id;
      // Save the locale in localForage
      
      // useAuthStore().saveFieldSelectedLanguage(currentUserID, saveLanguage, this)
      localStorage.setItem("locale", locale);

      
      //save the language of the user automaticaly*************************
      // location.reload()
    },      // Save the locale in localForage
      // localStorage.setItem("locale", locale);
    //pour retouner  un  Drapeau  en  fonction de la langue 
    loadFlagLanguage(locale) {
      debugger
      const currentLang =  localStorage.getItem("locale", locale);
      return currentLang === "en"
        ? "./img/ukFlag.png"
        : "./img/frenchFlag.png";
    },
  }

}
</script>

<template>
  <main>
      <nav>
    <div class=" d-flex justify-content-end  dropdown languageContainer position-relative">
          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img :src="this.$i18n.locale === 'en' ? '../assets/photos/ukFlag.png' : '../assets/photos/frenchFlag.png'" alt="" width="30"
              height="30" class="rounded-circle"  />
            <img :src="loadFlagLanguage(this.$i18n.locale)" alt=""  width="30" height="30" class="rounded-circle" />
          </button>
          <ul class="dropdown-menu leftDown" aria-labelledby="dropdownMenuButton1"
            :style="{ display: showDropdown ? 'block' : 'none' }">
            <li @click="changeLanguage('en')"><a class="dropdown-item" href="#"> <img src="../assets/photos/ukFlag.png" alt=""
                  class="bout" style="width: 25px;" /> English</a></li>
            <li @click="changeLanguage('fr')"><a class="dropdown-item" href="#"> <img src="../assets/photos/frenchFlag.png" alt=""
                  style="width: 25px;" class="bout" />
                Français</a></li>
          </ul>
    </div>
  </nav>

    <TheWelcome />
  </main>
</template>

<style scoped>
 
</style>
