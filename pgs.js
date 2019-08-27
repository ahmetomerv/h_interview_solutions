document.querySelector('.stepper-item-body').addEventListener('click', (e) => {
   if (e.path) {
      let stepTitle;
      let counter = 0;
      do {
         stepTitle = e.path[counter].innerText;
         counter++;
      }
      while (e.path[counter].innerText !== ('Koltuk Seçimi' || 'Seat Selection'))
      if (stepTitle === ('Koltuk Seçimi' || 'Seat Selection')) {
         insertSaleBanner();
      }
   }
})

function insertSaleBanner() {
   const saleBannerDiv = document.createElement('div');
   const megaphoneImg = document.createElement('img');
   const saleBannerHeader = document.createElement('h4');
   let paidSeatAvailable = false;

   saleBannerHeader.innerText = 'Koltuk Seçimlerinde %50 Var!';
   megaphoneImg.src = 'https://hype.com.tr/emre/megaphone.png';
   
   saleBannerDiv.appendChild(megaphoneImg);
   saleBannerDiv.appendChild(saleBannerHeader);
   
   Object.assign(saleBannerDiv.style, {
      display: 'flex',
      color: '#000',
      background: '#FDB814',
      padding: '1em',
      borderRadius: '4px',
      border: '1px solid #a59b9b',
      alignItems: 'center',
      boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.11)'
   })
   
   Object.assign(saleBannerHeader.style, {
      fontWeight: 'bold',
      marginLeft: '.6em'
   })
   
   Object.assign(megaphoneImg.style, {
      width: '50px'
   })
   
   setTimeout(() => {
      const seatDivs = document.querySelectorAll('.seat-legend-item');
      const campaignBannerContainer = document.querySelector('.campaign-banner-container');
      saleBannerDiv.className = 'sale-banner';
      for (let x = 0; x < seatDivs.length; x++) {
         if (seatDivs[x].innerText.toLowerCase().match(/(TL)|(USD)|(EUR)|(GBP)/gi)) {
            paidSeatAvailable = true;
            break;
         } else {
            paidSeatAvailable = false;
         }
      }
      if (paidSeatAvailable && !document.querySelector('.sale-banner')) {
         campaignBannerContainer.insertAdjacentElement('beforebegin', saleBannerDiv);
      }
   }, 1000)

}

insertSaleBanner();