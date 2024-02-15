import HznlCtn from "./Horizontal_Small_Container";

const PrjShowCtn: React.FC<{thing1?: string, thing2?: string}> = ({thing1, thing2}) => {
    return (
        <div>
            <div>
                <h3 className="primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x">Things<br />I have built</h3>
                <p className="sub-font text-blueD-10x">These projects have taken days to complete. Don’t just view code but use and experience them.</p>
                <HznlCtn content={thing1} />
                <HznlCtn content={thing2} />
            </div>
        </div>
    );
}

export default PrjShowCtn;
