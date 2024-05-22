import AssistantSpeechIndicator from './call/AssistantSpeechIndicator';
import Button from '../Button';
import VolumeLevel from './call/VolumeLevel';

const ActiveCallDetail = ({ assistantIsSpeaking, volumeLevel, onEndCallClick }) => {
  return (
    <div>
      <div className="flex flex-col w-1/3 items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md w-46 h-48">
        <AssistantSpeechIndicator isSpeaking={assistantIsSpeaking} />
        <VolumeLevel volume={volumeLevel} />
      </div>
      <div className="mt-5 text-left">
        <Button label="End Call" onClick={onEndCallClick} />
      </div>
    </div>
  );
};

export default ActiveCallDetail;