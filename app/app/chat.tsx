import { FlowScreen } from "../../components/FlowScreen";

export default function ChatScreen() {
  return (
    <FlowScreen
      title="App: Chat"
      subtitle="Messages (placeholder)"
      backHref="/app/matches"
      nextHref="/auth/phone"
    />
  );
}
