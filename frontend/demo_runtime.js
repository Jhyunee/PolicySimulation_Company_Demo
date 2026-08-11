/* Minimal runtime used only by the public research demonstration. */
window.PolicyStudy = {
  participantId: "",
  policyKey: "usa/chi_ctc",
  pageElapsed: () => performance.now(),
  event: () => Promise.resolve(null),
  exitEvent: () => {},
};
