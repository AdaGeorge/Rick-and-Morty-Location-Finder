const usePaginationLogic = (currentPage, location) => {

  //logica de paginacion
  let arrayResidents = []
  const residentsPerPage = 6
   if(location?.residents.length < residentsPerPage){
     arrayResidents.push(...location.residents.map(e => e))
   }else{
     const lastResident = currentPage * residentsPerPage
     arrayResidents = location?.residents.slice(lastResident - residentsPerPage, lastResident)
   }

   let arrayPages = []
   let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
   let pagesPerBlock = 5
   let currentBlock = Math.ceil(currentPage / pagesPerBlock)
   if (currentBlock * pagesPerBlock >= quantityPages){
     for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++){
       arrayPages.push(i)
     }
   }else{
    for(let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++){
      arrayPages.push(i)
    }
   }

   return {arrayResidents, quantityPages, arrayPages}
}

export default usePaginationLogic