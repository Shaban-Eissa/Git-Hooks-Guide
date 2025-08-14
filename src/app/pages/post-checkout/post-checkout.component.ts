import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-post-checkout',
    standalone: true,
    imports: [NavComponent, FooterComponent],
    templateUrl: './post-checkout.component.html',
    styleUrl: './post-checkout.component.css',
})
export class PostCheckoutComponent { }

