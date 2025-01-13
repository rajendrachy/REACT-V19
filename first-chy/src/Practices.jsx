// ---------------------Lac 11---------------------

export const Practices = () => {
    const students = [5, 6];
    console.log(Boolean(students.length));

    return (
        <div>
            {/* <p>{students.length && "No students found"}</p> */}
            {/* 1 st */}
            {/* <p>{students.length == 0 && "No students found"}</p> */}
            {/* 2 nd */}
            {/* <p>{!students.length && "No students found"}</p> */}
            {/* 3 rd */}

            <p>{Boolean(students.length) && "No students found"}</p>
            <p>Number of students: {students.length}</p>
        </div>
    )
}