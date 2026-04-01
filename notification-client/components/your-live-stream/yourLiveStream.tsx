'use client'

import React, { useState } from 'react';
import LivestreamCard from './cards/LivestreamCard';
import './yourLiveStream.css';
import ShedularModal from './cards/liveStreamSheduleModal';

const LiveStreamComponent = () => {

    const [isShedularModalOpen, setIsShedularModalOpen] = useState(false);




    const livestreams = [
        { username: "Alice", startTime: "2:00 PM", streamLink: "https://example.com/alice" },
        { username: "Bob", startTime: "3:30 PM", streamLink: "https://example.com/bob" },
        { username: "Charlie", startTime: "5:00 PM", streamLink: "https://example.com/charlie" },
        { username: "David", startTime: "6:15 PM", streamLink: "https://example.com/david" },
        { username: "Eve", startTime: "8:00 PM", streamLink: "https://example.com/eve" },
    ];


    return (
        <div className="home-container">
            <div className="left-block">
                <div className="sticky-container">
                    <button className='schedule-btn' onClick={()=>setIsShedularModalOpen(true)}>Schedule Your Stream</button>
                    
                </div>
            </div>
+
            <div className="middle-block">
                <h3 className="section-title">Your Live Streams</h3>
                {livestreams.map((stream, idx) => (
                    <LivestreamCard
                        key={idx}
                        username={stream.username}
                        startTime={stream.startTime}
                        streamLink={stream.streamLink}
                    />
                ))}
            </div>
            {isShedularModalOpen && <ShedularModal  isOpen={isShedularModalOpen} onClose={() => setIsShedularModalOpen(false)}/>
            }
        </div>
    );
};

export default LiveStreamComponent;
