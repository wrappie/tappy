// TODO uncomment
// import Blockchain from './Blockchain';

// TODO alex implement - not neccessary

export default {
  listenForAnyEvents: function(cb) {
  
    setInterval(() => {
      cb()
    }, 2000)
  },

  listenForTransfers: function(cb) {
    // TODO alex uncomment it
  //   let contract = Blockchain.contract()
  //   console.log(`Contract: ${contract}`)
    
  //   let loadedFilter = contract.filters.AssetLoaded() // TODO alex update event
  //   let unLoadedFilter = contract.filters.AssetUnLoaded()
  
  //   contract.on(loadedFilter, (address, hash, value) => {
  //     cb({
  //       address,
  //       hash,
  //       value,
  //       event: 'load'
  //     })
  //   })
  
  //   contract.on(unLoadedFilter, (address, hash, value) => {
  //     cb({
  //       address,
  //       hash,
  //       value,
  //       event: 'unload'
  //     })
  // })
  
    // TODO alex currently it's used for testin
  
    let counter = 1;
  
    function event() {
      counter++;
      cb({
        value: counter * 10,
        address: '0x' + counter * 123123123123,
        hash: 'XXX' + counter * 12312343434123132132,
        type: (counter % 3 ? 'load' : 'unload')
      })
    }
  
    event()
  
    setInterval(() => {
      event()
    }, 2000)
  }
}