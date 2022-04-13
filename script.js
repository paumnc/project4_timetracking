
let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

const dailybtn = document.querySelector(".dailybtn");
const weeklybtn = document.querySelector(".weeklybtn");
const monthlybtn = document.querySelector(".monthlybtn");
const timeframes = document.querySelectorAll(".timeframes");
const previousTimeframes = document.querySelectorAll(".previoustimeframes");
// const daily = document.querySelector(".daily");
// const yesterday = document.querySelector(".yesterday");
// const weekly = document.querySelector(".weekly");
// const lastweek = document.querySelector(".lastweek");
// const monthly = docoument.querySelector(".monthly");
// const lastmonth = document.querySelector(".lastmonth");

// dailybtn.addEventListener("click", function daily () {
//     dailybtn.classList.add("active");
//     weeklybtn.classList.remove("active");
//     monthlybtn.classList.remove("active");

//     for(let u of data) {
//         const dailycurrent = u.timeframes.daily.current;
//         const dailyprevious = u.timeframes.daily.previous;

//         timeframes.forEach(hello => {
//             hello.textContent = `${dailycurrent}`;
//         })
//         console.log(dailycurrent)
//         console.log(dailyprevious)
        
//     }
// })
dailybtn.addEventListener("click", function daily() {
    weeklybtn.classList.remove("active");
    monthlybtn.classList.remove("active");
    dailybtn.classList.add("active");
    data.forEach((i, index) => { 
        let dailyCurrent = i.timeframes.daily.current;
        let dailyPrevious = i.timeframes.daily.previous;
      
        if (timeframes[index]) {
          timeframes[index].textContent = `${dailyCurrent}hr`;
        }
        
        if (previousTimeframes[index]) {
          previousTimeframes[index].textContent = `Yesterday - ${dailyPrevious}hr`;
        }
      })
});

weeklybtn.addEventListener("click", function weekly () {
    weeklybtn.classList.add("active");
    monthlybtn.classList.remove("active");
    dailybtn.classList.remove("active");
    data.forEach((i, index) => { 
        let weeklyCurrent = i.timeframes.weekly.current;
        let weeklyPrevious = i.timeframes.weekly.previous;
      
        if (timeframes[index]) {
          timeframes[index].textContent = `${weeklyCurrent}hr`;
        }
        
        if (previousTimeframes[index]) {
          previousTimeframes[index].textContent = `Last Week - ${weeklyPrevious}hr`;
        }
      })
    });

monthlybtn.addEventListener("click", function monthly () {
    weeklybtn.classList.remove("active");
    monthlybtn.classList.add("active");
    dailybtn.classList.remove("active");
    data.forEach((i, index) => { 
        let monthlyCurrent = i.timeframes.monthly.current;
        let monthlyPrevious = i.timeframes.monthly.previous;
      
        if (timeframes[index]) {
          timeframes[index].textContent = `${monthlyCurrent}hr`;
        }
        
        if (previousTimeframes[index]) {
          previousTimeframes[index].textContent = `Last Month - ${monthlyPrevious}hr`;
        }
      })
})
//  for (let i of data) {
//      let weeklycurrent = i.timeframes.weekly.current;
//      let weeklyprevious = i.timeframes.weekly.previous;

     
     

//      timeframes.textContent = `${weeklycurrent}`;

    //  timeframes.forEach(x => {
    //     x.textContent = `${weeklycurrent}hrs`;
    //    console.log(x)
    //    })


    // previousTimeframes.forEach(y => {
    //     y.textContent = `Last Week - ${weeklyprevious}hrs`
    // })  


    // console.log(weeklycurrent)
    //  console.log(weeklyprevious)
//  }

//  timeframes.forEach(x => {
//     console.log(x)
//     })

  
