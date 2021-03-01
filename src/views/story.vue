<template>
  <div>
    <v-carousel hide-delimiters show-arrows-on-hover class="mt-10">
      <v-carousel-item v-for="item in items" :key="item.id">
        <v-card class="mx-5" flat color="transparent">
          <v-responsive :aspect-ratio="16 / 9">
            <v-row class="ml-10">
              <v-col>
                <v-card color="transparent" flat tile>
                  <v-card-title class="text-h5 font-weight-black black--text">
                    {{ item.chap }}
                  </v-card-title>
                  <slide-show :paths="item.graphs" height="100%" />
                </v-card>
              </v-col>
              <v-col class="mr-10 mt-14" align="center">
                <v-card-text
                  id="cardText"
                  class="text-h6 font-weight-black black--text overflow-y-auto"
                  style="height: calc(50vh)"
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
          </v-responsive>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped>
#cardText::-webkit-scrollbar {
  display: none;
}
</style>

<script>
import Vue from "vue";
import SlideShow from "@/components/SlideShow.vue";

export default Vue.extend({
  components: {
    SlideShow,
  },
  data: () => ({
    items: [
      {
        id: 1,
        chap: "第1話「終わりと始まり」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/01/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/01/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/01/03.jpg",
          },
        ],
      },
      {
        id: 2,
        chap: "第2話「烏野高校排球部」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/02/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/02/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/02/03.jpg",
          },
        ],
      },
      {
        id: 3,
        chap: "第3話「最強の味方」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/03/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/03/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/03/03.jpg",
          },
        ],
      },
      {
        id: 4,
        chap: "第4話「頂の景色」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/04/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/04/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/04/03.jpg",
          },
        ],
      },
      {
        id: 5,
        chap: "第5話「小心者の緊張」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/05/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/05/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/05/03.jpg",
          },
        ],
      },
      {
        id: 6,
        chap: "第6話「面白いチーム」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/06/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/06/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/06/03.jpg",
          },
        ],
      },
      {
        id: 7,
        chap: "第7話「VS “大王様”」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/07/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/07/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/07/03.jpg",
          },
        ],
      },
      {
        id: 8,
        chap: "第8話「“エース”と呼ばれる人」",
        graphs: [
          {
            id: 1,
            url: "http://www.j-haikyu.com/anime/images/story/s1/08/01.jpg",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/story/s1/08/02.jpg",
          },
          {
            id: 3,
            url: "http://www.j-haikyu.com/anime/images/story/s1/08/03.jpg",
          },
        ],
      },
    ],
  }),
});
</script>
