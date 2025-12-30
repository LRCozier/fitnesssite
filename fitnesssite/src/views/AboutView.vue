<template>
  <section class="section animate-fade-in">
    <div class="container container-sm">
      <h1 class="page-title">ABOUT LUKE COZIER</h1>
      <p class="page-subtitle">Personal Trainer</p>

      <div class="about-grid">
        <div class="about-image-container">
          <img
            class="about-image"
            src="../assets/Profile Picture.jpg"
            alt="Portrait of personal trainer Luke Cozier"
          />
        </div>

        <div class="about-content">
          <h2>My Mission: To Redefine What Fitness Means.</h2>
          <p>
            Fitness isn't about a number on a scale or a fleeting compliment. It is about how you feel
            when you pick up your child, the energy you have at the end of a long day, and the quiet
            confidence that comes from knowing you are capable.
          </p>
          <p>
            I know the other side. I was the "fat kid." I know the mental toll of avoiding mirrors and
            feeling left behind. My own transformation wasn't just physical; it was the discovery that
            strength training is the most powerful tool for building mental resilience and
            <span class="text-accent font-bold">&nbsp;reclaiming your life.</span>
          </p>
          <p>
            I specialize in evidence-based strength and conditioning, focusing on compound movements,
            progressive overload, and perfect form. My approach is for those who are serious about
            long-term progress, not short-term fixes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'About Luke Cozier',
  meta: [
    {
      name: 'description',
      content:
        'Learn about personal trainer Luke Cozier, his mission to redefine fitness, and his evidence-based strength and conditioning approach.',
    },
  ],
});
</script>
