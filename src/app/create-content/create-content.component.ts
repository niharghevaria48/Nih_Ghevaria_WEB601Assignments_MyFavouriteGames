import { Component, EventEmitter, Output , NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<any>();
  newContent = { id: 0, title: '', 
  description: '', 
  creator: '', 
  
  type: '',
   tags: [] as string[]
   };
  tags: string = '';
  error: string | undefined;
success: any;

  submitContent() {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 0);
    });

    promise.then((success) => {
      if (!this.validationOfContent (this.newContent)) {
        this.error = "fields are required to be filled";
      } else {
        
        this.newContent.tags = this.tags.split(',');
        this.contentAdded.emit(this.cloneContent(this.newContent));
        console.log(`Content successfully added: ${this.newContent.title}`);

       this.success="Content card added";
        this.clearFields();
      }
    });
  }

  private cloneContent(content: any): any {
    return { ...content };
  }

  private clearFields() {
    this.newContent = { id: 0, title: '', description: '', creator: '', type: '', tags: [] 
     };
     this.error="";
     this.success="";
  }

  validationOfContent(content: Content):boolean{
    return !!content.id && !!content.title && !!content.description && !!content.creator;
  }
}
