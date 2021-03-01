<template>
  <chara-list :charas="charas" />
</template>

<script>
// @ is an alias to /src
import CharaList from "@/components/CharaList.vue";

export default {
  components: {
    CharaList,
  },
  data: () => ({
    charas: [
      {
        id: 1,
        row: [
          {
            id: 1,
            name: "日向 翔陽",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/01.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/01.png",
          },
          {
            id: 2,
            name: "影山 飛雄",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/02.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/02.png",
          },
        ],
      },
      {
        id: 2,
        row: [
          {
            id: 1,
            name: "澤村 大地",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/03.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/03.png",
          },
          {
            id: 2,
            name: "菅原 孝支",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/04.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/04.png",
          },
        ],
      },
      {
        id: 3,
        row: [
          {
            id: 1,
            name: "田中 龍之介",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/05.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/05.png",
          },
          {
            id: 2,
            name: "東峰 旭",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/06.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/06.png",
          },
        ],
      },
      {
        id: 4,
        row: [
          {
            id: 1,
            name: "西谷 夕",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/07.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/07.png",
          },
          {
            id: 2,
            name: "月島 螢",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/08.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/08.png",
          },
        ],
      },
      {
        id: 5,
        row: [
          {
            id: 1,
            name: "山口 忠",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/09.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/09.png",
          },
          {
            id: 2,
            name: "緣下 力",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/10.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/10.png",
          },
        ],
      },
    ],
  }),
};
</script>
