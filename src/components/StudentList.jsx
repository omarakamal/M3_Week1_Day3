function StudentList() {
    const names = ["Shengwei", "Henrique", "Secil", "Phil"]

    return (
        <div>
            {names.map((value,index) => {
                //key should be unique
                //key is used to keep track of which element is currently rendered by react
                return <p key={index}>{index} {value}</p>
            })}
        </div>
    )
}
export default StudentList