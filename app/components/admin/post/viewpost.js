import React from 'react';
import AddPostStore from '../../../stores/admin/post/AddPostStore';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import moment from 'moment';
import Datetime from 'react-datetime';
import HtmlToReact from 'html-to-react';

class Viewpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddPostStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount()
  {
    AddPostStore.listen(this.onChange);
    AddPostActions.getByIdView(this.props.params.id);
  }
  componentWillUnmount()
  {
    AddPostStore.unlisten(this.onChange);
  }
  onChange(state)
  {
    this.setState(state);
  }
  render()
  {
    var htmlInput = '<div>' + this.state.content +'</div>';
    var htmlToReactParser = new HtmlToReact.Parser(React);
    var reactComponent = htmlToReactParser.parse(htmlInput);

    return(
      <div className = 'container'>
        <div className= "row">
          <div className ='col-sm-3'>
          <img src={this.state.pictureURL} alt ='picture' className="img-responsive"/>
          </div>
          <div className ='col-sm-8'>
          <p style={{'float':'left'}}><i className="fa fa-calendar"></i>{moment(this.state.dateStart).format('DD-MM-YYYY H:MM')}</p>
          <div style ={{'clear':'both'}}></div>
            <h1 style={{'color':'#4d0000'}}>{this.state.title}</h1>
            <div style ={{'clear':'both'}}></div>
            <div style ={{'font-size':'1.2em','color':'blue'}}>{this.state.introduce}</div>
            <div>
            {reactComponent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Viewpost
