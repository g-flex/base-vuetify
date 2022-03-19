<template>
  <v-app-bar color="transparent">
    <template v-slot:prepend>
      <v-icon :icon="icons.home"></v-icon>
    </template>

    <v-app-bar-title>
      <div class="col-12 centered">
        <div class="text-h5 text-primary">Title</div>
      </div>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn :icon="icons.menu"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import {mdiMenu, mdiMenuOpen, mdiHome} from "@mdi/js";

export default {
  name: "HeaderComponent",
  data() {
    return {
      icons: {
        menu: mdiMenu,
        menuOpen: mdiMenuOpen,
        home: mdiHome,
      },
    }
  },
}
</script>

<style lang="scss" scoped>

</style>