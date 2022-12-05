import { createStore } from '@ngneat/elf';
import {
  addEntities,
  selectAllEntities,
  upsertEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { Row, RowUpdate } from '../shared/model/row.model';

export const store = createStore({ name: 'rows' }, withEntities<Row>());

export const rows$ = store.pipe(selectAllEntities());

export function addRows(rows: Row[]) {
  store.update(addEntities(rows));
}

export function upsertRows(updates: RowUpdate[]) {
  const rows = updates.map((u) => ({
    id: u.index,
    [`item${u.column}`]: u.value,
  }));
  store.update(upsertEntities(rows));
}
