const petArray = [
    {
        name: 'Lassie',
        breed: 'Rough Collie',
        color: 'Tricolor',
        owner: 'Rudd Weatherwax',
        isCheckedIn: 'No',
    },
    {
        name: 'Air Bud',
        breed: 'Golden Retriever',
        color: 'Golden',
        owner: 'Kevin di Cicco',
        isCheckedIn: '9/23/20',
    },
]

const pets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
        case 'TEST_PETS':
            return petArray;
        default:
            return state;
    }
}
  

  export default pets;
  