<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        status: 'online' | 'away' | 'offline'  | 'none',
        size: 'sm' | 'md' | 'lg',
    }>(), {
        size: 'md',
    }
)

const computedStatus = computed(() => {
    return {
        online: 'bg-green-500',
        away: 'bg-red-500',
        offline: 'bg-gray-500',
        none: 'hidden',
    }[props.status]
})

const computedSize = computed(() => {
    return {
        sm: '',
        md: 'h-10 w-auto',
        lg: 'h-14 w-auto',
    }[props.size]
})
</script>

<template>
    <div class="relative">
        <img src="http://gravatar.com/avatar" class="rounded-full" :class="computedSize" />
        <div class="absolute h-2.5 w-2.5 rounded-full bottom-0 right-0.5 ring-1 ring-white ring-offset-1" :class="computedStatus"></div>
    </div>
</template>