<template>
  <CharaListv2 :charas="charas" />
</template>

<script>
// @ is an alias to /src
import CharaListv2 from "@/components/CharaListv2.vue";

export default {
  components: {
    CharaListv2,
  },
  data: () => ({
    charas: [
      {
        id: 1,
        row: [
          {
            id: 1,
            name: "北 信介",
            janame: "KITA SHINSUKE",
            dubbing: "CV: 野島 健児",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000086/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000086/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "大耳 練",
            janame: "OMIMI REN",
            dubbing: "CV: 宮園 拓夢",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000096/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000096/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 2,
        row: [
          {
            id: 1,
            name: "銀島 結",
            janame: "GINJIMA HITOSHI",
            dubbing: "CV: 山本 匠馬",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000095/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000095/base/001.png?1614566278",
          },
          {
            id: 2,
            name: "赤木 路成",
            janame: "AKAGI MICHINARI",
            dubbing: "CV: 松浦 義之",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000094/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000094/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 3,
        row: [
          {
            id: 1,
            name: "宮 侑",
            janame: "MIYA ATSUMU",
            dubbing: "CV: 宮野 真守",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000030/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000030/base/001.png?1614566266",
          },
          {
            id: 2,
            name: "宮 治",
            janame: "MIYA OSAMU",
            dubbing: "CV: 株元 英彰",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000085/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000085/base/001.png?1614566276",
          },
        ],
      },
      {
        id: 4,
        row: [
          {
            id: 1,
            name: "角名 倫太郎",
            janame: "SUNA RINTARO",
            dubbing: "CV: 島﨑 信長",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000087/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000087/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "尾白 アラン",
            janame: "OJIRO ARAN",
            dubbing: "CV: 笠間 淳",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000093/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000093/base/001.png?1614566278",
          },
        ],
      },
    ],
  }),
};
</script>
