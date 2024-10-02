import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import VideoDetail from "@/views/VideoDetail/VideoDetail.vue";
import DashboardLayout from "@/components/Layout/DashboardLayout.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        name: "dashboard",
        path: "/",
        component: Dashboard,
      },
      {
        name: "videoDetail",
        path: "video/:id",
        component: VideoDetail,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
