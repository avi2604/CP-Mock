import { Component } from "@angular/core";

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.less']
})

export class SideNavigationComponent {
    tabName: string;

    constructor() {

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.selectTab('accounts');

    }

    selectTab(tabName) {
        this.tabName = tabName;
    }
}