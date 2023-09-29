function Skill(props) {
    return (
        <div>
            <span className={`${props.color} ${props.bg} w-40 h-10 f-center font-semibold rounded-lg hover:brightness-105`}>
                {props.name} {props.emoji}
            </span>
        </div>
    )
}

export default Skill