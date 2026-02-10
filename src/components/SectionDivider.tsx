interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`py-8 ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="h-px bg-border"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
