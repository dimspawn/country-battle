let voters = [];
let podium = [];
let flags = [
    {
        names: ["australia", "aussie", "astralia","kangaroo"],
        img: "flagaustralia.png",
    },
    {
        names: ["bahrain"],
        img: "flagbahrain.png",
    },
    {
        names: ["brazil","brasil"],
        img:"flagbrazil.png",
    },
    {
        names: ["chile"],
        img: "flagchile.png"
    },
    {
        names: ["china", "cina","rrc"],
        img: "flagchina.png"
    },
    {
        names: ["croatia", "kroasia"],
        img: "flagcroatia.png"
    },
    {
        names: ["france", "perancis", "francis"],
        img: "flagfrance.png"
    },
    {
        names: ["germany"," german","jerman"],
        img: "flaggermany.png"
    },
    {
        names: ["honduras"],
        img: "flaghonduras.png"
    },
    {
        names: ["jamaika"],
        img: "flagjamaica.png"
    }, 
    {
        names: ["korea"],
        img: "flagkorea.png"
    },
    {
        names: ["meksiko", "mekiko", "mexico"],
        img: "flagmexico.png"
    },
    {
        names: ["north macedonia", "macedonia"],
        img: "flagnorthmacedonia.png"
    },
    {
        names: ["poland", "polandia", "polan"],
        img: "flagpoland.png"
    },
    {
        names: ["portugal","portugis"],
        img: "flagportugal.png"
    },
    {
        names: ["senegal"],
        img: "flagsenegal.png"
    },
    {
        names: ["singapur", "singapore"],
        img: "flagsingapore.png"
    },
    {
        names: ["uk","inggris","england"],
        img: "flaguk.png"
    },
    {
        names: ["uruguay"],
        img: "flaguruguay.png"
    },
    {
        names: ["venezuela"],
        img: "flagvenezuela.png"
    },

]
$(document).ready(() => {
    alert("Ready!");

    $('#bruce-indo').bind('click', () => { flagVote("Bruce", "bruce.jpg", 1,"flagaustralia.png");});
    $('#meghan-indo').bind('click', () => { flagVote("Meghan", "csanders.jpg", 1,"flagaustralia.png");});
    $('#oza-indo').bind('click', () => { flagVote("Oza", "dimas.png", 1,"flagaustralia.png");});
    $('#karen-indo').bind('click', () => { flagVote("Karen", "nigel.jpg", 1,"flagaustralia.png");});
    $('#rocky-indo').bind('click', () => { flagVote("Rocky", "mark.png", 1,"flagaustralia.png");});

    $('#bruce-malay').bind('click', () => { flagVote("Bruce", "bruce.jpg", 1,"flagjamaica.png");});
    $('#meghan-malay').bind('click', () => { flagVote("Meghan", "csanders.jpg", 1,"flagjamaica.png");});
    $('#oza-malay').bind('click', () => { flagVote("Oza", "dimas.png", 1,"flagjamaica.png");});
    $('#karen-malay').bind('click', () => { flagVote("Karen", "nigel.jpg", 1,"flagjamaica.png");});
    $('#rocky-malay').bind('click', () => { flagVote("Rocky", "mark.png", 1,"flagjamaica.png");});

    $('#bruce-uk').bind('click', () => { flagVote("Bruce", "bruce.jpg", 1,"flagsenegal.png");});
    $('#meghan-uk').bind('click', () => { flagVote("Meghan", "csanders.jpg", 1,"flagsenegal.png");});
    $('#oza-uk').bind('click', () => { flagVote("Oza", "dimas.png", 1,"flagsenegal.png");});
    $('#karen-uk').bind('click', () => { flagVote("Karen", "nigel.jpg", 1,"flagsenegal.png");});
    $('#rocky-uk').bind('click', () => { flagVote("Rocky", "mark.png", 1,"flagsenegal.png");});

    $('#bruce-germany').bind('click', () => { flagVote("Bruce", "bruce.jpg", 1,"flaggermany.png");});
    $('#meghan-germany').bind('click', () => { flagVote("Meghan", "csanders.jpg", 1,"flaggermany.png");});
    $('#oza-germany').bind('click', () => { flagVote("Oza", "dimas.png", 1,"flaggermany.png");});
    $('#karen-germany').bind('click', () => { flagVote("Karen", "nigel.jpg", 1,"flaggermany.png");});
    $('#rocky-germany').bind('click', () => { flagVote("Rocky", "mark.png", 1,"flaggermany.png");});

    $('#bruce-brazil').bind('click', () => { flagVote("Bruce", "bruce.jpg", 1,"flagbrazil.png");});
    $('#meghan-brazil').bind('click', () => { flagVote("Meghan", "csanders.jpg", 1,"flagbrazil.png");});
    $('#oza-brazil').bind('click', () => { flagVote("Oza", "dimas.png", 1,"flagbrazil.png");});
    $('#karen-brazil').bind('click', () => { flagVote("Karen", "nigel.jpg", 1,"flagbrazil.png");});
    $('#rocky-brazil').bind('click', () => { flagVote("Rocky", "mark.png", 1,"flagbrazil.png");});
});

let dummies = [
    {
        username: "bruce",
        userImg: "bruce.jpg",
        flag: "flagaustralia.png",
        score: 1
    },
    {
        username: "meghan",
        flag: "flagchina.png",
        score: 1
    }
];
dummies[0].score = 5;
let executePodium = () => {
    var boxpanel = ``;
    var number = 0;
    podium.forEach(podi => {
        var audiencebox = ``;
        podi.audience.forEach(audi => {
            audiencebox += 
            `<div class="audiencecontainer">
                <img class="audienceimg" src="img/user/`+audi.userImg+`" />
                <p class="numberpoint">`+audi.score+`</p>
            </div>`;
        });
        number += 1;
        boxpanel += 
        `<div class="boxpanel">
            <div class="numberbox"><h1 class="numbertext">`+number+`</h1></div>
            <div>
                <img class="flagimg" src="img/flag/`+podi.flag+`" />
                <p class="numberpoint">`+podi.likes+`</p>
            </div>
            <div class="audience">
                <div class="audiencebox">` + audiencebox +
                `</div>
            </div>
        </div>`;
    });
    $('#maincontainer').html(boxpanel);
    // for (var i = 0;i < podium.length;i++) {
    //     var audiencebox = ``;
    //     podium[i].
    // }
        // `<div class="boxpanel">
        //     <div class="numberbox"><h1 class="numbertext">1</h1></div>
        //         <div>
        //             <img class="flagimg" src="img/flag/flagaustralia.png"/>
        //             <p class="numberpoint">1000</p>
        //         </div>
        //         <div class="audience">
        //             <div class="audiencebox">
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //                 <div class="audiencecontainer">
        //                     <img class="audienceimg" src="img/flag/flagbahrain.png"/>
        //                     <p class="numberpoint">1000</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>`
}

let oriCalc = () => {
    let visited = [];
    let newPodium = [];
    voters.forEach((vote) => {
        if (!visited.includes(vote.flag)) {
            visited.push(vote.flag);
        }
    });
    for (var i = 0;i < visited.length;i++) {
        var tLikes = voters.reduce((sum, dum) => {
            return visited[i] == dum.flag ? dum.score + sum : sum;
        }, 0);
        var audience = voters.filter((dum) => dum.flag == visited[i]);
        audience.sort((a, b) => b.score - a.score);
        newPodium.push({ flag: visited[i], likes: tLikes, audience: audience });
    }
    newPodium.sort((a, b) => b.likes - a.likes);
    podium = newPodium;
    executePodium();
}

let flagVote = (username, userImg, value = 1, flag = false) => {
    //alert(username + " vote " + flag);
    var likeIndex = voters.findIndex((vote) => vote.username == username);
    if (likeIndex == -1) {
        // var flagged = flag;
        // if(flag == false) {
        //     flagged = flags[Math.floor(Math.random()*flags.length)].img;
        // }
        var flagged = flag == false ? flags[Math.floor(Math.random() * flags.length)].img : flag;
        voters.push({username: username, userImg: userImg, flag: flagged, score: value});
    } else {
        voters[likeIndex].score += value;
        if (flag != false) { voters[likeIndex].flag = flag; } 
    }
    oriCalc();
}

//-----------------start-of-randomization------------
//-----------------End-of-randomization--------------

//-----------------start-of-calculation--------------
// let flags = [];
// let visited = [];
// let dummies = [
//     {
//         username: "bruce",
//         flag: "flagaustralia.png",
//         score: 1
//     },
//     {
//         username: "meghan",
//         flag: "flagchina.png",
//         score: 1
//     },
//     {
//         username: "yoyachi",
//         flag: "flagchina.png",
//         score: 2
//     },
//     {
//         username: "gamugamu",
//         flag: "flagaustralia.png",
//         score: 7
//     },
//     {
//         username: "gamugamuk",
//         flag: "indonesia.png",
//         score: 10
//     }
// ];

// dummies.forEach((dum) => {
//     if (!visited.includes(dum.flag)) {
//         visited.push(dum.flag)
//     }
// })
// for(var i = 0;i < visited.length;i++) {
//     var fIndex = dummies.reduce((res, num) => {
//         return visited[i] == num.flag ? num.score + res : res
//     }, 0);
//     var audience = dummies.filter((dum) => dum.flag == visited[i]);
//     audience.sort((a, b) => b.score - a.score);
//     flags.push({flag: visited[i], likes: fIndex, audience: audience})
// }

// flags.sort((a, b) => b.likes - a.likes)

// console.log(flags);
//-----------------End-of-calculation----------------