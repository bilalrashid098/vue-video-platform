<template>
    <a-config-provider
      :theme="{
        algorithm: theme.darkAlgorithm,
        token: customTheme,
      }"
    >
      <div class="main-wrapper">
        <Header />
        <Sidebar v-if="!isMobile" />
        <FooterMenu v-else />
        <div class="content md:pl-[100px] lg:pl-[300px] pt-[100px] px-5 md:pb-5 pb-[4.5rem]">
          <slot />
        </div>
      </div>
    </a-config-provider>
  </template>
  
  <script>
  import { theme } from 'ant-design-vue';
  import Sidebar from '@/components/Sidebar/Sidebar.vue';
  import FooterMenu from '@/components/FooterMenu/FooterMenu.vue';
  import Header from '@/components/Header/Header.vue';
  import { customTheme } from '@/utils/constants';
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'DashBoard',
    components: {
      Sidebar,
      Header,
      FooterMenu,
    },
    setup() {
      const isMobile = ref(false);
      const size1 = ref(window.innerWidth); // Set initial size
  
      // Function to check screen size
      const checkScreenSize = () => {
        size1.value = window.innerWidth;
        isMobile.value = size1.value < 768;
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
        size1,
        theme,
        customTheme,
      };
    },
  };
  </script>
  
  <style lang="scss">
  h1 {
    font-size: 19px;
    span {
      font-size: 25px;
    }
  }
  </style>
  