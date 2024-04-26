import React from 'react';
import AssistantSpeechIndicator from './call/AssistantSpeechIndicator';
import Button from '../Button';
import VolumeLevel from './call/VolumeLevel';

interface ActiveCallDetailProps {
  assistantIsSpeaking: boolean;
  volumeLevel: number;
  onEndCallClick: () => void;
}

const ActiveCallDetail: React.FC<ActiveCallDetailProps> = ({
  assistantIsSpeaking,
  volumeLevel,
  onEndCallClick,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md w-96 h-48">
        <AssistantSpeechIndicator isSpeaking={assistantIsSpeaking} />
        <VolumeLevel volume={volumeLevel} />
      </div>
      <div className="mt-5 text-center">
        <Button label="End Call" onClick={onEndCallClick} />
      </div>
    </div>
  );
};

export default ActiveCallDetail;