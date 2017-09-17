class DatArchivePolyfill {
  async writeFile(path, data, opts = {}) {
    fetch(`_dat/write-file/${path}`, {
      method: 'POST', 
      body: data 
    })
  }
  async readFile(path, opts = {}) {
    console.log('readFile not yet implemented')

  }
  async mkdir(path) {
    console.log('mkdir not yet implemented')
  }
  async rmdir(path, opts = {}) {
    console.log('rmdir not yet implemented')

  }
  async commit(opts = {}) {
    console.log('commit not yet implemented')
  }
  async diff(opts = {}) {
    console.log('diff not yet implemented')
  }
  async history(opts = {}) {
    console.log('history not yet implemented')
  }
}
if (!window.DatArchive) {
  window.DatArchive = DatArchivePolyfill
}
