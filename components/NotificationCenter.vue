<template>
    <div class="pl-6 lg:w-80">
        <div class="pt-6 pb-2">
            <h2 class="text-sm font-semibold">Notifications</h2>
        </div>
        <div>
            <ul class="divide-y divide-gray-200">
                <li class="py-4" v-for="(v, i) in this.notifications" v-bind:key="i">
                    <div class="flex space-x-3">
                        <!--<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>-->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 self-center text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="flex-1 space-y-1">
                            <div class="flex items-center justify-between">
                                <h3 class="text-sm font-medium">{{v.title}}</h3>
                                <p class="text-xs text-gray-500">{{v.time}}</p>
                            </div>
                            <p class="text-sm text-gray-500">{{v.message}}</p>
                        </div>
                    </div>
                </li>
                <!-- More items... -->
            </ul>
            <div class="py-4 text-sm border-t border-gray-200">
                <a href="#" class="text-blue-600 font-semibold hover:text-blue-900">View all activity <span aria-hidden="true">&rarr;</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        notifications: {
            type: Array
        }
    },
    computed: {

    },

    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {

    },
}
</script>

<style>

</style>