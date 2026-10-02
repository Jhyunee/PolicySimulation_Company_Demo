/* Minimal runtime used only by the public research demonstration. */
window.PolicyStudy = {
  participantId: "",
  policyKey: "company/starbucks",
  pageElapsed: () => performance.now(),
  event: () => Promise.resolve(null),
  exitEvent: () => {},
};
