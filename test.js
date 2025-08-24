let savedResolved, saveReject;
const myPromise = new Promise((resolve, reject) => {
  savedResolved = resolve;
  saveReject = reject;
});
// savedResolved("Ami Resolve hoye gechi");
myPromise
  .then((value) => console.log("Promise Resolved", value))
  .catch((err) => console.log("Promise Reject", err));

// saveReject("Kono ekta reject hoye geche");

setTimeout(() => {
  savedResolved("He he etai bastob");
}, 3000);
