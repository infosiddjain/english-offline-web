import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  hindi: string;
  intro: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, hindi, intro }: PageHeaderProps) {
  return (
    <div className="max-w-3xl space-y-3 mb-10">
      <p className="text-xs font-bold uppercase tracking-wider text-bronze-dark">{eyebrow}</p>
      <h1 className="font-serif text-[2rem] leading-tight sm:text-5xl font-semibold tracking-tight text-walnut-deep">{title}</h1>
      <p className="font-hindi text-lg sm:text-xl text-bronze-dark font-semibold">{hindi}</p>
      <p className="text-walnut leading-relaxed">{intro}</p>
    </div>
  );
}
