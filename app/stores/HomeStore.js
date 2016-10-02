import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.characters = [];
  }

  onGetTwoCharactersSuccess(data) {
    this.characters = data;
  }

  onGetTwoCharactersSuccess(errorMessage) {
    toastr.error(errorMessage);
  }

  onVoteFaile(errorMessge) {
    toastr.error(errorMessge);
  }
}

export default alt.createStore(HomeStore);