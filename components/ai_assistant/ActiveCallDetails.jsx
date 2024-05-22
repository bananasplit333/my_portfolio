import AssistantSpeechIndicator from './call/AssistantSpeechIndicator';
import Button from '../Button';
import VolumeLevel from './call/VolumeLevel';

const ActiveCallDetail = ({ assistantIsSpeaking, volumeLevel, onEndCallClick }) => {
  return (
    <div>
      <div className="w-64 flex flex-col h-full items-left justify-left p-4 border border-gray-300 rounded-lg shadow-md">
        <VolumeLevel volume={volumeLevel} />
      </div>
      <div className="mt-5 text-left">
        <Button label="End Call" onClick={onEndCallClick} />
      </div>
    </div>
  );
};

export default ActiveCallDetail;