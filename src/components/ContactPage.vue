/* eslint-disable */
<template>
  <div class="contact">
    <main-navbar  :isSelected=5 />
    <div class="contact_header">
        <form>
          <div>Sales business hours 8AM-5PM CST Monday-Friday Contact us directly at <span>(608) 400-6112</span> or complete the form below and a IQ Dispatch
                representative will be in touch with you shortly.</div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">First name and Last name</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">Company</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">USDOT or MC</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">Phone</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <label class="omrs-input-underlined">
              <input required>
              <span class="omrs-input-label">Email</span>
            </label>
          </div>
          <div class="omrs-input-group">
            <input type="submit" class="submit_btn"/>
          </div>
        </form>
    </div>
    <main-footer />
  </div>
</template>
<script>
/* eslint-disable */
import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter'
export default {
  name: 'Contactpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainNavbar,
    MainFooter,
  }
}
</script>
<style scoped>
*{
  transition: 0.3s;
}
.contact_header{
  background-image: url("../assets/images/contact/bg_contact_slide_01_full.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position:left;
  width: 100%;
  height:100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact_header form{
  width: 40%;
  margin-left: 10%;
  text-align: left;
}
.contact_header form>div{
  font-size: 25px;
  line-height:40px;
}
.contact_header form>div>span{
  font-weight: bold;
  color: #b11720;
}
@media only screen and (max-width: 1100px) {
.contact_header{
  height: 100vh;
  padding: 150px 0%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
}
.contact_header form>div{
  text-align: center;
}
.contact_header form{
  width:80%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
}
}
@media only screen and (max-width: 767px) {
.contact_header{
  height: auto;
  padding: 150px 0%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
}
}
</style>
