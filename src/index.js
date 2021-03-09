module.exports = function toReadable (number) {
    let a = number.toString().split('')

    for (let i = 0; i < a.length; i++) {
  
      if (a.length === 3 && a[2] != '0') {
        return `${hhh([a[0]])} hundred ${hhh(a.slice(1))}`
      }
  
      function hhh(a) {
        if (a[0] === '0' && a.length === 2 && a[1] !== '0') {
          return `${GGG([a[1]])}`
        }
  
        if (a[0] === '9' && a.length === 2 && a[1] !== '0') {
          return `ninety ${GGG([a[1]])}`
        }
  
        if (a[0] === '8' && a.length === 2 && a[1] !== '0') {
          return `eighty ${GGG([a[1]])}`
        }
  
        if (a[0] === '7' && a.length === 2 && a[1] !== '0') {
          return `seventy ${GGG([a[1]])}`
        }
  
        if (a[0] === '6' && a.length === 2 && a[1] !== '0') {
          return `sixty ${GGG([a[1]])}`
        }
  
        if (a[0] === '5' && a.length === 2 && a[1] !== '0') {
          return `fifty ${GGG([a[1]])}`
        }
  
        if (a[0] === '4' && a.length === 2 && a[1] !== '0') {
          return `forty ${GGG([a[1]])}`
        }
  
        if (a[0] === '3' && a.length === 2 && a[1] !== '0') {
          return `thirty ${GGG([a[1]])}`
        }
  
        if (a[0] === '2' && a.length === 2 && a[1] !== '0') {
          return `twenty ${GGG([a[1]])}`
        }
  
        if (a.length === 3 && a[2] === '0'&& a[1] === '0') {
          return `${GGG([a[0]])} hundred`
        }
  
        if (a.length === 3 && a[2] === '0') {
          return `${GGG([a[0]])} hundred ${GGG(a.slice(1))}`
        }
  
        function GGG(a) {
          a = a.join('')
          if (a.length === 2) {
            if (a === '10') {
              return 'ten'
            }
            if (a == '11') {
              return 'eleven'
            }
            if (a === '12') {
              return 'twelve'
            }
            if (a === '13') {
              return 'thirteen'
            }
            if (a === '14') {
              return 'fourteen'
            }
            if (a === '15') {
              return 'fifteen'
            }
            if (a === '16') {
              return 'sixteen'
            }
            if (a === '17') {
              return 'seventeen'
            }
            if (a === '18') {
              return 'eighteen'
            }
            if (a === '19') {
              return 'nineteen'
            }
            if (a === '20') {
              return 'twenty'
            }
            if (a === '30') {
              return 'thirty'
            }
            if (a === '40') {
              return 'forty'
            }
            if (a === '50') {
              return 'fifty'
            }
            if (a === '60') {
              return 'sixty'
            }
            if (a === '70') {
              return 'seventy'
            }
            if (a === '80') {
              return 'eighty'
            }
            if (a === '90') {
              return 'ninety'
            }
          }
          if (a === '0') {
            return 'zero'
          }
          if (a === '1') {
            return 'one'
          }
          if (a === '2') {
            return 'two'
          }
          if (a === '3') {
            return 'three'
          }
          if (a === '4') {
            return 'four'
          }
          if (a === '5') {
            return 'five'
          }
          if (a === '6') {
            return 'six'
          }
          if (a === '7') {
            return 'seven'
          }
          if (a === '8') {
            return 'eight'
          }
          if (a === '9') {
            return 'nine'
          }
        }
        return GGG(a)
      }
      
      return hhh(a)
  
  
    }
}
