import { RiGithubFill } from "@remixicon/react";
import { SmHznlCtn } from "./Horizontal_Small_Container";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface PrjShowCtnProp {
    title: string;
    description: string;
    siteStatus?: string;
    siteLink?: string;
    codeBaseLink?: string;
    tags ?: string[];
}

const PrjShowCtn: React.FC<PrjShowCtnProp> = ({title, description, siteStatus, siteLink, codeBaseLink, tags = []}) => {
    return (
        <div className="p-5 pb-8 shadow-sh_Light rounded-2xl relative">
            <div className="space-y-4">
                <div>
                    <h3 className="primary-font font-bold text-lg tracking-tight leading-snug text-blue-10x">{title}</h3>
                </div>
                <div>
                    <p className="sub-font text-blueD-10x text-sm">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => <SmHznlCtn key={index} content={tag} />)}
                </div>
                <div>
                    <h4 className="sub-font font-medium text-sm text-blue-10x">Status: <span className="text-green-8x">{siteStatus === 'Live' ? 'LIVE' : 'Under Development'}</span></h4>
                </div>
                <div>
                    <a href={siteLink}>
                        <div className="flex items-center space-x-3">
                            <h4 className="text-sm sub-font leading-none px-3 py-1.5 bg-blueInk-8x rounded-full max-w-fit text-[#EEE] space-x-1 flex items-center">Take me there<span><ChevronRightIcon className="w-5 h-6" /></span></h4>
                            <a href={codeBaseLink}><RiGithubFill size={28} className="text-blue-10x" /></a>
                        </div>
                    </a>
                </div>
            </div>
            <div className="absolute bg-blueInk-8x h-4 bottom-0 left-0 right-0 rounded-b-2xl"></div>
        </div>
    );
}

export default PrjShowCtn;
