<template>
    <aside :class="`sidebar w-[100px] lg:w-[300px] h-[calc(100dvh-100px)] p-5 pt-0 fixed top-[100px] left-0 ${closeSidebar && 'closed'}`">
        <div class="flex flex-col justify-between bg-[#2c2c2c] rounded-md h-full">
            <ul>
                <router-link :to="item.link"  v-for="(item, index) in menuItems" :key="index">
                    <li class="flex items-center lg:justify-start justify-center">
                        <component :is="item.icon" class="w-5 h-5 lg:mr-3 leading-1"/>
                        <span class="lg:block hidden">
                            {{ item.title }}
                        </span>
                    </li>
                </router-link>
            </ul>
            <ul>
                <router-link :to="item.link"  v-for="(item, index) in menuItems2" :key="index">
                    <li class="flex items-center lg:justify-start justify-center">
                        <component :is="item.icon" class="w-5 h-5 lg:mr-3 leading-1"/>
                        <span class="lg:block hidden">
                            {{ item.title }}
                        </span>
                    </li>
                </router-link>
            </ul>
        </div>
    </aside>
</template>

<script>
import { menuItems, menuItems2 } from '@/utils/constants';
import { useRoute } from 'vue-router'; 
export default {
    name: "SideBar",
    components: {
    },
    setup() {
        const route = useRoute();
        const closeSidebar = route.name === 'videoDetail' || false

        return {
            menuItems,
            menuItems2,
            closeSidebar
        }
    }
}
</script>

<style lang="sass" scoped>
 @import './style.module.scss'
</style>