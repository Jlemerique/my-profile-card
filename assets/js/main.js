/*=============== SHOW SOCIAL MIDIAS ===============*/
const ShowSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
    social = document.getElementById(socialCard)

    toggle.addEventListener('click', () => {
      //Se a animacao da classe existe , eh necessario add class de down-animation
      if(social.classList.contains('animation')){
        social.classList.add('down-animation')
      }

        //Adicionado class de animacao para tag da div de class card-social 
        social.classList.toggle('animation')

        //
        setTimeout(() => {
            social.classList.remove('down-animation')
        }, 1000)
    })
    
}
ShowSocial('card-toggle','card-social')