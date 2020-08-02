<template>
  <v-container>
  <br/><br/><br/><br/><br/><br/><br/>
    <LoginLogo></LoginLogo>
    <br/><br/>
    <LoginForm></LoginForm>
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm";
import LoginLogo from "../components/LoginLogo";
export default {
  name: "Login",
  components: {
    LoginForm,
    LoginLogo,
  },
};
</script>
