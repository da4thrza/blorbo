import React from 'react';
import { Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants/links';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400">
          $BLORB is not a financial investment. It's barely even a meme.
        </p>
        <div className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Blorbo. All rights reserved (but not really).
        </div>
      </div>
    </footer>
  );
}