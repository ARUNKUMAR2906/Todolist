const Card = (props)=>{
    return(
        <div style={{backgroundColor:props.bg}} className="px-10 py-5 rounded-md text-center flex-grow font-mono">
            <h1 className="text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}
export default Card;