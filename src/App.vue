<template>
  <DashboardLayout>
    <Dashboard />
  </DashboardLayout>
</template>

<script>  
import DashboardLayout from './components/Layout/DashboardLayout.vue';
import Dashboard from './views/Dashboard/Dashboard.vue';


export default {
  name: 'App',
  components: {
    Dashboard,
    DashboardLayout
  }
}
</script>
