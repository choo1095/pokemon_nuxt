export const state = () => ({
    genderOptions: [
        {
            id: "male",
            title: "Male",
        },
        {
            id: "female",
            title: "Female",
        },
    ],
    nationalityOptions: [
        {
            id: "malaysian",
            title: "Malaysian",
        },
        {
            id: "nonmalaysian",
            title: "Non-Malaysian"
        },
        {
            id: "bogosbinted",
            title: "Alien",
        }
    ],
    hobbyOptions: [
        {
            id: "eating",
            title: "Eating",
        },
        {
            id: "sleeping",
            title: "Sleeping",
        },
        {
            id: "crying",
            title: "Crying",
        },
        {
            id: "playing-games",
            title: "Playing games"
        },
        {
            id: "biking",
            title: "Biking",
        },
        {
            id: "watching-tv",
            title: "Watching TV"
        },
        {
            id: "listening-to-music",
            title: "Listening to music"
        },
        {
            id: "no-hobby",
            title: "I don't have a hobby"
        }
    ]
})

export const getters = {
    getGenderOptions: (state) => state.genderOptions,
    getNationalityOptions: (state) => state.nationalityOptions,
    getHobbyOptions: (state) => state.hobbyOptions,
}
