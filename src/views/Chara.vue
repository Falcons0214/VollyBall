<template>
  <div>
    <v-toolbar flat color="transparent">
      <v-row class="justify-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list color="transparent">
            <v-list-item
              v-for="school in schools"
              :key="school.id"
              :to="school.path"
              @click="changeTitle(school.name)"
            >
              <v-list-item-title class="font-weight-black">{{
                school.name
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer />
        <v-toolbar-title class="text-h3 font-weight-black mr-1">
          {{ titleName }}
        </v-toolbar-title>
        <v-spacer />
      </v-row>
    </v-toolbar>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
</style>

<script>
// @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    drawer: false,
    titleName: "烏野高校",
    schools: [
      { id: 0, name: "烏野高校", path: "/chara/sch1" },
      { id: 1, name: "白鳥沢学園", path: "/chara/sch2" },
      { id: 2, name: "稻荷崎高校", path: "/chara/sch3" },
      { id: 3, name: "OTHER", path: "/chara/sch4" },
    ],
  }),
  methods: {
    changeTitle(name) {
      this.titleName = name;
    },
  },
});
</script>
