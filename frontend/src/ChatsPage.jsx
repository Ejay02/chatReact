//PRetty UI
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

//Advanced UI
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
//     props.user.username,
//     props.user.secret
//   );

//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };

export default ChatsPage;
