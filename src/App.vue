<template>
  <v-app style="min-height: 100vh;" theme="dark">
    <HeaderComponent />
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  name: "App",
  components: {FooterComponent, HeaderComponent},
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "~@/assets/scss/style.scss";

.v-application__wrap {
  height: 100%;
}
.v-icon__svg {
  width: 100%;
}
</style>