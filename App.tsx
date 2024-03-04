import React, {JSX, useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import {addTrack, setupPlayer} from './musicPlayerServices';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetupComplete = await setupPlayer();

    if (isSetupComplete) {
      await addTrack();
    }
    setIsPlayerReady(isSetupComplete);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return <MusicPlayer />;
}

export default App;
