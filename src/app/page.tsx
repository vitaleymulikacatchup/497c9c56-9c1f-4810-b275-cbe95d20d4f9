"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import CyclopsHero from '@/components/sections/layouts/hero/SplitHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' },
];

const theme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={navItems}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758888303948-90815082.jpg"
          logoWidth={100}
          logoHeight={40}
          buttonText="Buy MemePulse"
          onButtonClick={() => {}}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <CyclopsHero
          title="Welcome to MemePulse"
          subtitle="Join the fun and invest in our revolutionary memecoin!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          characterImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1758888297399-9ac83d54.jpg"
          characterImageAlt="Cartoon character representing MemePulse"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <BaseAbout
          title="About MemePulse"
          descriptions={[
            "MemePulse is a fun and community-driven memecoin, designed to bring joy and laughter to the crypto world.",
            "Join us as we embark on this journey to create a vibrant community around our token, where everyone can participate and contribute."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          steps={[
            { position: 'left', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1758888299285-723d3ccb.jpg', title: 'Step 1', description: 'Connect your wallet.' },
            { position: 'center', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1758888300925-f7f38ebe.jpg', title: 'Step 2', description: 'Choose a meme coin to buy.' },
            { position: 'right', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1758888302516-03de408f.jpg', title: 'Step 3', description: 'Confirm your purchase!'
          }
        ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Discover the core metrics behind the MemePulse token."
          kpiItems={[
            { value: '1 Billion', description: 'Max Supply' },
            { value: '10%', description: 'Transaction Fee' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758888303948-90815082.jpg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Contact', onClick: () => {} }, { label: 'Privacy', onClick: () => {} }] },
            { title: 'Social', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Discord', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MemePulse. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
