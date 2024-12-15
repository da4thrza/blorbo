import React from 'react';
import { Twitter, BarChart3, MessageCircle } from 'lucide-react';
import { SocialButton } from './ui/SocialButton';
import { SOCIAL_LINKS } from '../constants/links';

export function SocialLinks() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
        <SocialButton
          icon={Twitter}
          label="Social"
          href={SOCIAL_LINKS.x}
          color="purple"
        />
        <SocialButton
          icon={BarChart3}
          label="Chart"
          href={SOCIAL_LINKS.dexscreener}
          color="pink"
        />
        <SocialButton
          icon={MessageCircle}
          label="Telegram"
          href={SOCIAL_LINKS.telegram}
          color="purple"
        />
      </div>
    </div>
  );
}