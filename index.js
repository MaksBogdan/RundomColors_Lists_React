class List extends React.Component{
    render(){
        const content = this.props.children; 
        const difColor = this.props.color;
        return (
             <ul
                style = {{color: difColor}}
             >
                {content}
             </ul>
        ) 
    }
}
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {color: ''};
        this.handlerClick = this.handlerClick.bind(this);
    }
     handlerClick(){
        const rnc = Math.floor(Math.random()*16777215).toString(16);
            let randomColor = ('#' + rnc) ;
        this.setState({color: randomColor});
    }
     render(){
        return (
            <li 
              onClick = {this.handlerClick}
              style = {{
                backgroundColor: this.props.color,
                color: this.state.color
               }} 
            >
                ListItemHandler
            </li>
        );
    }
}
class App extends React.Component{
    render(){
        return (<div>
            <List color = {'#880839'}>New LIST</List>
            <ListItem color = {'lightgrey'}></ListItem>
          </div>)
    }
}


ReactDOM.render(
     <App/>,
    document.getElementById('app-root'),
);
