import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    routes: ScullyRoute[] = [];
    constructor(private srs: ScullyRoutesService) {
        this.srs.allRoutes$.subscribe(res => {
            this.routes = res;
        });
    }

    ngOnInit(): void {}
}
