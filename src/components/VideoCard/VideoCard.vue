<template>
    <router-link :class="`${className}`" :to="appRoutes.videoDetail(video.id)">
        <div class="card">
            <div class="relative">
                <img class="aspect-video object-cover rounded-md" :src="video.thumbnail" :alt="video.title">
                <span class="bg-[#2c2c2c90] px-2 py-1 text-sm absolute bottom-[10px] right-[10px] rounded-md">{{ video.duration }}</span>
            </div>
            <div class="flex mt-3">
                <a-avatar :size="48" :src="video.owner.avatar" />
                <div class="ml-3">
                    <p class="text-md font-bold">{{ video.title }}</p>
                    <p class="text-xs mb-1">{{ video.views }} 
                        <span v-if="video.views > 1"> view</span> 
                        <span v-else> views</span> 
                        | {{ video.createdAt }}</p>
                    <p class="text-sm">{{ video.owner.name }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import { appRoutes } from '@/utils/routes';
export default {
    name: "VideoCard",
    props: [
        'video',
        'className'
    ],
    components: {
    },
    data() {
        return {
            appRoutes
        }
    }
}
</script>

<style lang="sass" scoped>
 @import './style.module.scss'
</style>