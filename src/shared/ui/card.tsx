const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl border-1 border-gray-500 transition-all duration-300 hover:translate-y-[-5px] ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`min-h-[100px] px-3 py-4 text-base ${className ?? ""}`}>
      {children}
    </div>
  );
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border-b-1 border-gray-500 p-3 text-lg font-bold ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

const CardFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`border-t-1 border-gray-500 p-3 ${className ?? ""}`}>
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Footer = CardFooter;
Card.Body = CardBody;

export default Card;
