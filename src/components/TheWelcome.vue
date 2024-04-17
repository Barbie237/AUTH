 <template >

  <div class="Auth  position-relative"  >
    <span class="borderBox rounded-5 border border-0 p-5  position-absolute border-opacity-10 rounded top-50 start-50 translate-middle" >
    <form action="" class="position-relative w-100 ">
      <div class="" style="text-align:center">
        <img src="../assets/photos/me.jpg" alt="" class="Pic rounded rounded-circle m-3">
        <div class="form-group text-center" style="text-align:center">
          <div class=" input-group mb-3">
            <input type="text" id="fname" v-model="username" name="fname" :placeholder="$t('name')" class="form-control form-control-lg" required><br><br>
            <span class="input-group-text" id="basic-addon2">            
              <button class="border-0"> <i class="fa-solid fa-user "></i> </button>
            </span>
            
          </div>
          <div class=" input-group mb-3">
            <input :type="passwordFieldType" id="pwd" name="pwd" v-model="password" class="form-control form-control-lg" required>
            <span class="input-group-text" id="basic-addon2">            
              <button class="border-0" @click="switchVisibility"><i class="fa-solid fa-lock"></i></button>
            </span>
          </div>
        </div>
        <div>
          <input type="checkbox">
          <span class="text-secondary">   {{$t('keepmeloggedit')}} </span>
        </div>
        <div class="icons">+
          <i class="fa-solid fa-g bg-primary m-2 p-2"></i>
          <i class="fa-brands fa-facebook-f bg-primary p-2"></i>
        </div>
        <div style="text-align:center;margin-top:30px">
            <button  type="submit" class="SignUpbtn btn-dark btn-lg btn-block">
              <!--Vite <span class="spinner-border spinner-border-sm mr-1"></span> -->
              {{ $t('SignUp') }}
            </button>
        </div>
        <div class="text-end">
          <span class="text-secondary"> {{ $t('Signin') }}
            <a href="http://"> {{ $t('donthaveAccount') }} </a>
          </span> <br>
          <span> 
            <a href="http://">
              {{ $t('forgotPassword') }}
            </a>
          </span>
        </div>
      </div>
    </form>

    
  </span> 
  </div>
</template>
<script>
export default {
      state: () => ({
      loading:false,
    }),
  data() {
    return {
       password: '',
       passwordFieldType: "password",
       
    };
  },

  computed: {
        isSubmitting() {
          return loading
        },
  },
  methods: {
        switchVisibility() {
          this.passwordFieldType = this.passwordFieldType === "password" ? 'text' : "password"
          this.isSubmitting = false;
        },
  }
}
</script>


<style>
 
.Auth{
  background-position:  center;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
  }

  .borderBox{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ;
    /* height:500px; */
   }
  .Pic{
    width: 80px;
    height: 100px;
  }
</style>