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
})

export const getters = {
    getGenderOptions: (state) => state.genderOptions,
}
