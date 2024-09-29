<template>
    <a-drawer
        :open="open"
        class="custom-class"
        root-class-name="root-class-name"
        :maskClosable="true"
        @close="onCloseDrawer"
        placement="right"
    >
        <ul>
            <li class="flex items-center justify-start px-2 py-4" v-for="(item, index) in menuItems" :key="index">
                <component :is="item.icon" class="w-6 h-6 mr-4 leading-1"/>
                <span class="text-lg">
                    {{ item.title }}
                </span>
            </li>
        </ul>
    </a-drawer>
</template>

<script>
export default {
    name: "SideDrawer",
    props: {
        open: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function,
            default: () => {}
        }
        
    },
    data() {
        return {
            menuItems: [
                {
                    title: "Liked Videos",
                    link: "/",
                    icon: "AkThumbsUp"
                },
                {
                    title: "My Videos",
                    link: "/",
                    icon: "BsCameraVideo"
                },
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
    },
    methods: {
        onCloseDrawer() {
            this.$emit('update:open', false)
            this.onClose()
        }
    }
}
</script>