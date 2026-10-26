// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0

document.getElementById('btnClick').addEventListener('click', () => {
   clickCount++

   render(
      `<p>You clicked my button <b>${clickCount} </b> time${clickCount === 1 ? '' : 's'}. </p>`
   )
})

/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblCard = document.getElementById('dblCard')

dblCard.addEventListener('dblclick', () => {
   dblCard.classList.toggle('activated')

   const state = dblCard.classList.contains('activated') ? 'ON' : 'OFF'
   render(`<p>Double-clicked! Highlight is <b>${state}</b>.</p>`)
})
/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */
const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', (e) => {
   kbKey.textContent = e.key === ' ' ? '[space]' : e.key
   kbCode.textContent = e.code 
})
/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
})

// NEW Code Starts Here
