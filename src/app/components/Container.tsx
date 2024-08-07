interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto xl:px-16 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
}
