export function debounce(func:any, timeout = 300){
    const interval = setTimeout(func,timeout)
    return interval
  }