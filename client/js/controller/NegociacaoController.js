class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model)
        );
        this._negociacoesView = new NegociacaoView($('#negociacoes-view'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this.mensagemView = new MensagemView($('#mensagem-view'));
        this.mensagemView.update(this._mensagem);
       
    }

    adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacoes());
        
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this.mensagemView.update(this._mensagem);
        this._limpaForm();    

    }

    apaga() {

        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso!"
        this.mensagemView.update(this._mensagem);
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