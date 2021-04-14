/* eslint-disable */
<template>
  <div id="footer">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-8 footer-tt">
            <img src="../assets/images/footer/logo_ispatch_white_transparente_without.png" class="footer_white_logo"/>
            <p class="footer-desc">Load finder, load profitability estimator, HOS compliant trip planing, route analysis, integrated mapping, dispatcher performance benchmarking, and much more</p>
            <p class="footer-desc">PHD Logistics LLC, 123 Hart Rd, Sun Prairie, WI 53590</p>
            <div class="footer-social-links">
              <a href="https://www.facebook.com/"><img src="../assets/images/footer/Facebook_logo.svg"></a>
              <a href="https://www.linkedin.com/"><img src="../assets/images/footer/Linked_logo.svg"></a>
              <a href="https://twitter.com/"><img src="../assets/images/footer/icon-twitter.svg"></a>
              <a href="https://www.instagram.com/"><img src="../assets/images/footer/Instagram_logo.svg"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-4">
            <div class="footer-link">
              <a class="footer-link-header" href="#">Features</a>
              <a href="#">Load Finder</a>
              <a href="#">Profit Estimator</a>
              <a href="#">Trip Planner</a>
              <a href="#">Mapping</a>
              <a href="#">Dispatcher Performance</a>
            </div>
          </div>
          <div class="col-4">
            <div class="footer-link">
              <a class="footer-link-header" href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Pricing</a>
              <a href="#">Technical Support</a>
              <a href="#">Contacts</a>
            </div>
          </div>
          <div class="col-4">
            <div class="footer-link-last">
              <img src="../assets/images/footer/just_say_no_to_cheap_freight-420x150.jpg" class="footer_white_logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-res-links">
      <a href="https://www.facebook.com/"><img src="../assets/images/footer/Facebook_logo.svg"></a>
      <a href="https://www.linkedin.com/"><img src="../assets/images/footer/Linked_logo.svg"></a>
      <a href="https://twitter.com/"><img src="../assets/images/footer/icon-twitter.svg"></a>
      <a href="https://www.instagram.com/"><img src="../assets/images/footer/Instagram_logo.svg"></a>
    </div>
    <hr class="">
    <div class="footer-scroll">
      <img src="../assets/images/footer/ic_scroll_top.png" @click="to_scroll_top">
    </div>
    <div class="copyps">
      <p class="copyright">Terms & Conditions</p>
      <p class="copyright">© Copyright PHD Logistics LLC 2020</p>
      <p class="copyright">Privacy Policy</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
    }
  },
  components: {},
  beforeMount () {
  },
  mounted() {
  },
  methods: {
    to_scroll_top(){
      window.scrollTo(0, 0)
    }
  },
};
</script>

<style lang="css">
#footer{
  background-color: rgba(40, 58, 90, 0.9);
  color: #FFF;
  padding: 40px;
}
#footer *{
  transition: 0.5s;
}
#footer>div{
  padding: 0 50px;
}
#footer a, #footer a:focus, #footer a:active{
  display: block;
  color: white;
  cursor: pointer;
  margin: 15px;
  font-size: 17px;
  line-height: 25px;
}
#footer a:hover{
  color: #3bc9db;
}
#footer .footer-link-header{
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 25px;
}
#footer hr{
  height: 2px;
  margin-top: 50px;
}
.footer-desc{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 25px;
  text-align: left;
}
.footer-social-links{
  display: flex;
  margin-top: 10px;
  text-align: left;
}
.footer-social-links>img{
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
.footer-link{
  text-align: left;
}
.copyright{
  color: #FFF;
  text-align: right;
  margin-top: 20px;
  margin-right: 50px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
}
.footer-reseller{
  display: none;
}
.footer-res-links{
  display: none;
}
.footer-scroll{
  display: none;
}
.footer_white_logo{
  width: 200px;
  margin-left:0;
}
.footer-tt{
  display: flex;
  flex-direction: column;
}
.copyps{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media(max-width: 1100px){
  .footer-tt{
    justify-content: space-around;
  }
  .copyps{
    flex-direction: column;
  }
  .footer-link-last{
    display:flex;
    justify-content: space-around;
  }

  .footer-desc{
    display: none;
  }
  .footer-social-links{
    display: none;
  }
  .footer-link{
    text-align: center;
  }
  #footer a, #footer a:focus, #footer a:active{
    font-size: 15px;
  }
  .copyright{
    font-size: 15px;
    margin-right: 0;
    text-align: center;
    margin-top: 20px;
  }
  .footer-reseller{
    display: block;
    color: #1F97EF;
    font-size:17px;
    line-height: 26px;
    font-weight: 700;
  }
  .footer-res-links{
    display: flex;
    justify-content: space-around;
    max-width:300px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .footer-res-links>img{
    width: 30px;
    height: 30px;
  }
  .footer-res-links>img+img{
    margin-left: 30px;
  }
  #footer hr{
    display: none;
  }
  .footer-scroll{
    display: block;
    position: relative;
    text-align: center;
    margin-top: 50px;
  }
  .footer-scroll:before{
    content: '';
    position: absolute;
    top: 50%;
    left: -500px;
    right: -40px;
    border-bottom: solid 2px #1F97EF;
    z-index: 1;
  }
  .footer-scroll>img{
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 2;
  }
  .footer_white_logo {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
