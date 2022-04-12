function renameMutable(students, oldName, newName) {
    const foundStudent = students.find(student => student.name === oldName)

    if (foundStudent) {
        foundStudent.name = newName
    }

    return students
}

function renameImmutable(students, oldName, newName) {
    return students.map(student => {
        if (student.name === oldName) {
            return { ...student, name: newName }
        }
        return student
    })
}

const aStudent = {
    name: 'Raider',
    id: 'student#1',
}

const students = [
    aStudent,
    {
        name: 'Gwen',
        id: 'student#2',
    },
    {
        name: 'Lucy',
        id: 'student#3',
    },
]

console.log(students)

const anotherStudentList = renameImmutable(students, "Raider", "Twix")
console.log(anotherStudentList)

console.log(students)
