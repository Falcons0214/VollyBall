<template>
  <v-list
    id="list"
    color="transparent"
    class="overflow-y-auto"
    style="height: calc(70vh)"
  >
    <v-iist-item v-for="sch in otherSchool" :key="sch.id">
      <v-toolbar color="transparent" flat>
        <v-spacer />
        <v-toolbar-title class="font-weight-light text-h4 ml-12">
          {{ sch.name }}
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <CharaListv2
        :charas="sch.students"
        :cardLineColor="sch.color"
        :backColor="sch.backColor"
      />
    </v-iist-item>
  </v-list>
</template>

<style scoped>
#list::-webkit-scrollbar {
  display: none;
}
</style>

<script>
// @ is an alias to /src
import Vue from "vue";
import CharaListv2 from "@/components/CharaListv2.vue";

export default Vue.extend({
  components: {
    CharaListv2,
  },
  data: () => ({
    otherSchool: [
      {
        id: 1,
        name: "伊達工業高校",
        color: "#00897B",
        backColor: "#00120A",
        students: [
          {
            id: 1,
            row: [
              {
                id: 1,
                name: "青根 高伸",
                janame: "AONE TAKANOBU",
                dubbing: "CV: 松川 欲輝",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000079/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000079/base/001.png?1614566277",
              },
              {
                id: 2,
                name: "二口 堅治",
                janame: "FUTAKUCHI KENJI",
                dubbing: "CV: 中澤 まさとも",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000078/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000078/base/001.png?1614566277",
              },
            ],
          },
          {
            id: 2,
            row: [
              {
                id: 3,
                name: "黄金川 貫至",
                janame: "KOGANEGAWA KANJI",
                dubbing: "CV: 庄司 将之",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000080/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000080/base/001.png?1614566277",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "井闥山學院",
        color: "#EEFF41",
        backColor: "#131A01",
        students: [
          {
            id: 1,
            row: [
              {
                id: 1,
                name: "佐久早 聖臣",
                janame: "SAKUSA KIYOOMI",
                dubbing: "CV: 鳥海浩輔",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000034/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000034/base/001.png?1614566277",
              },
              {
                id: 2,
                name: "古森 元也",
                janame: "KOMORI MOTOYA",
                dubbing: "CV: 上村祐翔",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000035/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000035/base/001.png?1614566277",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "歐台高校",
        color: "#4FC3F7",
        backColor: "#011A1A",
        students: [
          {
            id: 1,
            row: [
              {
                id: 1,
                name: "星海 光来",
                janame: "HOSHIUMI KORAI",
                dubbing: "CV: 花江 夏樹",
                url:
                  "https://haikyu.jp/core_sys/images/contents/00000031/base/l1.png",
                icon:
                  "https://haikyu.jp/core_sys/images/contents/00000031/base/001.png?1614566277",
              },
            ],
          },
        ],
      },
    ],
  }),
});
</script>
