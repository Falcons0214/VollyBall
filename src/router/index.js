import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/story",
    name: "Story",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/story.vue"),
  },
  {
    path: "/chara",
    name: "Chara",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Chara.vue"),
    children: [
      {
        path: "sch1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/schools/sch1.vue"),
      },
      {
        path: "sch2",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/schools/sch2.vue"),
      },
      {
        path: "sch3",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/schools/sch3.vue"),
      },
      {
        path: "sch4",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/schools/sch4.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
