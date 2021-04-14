/* eslint-disable */
<template>
  <div>
    <nav class="navbar" id="nav" :class="{ 'nav-fix': !view.atTopOfPage, 'mobile-nav-show': mobileNavShow, 'back-black': isBlack }" >
      <a class="navbar-brand" href="/">
        <img src="../assets/images/navbar/logo.png">
      </a>
      <ul class="mobile-nav navbar-nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link" :class="{'active': isSelected==1?true:false}">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/featurepage"><a class="nav-link" :class="{'active': isSelected==2?true:false}">Features</a></router-link>
        </li>
        <li class="nav-item">
        <router-link to="/pricepage"><a class="nav-link" :class="{'active': isSelected==3?true:false}">Pricing</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blogpage"><a class="nav-link" :class="{'active': isSelected==4?true:false}">Blog</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact_us"><a class="nav-link" :class="{'active': isSelected==5?true:false}">Contacts</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><a class="nav-link" :class="{'active': isSelected==6?true:false}">Technical Support</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/loginpage"><a class="nav-link" :class="{'active': isSelected==7?true:false}">Login</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/"><a class="nav-link" :class="{'active': isSelected==8?true:false}">Sign up</a></router-link>
        </li>
      </ul>
      <div class="collapse navbar-collapse" id="navb">
        <ul class="navbar-nav mr-auto web-nav" id="nav-link-main">
          <li class="nav-item">
            <router-link to="/"><a class="nav-link" :class="{'active': isSelected==1?true:false}">Home</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/featurepage"><a class="nav-link" :class="{'active': isSelected==2?true:false}">Features</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pricepage"><a class="nav-link" :class="{'active': isSelected==3?true:false}">Pricing</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogpage"><a class="nav-link" :class="{'active': isSelected==4?true:false}">Blog</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact_us"><a class="nav-link" :class="{'active': isSelected==5?true:false}">Contacts</a></router-link>
          </li>
        </ul>
      </div>
      <button class="navbar-toggler navbar-toggler-right" type="button"  @click="mobileNavShow = true" :class="{ 'show': !mobileNavShow }">
        <img src="../assets/images/navbar/ham_btn.svg">
      </button>
      <button class="navbar-toggler navbar-toggler-right" type="button"  @click="mobileNavShow = false"  :class="{ 'show': mobileNavShow }">
        &times;
      </button>
      <div class="logins">
        <div>
          <div class="technical">Technical Support</div>
          <router-link to="/loginpage"><a class="loginbtn">Login</a></router-link>
        </div>
        <div>
          <div>Ready to roll?</div>
          <div class="sign_btn">Sign Up</div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      view: {
        atTopOfPage: true
      },
      mobileNavShow:false,
    };
  },
  props:{
    isBlack:{
      type: Boolean,
      default: false
    },
    isSelected:{
      type: Number,
      default: 0
    }
  },
  components: {},
  beforeMount () {
    window.addEventListener('scroll', this.nav_fix)
  },
  mounted() {
    window.addEventListener("scroll", this.nav_fix)
    // window.addEventListener.scroll = this.nav_fix
  },
  methods: {
    click_search(){
      let link_main = document.getElementById("nav-link-main")
      let nav_search = document.getElementById("nav-search")
      if(!nav_search.classList.contains('show')){
        link_main.style.display = 'none'
        nav_search.classList.add('show')
        if(window.innerWidth < 1100){
          let navb = document.getElementById("navb")
          navb.style.left = '20px'
          navb.style.right = '20px'
          document.getElementsByClassName('navbar-brand')[0].style.opacity = 0
          document.getElementsByClassName('navbar-toggler')[0].style.opacity = 0
        }
      }
    },
    disable_search(){
      let link_main = document.getElementById("nav-link-main")
      let nav_search = document.getElementById("nav-search")
      let nav_search_input = document.getElementById('nav-search-input')
      if(nav_search.classList.contains('show')){
        nav_search.classList.remove('show')
        nav_search_input.value = ''
        link_main.removeAttribute('style')
        if(window.innerWidth < 1100){
          let navb = document.getElementById("navb")
          navb.removeAttribute("style")
          document.getElementsByClassName('navbar-brand')[0].removeAttribute("style")
          document.getElementsByClassName('navbar-toggler')[0].removeAttribute("style")
        }
      }
    },
    nav_fix(){
      // when the user scrolls, check the pageYOffset
      if(window.pageYOffset>0){
          // user is scrolled
          if(this.view.atTopOfPage) this.view.atTopOfPage = false
      }else{
          // user is at top of page
          if(!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    }
  },
};
</script>

<style lang="css">
.navbar *{
  transition: 0.5s;
}
*, *:before, *:after {
    box-sizing: border-box;
}
a, a:focus, a:hover{
  text-decoration: none;
}
.mr-auto{
  margin-right: auto;
}
nav{
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color .3s;
}
#nav.nav-fix{
  background-color: hsl(0deg 0% 82% / 90%);
  background-color: rgba(255, 255, 255, 0.9);
  background-color: white;
}
#nav.back-black{
  background-color: #000;
}
nav a{
  cursor: pointer;
  transition: color .3s;
  color: #003570;
}
nav a:hover{
  color: #3bc9db;
}
nav a>svg{
  margin-top: 3px;
  fill: #181818;
  margin-left: 20px;
  transition: fill .3s;
}
nav a:hover>svg{
  fill: #3bc9db;
}
.navbar-brand{
  display: inline-block;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand>img{
  width: 260px;
  height: 65px;
  margin-left: 30px;
}
.navbar-brand>img:first-child{
  display:block;
}
.navbar-brand>img+img{
  display: none;
}
.navbar-toggler{
  display: none;
  font-size: 46px;
}
.navbar-nav{
  flex-direction: row;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  list-style: none;
  margin-bottom: -30px;
  padding: 0;
  justify-content: space-around;
}
.navbar-collapse{
  position: relative;
  display: flex;
  flex-basis: auto;
  align-items: center;
}
#nav-search{
  display: flex;
  flex: row nowrap;
  margin-right: 20px;
  width: 70px;
}
#nav-search.show{
  width: 100%;
}
#nav-search-btn, #nav-search-btn:active, #nav-search-btn:hover, #nav-search-btn:focus{
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
}
#nav-search-btn>img{
  width: 37px;
  height: 37px;
}
#nav-search-btn>img:first-child{
  display: block;
}
#nav-search-btn>img+img{
  display: none;
}
#nav-search-input{
  display:none;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px #FFF;
  width: 100%;
  color: #FFF;
  font-size: 20px;
  letter-spacing: 2px;
}
#nav-search.show #nav-search-input{
  display: block;
}
.nav-item{
  padding: 5px 3vw;
  position: relative;
}
.nav-link{
  font-size: 20px;
  line-height: 22px;
  position: relative;
}
.nav-link.active{
  color: #b11720!important;
  border-bottom: solid;
}
.logins{
  width: 260px;
  height:70%;
  margin-right: 30px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
}
@media(min-width: 1100px){
  .mobile-nav.navbar-nav{
    display: none;
  }
}
.logins>div{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 14px;
}
.logins>div>div:last-child{
  margin-left:10px
}
.logins a{
  margin-left:10px
}
.loginbtn{
  width: 90px;
  height: 35px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #003570;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  transition: 0.5s;
  cursor: pointer;
}
.loginbtn:hover{
  color: #003570;
  background: white;
  border: 2px solid #003570;
}
.sign_btn{
  cursor: pointer;
  border-bottom: solid 1px;
  color: #b11720;
}
.technical{
  cursor: pointer;
  border-bottom: solid 1px;
}
@media(max-width: 1100px){
  nav{
    padding: 20px 10px;
    height: 60px;
    transition: 0.5s;
  }
  #nav.mobile-nav-show{
    background-color: #FFF;
  }
  #nav-search-btn, #nav-search-btn:active, #nav-search-btn:hover, #nav-search-btn:focus{
    margin-right: 0;
  }
  #nav-search{
    margin-right: 0;
  }
  .navbar{
    border-bottom: solid 1px #eee;
  }
  #nav.nav-fix, #nav.back-black{
    border-bottom: none;
  }
  .navbar-brand{
    position: relative;
    margin-left: 0px;
    top: 0;
    left: 0;
  }
  .web-nav.navbar-nav{
    display: none;
  }
  .nav-link{
    color: #181818;
  }
  #navb{
    position:absolute;
    right: 0;
  }
  .navbar-toggler, .navbar-toggler:focus, .navbar-toggler:hover{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .navbar-toggler.show{
    display: inline-block;
  }
  .navbar-toggler>img{
    width: 40px;
  }
  .mobile-nav-show{
    background-color: #FFF;
  }
  .mobile-nav.navbar-nav{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #FFF;
    margin-top: 0;
    flex-direction:column;
  }
  .mobile-nav.navbar-nav {
    -moz-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .mobile-nav.navbar-nav{
    max-height: 0;
    overflow: hidden;
  }
  .mobile-nav-show .mobile-nav.navbar-nav{
    max-height: 800px;
    overflow: hidden;
    padding:0;
  }
  .mobile-nav.navbar-nav .nav-item{
    position: relative;
    text-align: left;
    padding: 10px 30px;
    font-size: 28px;
    display: flex;
    border-top: solid 1px #eee;
    justify-content: center;
  }
  .mobile-nav-show .navbar-brand>img:first-child{
    display:none;
  }
  .mobile-nav-show .navbar-brand>img+img{
    display: block;
  }
  .mobile-nav-show #nav-search-btn>img:first-child{
    display: none;
  }
  .mobile-nav-show #nav-search-btn>img+img{
    display: block;
  }
  .navbar-brand>img{
    width: 176px;
    height: 40px;
  }
  .logins{
    display: none;
  }
  .navbar-brand>img {
      margin-left: 0px;
  }
}
</style>
