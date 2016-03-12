import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
  constructor() {
    //bindActions is a magic Alt method which binds actions to their handlers defined in the store.
    /*
    bindActions is a magic Alt method which binds actions to their handlers defined in the store. 
    For example, an action with the name foo will match an action handler method defined in the store named onFoo or just foo but not both.
     That is why for actions getTopCharactersSuccess and getTopCharactersFail defined in FooterActions.js we have corresponding store handlers called onGetTopCharactersSuccess and onGetTopCharactersFail in FooterStore.js.
     */
    this.bindActions(FooterActions);
    this.characters = ["abcd","efgh"];
  }

  onGetTopCharactersSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetTopCharactersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(FooterStore);