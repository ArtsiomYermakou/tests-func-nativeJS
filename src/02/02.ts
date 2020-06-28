type localCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: localCityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student:StudentType = {
    id: 1,
    name: "Artem",
    age: 21,
    isActive: true,
    address: {
        streetTitle: "Sviridova",
        city:{
            title: "Gomel",
            countryTitle: "Belarus",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "JS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)


