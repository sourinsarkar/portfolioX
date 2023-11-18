import { IconoirProvider } from "iconoir-react/solid";

type ReactNode = string| number| boolean| null| undefined| ReactElement| ReactFragment| ReactPortal;

const HBIconProp: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IconoirProvider
      iconProps={{
        color: "#27282C",
        strokeWidth: 2,
        width: "1.5em",
        height: "1.5em",
      }}
    >
      {children}
    </IconoirProvider>
  );
};

export default HBIconProp;
