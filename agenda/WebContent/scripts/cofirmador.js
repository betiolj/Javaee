/**
 * Confirmação de exclusao de um contato
 * @author betiolj 
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusaõ deste contato ?")
	if(resposta === true){
		//alert(idcon)
		window.location.href="delete?idcon="+idcon
	}
}