import { IconoirProvider } from "iconoir-react/solid";

type ReactNode = string| number| boolean| null| undefined| ReactElement| ReactFragment| ReactPortal;

const HBIconProp: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IconoirProvider
      iconProps={{
        color: "#000",
        strokeWidth: 2,
        width: "0.9em",
        height: "0.9em",
      }}
    >
      {children}
    </IconoirProvider>
  );
};

export default HBIconProp;
