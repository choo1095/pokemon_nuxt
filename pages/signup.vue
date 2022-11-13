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
                <TextFormField 
                    labelTitle="Name *" 
                    type="name" 
                    placeholder="eg: Muhammad Salleh bin Amran" 
                    v-model="name" 
                    :required="true" />

                <TextFormField 
                    labelTitle="Email address *" 
                    type="email" 
                    placeholder="eg. salleh.amran@gmail.com" 
                    v-model="email" 
                    :required="true" />

                <TextFormField 
                    labelTitle="Password *" 
                    type="password" 
                    placeholder="At least eight characters" 
                    v-model="password" 
                    :required="true"
                    errorMessage="Password not long enough!"
                    :showErrorMessage="!isPasswordMinLength" />

                <TextFormField 
                    labelTitle="Confirm Password *" 
                    type="password" 
                    placeholder="At least eight characters" 
                    v-model="confirmPassword" 
                    :required="true" 
                    errorMessage="Password does not match!"
                    :showErrorMessage="!isBothPasswordsMatch"/>

                <RadioFormField 
                    labelTitle="Gender *" 
                    v-model="gender" 
                    :options="getGenderOptions"
                    :required="true" 
                    name="gender" />

                <DropDownFormField
                    labelTitle="Nationality *"
                    v-model="nationality"
                    :options="getNationalityOptions"
                    :required="true" />

                <CheckboxFormField 
                    labelTitle="List of Hobbies"
                    v-model="hobbies"
                    :options="getHobbyOptions" />
                <!-- <label class="main-form-label" for="name">Name *</label>
                <input class="main-form-field main-form-margin-bottom" type="name" id="name" placeholder="eg: Muhammad Salleh bin Amran" v-model="name" required>

                <label class="main-form-label" for="name">Email address *</label>
                <input class="main-form-field main-form-margin-bottom" type="email" id="email" placeholder="eg.  salleh.amran@gmail.com" v-model="email" required>

                <div class="flex flex-col main-form-margin-bottom">
                    <label class="main-form-label" for="password">Password *</label>
                    <input class="main-form-field" type="password" id="password" placeholder="At least eight characters" v-model="password" required>
                    <span v-if="!isPasswordMinLength" class="text-red-500 ">Password not long enough!</span>
                </div>
                
                <div class="flex flex-col main-form-margin-bottom">
                    <label class="main-form-label" for="confirm-password">Confirm Password *</label>
                    <input class="main-form-field" type="password" id="confirm-password" placeholder="At least eight characters" v-model="confirmPassword" required>
                    <span v-if="!isBothPasswordsMatch" class="text-red-500 main-form-margin-bottom">Password does not match!</span>
                </div> -->

                <!-- <label class="main-form-label" for="gender">Gender *</label>
                <div class="flex flex-row main-form-margin-bottom" required>
                    <input type="radio" id="male" name="gender" value="male" v-model="gender">
                    <label class="main-form-radio-label" for="gender">Male</label>
                    <input type="radio" id="female" name="gender" value="female" v-model="gender">
                    <label class="main-form-radio-label" for="gender">Female</label>
                </div> -->
                
                <!-- <label class="main-form-label" for="nationality">Nationality *</label>
                <select class="main-form-select main-form-margin-bottom" id="nationality" v-model="nationality" required>
                    <option value="malaysian">Malaysian</option>
                    <option value="nonmalaysian">Non-malaysian</option>
                    <option value="alien">Alien</option>
                </select> -->

                <!-- <label class="main-form-label" for="hobby">List of Hobbies</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 main-form-margin-bottom">
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
                 -->
                <input type="submit" 
                    :disabled="!isSignUpEnabled" 
                    :class="['self-center mt-20', isSignUpEnabled ? 'red-button' : 'red-button-disabled']" value="Sign Up">
            </form>
        </div>
        
    </div>
</template>

<script>
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue'
import RedButton from '@/components/reusable/RedButton.vue'
import TextFormField from '@/components/reusable/TextFormField.vue'
import RadioFormField from '@/components/reusable/RadioFormField.vue'
import DropDownFormField from '@/components/reusable/DropDownFormField.vue'
import CheckboxFormField from '@/components/reusable/CheckboxFormField.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'SignUp',
    components: {
        PokeballSemicircleBackground,
        RedButton,
        TextFormField,
        RadioFormField,
        DropDownFormField,
        CheckboxFormField
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
            this.$store.dispatch('user/login', {
                name: this.name,
                email: this.email,
                gender: this.gender,
                nationality: this.nationality,
                hobbies: this.hobbies,
            })

            this.$swal('Successfully signed up!')
                .then((_) => {
                    this.$router.push({
                        path: '/'
                    })
                });
        }
    },
    computed: {
        isSignUpEnabled() {
            let conditions = [
                this.name != "",
                this.email != "",
                this.isPasswordMinLength,
                this.isBothPasswordsMatch,
                this.gender != "",
                this.nationality != "",
            ]

            return conditions.every(element => element === true);
        },
        isPasswordMinLength() {
            return this.password.length >= 8;
        },
        isBothPasswordsMatch() {
            return this.password == this.confirmPassword;
        },
        ...mapGetters({
            getGenderOptions: 'constants/getGenderOptions',
            getNationalityOptions: 'constants/getNationalityOptions',
            getHobbyOptions: 'constants/getHobbyOptions'
        }),
    }
}
</script>
