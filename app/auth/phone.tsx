import { FlowScreen } from "../../components/FlowScreen";

export default function AuthPhoneScreen() {
  return (
    <FlowScreen
      title="Auth: Phone"
      subtitle="Enter phone number (placeholder)"
      backHref="/app/chat"
      nextHref="/auth/code"
    />
  );
}
