<template>
    <div class="home">
      <transition name="toast">
      <Toast v-if="showToast" />
      </transition>
      
      <Todos @badValue="triggerToast" />
      <transition name="fade">
        <div v-show="showp"> Congratulations for submission </div>
      </transition>
      <button @click="showp =!showp">
        Submit
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import Toast from '../components/ToastComp'
  import Todos from '../components/TodosComp'
  
  export default {
    components: { Toast, Todos },
    setup() {
      const showToast = ref(false)
      const showp = ref(false)
  
      const triggerToast = () => {
        showToast.value = true;
        setTimeout(() => showToast.value = false, 3000)
      }
  
      return { showToast, triggerToast, showp}
    }
  }
  </script>
  
  <style>
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-enter-active{
    transition: all 2s ease;
  }
  .fade-leave-from{
    opacity: 1;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition: all 2s ease;
  }

  .toast-enter-from{
   opacity: 0;
   transform: translateY(-60px);
  }
  .toast-enter-to{
    opacity: 1;
    transform: translateY(0px);
  }
  .toast-enter-active{
    transition: all .5s ease;
  }
  .toast-leave-from{
    opacity: 1;
    transform: translateY(0px);
  }
  .toast-leave-to{
    opacity: 0;
    transform: translateY(-60px);
  }
  .toast-leave-active{
    transition: all .5s ease;
  }
 
  </style>