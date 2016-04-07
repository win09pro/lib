import React from 'react';
import AddUserStore from '../../../stores/admin/usermanage/AddUserStore';
import AddUserActions from '../../../actions/admin/usermanage/AddUserActions';

class viewuser extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddUserStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    AddUserStore.listen(this.onChange);
    AddUserActions.getById(this.props.params.id);
  }

  componentWillUnmount() {
    AddUserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    
      <div className='container'>
        <div className='row'>
          <div className='panel panel-default'>
            <div className='panel-heading'>View</div>
            <div className='panel-body'>
              <label className='control-label'>Tên đăng nhập</label>
              <p className='text-success'>{this.state.userName}</p>
              <label className='control-label'>Tên người dùng</label>
              <p className='text-success'>{this.state.firstName + " " + this.state.lastName}</p>
              <label className='control-label'>Barcode</label>
              <p className='text-success'>{this.state.barcode}</p>
              <label className='control-label'>Kiểu người dùng</label>
              <p className='text-success'>{this.state.Type}</p>
            </div>
          </div>
        </div>    
      </div>

    );
  }
}

export default viewuser;