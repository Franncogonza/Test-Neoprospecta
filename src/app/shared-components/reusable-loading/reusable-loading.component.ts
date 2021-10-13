import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reusable-loading',
  templateUrl: './reusable-loading.component.html',
  styleUrls: ['./reusable-loading.component.scss']
})
export class ReusableLoadingComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Output() returnStatus = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
