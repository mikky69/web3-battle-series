import React, { useState } from 'react';
import Layout from './components/Layout';
import HomeSection from './components/HomeSection';
import NFTBeltsSection from './components/NFTBeltsSection';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'nfts'>('home');
  
  return (
    <Layout onViewChange={setCurrentView} currentView={currentView}>
      {currentView === 'home' ? <HomeSection /> : <NFTBeltsSection />}
    </Layout>
  );
};

export default App;
