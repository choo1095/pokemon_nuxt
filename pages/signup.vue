<template>
    <div class="blue-meteor-bg pb-14 ">
        <div class="relative">
            <PokeballSemicircleBackground heightClass="h-[27rem]" />
            <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
                <h1 class="font-semibold text-5xl ">SIGN UP</h1>
                <p class="mt-9 text-black221F1E text-base">Already have an account? <button @click="onTapSignIn" class="text-blue1C5DAB">Login</button></p>
                <h1 class="mt-9 font-semibold text-black303030 text-2xl">WELCOME !!!!!!!!!!!!!!!!!</h1>
            </div>
            <div class="hidden sm:block bg-pikachu-wave absolute bg-img-single w-[139px] h-[125px] bottom-7 right-[25%]"></div>   
        </div>
        <div class="center">
            <form class="flex flex-col w-4/5 sm:w-1/2" @submit.prevent="onSubmitSignup">
                <label class="main-form-label" for="name">Name *</label>
                <input class="main-form-field" type="name" id="name" placeholder="eg: Muhammad Salleh bin Amran" v-model="name" required>

                <label class="main-form-label" for="name">Email address *</label>
                <input class="main-form-field" type="email" id="email" placeholder="eg.  salleh.amran@gmail.com" v-model="email" required>

                <label class="main-form-label" for="password">Password *</label>
                <input class="main-form-field" type="password" id="password" placeholder="At least eight characters" v-model="password" required>

                <label class="main-form-label" for="confirm-password">Confirm Password *</label>
                <input class="main-form-field" type="password" id="confirm-password" placeholder="At least eight characters" v-model="confirmPassword" required>

                <label class="main-form-label" for="gender">Gender *</label>
                <div class="flex flex-row mb-5" required>
                    <input type="radio" id="male" name="gender" value="male" v-model="gender">
                    <label class="main-form-radio-label" for="gender">Male</label>
                    <input type="radio" id="female" name="gender" value="female" v-model="gender">
                    <label class="main-form-radio-label" for="gender">Female</label>
                </div>
                
                <label class="main-form-label" for="nationality">Nationality *</label>
                <select class="main-form-select" id="nationality" v-model="nationality" required>
                    <option value="malaysian">Malaysian</option>
                    <option value="nonmalaysian">Non-malaysian</option>
                    <option value="alien">Alien</option>
                </select>

                <label class="main-form-label" for="hobby">List of Hobbies</label>
                <div class="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <input type="checkbox" v-model="hobbies" id="eating" name="eating" value="eating">
                        <label for="eating">Eating</label><br>
                        <input type="checkbox" v-model="hobbies" id="sleeping" name="sleeping" value="sleeping">
                        <label for="sleeping">Sleeping</label><br>
                        <input type="checkbox" v-model="hobbies" id="crying" name="crying" value="crying">
                        <label for="crying">Crying</label><br>
                        <input type="checkbox" v-model="hobbies" id="playing-games" name="playing-games" value="playing-games">
                        <label for="playing-games">Playing games</label><br>
                    </div>
                    <div>
                        <input type="checkbox" v-model="hobbies" id="biking" name="biking" value="biking">
                        <label for="biking">Biking</label><br>
                        <input type="checkbox" v-model="hobbies" id="watching-tv" name="watching-tv" value="watching-tv">
                        <label for="watching-tv">Watching TV</label><br>
                        <input type="checkbox" v-model="hobbies" id="listening-to-music" name="listening-to-music" value="listening-to-music">
                        <label for="listening-to-music">Listening to music</label><br>
                        <input type="checkbox" v-model="hobbies" id="no-hobby" name="no-hobby" value="no-hobby">
                        <label for="no-hobby">I don't have a hobby</label><br>
                    </div>
                </div>
                
                <input type="submit" class="red-button self-center mt-20" value="Sign Up">
            </form>
        </div>
        
    </div>
</template>

<script>
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue'
import RedButton from '@/components/reusable/RedButton.vue'

export default {
    name: 'SignUp',
    components: {
        PokeballSemicircleBackground,
        RedButton,
    },
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            nationality: "",
            hobbies: [],
        }
    },
    methods: {
        onTapSignIn() {
            this.$router.push({
                path: 'signin'
            })
        },
        onSubmitSignup() {
            console.log(`${this.name} || ${this.email} || ${this.password} || ${this.confirmPassword} || ${this.gender} || ${this.nationality} || ${this.hobbies} `)
        }
    }
}
</script>
