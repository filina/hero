import { FlowScreen } from "../../components/FlowScreen";

export default function MatchesScreen() {
  return (
    <FlowScreen
      title="App: Matches"
      subtitle="Your matches (placeholder)"
      backHref="/app/feed"
      nextHref="/app/chat"
    />
  );
}
