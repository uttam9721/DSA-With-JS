
const Users=()=>{
    const {data,loading,error}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await fetch('https://jsonplaceholder.typicode.com/users')
            return res.json()
        }
    })

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>


    return(
        <div>
            <h1>Data...{data?.length}</h1>
        </div>
    )
}

export default Users;




const Users=()=>{
    const {data,loading,error}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
    const res=axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
        })

    return(
        <div>
            <h1>Hii</h1>
        </div>
    )

}
export default Users;