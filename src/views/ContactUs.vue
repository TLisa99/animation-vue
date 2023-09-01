<template>
    <div class="contact">
      <h1>Contact</h1>
      <transition-group tag="ul" 
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
          <span class="material-icons">{{ icon.name }}</span>
          <div>{{ icon.text }}</div>
        </li>
      </transition-group>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import gsap from 'gsap'
  
  export default {
    setup() {
      const icons = ref([
        { name: 'alternate_email', text: 'by Email'},
        { name: 'local_phone', text: 'by Phone'},
        { name: 'local_post_office', text: 'by Post'},
        { name: 'local_fire_department', text: 'by Smoke Signal'},
      ])
      
      const beforeEnter = (el) => {
        el.style.opacity = 0
        el.style.transform = 'translateY(100px)'
      }
      
      const enter = (el, done) => {
        gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.4


        })
      }
      
      const afterEnter = (el) => {
        el.style.opacity = 1
        el.style.color = 'green'
      }
  
      return { icons, beforeEnter, enter, afterEnter}
    }
  }
  </script>
  
  <style>
    .contact ul {
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      max-width: 400px;
      margin: 60px auto;
    }
    .contact li {
      list-style-type: none;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
      cursor: pointer;
      line-height: 1.5em;
    }
  </style>