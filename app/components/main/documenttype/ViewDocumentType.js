import React from 'react';
import DocumentTypeStore from '../../../stores/admin/documenttype/DocumentTypeStore';
import DocumentTypeAction from '../../../actions/admin/documenttype/DocumentTypeAction';


class ViewDocumentType extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = DocumentTypeStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    DocumentTypeStore.listen(this.onChange);
    DocumentTypeAction.getDoc(this.props.params.id);
  }

  componentWillUnmount() {
    DocumentTypeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    

      <div className='container'>
       <div className='row flipInX animated'>
       <div className='panel panel-default'>
              <div className='panel-heading'>View Document Type</div>
                <div className='panel-body'>
                  <label className='control-label'>Name: </label><span className='text-success'> {this.state.doc.name}</span>
                  <br/>
                  <label className='control-label'>Description: </label><span className='text-success'> {this.state.doc.description}</span>
                
                </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default ViewDocumentType;