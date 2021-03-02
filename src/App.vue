<template>
  <v-app>
    <v-img
      :src="require(`@/assets/pic${currentBackGround}.png`)"
      lazy-src
      style="height: calc(100vh)"
    >
      <v-app-bar app dense color="transparent" flat>
        <v-btn icon v-for="icon in icons" :key="icon.id" :href="icon.url">
          <v-icon large>{{ icon.icon }}</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn height="0px" @click="changebackground()">
          <v-app-bar-title class="text-h3 font-weight-black mt-5 mr-2">
            {{ $store.state.app.name }}
          </v-app-bar-title>
        </v-btn>
        <v-spacer />
        <v-btn
          class="mt-5"
          depressed
          icon
          @click="rightSlideButton = !rightSlideButton"
        >
          <v-icon v-if="!rightSlideButton" large>
            mdi-chevron-double-left
          </v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="rightSlideButton"
        absolute
        bottom
        right
        temporary
        dark
        color="transparent"
      >
        <v-list-item-group>
          <v-list-item
            v-for="item in items"
            :key="item.id"
            class="my-4 text-h6 justify-center"
            color="#BBDEFB"
            :to="item.path"
          >
            {{ item.name }}
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
      <v-main class="mt-10">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-main>
    </v-img>
  </v-app>
</template>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s;
}
</style>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    rightSlideButton: true,
    currentBackGround: "1",
    backCounter: 1,
    items: [
      { id: 0, name: "Home", path: "/" },
      { id: 1, name: "Story", path: "/story" },
      { id: 2, name: "Chara", path: "/chara" },
      { id: 3, name: "Info", path: "/info" },
      { id: 4, name: "About", path: "/about" },
    ],
    icons: [
      {
        id: 0,
        icon: "mdi-facebook",
        url: "https://www.facebook.com/HaikyupaiQiuShaoNian",
      },
      {
        id: 1,
        icon: "mdi-twitter",
        url: "https://twitter.com/animehaikyu_com",
      },
    ],
  }),
  methods: {
    changebackground() {
      this.backCounter += 1;
      if (this.backCounter === 5) {
        this.backCounter = 1;
      }
      this.currentBackGround = this.backCounter.toString();
    },
  },
});
</script>
