import { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode;
    className?: string;
}

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => {
    return (
        <div className={`flex items-center justify-center gap-6 ${className}`}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />

            {/* Left vertical decoration */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-px h-4 bg-border" />
                <div className="w-2 h-2 rotate-45 bg-border" />
                <div className="w-px h-4 bg-border" />
            </div>

            {children}

            {/* Right vertical decoration */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-px h-4 bg-border" />
                <div className="w-2 h-2 rotate-45 bg-border" />
                <div className="w-px h-4 bg-border" />
            </div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
        </div>
    );
};

export default SectionHeading;
