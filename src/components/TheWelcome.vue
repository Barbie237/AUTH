<script>
 
</script>
 <template >

  <div class="Auth  position-relative"  >
    <span class="borderBox rounded-5 border border-0 p-5  position-absolute border-opacity-10 rounded top-50 start-50 translate-middle" >
    <form action="" class="position-relative w-100 ">
      <div class="" style="text-align:center">
        <img src="../assets/photos/me.jpg" alt="" class="Pic rounded rounded-circle m-3">
        <div class="form-group text-center" style="text-align:center">
          <div class=" input-group mb-3">
            <input type="text" id="fname" name="fname" placeholder="Username" class="form-control form-control-lg" required><br><br>
            <span class="input-group-text" id="basic-addon2">            
              <i class="fa-solid fa-user "></i>
            </span>
            
          </div>
          <div class=" input-group mb-3">
            <input type="password" id="pwd" name="pwd" class="form-control form-control-lg" required>
            <span class="input-group-text" id="basic-addon2">            
              <i class="fa-solid fa-lock"></i>
            </span>
          </div>
        </div>
        <div>
          <input type="checkbox">
          <span class="text-secondary">  Keep me logged in ?</span>
        </div>
        <div class="icons">+
          <i class="fa-solid fa-g bg-primary m-2 p-2"></i>
          <i class="fa-brands fa-facebook-f bg-primary p-2"></i>
        </div>
        <div style="text-align:center;margin-top:30px">
            <button  type="submit" class="btn btn-dark btn-lg btn-block">
              <!--Vite <span class="spinner-border spinner-border-sm mr-1"></span> -->
              Signin
            </button>
        </div>
        <div class="text-end">
          <span class="text-secondary"> You don't have an Account ? 
            <a href="http://"> Sign up </a>
          </span> <br>
          <span> 
            <a href="http://">
              Forgot Password
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
  data() {
    return {
       
    };
  },

  computed: {
 
  },
  methods: {
  }
}
</script>


<style>
 
.Auth{
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/photos/Amazingvue.png");
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