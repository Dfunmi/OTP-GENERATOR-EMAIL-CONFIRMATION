function generateOPT(){
  return Math.floor(1000 + Math.random() * 9000)
}

document.querySelector('#generateOTP').addEventListener('click', function (){
  const OTP = generateOPT()
  const digits = OTP.toString().split('')
  for (let i = 1; i <= 4; i++){
    document.querySelector('#digit' + i).value = digits [i-1]
  }
})