import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {
  listid = null;
  itemid = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.listid = this.route.snapshot.paramMap.get('listid');
    this.itemid = this.route.snapshot.paramMap.get('itemid');
  }
}
