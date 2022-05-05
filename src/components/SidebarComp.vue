<template>
  <main
    class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white overflow-auto"
    style="min-height: 100vh"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto w-100 bg-light link-dark p-2 text-decoration-none"
    >
      <i class="bi bi-shield-shaded fs-6"></i>&nbsp;
      <span class="fs-6">ShadowBook</span>
    </a>
    <ul class="nav nav-pills flex-column mb-auto mt-2">
      <li class="my-1" v-for="link in links" :key="link.title">
        <router-link
          :to="link.to"
          class="nav-link link-light"
          :class="$route.name.includes(link.routeName) ? 'active' : ''"
        >
          <span v-html="link.icon"></span>
          {{ link.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <b-dropdown variant="link" toggle-class="text-decoration-none link-light">
      <template #button-content>
        <i class="bi bi-person-circle fs-3"></i>&nbsp; tflux2011
      </template>
      <b-dropdown-item href="#">New project...</b-dropdown-item>
      <b-dropdown-item href="#">Settings</b-dropdown-item>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <li><hr class="dropdown-divider" /></li>
      <b-dropdown-item href="#" @click="logOut">Sign out</b-dropdown-item>
    </b-dropdown>
  </main>
</template>

<script>
import { DELETE_LOCAL_DB_DATA } from "../browser-db-config/localStorage";
export default {
  name: "SidebarComp",
  data() {
    return {
      links: [
        {
          id: 0,
          to: "/dashboard",
          title: "Dashboard",
          icon: `<i class="bi bi-speedometer2"></i>`,
          routeName: "DashboardScreen",
        },
        {
          id: 1,
          to: "/pages",
          title: "Pages",
          icon: `<i class="bi bi-file-earmark-text"></i>`,
          routeName: "PagesScreen",
        },
        {
          id: 2,
          to: "/posts",
          title: "Posts",
          icon: `<i class="bi bi-journal-text"></i>`,
          routeName: "PostsScreen",
        },
        {
          id: 3,
          to: "/users",
          title: "Users",
          icon: `<i class="bi bi-people"></i>`,
          routeName: "UsersScreen",
        },
        {
          id: 4,
          to: "/templates",
          title: "Templates",
          icon: `<i class="bi bi-palette"></i>`,
          routeName: "TemplatesScreen",
        },
        {
          id: 5,
          to: "/settings",
          title: "Settings",
          icon: `<i class="bi bi-gear-fill"></i>`,
          routeName: "SettingsScreen",
        },
      ],
    };
  },
  methods: {
    logOut() {
      DELETE_LOCAL_DB_DATA("shadow-book-user-data");
      this.$router.push({ name: "LoginScreen" });
    },
  },
};
</script>

<style></style>
