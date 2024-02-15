type skillProp = {
    skill: string
}   

const HznlCtn: React.FC<skillProp> = ({ skill }) => {
    return (
        <div className="text-sm sub-font leading-none px-4 py-3 bg-gray-300 rounded-full max-w-fit text-blueD-10x">
            <p>{skill}</p>
        </div>
    );
}

export default HznlCtn