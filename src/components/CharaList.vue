<template>
  <v-list
    id="list"
    class="ml-10 overflow-y-auto"
    color="transparent"
    style="height: calc(100vh - 220px)"
  >
    <v-list-item v-for="chara in charas" :key="chara.id" class="my-10">
      <v-row class="justify-center">
        <v-dialog width="57%">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              v-for="item in chara.row"
              :key="item.id"
              width="25%"
              height="15%"
              color="black"
              class="mx-5"
              hover
              v-bind="attrs"
              v-on="on"
              @click="changeName(item.name, item.icon)"
            >
              <v-img :src="item.url" />
            </v-card>
          </template>
          <template v-slot:default="dialog">
            <v-card id="charaCard" dark>
              <v-card-title class="font-weight-black text-h3 ml-6">{{
                currentName
              }}</v-card-title>
              <v-row>
                <v-col class="ml-10">
                  <v-img :src="currentUrl" width="54%" />
                </v-col>
                <v-col class="mr-10">
                  <v-card-text
                    id="list"
                    class="text-h5 overflow-y-auto"
                    style="height: calc(65vh)"
                  >
                    ふとしたきっかけでバレーボールに魅せられた少年、日向翔陽。
                    中学3年になった日向は、部員がいない逆風にも負けず、やっとの思いでメンバーを集め、最初で最後の公式戦に出場する。
                    しかしその前に、「コート上の王様」と異名を取る天才プレーヤー・影山飛雄が立ちはだかるのだった…
                    ふとしたきっかけでバレーボールに魅せられた少年、日向翔陽。
                    中学3年になった日向は、部員がいない逆風にも負けず、やっとの思いでメンバーを集め、最初で最後の公式戦に出場する。
                    ふとしたきっかけでバレーボールに魅せられた少年、日向翔陽。
                    中学3年になった日向は、部員がいない逆風にも負けず、やっとの思いでメンバーを集め、最初で最後の公式戦に出場する。
                    ふとしたきっかけでバレーボールに魅せられた少年、日向翔陽。
                    中学3年になった日向は、部員がいない逆風にも負けず、やっとの思いでメンバーを集め、最初で最後の公式戦に出場する。
                    ふとしたきっかけでバレーボールに魅せられた少年、日向翔陽。
                    中学3年になった日向は、部員がいない逆風にも負けず、やっとの思いでメンバーを集め、最初で最後の公式戦に出場する。
                  </v-card-text>
                </v-col>
              </v-row>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<style scoped>
#list::-webkit-scrollbar {
  display: none;
}
#charaCard {
  overflow-x: hidden;
}
</style>

<script>
// @ is an alias to /src
import Vue from "vue";

export default Vue.component(
  "chara-list",
  Vue.extend({
    props: {
      charas: { type: Array, default: undefined },
    },
    data: () => ({
      currentName: "",
      currentUrl: "",
      dialogValue: false,
    }),
    methods: {
      changeName(name, url) {
        this.currentName = name;
        this.currentUrl = url;
      },
    },
  })
);
</script>
