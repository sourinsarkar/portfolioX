import { IconoirProvider } from "iconoir-react/solid";

type ReactNode = string| number| boolean| null| undefined;

const HBIconProp: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IconoirProvider
      iconProps={{
        color: "#27282",
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
