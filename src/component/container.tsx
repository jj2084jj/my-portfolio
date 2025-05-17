import React from "react";

export default function SectionContainer({
  children,
  className,
  isMargin,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  isMargin?: boolean;
  title?: string;
}) {
  return (
    <section
      className={`${className ?? ""} ${
        isMargin && "max-w-[1080px] m-auto px-4"
      } w-full`}
    >
      {title && (
        <div className="border-b border-gray-200 mb-4">
          <h2 className="leading-[2] font-semibold text-3xl">#{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
