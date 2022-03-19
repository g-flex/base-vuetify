<template>
  <v-footer style="position: relative" class="bg-transparent" app>
    <div class="footer-overlay bg-primary"></div>
    <v-card
        elevation="0"
        rounded="0"
        width="100%"
        class="text-center bg-transparent"
    >
      <v-card-text class="opacity-100">
        <div class="row">
          <div class="col-12 mobile-12">
            <div class="row centered">
              <div class="col-12 align-start"></div>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-text>{{ new Date().getFullYear() }}©</v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
  .footer-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    opacity: .4;
  }
  a.show-text-hover {
    height: 30px;
    p {
      transition: font-size .1s linear;
      font-size: 9px !important;
    }
    &:hover p {
      font-size: 14px !important;
    }
    a:visited,a:active{ color: default; }
  }
</style>