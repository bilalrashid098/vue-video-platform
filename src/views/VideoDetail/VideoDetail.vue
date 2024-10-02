<template>
    <div class="flex flex-wrap">
        <div class="w-full lg:w-[75%] lg:pr-2">
            <video-card :key="index" :video="video" className="" />
        </div>
        <div class="w-full lg:w-[25%] lg:pl-2">
            <div v-for="(item, index) in videos" :key="index" className="mb-3">
                <video-card  :video="item" />
            </div>
        </div>
    </div>
</template>

<script>
import VideoCard from '@/components/VideoCard/VideoCard.vue'
import VideoThumbnail from '@/assets/images/thumbnail.jpg'
import Avatar from '@/assets/images/user.webp'

export default {
    name: "VideoDetail",
    components: {
        VideoCard
    },
    data() {
        return {
            video:  {
                title: "Video Title",
                owner: {
                    name: "Owner Name",
                    avatar: Avatar,
                },
                thumbnail: VideoThumbnail
                ,
                views: 1000,
                createdAt: "02/10/2024",
                duration: "40:20",
            },
            videos: [
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
                {
                    title: "Video Title",
                    owner: {
                        name: "Owner Name",
                        avatar: Avatar,
                    },
                    thumbnail: VideoThumbnail
                    ,
                    views: 1000,
                    createdAt: "02/10/2024",
                    duration: "40:20",
                },
            ]
        }
    },
}
</script>

<style lang="scss">
  
</style>

