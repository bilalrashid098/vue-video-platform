<template>
    <div class="flex gap-3 flex-wrap mr-[-0.75rem]">
        <video-card v-for="(item, index) in videos" :key="index" :video="item" className="xl:w-[calc(33.33%-0.75rem)] md:w-[calc(50%-0.75rem)] w-[calc(100%-0.75rem)]" />
    </div>
</template>

<script>
import VideoCard from '@/components/VideoCard/VideoCard.vue'
import VideoThumbnail from '@/assets/images/thumbnail.jpg'
import Avatar from '@/assets/images/user.webp'

export default {
    name: "DashBoard",
    components: {
        VideoCard
    },
    data() {
        return {
            videos: [
                {
                    id: 1,
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
                    id: 2,
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
                },{
                    id: 3,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                },{
                    id: 1,
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
                }
            ]
        }
    },
}
</script>

<style lang="scss">
  
</style>

