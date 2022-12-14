import { Injectable } from '@angular/core';
import { RowsState, RowsStore } from '../rows.store';
import { QueryEntity } from '@datorama/akita';
import { Row } from '../../shared/model/row.model';

@Injectable({
  providedIn: 'root',
})
export class RowsQuery extends QueryEntity<RowsState, Row> {
  constructor(protected override store: RowsStore) {
    super(store);
  }
}
