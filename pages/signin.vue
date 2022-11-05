<template>
    <div class="blue-meteor-bg pb-24 ">
        <div class="relative">
            <PokeballSemicircleBackground heightClass="h-[27rem]" />
            <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
                <h1 class="font-semibold text-5xl ">SIGN IN</h1>
                <p class="mt-9 text-black221F1E text-base">Don't have an account? <button @click="onTapSignUp" class="text-blue1C5DAB">Sign Up</button></p>
                <h1 class="mt-9 font-semibold text-black303030 text-2xl">WELCOME BACK !!!!!!!!!!!!!!!!!</h1>
            </div>
            <div class="hidden lg:block bg-pikachu-teehee absolute bg-img-single w-[212px] h-[190px] bottom-12 left-[12%]"></div>   
        </div>
        <div class="relative center">
            <form class="flex flex-col w-4/5 sm:w-1/2" @submit.prevent="onSubmitSignin">
                <label class="main-form-label" for="name">Email address *</label>
                <input class="main-form-field" type="email" id="email" placeholder="eg.  salleh.amran@gmail.com" v-model="email" required>

                <label class="main-form-label" for="password">Password *</label>
                <input class="main-form-field" type="password" id="password" placeholder="At least eight characters" v-model="password" required>
                
                <input type="submit" class="red-button self-center mt-20" value="Sign In">
            </form>
            <div class="hidden md:block bg-charmander-finger-guns absolute bg-img-single w-[348px] h-[231px] -bottom-24 right-0"></div>   
        </div>
    </div>
</template>

<script>
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue'

export default {
    name: 'SignIn',
    components: {
        PokeballSemicircleBackground,
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        onSubmitSignin() {
            alert('sign in ');
        },
        onTapSignUp() {
            this.$router.push({
                path: 'signup'
            })
        }
    }
}
</script>