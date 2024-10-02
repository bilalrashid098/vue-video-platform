<template>
  <div class="main-wrapper">
    <Header />
    <Sidebar v-if="!isMobile" />
    <footer-menu v-else />
    <main :class="`content md:pl-[100px] lg:pl-[300px] pt-[100px] px-5 md:pb-5 pb-[4.5rem] ${closeSidebar && 'wide'}`">
      <router-view />
    </main>
  </div>
</template>
  
<script>
  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import FooterMenu from '@/components/FooterMenu/FooterMenu.vue';
  import Header from '@/components/Header/Header.vue';
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'DashBoard',
    components: {
      Sidebar,
      Header,
      FooterMenu,
    },
    setup() {
      const route = useRoute();
      const closeSidebar = (window && window.innerWidth > 768 && route.name === 'videoDetail') || false
      const isMobile = ref(false);
      const size = ref(window.innerWidth); // Set initial size
  
      // Function to check screen size
      const checkScreenSize = () => {
        size.value = window.innerWidth;
        isMobile.value = size.value < 768;
      };
      
      
      onMounted(() => {
        checkScreenSize(); // Initial check
        window.addEventListener('resize', checkScreenSize); // Add resize listener
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', checkScreenSize); // Clean up listener
      });
  
      return {
        isMobile,
        closeSidebar
      };
    },
  };
</script>
  
<style lang="scss">
  @import './style.module.scss'
</style>
  