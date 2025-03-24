
function Student (gowno) {
    return (
        <div className="student">
            <p>Name: {gowno.name}</p>
            <p>Age: {gowno.age}</p>
            <p>Student: {gowno.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student