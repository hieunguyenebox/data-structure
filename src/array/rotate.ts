

export const rotate = (arr: number[], position: number) => {

  const length = arr.length
  const tmp = []
  for (let i = 0; i < length; i++) {
    if (i <= position) {
      tmp[i] = arr[i]
    }
    arr[i] = arr[position + i + 1]


    const reversalPos = length - i - 1
    if (reversalPos <= position) {
      arr[i] = tmp[position - reversalPos]
    }
  }

}

const gcd = (a: number, b: number) => {

  let i = 1
  let result = i
  while (i <= a && i <= b) {
    if (a % i === 0 && b % i === 0) {
      result = i
    }
    i++
  }
  return result
}

// // method 2 : juggling
export const rotate2 = (arr: number[], d: number) => {

  // const _pos = position - 1
  const _gcd = gcd(arr.length, d)
  console.log(_gcd)
  for (let i = 0; i < _gcd; i++) { // i = 0, 1, 2
    let tmp = arr[i]
    let j = i //0, 1, 2
    while (true) {
      let k = j + d // 0, 3, 6, 9 // 

      if (k >= arr.length) {
        console.log(k)
        k = k - arr.length // k will be always in 0 -> d
      }
      //when break the loop?
      if (k === i) {
        break
      }

      arr[j] = arr[k]
      j = k
    }
    arr[j] = tmp
  }
}

const reverseArr = (arr: number[], low: number, hi: number) => {
  while (low < hi) {
    let tmp = arr[low]
    arr[low] = arr[hi]
    arr[hi] = tmp
    low++
    hi--
  }
}

export const leftRotate = (data: number[]) => {
  reverseArr(data, 0, 1)
  reverseArr(data, 2, data.length - 1)
  reverseArr(data, 0, data.length - 1)
}
