<template>
    <div class="blue-meteor-bg pb-14 ">
        <div class="relative">
            <PokeballSemicircleBackground heightClass="h-[12rem]" />
            <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
                <h1 class="font-semibold text-5xl ">{{ isEditingProfile ? "EDIT PROFILE" : "PROFILE" }}</h1>
            </div>
            <div class="bg-weird-pikachu absolute bg-img-single w-[160px] h-[160px] -bottom-2 right-[50%]"></div>   
        </div>
        <div class="center">
            <form class="flex flex-col w-4/5 sm:w-1/2" @submit.prevent>
                <TextFormField 
                    :disabled="!isEditingProfile" 
                    labelTitle="Name" 
                    type="name" 
                    placeholder="eg: Muhammad Salleh bin Amran" 
                    v-model="selectedName"
                    :required="true" />

                <TextFormField 
                    :disabled="!isEditingProfile" 
                    labelTitle="Email address" 
                    type="email" 
                    placeholder="eg. salleh.amran@gmail.com" 
                    v-model="selectedEmail"
                    :required="true" />

                <RadioFormField 
                    :disabled="!isEditingProfile" 
                    labelTitle="Gender" 
                    v-model="selectedGender" 
                    :options="getGenderOptions"
                    :required="true"
                    name="gender" />

                <DropDownFormField
                    labelTitle="Nationality"
                    :disabled="!isEditingProfile"
                    v-model="selectedNationality"
                    :options="getNationalityOptions"
                    :required="true" />

                <CheckboxFormField 
                    :disabled="!isEditingProfile"
                    labelTitle="List of Hobbies"
                    v-model="selectedHobbies"
                    :options="getHobbyOptions" />
                
                <button v-if="!isEditingProfile" @click="onTapEditProfile" class="red-button self-center mt-20">Edit Profile</button>
                <button v-else @click="onTapSaveProfile" class="red-button self-center mt-20">Save Profile</button>

                <button v-if="!isEditingProfile" @click="onTapLogOut" class="white-button self-center mt-5">Log Out</button>
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
    name: 'Profile',
    data() {
        return {
            isEditingProfile: false,
            selectedName: "",
            selectedEmail: "",
            selectedGender: "",
            selectedNationality: "",
            selectedHobbies: [],
        }  
    },
    components: {
        PokeballSemicircleBackground,
        RedButton,
        TextFormField,
        RadioFormField,
        DropDownFormField,
        CheckboxFormField,
    },
    methods: {
        onTapLogOut() {
            this.$swal('Logged out!')
                .then((_) => {
                    this.$store.dispatch('user/logout')
                    this.$router.push({
                        path: '/'
                    })
                });
        },
        onTapSaveProfile() {
            this.$store.dispatch('user/login', {
                name: this.selectedName,
                email: this.selectedEmail,
                gender: this.selectedGender,
                nationality: this.selectedNationality,
                hobbies: this.selectedHobbies,
            });
            this.$swal('Your profile information has been saved!')
                .then((_) => {
                    this.isEditingProfile = !this.isEditingProfile;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
        },
        onTapEditProfile() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.isEditingProfile = !this.isEditingProfile;
        },
        onUpdateGender(value) {
            this.selectedGender = value
        },
        prefillFields() {
            let user = this.getCurrentUser;

            this.selectedName = user?.name ?? "";
            this.selectedEmail = user?.email ?? "";
            this.selectedGender = user?.gender ?? "";
            this.selectedNationality = user?.nationality ?? "";
            this.selectedHobbies = user?.hobbies ?? [];
        }
    },
    created() {
        this.prefillFields();
    },
    computed: {
        ...mapGetters({
            getCurrentUser: 'user/getCurrentUser',
            getNationalityOptions: 'constants/getNationalityOptions',
            getGenderOptions: 'constants/getGenderOptions',
            getHobbyOptions: 'constants/getHobbyOptions',
        }),
    }
}
</script>
