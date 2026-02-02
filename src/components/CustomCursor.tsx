import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHoveringLink, setIsHoveringLink] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        // Check if hovering over clickable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLink = target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            setIsHoveringLink(!!isLink);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] hidden lg:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* Main Cursor Dot */}
            <motion.div
                className="bg-primary rounded-full"
                animate={{
                    width: isHoveringLink ? 32 : 12,
                    height: isHoveringLink ? 32 : 12,
                    opacity: isHoveringLink ? 0.3 : 0.8,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* Inner Dot for precision */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />

            {/* Glowing Ring */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-primary rounded-full box-border"
                animate={{
                    width: isClicked ? 16 : isHoveringLink ? 48 : 32,
                    height: isClicked ? 16 : isHoveringLink ? 48 : 32,
                    opacity: isClicked ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            />
        </motion.div>
    );
};

export default CustomCursor;
