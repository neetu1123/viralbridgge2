'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/src/components/ui/AppIcon';

const feedItems = [
  { icon: '🎬', text: 'Reel gained 20K views', sub: 'in 10 mins', time: 'Just now', color: '#7C3AED' },
  { icon: '🔥', text: 'Campaign trending in Mumbai', sub: '#FashionWeek', time: '2 min ago', color: '#F97316' },
  { icon: '💰', text: '₹8,000 spent → 950K reach', sub: 'ROI: 5.8x', time: '5 min ago', color: '#22C55E' },
  { icon: '📈', text: 'Engagement increased by 28%', sub: 'Fitness campaign', time: '8 min ago', color: '#7C3AED' },
  { icon: '👥', text: '3 creators joined campaign', sub: 'Tech Gadgets brand', time: '12 min ago', color: '#F97316' },
  { icon: '🎯', text: 'Campaign hit 500K reach', sub: 'Beauty niche', time: '15 min ago', color: '#22C55E' },
  { icon: '⚡', text: 'Viral reel — 1.1M impressions', sub: 'Bengaluru creator', time: '18 min ago', color: '#7C3AED' },
  { icon: '💎', text: 'Brand deal closed ₹25,000', sub: 'Lifestyle niche', time: '22 min ago', color: '#F97316' },
];

// Duplicate for seamless loop
const allItems = [...feedItems, ...feedItems];

export default function LiveActivityFeed() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal-hidden').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-center justify-between scroll-reveal-hidden">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-vb-green pulse-dot" />
            <h2 className="font-display font-800 text-2xl md:text-3xl text-fg">
              Live Campaign Activity
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-fg-dim border border-white/8 rounded-full px-4 py-2">
            <Icon name="ClockIcon" size={14} />
            <span>Updates every 30s</span>
          </div>
        </div>
      </div>
      {/* Scrolling feed — no JS marquee, pure CSS */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0D0F14, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0D0F14, transparent)' }} />

        <div className="flex gap-4 feed-scroll w-max px-6">
          {allItems?.map((item, i) => (
            <div
              key={i}
              className="card-hover flex-shrink-0 w-72 bg-surface border border-white/6 rounded-2xl p-4 cursor-default"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${item?.color}20` }}
                >
                  {item?.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-display font-600 text-fg leading-snug">{item?.text}</p>
                  <p className="text-xs text-fg-dim mt-0.5">{item?.sub}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: item?.color }} />
                <span className="text-[11px] text-fg-dim">{item?.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}