import { Component, ViewChild } from '@angular/core';
import { NgxMarkdownItComponent } from 'ngx-markdown-it';

import { markmap as MarkmapView } from 'markmap-lib/dist/view';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export default class AppComponent {
  @ViewChild('ngxMarkdownIt') ngxMarkdownIt?: NgxMarkdownItComponent;
  title = 'markmap';

  markdown = `
\`\`\`mindmap
# root
## child1
  - child3
## child2
  - child3
\`\`\`
  `;

  markdownReady(): void {
    if (this.ngxMarkdownIt) {
      this.ngxMarkdownIt.element.nativeElement
        .querySelectorAll('.markmap-svg')
        .forEach((mindmap) =>
          MarkmapView(mindmap, JSON.parse(mindmap.innerHTML))
        );
    }
  }
}

