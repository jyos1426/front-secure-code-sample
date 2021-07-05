import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
})
export class BypassSecurityComponent {
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    console.log('untrusted href', this.dangerousUrl);
    console.log('trusted href', this.trustedUrl);

    console.log('\n\n');
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + 'PUBnlbjZFAI';
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    console.log('untrusted vedio url', this.dangerousVideoUrl);
    console.log('trusted vedio url', this.videoUrl);
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/