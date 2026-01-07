import React, { useState } from 'react';
import Layout from './components/Layout.tsx';
import HomeSection from './components/HomeSection.tsx';
import NFTBeltsSection from './components/NFTBeltsSection.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'nfts'>('home');

  return (
    <Layout onViewChange={setCurrentView} currentView={currentView}>
      {currentView === 'home' ? <HomeSection /> : <NFTBeltsSection />}
    </Layout>
  );
};

export default App;
