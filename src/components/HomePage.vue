/* eslint-disable */
<template>
  <div class="hello">
    <main-navbar :isSelected=1 />
    <div class="homeheader">
      <video autoplay muted loop id="myVideo">
        <source src="../assets/video/DEMO_FINAL.webm" type="video/mp4">
      </video>
    </div>
    <div id="scrollView1" class="carousel-wrap" data-aos="fade-up">
      <div class="carousel">
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div class="col">
            <div class="cols1">
              <div class="c1_title">
                <h1>Revolutionary carrier TMS</h1>
                <h1>Designed to increase load profitability and to improve dispatcher productivity</h1>
                <h3>Improve net profits by up to<br>$500-$1000+ per truck per month</h3>
                <div>
                  <div class="btns schedule_btn">
                      <p class="btns-word">Schedule a Demo</p>
                      <div class="btns-act"></div>
                      <a class="btns-act-icon">&#8658;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="cols2">
              <div class="c1_title">
                <h1>Avoid dispatching errors!</h1>
                <h1>Harness the power of the integrated data sources to make valid booking decisions fast</h1>
                <h1>Load more trucks per dispatcher</h1>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="cols3">
              <div class="c1_title">
                <h1>Never miss a good load!</h1>
                <h1>Automatically perform trip planning and load profitability analysis.<br>Book loads before your competitors.</h1>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <main-footer />
  </div>
</template>
<script>
/* eslint-disable */
import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import vueStarRate from "vue-js-star-rating";
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cookie_hide: false,
      isActive: 0,
      isShow: 1,
      first_slide: false,
      settings:{
        "dots": true,
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "autoplay":true,
        "autoplaySpeed": 20000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": true,
        "infinite": true
      }
    };
  },
  components: {
    MainNavbar,
    MainFooter,
    VueSlickCarousel,
    vueStarRate
    },
  mounted() {
  },
  methods: {
    scroll_view(){
      for( var i=1; i<8; i++){
      let scroll_div = scroll_div + document.getElementById('scrollView'+i).clientHeight;
      }
      console.log(scroll_div);
      window.scrollTo(0, scroll_div);
    }
  }
};
</script>
<style>
.homeheader{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#myVideo{
  height:100%;
}
@media only screen and (max-width: 1100px) {
.homeheader{
  height: auto;
}
#myVideo{
  width: 120%;
}
}
.homevideo{
  width: 100%;
  height: 100vh;
}
.slick-dots li button:before{
  opacity: .5;
}
.slick-dots li.slick-active button:before{
  opacity: 1;
}
.slick-dots.custom-dot-class>li:first-child{
  display:none;
}
</style>
<style scoped>
.carousel-wrap{
  background-color: #FAFAFA;
}
.carousel{
  position: relative;
  width: 100%;
}
.carousel-prev-btn, .carousel-next-btn{
  position: absolute;
  top: 50%;
  cursor: pointer;
  font-size: 14px;
  transform: translateY(-50%);
}
.carousel-prev-btn>img, .carousel-next-btn>img{
  width: 30px;
  height: 30px;
}
.carousel-prev-btn{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 53, 112, 0.5);
  display: flex;
  justify-content:space-around;
  align-items: center;
  left: 5%;
  transition: 0.5s;
}
.carousel-prev-btn:hover{
  background-color: rgba(0, 53, 112, 1);
}
.carousel-next-btn{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 53, 112, 0.5);
  display: flex;
  justify-content:space-around;
  align-items: center;
  right: 5%;
  transition: 0.5s;
}
.carousel-card{
  background-color:#166fb0;
  padding: 40px 40px;
}
.carousel-title{
  color: #FFF;
  text-align: left;
  margin: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
}
.carousel-text{
  color: #FFF;
  text-align: left;
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
}
.carousel-card{
  text-align: left;
}
.carousel img:first-child{
  margin-left: 3px;
}
.carousel img+img{
  margin-left: -65%;
  width: 160%;
}
.carousel .col-5, .carousel .col-7, .carousel .col-6{
  display: flex;
  align-items: center;
}
.carousel .carousel-card img{
  width: 40px;
  height: 40px;
  margin-top: 20px;
}
.carousel-wrap .slide-link{
  padding: 0 20px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  text-transform: uppercase;
  transition: color .3s;
}
.carousel-wrap .slide-link:hover{
  color: #1F97EF;
}
.carousel-wrap .slide-link.isActive{
  color: #1F97EF;
}
.carousel-link{
  display: none;
}
.back-blue-2{
  background-color: #0E4975;
}
.back-blue-3{
  background-color: #4786B5;
}
.back-blue-4{
  background-color: #314A5C;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}
.col{
  height:100vh;
}
.cols1{
  background-image: url("../assets/images/home/bg_index_slide_01.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:left;
  width:100%;
  height:100%;
  position:relative;
  display:flex;
  justify-content:flex-start;
  align-items: center;
}

.cols2{
  background-image: url("../assets/images/home/bg_index_slide_02.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:right;
  width:100%;
  height:100%;
  position:relative;
  display:flex;
  justify-content:flex-end;
  align-items: center;
}

.cols3{
  background-image: url("../assets/images/home/bg_index_slide_03.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  width:100%;
  height:100%;
  position:relative;
}

.cols4{
  background-image: url("../assets/images/home/bg_index_slide_04_full.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
  width:100%;
  height:100%;
  position:relative;
  display:flex;
  justify-content:flex-end;
  align-items: center;
}
@media only screen and (max-width: 1100px) {
  .cols2{
    background-image: url("../assets/images/home/bg_index_slide_02res.jpg");
  }

  .cols3{
    background-image: url("../assets/images/home/bg_index_slide_03res.jpg");
  }
  .carousel-card{
    background-color: transparent;
    color: #181818;
    padding: 10px 10px;
  }
  .carousel-title{
    color: #1F97EF;
    text-align: center;
    font-size: 14px;
  }
  .carousel-text{
    color: #181818;
    text-align: center;
    font-size: 12px;
  }
  .carousel{
    position: relative;
    width: 100%;
  }
  .carousel .col-6{
    justify-content: center;
  }
  .carousel-prev-btn{
    display: none!important;
  }
  .carousel-next-btn{
    display: none!important;
  }
  .carousel .col-6:last-child{
    margin-top: -50px;
  }
  .carousel img+img{
    width: 200%;
    margin-left: 0;
  }
  .carousel .carousel-prev-btn>img, .carousel .carousel-next-btn>img{
    display: block;
  }
  .carousel-prev-btn{
    left: 0;
    top: 30%;
  }
  .carousel-next-btn{
    right: 0;
    top: 30%;
  }
  .custom-dot-class li {
    padding: 20px 10px;
  }
  .home_header {
    padding: 5% 5% 15vw 5%;
    padding-top: 130px;
  }
  .card_des strong {
    text-transform: none;
  }
  .icons {
    display: none;
  }
  .card_des {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .card_des strong {
    font-size: 35px;
    line-height: 1.3;
  }
  .card_des small {
    font-size: 20px;
    line-height: 1.3;
  }
  .btn {
    padding: 10px 30px;
    font-size: 12px;
    line-height: 14px;
  }
  .card_imgb{
    display: block;
  }
  .card_img{
    display: none;
  }
}
.cols1 .c1_title{
  width: 750px;
}
.c1_title{
  width: 730px;
  margin-left: 10%;
  margin-right: 7%;
  text-align: left;
}
.cols3>.c1_title{
  width: 80%;
  margin-left: 10%;
  padding-top: 130px;
  text-align: left;
}
.c1_title>div{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.schedule_btn{
  width: 230px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
}
@media only screen and (max-width: 1100px) {
 .c1_title{
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: -40px;
  }
  .cols1 .c1_title{
    width: 100%;
  }
  .cols3>.c1_title{
    text-align: center;
    padding-top: 0%;
  }
  .schedule_btn{
    font-size: 16px;
  }
  .col{
    height:auto;
  }
  .cols1, .cols2, .cols3, .cols4{
    padding: 150px 10% 100px 10%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
@media only screen and (max-width: 767px) {
  .cols1, .cols2, .cols3, .cols4{
    height: 500px;
  }
}
</style>
