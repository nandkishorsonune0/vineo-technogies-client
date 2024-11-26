// static getDerivedStateFromError(){
//     return{hasError:true}

// if(this.state.hasError){
//     return <h1>Something Went Wrong</h1>
// }
// return this.props.children
// }


function itemList ({Items}){
return( <ul>
    {items.map((Items)=>(
        <li key= {item.id}>{item.name}</li>
    ))}

</ul>)
   

}