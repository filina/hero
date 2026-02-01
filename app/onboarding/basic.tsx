import { FlowScreen } from "../../components/FlowScreen";

export default function OnboardingBasicScreen() {
  return (
    <FlowScreen
      title="Onboarding: Basics"
      subtitle="Name, age, bio (placeholder)"
      backHref="/onboarding/photo"
      nextHref="/onboarding/interests"
    />
  );
}
