import React, { useState } from 'react';

interface Stream {
  id: string;
  title: string;
  streamer: string;
  game: string;
  viewers: number;
  thumbnail: string;
}

const Twitch: React.FC = () => {
  const [streams] = useState<Stream[]>([
    { id: '1', title: 'Ranked Grind!', streamer: 'ninja', game: 'Valorant', viewers: 45000, thumbnail: '🎮' },
    { id: '2', title: 'New Game Release', streamer: 'shroud', game: 'Counter-Strike 2', viewers: 32000, thumbnail: '🔫' },
    { id: '3', title: 'Chill Vibes', streamer: 'pokimane', game: 'Just Chatting', viewers: 28000, thumbnail: '💬' },
    { id: '4', title: 'Speedrun Any%', streamer: 'xQc', game: 'Minecraft', viewers: 65000, thumbnail: '⛏️' },
    { id: '5', title: 'Pro Tournament', streamer: 'tfue', game: 'Fortnite', viewers: 18000, thumbnail: '🏆' },
  ]);
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);

  if (selectedStream) {
    return (
      <div className="h-full bg-[#0e0e10] text-white flex flex-col">
        <div className="flex-1 bg-black flex items-center justify-center">
          <div className="text-8xl">{selectedStream.thumbnail}</div>
        </div>
        <div className="p-4 bg-[#18181b]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{selectedStream.title}</h2>
              <div className="text-purple-400">{selectedStream.streamer}</div>
            </div>
            <button 
              onClick={() => setSelectedStream(null)}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
            >
              Back to Browse
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#0e0e10] text-white overflow-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Live Channels</h1>
        <div className="grid grid-cols-3 gap-4">
          {streams.map(stream => (
            <div
              key={stream.id}
              onClick={() => setSelectedStream(stream)}
              className="cursor-pointer group"
            >
              <div className="aspect-video bg-[#18181b] rounded-lg flex items-center justify-center text-6xl mb-2 group-hover:ring-2 ring-purple-500">
                {stream.thumbnail}
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                  {stream.streamer[0].toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm truncate">{stream.title}</div>
                  <div className="text-gray-400 text-sm">{stream.streamer}</div>
                  <div className="text-gray-400 text-sm">{stream.game}</div>
                  <div className="text-red-500 text-xs">🔴 {stream.viewers.toLocaleString()} viewers</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Twitch;
