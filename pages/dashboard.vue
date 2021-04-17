<template>

    <div class="relative min-h-screen flex flex-col">
        <div class="flex-grow w-full mx-auto xl:px-8 lg:flex">
            <div class="flex-1 min-w-0 bg-white xl:flex">
                <!-- Account profile -->
                <div class="xl:flex-shrink-0 xl:w-72 xl:border-r xl:border-gray-200 bg-white">
                    <div class="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                        <div class="flex items-center justify-between">
                            <div class="flex-1 space-y-12">
                                <div class="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                                    <!-- Profile -->
                                    <div class="flex items-center space-x-3">
                                        <div class="flex-shrink-0 h-12 w-12">
                                            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=Tt6LMluVtn&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="">
                                        </div>
                                        <div class="space-y-1">
                                            <div class="text-sm font-medium text-gray-900">{{ session.salesforce.user.name }}</div>
                                            <a :href="session.salesforce.auth.instanceUrl" class="group flex items-center space-x-1.5">
                                                <!--<SalesforceIcon />-->
                                                <span class="text-sm text-gray-500 group-hover:text-gray-900 font-medium">{{ session.salesforce.user.username }}</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex flex-col sm:flex-row xl:flex-col">

                                        <!--<Dropdown />-->
                                        <Select />

                                    </div>
                                </div>
                                <!-- Step by step -->
                                <div>
                                    <Steps />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projects List -->
                <div class="bg-white lg:min-w-0 lg:flex-1">
                    <div class="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                        <div class="flex items-center">
                            <h1 class="flex-1 text-lg font-medium">
                                {{this.action}}
                            </h1>
                            <div class="relative">
                                
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div v-show="this.action==='Welcome!'">
                            Welcome!
                        </div>
                        <Deploy v-show="this.action==='Deploy'" />
                        <Timeshift v-show="this.action==='Timeshift'" />
                        <DiscoveryData v-show="this.action==='Einstein Discovery Data'" />
                    </div>
                </div>
            </div>
            <!-- Activity feed -->
            <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                <div class="px-6 lg:w-80">
                    <div class="pt-6 pb-2">
                        <h2 class="text-sm font-semibold">Notifications</h2>
                    </div>
                    <div>
                        <ul class="divide-y divide-gray-200">
                            <li class="py-4">
                                <div class="flex space-x-3">
                                    <!--<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>-->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div class="flex-1 space-y-1">
                                        <div class="flex items-center justify-between">
                                            <h3 class="text-sm font-medium">Timeshift</h3>
                                            <p class="text-sm text-gray-500">1h</p>
                                        </div>
                                        <p class="text-sm text-gray-500">Your job has finished.</p>
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
            </div>
        </div>
    </div>
        
</template>

<script>
export default {
    async asyncData({ $axios, redirect }) {
        try {
            const response = await $axios.get('http://localhost:3000/api/auth/session', {withCredentials: true});
            const session = response.data;
            if('salesforce' in session){
                
            }else{
                redirect('/login');
            }
            return { session }
        } catch (e) {
            redirect('/login');
        }
    },
    computed: {
        action () {
            return this.$store.state.action;
        }
    },

    data() {
        return {
            
        }
    },
    methods: {
        async getSession() {
            try {
                const response = await this.$axios.get('http://localhost:3000/api/auth/session', {withCredentials: true});              
                console.log(response.data);
            } catch (error) {
                console.error(error);   
            }
        }
    },
    mounted: function () {
        //this.getSession();
    },
}
</script>

<style>

</style>