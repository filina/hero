import { FlowScreen } from "../../components/FlowScreen";

export default function OnboardingPhotoScreen() {
  return (
    <FlowScreen
      title="Onboarding: Photos"
      subtitle="Add profile photos (placeholder)"
      backHref="/auth/code"
      nextHref="/onboarding/basic"
    />
  );
}
