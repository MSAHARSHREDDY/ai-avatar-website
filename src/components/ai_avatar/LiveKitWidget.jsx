// import { useState, useCallback, useEffect } from "react";
// import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
// import "@livekit/components-styles";
// import AvatarVoiceAgent from "./AvatarVoiceAgent";
// import "./LiveKitWidget.css";

// const LiveKitWidget = ({ setShowSupport }) => {
//   const [token, setToken] = useState(null);
//   const [isConnecting, setIsConnecting] = useState(true);

//   const getToken = useCallback(async () => {
//     try {
//       console.log("run");
//       const response = await fetch(
//         `/api/getToken?name=${encodeURIComponent("admin")}`
//       );
//       const token = await response.text();

//       setToken(token);
//       setIsConnecting(false);
//     } catch (error) {
//       console.error(error);
//       setIsConnecting(false);
//     }
//   }, []);

//   useEffect(() => {
//     getToken();
//   }, [getToken]);

//   return (

//     <div className="modal-content">
//       <div className="support-room">
//         {isConnecting ? (
//           <div className="connecting-status">
//             <h2>Connecting to support...</h2>
//             <button
//               type="button"
//               className="cancel-button"
//               onClick={() => setShowSupport(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : token ? (
//           <LiveKitRoom
//             serverUrl={import.meta.env.VITE_LIVEKIT_URL}
//             token={token}
//             connect={true}
//             video={false}
//             audio={true}
//             onDisconnected={() => {
//               setShowSupport(false);
//               setIsConnecting(true);
//             }}
//           >
//             <RoomAudioRenderer />
//             <AvatarVoiceAgent />
//           </LiveKitRoom>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default LiveKitWidget;






// import { useState, useCallback, useEffect } from "react";
// import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
// import "@livekit/components-styles";
// import AvatarVoiceAgent from "./AvatarVoiceAgent";
// import "./LiveKitWidget.css";

// const LiveKitWidget = ({ setShowSupport }) => {
//   const [token, setToken] = useState(null);
//   const [isConnecting, setIsConnecting] = useState(true);

//   const getToken = useCallback(async () => {
//     try {
//       console.log("Fetching token...");

//       // ✅ FIX: Use correct API URL based on environment
//       const API_URL =
//         import.meta.env.MODE === "development"
//           ? "/api"
//           : "https://ai-avatar-website-backend.onrender.com";

//       const response = await fetch(
//         `${API_URL}/getToken?name=${encodeURIComponent("admin")}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch token");
//       }

//       // ✅ FIX: Parse JSON correctly
//       const data = await response.text();

//       setToken(data.token);
//       setIsConnecting(false);
//     } catch (error) {
//       console.error("Token fetch error:", error);
//       setIsConnecting(false);
//     }
//   }, []);

//   useEffect(() => {
//     getToken();
//   }, [getToken]);

//   return (
//     <div className="modal-content">
//       <div className="support-room">
//         {isConnecting ? (
//           <div className="connecting-status">
//             <h2>Connecting to support...</h2>
//             <button
//               type="button"
//               className="cancel-button"
//               onClick={() => setShowSupport(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : token ? (
//           <LiveKitRoom
//             serverUrl={import.meta.env.VITE_LIVEKIT_URL}
//             token={token}
//             connect={true}
//             video={false}
//             audio={true}
//             onDisconnected={() => {
//               setShowSupport(false);
//               setIsConnecting(true);
//             }}
//           >
//             <RoomAudioRenderer />
//             <AvatarVoiceAgent />
//           </LiveKitRoom>
//         ) : (
//           <div>Error connecting. Try again.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveKitWidget;





// import { useState, useCallback, useEffect } from "react";
// import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
// import "@livekit/components-styles";
// import AvatarVoiceAgent from "./AvatarVoiceAgent";
// import "./LiveKitWidget.css";

// const LiveKitWidget = ({ setShowSupport }) => {
//   const [token, setToken] = useState(null);
//   const [isConnecting, setIsConnecting] = useState(true);

//   const getToken = useCallback(async () => {
//     try {
//       const API_URL =
//         import.meta.env.MODE === "development"
//           ? "/api"
//           : "https://ai-avatar-website-backend.onrender.com";

//       const response = await fetch(
//         `${API_URL}/getToken?name=${encodeURIComponent("admin")}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch token");
//       }

//       // ✅ backend returns plain token
//       const token = await response.text();

//       setToken(token);
//       setIsConnecting(false);
//     } catch (error) {
//       console.error("Token fetch error:", error);
//       setIsConnecting(false);
//     }
//   }, []);

//   useEffect(() => {
//     getToken();
//   }, [getToken]);

//   return (
//     <div className="modal-content">
//       <div className="support-room">
//         {isConnecting ? (
//           <div className="connecting-status">
//             <h2>Connecting to support...</h2>
//             <button
//               className="cancel-button"
//               onClick={() => setShowSupport(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         ) : token ? (
//           <LiveKitRoom
//             serverUrl={import.meta.env.VITE_LIVEKIT_URL}
//             token={token}
//             connect={true}
//             video={true}   // ✅ FIX: enable avatar video
//             audio={true}
//             onDisconnected={() => {
//               setShowSupport(false);
//               setIsConnecting(true);
//             }}
//           >
//             <RoomAudioRenderer />
//             <AvatarVoiceAgent />
//           </LiveKitRoom>
//         ) : (
//           <div>Error connecting</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveKitWidget;





// import { useState, useCallback, useEffect } from "react";
// import {
//   LiveKitRoom,
//   RoomAudioRenderer,
//   useTracks,
//   VideoTrack
// } from "@livekit/components-react";
// import { Track } from "livekit-client";
// import "@livekit/components-styles";
// import "./LiveKitWidget.css";

// // ✅ Avatar Only Component
// const AvatarOnly = () => {
//   const tracks = useTracks([
//     { source: Track.Source.Camera, withPlaceholder: false },
//   ]);

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       {tracks.length === 0 ? (
//         <h2 style={{ textAlign: "center" }}>Waiting for avatar...</h2>
//       ) : (
//         tracks.map((trackRef) => (
//           <VideoTrack
//             key={trackRef.publication.trackSid}
//             trackRef={trackRef}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// const LiveKitWidget = ({ setShowSupport }) => {
//   const [token, setToken] = useState(null);
//   const [isConnecting, setIsConnecting] = useState(true);

//   const getToken = useCallback(async () => {
//     try {
//       console.log("Fetching token...");

//       const API_URL =
//         import.meta.env.MODE === "development"
//           ? "/api"
//           : "https://ai-avatar-website-backend.onrender.com";

//       const roomName = "test-room";

//       const response = await fetch(
//         `${API_URL}/getToken?name=admin&room=${roomName}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch token");
//       }

//       const token = await response.text();

//       setToken(token);
//       setIsConnecting(false);
//     } catch (error) {
//       console.error("Token fetch error:", error);
//       setIsConnecting(false);
//     }
//   }, []);

//   useEffect(() => {
//     getToken();
//   }, [getToken]);

//   return (
//     <div className="modal-content">
//       <div className="support-room" style={{ height: "500px" }}>
//         {isConnecting ? (
//           <div className="connecting-status">
//             <h2>Connecting to avatar...</h2>
//             <button onClick={() => setShowSupport(false)}>
//               Cancel
//             </button>
//           </div>
//         ) : token ? (
//           <LiveKitRoom
//             serverUrl={import.meta.env.VITE_LIVEKIT_URL}
//             token={token}
//             connect={true}
//             video={false}   // ❌ disable your camera
//             audio={true}
//             onDisconnected={() => {
//               setShowSupport(false);
//               setIsConnecting(true);
//             }}
//           >
//             <RoomAudioRenderer />

//             {/* ✅ ONLY Avatar visible */}
//             <AvatarOnly />

//           </LiveKitRoom>
//         ) : (
//           <h2>Error connecting</h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LiveKitWidget;







import { useState, useCallback, useEffect } from "react";
import { LiveKitRoom, RoomAudioRenderer } from "@livekit/components-react";
import "@livekit/components-styles";
import AvatarVoiceAgent from "./AvatarVoiceAgent";
import "./LiveKitWidget.css";

const LiveKitWidget = ({ setShowSupport }) => {
  const [token, setToken] = useState(null);
  const [isConnecting, setIsConnecting] = useState(true);

  // const getToken = useCallback(async () => {
  //   try {
  //     console.log("run");
  //     const response = await fetch(
  //       `/api/getToken?name=${encodeURIComponent("admin")}`
  //     );
  //     const token = await response.text();
      
  //     setToken(token);
  //     setIsConnecting(false);
  //   } catch (error) {
  //     console.error(error);
  //     setIsConnecting(false);
  //   }
  // }, []);
  const getToken = useCallback(async () => {
  try {
    console.log("Fetching token...");

    // ✅ FIX: dynamic API URL
    const API_URL =
      import.meta.env.MODE === "development"
        ? "/api"
        : "https://ai-avatar-backend-vmja.onrender.com";

    const roomName = "test-room"; // must match agent

    const response = await fetch(
      `${API_URL}/getToken?name=${encodeURIComponent("admin")}&room=${roomName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch token");
    }

    const token = await response.text();

    setToken(token);
    setIsConnecting(false);
  } catch (error) {
    console.error("Token fetch error:", error);
    setIsConnecting(false);
  }
}, []);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    
    <div className="modal-content">
      <div className="support-room">
        {isConnecting ? (
          <div className="connecting-status">
            <h2>Connecting to support...</h2>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setShowSupport(false)}
            >
              Cancel
            </button>
          </div>
        ) : token ? (
          <LiveKitRoom
            serverUrl={import.meta.env.VITE_LIVEKIT_URL}
            token={token}
            connect={true}
            video={false}
            audio={true}
            onDisconnected={() => {
              setShowSupport(false);
              setIsConnecting(true);
            }}
          >
            <RoomAudioRenderer />
            <AvatarVoiceAgent />
          </LiveKitRoom>
        ) : null}
      </div>
    </div>
  );
};

export default LiveKitWidget;