function ButtonTask(props) {
    return(
        <button className={`bg-slate-700 p-2 rounded-md text-white ${props.person}`} {...props}> {props.children}</button>
    )
}

export default ButtonTask