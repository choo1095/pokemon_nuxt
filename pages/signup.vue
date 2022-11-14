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
