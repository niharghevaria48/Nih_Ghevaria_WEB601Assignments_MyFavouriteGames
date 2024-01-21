import {Content} from './content-interface';

export class ContentList {
    private arrayItem: Content[];

    constructor() {
        this.arrayItem = [];
    }

    get content(): Content[] {
        return this.arrayItem;
    }

    add(addContent: Content): void {
        this.arrayItem.push(addContent);
    }

    numOfItem(): number {
        return this.arrayItem.length;
    }

    Output(index: number): string {
        const contentItem = this.arrayItem[index];
        var numOfItems = this.numOfItem();
        if(index < 0 || index > numOfItems) {
            const errMsg = '<p style="color: red">Index out of bound</p>';

            return `<div> ${errMsg} </div>`;
        }
        else {
            
            var title = contentItem.title;
            var description = contentItem.description;
            var imgURL = contentItem.imgURL;
            var creator = contentItem.creator;
            var type = contentItem.type;
            var tags = contentItem.tags;
            var imgTag = imgURL ? `<img src="${imgURL}" alt="${title}">` : '';
        
            return `<div> <h3>${title}</h3> <p>${description}</p> <p>Creator: ${creator}</p> ${imgTag} <p>Type: ${type}</p> <p> Tags: ${tags} </p> </div><hr/>`;

        }
    }
}