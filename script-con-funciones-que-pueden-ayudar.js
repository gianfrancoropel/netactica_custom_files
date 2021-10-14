// export portalData
let arraySites = [];

document.querySelectorAll('.dnn-grid-cell.portal-list-container.undefined > .dnn-grid-cell').forEach(grid =>{
   let portalName = grid.querySelector('.dnn-grid-cell.portal-name-info > .dnn-text-overflow-wrapper').textContent
   let portalurl = grid.querySelector('.dnn-grid-cell.portal-name-info > div > .dnn-text-overflow-wrapper > a').href
   let portalnumber = grid.querySelector('.portal-statistic:nth-child(1) p>span').textContent;
   arraySites.push({portalName:portalName,portalurl:portalurl,portalnumber:portalnumber})
})

console.log(arraySites)
