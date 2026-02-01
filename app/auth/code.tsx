import { FlowScreen } from "../../components/FlowScreen";

export default function AuthCodeScreen() {
  return (
    <FlowScreen
      title="Auth: Code"
      subtitle="Enter SMS code (placeholder)"
      backHref="/auth/phone"
      nextHref="/onboarding/photo"
    />
  );
}
