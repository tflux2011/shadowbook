<template>
  <div class="row g-0">
    <div class="col-2">
      <sidebar-comp></sidebar-comp>
    </div>
    <div class="col" style="min-height: 100vh">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComp from "../components/SidebarComp.vue";
export default {
  name: "MainScreen",
  components: {
    SidebarComp,
  },
};
</script>

<style></style>
SidebarComp
