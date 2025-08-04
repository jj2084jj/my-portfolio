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
        isMargin && "m-auto max-w-[1080px] px-4"
      } w-full`}
    >
      {title && (
        <div className="mb-4 border-b border-gray-200">
          <h2 className="text-3xl leading-[2] font-semibold">#{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
