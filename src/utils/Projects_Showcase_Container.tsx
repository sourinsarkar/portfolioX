import { RiGalleryFill } from "@remixicon/react";
import { SmHznlCtn } from "./Horizontal_Small_Container";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface PrjShowCtnProp {
    title: string;
    description: string;
    tags ?: string[];
}

const PrjShowCtn: React.FC<PrjShowCtnProp> = ({title, description, tags = []}) => {
    return (
        <div>
            <div>
                <div>
                    <h3 className="primary-font font-bold text-lg tracking-tight leading-snug text-blue-10x">{title}</h3>
                </div>
                <div>
                    <p className="sub-font text-blueD-10x text-sm">{description}</p>
                </div>
                <div>
                    {tags.map((tag, index) => <SmHznlCtn key={index} content={tag} />)}
                </div>
                <div>
                    <h4 className="text-sm text-blue-10x">Status: <span className="text-green-8x">LIVE</span></h4>
                </div>
                <div>
                    <div className="flex space-x-3">
                        <h4 className="text-sm sub-font leading-none px-3.5 py-2 bg-blue-10x rounded-full max-w-fit text-[#EEE] space-x-1 flex items-center">Take me to Github <span><ChevronRightIcon className="w-5 h-6" /></span></h4>
                        <RiGalleryFill size={28} className="text-blueInk-8x" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrjShowCtn;
