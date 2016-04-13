import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
  constructor() {
    this.generateActions(
      'updateOnlineUsers',
      'updateAjaxAnimation',
      'updateSearchQuery',
      'getCharacterCountSuccess',
      'getCharacterCountFail',
      'findCharacterSuccess',
      'findCharacterFail',
      'getListTranSuccess',
      'getListTranFail'
    );
  }

  findCharacter(payload) {
    $.ajax({
      url: '/api/characters/search',
      data: { name: payload.searchQuery }
    })
      .done((data) => {
        assign(payload, data);
        this.actions.findCharacterSuccess(payload);
      })
      .fail(() => {
        this.actions.findCharacterFail(payload);
      });
  }

   getListTransition() {
    $.ajax({    
      url: '/api/tran'      
    })
      .done((data) => {
        this.actions.getListTranSuccess(data);
        console.log('NavbarActions');
        console.log(data);
      })
      .fail((jqXhr) => {
        this.actions.getListTranFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(NavbarActions);