const Card = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return <div className={`hover:translate-y-[-5px] transition-all duration-300 flex flex-col justify-between border-1 border-gray-500 rounded-xl ${className??''}`}>{children}</div>;
};

const CardBody = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return <div className={`px-3 py-4 text-base min-h-[100px] ${className??''}`}>{children}</div>;
};

const CardTitle = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return <div className={`text-lg border-gray-500 font-bold p-3 border-b-1 ${className??''}`}>{children}</div>;
};

const CardFooter = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return <div className={`p-3 border-t-1 border-gray-500 ${className??''}`}>{children}</div>;
};

Card.Title = CardTitle;
Card.Footer = CardFooter;
Card.Body = CardBody;

export default Card;