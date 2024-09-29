<template>
    <div class="sidebar w-[100px] lg:w-[300px] h-[calc(100dvh-100px)] p-5 pt-0 fixed top-[100px] left-0">
        <div class="flex flex-col justify-between bg-[#2c2c2c] rounded-md h-full">
            <ul>
                <li class="flex items-center lg:justify-start justify-center" v-for="(item, index) in menuItems" :key="index">
                    <component :is="item.icon" class="w-5 h-5 lg:mr-3 leading-1"/>
                    <span class="lg:block hidden">
                        {{ item.title }}
                    </span>
                </li>
            </ul>
            <ul>
                <li class="flex items-center lg:justify-start justify-center" v-for="(item, index) in menuItems2" :key="index">
                    <component :is="item.icon" class="w-5 h-5 lg:mr-3 leading-1"/>
                    <span class="lg:block hidden">
                        {{ item.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { appRoutes } from '@/utils/routes';

export default {
    name: "SideBar",
    components: {
    },
    data() {
        return {
            menuItems: [
                {
                    title: "Home",
                    link: appRoutes.home,
                    icon: "IcHomeAltSlim"
                },
                {
                    title: "Liked Videos",
                    link: appRoutes.videoDetail,
                    icon: "AkThumbsUp"
                },
                {
                    title: "History",
                    link: "/",
                    icon: "IcClockRotateRight"
                },
                {
                    title: "My Videos",
                    link: "/",
                    icon: "BsCameraVideo"
                },
                {
                    title: "Playlists",
                    link: "/",
                    icon: "AkFolder"
                },
                {
                    title: "Subscribers",
                    link: "/",
                    icon: "CaUserMultiple"
                },
            ],
            menuItems2: [
                {
                    title: "Support",
                    link: "/",
                    icon: "AkQuestion"
                },
                {
                    title: "Settings",
                    link: "/",
                    icon: "BsGearWide"
                },
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
 @import './style.module.scss'
</style>