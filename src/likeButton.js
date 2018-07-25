//import React from 'react';
//import ReactDOM from 'react-dom';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, data: { nome: '', sobrenome: '' } };
  }

  componentDidMount() {
    this.setState({
      data: JSON.parse(this.props.user),
    });
  }

  render() {
    const { liked } = this.state;
    return (
      <div>
        <div>
          Ola Mundo, curtido:{' '}
          {liked ? `o ${this.state.data.nome}  curtiu!` : 'Não curtiu :('}
        </div>
        <button
          title="Press-me"
          onClick={() => {
            this.setState({ liked: !liked });
          }}
        >
          Curtir
        </button>
      </div>
    );
  }
}

/* 
  Para chamar no html:

    <div id="react-root" data-feed='asd' data-user='{"nome": "jose","sobrenome": "ricardo"}' ></div>
*/

const root = document.getElementById('react-root');
ReactDOM.render(<LikeButton {...root.dataset} />, root);
