import React from 'react';
import Link from 'next/link';
import AppLogo from './ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + links */}
        <div className="flex items-center gap-8 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-2">
            <AppLogo size={24} iconName="BoltIcon" className="text-primary" />
            <span className="font-display font-700 text-sm text-fg">Viralbridgge</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-fg-muted">
            <Link href="#how-it-works" className="hover:text-fg transition-colors">How it Works</Link>
            <Link href="#pricing" className="hover:text-fg transition-colors">Pricing</Link>
            <Link href="#creators" className="hover:text-fg transition-colors">Creators</Link>
            <Link href="#" className="hover:text-fg transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-fg transition-colors">Terms</Link>
          </nav>
        </div>

        {/* Copyright */}
        <p className="text-xs text-fg-dim">© 2026 Viralbridgge. All rights reserved.</p>
      </div>
    </footer>
  );
}