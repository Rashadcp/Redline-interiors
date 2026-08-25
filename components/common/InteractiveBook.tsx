"use client";

import * as React from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

interface InteractiveBookProps {
  width?: number;
  height?: number;
  frontCover: string;
  backCover: string;
  innerPages?: string[];
  borderRadius?: number;
  shadow?: {
    color: string;
    opacity: number;
    blur: number;
    offsetX: number;
    offsetY: number;
    spread: number;
  };
  style?: React.CSSProperties;
}

export function InteractiveBook({
  width = 300,
  height = 460,
  frontCover,
  backCover,
  innerPages = [],
  borderRadius = 8,
  shadow = { color: "#000", opacity: 0.35, blur: 14, offsetX: 6, offsetY: 6, spread: 0 },
}: InteractiveBookProps) {
  const frontAndInner = [frontCover, ...innerPages].filter(Boolean);
  const allImages =
    frontAndInner.length % 2 !== 0
      ? [...frontAndInner, backCover]
      : [...frontAndInner, null, backCover];

  const leafPairs: any[] = [];
  for (let i = 0; i < allImages.length; i += 2) {
    leafPairs.push([allImages[i], allImages[i + 1]]);
  }
  const totalLeaves = leafPairs.length;

  const [flippedCount, setFlippedCount] = React.useState(0);
  const [isBookClosed, setIsBookClosed] = React.useState(true);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const flippedRef = React.useRef(0);
  const touchStartX = React.useRef<number | null>(null);

  // Animation controls for up to 15 leaves
  const controlsPool = Array.from({ length: 15 }, () => useAnimationControls());
  const bookContainerControls = useAnimationControls();

  // Handle responsive sizing dynamically
  const [dimensions, setDimensions] = React.useState({ width, height });

  React.useEffect(() => {
    const updateSize = () => {
      const screenW = window.innerWidth;
      if (screenW < 640) {
        // Leave 36px margin on mobile: spread width = 2 * singleWidth
        const availableSpread = Math.min(screenW - 40, 340);
        const singleW = Math.floor(availableSpread / 2); // e.g. 165px - 170px
        const singleH = Math.floor(singleW * 1.45); // e.g. 240px - 250px
        setDimensions({ width: singleW, height: singleH });
      } else if (screenW < 1024) {
        setDimensions({ width: 240, height: 350 });
      } else {
        setDimensions({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [width, height]);

  const effectiveWidth = dimensions.width;
  const effectiveHeight = dimensions.height;

  const getRgba = (color: string, alpha: number) => {
    if (!color) return `rgba(0,0,0,${alpha})`;
    const hex = color.replace("#", "");
    const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
    const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
    const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const shadowCol = getRgba(shadow.color, shadow.opacity);
  const closedBookShadow = `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadowCol}`;

  // Flip Forward (Next Page)
  const flipNext = async () => {
    setHasInteracted(true);
    if (flippedRef.current === 0) {
      setIsBookClosed(false);
      bookContainerControls.start({
        x: effectiveWidth / 2,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }

    if (flippedRef.current < totalLeaves) {
      const indexToFlip = flippedRef.current;
      flippedRef.current = indexToFlip + 1;
      setFlippedCount(flippedRef.current);
      await controlsPool[indexToFlip].start({
        rotateY: -180,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      });
    } else {
      // Reached the end -> Reset back to front cover
      resetBook();
    }
  };

  // Flip Backward (Previous Page)
  const flipPrev = async () => {
    setHasInteracted(true);
    if (flippedRef.current > 0) {
      const indexToUnflip = flippedRef.current - 1;
      flippedRef.current = indexToUnflip;
      setFlippedCount(flippedRef.current);

      if (flippedRef.current === 0) {
        bookContainerControls.start({
          x: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        });
        setIsBookClosed(true);
      }

      await controlsPool[indexToUnflip].start({
        rotateY: 0,
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
      });
    }
  };

  // Reset Book to Front Cover
  const resetBook = async () => {
    setHasInteracted(true);
    bookContainerControls.start({ x: 0, transition: { duration: 0.8, ease: "easeInOut" } });
    for (let i = totalLeaves - 1; i >= 0; i--) {
      controlsPool[i].start({ rotateY: 0, transition: { duration: 0.45, ease: "easeInOut" } });
      await new Promise((r) => setTimeout(r, 60));
    }
    flippedRef.current = 0;
    setFlippedCount(0);
    setIsBookClosed(true);
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 40) {
      // Swiped Left -> Next page
      flipNext();
    } else if (diffX < -40) {
      // Swiped Right -> Previous page
      flipPrev();
    }
    touchStartX.current = null;
  };

  const currentPageLabel =
    flippedCount === 0
      ? "Front Cover"
      : flippedCount >= totalLeaves
      ? "Back Cover"
      : `Spread ${flippedCount} of ${totalLeaves - 1}`;

  return (
    <div className="w-full flex flex-col items-center select-none py-2">
      {/* 3D Book Container */}
      <div
        className="w-full flex justify-center items-center relative"
        style={{
          height: effectiveHeight + 40,
          perspective: 2500,
          cursor: "pointer",
        }}
        onClick={flipNext}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          animate={bookContainerControls}
          style={{
            width: effectiveWidth,
            height: effectiveHeight,
            position: "relative",
            transformStyle: "preserve-3d",
            boxShadow: isBookClosed ? closedBookShadow : "0px 0px 0px transparent",
          }}
        >
          {leafPairs.map(([frontSrc, backSrc], index) => {
            const isFlipped = index < flippedCount;
            const isFlipping = index === flippedCount - 1;
            const zOffset = isFlipped ? index * 0.4 : (totalLeaves - index) * 0.4;
            const zIndex = isFlipping ? 100 : isFlipped ? index : totalLeaves - index;

            return (
              <motion.div
                key={index}
                animate={controlsPool[index]}
                initial={{ rotateY: 0 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  zIndex: zIndex,
                  transform: `translateZ(${zOffset}px)`,
                  willChange: "transform",
                }}
              >
                {/* Front Face of Leaf */}
                <div
                  style={{
                    ...faceStyle,
                    borderRadius: `0px ${borderRadius}px ${borderRadius}px 0px`,
                  }}
                >
                  {frontSrc && (
                    <img
                      src={frontSrc}
                      style={imgStyle}
                      alt={`Portfolio page ${index * 2 + 1}`}
                      loading="lazy"
                    />
                  )}
                  <div style={spineGradient} />

                  {/* Corner Peel Callout on Front Cover only */}
                  {index === 0 && !hasInteracted && flippedCount === 0 && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[0.62rem] uppercase font-bold tracking-widest text-[#c52a22] shadow-sm rounded-sm flex items-center gap-1.5 animate-pulse">
                      <Hand size={12} />
                      <span>Tap to Open</span>
                    </div>
                  )}
                </div>

                {/* Back Face of Leaf */}
                <div
                  style={{
                    ...faceStyle,
                    transform: "rotateY(180deg) translateZ(0.01px)",
                    borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
                  }}
                >
                  {backSrc && (
                    <img
                      src={backSrc}
                      style={imgStyle}
                      alt={`Portfolio page ${index * 2 + 2}`}
                      loading="lazy"
                    />
                  )}
                  <div
                    style={{
                      ...spineGradient,
                      left: "auto",
                      right: 0,
                      transform: "scaleX(-1)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

const faceStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  backgroundColor: "#242321",
  overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const spineGradient: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "12%",
  background: "linear-gradient(to right, rgba(0,0,0,0.15), transparent)",
  pointerEvents: "none",
};
