interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative h-px">
          {/* Mesh gradient glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
          
          {/* Center glow orb */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-xl"></div>
              {/* Middle glow */}
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-md"></div>
              {/* Core dot */}
              <div className="relative w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_hsl(175_85%_50%/0.8)]"></div>
            </div>
          </div>
          
          {/* Side gradient lines */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent to-primary/20 blur-sm"></div>
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-transparent to-primary/20 blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
