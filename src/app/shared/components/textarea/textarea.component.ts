import {Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'
  ]
})
export class TextareaComponent implements OnInit, OnChanges {

  @Input() title: string = '';
  @Input() inputContent: string = '';
  @Output() outputContent = new EventEmitter<string>();
  message: string;

  constructor() {}

  ngOnInit(): void {
    console.log('Textarea title: ', this.title);
    console.log('Input content: ', this.inputContent);
    this.message = this.inputContent;
    this.outputContent.subscribe( it => console.log('Output content: ', it));
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onInput(val){
    this.outputContent.emit(val.target.innerHTML);
  }

}
