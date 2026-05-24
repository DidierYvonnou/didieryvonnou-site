type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-7xl px-8 md:px-16 ${className}`}>
      {children}
    </div>
  );
}