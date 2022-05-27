import CryptoJS from 'crypto-js'

export const MD5_Encrypt = (plaintext: string) => {
  const ciphered = CryptoJS.MD5(plaintext).toString()
  return ciphered
}
