<template>
  <v-list
    id="list"
    class="ml-10 overflow-y-auto"
    color="transparent"
    style="height: calc(100vh - 180px)"
  >
    <v-list-item v-for="row in charas" :key="row.id" class="my-10">
      <v-row class="justify-center">
        <v-dialog>
          <template v-slot:activator="{ on, attrs }">
            <v-card
              v-for="chara in row.row"
              :key="chara.id"
              class="mx-2"
              width="35%"
              dark
              hover
              v-bind="attrs"
              v-on="on"
              @click="changeName(chara.name, chara.icon)"
            >
              <v-row class="d-flex">
                <v-col id="cardColWidth">
                  <v-img :src="chara.url" width="70%" lazy-src />
                </v-col>
                <v-col>
                  <v-card-title class="font-weight-black text-h4">{{
                    chara.name
                  }}</v-card-title>
                  <v-card-text class="font-weight-thin ml-1">
                    {{ chara.janame }}
                  </v-card-text>
                  <v-divider :color="cardLineColor" />
                  <v-card-text class="ml-1 mt-2">
                    {{ chara.dubbing }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </template>
          <template v-slot:default="dialog">
            <div
              id="cardBackGround"
              :style="cssVar"
              class="d-flex justify-center"
            >
              <v-card color="transparent" width="70%" dark flat>
                <v-card-title class="font-weight-black text-h3 ml-16">{{
                  currentName
                }}</v-card-title>
                <v-row>
                  <v-col id="cardIconContent" class="ml-10">
                    <v-img :src="currentUrl" width="70%" />
                  </v-col>
                  <v-col class="mr-10">
                    <v-card-text
                      id="list"
                      class="text-h5 overflow-y-auto"
                      style="height: calc(66vh)"
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
            </div>
          </template>
        </v-dialog>
      </v-row>
    </v-list-item>
  </v-list>
</template>

<style scoped>
#cardColWidth {
  width: 50%;
}
#list::-webkit-scrollbar {
  display: none;
}
#cardIconContent {
  width: 40%;
}
#cardBackGround {
  background-color: var(--backGroundColor);
}
</style>

<script>
// @ is an alias to /src
import Vue from "vue";
export default Vue.component(
  "chara-list-v2",
  Vue.extend({
    props: {
      charas: { type: Array, default: undefined },
      cardLineColor: { type: String, default: "white" },
      backColor: { type: String, default: "#303030" },
    },
    data: () => ({
      currentName: "",
      currentUrl: "",
      cardContext: "",
    }),
    methods: {
      changeName(name, icon) {
        this.currentName = name;
        this.currentUrl = icon;
        console.log(this.cssVar);
      },
    },
    computed: {
      cssVar() {
        return {
          "--backGroundColor": this.backColor
        };
      },
    },
  })
);
</script>
