import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-html',
  templateUrl: './inner-html.component.html',
})
export class InnerHtmlComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/