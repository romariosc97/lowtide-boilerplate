<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="login()" class="space-y-6" action="#" method="POST">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="Workflow" />
                        <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
                            LOWTIDE
                        </h2>
                    </div>
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <div class="mt-1">
                            <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <div class="mt-1">
                            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <button :disabled="btnLoading" type="submit" :class="(btnLoading ? 'cursor-not-allowed ' : '') + 'disabled:opacity-50 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'">
                            <div v-if="btnLoading" class="loader animate-spin"></div>
                            <span v-else>
                                Login with credentials
                            </span>
                        </button>
                        <a href="http://localhost:3000/api/auth/oauth" type="submit" :class="(btnLoading ? 'cursor-not-allowed ' : '') + 'disabled:opacity-50 mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'">
                            Login with Salesforce
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    computed: {

    },

    data() {
        return {
            username: '',
            password: '',
            btnLoading: false
        }
    },
    methods: {
        async login() {
            this.btnLoading = true;
            try {
                await this.$axios.post('http://localhost:3000/api/auth/login', {
                    username: this.username,
                    password: this.password
                }, {withCredentials: true});
                this.btnLoading = false;                
                this.$router.push('/dashboard');
            } catch (error) {
                console.error(error);   
            }
        }
    },
    mounted: function () {
        
    },
}
</script>

<style>
    .loader {
        border: 3.5px solid #f3f3f3;
        border-top: 3.5px solid #3b82f6;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }
</style>