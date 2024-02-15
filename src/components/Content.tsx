import LotusImage from "../assets/images/lotus.png"

const Content: React.FC = () => {
    return (
        <div>
            <h1 className="text-center primary-font font-bold text-3.5xl leading-snug text-blue-10x mt-15">Hi there,<br/>Happy to have you.</h1>
            <p className="text-center sub-font text-blueD-10x mt-5">I am a developer based in India.</p>
            <div><img src={LotusImage} alt="Lotus" className="w-45 h-45 mx-auto my-5" /></div>
            <div className="sub-font font-medium text-lg text-[#EEE] leading-none bg-BlueInk-8x py-6 text-center rounded-[20px] shadow-sh_Light max-w-80">Connect me</div>
        </div>
   );
}

export default Content