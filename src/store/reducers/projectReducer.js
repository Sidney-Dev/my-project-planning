const initState = {
    projects: [
        { id: '1', title: 'Walk the dog', content: 'walk the dog content'},
        { id: '2', title: 'Walk the cat', content: 'walk the dog content'},
        { id: '3', title: 'Take the trash', content: 'Take the trash content'},
    ]
}

const projectReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("created project", action.project)
            return state 
        case 'CREATE_PROJECT_ERROR':
            console.log("created project error", action.project)
            return state 
        default:
            return state
    }
    return state
}

export default projectReducer