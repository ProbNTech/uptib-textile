"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  VideoHTMLAttributes,
} from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
  poster?: string;
  rootMargin?: string;
  playbackRate?: number;
  fadeIn?: boolean;
};

export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(function LazyVideo(
  {
    src,
    poster,
    rootMargin = "300px 0px",
    playbackRate = 1,
    fadeIn = true,
    className = "",
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    preload = "metadata",
    style,
    onCanPlay,
    ...rest
  },
  externalRef
) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useImperativeHandle(externalRef, () => videoRef.current as HTMLVideoElement);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const v = videoRef.current;
    if (v && playbackRate !== 1) v.playbackRate = playbackRate;
  }, [playbackRate, inView]);

  const opacityStyle =
    fadeIn && !ready
      ? { opacity: 0 }
      : fadeIn
      ? { opacity: 1, transition: "opacity 600ms ease-out" }
      : undefined;

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: style?.position ?? "absolute",
        inset: style?.inset ?? 0,
        backgroundImage: poster ? `url(${poster})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    >
      {inView && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={poster}
          onCanPlay={(e) => {
            setReady(true);
            onCanPlay?.(e);
          }}
          className="absolute inset-0 w-full h-full object-cover"
          style={opacityStyle}
          {...rest}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
});
