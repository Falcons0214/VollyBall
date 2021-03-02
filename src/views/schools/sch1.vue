<template>
  <CharaList :charas="charas" cardLineColor="#F57C00" backColor="#1D0E00" />
</template>

<script>
// @ is an alias to /src
import CharaList from "@/components/CharaListv2.vue";

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
            name: "澤村 大地",
            janame: "SAWAMURA DAICHI",
            dubbing: "CV: 日野 聡",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000012/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000012/base/001.png?1614566263",
          },
          {
            id: 2,
            name: "菅原 孝支",
            janame: "SUGAWARA KOSHI",
            dubbing: "CV: 細谷 佳正",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000013/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000013/base/001.png?1614566263",
          },
        ],
      },
      {
        id: 2,
        row: [
          {
            id: 1,
            name: "東峰 旭",
            janame: "AZUMANE ASAHI",
            dubbing: "CV: 細谷 佳正",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000014/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000014/base/001.png?1614566263",
          },
          {
            id: 2,
            name: "西谷 夕",
            janame: "NISHINOYA YU",
            dubbing: "CV: 岡本 信彦",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000015/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000015/base/001.png?1614566263",
          },
        ],
      },
      {
        id: 3,
        row: [
          {
            id: 1,
            name: "田中 龍之介",
            janame: "TANAKA RYUNOSUKE",
            dubbing: "CV: 林 勇",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000016/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000016/base/001.png?1614566266",
          },
          {
            id: 2,
            name: "縁下 力",
            janame: "ENNOSHITA CHIKARA",
            dubbing: "CV: 増田 俊樹",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000017/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000017/base/001.png?1614566276",
          },
        ],
      },
      {
        id: 4,
        row: [
          {
            id: 1,
            name: "木下 久志",
            janame: "KINOSHITA HISASHI",
            dubbing: "CV: 相楽 信頼",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000018/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000018/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "成田 一仁",
            janame: "NARITA KAZUHITO",
            dubbing: "CV: 西山 宏太朗",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000019/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000019/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 5,
        row: [
          {
            id: 1,
            name: "影山 飛雄",
            janame: "KINOSHITA HISASHI",
            dubbing: "CV: 石川 界人",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000020/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000020/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "日向 翔陽",
            janame: "HINATA SHOYO",
            dubbing: "CV: 村瀬 歩",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000021/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000021/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 6,
        row: [
          {
            id: 1,
            name: "月島 蛍",
            janame: "TSUKISHIMA KEI",
            dubbing: "CV: 内山 昂輝",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000022/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000022/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "山口 忠",
            janame: "YAMAGUCHI TADASHI",
            dubbing: "CV: 斉藤 壮馬",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000023/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000023/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 7,
        row: [
          {
            id: 1,
            name: "清水 潔子",
            janame: "SHIMIZU KIYOKO",
            dubbing: "CV: 名塚 佳織",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000088/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000088/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "谷地 仁花",
            janame: "YACHI HITOKA",
            dubbing: "CV: 諸星 すみれ",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000089/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000089/base/001.png?1614566278",
          },
        ],
      },
      {
        id: 8,
        row: [
          {
            id: 1,
            name: "武田 一鉄",
            janame: "TAKEDA ITTETSU",
            dubbing: "CV: 神谷 浩史",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000090/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000090/base/001.png?1614566277",
          },
          {
            id: 2,
            name: "烏養 繋心",
            janame: "UKAI KEISHIN",
            dubbing: "CV: 江川 央生",
            url:
              "https://haikyu.jp/core_sys/images/contents/00000091/base/l1.png",
            icon:
              "https://haikyu.jp/core_sys/images/contents/00000091/base/001.png?1614566278",
          },
        ],
      },
    ],
  }),
};
</script>
