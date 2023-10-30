document.addEventListener('DOMContentLoaded', ()=>{

    new TypeIt(".animated", {
        speed: 220,
       
        loop:true
    }).type("modernas! ",{delay: 1200}).delete(10)
      .type("resistentes! ",{delay: 1200}).delete(13)
      .type("ecológicas! ",{delay: 1200})

    .go()
})