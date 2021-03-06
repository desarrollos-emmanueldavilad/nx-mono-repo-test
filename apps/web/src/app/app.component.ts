import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

titulo='angular'
    constructor(
        translate: TranslateService,
        ga: Angulartics2GoogleAnalytics
    ) {
        ga.startTracking();
    }

}
