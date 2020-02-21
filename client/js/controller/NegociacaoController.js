class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacaoView($('#negociacoes-view'));

        this._negociacoesView._update();
    }

    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacoes());
        this._limpaForm();    
        
        console.log(this._listaNegociacoes.negociacoes)
    }

    _criaNegociacoes(){

        return new Negociacao(
            DateHelper.textoParaData(this.inputData.value),
            this.inputQuantidade.value,
            this.inputValor.value);
    }

    _limpaForm(){

        this.inputData.value = '';
        this.inputQuantidade.value = 1;
        this.inputValor.value = 0.0;

        this.inputData.focus();
    }

}