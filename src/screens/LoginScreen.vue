<template>
  <div class="main">
    <main class="form-signin text-center">
      <form class="w-100" method="post">
        <i class="bi bi-shield-shaded display-1 mb-4"></i>&nbsp;
        <h1 class="fs-6 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="payload.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="payload.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button
          @click.prevent="loginUser"
          class="w-100 btn btn-lg btn-primary"
          type="submit"
        >
          Sign in
        </button>
        <p class="mt-2 mb-3 text-muted">© ShadowBook 2021</p>
      </form>
    </main>
  </div>
</template>

<script>
import { SAVE_LOCAL_DB_DATA } from "../browser-db-config/localStorage";
export default {
  name: "LoginScreen",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let res = await this.$store.dispatch("LOGIN_USER", this.payload);
        if (res) {
          this.items = res;
          this.dismissCountDown = this.dismissSecs;
          this.message = "Login was successful";
          this.saveData("shadow-book-user-data", res);
          this.$router.push({ name: "DashboardScreen" });
        } else {
          alert(res.message || "Error: Netowrk error occured.");
        }
      } catch (error) {
        console.log(error.request);
        this.message = error.message;
        this.dismissCountDown = this.dismissSecs;
      }
    },
    saveData(localStorageName, dataToStore) {
      SAVE_LOCAL_DB_DATA(localStorageName, dataToStore);
    },
  },
};
</script>

<style scoped>
html,
.main {
  min-height: 100vh;
}

.main {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
