<template>
 <Footer>
  <div class="container">
    <div class="footer-links">
        <router-link to="/about" class="footer-link">About</router-link>
        <router-link to="/services" class="footer-link">Services</router-link>
        <router-link to="/blog" class="footer-link">Blog</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
    </div>
      <p class="footer-copyright">
          &copy; {currentYear} Luke Rudderham-Cozier. All rights reserved.
      </p>
      <p class="footer-location">
        Personal Training in Richmond Upon Thames/Kingston Upon Thames.
      </p>
  </div>
 </Footer>

</template>

<script>

const currentYear = new Date().getFullYear()

</script>

<style>

  
</style>