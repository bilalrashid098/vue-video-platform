// import { createRouter, createWebHistory } from "vue-router";
// // import { appRoutes } from "@/utils/routes";
// import Dashboard from "@/views/Dashboard/Dashboard.vue";
// import VideoDetail from "@/views/VideoDetail/VideoDetail.vue";
// import DashboardLayout from "@/components/Layout/DashboardLayout.vue";

// // const routes = [
// //   {
// //     path: appRoutes.dashboard,
// //     name: "Dashboard",
// //     component: {
// //       default: Dashboard,
// //       layout: DashboardLayout,
// //     },
// //   },
// //   {
// //     path: appRoutes.videoDetail,
// //     name: "VideoDetail",
// //     component: {
// //       default: VideoDetail,
// //       layout: DashboardLayout,
// //     },
// //   },
// // ];

// const routes = [
//   {
//     path: "/",
//     component: DashboardLayout,
//     children: [
//       {
//         path: "",
//         component: Dashboard,
//       },
//       {
//         path: "video",
//         component: VideoDetail,
//       },
//     ],
//   },
// ];

// export const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
