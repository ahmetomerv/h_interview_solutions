// first episode free watch bar
const bluetvBrand = '#2E2F41';
const bluetvButtonBlue = '#56A2FE';
const freeWatchBarEl = document.createElement('div');
const freeWatchLinkEl = document.createElement('a');
document.querySelector('.nav-header').style.display = 'none';
document.querySelector('.nav-right').style.display = 'none';
Object.assign(freeWatchBarEl.style, {
   width: '100%',
   padding: '.6em 0',
   background: bluetvButtonBlue,
   textAlign: 'center',
   position: 'absolute'
})
freeWatchLinkEl.style.color = '#fff';
freeWatchLinkEl.innerText = 'Üye Olmadan İlk Bölümü Hemen İzle!';
freeWatchLinkEl.href = 'https://www.blutv.com.tr/diziler/yerli/masum/1-sezon/masum-1-bolum-izle';
freeWatchBarEl.insertAdjacentElement('afterbegin', freeWatchLinkEl);
document.querySelector('header .container').parentNode.insertBefore(freeWatchBarEl, document.querySelector('header .container').nextSibling);

// blutv logo next to show title
document.querySelectorAll('._2UdhINAiXwDQLWHv9VD7dq').forEach(x => x.style.display = 'none');
const blutvSpecialContainer = document.createElement('div');
const blutvSpecialLogEl = document.createElement('img');
blutvSpecialLogEl.style.margin = '1.4em 0 0 1em';
blutvSpecialLogEl.style.width = '170px;'
blutvSpecialLogEl.src = 'https://hype.com.tr/emre/blutvozelyapim.png';
blutvSpecialLogEl.alt = 'blutv logo';
blutvSpecialContainer.appendChild(blutvSpecialLogEl);
const showTitleEl = document.querySelectorAll('.OYc0_k3pYzHyzHwCQnxpu')[1];
showTitleEl.insertAdjacentElement('afterend', blutvSpecialContainer);

// switch tweets
const tweetsContainerEl = document.createElement('div');
const tweetImgEl = document.createElement('img');
const tweetContentEl = document.createElement('div');
tweetsContainerEl.appendChild(tweetImgEl);
tweetsContainerEl.appendChild(tweetContentEl);
const tweets = [
   { username: 'Lourdes Sampson', text: 'The body may perhaps compensates for the loss of a true metaphysics.' },
   { username: 'Charlotte Dunn', text: 'Check back tomorrow; I will see if the book has arrived.' },
   { username: 'Tim Rice', text: 'Wednesday is hump day, but has anyone asked the camel if he’s happy about it?' }
];
tweetContentEl.innerHTML = `
   <p style="word-wrap: break-word; width: 350px;" id="tweet_text"><span style="font-weight: bold; color: #fff; margin-right: .15em;" id="tweet_username">${tweets[0].username}: </span>${tweets[0].text}</p>
`;
let counter = 0;
function switchTweets() {
   setInterval(() => {
      Object.assign(tweetContentEl.style, {
         opacity: 0,
         transition: '.5s all ease'
      })
      setTimeout(() => {
         tweetContentEl.innerHTML = `
            <p style="word-wrap: break-word; width: 350px;" id="tweet_text"><span style="font-weight: bold; color: #fff; margin-right: .15em;" id="tweet_username">${tweets[counter].username}: </span>${tweets[counter].text}</p>
         `;
         Object.assign(tweetContentEl.style, {
            opacity: 1,
         })
      }, 500)
      counter++;
      if (counter === tweets.length) counter = 0;
   }, 4000)
}
switchTweets();
tweetImgEl.src = 'https://hype.com.tr/emre/twitter.png';
tweetImgEl.alt = 'Twitter Logo';
Object.assign(tweetImgEl.style, {
   width: '30px',
   marginRight: '.5em'
})
Object.assign(tweetsContainerEl.style, {
   display: 'flex',
   alignItems: 'center'
});
document.querySelectorAll('._1lqcKyrjW4M765U0Wrb31i')[3].insertAdjacentElement('afterend', tweetsContainerEl);

// shows hovers
const showsCardList = document.querySelectorAll('._1H6fNaLo41-CHnLjRxWQ0M');
const showsHoverDivs = document.querySelectorAll('._2R_YBroNAP6YdM8KD3Noye');
showsHoverDivs.forEach(x => x.parentElement.removeChild(x));
const playButtonToDelete = document.querySelector('[test-id=playButton]');
playButtonToDelete.parentElement.removeChild(playButtonToDelete);

showsCardList.forEach((x, i) => {
   const overlayDiv = document.createElement('div');
   const hoverDivVideoIcon = document.createElement('img');
   const infoDiv = document.createElement('div');
   const infoText = document.createElement('p');
   const signInButton = document.createElement('button');

   signInButton.innerText = 'Kayıt Ol';
   signInButton.classList = 'button primary-action';
   infoText.innerText = 'İzlemek için hemen üye ol.';
   Object.assign(infoText.style, {
      fontSize: '1.3em'
   })
   Object.assign(hoverDivVideoIcon.style, {
      margin: '0 auto',
      width: '50px'
   })

   if (i === 0) {
      hoverDivVideoIcon.src = 'https://hype.com.tr/emre/play.png';
      overlayDiv.appendChild(hoverDivVideoIcon);

      Object.assign(overlayDiv.style, {
         background: 'none',
         height: '100%',
         width: '100%',
         opacity: '1',
         alignItems: 'center',
         display: 'flex',
         top: '0',
         left: '0',
         position: 'absolute',
         padding: '0',
         transition: 'opacity .5s'
      });

      x.appendChild(overlayDiv);

   } else {
      hoverDivVideoIcon.src = 'https://hype.com.tr/emre/lock.png';
      overlayDiv.appendChild(hoverDivVideoIcon);
      infoDiv.appendChild(infoText);
      infoDiv.appendChild(signInButton);

      Object.assign(infoDiv.style, {
         background: 'rgba(0, 8, 8, 0.65)',
         height: '100%',
         width: '100%',
         opacity: '0',
         alignItems: 'center',
         display: 'flex',
         top: '0',
         left: '0',
         position: 'absolute',
         padding: '0',
         transition: 'opacity .5s',
         display: 'flex',
         justifyContent: 'space-evenly',
         flexDirection: 'column'
      })

      Object.assign(hoverDivVideoIcon.style, {
         margin: '0 auto',
         width: '50px'
      })

      Object.assign(overlayDiv.style, {
         background: 'rgba(0, 0, 0, 0.65)',
         height: '100%',
         width: '100%',
         opacity: '1',
         alignItems: 'center',
         display: 'flex',
         top: '0',
         left: '0',
         position: 'absolute',
         padding: '0',
         transition: 'opacity .5s',
      });

      x.onmouseover = () => {
         Object.assign(overlayDiv.style, {
           opacity: '0',
         })
         Object.assign(infoDiv.style, {
           opacity: '1',
         })
      }
     
      x.onmouseout = () => {
         Object.assign(overlayDiv.style, {
           opacity: '1',
         })
         Object.assign(infoDiv.style, {
           opacity: '0',
         })
      }

      x.appendChild(overlayDiv);
      x.appendChild(infoDiv);
   }
})


