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

export default HznlCtn