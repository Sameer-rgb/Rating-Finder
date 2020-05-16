// chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
//   // Get current page url
//   let url = tabs[0].url;
//   // check if current open page is netflix
//   const isAvailable = url.includes("www.netflix.com");
//   // return if page is not netflix
//   if (!isAvailable) return;
//   // let netflix movie title
//   let movieTitles = [];

//   const fallbackContainer = document.querySelector("#appMountPoint");
//   console.log(fallbackContainer);

//   //   movieDetail();
// });

// // create a async function for api call
// async function movieDetail() {
//   const response = await fetch(
//     "http://www.omdbapi.com/?t=chernobyl&y=2017&apikey=27ee9aa4",
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   );
// }
chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  chrome.pageAction.show(tab[0].id);
});
