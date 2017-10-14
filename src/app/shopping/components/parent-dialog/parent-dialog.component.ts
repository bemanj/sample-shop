import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'parent-dialog',
  templateUrl: './parent-dialog.component.html',
  styleUrls: ['./parent-dialog.component.css']
})
export class ParentDialogComponent extends DialogComponent<null, null>  {
  
    constructor(dialogService: DialogService) {
      super(dialogService);
    }
        // https://plnkr.co/edit/MB6NnzfhicMyAiMJy6YM?p=preview
        // https://www.npmjs.com/package/ng2-bootstrap-modal
    confirm() {
          this.close();
    }
}
