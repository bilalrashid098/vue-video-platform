<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
      token: customTheme,
    }"
  >
    <router-view />
  </a-config-provider>
</template>

<script>
import { theme } from 'ant-design-vue';
import { customTheme } from '@/utils/constants';

export default {
  name: 'App',
  data() {
    return {
      customTheme,
      theme
    };
  },
}
</script>
