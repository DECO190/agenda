function exec(event) {
    const bttn = event.currentTarget

    const elem = bttn.parentNode

    elem.remove()
}

function save() {
    const nome = document.getElementById('name_int').value
    const tel = document.getElementById('tel_int').value
    const email = document.getElementById('email_int').value

    const container = document.getElementById('container_save_box')

    const div = document.createElement('div')


    let div_initial_leter = document.createElement('div')

    div_initial_leter.classList.add('initial_letter')

    let div_initial_leter_p = document.createElement('p')

    div_initial_leter_p.textContent = nome[0]

    div_initial_leter.appendChild(div_initial_leter_p)


    const div_text_cont = document.createElement('div')
    div_text_cont.classList.add('text_cont')


    const div_text_cont_p_nome = document.createElement('div')
    div_text_cont_p_nome.classList.add('nome_text')
    div_text_cont_p_nome.textContent = nome
    div_text_cont.appendChild(div_text_cont_p_nome)

    const div_text_cont_p_tel = document.createElement('div')
    div_text_cont_p_tel.classList.add('tel_text')
    div_text_cont_p_tel.textContent = tel
    div_text_cont.appendChild(div_text_cont_p_tel)

    const div_text_cont_p_email = document.createElement('div')
    div_text_cont_p_email.classList.add('email_text')
    div_text_cont_p_email.textContent = email
    div_text_cont.appendChild(div_text_cont_p_email)


    div.classList.add('unit_save_cont')

    
    const bttn = document.createElement('button')
    bttn.classList.add('delete_bttn')
    bttn.onclick = function() {exec(event)}
    bttn.textContent = 'excluir'

    div.appendChild(div_initial_leter)
    div.appendChild(div_text_cont)
    div.appendChild(bttn)

    container.appendChild(div)
    

}