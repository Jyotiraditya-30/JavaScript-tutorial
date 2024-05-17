// new Promise((resolveOuter) => {
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         }),
//     );
// });

moment().format('MMMM Do YYYY, h:mm:ss a'); // May 15th 2024, 5:00:22 pm
moment().format('dddd');                    // Wednesday
moment().format("MMM Do YY");               // May 15th 24
moment().format('YYYY [escaped] YYYY');     // 2024 escaped 2024
moment().format();            