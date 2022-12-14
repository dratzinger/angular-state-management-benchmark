import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Row } from '../model/row.model';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridItemComponent {
  @Input() row: Row;
}
