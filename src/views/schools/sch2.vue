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
            name: "牛島 若利",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/15.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/15.png",
          },
          {
            id: 2,
            name: "瀨見 英太",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/16.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/16.png",
          },
        ],
      },
      {
        id: 2,
        row: [
          {
            id: 1,
            name: "大平 獅音",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/17.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/17.png",
          },
          {
            id: 2,
            name: "天童 覺",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/18.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/18.png",
          },
        ],
      },
      {
        id: 3,
        row: [
          {
            id: 1,
            name: "五色 工",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/19.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/19.png",
          },
          {
            id: 2,
            name: "白布 賢二郎",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/20.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/20.png",
          },
        ],
      },
      {
        id: 4,
        row: [
          {
            id: 1,
            name: "川西太一",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/21.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/21.png",
          },
          {
            id: 2,
            name: "山形 隼人",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/22.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/22.png",
          },
        ],
      },
      {
        id: 5,
        row: [
          {
            id: 1,
            name: "鷲匠 鍛治",
            url: "http://www.j-haikyu.com/anime/images/chara/menu/23.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/23.png",
          },
          {
            id: 2,
            url: "http://www.j-haikyu.com/anime/images/chara/menu/24.png",
            icon: "http://www.j-haikyu.com/anime/images/chara/main/24.png",
          },
        ],
      },
    ],
  }),
};
</script>
