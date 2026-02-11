interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`py-10 ${className}`}>
      <div className="container mx-auto max-w-5xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
