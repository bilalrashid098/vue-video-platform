<template>
    <footer class="footer h-[60px] fixed bottom-0 left-0 w-full bg-[#2c2c2c] z-[99] rounded-t-lg">
        <ul class="flex items-center h-full">
            <li class="w-[25%] flex flex-col items-center justify-center text-center" v-for="(item, index) in menuItems" :key="index">
                <component :is="item.icon" class="w-5 h-5 leading-1 mb-1"/>
                <span class="text-xs">
                    {{ item.title }}
                </span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: "FooterMenu",
    components: {
    },
    data() {
        return {
            menuItems: [
                {
                    title: "Home",
                    link: "/",
                    icon: "IcHomeAltSlim"
                },
                {
                    title: "History",
                    link: "/",
                    icon: "IcClockRotateRight"
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
        }
    }
}
</script>

<style lang="sass" scoped>
 @import './style.module.scss'
</style>