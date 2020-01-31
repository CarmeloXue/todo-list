import { observable, action, flow, computed } from "mobx";
import { getListByPagination } from "../api/index";

class List {
  @observable pageIndex = 0;

  @observable pageSize = 10;

  @observable isRequesting = false;

  @computed get loading() {
    return this.isRequesting && this.list.length === 0;
  }

  @observable list = [];

  @action.bound
  clearList = () => (this.list = []);

  @action.bound
  retrieveList = flow(function*() {
    if (!this.isRequesting) {
      this.isRequesting = true;
      try {
        const repAsync = yield getListByPagination();
        if (repAsync.status === 200)
          this.list = [...this.list, ...repAsync.data];
      } catch (err) {
        console.error(err);
      } finally {
        this.isRequesting = false;
      }
    }
  });
}

export default new List();
