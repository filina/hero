import { FlowScreen } from "../../components/FlowScreen";

export default function FeedScreen() {
  return (
    <FlowScreen
      title="App: Feed"
      subtitle="Swipe feed (placeholder)"
      backHref="/onboarding/interests"
      nextHref="/app/matches"
    />
  );
}
