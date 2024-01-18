import { ref } from 'vue'

export default function useRandomWord() {
  const randomWord = ref('')

  const getRandomWord = async () => {
   
    try { 
        const response = await fetch('https://random-word-api.herokuapp.com/word?length=5')
        const data = await response.json()
        if(!response.ok) {
            throw Error('No data available')
        } 
        randomWord.value = data[0]
        
    } catch (error) {
        console.log(error.message)
        
    }
  }

  return { randomWord, getRandomWord }
}