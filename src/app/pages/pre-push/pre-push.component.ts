import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-pre-push',
    standalone: true,
    imports: [NavComponent, FooterComponent],
    templateUrl: './pre-push.component.html',
    styleUrl: './pre-push.component.css',
})
export class PrePushComponent { }

