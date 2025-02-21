import React from 'react';
import Seo from '../components/Seo';
import MainNav from '../components/navs/headerElements/MainNav';
import CpFooter from '../components/navs/footerElements/CpFooter';
import { useLayout } from '../hooks/useLayout';
import { mapSeoToProps } from '../lib/mapToProps';
import ContactUsTag from '../components/navs/footerElements/ContactUsTag';
// import Search from '../components/search';

const searchIndices = [{ name: `tep`, title: `tep` }];

export default function MyLayout({ children, location, type, data, heroImage }) {
  const { mainNav } = useLayout();
  return (
    <>
      <Seo {...mapSeoToProps(data, type)} heroImage={heroImage} />
      {/* <header>
        <Search indices={searchIndices} />
      </header> */}
      {mainNav && <MainNav location={location} />}
      {children}
      <ContactUsTag />
      <CpFooter />
    </>
  );
}
