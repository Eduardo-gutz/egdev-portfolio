interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {

  return (
    <div
      className={`bg-secondary bg-opacity-20 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 flex-1 h-full`}
    >
        {children}
    </div>
  );
};

export default Card; 