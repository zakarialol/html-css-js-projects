const SectionInfo =[
    {
        id: 1,
        category : "history" ,
        paragraph: 'history  veritatis quisquam sit repellendus maxime repudiandae? Nihil expedita, labore veniam enim voluptatum voluptatem numquam natus illo et unde quo quod vitae cumque voluptatibus tempore, vel optio? Repudiandae, quam!' ,

    },
    {
        id: 2,
        category : "vision" ,
        paragraph: 'vision Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde molestiae a assumenda voluptatum quaerat odio quod velit ad, necessitatibus ipsa, voluptatem veritatis quisquam sit repellendus maxime repudiandae? Nihil expedita, ' ,

    },
    {
        id: 3,
        category : "goals" ,
        paragraph: 'goals Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla unde molestiae a assumenda voluptatum quaerat odio quod velit veritatis quisquam sit repellendus maxime repudiandae? Nihil expedita, labore veniam enim voluptatum' ,

    }
] 

// paragraph container

const ParagraphContainer = document.querySelector('.paragraph .info')
const Btns = document.querySelectorAll('.button-about')

// function to add content 
const Theparagraph = document.querySelector('.main-div .paragraph')
Btns.forEach(function(btn){
        btn.addEventListener('click',function(currentBtn){
        Btns.forEach(clas => clas.classList.remove('background-white'))
        currentBtn.currentTarget.classList.add('background-white')
        let CurrentButton = currentBtn.currentTarget.dataset.category
        let CurrElem = SectionInfo.filter(itm => itm.category === CurrentButton)
        DomContent(CurrElem[0])
    })
})

// function to handle the doom content
function DomContent(currentCategory){
    
            Theparagraph.innerHTML = ` <span class="span-for-title">${currentCategory.category}</span>
                                        <p class="info">${currentCategory.paragraph}</p>`
}
