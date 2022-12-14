import { HasStore, InjectStore } from '@ng-state/store';
import { Row } from '../../../shared/model/row.model';

@InjectStore('rows')
export class GridStateActions extends HasStore<Array<Row>> {
  get rows() {
    return this.state;
  }
}
