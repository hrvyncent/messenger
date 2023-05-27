<script setup lang="ts">
import Avatar from '../components/Avatar.vue';

type User = {
    id: number
    name: string
    message: string,
    status: 'online' | 'offline' | 'away'
}

const users = <User[]>[
    {id: 1, name: 'Alexis Axis', message: 'Wait lang', status: 'offline'},
    {id: 2, name: 'Georgy George', message: 'Magsaing ka na', status: 'online'},
    {id: 3, name: 'Jean Joan John', message: 'Paabot nga ng host jan. Tapos pa bukas na ng tubig', status: 'away'},
    {id: 4, name: 'Excaliburrrr', message: 'Anong Ulam ma ?', status: 'online'},
]
</script>

<template>
    <div class="flex">
            <aside class="relative z-20 bg-white w-80 grow-0 shrink-0 ring-1 ring-black/5 shadow">
                <div class="flex flex-col p-4 gap-8">
                    <header class="flex flex-col gap-2">
                        <span class="text-2xl font-bold text-black">Chats</span>
                        <form class="relative group flex items-center">
                            <span class="absolute text-gray-500 left-2 group-focus-within:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </span>
                            <input 
                                type="text" 
                                class="block w-full rounded-lg text-sm px-2 pr-1 pl-8 bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/25" 
                                placeholder="Search Messages" 
                            />
                        </form>
                    </header>
                    <div class="flex flex-col">
                        <router-link to="/" class="py-3" v-for="user in users" :key="user.id">
                            <div class="flex gap-1 items-center">
                                <span class="shrink-0">
                                    <Avatar :status="user.status" size="md" />
                                </span>
                                <div class="flex flex-col overflow-x-hidden">
                                    <div class="text-sm font-bold">{{ user.name }}</div>
                                    <span class="text-xs text-gray-600 text-ellipsis whitespace-nowrap overflow-hidden">{{ user.message }}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </aside>
            <main class="flex-1 min-h-screen">
                <slot />
            </main>
            <aside class="relative z-20 bg-white w-72 grow-0 shrink-0 ring-1 ring-black/5 shadow">
                <div class="flex flex-col p-4 items-center gap-4">
                    <div class="flex flex-col items-center">
                        <Avatar status="none" size="lg" />
                        <span class="text-lg font-semibold">Harvincent Capino</span>
                    </div>
                    <div class="flex items-center gap-8">
                        <button class="flex flex-col gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-xs">Profile</span>
                        </button>
                        <button class="flex flex-col gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-xs">Mute</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
</template>