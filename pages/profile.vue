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
                    :type="name" 
                    placeholder="eg: Muhammad Salleh bin Amran" 
                    v-model="selectedName"
                    :required="true" />

                <TextFormField 
                    :disabled="!isEditingProfile" 
                    labelTitle="Email address" 
                    :type="email" 
                    placeholder="eg. salleh.amran@gmail.com" 
                    v-model="selectedEmail"
                    :required="true" />

                <RadioFormField 
                    :disabled="!isEditingProfile" 
                    labelTitle="Gender" 
                    v-model="selectedGender" 
                    :options="getGenderOptions"
                    :required="true" />

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

                
            <!-- <form class="flex flex-col w-4/5 sm:w-1/2" @submit.prevent>
                <label class="main-form-label" for="name">Name</label>
                <input class="main-form-field-disabled main-form-margin-bottom" type="name" id="name" placeholder="eg: Muhammad Salleh bin Amran" v-model="name" :disabled="!isEditingProfile">

                <label class="main-form-label" for="name">Email address</label>
                <input class="main-form-field-disabled main-form-margin-bottom" type="email" id="email" placeholder="eg.  salleh.amran@gmail.com" v-model="email" disabled>

                <label class="main-form-label" for="gender">Gender</label>
                <div class="flex flex-row main-form-margin-bottom">
                    <input type="radio" id="male" name="gender" value="male" v-model="gender" disabled>
                    <label class="main-form-radio-label" for="gender">Male</label>
                    <input type="radio" id="female" name="gender" value="female" v-model="gender" disabled>
                    <label class="main-form-radio-label" for="gender">Female</label>
                </div>
                
                <label class="main-form-label" for="nationality">Nationality</label>
                <select class="main-form-select-disabled main-form-margin-bottom" id="nationality" v-model="nationality" disabled>
                    <option value="malaysian">Malaysian</option>
                    <option value="nonmalaysian">Non-malaysian</option>
                    <option value="alien">Alien</option>
                </select>

                <label class="main-form-label" for="hobby">List of Hobbies</label>
                <div class="grid grid-cols-1 sm:grid-cols-2 main-form-margin-bottom">
                    <div>
                        <input type="checkbox" v-model="hobbies" id="eating" name="eating" value="eating" disabled>
                        <label for="eating">Eating</label><br>
                        <input type="checkbox" v-model="hobbies" id="sleeping" name="sleeping" value="sleeping" disabled>
                        <label for="sleeping">Sleeping</label><br>
                        <input type="checkbox" v-model="hobbies" id="crying" name="crying" value="crying" disabled>
                        <label for="crying">Crying</label><br>
                        <input type="checkbox" v-model="hobbies" id="playing-games" name="playing-games" value="playing-games" disabled>
                        <label for="playing-games">Playing games</label><br>
                    </div>
                    <div>
                        <input type="checkbox" v-model="hobbies" id="biking" name="biking" value="biking" disabled>
                        <label for="biking">Biking</label><br>
                        <input type="checkbox" v-model="hobbies" id="watching-tv" name="watching-tv" value="watching-tv" disabled>
                        <label for="watching-tv">Watching TV</label><br>
                        <input type="checkbox" v-model="hobbies" id="listening-to-music" name="listening-to-music" value="listening-to-music" disabled>
                        <label for="listening-to-music">Listening to music</label><br>
                        <input type="checkbox" v-model="hobbies" id="no-hobby" name="no-hobby" value="no-hobby" disabled>
                        <label for="no-hobby">I don't have a hobby</label><br>
                    </div>
                </div> --> 
                
                <button @click="onTapEditProfile" class="red-button self-center mt-20">Edit Profile</button>

                <button @click="onTapLogOut" class="white-button self-center mt-5">Log Out</button>
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
