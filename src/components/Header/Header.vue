<template>
    <header class="w-full h-[100px] p-5 fixed top-0 left-0 bg-[#121212] z-[99]">
        <div class="bg-[#333333] h-full p-3 flex w-full rounded-md">
            <div class="lg:w-[250px] logo pl-3">LOGO</div>
            <div class="md:flex justify-between pl-3 w-full lg:w-[calc(100%-250px)] hidden">
                <a-input v-model:value="value" class="md:w-[70%] max-w-[500px] h-full search_input" placeholder="Search video here..." >
                    <template #prefix>
                        <by-search/>
                    </template>
                </a-input>
                <div class="flex items-center md:ml-5">
                    <a-button type="text" class="px-3">Login</a-button>
                    <a-button type="text" class="px-3">Signup</a-button>
                </div>
            </div>
            <div class="md:hidden flex justify-end w-full" >
                <a-button type="text" class="hover:bg-transparent hover:text-[#6127ff] mr-3">
                    <by-search class="w-5 h-5"/>
                </a-button>
                <a-button type="text" @click="toggleDrawer" class="hover:bg-transparent hover:text-[#6127ff]">
                    <cg-menu-right class="w-6 h-6"/>
                </a-button>
            </div>
        </div>
        <side-drawer :open="open" :onClose="onDrawerClose" @update:open="open = $event" />
    </header>
</template>
<script>
import SideDrawer from '../SideDrawer/SideDrawer.vue'
export default {
  components: { SideDrawer },
    name: "HeaderComp",
    data() {
        return {
            value: '',
            open: false
        }
    },
    methods: {
        toggleDrawer() {
            this.open = !this.open
        },
        onDrawerClose() {
            this.open = false
        },
    }
}
</script>

<style lang="sass" scoped>
 @import './style.module.scss'
</style>