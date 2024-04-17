<script>
import TheWelcome from './components/TheWelcome.vue'
export default {
  name: 'App',
  components: {
    TheWelcome: TheWelcome
  },
  data() {
    return {
      user: {},
      showDropdown: false
     }
  },

  methods: {
 
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    async changeLanguage(locale) {
            debugger;
            // Save the locale in localForage
            //localStorage.setItem("locale", locale);
             this.$root.$i18n.locale = locale;
            this.toggleDropdown() //cache le droqdown after apres le  choix de la langue
            //save the language of the user automaticaly*************************
 
            // Save the locale in localForage

            // useAuthStore().saveFieldSelectedLanguage(currentUserID, saveLanguage, this)
            localStorage.setItem("locale", locale);


            //save the language of the user automaticaly*************************
            // location.reload()
        },// Save the locale in localForage
      // localStorage.setItem("locale", locale);
    //pour retouner  un  Drapeau  en  fonction de la langue 
    loadFlagLanguage(locale) {
      debugger
      const currentLang =  localStorage.getItem("locale", locale);
      return currentLang === "en"
        ? "./assets/photos/ukFlag.png"
        : "./assets/photos/frenchFlag.png";
    },
  }

}
</script>

<template>
  <main :class="this.$i18n.locale === 'en' ? 'purple' : 'pink'">
      <nav>
                    <!-- <img :src="this.$i18n.locale === 'en' ? './assets/photos/ukFlag.png' : './assets/photos/frenchFlag.png'" alt="" width="30"> -->
         <div class=" d-flex justify-content-end  dropdown languageContainer position-relative">
          <!-- <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img :src="this.$i18n.locale === 'en' ? './assets/photos/ukFlag.png' : './assets/photos/frenchFlag.png'" alt="" width="30"
              height="30" class="rounded-circle"  />
            <img :src="loadFlagLanguage(this.$i18n.locale)" alt=""  width="30" height="30" class="rounded-circle" />
          </button> -->

          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img :src="this.$i18n.locale === 'en' ? './img/ukFlag.png' : './img/frenchFlag.png'" alt="" width="30"
              height="30" class="rounded-circle" @click="toggleDropdown"/>
           </button>
          <ul class="dropdown-menu leftDown" aria-labelledby="dropdownMenuButton1"
            :style="{ display: showDropdown ? 'block' : 'none' }">  
            <li @click="changeLanguage('en')"><a class="dropdown-item" href="#"> <img src="@/img/ukFlag.png" 
                  class="bout" style="width: 25px;" /></a></li>
            <li @click="changeLanguage('fr')"><a class="dropdown-item" href="#"> <img src="@/img/frenchFlag.png" 
                  style="width: 25px;" class="bout" />
               </a></li>
          </ul>
           
    </div>
  </nav>


  <!-- <img src="./assets/photos/ukFlag.png" alt="" srcset=""> <br> <br> <br> -->
            <!-- <img :src="this.$i18n.locale === 'en' ? './assets/photos/ukFlag.png' : './assets/photos/frenchFlag.png'" alt="" width="30"> -->

    <TheWelcome />
  </main>
</template>

<style>
* {
    box-sizing: border-box;
  }
  main {
    min-height: 100vh;
    font-weight: 400;
  }
 .pink{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./assets/photos/Amazingvue.png");
  background-size: cover;
 }
 .purple{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("./assets/photos/vue.png");
  background-size: cover;
 }
 
</style>
