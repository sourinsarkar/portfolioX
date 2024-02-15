type contentProp = {
    content?: string | number
}   

const HznlCtn: React.FC<contentProp> = ({ content }) => {
    return (
        <div className="text-sm sub-font leading-none px-4 py-3 bg-blueL-1x rounded-full max-w-fit text-blueD-10x">
            <p>{content}</p>
        </div>
    );
}

const SmHznlCtn: React.FC<contentProp> = ({ content }) => {
    return (
        <div className="text-xs sub-font leading-none px-3 py-2 bg-blueL-1x rounded-full max-w-fit text-blueD-10x">
            <p>{content}</p>
        </div>
    );
}

export { HznlCtn, SmHznlCtn }