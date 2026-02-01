export type AnalyticsProps = Record<string, unknown>;

export function track(event: string, props?: AnalyticsProps) {
  void event;
  void props;
}
