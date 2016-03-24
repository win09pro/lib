import alt from '../../../alt';
import AddPostActions from '../../../actions/admin/post/AddPostActions';

class AddPostStore {
  constructor() {
       this.bindActions(AddPostActions);
      this.text ='<div><span style="color: rgb(255, 153, 0);">&nbsp;<b>abace</b>  123123</span></div>';
      this.title ='';
      this.introduce='';
    }
    onUpdateContent(value)
    {
      this.text = value[0];     
    }
    onUpdateTitle(event)
    {
      this.title = event.target.value;
    }
    onUpdateIntroduce(event)
    {
      this.introduce = event.target.value;
    }
}
export default alt.createStore(AddPostStore);